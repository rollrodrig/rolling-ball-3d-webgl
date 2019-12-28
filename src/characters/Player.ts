import { Scene, MeshBuilder } from 'babylonjs';
import Entity from './Entity';
class Player extends Entity {
	step = 2;
	constructor(scene: Scene, name: string) {
		super(scene);
		this.entity = MeshBuilder.CreateSphere(name, {}, scene);
		this.moveLeft();
	}
	move(event: any) {
		const k = event.sourceEvent.key;
		if (k === 'a' || k === 'A') this.moveLeft();
		if (k === 'd' || k === 'D') this.moveRight();
	}
	moveLeft() {
		this.entity.position.x = -this.step
	}
	moveRight() {
		this.entity.position.x = this.step
	}
	update(): void {
	}
}
export default Player;
