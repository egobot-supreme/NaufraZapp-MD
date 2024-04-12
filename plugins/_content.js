import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {
global.key = ''

// Cuentas
const response = await fetch('https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/official_accounts.json')  
const data = await response.json()
let { accounts, channels, groups, collaboration, sponsors, others } = data.info

global.yt = accounts.youTube
global.yt2 = others.yt_vid
global.ig = accounts.instagram
global.md = accounts.gatabot_md
global.fb = accounts.facebook
global.tk = accounts.tiktok
global.ths = accounts.threads
global.paypal = accounts.paypal
global.asistencia = others.assistance_num
global.bot = 'wa.me/50238024328'
global.cuentas = accounts.all

global.canal1 = channels.channel1
global.canal2 = channels.channel2
global.canal3 = channels.channel3
global.canal4 = channels.channel4

global.soporteGB = others.group_support
global.grupo1 = groups.group1
global.grupo2 = groups.group2
global.grupo3 = groups.group3
global.grupo4 = groups.group4
global.grupo5 = groups.group5
global.grupo6 = groups.group6

global.grupo_collab1 = collaboration.group1
global.grupo_collab2 = collaboration.group2
global.grupo_collab3 = collaboration.group3
global.grupo_collab4 = collaboration.group4

global.patrocinador1 = sponsors.boxmine
global.patrocinador2 = sponsors.cafirexos
global.patrocinador3 = sponsors.vortexus
global.patrocinador4 = sponsors.asif

global.canales = [canal1, canal2, canal3, canal4].getRandom()
global.welgata = [tk, ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tk, ths, asistencia].getRandom()
global.redesMenu = [canal1, canal2, canal3, canal4, soporteGB, grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, md, ig, paypal, yt, asistencia, fb, tk].getRandom()
global.accountsgb = [canal1, canal2, canal3, canal4, tk, ig, yt, paypal, fb, ths, md, asistencia].getRandom()

var canalesInfo = [
{ link: canal1, id: "120363160031023229@newsletter", name: "INFINITY-WA 💫" },
{ link: canal2, id: "120363169294281316@newsletter", name: "GB - UPDATE ✨" },
{ link: canal3, id: "120363203805910750@newsletter", name: "Tips sobre GataBot 🤩" } 
]
var indiceAleatorio = Math.floor(Math.random() * canalesInfo.length)
var channelRD = canalesInfo[indiceAleatorio]

// Imágenes 
global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")

global.img = 'https://i.postimg.cc/Y9t2mzvt/Menu2.jpg'
global.img2 = 'https://i.postimg.cc/T386DJsB/Menu3.jpg'
global.img3 = 'https://i.postimg.cc/43sR8Ns5/Menu4.jpg' //prem
global.img4 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg' //prem
global.img5 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg'
global.img6 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg'
global.img7 = 'https://i.postimg.cc/8zq93kG3/c9737e9e-4e19-4f75-95d3-e56c746fb97e.jpg'
global.img8 = 'https://i.postimg.cc/GtK1wWKD/db93517c-0588-4a1b-b9a7-641b235597ad.jpg'
global.img9 = 'https://i.postimg.cc/cLb0JNSM/474106d3-382b-4964-af1e-fbfb35d495cd.jpg'
global.img10 = 'https://i.postimg.cc/PqvxZdBD/06efe094-8f28-444e-b3d4-7474a9ee7f3e.jpg'
global.img11 = 'https://i.postimg.cc/MTjTwpfQ/3f77dcb2-f688-4720-ab08-2c41a86c5216.jpg'
global.img12 = 'https://i.postimg.cc/K4hmx7hX/2214c1d5-22eb-438f-8e2b-65f5b6189ef8.jpg'
global.img13 = 'https://i.postimg.cc/mkRd4hpX/Menu6.jpg'
global.img14 = 'https://i.postimg.cc/cLb0JNSM/474106d3-382b-4964-af1e-fbfb35d495cd.jpg'
global.img15 = 'https://i.postimg.cc/GtK1wWKD/db93517c-0588-4a1b-b9a7-641b235597ad.jpg'
global.img16 = 'https://i.postimg.cc/cLb0JNSM/474106d3-382b-4964-af1e-fbfb35d495cd.jpg' //+18
global.img17 = 'https://i.postimg.cc/GtK1wWKD/db93517c-0588-4a1b-b9a7-641b235597ad.jpg'
global.img18 = 'https://i.postimg.cc/j5T9x8L4/f0304022-da50-4a0a-8be4-6b4138bab3af.jpg'

global.iimg1 = 'https://i.postimg.cc/t4KK7yy7/11fe6d78ece25ee972ee8de229e182a9.jpg'
global.iimg2 = 'https://i.postimg.cc/5t5R0Cnk/66945863cdf7c56b212c2280e91d497b.jpg'
global.iimg3 = 'https://i.postimg.cc/x1D5zdJr/0c967c4af27aa805391e3be495936acd.jpg'
global.iimg4 = 'https://i.postimg.cc/kM2LNB4D/89aaf3a76c5af6c6904716889463a278.jpg'
global.iimg5 = 'https://i.postimg.cc/gJntKTG1/e872a51954db06122d6108df482ef157.jpg'

global.videonz1 = fs.readFileSync('./media/videos/Menu1.mp4')

global.logogit = 'https://tinyurl.com/2qvl9vgs'

global.gataVidMenu = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4'].getRandom()
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18].getRandom()
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13].getRandom()
global.menusImgs2 = [iimg1, iimg2, iimg3, iimg4, iimg5].getRandom()
global.menusImgs3 = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18, iimg1, iimg2, iimg3, iimg4, iimg5].getRandom()

// Fake
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: gataImg, thumbnail: imagen1, sourceUrl: accountsgb }}}, { quoted: m }
  
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: gataMenu, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 

//let bottime = `${name} 𝗧𝗜𝗠𝗘: ${moment.tz('America/Bogota').format('HH:mm:ss')}`//America/Los_Angeles

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')}}}
                             
let enlace = { contextInfo: { externalAdReply: {title: wm, body: nzinfo, sourceUrl: redesMenu, thumbnail: await(await fetch(gataMenu)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: nzinfo, thumbnailUrl: gataMenu, sourceUrl: accountsgb }}}
let dos = [enlace, enlace2]  

global.wait = "『⏳』𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐... ⛤";
global.waitt = "『⌛』𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐... ⛧";
global.waittt = "『⏳』𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐... ⛤";
global.waitttt = "『⌛』𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐... ⛧";
global.waittttt = "『⌛』𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐... `100%`"

global.destraba = `*⏰DESTRABA⏰*
li.DESTRAVip.to
2024 🦍💨

ဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪ
☣✝ﾚⅰɬ◊D͠Я◊ⅰD͠  D͠∑ㄅɬЯ∆√✝☣`
  
}
export default handler

// Mensaje de espera
// await mensajesEditados(conn, m)
global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }
