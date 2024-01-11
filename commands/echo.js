let aliases = ["echo", "simonsays"]

function echo(bot, args) {
    let message = args.join(" ")
    bot.chat(message)
}

exports.aliases = aliases
exports.run = echo