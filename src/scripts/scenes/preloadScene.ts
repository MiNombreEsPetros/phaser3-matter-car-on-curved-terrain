/**
 * This is what the file-loader does
 * [file-loader] Emits the file into the output folder and returns the (relative) URL
 */
import textureAtlasUrl from '../../assets/textureAtlas.json'

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    // this.load.image('tile', 'assets/img/tile.png')
    // this.load.image('gas', 'assets/img/gas.png')
    // this.load.image('car', 'assets/img/car-small.png')
    // this.load.image('wheel', 'assets/img/wheel-small.png')
    // this.load.image('restart', 'assets/img/restart-btn.png')
    // this.load.image('wholes-small', 'assets/img/wholes-small.png')
    // this.load.image('grass', 'assets/img/grass.png')
    // this.load.image('background', 'assets/img/background.png')
    this.load.multiatlas('atlas', `${textureAtlasUrl}`, 'assets')
  }

  create() {
    this.scene.start('BackgroundScene')
    this.scene.start('MainScene')
    this.scene.start('GuiScene')
  }
}
