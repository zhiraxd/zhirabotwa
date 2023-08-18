require('./config')
const {
    baileys,
    proto,
    generateWAMessageFromContent,
    getContentType
} = require("@adiwajshing/baileys")
const {
    getGroupAdmins,
    runtime,
    fetchJson
} = require("./functions.js")
const {
    smsg,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    getBuffer,
    jsonformat,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./lib/myfunc')
const {
    exec
} = require("child_process")
const cheerio = require("cheerio")
const chalk = require("chalk")
const util = require("util")
const jsobfus = require('javascript-obfuscator')
const axios = require("axios")
const fs = require("fs")
const moment = require('moment-timezone')
const owner = JSON.parse(fs.readFileSync("./owner.json"))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    group: {},
    chats: {},
    database: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}

moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = async (client, mek, store, msg) => {
    try {
        const type = getContentType(msg.message)
        const content = JSON.stringify(msg.message)
        const from = msg.key.remoteJid
        const fatkuns = (msg.quoted || msg)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : msg.quoted ? msg.quoted : msg
        const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const botNumber = client.user.id.split(':')[0]
        const sender = msg.key.fromMe ? (client.user.id.split(':')[0] + '@s.whatsapp.net' || client.user.id) : (msg.key.participant || msg.key.remoteJid)
        const isGroup = from.endsWith('@g.us')
        const groupMetadata = isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = isGroup ? groupAdmins.includes(sender) : false
        const senderNumber = sender.split('@')[0]
        const pushname = msg.pushName || `${senderNumber}`
        const nomorOwner = [`6288210828960`]
        const isBot = botNumber.includes(senderNumber)
        const isOwner = nomorOwner.includes(senderNumber) || isBot
        const mentionUser = [...new Set([...(msg.mentionedJid || []), ...(msg.quoted ? [msg.quoted.sender] : [])])]
        const mentionByTag = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || '' : ''
        const text = q = args.join(" ")
        var budy = (typeof text == 'string' ? text : '')
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false

        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }

        const getBuffer = async (url, options) => {
            try {
                options ? options : {}
                const res = await axios({
                    method: "get",
                    url,
                    headers: {
                        'DNT': 1,
                        'Upgrade-Insecure-Request': 1
                    },
                    ...options,
                    responseType: 'arraybuffer'
                })
                return res.data
            } catch (err) {
                return err
            }
        }

        const parseMention = (text = '') => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        async function obfus(query) {
            return new Promise((resolve, reject) => {
                try {
                    const obfuscationResult = jsobfus.obfuscate(query, {
                        compact: false,
                        controlFlowFlattening: true,
                        controlFlowFlatteningThreshold: 1,
                        numbersToExpressions: true,
                        simplify: true,
                        stringArrayShuffle: true,
                        splitStrings: true,
                        stringArrayThreshold: 1
                    });
                    const result = {
                        status: 200,
                        author: `Koneko-MD`,
                        result: obfuscationResult.getObfuscatedCode()
                    }
                    resolve(result)
                } catch (e) {
                    reject(e)
                }
            })
        }

        const ftroli = {
            key: {
                fromMe: false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast"
            },
            "message": {
                orderMessage: {
                    itemCount: 2022,
                    status: 200,
                    thumbnail: thumb,
                    surface: 200,
                    message: `${ttname}`,
                    orderTitle: 'HuTod',
                    sellerJid: '0@s.whatsapp.net'
                }
            },
            contextInfo: {
                "forwardingScore": 999,
                "isForwarded": true
            },
            sendEphemeral: true
        }

        const fdoc = {
            key: {
                participant: '0@s.whatsapp.net',
                ...(from ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                documentMessage: {
                    title: `${ttname}`,
                    jpegThumbnail: thumb,
                }
            }
        }
        const fvn = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "audioMessage": {
                    "mimetype": "audio/ogg; codecs=opus",
                    "seconds": 359996400,
                    "ptt": "true"
                }
            }
        }

        const ftextt = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "extendedTextMessage": {
                    "text": `${ttname}`,
                    "title": `${botname}`,
                    'jpegThumbnail': thumb,
                }
            }
        }

        const ftoko = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage": {
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": thumb,
                        },
                        "title": `${ttname}`,
                        "description": `${botname}`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "1000000000000000000",
                        "retailerId": `${ttname}`,
                        "productImageCount": 1
                    },
                    "businessOwnerJid": `0@s.whatsapp.net`
                }
            }
        }

        const fgif = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "videoMessage": {
                    "title": `${ttname}`,
                    "h": `Hmm`,
                    'seconds': '359996400',
                    'gifPlayback': 'true',
                    'caption': `${ttname}`,
                    'jpegThumbnail': thumb,
                }
            }
        }

        const fgclink = {
            key: {
                participant: "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            "message": {
                "groupInviteMessage": {
                    "groupJid": "6288210828960-1616169743@g.us",
                    "inviteCode": "m",
                    "groupName": `${ttname}`,
                    "caption": `${ttname}`,
                    'jpegThumbnail': thumb,
                }
            }
        }

        const fvideo = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "videoMessage": {
                    "title": `${ttname}`,
                    "h": `Hmm`,
                    'seconds': '359996400',
                    'caption': `${ttname}`,
                    'jpegThumbnail': thumb,
                }
            }
        }

        const floc = {
            key: {
                participant: '0@s.whatsapp.net',
                ...(from ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                locationMessage: {
                    name: `${ttname}`,
                    jpegThumbnail: thumb,
                }
            }
        }

        const floc2 = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "liveLocationMessage": {
                    "title": `${ttname}`,
                    "h": `Hmm`,
                    'jpegThumbnail': thumb,
                }
            }
        }

        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${ttname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6288210828960:6288210828960\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }
            }
        }

        const fakestatus = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "imageMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                    "mimetype": "image/jpeg",
                    "caption": `${ttname}`,
                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                    "fileLength": "28777",
                    "height": 1080,
                    "width": 1079,
                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                    "mediaKeyTimestamp": "1610993486",
                    "jpegThumbnail": thumb,
                    "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                }
            }
        }

        const newReply = (teks) => {
            client.sendMessage(from, {
                text: teks,
                contextInfo: {
                    "externalAdReply": {
                        "title": `HUTOD-TEPOD`,
                        "body": `👋🏻 Hai kak ${pushname}`,
                        "previewType": "PHOTO",
                        "thumbnail": thumb,
                        "sourceUrl": `https://youtu.be/ToI4Yo2UzKw`
                    }
                }
            }, {
                quoted: msg
            })
        }

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
            } else global.db.data.users[sender] = {
                afkTime: -1,
                afkReason: '',
            }
            let chats = global.db.data.chats[from]
            if (typeof chats !== 'object') global.db.data.chats[from] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
            } else global.db.data.chats[from] = {
                mute: false,
                antilink: false,
                antilinkv2: false
            }
            let setting = global.db.data.settings[isBot]
            if (typeof setting !== 'object') global.db.data.settings[isBot] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[isBot] = {
                status: 0,
                autoread: false
            }
        } catch (err) {
            console.error(err)
        }

        try {
            ppuser = await client.profilePictureUrl(sender, 'image')
        } catch (err) {
            ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }

        if (!client.public) {
            if (!msg.key.fromMe && !isOwner) return
        }

        if (msg.message) {
            if (global.db.data.settings[isBot].autoread) {
                client.readMessages([msg.key])
            }
        }

        for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            newReply(`❗ Don't Tag Him!
💤 He's AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
⏳ During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[sender].afkTime > -1) {
            let user = global.db.data.users[sender]
            newReply(`
🌤️ You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
⏳ During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        function khususOwner() {
            let izi = "Ngapain Bang?"
            newReply(izi)
        }

        function khususGroup() {
            newReply("Apa Coba 🗿")
        }

        const meki = await getBuffer(ppuser)

        if (msg.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(command)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(isGroup ? pushname : 'Private Chat', from))
        }

        if (db.data.chats[from].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                newReply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                let gclink = (`https://chat.whatsapp.com/` + await client.groupInviteCode(from))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isOwner) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }
        }
        if (db.data.chats[from].antilinkv2) {
            if (budy.match(`chat.whatsapp.com`)) {
                newReply(`「 ANTI LINK WHATSAPP 」\n\n*JANGAN SHARE GC LAIN!!!*`)
                let gclink = (`https://chat.whatsapp.com/` + await client.groupInviteCode(from))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isOwner) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                client.sendMessage(from, {
                    delete: from
                })
            }
        }

        if (db.data.chats[from].mute && !isAdmins && !isOwner) {
            return
        }
        switch (command) {
        case "menu": {
            owned = `${nomorOwner}@s.whatsapp.net`
            let anu = `👋🏻 Haloo @${sender.split("@")[0]}

☍ Mode : *${client.public ? `Public Mode` : `Self Mode`}*
☍ Status : *${isOwner ? `Owner Bot` : `User Bot`}*
☍ Runtime: *${runtime(process.uptime())}*

▧ 「 *G R O U P* 」
│ ‣ ${prefix}grup *close/open*
│ ‣ ${prefix}hidetag *<text>*
│ ‣ ${prefix}antilink *on/off*
│ ‣ ${prefix}antilink2 *on/off*
│ ‣ ${prefix}mutegc *on/off*
└──···

▧ 「 *O T H E R* 」
│ ‣ ${prefix}afk
│ ‣ ${prefix}owner
│ ‣ ${prefix}formatpayment
│ ‣ ${prefix}trxdone
└──···

▧ 「 *O W N E R* 」
│ ‣ ${prefix}enc
│ ‣ ${prefix}public
│ ‣ ${prefix}self
│ ‣ ${prefix}autoread *on/off*
│ ‣ ${prefix}join *<linkgc>*
└──···

© 𝖎𝖌. 𝖎𝖆𝖒𝖚𝖓𝖉𝖊𝖗𝖔𝖝_

*Bot Ini Masih Dalam Tahap Pengembangan, Jadi Mohon Maaf Jika Terdapat Error Di Setiap Fitur 😅🗿*`
            client.sendMessage(from, {
                text: anu,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `${ucapanWaktu} ${pushname}`,
                        body: "HuTod",
                        thumbnail: thumb,
                        sourceUrl: "https://chat.whatsapp.com/LZ2bO5s62amDOgHf37ta0z",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            })
            
        }
        break
        case "public": {
            if (!isOwner) return khususOwner()
            client.public = true
            newReply(`*🌟 SUKSES GANTI KE MODE PUBLIC*`)
        }
        break
        case "self": {
            if (!isOwner) return khususOwner()
            client.public = false
            newReply(`*🍁 SUKSES GANTI KE MODE SELF*`)
        }
        break
        case 'autoread':
            if (!isOwner) return newReply(mess.owner)
            if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
            if (q === 'on') {
                global.db.data.settings[botNumber].autoread = true
                newReply(`Berhasil mengubah autoread ke ${q}`)
            } else if (q === 'off') {
                global.db.data.settings[botNumber].autoread = false
                newReply(`Berhasil mengubah autoread ke ${q}`)
            }
            break
        case "formatpayment": {
            newReply("-𝙋𝘼𝙔𝙈𝙀𝙉𝙏 𝙕𝙃𝙄𝙍𝘼 𝙎𝙏𝙊𝙍𝙀友-͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏                                                                     *GOPAY:*
085942051358 AN Z**** S****
*DANA:*
082118499641 AN Z**** F****** Z***** 
*OVO*
085624146841 AN Z**** F****** Z***** 
*NOTE*
-JIKA PENCAIRAN DANA BERBEDA PAYMENT DENGAN SELLER,MAKA TERKENA PAJAK 1K

-WAJIB BAWA SCREENSHOT BUKTI TRANSFER AGAR TERHINDAR DARI SCAMMER

-JIKA TRANSAKSI BATAL,MAKA FEE/BIAYA ADMIN AKAN TERPOTONG

*BIAYA ADMIN ZHIRA STORE:*
0-99K                :5K
100-299K         :10K
300-499K         :20K
500-699K         :30K
700-899K         :40K
900-1.199        :50K
1.2-NO LIMIT  :70K
TT/BT               :20K
*NOTE:*
-JIKA TRANSAKSI ALL REFF,PENAMBAHAN BIAYA 5K DAN WAJIB MEMBAWA IDENTITAS FULL

IDENTITAS BERUPA:
-FOTO KK NO BLUR
-SELFIE PEGANG KK
-SHARE LOK 2 MACAM ( BERBAGI LOKASI TERKINI & KIRIM LOKASI ANDA SAAT INI
-VC SAMBIL PEGANG KK UNTUK MEMASTIKAN BAHWA IDENTITAS TERSEBUT REAL

*REAL WA ADMIN ZHIRA STORE:*
*WA JAPOST* :082118499641
*WA REKBER* :085624146841
*YOUTUBE* : ZHIRA
*TIKTOK* : youtube.zhira
*INSTAGRAM* : zhiraaaa._")
        }
        break
        case "trxdone": {
            newReply("*ALHAMDULILLAH DONE,TERIMAKASIH TELAH MENGGUNAKAN JASA ADMIN ZHIRA STORE😇*
NOMINAL:000.000 EX
BUYER:DONE✅
SELLER:DONE✅
FEE ADMIN:0K
SISTEM:MC
*NOTE:JIKA TERJADI KENDALA ADMIN TIDAK BERTANGGUNG JAWAB KARENA KEDUA BELAH PIHAK TELAH MENYATAKAN DONE*
*SOSIAL MEDIA:*
https://linktr.ee/zhirastore
YT:ZHIRA
TT:youtube.zhira
IG:zhiraaaa._
WA JAPOST :082118499641
WA REKBER  :085624146841")
        }
        break
        case 'owner':
        case 'creator': {
            const vcard =
                'BEGIN:VCARD\n' + // metadata of the contact card
                'VERSION:3.0\n' +
                `FN:${namaowner}\n` + // full name
                `ORG:${namabot};\n` + // the organization of the contact
                `TEL;type=MSG;type=CELL;type=VOICE;waid=${owner}:+${owner}\n` + // WhatsApp ID + phone number
                'END:VCARD'
            client.sendMessage(from, {
                contacts: {
                    displayName: namaowner,
                    contacts: [{
                        vcard
                    }],
                },
            }, {
                quoted: fkontak
            })
        }
        break
        case 'mutegc': {
            if (!isGroup) return newReply(mess.group)
            if (!isAdmins && !isOwner) return newReply(mess.admin)
            if (args[0] === "on") {
                if (db.data.chats[from].mute) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                db.data.chats[from].mute = true
                newReply(`Bot telah di mute di group ini 🕊️`)
            } else if (args[0] === "off") {
                if (!db.data.chats[from].mute) return newReply(`Sudah Tidak Aktif Sebelumnya 🕊`)
                db.data.chats[from].mute = false
                newReply(`Bot telah di unmute di group ini 🕊️`)
            }
        }
        break
        case 'antilink': {
            if (!isGroup) return newReply(mess.group)
            if (!isAdmins && !isOwner) return newReply(mess.admin)
            if (args[0] === "on") {
                if (db.data.chats[from].antilink) return newReply(`Sudah Aktif Sebelumnya 🕊️`)
                db.data.chats[from].antilink = true
                newReply(`Antilink Group WhatsApp Aktif 🕊️`)
            } else if (args[0] === "off") {
                if (!db.data.chats[from].antilink) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                db.data.chats[from].antilink = false
                newReply(`Antilink Group WhatsApp Nonaktif 🕊️`)
            }
        }
        break
        case 'antilink2':
            if (!isGroup) return newReply(mess.group)
            if (!isAdmins && !isOwner) return newReply(mess.admin)
            if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
            if (q == 'on') {
                global.db.data.chats[from].antilinkv2 = true
                newReply(`Berhasil Mengaktifkan antilinkv2`)
            } else if (q == 'off') {
                global.db.data.chats[from].antilinkv2 = false
                newReply(`Berhasil Mematikan antilinkv2`)
            }
            break
        case 'kick': {
            if (!isGroup) return newReply(mess.group)
            if (!isAdmins && !isOwner) return newReply(mess.admin)
            let users = msg.mentionedJid ? msg.mentionedJid : msg.quoted ? msg.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await client.groupParticipantsUpdate(from, [users], 'remove').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        case 'group':
        case 'grup': {
            if (!isGroup) return newReply(mess.group)
            if (!isAdmins && !isOwner) return newReply(mess.admin)
            if (args[0] === 'close') {
                await client.groupSettingUpdate(from, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
            } else if (args[0] === 'open') {
                await client.groupSettingUpdate(from, 'not_announcement').then((res) => newReply(`Sukses Membuka Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
            } else {
                newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
            }
        }
        break
        case 'afk': {
            let user = global.db.data.users[sender]
            user.afkTime = +new Date
            user.afkReason = text
            newReply(`💤 *${pushname}* Telah Afk${text ? ': ' + text : ''}`)
        }
        break
        case 'hidetag': {
            if (!isGroup) return newReply(mess.group)
            if (!isAdmins && !isOwner) return newReply(mess.admin)
            client.sendMessage(from, {
                text: q ? q : '',
                mentions: participants.map(a => a.id)
            }, {
                quoted: msg
            })
        }
        break
        case 'enc': {
            if (!isOwner) return newReply(mess.owner)
            if (!q) return newReply(`Contoh ${prefix+command} const hutod = require('hutod-tepod')`)
            let meg = await obfus(q)
            newReply(`${meg.result}`)
        }
        break
        case "join": {
            if (!isOwner) return khususOwner()
            if (!text) return newReply(`Contoh: ${prefix+command} linkgc`)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return newReply('Link Invalid!')
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await client.groupAcceptInvite(result).then((res) => newReply(util.format(res))).catch((err) => newReply(util.format(err)))
        }
        break
        default:
        }
        if (budy.startsWith('>')) {
            if (!isOwner) return khususOwner()
            try {
                let evaled = await eval(budy.slice(2))
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                await newReply(evaled)
            } catch (err) {
                newReply(String(err))
            }
        }
        if (isCmd && budy.toLowerCase() != undefined) {
            if (from.endsWith('broadcast')) return
            if (msg.isBaileys) return
            let msgs = global.db.data.database
            if (!(budy.toLowerCase() in msgs)) return
            client.copyNForward(from, msgs[budy.toLowerCase()], true)
        }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
        client.sendMessage(owner + "@s.whatsapp.net", {
            text: "👋🏻 Hello developer, ada yang error nih! di bagian " + util.format(e),
            contextInfo: {
                forwardingScore: 9999999,
                isForwarded: true
            }
        })
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})