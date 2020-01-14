import { Scene, MeshBuilder, Mesh } from 'babylonjs';
import {
	AdvancedDynamicTexture,
	Button,
	Control,
	TextBlock,
} from 'babylonjs-gui';
import Player from '../characters/Player';
import { windowWidth, windowHeight } from '../storages/constants';
class Score {
	scene: Scene;
	entity: Mesh;
	player: Player;
	score: number;
	points: number;
	gui: AdvancedDynamicTexture;
	scoreText: TextBlock;
	scoreTextShadow: TextBlock;
	scoreTextPosition: any;
	constructor(scene: Scene, player: Player, gui: AdvancedDynamicTexture) {
		this.scene = scene;
		this.player = player;
		this.score = 0;
		this.points = 10;
		this.gui = gui;
		this.scoreTextPosition = {
			x: -(windowWidth / 2 - 150),
			y: -(windowHeight / 2 - 100),
		};
		console.log(Control.HORIZONTAL_ALIGNMENT_LEFT);
		console.log(Control.HORIZONTAL_ALIGNMENT_RIGHT);
		console.log(Control.HORIZONTAL_ALIGNMENT_CENTER);
		this.createText();
		this.createShadow();
	}
	createText() {
		this.scoreText = new TextBlock();
		this.scoreText.text = this.score.toString();
		this.scoreText.color = 'white';
		this.scoreText.fontSize = 100;
		this.scoreText.fontFamily = 'Oswald';
		this.scoreText.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
		this.scoreText.left = this.scoreTextPosition.x;
		this.scoreText.top = this.scoreTextPosition.y;
	}
	createShadow() {
		this.scoreTextShadow = new TextBlock();
		this.scoreTextShadow.text = this.score.toString();
		this.scoreTextShadow.color = 'black';
		this.scoreTextShadow.fontSize = 100;
		this.scoreTextShadow.fontFamily = 'Oswald';
		this.scoreTextShadow.horizontalAlignment =
			Control.HORIZONTAL_ALIGNMENT_LEFT;
		// offset shadow
		this.scoreTextShadow.left = this.scoreTextPosition.x + 2;
		this.scoreTextShadow.top = this.scoreTextPosition.y + 2;
		this.scoreTextShadow.alpha = 0.3;
	}
	add() {
		this.gui.addControl(this.scoreTextShadow);
		this.gui.addControl(this.scoreText);
	}
	addScorePoints() {
		this.score += this.points;
		this.scoreText.text = this.score.toString();
		this.scoreTextShadow.text = this.score.toString();
	}
	startCotinueScoreAt(currentScore: number) {
		this.score = currentScore;
	}
	resetScore() {
		this.score = 0;
	}
}
export default Score;
