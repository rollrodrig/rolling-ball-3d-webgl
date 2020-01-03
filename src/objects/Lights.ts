import {
	Scene,
	Vector3,
	HemisphericLight,
	DirectionalLight,
	Color3,
} from 'babylonjs';
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
		this.hemispheric.intensity = 1;
		this.hemispheric.specular = Color3.Black();
		this.hemispheric.groundColor = new BABYLON.Color3(
			230 / 255,
			230 / 255,
			230 / 255
		);
		this.directional = new DirectionalLight(
			'directional',
			new Vector3(0, 0, 1),
			this.scene
		);
		this.directional.intensity = 0.15;
		this.directional.specular = Color3.Black();
	}
}
export default Lights;
