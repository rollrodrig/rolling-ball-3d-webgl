import { Scene, MeshBuilder, Mesh } from 'babylonjs';
import {
	AdvancedDynamicTexture,
	Button,
	Control,
	TextBlock,
} from 'babylonjs-gui';
import Player from '../characters/Player';
class Ui {
	scene: Scene;
	entity: Mesh;
	player: Player;
	constructor(scene: Scene, player: Player) {
		this.scene = scene;
		this.player = player;
	}
	create() {
		const gui = AdvancedDynamicTexture.CreateFullscreenUI('gui');
		const button = Button.CreateSimpleButton('start', 'START');
		button.width = 0.2;
		button.height = '40px';
		button.color = 'white';
		button.background = 'green';
		button.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
		button.onPointerUpObservable.add(() => {
			this.player.setStarting();
		});
		gui.addControl(button);
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
