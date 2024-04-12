import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch' 
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
try{
const { levelling } = '../lib/levelling.js'
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
//user.registered = false

let pp = gataVidMenu
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu)).buffer(), sourceUrl: redesMenu }}}

const temaX = [['pornololi', 'nsfwloli'], ['pornopies', 'nsfwfoot'], ['pornoass', 'nsfwass'], ['pornobdsm', 'nsfwbdsm'], ['pornocum', 'nsfwcum'],
['pornoero', 'nsfwero'], ['pornodominar', 'nsfwfemdom'], ['pornoglass', 'nsfwglass'], ['pornohentai', 'nsfwhentai'], ['pornorgia', 'nsfworgy'], ['pornotetas', 'nsfwboobs'],
['pornobooty', 'nsfwbooty'], ['pornoecchi', 'nsfwecchi'], ['pornofurro', 'nsfwfurry'], ['pornotrapito', 'nsfwtrap'], ['pornolesbiana', 'nsfwlesbian'],
['pornobragas', 'nsfwpanties'], ['pornopene', 'nsfwpenis'], ['porno', 'porn'], ['pornorandom', 'pornrandom'], ['pornopechos', 'nsfwbreasts'],
['pornoyaoi', 'nsfwyaoi'], ['pornoyaoi2', 'nsfwyaoi2'], ['pornoyuri', 'nsfwyuri'], ['pornoyuri2', 'nsfwyuri2'], ['pornodarling', 'nsfwdarling'],
['pornodragonmaid', 'nsfwdragonmaid'], ['pornokonosuba', 'nsfwkonosuba'], ['pornopokemon', 'nsfwpokemon'], ['pornotoloveru', 'nsfwtoloveru'], ['pornouzaki', 'nsfwuzaki'],
['pornopack', 'nsfwpack'], ['pornopackchica', 'nsfwpackgirl'], ['pornopackchico', 'nsfwpackmen'], ['pornohentai3', 'nsfwhentai3'], ['pornoass2', 'nsfwass2'],
['pornosticker', 'nsfwsticker'], ['pornochica', 'nsfwsgirl'], ['pornoass3', 'nsfwass3'], ['pornotetas2', 'nsfwboobs2'], ['pornotetas3', 'nsfwboobs3'],
['pornopussy', 'nsfwpussy'], ['pornopaizuri', 'nsfwpaizuri'], ['pornoneko', 'nsfwneko'], ['pornopies2', 'nsfwfoot2'], ['pornoyuri3', 'nsfwyuri3'],
['pornomuslo', 'nsfwhthigh'], ['pornochica2', 'nsfwsgirl2'], ['pornoanal', 'nsfwanal'], ['pornomamada', 'nsfwblowjob'], ['pornogonewild', 'nsfwgonewild'],
['pornofurro2', 'nsfwfurry2'], ['pornotentacle', 'nsfwtentacle'], ['porno4k', 'porn4k'], ['pornokanna', 'nsfwkanna'], ['pornoanal2', 'nsfwanal2'],
['pornoalimento', 'nsfwfood'], ['pornoholo', 'nsfwholo'], ['pornoanal3', 'nsfwanal3'], ['pornomamada2', 'nsfwblowjob2'], ['pornocum2', 'nsfwcum2'],
['pornofuck', 'nsfwfuck'], ['pornoneko2', 'nsfwneko2'], ['pornopussy2', 'nsfwpussy2'], ['pornosolo', 'nsfwsolo'], ['pornorgia2', 'nsfworgy2'],
['pornorgia3', 'nsfworgy3'], ['pornoyaoi3', 'nsfwyaoi3'], ['pornocosplay', 'nsfwcosplay'], ['pornodbz', 'nsfwdbz'], ['pornogenshin', 'nsfwgenshin'],
['pornokimetsu', 'nsfwkimetsu'], ['pornohentai2', 'nsfwhentai2'], ['pornonintendo', 'nsfwnintendo'], ['pornohololive', 'nsfwhololive'], ['pornoheroacademy', 'nsfwheroacademy'],
['pornorezero', 'nsfwrezero'], ['pornotatsumaki', 'nsfwtatsumaki'], ['pornonaruto', 'nsfwnaruto'], ['pornokitagawa', 'nsfwkitagawa'], ['pornovid', 'nsfwvid'],
['pornovid2', 'nsfwvid2'], ['pornovidlesbi', 'nsfwvidlesbi'], ['pornovidgay', 'nsfwvidgay'], ['pornovidbisexual', 'nsfwvidbisexual'], ['pornovidrandom', 'nsfwvidrandom']]

