import {
	Scene,
	MeshBuilder,
	Vector3,
	ActionManager,
	ExecuteCodeAction,
} from 'babylonjs';
import { STEP, PLAYER_SPEED, TRANSLATION_SPEED } from '../storages/constants';
import Entity from './Entity';
class Player extends Entity {
	xPositionValue: number;
	speed: number;
	translateSpeed: number;
	limit: number;
	moveTo: boolean;
	private alive: boolean;
	private death: boolean;
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
		this.translateSpeed = TRANSLATION_SPEED;
		this.moveTo = null;
		this.alive = true;
		this.death = false;
		this.setInitialPosition();
		this.listeKeyAction();
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
	die() {
		this.alive = false;
		this.death = true;
	}
	isAlive() {
		return this.alive;
	}
	isDeath() {
		return this.death;
	}
	update(): void {
		this.entity.position.z += this.speed;
		this.moveLeft();
		this.moveRight();
	}
	listeKeyAction() {
		this.scene.actionManager = new ActionManager(this.scene);
		this.scene.actionManager.registerAction(
			new ExecuteCodeAction(
				ActionManager.OnKeyDownTrigger,
				this.move.bind(this)
			)
		);
	}
}
export default Player;
// this.scene.actionManager.registerAction(
// 	new ExecuteCodeAction(
// 		ActionManager.OnKeyUpTrigger,
// 		(event: any) => {
// 			this.canMove = true;
// 		}
// 	)
// );
