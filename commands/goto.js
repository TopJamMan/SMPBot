exports.aliases = ["goto"]
const { GoalXZ } = require('mineflayer-pathfinder').goals

exports.run = function (bot, args) {
    if (args.length === 0) return
    bot.pathfinder.goto(new GoalXZ(args[0], args[1]))
}