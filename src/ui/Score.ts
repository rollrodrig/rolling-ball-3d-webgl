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
	points: number;
	gui: AdvancedDynamicTexture;
	scoreText: TextBlock;
	scoreTextShadow: TextBlock;
	constructor(scene: Scene, player: Player, gui: AdvancedDynamicTexture) {
		this.scene = scene;
		this.player = player;
		this.score = 0;
		this.points = 10;
		this.gui = gui;
		this.createText();
		this.createShadow();
	}
	createText() {
		this.scoreText = new TextBlock();
		this.scoreText.text = this.score.toString();
		this.scoreText.color = 'white';
		this.scoreText.fontSize = 100;
		this.scoreText.fontFamily = 'Oswald';
		this.scoreText.left = 0;
		this.scoreText.top = 0;
	}
	createShadow() {
		this.scoreTextShadow = new TextBlock();
		this.scoreTextShadow.text = this.score.toString();
		this.scoreTextShadow.color = 'black';
		this.scoreTextShadow.fontSize = 100;
		this.scoreTextShadow.fontFamily = 'Oswald';
		this.scoreTextShadow.left = 2;
		this.scoreTextShadow.top = 2;
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
