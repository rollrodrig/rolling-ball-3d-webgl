import { Scene, MeshBuilder, Mesh } from 'babylonjs';
import { LOCATION } from './Road';
class RoadPath {
	private scene: Scene;
	private ground: Mesh;
	private groundLarge: number;
	private distance: number;
	private x: number;
	private location: LOCATION;
	private negativePostion: number;
	constructor(scene: Scene, location: LOCATION) {
		this.groundLarge = 50;
		this.distance = 3;
		this.negativePostion = 3;
		this.scene = scene;
		this.x = 0;
		this.location = location;
		this.create();
	}
	private create() {
		this.ground = MeshBuilder.CreateGround(
			'ground',
			{ width: 2.9, height: this.groundLarge },
			this.scene
		);
		this.setPositionXZ();
		this.setPostionX();
	}
	private setPositionXZ() {
		this.ground.position.z = this.groundLarge / 2 - this.negativePostion;
		this.ground.position.y = -0.5;
	}
	private setPostionX() {
		if (this.location === LOCATION.L) this.x = -this.distance;
		if (this.location === LOCATION.R) this.x = this.distance;
		this.ground.position.x = this.x;
	}
}
export default RoadPath;
