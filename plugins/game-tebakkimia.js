/*
import fetch from 'node-fetch'
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkimia[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Nama unsur dari lambang ${json.lambang} adalah...

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teki untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakkimia[id] = [
        await conn.sendBut(m.chat, caption, wm, 'Bantuan', '.teki', m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.unsur}*`, wm, 'Tebak Kimia', '.tebakkimia', conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i

handler.game = true

export default handler
*/
//------------------------

import fetch from 'node-fetch'

let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkimia[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Nama unsur dari lambang *${json.lambang}* adalah...

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: ${poin} XP

*Note : Reply Pesan Ini Jika Ingin Menjawab Soal*
`.trim()

conn.tebakkimia[id] = [
        await conn.sendBut(m.chat, caption, wm, 'Bantuan', '.teki', m),
/*
    conn.tebakkimia[id] = [
        await conn.reply(m.chat, caption, m),*/
        json, poin,
        setTimeout(() => {
        
        if (conn.tebakkimia[id]) conn.sendBut(m.chat, `Waktu habis!\nJawabannya adalah *${json.unsur}*`, wm, 'Tebak Kimia', '.tebakkimia', conn.tebakkimia[id][0])

            /*if (conn.tebakkimia[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.unsur}*`, conn.tebakkimia[id][0])*/
            
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i

handler.game = true

export default handler
/*
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^(tebakkimia)$/i
handler.limit = true
handler.group = false

module.exports = handler
*/