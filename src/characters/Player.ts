import {
	Scene,
	MeshBuilder,
	Mesh,
	Vector3,
	ActionManager,
	ExecuteCodeAction,
	StandardMaterial,
	Color3,
} from 'babylonjs';
import { STEP, PLAYER_SPEED, TRANSLATION_SPEED } from '../storages/constants';
import Entity from './Entity';
import Shadow from './Shadow';
import { ROAD, TRoad } from '../storages/road';
interface TPlayerState {
	IDDLE: number;
	STARTING: number;
	RUNNING: number;
	FINISHING: number;
	DEATH: number;
	DYING: number;
}
class Player extends Entity {
	xPositionValue: number;
	speed: number;
	maxSpeed: number;
	translateSpeed: number;
	limit: number;
	moveTo: boolean;
	shadow: Shadow;
	finishZPosition: number;
	winner: boolean;
	aceleration: number;
	deaceleration: number;
	playerState: TPlayerState;
	state: number;
	private alive: boolean;
	constructor(scene: Scene, name: string) {
		super(scene);
		this.entity = MeshBuilder.CreateSphere(
			name,
			{ segments: 12, diameter: 0.5 },
			scene
		);
		this.playerState = {
			IDDLE: 1,
			STARTING: 2,
			RUNNING: 3,
			FINISHING: 4,
			DEATH: 5,
			DYING: 6,
		};
		this.xPositionValue = STEP;
		this.entity.position.y = 0.25;
		this.speed = 0;
		this.maxSpeed = PLAYER_SPEED;
		this.limit = STEP;
		this.translateSpeed = TRANSLATION_SPEED;
		this.moveTo = null;
		this.alive = true;
		this.winner = false;
		this.aceleration = 0.01;
		this.deaceleration = 0.005;
		this.setIddle();
		this.getEndPositionZ();
		this.setInitialPosition();
		this.listeKeyAction();
		this.addShadow();
	}
	getEndPositionZ() {
		const lastRoad: TRoad = ROAD[ROAD.length - 1];
		this.finishZPosition = lastRoad.z + (lastRoad.l - 10);
	}
	addShadow() {
		this.shadow = new Shadow(this.scene, this);
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
	getPosition(): Vector3 {
		return this.entity.getAbsolutePosition();
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
	isAlive() {
		return this.alive;
	}
	isWinner() {
		return this.winner;
	}
	update(): void {
		// In those if group only modify the speed
		if (this.state === this.playerState.RUNNING) {
			this.running();
		} else if (this.state === this.playerState.STARTING) {
			this.starting();
		} else if (this.state === this.playerState.FINISHING) {
			this.finishing();
		} else if (this.state === this.playerState.DYING) {
			this.dying();
		} else if (this.state === this.playerState.DEATH) {
			this.death();
		} else {
			this.iddle();
		}
		this.updatePlayer();
	}
	starting() {
		if (this.speed < this.maxSpeed) {
			this.speed += this.aceleration;
		} else {
			this.state = this.playerState.RUNNING;
		}
	}
	running() {
		if (this.speed != this.maxSpeed) {
			this.speed = this.maxSpeed;
		}
		this.checkFinishLine();
	}
	finishing() {
		if (this.speed >= 0) {
			this.speed -= this.deaceleration;
		} else {
			this.state = this.playerState.IDDLE;
		}
	}
	dying() {
		if (this.speed != 0) {
			this.speed = 0;
		}
	}
	death() {
		if (this.speed != 0) {
			this.speed = 0;
		}
	}
	iddle() {
		if (this.speed != 0) {
			this.speed = 0;
		}
	}
	updatePlayer() {
		this.entity.position.z += this.speed;
		this.moveLeft();
		this.moveRight();
		this.shadow.update();
	}
	checkFinishLine() {
		if (this.entity.position.z > this.finishZPosition) {
			this.state = this.playerState.FINISHING;
		}
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
	setIddle() {
		this.state = this.playerState.IDDLE;
	}
	setStarting() {
		this.state = this.playerState.STARTING;
	}
	setRunning() {
		this.state = this.playerState.RUNNING;
	}
	setFinishing() {
		this.state = this.playerState.FINISHING;
	}
	setDeath() {
		this.state = this.playerState.DEATH;
	}
	setDying() {
		this.state = this.playerState.DYING;
	}
	isRunning() {
		return this.state === this.playerState.RUNNING;
	}
	isMoving() {
		return (
			this.state === this.playerState.RUNNING ||
			this.state === this.playerState.STARTING ||
			this.state === this.playerState.FINISHING
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
