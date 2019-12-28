import { Scene, MeshBuilder, Vector3 } from 'babylonjs';
import { STEP } from '../storages/constants';
import Entity from './Entity';
class Player extends Entity {
	xPositionValue = STEP;
	constructor(scene: Scene, name: string) {
		super(scene);
		this.entity = MeshBuilder.CreateSphere(name, { diameter: 0.5 }, scene);
		this.entity.position.y = 0.25;
		this.moveLeft();
		// this.entity.position = new Vector3(0, 0.25, 0);
	}
	move(event: any) {
		const k = event.sourceEvent.key;
		if (k === 'a' || k === 'A') this.moveLeft();
		if (k === 'd' || k === 'D') this.moveRight();
	}
	moveLeft() {
		this.entity.position.x = -this.xPositionValue;
	}
	moveRight() {
		this.entity.position.x = this.xPositionValue;
	}
	update(): void {
	}
}
export default Player;
