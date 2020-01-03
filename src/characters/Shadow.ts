import {
	Scene,
	MeshBuilder,
	Vector3,
	StandardMaterial,
	Color3,
} from 'babylonjs';
import Entity from './Entity';
import { degToRadians } from '../utils/degToRadians';
import Player from './Player';
class Shadow extends Entity {
	player: Player;
	mat: StandardMaterial;
	options: any;
	constructor(scene: Scene, player: Player) {
		super(scene);
		this.options = {
			radius: 0.25,
			tessellation: 24,
		};
		this.player = player;
		this.createMaterial();
		this.create();
	}
	createMaterial() {
		this.mat = new StandardMaterial('shadowMaterial', this.scene);
		this.mat.diffuseColor = Color3.FromHexString('#000000');
		this.mat.alpha = 0.1;
	}
	create() {
		const playerPosition: Vector3 = this.player.getPosition();
		this.entity = MeshBuilder.CreateDisc(
			'playerShadow',
			this.options,
			this.scene
		);
		this.entity.rotation.x = degToRadians(90);
		this.entity.position.y = 0.05;
		this.entity.material = this.mat;
		this.entity.position.x = playerPosition.x;
	}
	update(): void {
		const playerPosition: Vector3 = this.player.getPosition();
		const z: number = playerPosition.z - 0.07;
		const x: number = playerPosition.x;
		this.entity.position.z = z;
		this.entity.position.x = x;
	}
}
export default Shadow;
