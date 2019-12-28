import { Scene, MeshBuilder, Vector3 } from 'babylonjs';
import Enemy from './Enemy';
export interface TDimension {
	width: number;
	height: number;
	depth: number;
}
class Wall extends Enemy {
	dimension: TDimension;
	position: Vector3;
	constructor(scene: Scene, dimension: TDimension, position: number) {
		super(scene);
		this.dimension = dimension;
		this.position = new Vector3(
			position,
			this.dimension.height / 2,
			this.dimension.depth / 2
		);
		this.create();
	}
	private create() {
		const options = { ...this.dimension };
		this.entity = MeshBuilder.CreateBox(name, options, this.scene);
		this.entity.position = this.position;
	}
	update(): void {
		// this.entity.position.z -= this.speed;
		// if (this.delete == false && this.entity.position.z < -3) {
		// 	this.delete = true;
		// }
	}
	remove(): void {
		this.entity.dispose();
		this.entity = null;
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

