import { Scene, MeshBuilder, Mesh } from 'babylonjs';
import {
	AdvancedDynamicTexture,
	Button,
	Control,
	TextBlock,
} from 'babylonjs-gui';
import Player from '../characters/Player';
class Score {
	scene: Scene;
	entity: Mesh;
	player: Player;
	score: number;
	constructor(scene: Scene, player: Player) {
		this.scene = scene;
		this.player = player;
		this.score = 0;
	}
	add() {
		const gui: AdvancedDynamicTexture = AdvancedDynamicTexture.CreateFullscreenUI(
			'score'
		);
		const text = new TextBlock();
		text.text = this.score.toString();
		text.color = 'white';
		text.fontSize = 24;
		gui.addControl(text);
	}
}
export default Score;
