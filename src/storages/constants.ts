export const STEP = 1;
export interface TInitialXPostionEnemies {
	Left: number;
	Center: number;
	Right: number;
}
export const INITIAL_X_POSITION_ENEMIES: TInitialXPostionEnemies = {
	Left: -3,
	Center: 0,
	Right: 3,
};
export interface TEnemies {
	Minion: string;
}
export const ENEMIES: TEnemies = {
	Minion: 'minion',
};
export interface TEnemyData {
	position: number;
	type: string;
	time: number;
}
const TIME = 100;
export const ENEMIES_DATA: TEnemyData[] = [
	{
		position: INITIAL_X_POSITION_ENEMIES.Left,
		type: ENEMIES.Minion,
		time: 1 * TIME,
	},
	{
		position: INITIAL_X_POSITION_ENEMIES.Right,
		type: ENEMIES.Minion,
		time: 2 * TIME,
	},
	{
		position: INITIAL_X_POSITION_ENEMIES.Center,
		type: ENEMIES.Minion,
		time: 3 * TIME,
	},
	{
		position: INITIAL_X_POSITION_ENEMIES.Right,
		type: ENEMIES.Minion,
		time: 4 * TIME,
	},
	{
		position: INITIAL_X_POSITION_ENEMIES.Left,
		type: ENEMIES.Minion,
		time: 5 * TIME,
	},
];
