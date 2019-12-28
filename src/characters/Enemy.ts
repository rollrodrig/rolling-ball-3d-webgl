import { Scene, MeshBuilder, Mesh } from 'babylonjs';
import Entity from './Entity';
abstract class Enemy extends Entity {
	delete: boolean;
	constructor(scene: Scene) {
		super(scene);
		this.delete = false;
	}
	abstract update(): void;
	abstract remove(): void;
}
export default Enemy;
