import { Scene, Vector3 } from 'babylonjs';
import Enemy from '../characters/Enemy';
class MoveEnemy {
	scene: Scene;
	enemy: Enemy;
	speed: number;
	constructor(enemy: Enemy) {
		this.enemy = enemy;
		this.enemy.entity.position = new Vector3(0, 0, 43);
		this.speed = 0.01;
	}
	update(element: Enemy) {
		element.entity.position.z -= this.speed;
	}
}
export default MoveEnemy;
