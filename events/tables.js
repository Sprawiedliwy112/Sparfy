const db = require("better-sqlite3")("./database.db");

module.exports = (bot) => {
    bot.on("ready", async () => {
        db.prepare(`CREATE TABLE IF NOT EXISTS guilds (guildId, prefix, channel, ad, invite, gban)`).run();
        db.prepare(`CREATE TABLE IF NOT EXISTS premium (guildId, premium)`).run();
        db.prepare(`CREATE TABLE IF NOT EXISTS adsCheck (guildId, content, user)`).run();
        db.prepare(`CREATE TABLE IF NOT EXISTS ads (number, id, content, wyslana)`).run();
        db.prepare("CREATE TABLE IF NOT EXISTS adNum (num, id)").run();
        db.prepare(`CREATE TABLE IF NOT EXISTS links (guildId, link, desc, background, color, autorecredit)`).run();
    })
}