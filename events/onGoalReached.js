exports.onEvent = function (bot) {
    bot.on('goal_reached', () => {
        console.log("Reached goal!")
    })
}