import { Scene, MeshBuilder, Mesh } from 'babylonjs';
import O from '../objects/O';
abstract class Entity extends O {
	scene: Scene;
	entity: Mesh;
	constructor(scene: Scene) {
		super();
		this.scene = scene;
	}
	abstract update(): void;
}
export default Entity;
