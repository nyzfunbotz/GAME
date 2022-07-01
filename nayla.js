"use strict";
const {
downloadContentFromMessage
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./db/function/color')
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, makeid } = require("./db/function/myfunc");
const fs = require ("fs");
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const setting = JSON.parse(fs.readFileSync('./admin/config.json'));
const linkkarakter = JSON.parse(fs.readFileSync('./db/data/karakter.json'));
const { homeKarakter, boxerbot, silatbot, petirbot, plantbot, candybot, bansosbot, boxerbotSticker, silatbotSticker, petirbotSticker, plantbotSticker, candybotSticker, bansosbotSticker} = linkkarakter
 
const speed = require("performance-now");
const ms = require("parse-ms");
let mess = JSON.parse(fs.readFileSync('./admin/response.json'));
let antilink = JSON.parse(fs.readFileSync('./db/data/antilink.json'));
const Exif = require("./db/function/exif")
const exif = new Exif()
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async(nayla, nay, m, setting, store, welcome) => {
try {
let { ownerNumber, botName, donas, namaowner} = setting
let { allmenu } = require('./admin/help')
let user = JSON.parse(fs.readFileSync('./db/data/user.json'));
const { type, quotedMsg, mentioned, now, fromMe } = nay
if (nay.isBaileys) return
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const content = JSON.stringify(nay.message)
const from = nay.key.remoteJid
const chats = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type === 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type === 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type === 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotednay.fromMe && nay.message.buttonsResponseMessage.selectedButtonId ? nay.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotednay.fromMe && nay.message.templateButtonReplyMessage.selectedId ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotednay.fromMe && nay.message.listResponseMessage.singleSelectReply.selectedRowId ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : ""
const toJSON = j => JSON.stringify(j, null,'\t')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const args = chats.split(' ')
const command = chats.toLowerCase().split(' ')[0] || ''
const isCmd = command.startsWith(prefix)
const isGroup = nay.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid
const isOwner = ownerNumber == sender ? true : ["6285791458996@s.whatsapp.net", "628990999699@s.whatsapp.net"].includes(sender) ? true : false
const pushname = nay.pushName
const q = chats.slice(command.length + 1, chats.length)
const body = chats.startsWith(prefix) ? chats : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const botNumber = nayla.user.id.split(':')[0] + '@s.whatsapp.net'
const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender)
const isWelcome = isGroup ? welcome.includes(from) ? true : false : false
const isAntilink = isGroup ? antilink.includes(from) ? true : false : false

const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
function jsonformat(string) {return JSON.stringify(string, null, 2)}
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = nayla.sendMessage(from, { text: teks, mentions: mems })
return res } else { let res = nayla.sendMessage(from, { text: teks, mentions: mems }, { quoted: nay })
return res}}

