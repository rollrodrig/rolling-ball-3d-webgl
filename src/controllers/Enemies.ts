import { Scene, Vector3 } from 'babylonjs';
import Wall from '../characters/Wall';
import Controller from './Controller';
import Enemy from '../characters/Enemy';
import {
	INITIAL_X_POSITION_ENEMIES,
	ENEMIES_DATA,
	ENEMIES,
	TEnemyData,
} from '../storages/constants';
class Enemies extends Controller {
	enemies: Enemy[];
	event: Event;
	timer: number;
	currentEnemyData: TEnemyData;
	enemyIndex: number;
	enemyIndexLimit: number;
	constructor(scene: Scene) {
		super(scene);
		this.enemies = [];
		this.timer = 0;
		this.enemyIndex = 0;
		this.enemyIndexLimit = ENEMIES_DATA.length - 1;
		this.currentEnemyData = ENEMIES_DATA[0];
	}
	private getInstance(): Enemy {
		let instance: Enemy;
		const position = new Vector3(this.currentEnemyData.position, 0, 15);
		if (this.currentEnemyData.type == ENEMIES.Minion) {
			instance = new Wall(this.scene, position);
		}
		return instance;
	}
	addMinion() {
		this.timer++;
		if (
			this.timer > this.currentEnemyData.time &&
			this.enemyIndex < this.enemyIndexLimit
		) {
			const enemy = this.getInstance();
			this.enemies.push(enemy);
			this.enemyIndex++;
			this.currentEnemyData = ENEMIES_DATA[this.enemyIndex];
		}
	}
	addMinionAt(data: TEnemyData) {
		this.currentEnemyData = data;
		const enemy = this.getInstance();
		this.enemies.push(enemy);
	}
	update() {
		const l = this.enemies.length - 1;
		for (let i = l; i >= 0; i--) {
			const currentEnemy: Enemy = this.enemies[i];
			if (currentEnemy.delete) {
				currentEnemy.remove();
				this.enemies.splice(i, 1);
			} else {
				currentEnemy.update();
			}
		}
	}
}
export default Enemies;
