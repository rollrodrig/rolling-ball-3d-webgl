import { Scene, MeshBuilder, Mesh, Vector3 } from 'babylonjs';
import { STEP } from '../storages/constants';
import { WALL, TWall } from '../storages/walls';
class Wall {
	private scene: Scene;
	entity: Mesh;
	xPositionValue: number = STEP;
	constructor(scene: Scene) {
		this.scene = scene;
	}
	create() {
		WALL.map((data: TWall) => {
			this.addRoad(data);
		});
	}
	addRoad(data: TWall) {
		const options = {
			width: 1,
			height: 1,
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
