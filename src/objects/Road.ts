import {
	Scene,
	MeshBuilder,
	Mesh,
	Vector3,
	StandardMaterial,
	Color3,
} from 'babylonjs';
import { STEP } from '../storages/constants';
import { ROAD, TRoad } from '../storages/road';
class Road {
	private scene: Scene;
	entity: Mesh;
	xPositionValue: number = STEP;
	constructor(scene: Scene) {
		this.scene = scene;
	}
	create() {
		ROAD.map((data: TRoad) => {
			this.add(data);
		});
	}
	add(data: TRoad) {
		const mat = new StandardMaterial('mat', this.scene);
		mat.diffuseColor = Color3.FromHexString('#FFFFD8');
		const options = {
			width: this.xPositionValue * 2,
			height: 30,
			depth: data.l,
		};
		const xPosition = this.xPositionValue * data.x;
		const position = new Vector3(
			xPosition,
			-(options.height / 2),
			options.depth / 2 + data.z
		);
		this.entity = MeshBuilder.CreateBox('road', options, this.scene);
		this.entity.position = position;
		this.entity.material = mat;
	}
}
export default Road;
// const osbtacle = MeshBuilder.CreateBox('road', { depth: 8 }, this.scene);
// osbtacle.position.x = -this.xPositionValue;
// osbtacle.position.y = 0.5;
// osbtacle.position.z = 5;
