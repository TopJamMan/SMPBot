exports.onEvent = function (bot) {
    bot.on('playerJoined', (player) => {
        bot.chat(`Welcome ${player.username}!`)
    })
}