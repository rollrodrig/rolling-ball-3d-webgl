import {
	Scene,
	MeshBuilder,
	Mesh,
	Vector3,
	StandardMaterial,
	Color3,
} from 'babylonjs';
import Player from '../characters/Player';
import { degToRadians } from '../utils/degToRadians';
import { ROAD, TRoad } from '../storages/road';
class FinishLine {
	private scene: Scene;
	entity: Mesh;
	player: Player;
	constructor(scene: Scene, player: Player) {
		this.scene = scene;
		this.player = player;
	}
	create() {
		const mat = new StandardMaterial('mat', this.scene);
		mat.diffuseColor = Color3.FromHexString('#957DAD');
		const options = {
			diameter: 3.2,
			thickness: 0.7,
		};
		this.entity = MeshBuilder.CreateTorus(
			'finishLine',
			options,
			this.scene
		);
		const lastRoad: TRoad = ROAD[ROAD.length - 1];
		this.entity.position.z = lastRoad.z + (lastRoad.l - 10);
		this.entity.rotation.x = degToRadians(90);
		this.entity.material = mat;
	}
	update() {
		// const l = this.walls.length;
		// for (let i = 0; i < l; i++) {
		// 	const current = this.walls[i];
		// 	if (current.intersectsMesh(this.player.entity, false)) {
		// 		this.player.die();
		// 		break;
		// 	}
		// }
	}
}
export default FinishLine;
