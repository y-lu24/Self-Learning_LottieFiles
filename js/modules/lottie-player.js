function initLottiePlayers() {
    const players = document.querySelectorAll("lottie-player");

    players.forEach(attachPlayerReady);
}

function attachPlayerReady(player) {
    player.addEventListener("ready", handlePlayerReady);
}

function handlePlayerReady(e) {
    e.target.play();
}

export { initLottiePlayers };