exports.onEvent = function onLogin(bot) {
    bot.on('login', () => {
        console.log("Successfully logged in!")
    })
}
