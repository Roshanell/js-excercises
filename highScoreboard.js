// Create a new high score board

function createScoreboard() {
	let scoreBoard = {
		TheBestEver: 10000000,
	};
	return scoreBoard;
}
// 2. Add players to a score board

function addPlayer(scoreBoard, player, score) {
	scoreBoard[player] = score;
	return scoreBoard;
}

// 3. Remove players from a score board
function removePlayer(scoreBoard, player) {
	delete scoreBoard[player];
	return scoreBoard;
}
// 4. Increase a player's scoer
function increaseScore(scoreBoard, player, addedScore) {
	scoreBoard[player] += addedScore;
	return scoreBoard;
}
// 5. Apply Monday bonus points
function applyMondaybonus() {
	const obj = scoreBoard;
	for (let val in obj) {
		obj[val] += 100;
	}

	return obj;
}

// 6. Normalize a high score
function normalizeScore(params) {
	return params.normalizeFunction(params.score);
}
