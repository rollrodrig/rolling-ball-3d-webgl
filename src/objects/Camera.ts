import { Scene, Vector3, ArcRotateCamera } from 'babylonjs';
import { degToRadians } from '../utils/degToRadians';
class Camera {
	beta: number;
	alpha: number;
	distance: number;
	scene: Scene;
	canvas: any;
	debug: boolean;
	camera: ArcRotateCamera;
	debugCamera: ArcRotateCamera;
	constructor(scene: Scene, canvas: any) {
		this.scene = scene;
		this.canvas = canvas;
		this.beta = 65; // x axis
		this.alpha = -90; // y axis
		this.distance = 20;
		this.debug = false;
	}
	create() {
		this.camera = new ArcRotateCamera(
			'Camera',
			degToRadians(this.alpha),
			degToRadians(this.beta),
			this.distance,
			new Vector3(0,0,6),
			// Vector3.Zero(),
			this.scene
		);
		// this.camera.upperBetaLimit = degToRadians(this.beta + 5);
		// this.camera.lowerBetaLimit = degToRadians(this.beta - 10);
		// this.camera.upperAlphaLimit = degToRadians(this.alpha + 20);
		// this.camera.lowerAlphaLimit = degToRadians(this.alpha - 20);
		// this.camera.lowerRadiusLimit = 3.5;
		// this.camera.upperRadiusLimit = 5;
		this.camera.attachControl(this.canvas, true);
	}
	getActiveCamera() {
		return this.camera;
	}
	setDebugCamera() {
		this.debugCamera = new ArcRotateCamera(
			'Camera',
			degToRadians(this.alpha),
			degToRadians(this.beta),
			10,
			Vector3.Zero(),
			this.scene
		);
		this.debugCamera.attachControl(this.canvas, true);
		this.scene.activeCamera = this.debugCamera;
	}
}
export default Camera;
