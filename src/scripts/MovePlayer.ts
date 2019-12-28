import { Scene, ActionManager, ExecuteCodeAction } from 'babylonjs';
import Player from '../characters/Player';
class MovePlayer {
	private player: Player;
	private scene: Scene;
	private canMove: boolean;
	constructor(scene: Scene, player: Player) {
		this.scene = scene;
		this.player = player;
		this.canMove = true;
	}
	createAction() {
		this.scene.actionManager = new ActionManager(this.scene);
		this.scene.actionManager.registerAction(
			new ExecuteCodeAction(
				ActionManager.OnKeyDownTrigger,
				(event: any) => {
					if (this.canMove) {
						this.player.move(event);
						this.canMove = false;
					}
				}
			)
		);
		this.scene.actionManager.registerAction(
			new ExecuteCodeAction(
				ActionManager.OnKeyUpTrigger,
				(event: any) => {
					this.canMove = true;
				}
			)
		);
	}
}
export default MovePlayer;

// class MovePlayer {
// 	player: any;
// 	constructor(player: Player) {
// 		this.player = player;
// 	}
// 	update() {
// 		this.player.entity.position.x += 0.1;
// 	}
// }
// export default MovePlayer;
// this.scene.actionManager.registerAction(
// 	new ExecuteCodeAction(
// 		ActionManager.OnKeyUpTrigger,
// 		(event: any) => {
// 			this.player.move(event);
// 		}
// 	)
// );