if (command == 'menu5'){ //audio
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Edita tu nota de voz o audio
│para aplicar estos efectos.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}bass_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}blown_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}deep_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}earrape_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}fast_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}fat_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}nightcore_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}reverse_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}robot_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}slow_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}smooth_
│┃ஓீ፝͜͡🛰️➩ _${usedPrefix}tupai_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex2']()} 🧰`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menu4'){ //buscador
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Habla con chatgpt, o buscar
│algo en google con este menu.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}animeinfo_
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}mangainfo_
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}chatgpt_ 
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}iavoz_
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}dalle_
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}google_
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}letra_
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}ytsearch_
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}spotifysearch_
│┃ஓீ፝͜͡🤖➩ _${usedPrefix}wikipedia_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex1']()} 🧰`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menuadulto' || command == 'menu18'){ //comandos+18
let pp = './src/+18.jpg'

let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Disfruta de videos calientes
│y ricos en este menu.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[0][0] : temaX[0][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[1][0] : temaX[1][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[2][0] : temaX[2][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[3][0] : temaX[3][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[4][0] : temaX[4][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[5][0] : temaX[5][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[6][0] : temaX[6][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[7][0] : temaX[7][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[8][0] : temaX[8][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[9][0] : temaX[9][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[10][0] : temaX[10][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[11][0] : temaX[11][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[12][0] : temaX[12][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[13][0] : temaX[13][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[14][0] : temaX[14][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[15][0] : temaX[15][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[16][0] : temaX[16][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[17][0] : temaX[17][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[18][0] : temaX[18][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[19][0] : temaX[19][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[20][0] : temaX[20][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[21][0] : temaX[21][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[22][0] : temaX[22][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[23][0] : temaX[23][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[24][0] : temaX[24][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[25][0] : temaX[25][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[26][0] : temaX[26][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[27][0] : temaX[27][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[28][0] : temaX[28][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[29][0] : temaX[29][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[30][0] : temaX[30][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[31][0] : temaX[31][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[32][0] : temaX[32][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[33][0] : temaX[33][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}xnxxsearch_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}xvideossearch_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}xnxxdl_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}xvideosdl_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[34][0] : temaX[34][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[35][0] : temaX[35][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[36][0] : temaX[36][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[37][0] : temaX[37][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[38][0] : temaX[38][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[39][0] : temaX[39][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[40][0] : temaX[40][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[41][0] : temaX[41][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[42][0] : temaX[42][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[43][0] : temaX[43][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[44][0] : temaX[44][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[45][0] : temaX[45][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[46][0] : temaX[46][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[47][0] : temaX[47][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[48][0] : temaX[48][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[49][0] : temaX[49][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[50][0] : temaX[50][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[51][0] : temaX[51][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[52][0] : temaX[52][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[53][0] : temaX[53][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[54][0] : temaX[54][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[55][0] : temaX[55][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[56][0] : temaX[56][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[57][0] : temaX[57][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[58][0] : temaX[58][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[59][0] : temaX[59][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[60][0] : temaX[60][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[61][0] : temaX[61][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[62][0] : temaX[62][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[63][0] : temaX[63][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[64][0] : temaX[64][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[65][0] : temaX[65][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[66][0] : temaX[66][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[67][0] : temaX[67][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[68][0] : temaX[68][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[69][0] : temaX[69][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[70][0] : temaX[70][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[71][0] : temaX[71][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[72][0] : temaX[72][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[73][0] : temaX[73][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[74][0] : temaX[74][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[75][0] : temaX[75][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[76][0] : temaX[76][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[77][0] : temaX[77][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[78][0] : temaX[78][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[79][0] : temaX[79][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[80][0] : temaX[80][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[81][0] : temaX[81][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[82][0] : temaX[82][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[83][0] : temaX[83][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[84][0] : temaX[84][1]}_
│┃ஓீ፝͜͡🔥➩ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? temaX[85][0] : temaX[85][1]}_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex3']()} 🥵`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//await conn.sendButton(m.chat, menuA, menuB, pp, [[lenguajeGB.smsBotonM1(), usedPrefix + 'menu'], [lenguajeGB.smsBotonM2(), usedPrefix + 'allmenu'], [lenguajeGB.lenguaje() == 'es' ? '🔞 ver lista porno 🔞'.toUpperCase() : '🔞 list horny🔞 '.toUpperCase(), lenguajeGB.lenguaje() == 'es' ? usedPrefix + 'listaporno' : usedPrefix + 'listhorny']], fkontak, adReply, m)

  
}
/*if (command == 'listaporno' || command == 'listhorny') { //comandos+18
let sections = Object.keys(temaX).map((v, index, temaX2) => ({ title: `${lenguajeGB['smsTex4']().slice(1, -1)} : ${wm}`,
rows: [{ 
title: `${1 + index <= 33 ? '🥵' : user.premiumTime > 0 ? '🎟️🥵' : '⚠️'} ${lenguajeGB.lenguaje() == 'es' ? temaX[index][0].toUpperCase() : temaX[index][1].toUpperCase()} ${1 + index <= 33 ? '🥵' : user.premiumTime > 0 ? '🥵🎟️' : '⚠️'} • ${lenguajeGB['smsBotonM7']()} ➜ ${user.premiumTime > 0 ? '✅' : '❌'}`, 
description: `${1 + index}. ${lenguajeGB.lenguaje() == 'es' ? temaX[index][0] : temaX[index][1]} ➜ ${1 + index <= 33 ? user.limit < 2 ? lenguajeGB.smsList1() + lenguajeGB.eDiamante() + lenguajeGB.smsList2() + rpgshopp.emoticon('limit') : lenguajeGB.smsList3() : lenguajeGB.smsList4() + rpg.emoticon('premium')}`, 
rowId: `${usedPrefix}${1 + index <= 33 ? user.limit < 2 ? 'buy limit 5' : lenguajeGB.lenguaje() == 'es' ? temaX[index][0] : temaX[index][1] : user.premiumTime > 0 ? lenguajeGB.lenguaje() == 'es' ? temaX[index][0] : temaX[index][1] : 'pase premium' }` }], }))

let name = await conn.getName(m.sender)
const listMessage = {
text: `${user.premiumTime > 0 ? lenguajeGB.smsCont18PornP() : lenguajeGB.smsCont18Porn()}`,
footer: `╭━━━✦ 🛐 ✦━━━━⬣
🔞 ${lenguajeGB.smsConfi2()} *${name}*
${lenguajeGB.smsList5()}
╰━━━✦ *${vs}* ✦━━━⬣
${wm}`,
title: null,
buttonText: lenguajeGB.smsList6(),
sections }
conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
    
}
*/
if (command == 'menu3'){ //convertidor
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Convierte sticker o imagenes
│en enlace, en este bot.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡♻️➩ _${usedPrefix}toimg_
│┃ஓீ፝͜͡♻️➩ _${usedPrefix}tomp3_
│┃ஓீ፝͜͡♻️➩ _${usedPrefix}tovn_
│┃ஓீ፝͜͡♻️➩ _${usedPrefix}tovideo_
│┃ஓீ፝͜͡♻️➩ _${usedPrefix}tourl_
│┃ஓீ፝͜͡♻️➩ _${usedPrefix}toenlace_
│┃ஓீ፝͜͡♻️➩ _${usedPrefix}tts es_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex8']()}  🛰️`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)  

  
} if (command == 'menu2'){ //descargas
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Descarga musicas, videos
│apks, y mucho mas en este bot.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}imagen_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}pinterest_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}wallpaper_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}play_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}play2_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}play.1_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}play.2_ 
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}yta_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}ytv_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}playdoc_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}playdoc2_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}ytadoc_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}ytvdoc_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}twitter_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}spotify_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}facebook_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}instagram_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}igstalk_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}igstory_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}tiktok_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}tiktokfoto_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}vertiktok_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}mediafire_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}gitclone_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}clima_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}consejo_ 
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}frase_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}frase2_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}morse codificar_
│┃ஓீ፝͜͡⬇️➩ _${usedPrefix}morse decodificar_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex9']()} 🚀`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu }}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menu'){ //fun
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Juegos entretenidos para el
│bot, diviértete, etiqueta y gana.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}mates_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}ppt *piedra*_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}ppt *papel*_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}ppt *tijera*_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}tictactoe_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}delttt_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topgays_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topgays2
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topgays3
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topotakus_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}toppajeras_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}toppajeros
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topputos_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topputas_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topintegrantes_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topgrasa_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}toppanafrescos_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topshipost_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}toplindos_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topfamosos_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}topparejas_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}gay_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}gay2_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}lesbiana_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}manca_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}manco_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}pajero_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}pajera_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}puto_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}puta_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}rata_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}love_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}doxear_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}doxxeame_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}pregunta_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}slot_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}formarpareja_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}acentijo_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}cancion_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}adivinaza_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}pelicula
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}dado_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}verdad_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}reto_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}ruleta_
│┃ஓீ፝͜͡🎰➩ _${usedPrefix}suerte_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex10']()} 🎡`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menu8' || command == 'menugrupo'){ //grupo
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Comandos para grupos
│eliminar, etiquetar, banear y mas.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡👥➩ _${usedPrefix}add_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}kick_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}grupo *abrir*_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}grupo *cerra*_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}promote_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}demote_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}banchat_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}unbanchat_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}banuser_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}unbanuser_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}admins_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}tagall_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}hidetag_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}infogroup_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}grouptime_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}advertencia_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}deladvertencia_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}delwarn_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}crearvoto_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}sivotar_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}novotar_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}vervotos_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}delvoto_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}link_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}newnombre_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}newdesc_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}setwelcome_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}setbye_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}resetlink_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}on_
│┃ஓீ፝͜͡👥➩ _${usedPrefix}off_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex11']()} 🌐`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu.getRandom()}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menu9'){ //herramientas
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Herramientas para el bot
│acortar, calcular, ver horario.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}afk_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}acortar_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}calc_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}del_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}qrcode_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}readmore_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}spamwa_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}styletext_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}traducir_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}morse codificar_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}morse decodificar_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}encuesta_
│┃ஓீ፝͜͡🍃➩ _${usedPrefix}horario_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, pp, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex12']()} 🛠️`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

 
} if (command == 'menu1'){ //info
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Cuentas oficiales y estados,
│informacion y mas.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡📑➩ _${usedPrefix}cuentasnz_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}gruposnz_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}donar_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}grouplist_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}estado_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}infobot_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}instalarbot_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}creador_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}velocidad_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}serbot_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}serbot --code_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}nzbots_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}stop_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}reporte_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}mirecurso_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}misdiamantes_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}miscoins_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}miexp_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}mirole_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}minivel_
│┃ஓீ፝͜͡📑➩ _${usedPrefix}mismonedas_
│┃ஓீ፝͜͡📑➩ _términos y condiciones_
│┃ஓீ፝͜͡📑➩ _Bot_ 
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex13']()} 💫`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menu10'){ //maker
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Mensiona o crea tus logos
│con tu nombre o comenta.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🌆➩ _${usedPrefix}simpcard_
│┃ஓீ፝͜͡🌆➩ _${usedPrefix}hornycard_
│┃ஓீ፝͜͡🌆➩ _${usedPrefix}lolice_
│┃ஓீ፝͜͡🌆➩ _${usedPrefix}ytcomment_
│┃ஓீ፝͜͡🌆➩ _${usedPrefix}itssostupid_
│┃ஓீ፝͜͡🌆➩ _${usedPrefix}pixelar_
│┃ஓீ፝͜͡🌆➩ _${usedPrefix}blur_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex14']()} ⛺`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menu11'){ //marker
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Escribe el comando y tu
│nombre para crear el logo.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz1
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz2
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz3
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz4
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz5
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz6
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz7
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz8
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz9
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz10
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz11
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz12
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz13
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz14
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz15
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz16
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz17
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz18
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz19
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz20
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz21
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz22
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz23
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz24
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz25
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz26
│┃ஓீ፝͜͡🎉➩ ${usedPrefix}logonz27
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, pp, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex15']()} 🌅`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
// conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menu13'){ //propietario(a)
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Este menu solo es para
│los creadores y oficiales.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡👑➩ _${usedPrefix}join_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}unete_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}dardiamante_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}darxp_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}darnaufracoins_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}addprem_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}addprem2_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}addprem3_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}addprem4_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}cajafuerte_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}bc *texto*_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}bcc *texto*_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}comunicarpv_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}broadcastgc_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}comunicargrupos_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}borrartmp_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}delexp_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}delgatacoins_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}deldiamantes_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}restart_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}update_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}addprem_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}delprem_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}listprem_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}añadirdiamantes_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}añadirxp_
│┃ஓீ፝͜͡👑➩ _${usedPrefix}añadirnaufracoins_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex20']()} 💎`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menu15'){ //randomm
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Mira el apartado aleatorio 
│de este menu y diviértete.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}chica_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}chico_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}cristianoronaldo_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}messi_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}meme_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}meme2_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}itzy_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}blackpink_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}kpop_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}exo_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}bts_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}lolivid_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}loli_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}navidad_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}ppcouple_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}neko_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}waifu_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}akira_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}akiyama_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}anna_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}asuna_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}ayuzawa_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}boruto_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}chiho_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}chitoge_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}deidara_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}erza_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}elaina_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}eba_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}emilia_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}hestia_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}hinata_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}inori_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}isuzu_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}itachi_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}itori_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}kaga_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}kagura_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}kaori_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}keneki_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}kotori_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}kurumi_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}madara_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}mikasa_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}miku_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}minato_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}naruto_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}nezuko_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}sagiri_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}sasuke_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}sakura_
│┃ஓீ፝͜͡🍷➩ _${usedPrefix}cosplay_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex23']()} 🧩`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menu14'){ //rpg
let menuA = `
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Etiqueta, mina, consigue exp
│diamantes y mucho mas.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}botemporal_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}addbot_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}pase premium_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}pass premium_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}listapremium_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}transfer_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}da_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}enviar_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}balance_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}exp_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}top_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}levelup_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}rol_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}listaparejas_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}mipareja_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}pareja_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}aceptar_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}rechazar_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}terminar_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}aventura_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}heal_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}buy_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}sell_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}registrar_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}perfil_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}myns_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}unreg_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}minardiamantes_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}minarcoins_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}minarexp_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}minar_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}minar2_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}minar3_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}claim_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}cofre_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}work_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}rob_
│┃ஓீ፝͜͡🎨➩ _${usedPrefix}crime_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `${lenguajeGB['smsTex21']()} ⚗️`, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
//conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)


} if (command == 'menu16'){ //sticker
let menuA = `┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ ${username}
│┃•───────•
│┃Fecha: *${date}*
│┃Tiempo: *${uptime}*
│┃Bot: *NaufraZapp-MD*
│┃•───────•
│┃✅ Registrados: ✅
│┃ *${totalreg}*
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄
${readMore}
╭⋆───────────────────⋄
│⌕ Responde a una imagen
│video, gif o un usuario.
╰⋆───────────────────⋄
┍━━━━━━━━━━━━━━━━━━━━•⋄
│╭────────────────•⊰⌑
│┃ஓீ፝͜͡📦➩ _${usedPrefix}sticker_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}sticker_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}emojimix_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}scircle_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}semoji_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}attp *texto*_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}attp2 *texto*_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}ttp *texto*_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}ttp2 *texto*_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}ttp3 *texto*_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}ttp4 *texto*_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}ttp5 *texto*_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}ttp6 *texto*_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}palmaditas_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}bofetada_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}besar_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}alimentar_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}dado__
│┃ஓீ፝͜͡📦➩ _${usedPrefix}wm_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}stickermarker_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}stickerfilter_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}cs_
│┃ஓீ፝͜͡📦➩ _${usedPrefix}cs2_
│╰────────────────•⊰⌑
┕━━━━━━━━━━━━━━━━━━━━•⋄

𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿`.trim()
await conn.sendFile(m.chat, gataImg, 'naufra.jpg', menuA, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `📑 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝙎 📑`, body: ' 👑 𝙉𝙖𝙪𝙛𝙧𝙖𝙕𝙖𝙥𝙥-𝙈𝘿 👑 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}})
///conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)
} 
} catch (e) {
await conn.sendButton(m.chat, `\n`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`${lenguajeGB['smsMensError2']()} ${usedPrefix + command}`)
console.log(e)}
}
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu7', 'menu8', 'menu9', 'menu10',
'menu11', 'menu13', 'menu14', 'menu15', 'menu16', 'menu18'] 
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
