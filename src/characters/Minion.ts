import { Scene, MeshBuilder, Vector3 } from 'babylonjs';
import Enemy from './Enemy';
class Minion extends Enemy {
	speed: number;
	defaultInitialPosition: Vector3;
	constructor(scene: Scene, position: Vector3) {
		super(scene);
		this.defaultInitialPosition = position;
		this.speed = 0.05;
		this.create();
	}
	private create() {
		this.entity = MeshBuilder.CreateBox(name, {}, this.scene);
		this.entity.position = this.defaultInitialPosition;
	}
	update(): void {
		this.entity.position.z -= this.speed;
		if (this.delete == false && this.entity.position.z < -3) {
			this.delete = true;
		}
	}
	remove(): void {
		this.entity.dispose();
		this.entity = null;
	}
}
export default Minion;

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

