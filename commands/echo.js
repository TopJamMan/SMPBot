exports.aliases = ["echo", "simonsays"]

exports.run = function (bot, args) {
    if (args.length === 0) return
    let message = args.join(" ")
    bot.chat(message)
}