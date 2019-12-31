import { Scene, Vector3, HemisphericLight, DirectionalLight } from 'babylonjs';
class Lights {
	light: number;
	scene: Scene;
	hemispheric: HemisphericLight;
	directional: DirectionalLight;
	color: Vector3;
	constructor(scene: Scene) {
		this.scene = scene;
		this.color = new Vector3(0, 1, 0);
	}
	create() {
		this.hemispheric = new HemisphericLight(
			'hemispheric',
			this.color,
			this.scene
		);
		this.hemispheric.intensity = 0.6;
		this.directional = new DirectionalLight(
			'directional',
			new Vector3(-0.5, -0.7, 0.8),
			this.scene
		);
		this.directional.intensity = 0.7;

		// const directional2 = new DirectionalLight(
		// 	'directional',
		// 	new Vector3(0.5, -0.7, 0.8),
		// 	this.scene
		// );
		// directional2.intensity = 0.7;
	}
}
export default Lights;