const sendMedia = (namamedia, medianya, captionnya) => {
if (namamedia == "image"){nayla.sendMessage(from, {image:{url:medianya}, caption:captionnya})}
if (namamedia == "sticker"){nayla.sendMessage(from, {sticker:{url:medianya}})}
if (namamedia == "a"){nayla.sendMessage(from, {sticker:{url:medianya}}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Karakter ${mentioned[0].split("@")[0]}` }}} })}
if (namamedia == "b"){nayla.sendMessage(from, {sticker:{url:medianya}}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Karakter ${sender.split("@")[0]}` }}} })}
if (namamedia == "c"){nayla.sendMessage(from, {sticker:{url:medianya}}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Karakter ${mentioned[0].split("@")[0]} WIN!!` }}} })}
if (namamedia == "d"){nayla.sendMessage(from, {sticker:{url:medianya}}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `Karakter ${sender.split("@")[0]} WIN!!` }}} })}
}
const sendButtonImage = (satu, dua, tiga) => {
const buttons = tiga
const buttonMessage = {image: {url: satu}, caption: dua, footer: 'Loading...', buttons: buttons, headerType: 4}
nayla.sendMessage(from, buttonMessage)
}
//
const NotUang = (harga) => {
reply(`Maaf Uang kamu tidak mencukupi,
• Uang kamu sekarang $${MyUser("cek-uang", sender)}
• Harga item ini : $${harga}
Jadi Uang kamu Kurang $${harga - MyUser("cek-uang", sender)} untuk membeli item ini`)
}
const MyUser = (pilihan, nomer, nominal) => {
for (let userr of user) {
if (userr.id == nomer) {
if (pilihan == "cek-id") { return userr.id }

if (pilihan == "cek-level") { return userr.level }
if (pilihan == "+level") { userr.level += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-level") { userr.level -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-exp") { return userr.exp }
if (pilihan == "+exp") { userr.exp += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-exp") { userr.exp -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-uang") { return userr.uang }
if (pilihan == "+uang") { userr.uang += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-uang") { userr.uang -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "±uang") { userr.uang = nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-home") { return userr.home }
if (pilihan == "+home") { userr.home += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-home") { userr.home -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-karakter") { return userr.karakter }
if (pilihan == "±karakter") { userr.karakter = nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-officer") { return userr.officer }
if (pilihan == "±officer") { userr.officer = nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-sapi") { return userr.sapi }
if (pilihan == "+sapi") { userr.sapi += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-sapi") { userr.sapi -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-untah") { return userr.untah }
if (pilihan == "+untah") { userr.untah += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-untah") { userr.untah -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-kambing") { return userr.kambing }
if (pilihan == "+kambing") { userr.kambing += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-kambing") { userr.kambing -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-rusa") { return userr.rusa }
if (pilihan == "+rusa") { userr.rusa += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-rusa") { userr.rusa -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-kelinci") { return userr.kelinci }
if (pilihan == "+kelinci") { userr.kelinci += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-kelinci") { userr.kelinci -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

if (pilihan == "cek-ayam") { return userr.ayam }
if (pilihan == "+ayam") { userr.ayam += nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}
if (pilihan == "-ayam") { userr.ayam -= nominal 
fs.writeFileSync('./db/data/user.json', JSON.stringify(user))}

}}}
if (MyUser("cek-uang", sender) <= 1) { MyUser("±uang", sender, 10)}

if (MyUser("cek-exp", sender) >= 1000) { MyUser("+level", sender, 1)}
if (MyUser("cek-exp", sender) >= 2000) { MyUser("+level", sender, 1)}
if (MyUser("cek-exp", sender) >= 3000) { MyUser("+level", sender, 1)}
if (MyUser("cek-exp", sender) >= 4000) { MyUser("+level", sender, 1)}
if (MyUser("cek-exp", sender) >= 6000) { MyUser("+level", sender, 1)}
if (MyUser("cek-exp", sender) >= 7000) { MyUser("+level", sender, 1)}

var pangkat = "[ ☬ ] Junior"
if (MyUser("cek-level", sender) == 1) { pangkat = "[ ♟ ] Warrior"}
if (MyUser("cek-level", sender) == 2) { pangkat = "[ ♜ ] Elite"}
if (MyUser("cek-level", sender) == 3) { pangkat = "[ ♞ ] Master"}
if (MyUser("cek-level", sender) == 4) { pangkat = "[ ♝ ] Grandmaster"}
if (MyUser("cek-level", sender) == 5) { pangkat = "[ ♚ ] Epic"}
if (MyUser("cek-level", sender) == 6) { pangkat = "[ ♛ ] Legend"}
if (MyUser("cek-level", sender) == 7) { pangkat = "[ ☘ ] Mythic"}

if (MyUser("cek-home", sender) == 0) { var MyHome = "link0"}

const BuyKarakter = (harga, namakarakter) => {
MyUser("±karakter", sender, namakarakter)
MyUser("-uang", sender, harga)}

const Karakterimg = (nomer) => {
if (MyUser("cek-karakter", nomer) == "boxerbot") return boxerbot
if (MyUser("cek-karakter", nomer) == "silatbot") return silatbot
if (MyUser("cek-karakter", nomer) == "petirbot") return petirbot
if (MyUser("cek-karakter", nomer) == "plantbot") return plantbot
if (MyUser("cek-karakter", nomer) == "candybot") return candybot
if (MyUser("cek-karakter", nomer) == "bansosbot") return bansosbot
}

if (MyUser("cek-karakter", sender) == "boxerbot") { var buruan = "• Ayam ✅\n• Kelinci🔒\n• Rusa🔒\n• Kambing🔒\n• Sapi🔒\n• Unta🔒"}
if (MyUser("cek-karakter", sender) == "silatbot") { var buruan = "• Ayam ✅\n• Kelinci✅\n• Rusa🔒\n• Kambing🔒\n• Sapi🔒\n• Unta🔒"}
if (MyUser("cek-karakter", sender) == "petirbot") { var buruan = "• Ayam ✅\n• Kelinci✅\n• Rusa✅\n• Kambing🔒\n• Sapi🔒\n• Unta🔒"}
if (MyUser("cek-karakter", sender) == "plantbot") { var buruan = "• Ayam ✅\n• Kelinci✅\n• Rusa✅\n• Kambing✅\n• Sapi🔒\n• Unta🔒"}
if (MyUser("cek-karakter", sender) == "candybot") { var buruan = "• Ayam ✅\n• Kelinci✅\n• Rusa✅\n• Kambing✅\n• Sapi✅\n• Unta🔒"}
if (MyUser("cek-karakter", sender) == "bansosbot") { var buruan = "• Ayam ✅\n• Kelinci✅\n• Rusa✅\n• Kambing✅\n• Sapi✅\n• Unta✅"}


if (MyUser("cek-karakter", sender) == "boxerbot") { var hewanburuan = "ayam"}
if (MyUser("cek-karakter", sender) == "silatbot") { var hewanburuan = ["ayam","kelinci"][Math.floor(Math.random() * (["ayam","kelinci"].length))]}
if (MyUser("cek-karakter", sender) == "petirbot") { var hewanburuan = ["ayam","kelinci","rusa"][Math.floor(Math.random() * (["ayam","kelinci","rusa"].length))]}
if (MyUser("cek-karakter", sender) == "plantbot") { var hewanburuan = ["ayam","kelinci","rusa","kambing"][Math.floor(Math.random() * (["ayam","kelinci","rusa","kambing"].length))]}
if (MyUser("cek-karakter", sender) == "candybot") { var hewanburuan = ["ayam","kelinci","rusa","kambing","sapi"][Math.floor(Math.random() * (["ayam","kelinci","rusa","kambing","sapi"].length))]}
if (MyUser("cek-karakter", sender) == "bansosbot") { var hewanburuan =  ["ayam","kelinci","rusa","kambing","sapi","untah"][Math.floor(Math.random() * (["ayam","kelinci","rusa","kambing","sapi","untah"].length))]}



const reply = (teks) => {nayla.sendMessage(from, { text: teks }, { quoted: nay })}
const textImg = (teks) => {return nayla.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: nay })}
const sendMess = (hehe, teks) => {nayla.sendMessage(hehe, { text, teks })}
const sendContact = (jid, numbers, name, quoted, mn) => {
let number = numbers.replace(/[^0-9]/g, '')
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:' + name + '\n'
+ 'ORG:;\n'
+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
+ 'END:VCARD'
return nayla.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
}
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false 
if (!isGroup && isCmd && !fromMe) {console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(nay.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))}
if (isGroup && isCmd && !fromMe) {console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(nay.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))} 
switch(command) { 
 

case prefix+'menu':
case prefix+'help':
sendButtonImage("https://i.ibb.co/5Lx8t8d/20220701-134447-min.png",allmenu(prefix, namaowner), [{buttonId: `${prefix}saya`, buttonText: {displayText: pushname}, type: 1}])
break
case prefix+'saya':
reply("ya")
break

case prefix+'runtime':
reply(runtime(process.uptime()))
break
case prefix+'speed':
let timestamp = speed();
let latensi = speed() - timestamp
reply(`${latensi.toFixed(4)} Second`)
break
case prefix+'donate':
case prefix+'donasi':
reply(donas)
break
case prefix+'owner':
for (let x of ownerNumber) {
sendContact(from, x.split('@s.whatsapp.net')[0], 'Owner', nay)
}
break 
case prefix+'sticker': case prefix+'stiker': case prefix+'s':
if (isImage || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.jpg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: nay })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else if (isVideo || isQuotedVideo) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
nayla.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: nay })
fs.unlinkSync(`./${rand1}`)
fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
} else {
reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break 
case prefix+'leave':
if (!isOwner) return reply(mess.OnlyOwner)
if (!isGroup) return reply(mess.OnlyGrup)
nayla.groupLeave(from)
break
case prefix+'join':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
if (!isUrl(args[1])) return reply(mess.error.Iv)
var url = args[1]
url = url.split('https://chat.whatsapp.com/')[1]
var data = await saya.groupAcceptInvite(url)
reply(jsonformat(data))
break
case prefix+'bc': case prefix+'broadcast':
if (!isOwner) return reply(mess.OnlyOwner)
if (args.length < 2) return reply(`Masukkan isi pesannya`)
var data = await store.chats.all()
for (let i of data) {
nayla.sendMessage(i.id, { text: `[ *BROADCAST*\n${q}` })
await sleep(1000)
}
break 
case prefix+'daftar': case prefix+'register': case prefix+'login':
if(MyUser("cek-id", sender) == sender) return reply("Anda telah terdaftar sebelum nya<3")
user.push({id: sender, level: 0, exp: 0, uang: 100, home: 0, karakter: "false", officer: "false", ayam: 0, kelinci:0, rusa:0, kambing:0, sapi:0, untah:0})
fs.writeFileSync('./db/data/user.json', JSON.stringify(user, null, 2))
sendMedia("image","https://i.ibb.co/5Lx8t8d/20220701-134447-min.png","SUKSES TERDAFTAR")
break
case prefix+'buykarakter':
const krk = `[ *KARAKTER SHOP* ]

> *Uang anda sekarang* : $${MyUser("cek-uang", sender)}

~> *Name* : BOXERBOT
• *Harga* : $52
• *Buy?* : ${prefix}buykarakter boxerbot

~> *Name* : SILATBOT
• *Harga* : $120
• *Buy?* : ${prefix}buykarakter silatbot

~> *Name* : PETIRBOT
• *Harga* : $190
• *Buy?* : ${prefix}buykarakter petirbot

~> *Name* : PLANTBOT
• *Harga* : $245
• *Buy?* : ${prefix}buykarakter plantbot

~> *Name* : CANDYBOT
• *Harga* : $305
• *Buy?* : ${prefix}buykarakter candybot

~> *Name* : BANSOSBOT
• *Harga* : $500
• *Buy?* : ${prefix}buykarakter bansosbot

> *Note* : Setelah membeli karakter, maka karakter sebelum nya akan terhapus`
if (!q) return sendMedia("image", homeKarakter, krk)
if (q == "boxerbot") {
if (MyUser("cek-uang", sender) <= 52) return NotUang(52)
BuyKarakter(52, "boxerbot")
sendMedia("image", boxerbot, `[ *KARAKTER SHOP* ]\n> *Status* : Sukses\nSilahkan cek karakter anda di ${prefix}mykarakter`)}

if (q == "silatbot") {
if (MyUser("cek-uang", sender) <= 120) return NotUang(120)
BuyKarakter(120, "silatbot")
sendMedia("image", silatbot, `[ *KARAKTER SHOP* ]\n> *Status* : Sukses\nSilahkan cek karakter anda di ${prefix}mykarakter`)}

if (q == "petirbot") {
if (MyUser("cek-uang", sender) <= 190) return NotUang(190)
BuyKarakter(190, "petirbot")
sendMedia("image", petirbot, `[ *KARAKTER SHOP* ]\n> *Status* : Sukses\nSilahkan cek karakter anda di ${prefix}mykarakter`)}

if (q == "plantbot") {
if (MyUser("cek-uang", sender) <= 245) return NotUang(245)
BuyKarakter(245, "plantbot")
sendMedia("image", plantbot, `[ *KARAKTER SHOP* ]\n> *Status* : Sukses\nSilahkan cek karakter anda di ${prefix}mykarakter`)}

if (q == "candybot") {
if (MyUser("cek-uang", sender) <= 305) return NotUang(305)
BuyKarakter(305, "candybot")
sendMedia("image", candybot, `[ *KARAKTER SHOP* ]\n> *Status* : Sukses\nSilahkan cek karakter anda di ${prefix}mykarakter`)}

if (q == "bansosbot") {
if (MyUser("cek-uang", sender) <= 500) return NotUang(500)
BuyKarakter(500, "bansosbot")
sendMedia("image", bansosbot, `[ *KARAKTER SHOP* ]\n> *Status* : Sukses\nSilahkan cek karakter anda di ${prefix}mykarakter`)}
break

case prefix+'duel':
if (MyUser("cek-id", `${mentioned[0].split("@")[0]}@s.whatsapp.net`) !== `${mentioned[0].split("@")[0]}@s.whatsapp.net`) return reply("Orang yang anda tag belum terdaftar di database bot")
if (MyUser("cek-karakter", `${mentioned[0].split("@")[0]}@s.whatsapp.net`) == "false") return reply("Orang yang anda tag belum memiliki karakter, silahkan beli karakter terlebih dahulu di " + `${prefix}buykarakter`)
// MUSUH
if (MyUser("cek-karakter", `${mentioned[0].split("@")[0]}@s.whatsapp.net`) == "boxerbot") { var musuh = 1
var musuhkarakter = boxerbotSticker
sendMedia("a", boxerbotSticker)}

if (MyUser("cek-karakter", `${mentioned[0].split("@")[0]}@s.whatsapp.net`) == "silatbot") { var musuh = 2
var musuhkarakter = silatbotSticker
sendMedia("a", silatbotSticker)}

if (MyUser("cek-karakter", `${mentioned[0].split("@")[0]}@s.whatsapp.net`) == "petirbot") { var musuh = 3
var musuhkarakter = petirbotSticker
sendMedia("a", petirbotSticker)}

if (MyUser("cek-karakter", `${mentioned[0].split("@")[0]}@s.whatsapp.net`) == "plantbot") { var musuh = 4
var musuhkarakter = plantbotSticker
sendMedia("a", plantbotSticker)}

if (MyUser("cek-karakter", `${mentioned[0].split("@")[0]}@s.whatsapp.net`) == "candybot") { var musuh = 5
var musuhkarakter = candybotSticker
sendMedia("a", candybotSticker)}

if (MyUser("cek-karakter", `${mentioned[0].split("@")[0]}@s.whatsapp.net`) == "bansosbot") { var musuh = 6
var musuhkarakter = bansosbotSticker
sendMedia("a", bansosbotSticker)}
// ANDA 
if (MyUser("cek-karakter", sender) == "boxerbot") { var anda = 1 
var yourkarakter = boxerbotSticker
sendMedia("b", boxerbotSticker)}

if (MyUser("cek-karakter", sender) == "silatbot") { var anda = 2
var yourkarakter = silatbotSticker
sendMedia("b", silatbotSticker)}

if (MyUser("cek-karakter", sender) == "petirbot") { var anda = 3
var yourkarakter = petirbotSticker
sendMedia("b", petirbotSticker)}

if (MyUser("cek-karakter", sender) == "plantbot") { var anda = 4
var yourkarakter = plantbotSticker
sendMedia("b", plantbotSticker)}

if (MyUser("cek-karakter", sender) == "candybot") { var anda = 5
var yourkarakter = candybotSticker
sendMedia("b", candybotSticker)}

if (MyUser("cek-karakter", sender) == "bansosbot") { var anda = 6
var yourkarakter = bansosbotSticker
sendMedia("b", bansosbotSticker)}

setTimeout( () => {reply("PERTANDINGAN SEDANG BERLANGSUNG, HASIL PERTANDINGAN AKAN KELUAR DALAM 10 DETIK LAGI")}, 4000)
setTimeout( () => {
if (anda = musuh) return reply("Karakter anda dengan orang yang anda tag sama, jadi hasil pertandingan ini seri")
if (anda <= musuh) { sendMedia("c", musuhkarakter) }
if (anda >= musuh) { sendMedia("d", yourkarakter) }
reply("Note: duel sesama teman ini hanya hiburan semata, Tidak merugikan/menguntungkan, <3")
}, 14000)
break
case prefix+'berburu':
if (MyUser("cek-karakter", sender) == "false") return reply(`Maaf anda belum memiliki karakter, silahkan Beli karakter terlebih dahulu di ${prefix}buykarakter`)
if (!q) return sendButtonImage("https://sangajigroup.files.wordpress.com/2015/05/e91_3081-copy-copy.jpg","[ *BERBURU* ]\nMisi berburu untuk mendapatkan hadiah uang, Ayo kalahkan hewan hewan yang anda temukan,\n\nNote: Semakin tinggi level karakter kalian, maka semakin banyak jenis buruan, dan akan bertambah besar hadiah yang di dapatkan", [{buttonId: `${prefix}berburu x1`, buttonText: {displayText: 'Next'}, type: 1}])
if (q == "x1") { sendButtonImage(Karakterimg(sender),`[ *BERBURU* ]\nKarakter anda : ${MyUser("cek-karakter", sender)}\n\n( *BURUAN* )\n${buruan} `, [{buttonId: `${prefix}berburu x2`, buttonText: {displayText: 'MULAI BERBURU'}, type: 1}])}
if (hewanburuan == "ayam") { MyUser("+ayam", sender, 1)
var imghewan = "https://cdn.pixabay.com/photo/2016/11/29/05/32/rooster-1867562__480.jpg"}
if (hewanburuan == "kelinci") { MyUser("+kelinci", sender, 1)
var imghewan = "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699__340.jpg"}
if (hewanburuan == "rusa") { MyUser("+rusa", sender, 1)
var imghewan = "https://cdn.pixabay.com/photo/2012/12/17/03/59/moose-70254__480.jpg"}
if (hewanburuan == "kambing") { MyUser("+kambing", sender, 1)
var imghewan = "https://cdn.pixabay.com/photo/2016/08/16/01/19/goat-1596880__480.jpg"}
if (hewanburuan == "sapi") { MyUser("+sapi", sender, 1)
var imghewan = "https://cdn.pixabay.com/photo/2019/07/21/12/10/cow-4352623_640.jpg"}
if (hewanburuan == "untah") { MyUser("+untah", sender, 1)
var imghewan = "https://cdn.pixabay.com/photo/2019/04/10/21/40/dromedary-4118312_640.jpg"}
if (q == "x2") { sendButtonImage(imghewan,`[ *BERBURU* ]\nAnda mendapatkan ${hewanburuan}, Hewan yang anda dapatkan akan di simpan di ${prefix}myburuan,\nApakah anda akan berburu lagi?`, [{buttonId: `${prefix}berburu x2`, buttonText: {displayText: 'BERBURU'}, type: 1}])}
break
default:
}
} catch (err) {
console.log(color('[ERROR]', 'red'), err)
}
}
