exports.onEvent = function (bot) {
    bot.on('login', () => {
        console.log("Successfully logged in!")
    })
}
