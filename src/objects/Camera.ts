import { Scene, Vector3, ArcRotateCamera } from 'babylonjs';
import { degToRadians } from '../utils/degToRadians';
import Player from '../characters/Player';
class Camera {
	xPivot: number;
	yPivot: number;
	distance: number;
	scene: Scene;
	canvas: any;
	debug: boolean;
	camera: ArcRotateCamera;
	debugCamera: ArcRotateCamera;
	target: Player;
	constructor(scene: Scene, canvas: any) {
		this.scene = scene;
		this.canvas = canvas;
		this.xPivot = 65; // x axis
		this.yPivot = -90; // y axis
		this.distance = 20;
		this.debug = false;
		this.target = null;
	}
	setTarget(target: Player) {
		this.target = target;
	}
	create() {
		this.camera = new ArcRotateCamera(
			'Camera',
			degToRadians(this.yPivot),
			degToRadians(this.xPivot),
			this.distance,
			new Vector3(0, 0, 6),
			// Vector3.Zero(),
			this.scene
		);
		this.camera.upperBetaLimit = degToRadians(this.xPivot + 20);
		// this.camera.lowerBetaLimit = degToRadians(this.xPivot - 10);
		this.camera.upperAlphaLimit = degToRadians(this.yPivot + 40);
		this.camera.lowerAlphaLimit = degToRadians(this.yPivot - 40);
		this.camera.lowerRadiusLimit = 10;
		this.camera.upperRadiusLimit = 35;
		this.camera.attachControl(this.canvas, true);
	}
	getActiveCamera() {
		return this.camera;
	}
	setDebugCamera() {
		this.debugCamera = new ArcRotateCamera(
			'Camera',
			degToRadians(this.yPivot),
			degToRadians(this.xPivot),
			10,
			Vector3.Zero(),
			this.scene
		);
		this.debugCamera.attachControl(this.canvas, true);
		this.scene.activeCamera = this.debugCamera;
	}
	update() {
		this.camera.position.z += 0.05;
		const position: Vector3 = this.camera.getTarget();
		position.z += 0.05;
		this.camera.setTarget(position);
	}
}
export default Camera;
// this.camera = new FollowCamera(
// 	'Camera',
// 	new Vector3(0, 0, 0),
// 	this.scene
// );
// this.camera.lockedTarget = this.target.entity;
// this.camera.heightOffset = 10;
// this.camera.rotationOffset = 180;
// this.camera.radius = this.distance;
