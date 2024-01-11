exports.onEvent = function onChat(bot) {
    bot.on('chat', (username, message) => {
        if (username === bot.username) return
        // Add user verification?
        if (message.charAt(0) !== '!') return
        parseMessage(bot, message)
    })
}
function parseMessage(bot, message) {
    message = message.substring(1)
    let args = message.split(" ")
    let command = args.shift()
    var normalizedPath = require("path").join(__dirname.slice(0, __dirname.length-7), "commands");

    require("fs").readdirSync(normalizedPath).forEach(function(file) {
        let currentFile = require("../commands/" + file);

        let aliases = currentFile.aliases;

        aliases.forEach(function (alias) {
                if (alias === command) {
                    currentFile.run(bot, args)
                }
        })
    });
}