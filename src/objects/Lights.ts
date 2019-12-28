import { Scene, Vector3, HemisphericLight } from 'babylonjs';
class Lights {
	light: number;
	scene: Scene;
	mainLight: HemisphericLight;
	color: Vector3;
	constructor(scene: Scene) {
		this.scene = scene;
		this.color = new Vector3(0, 1, 0);
	}
	create() {
		this.mainLight = new HemisphericLight(
			'HemiLight',
			this.color,
			this.scene
		);
	}
}
export default Lights;
