import { Scene, MeshBuilder, Vector3 } from 'babylonjs';
import { STEP, PLAYER_SPEED, TRANSLATION_SPEED } from '../storages/constants';
import Entity from './Entity';
class Player extends Entity {
	xPositionValue: number;
	speed: number;
	translateSpeed: number;
	limit: number;
	moveTo: boolean;
	constructor(scene: Scene, name: string) {
		super(scene);
		this.entity = MeshBuilder.CreateSphere(
			name,
			{ segments: 12, diameter: 0.5 },
			scene
		);
		this.xPositionValue = STEP;
		this.entity.position.y = 0.25;
		this.speed = PLAYER_SPEED;
		this.limit = STEP;
		this.translateSpeed = PLAYER_SPEED;
		this.moveTo = null;
		this.setInitialPosition();

		// this.entity.position = new Vector3(0, 0.25, 0);
	}
	move(event: any) {
		const k = event.sourceEvent.key;
		if (k === 'a' || k === 'A') {
			this.moveTo = false;
		}
		if (k === 'd' || k === 'D') {
			this.moveTo = true;
		}
	}
	setInitialPosition() {
		this.entity.position.x = -this.xPositionValue;
	}
	moveLeft() {
		if (this.moveTo === false) {
			if (this.entity.position.x > -this.limit) {
				this.entity.position.x -= this.translateSpeed;
			} else {
				this.moveTo = null;
			}
		}
	}
	moveRight() {
		if (this.moveTo === true) {
			if (this.entity.position.x < this.limit) {
				this.entity.position.x += this.translateSpeed;
			} else {
				this.moveTo = null;
			}
		}
	}
	update(): void {
		this.entity.position.z += this.speed;
		this.moveLeft();
		this.moveRight();
	}
}
export default Player;
