import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];

 const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
        const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
        const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
        const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
            const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '✅ 𝑴𝒆𝒏𝒖 𝒔𝒐𝒍𝒊𝒄𝒊𝒕𝒂𝒅𝒐, 𝒆𝒔𝒑𝒆𝒓𝒆...',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '😃 𝙃𝙤𝙡𝙖 ' + taguser, body: nzinfo, sourceUrl: canal2, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('📍');
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
  let txt =`╭───────────────̥•˚᳝᳝𖥻📚⋆•⊰
┃        \`𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉\`
╰───────────────̥•˚᳝᳝𖥻📚⋆•⊰
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _términos y condiciones_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _Bot_ 
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}cuentasnz_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}gruposnz_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}donar_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}grouplist_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}estado_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}infobot_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}instalarbot_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}creador_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}velocidad_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}reporte_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mirecurso_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}misdiamantes_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}miscoins_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}miexp_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mirole_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}minivel_
░⃟⃜📑ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mismonedas_
⊱•────────•⋆•────────•⊰
${readMore}
╭───────────────̥•˚᳝᳝𖥻🤖⋆•⊰
┃      \`𝙎𝙀𝙍𝘽𝙊𝙏 • 𝙉𝙕 𝘽𝙊𝙏\`
╰───────────────̥•˚᳝᳝𖥻🤖⋆•⊰
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ _${usedPrefix}serbot_
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ _${usedPrefix}serbot --code_
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ _${usedPrefix}nzbots_
░⃟⃜🌐ꪳ۫₎۬۟〬•⊰ _${usedPrefix}stop_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻🔴⋆•⊰
┃ \`𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝙔 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\`
╰───────────────̥•˚᳝᳝𖥻🟢⋆•⊰
░⃟⃜🍏ꪳ۫₎۬۟〬•⊰ _${usedPrefix}on_
░⃟⃜🍎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}off_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻📒⋆•⊰
┃      \`𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝙎\`
╰───────────────̥•˚᳝᳝𖥻📒⋆•⊰
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu1_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu2_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu3_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu4_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu5_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu6_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu7_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu8_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu9_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu10_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu11_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu12_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu13_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu14_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu15_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu16_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu17_
░⃟⃜📚ꪳ۫₎۬۟〬•⊰ _${usedPrefix}menu18_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻📬⋆•⊰
┃            \`𝙍𝙀𝙋𝙊𝙍𝙏𝙀𝙎\`
╰───────────────̥•˚᳝᳝𖥻📬⋆•⊰
░⃟⃜📥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}reporte_
░⃟⃜📥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}yoayudo_
░⃟⃜📥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}inforeporte_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻💸⋆•⊰
┃       \`𝙏𝙐𝙎 𝙍𝙀𝘾𝙐𝙍𝙎𝙊𝙎\`
╰───────────────̥•˚᳝᳝𖥻💸⋆•⊰
░⃟⃜🧧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mirecurso_
░⃟⃜🧧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}misdiamantes_
░⃟⃜🧧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}miscoins_
░⃟⃜🧧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}miexp_
░⃟⃜🧧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mirole_
░⃟⃜🧧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}minivel_
░⃟⃜🧧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mismonedas_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻🌉⋆•⊰
┃      \`𝙍𝘼𝙉𝘿𝙊𝙈 𝘼𝙉𝙄𝙈𝙀\`
╰───────────────̥•˚᳝᳝𖥻🌉⋆•⊰
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}chica_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}chico_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}cristianoronaldo_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}messi_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}meme_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}meme2_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}itzy_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}blackpink_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kpop *blackpink*_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kpop *exo*_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kpop *bts*_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}lolivid_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}loli_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}navidad_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ppcouple_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}neko_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}waifu_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}akira_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}akiyama_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}anna_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}asuna_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ayuzawa_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}boruto_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}chiho_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}chitoge_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}deidara_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}erza_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}elaina_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}eba_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}emilia_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}hestia_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}hinata_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}inori_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}isuzu_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}itachi_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}itori_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kaga_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kagura_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kaori_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}keneki_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kotori_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kurumi_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}madara_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mikasa_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}miku_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}minato_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}naruto_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}nezuko_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}sagiri_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}sasuke_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}sakura_
░⃟⃜⛩️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}cosplay_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻🥏⋆•⊰
┃ \`𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼 𝙏𝙐 𝙂𝙍𝙐𝙋𝙊\`
╰───────────────̥•˚᳝᳝𖥻🥏⋆•⊰
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}add_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kick_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}grupo *abrir*_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}grupo *cerrar*_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}promote_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}demote_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}banchat_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}configuracion_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}settings_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}vergrupo_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}unbanchat_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}banuser_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}unbanuser_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}admins_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tagall_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}hidetag_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}infogroup_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}grouptime_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}link_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}setname_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}setdesct_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}setwelcome_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}setbye_
░⃟⃜👥ꪳ۫₎۬۟〬•⊰ _${usedPrefix}resetlink_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻🌆⋆•⊰
┃      \`𝙇𝙊𝙂𝙊𝙎 𝙉𝙕 𝘽𝙊𝙏\`
╰───────────────̥•˚᳝᳝𖥻🌆⋆•⊰
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz1_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz2_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz3_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz4_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz5_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz6_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz7_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz8_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz9_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz10_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz11_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz12_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz13_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz14_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz15_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz16_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz17_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz18_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz19_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz20_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz21_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz22_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz23_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz24_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz25_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz26_
░⃟⃜🏙️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}logonz27_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻⬇️⋆•⊰
┃      \`𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝘿𝙊𝙍\`
╰───────────────̥•˚᳝᳝𖥻⬇️⋆•⊰
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}imagen_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}pinterest_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}wallpaper_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}play_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}play2_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}play.1_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}play.2_ 
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ytmp3_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}yta_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ytmp4_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ytv_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ytadoc_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ytvdoc_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}twitter_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}facebook_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}fb_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}instagram_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}igstalk_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}igstory_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tiktok_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tiktokimagen_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tiktokfoto_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tiktokstalk_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mediafire_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}gitclone_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}clima_
░⃟⃜🛰️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}historia_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻🌄⋆•⊰
┃      \`𝙀𝘿𝙄𝙏𝘼𝙍 𝙄𝙈𝘼𝙂𝙀𝙉\`
╰───────────────̥•˚᳝᳝𖥻🌅⋆•⊰
░⃟⃜♨️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}simpcard *@tag*_
░⃟⃜♨️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}hornycard *@tag*_
░⃟⃜♨️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}lolice *@tag*_
░⃟⃜♨️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ytcomment *texto*_
░⃟⃜♨️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}itssostupid_
░⃟⃜♨️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}pixelar_
░⃟⃜♨️ꪳ۫₎۬۟〬•⊰ _${usedPrefix}blur_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻👑⋆•⊰
┃   \`𝙎𝙊𝙇𝙊 𝙋𝘼𝙍𝘼 𝙊𝙒𝙉𝙀𝙍𝙎\`
╰───────────────̥•˚᳝᳝𖥻👑⋆•⊰
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}join_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}unete_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}dardiamantes_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}darxp_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}bc_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}bcc_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}comunicarpv_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}broadcastgc_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}comunicargrupos_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}cleartmp_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}delexp_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}deldiamantes_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}restart_
░⃟⃜💎ꪳ۫₎۬۟〬•⊰ _${usedPrefix}update_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻🛠️⋆•⊰
┃       \`𝙐𝙏𝙄𝙇𝙄𝘿𝘼𝘿𝙀𝙎 𝙉𝙕\`
╰───────────────̥•˚᳝᳝𖥻🛠️⋆•⊰
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}animeinfo_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mangainfo_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}google_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}googlelyrics_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}letra_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ytsearch_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}wikipedia_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}mipareja_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}pareja_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}aceptar_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}rechazar_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}terminar_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}chatanonimo_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}anonimoch_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}start_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}next_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}leave_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}afk_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}acortar_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}calc_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}del_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}qrcode_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}readmore_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}spamwa_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}styletext_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}traducir_
░⃟⃜🤖ꪳ۫₎۬۟〬•⊰ _${usedPrefix}horario_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻🔊⋆•⊰
┃     \`𝙀𝘿𝙄𝙏𝙊𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊𝙎\`
╰───────────────̥•˚᳝᳝𖥻🔊⋆•⊰
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}bass_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}blown_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}deep_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}earrape_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}fast_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}fat_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}nightcore_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}reverse_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}robot_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}slow_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}smooth_
░⃟⃜🎧ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tupai_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻💵⋆•⊰
┃       \`𝙍𝙋𝙂 𝙀𝘾𝙊𝙉𝙊𝙈𝙄𝘼\`
╰───────────────̥•˚᳝᳝𖥻💵⋆•⊰
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}botemporal_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}addbot_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}transfer_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}dar_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}enviar_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}balance_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}exp_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}levelup_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}rol_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}adventure_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}heal_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}buy_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}sell_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}verificar_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}perfil_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}myns_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}unreg_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}minardiamantes_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}minarcoins_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}minarexp_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}minar_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}rob_ 
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}crime
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}claim_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}cofre_
░⃟⃜🪙ꪳ۫₎۬۟〬•⊰ _${usedPrefix}work_
⊱•────────•⋆•────────•⊰

╭───────────────̥•˚᳝᳝𖥻♨️⋆•⊰
┃      \`𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙔 𝙈𝘼𝙎\`
╰───────────────̥•˚᳝᳝𖥻♨️⋆•⊰
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}sticker_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}s_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}emojimix_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}palmaditas_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}slap_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}golpear_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}kiss_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}alimentar_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}wm_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}scircle_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}semoji_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}attp *texto*_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}attp2 *texto*_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ttp *texto*_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ttp2 *texto*_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ttp3 *texto*_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ttp4 *texto*_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ttp5 *texto*_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}ttp6 *texto*_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}dado_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}toimg_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}toanime_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tomp3_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tovn_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}vn_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tovideo_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tourl_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}toenlace_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}tts_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}cs_
░⃟⃜🎨ꪳ۫₎۬۟〬•⊰ _${usedPrefix}cs2_
⊱•────────•⋆•────────•⊰`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": wm, "body": '👑 Hola ' + taguser + ' Bienvenido al menu.', "containsAutoReply": true, "mediaType": 1, "thumbnail": gataImg, "mediaUrl": redesMenu, "sourceUrl": redesMenu}}}, {quoted: fkon});
 // m.react('🧩');
  } catch {
    conn.reply(m.chat, '♨️ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menucompleto|menu0|allmenu)$/i;
handler.register = true
export default handler;
