import {
	Scene,
	Engine,
	Color3,
	Color4,
	Vector3,
	HemisphericLight,
	ArcRotateCamera,
	MeshBuilder,
	Mesh,
	ActionManager,
	ExecuteCodeAction,
} from 'babylonjs';
import Player from './characters/Player';
import MovePlayer from './scripts/MovePlayer';
import Camera from './objects/Camera';
import Lights from './objects/Lights';
import Road from './objects/Road';
import Enemies from './controllers/Enemies';
import Wall from './objects/Wall';
import { random } from './utils/random';
import { STEP } from './storages/constants';
const canvas: any = document.getElementById('canvas');
const engine = new Engine(canvas, true);
const createScene = function() {
	const scene: Scene = new Scene(engine);
	const lights: Lights = new Lights(scene);
	const player: Player = new Player(scene, 'player');
	const camera = new Camera(scene, canvas);
	const movePlayer: MovePlayer = new MovePlayer(scene, player);
	const road = new Road(scene);
	const wall = new Wall(scene);
	scene.clearColor = new Color4(255 / 255, 255 / 255, 248 / 255);
	lights.create();
	camera.create();
	// camera.setDebugCamera();
	movePlayer.createAction();
	road.create();
	wall.create();
	scene.registerBeforeRender(() => {
		player.update();
		camera.update();
	});
	return scene;
};
const scene = createScene();
engine.runRenderLoop(() => {
	scene.render();
});
// setInterval(() => {
// 	enemyController.addMinion();
// }, 1000);
// console.log(enemyController.enemies);
// listeKeyEvents();
// enemyController.update();
// window.dispatchEvent(event);
// window.addEventListener(
// 	'update',
// 	() => {
// 		console.log('update event');
// 	},
// 	false
// );
// 	console.log(scene.meshes.length);
// 	console.log(scene.materials.length);
// const movePlayer = new MovePlayer(player);
// scene.onPointerDown = function () {
//     console.log("click")
// };
// scene.actionManager.registerAction(
// 	new ExecuteCodeAction(ActionManager.OnKeyDownTrigger, (evt: any) => {
// 		// map[evt.sourceEvent.key] = evt.sourceEvent.type == 'keydown';
// 		player.move(evt.sourceEvent.key);
// 	})
// );
// function listeKeyEvents() {
// 	if (map['a'] || map['A']) {
// 		player.moveLeft();
// 	}
// 	if (map['d'] || map['D']) {
// 		player.moveRight();
// 	}
// }
// const p1 = {
// 	position: -3,
// 	type: 'minion',
// };
// const p2 = {
// 	position: 0,
// 	type: 'minion',
// };
// enemyController.addMinionAt(p1);
// enemyController.addMinionAt(p2);
// setInterval(() => {
// 	console.log('AXXXX');
// 	// console.log(scene.meshes);
// 	enemyController.addMinion();
// }, 1000);
// scene.onBeforeRenderObservable.addOnce(() => {
// 	console.log("AAA");
// });

// const b1 = MeshBuilder.CreateBox('b1', {}, scene);
// b1.position.x = -3;
// b1.position.z = 8;
// b1.onBeforeRenderObservable.add(()=>{
// 	b1.position.z -= 0.05;
// });

// const b2 = MeshBuilder.CreateBox('b1', {}, scene);
// b2.position.x = 0;
// b2.position.z = 8;
// b2.onBeforeRenderObservable.add(()=>{
// 	b2.position.z -= 0.05;
// });
// setTimeout(()=>{
// 	b1.dispose();
// },2000)
// setInterval(()=>{
// 	createBox(random(-3, 3), scene);
// })
// function createBox(p:any, scene: any) {
// 	const b1 = MeshBuilder.CreateBox('b1', {}, scene);
// 	b1.position.x = p;
// 	b1.position.z = 8;
// 	b1.onBeforeRenderObservable.add(()=>{
// 		b1.position.z -= 0.05;
// 	});
// 	setTimeout(()=>{
// 		b1.dispose();
// 	}, Math.random()*5000)
// }
