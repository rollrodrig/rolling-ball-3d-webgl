import { Scene, MeshBuilder, Mesh } from 'babylonjs';
import {
	AdvancedDynamicTexture,
	Button,
	Control,
	TextBlock,
} from 'babylonjs-gui';
import Player from '../characters/Player';
import StartButton from './StartButton';
import Score from './Score';
class Ui {
	scene: Scene;
	entity: Mesh;
	player: Player;
	startButton: StartButton;
	score: Score;
	constructor(scene: Scene, player: Player) {
		this.scene = scene;
		this.player = player;
		this.startButton = new StartButton(this.scene, this.player);
		this.score = new Score(this.scene, this.player);
	}
	create() {
		this.startButton.add();
		this.score.add();
	}
}
export default Ui;
// const gui = AdvancedDynamicTexture.CreateFullscreenUI('gui');
// const button = Button.CreateSimpleButton('start', 'START');
// button.width = 0.2;
// button.height = '40px';
// button.color = 'white';
// button.background = 'green';
// button.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
// button.onPointerUpObservable.add(function() {
// 	player.setStarting();
// });
// gui.addControl(button);
// const text = new TextBlock();
// text.text = 'on development';
// text.color = 'white';
// text.fontSize = 24;
// gui.addControl(text);
