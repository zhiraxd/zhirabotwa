/*
    * Created By QyuuNee
    * Subscribe Biar Work :3
    * Minimal Credit Nya Lah
    * Buy Panel? 088210828960
    * SC INI GRATIS! LU JUAL? DEPET TIKET NERAKA
*/

const fs = require('fs')
const chalk = require('chalk')

global.keyai = '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' // https://platform.openai.com/account/api-keys

global.namabot = '𝑰`𝑴 𝒁𝑯𝑰𝑹𝑨 𝑩𝑶𝑻𝒁 友'
global.namaowner = '𝒁𝑯𝑰𝑹𝑨'

global.owner = ['62856241468416']
global.ownernomer = "62856241468416"
global.premium = ['62856241468416']
global.nomorOwner = ['62856241468416']

global.packname = 'HuTod'
global.author = 'MultiDevice'

global.prefa = ['', '!', '.', '#', '$', ',']

global.mess = {
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    error: '🚫 Fitur Sedang Error !',
}

global.thumb = fs.readFileSync('./zhira.jpg')
global.botname = 'HuTod'
global.ttname = 'iamunderox_'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
