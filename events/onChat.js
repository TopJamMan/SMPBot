import {bot} from '../index'

bot.on('chat', (username, message) => {
    if (username === bot.username) return
    // Add user verification?
    if (message.charAt(0) !== '!') return
    parseMessage(message)
})

function parseMessage(message) {
    message = message.substring(1)
    let args = message.split(" ")
    let command = args.shift()

    require("fs").readdirSync("../commands").forEach(function(file) {
        let currentFile = require("../commands/" + file);
        let aliases = currentFile.aliases;
        for (var alias in aliases) {
            if (alias === command) {
                currentFile.run(bot, args)
            }
        }
    });
}