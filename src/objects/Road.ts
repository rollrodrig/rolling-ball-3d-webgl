import { Scene } from 'babylonjs';
import RoadPath from './RoadPath';
export enum LOCATION {
	L = 'L',
	C = 'C',
	R = 'R',
}
class Road {
	roads: RoadPath[];
	private scene: Scene;
	constructor(scene: Scene) {
		this.scene = scene;
		this.roads = [];
	}
	create() {
		this.roads.push(new RoadPath(this.scene, LOCATION.L));
		this.roads.push(new RoadPath(this.scene, LOCATION.C));
		this.roads.push(new RoadPath(this.scene, LOCATION.R));
	}
}
export default Road;
