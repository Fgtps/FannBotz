
let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, usedPrefix }) => {

let ppown = await conn.profilePictureUrl(nomorown1 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1])
let teksbio = `ββ«Ήβ«Ί π Nama : IRFAN
ββ«Ήβ«Ί βοΈ Gender : PRIA
ββ«Ήβ«Ί π± Nomor : @${nomorown1.split`@`[0]}
ββ«Ήβ«Ί β° Tanggal lahir : 27 - June - 2006
ββ«Ήβ«Ί πΊοΈ Tinggal : Indonesia, Jawa Tengah
βββββββββββββΒ·β’
`

conn.sendButton(m.chat, 'ββββββ', teksbio, ppown, [
                ['Menu', `${usedPrefix}menu`]
            ], m)
            }
            

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)/i
export default handler