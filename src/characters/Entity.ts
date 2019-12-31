import { Scene, MeshBuilder, Mesh } from 'babylonjs';
abstract class Entity {
	scene: Scene;
	entity: Mesh;
	constructor(scene: Scene) {
		this.scene = scene;
	}
	abstract update(): void;
}
export default Entity;
