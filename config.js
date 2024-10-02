const fs = require('fs')
const chalk = require('chalk')
module.exports = {
SESSION_ID: process.env.SESSION_ID || "izumi~YvPH1yqZ",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
global.AUTO_REACT: process.env.AUTO_REACT || "true",
}
global.socialm = "Fb: @afzaalkhan.k"
global.location = "Azad Jammu & Kashmir"
global.botname = 'Sarkar_Ak'
global.ownernumber = '923556159234'
global.ownername = 'Mr Khan'
global.wagc = "https://whatsapp.com/channel/0029VaHJSUeC6Zvq89X23w2k"
global.themeemoji = '👑'
global.wm = " Made by Afzaal Khan"
global.botscript = 'https://github.com/Fenixid-server/Mr.-Robot' 
global.packname = "khan"
global.author = "Afzaal_Khan"
global.creator = "923556159234@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923556159234"]
global.session_id = "izumi~YvPH1yqZ"
global.hituet = 0
global.typemenu = 'v12'
global.typereply = 'v4' 
global.autoblocknumber = '234' 
global.antiforeignnumber = ''
global.welcome = true 
global.anticall = false
global.autoswview = true 
global.groupevent = false 
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done and magister',
    error: 'Error!',
    success: '*Your Succeed!*'
}

global.thumb = fs.readFileSync('https://github.com/khanak1/Alexa/blob/main/20241001_180820.jpg')


global.xbugtex = {
xtxt: 'Itz Godfather',
}
global.bimg = 'https://github.com/khanak1/Alexa/blob/main/20241001_180820.jpg'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
