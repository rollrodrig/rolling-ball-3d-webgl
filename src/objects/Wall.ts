import {
	Scene,
	MeshBuilder,
	Mesh,
	Vector3,
	StandardMaterial,
	Color3,
} from 'babylonjs';
import { STEP } from '../storages/constants';
import { WALL, TWall } from '../storages/walls';
import Player from '../characters/Player';
class Wall {
	private scene: Scene;
	entity: Mesh;
	xPositionValue: number = STEP;
	walls: Mesh[];
	player: Player;
	constructor(scene: Scene) {
		this.scene = scene;
		this.walls = [];
	}
	create() {
		WALL.map((data: TWall) => {
			this.add(data);
		});
	}
	setPlayer(player: Player) {
		this.player = player;
	}
	add(data: TWall) {
		const mat = new StandardMaterial('mat', this.scene);
		mat.diffuseColor = Color3.FromHexString('#D3EEFF');
		const options = {
			width: 1.2,
			height: 0.7,
			depth: data.l,
		};
		const xPosition = this.xPositionValue * data.x;
		const position = new Vector3(
			xPosition,
			options.height / 2,
			options.depth / 2 + data.z
		);
		this.entity = MeshBuilder.CreateBox('wall', options, this.scene);
		this.entity.position = position;
		this.entity.material = mat;
		this.walls.push(this.entity);
	}
	checkCollision() {
		const l = this.walls.length;
		for (let i = 0; i < l; i++) {
			const current = this.walls[i];
			if (current.intersectsMesh(this.player.entity, false)) {
				this.player.die();
				break;
			}
		}
	}
}
export default Wall;

// this.entity.onBeforeRenderObservable.add(this.update.bind(this));
// this.entity.onBeforeRenderObservable.add(() => {
// 	if (this.entity.position.z < -3) {
// 		this.entity.dispose();
// 	} else {
// 		this.entity.position.z -= this.speed;
// 	}
// });
// setTimeout(() => {
// 	this.entity.dispose();
// }, Math.random() * 5000);
// updateOnce(): void {
// 	console.log("updateOnce");
// }
// var eee: any = this.entity.onBeforeRenderObservable.add(() => {
// 	console.log("onBeforeRenderObservable 3");
// 	// this.update();
// });
// eee.remove();
// this.entity.registerBeforeRender(() => {
// 	// console.log("registerBeforeRender");
// 	// this.update();
// });
// this.entity.onBeforeRenderObservable.addOnce(() => {
// 	this.updateOnce();
// });
