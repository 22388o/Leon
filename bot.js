const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const exec = require('child_process').exec;
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./leon/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');

const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

function _0x5df1(_0xf63735,_0x1aa597){var _0x32ddeb=_0x32dd();return _0x5df1=function(_0x5df173,_0x5d25fd){_0x5df173=_0x5df173-0xbb;var _0x1eae55=_0x32ddeb[_0x5df173];return _0x1eae55;},_0x5df1(_0xf63735,_0x1aa597);}function _0x32dd(){var _0x368819=['918190rDobaN','ഇമോജികൾ\x20അല്ലെങ്കിൽ\x20ലാറ്റിൻ\x20ഇതര\x20അക്ഷരങ്ങൾ\x20ഉപയോഗിക്കുന്നത്\x20ഒഴിവാക്കുക.\x20പിശക്\x20തുടരുകയാണെങ്കിൽ,\x20ഡെവലപ്പറെ\x20അറിയിക്കുക.','There\x20is\x20no\x20known\x20solution\x20for\x20this.\x20You\x20can\x20report\x20this\x20to\x20the\x20developer\x20to\x20solve.','534867UITxHR','Tidak\x20dapat\x20memecahkan\x20kode\x20teks\x20atau\x20media\x20karena\x20menggunakan\x20metode\x20pengkodean\x20yang\x20salah\x20atau\x20salah\x20menggunakan\x20plugin\x20ini.','കൃത്യമായ\x20കാരണം\x20അജ്ഞാതമാണ്,\x20പക്ഷേ\x20ഇത്\x20ബെയ്‌ലിയുടെ\x20പിശകാണ്.\x20\x20ഒന്നിലധികം\x20ഓപ്ഷനുകൾ\x20ഈ\x20പിശകിന്\x20കാരണമായേക്കാം.','Pastikan\x20Anda\x20membaca\x20deskripsi\x20dengan\x20jelas.\x20\x20Jika\x20kesalahan\x20berlanjut,\x20Laporkan\x20ini\x20ke\x20pengembang.','അഭ്യർത്ഥിച്ച\x20url\x20കണ്ടെത്തിയില്ല\x20അല്ലെങ്കിൽ\x20ലോഡുചെയ്യുന്നതിൽ\x20പരാജയപ്പെട്ടു.','404','Hindari\x20penggunaan\x20perintah\x20update\x20lebih\x20dari\x20satu\x20kali\x20dan\x20hindari\x20mengupdate\x20lebih\x20dari\x20satu\x20aplikasi\x20di\x20akun\x20heroku\x20secara\x20bersamaan.','Incorrect\x20use\x20of\x20command,\x20Usage\x20of\x20emojis\x20or\x20letters\x20that\x20are\x20not\x20latin.','Penggunaan\x20perintah\x20yang\x20salah,\x20Penggunaan\x20emoji\x20atau\x20huruf\x20yang\x20bukan\x20latin.','നിങ്ങൾ\x20വിവരണം\x20വ്യക്തമായി\x20വായിച്ചിട്ടുണ്ടെന്ന്\x20ഉറപ്പാക്കുക.\x20\x20പിശക്\x20തുടരുകയാണെങ്കിൽ,\x20ഇത്\x20ഡെവലപ്പർക്ക്\x20റിപ്പോർട്ട്\x20ചെയ്യുക.','Basis\x20data\x20SQL\x20mungkin\x20rusak.','If\x20you\x20use\x20it\x20again,\x20it\x20may\x20improve.\x20If\x20error\x20continues,\x20Try\x20restarting\x20the\x20bot.','Url\x20yang\x20diminta\x20tidak\x20ditemukan\x20atau\x20gagal\x20dimuat.','*\x0a\x0a','*🛑\x20ERROR\x20REPORT\x20🛑*\x0a\x0a*An\x20error\x20occurred!*\x0a*This\x20is\x20because\x20of\x20the\x20command\x20you\x20used\x20recently!*\x0a\x0a_➥\x20Error_\x20:\x20*','The\x20file\x20or\x20directory/folder\x20that\x20is\x20defined\x20or\x20required\x20is\x20not\x20found.','*🛑\x20പിശക്\x20റിപ്പോർട്ട്\x20🛑*\x0a\x0a*ഒരു\x20പിശക്\x20സംഭവിച്ചു!*\x0a*പിശക്\x20വിശകലനം\x20ചെയ്യാനായില്ല!*\x0a*ഇത്\x20നിങ്ങൾ\x20അടുത്തിടെ\x20ഉപയോഗിച്ച\x20കമാൻഡ്\x20കാരണമാണ്!*\x0a\x0a_➥\x20പിശക്_\x20:\x20*','ഇതിനൊന്നും\x20അറിയപ്പെടുന്ന\x20പരിഹാരമില്ല.\x20\x20പരിഹരിക്കാൻ\x20നിങ്ങൾക്ക്\x20ഇത്\x20ഡെവലപ്പർക്ക്\x20റിപ്പോർട്ട്\x20ചെയ്യാം.','File\x20atau\x20direktori/folder\x20yang\x20ditentukan\x20atau\x20diperlukan\x20tidak\x20ditemukan.','കമാൻഡിനൊപ്പം\x20എന്തെങ്കിലും\x20നൽകാൻ\x20ശ്രമിക്കുക\x20അല്ലെങ്കിൽ\x20പരിഹരിക്കാൻ\x20ഇത്\x20ഡെവലപ്പർക്ക്\x20റിപ്പോർട്ട്\x20ചെയ്യുക.','propert','Cannot\x20decode\x20text\x20or\x20media\x20because\x20of\x20using\x20incorrect\x20codded\x20method\x20or\x20incorrect\x20to\x20use\x20this\x20plugin.','Tidak\x20ada\x20solusi\x20yang\x20diketahui\x20untuk\x20ini.\x20\x20Anda\x20dapat\x20melaporkan\x20ini\x20ke\x20pengembang\x20untuk\x20memecahkan.','Hindari\x20menggunakan\x20perintah\x20tersebut\x20di\x20log/nomor\x20mandiri.','*🛑\x20LAPORAN\x20KESALAHAN\x20🛑*\x0a\x0a*Terjadi\x20kesalahan!*\x0a*Tidak\x20dapat\x20menganalisis\x20kesalahan!*\x0a*Ini\x20karena\x20perintah\x20yang\x20Anda\x20gunakan\x20baru-baru\x20ini!*\x0a\x0a_➥\x20Kesalahan_\x20:\x20*','*\x0a_➥\x20Solusi_\x20:\x20*','311088GKwGeX','false','Coba\x20restart\x20bot,\x20Ini\x20bukan\x20kesalahan\x20fatal.','true','135455zCSYhE','*🛑\x20പിശക്\x20റിപ്പോർട്ട്\x20🛑*\x0a\x0a*ഒരു\x20പിശക്\x20സംഭവിച്ചു!*\x0a*ഇത്\x20നിങ്ങൾ\x20അടുത്തിടെ\x20ഉപയോഗിച്ച\x20കമാൻഡ്\x20കാരണമാണ്!*\x0a\x0a_➥\x20പിശക്_\x20:\x20*','1078356WkFBKt','Penggunaan\x20perintah\x20update\x20lebih\x20dari\x20satu\x20kali\x20atau\x20mengupdate\x20lebih\x20dari\x20satu\x20aplikasi\x20di\x20akun\x20heroku\x20secara\x20bersamaan.','ഒന്നിലധികം\x20തവണ\x20അപ്‌ഡേറ്റ്\x20കമാൻഡിന്റെ\x20ഉപയോഗം\x20അല്ലെങ്കിൽ\x20ഹീറോകു\x20അക്കൗണ്ടിൽ\x20ഒരേ\x20സമയം\x20ഒന്നിലധികം\x20ആപ്പുകൾ\x20അപ്‌ഡേറ്റ്\x20ചെയ്യുക.','.delete','നിർവചിച്ചതോ\x20ആവശ്യമുള്ളതോ\x20ആയ\x20ഫയൽ\x20അല്ലെങ്കിൽ\x20ഡയറക്ടറി/ഫോൾഡർ\x20കണ്ടെത്തിയില്ല.','*❔️\x20ERROR\x20ANALYZER\x20❔️*\x0a\x0a*If\x20you\x20cannot\x20resolve\x20this\x20error\x20by\x20following\x20reason,\x20Please\x20report\x20this\x20to\x20the\x20developer\x20to\x20resolve!*\x0a\x0a_➥\x20Reason_\x20:\x20*','Make\x20sure\x20you\x20read\x20the\x20description\x20clearly.\x20If\x20the\x20error\x20continues,\x20Report\x20this\x20to\x20the\x20developer.','The\x20exact\x20reason\x20is\x20unknown\x20but\x20it\x20is\x20a\x20baileys\x20error.\x20More\x20than\x20one\x20option\x20may\x20have\x20triggered\x20this\x20error.','operator','Meminta\x20url\x20localhost\x20atau\x20masalah\x20dengan\x20port.','Gagal\x20menghapus\x20pesan.','275280woKBef','*❔️\x20ANALISIS\x20KESALAHAN\x20❔️*\x0a\x0a*Jika\x20Anda\x20tidak\x20dapat\x20mengatasi\x20kesalahan\x20ini\x20dengan\x20alasan\x20berikut,\x20Harap\x20laporkan\x20ini\x20ke\x20pengembang\x20untuk\x20menyelesaikannya!*\x0a\x0a_➥\x20Alasan_\x20:\x20*','ലോഗ്/സ്വന്തം\x20നമ്പറിൽ\x20ചില\x20കമാൻഡുകളുടെ\x20ഉപയോഗം\x20(\x20sticker,\x20photo,\x20unvoice,\x20unaudio\x20തുടങ്ങിയവ..\x20).','നിങ്ങൾ\x20ഇത്\x20വീണ്ടും\x20ഉപയോഗിക്കുകയാണെങ്കിൽ,\x20അത്\x20മെച്ചപ്പെട്ടേക്കാം.\x20\x20പിശക്\x20തുടരുകയാണെങ്കിൽ,\x20ബോട്ട്\x20പുനരാരംഭിചിട്ട്\x20വീണ്ടും\x20ശ്രെമിക്കുക.','The\x20requested\x20url\x20is\x20not\x20found\x20or\x20failed\x20to\x20load.','Avoid\x20using\x20emojis\x20or\x20non-latin\x20letters.\x20If\x20the\x20error\x20continues,\x20report\x20to\x20the\x20developer.','ലോക്കൽ\x20ഹോസ്റ്റ്\x20url-കൾ\x20അഭ്യർത്ഥിക്കുന്നു\x20അല്ലെങ്കിൽ\x20പോർട്ടുമായി\x20ബന്ധപ്പെട്ട\x20പ്രശ്നം.','503','unescaped','Requesting\x20localhost\x20urls\x20or\x20the\x20issue\x20with\x20the\x20port.','ബോട്ട്\x20പുനരാരംഭിചിട്ട്\x20വീണ്ടും\x20ശ്രമിക്കുക,\x20പിശക്\x20തുടരുകയാണെങ്കിൽ,\x20ഇത്\x20ഡെവലപ്പറെ\x20അറിയിക്കുക.','3721753EueHMR','തെറ്റായ\x20കോഡ്\x20ചെയ്ത\x20രീതി\x20അല്ലെങ്കിൽ\x20ഈ\x20പ്ലഗിൻ\x20ഉപയോഗിക്കുന്നത്\x20തെറ്റായതിനാലോ\x20ടെക്‌സ്‌റ്റോ\x20മീഡിയയോ\x20ഡീകോഡ്\x20ചെയ്യാൻ\x20കഴിയില്ല.','Try\x20restarting\x20bot,\x20If\x20the\x20error\x20continues,\x20Report\x20this\x20to\x20the\x20developer.','Try\x20restarting\x20the\x20bot,\x20It\x20is\x20not\x20a\x20fatal\x20error.','1304604HhnshC','ബോട്ട്\x20പുനരാരംഭിചിട്ട്\x20വീണ്ടും\x20ശ്രെമിക്കുക,\x20ഇതൊരു\x20മാരകമായ\x20പിശകല്ല.','329700JGLCHw','143527jQnqeS','ECONNREFUSED','push','Coba\x20masukkan\x20huruf\x20latin\x20beserta\x20perintahnya,\x20bukan\x20emoji\x20dan\x20huruf\x20non-latin.','Try\x20entering\x20anything\x20along\x20with\x20the\x20command\x20or\x20report\x20this\x20to\x20the\x20developer\x20to\x20solve.','SSL','includes','Coba\x20masukkan\x20apa\x20saja\x20bersama\x20dengan\x20perintah\x20atau\x20laporkan\x20ini\x20ke\x20pengembang\x20untuk\x20diselesaikan.','Hindari\x20penggunaan\x20emoji\x20atau\x20huruf\x20non-latin.\x20Jika\x20kesalahan\x20berlanjut,\x20laporkan\x20ke\x20pengembang.','333736zrCSOD','Penggunaan\x20perintah\x20atau\x20kode\x20salah,\x20Penggunaan\x20emoji\x20atau\x20huruf\x20yang\x20bukan\x20latin\x20atau\x20menggunakan\x20operator\x20in\x20untuk\x20mencari\x20teks\x20dalam\x20string.','URL','607075dXaIPw','ലോഗ്/സ്വന്തം\x20നമ്പറിൽ\x20ആ\x20കമാൻഡുകൾ\x20ഉപയോഗിക്കുന്നത്\x20ഒഴിവാക്കുക.','സന്ദേശം\x20ഇല്ലാതാക്കുന്നതിൽ\x20പരാജയം.','no\x20such','1087545YRyBXc','The\x20usage\x20of\x20update\x20command\x20more\x20than\x20one\x20time\x20or\x20updating\x20more\x20than\x20one\x20app\x20in\x20heroku\x20account\x20at\x20the\x20same\x20time.','*\x0a_➥\x20പരിഹാരം_\x20:\x20*','SQL\x20database\x20may\x20be\x20corrupted.','SQL\x20ഡാറ്റാബേസ്\x20കേടായേക്കാം.','കമാൻഡിന്റെ\x20തെറ്റായ\x20ഉപയോഗം,\x20ഇമോജികളുടെ\x20അല്ലെങ്കിൽ\x20ലാറ്റിൻ\x20അല്ലാത്ത\x20അക്ഷരങ്ങളുടെ\x20ഉപയോഗം.','shift','message'];_0x32dd=function(){return _0x368819;};return _0x32dd();}(function(_0xb0aa39,_0x3c4a65){var _0x4b5d49=_0x5df1,_0x493c42=_0xb0aa39();while(!![]){try{var _0x2e428c=parseInt(_0x4b5d49(0xbe))/0x1+-parseInt(_0x4b5d49(0xcb))/0x2+parseInt(_0x4b5d49(0xed))/0x3+parseInt(_0x4b5d49(0xe6))/0x4+-parseInt(_0x4b5d49(0xdc))/0x5+-parseInt(_0x4b5d49(0xda))/0x6+parseInt(_0x4b5d49(0xe9))/0x7;if(_0x2e428c===_0x3c4a65)break;else _0x493c42['push'](_0x493c42['shift']());}catch(_0x287238){_0x493c42['push'](_0x493c42['shift']());}}}(_0x32dd,0x3c54b),function(_0x15ade3,_0x55dac7){var _0x2e6f66=_0x5df1,_0x25fdb1=_0x19f1,_0x52b522=_0x15ade3();while(!![]){try{var _0x13f750=parseInt(_0x25fdb1(0x19b))/0x1+parseInt(_0x25fdb1(0x197))/0x2+-parseInt(_0x25fdb1(0x1cf))/0x3+parseInt(_0x25fdb1(0x189))/0x4+parseInt(_0x25fdb1(0x1b8))/0x5+-parseInt(_0x25fdb1(0x1d0))/0x6+-parseInt(_0x25fdb1(0x1d4))/0x7;if(_0x13f750===_0x55dac7)break;else _0x52b522[_0x2e6f66(0xdf)](_0x52b522['shift']());}catch(_0x4b3e0a){_0x52b522[_0x2e6f66(0xdf)](_0x52b522[_0x2e6f66(0xf3)]());}}}(_0x4480,0x2a6c5));function _0x4480(){var _0x21e46d=_0x5df1,_0xfa5ee0=[_0x21e46d(0xd4),_0x21e46d(0xbf),'Failure\x20of\x20deleting\x20the\x20message.',_0x21e46d(0xd7),_0x21e46d(0xff),'ഇമോജികൾക്കും\x20ലാറ്റിൻ\x20ഇതര\x20അക്ഷരങ്ങൾക്കും\x20പകരം\x20കമാൻഡിനോടൊപ്പം\x20ലാറ്റിൻ\x20അക്ഷരങ്ങൾ\x20നൽകാൻ\x20ശ്രമിക്കുക.','677654uhekri',_0x21e46d(0xbb),'Incorrect\x20use\x20of\x20command\x20or\x20code,\x20Usage\x20of\x20emojis\x20or\x20letters\x20that\x20are\x20not\x20latin\x20or\x20using\x20in\x20operator\x20to\x20search\x20text\x20in\x20string.',_0x21e46d(0x102),_0x21e46d(0xdd),_0x21e46d(0xe7),_0x21e46d(0xfb),'*🛑\x20LAPORAN\x20KESALAHAN\x20🛑*\x0a\x0a*Terjadi\x20kesalahan!*\x0a*Ini\x20karena\x20perintah\x20yang\x20Anda\x20gunakan\x20baru-baru\x20ini!*\x0a\x0a_➥\x20Kesalahan_\x20:\x20*',_0x21e46d(0xef),_0x21e46d(0xe2),_0x21e46d(0xd9),_0x21e46d(0xee),'Avoid\x20using\x20those\x20commands\x20in\x20log/self\x20number.','400','The\x20usage\x20of\x20some\x20commands\x20(\x20sticker,\x20photo,\x20unvoice,\x20unaudio\x20etc..\x20)\x20in\x20log/self\x20number.',_0x21e46d(0xbc),_0x21e46d(0xd8),_0x21e46d(0xc3),_0x21e46d(0xdb),_0x21e46d(0xec),_0x21e46d(0xd0),'Tidak\x20ada\x20solusi\x20yang\x20diketahui\x20untuk\x20ini.\x20\x20Anda\x20dapat\x20melaporkan\x20ini\x20ke\x20pengembang\x20untuk\x20memecahkan.',_0x21e46d(0x10c),'കമാൻഡിന്റെയോ\x20കോഡിന്റെയോ\x20തെറ്റായ\x20ഉപയോഗം,\x20ലാറ്റിൻ\x20അല്ലാത്ത\x20ഇമോജികളുടെയോ\x20അക്ഷരങ്ങളുടെയോ\x20ഉപയോഗം\x20അല്ലെങ്കിൽ\x20സ്ട്രിംഗിൽ\x20ടെക്‌സ്‌റ്റ്\x20തിരയാൻ\x20in\x20ഓപ്പറേറ്ററിൽ\x20ഉപയോഗിക്കുന്നു.',_0x21e46d(0x10a),'Coba\x20mulai\x20ulang\x20bot,\x20Jika\x20kesalahan\x20berlanjut,\x20Laporkan\x20ke\x20pengembang.','There\x20is\x20no\x20known\x20solution\x20for\x20this.\x20You\x20can\x20report\x20this\x20to\x20the\x20developer\x20to\x20solve.',_0x21e46d(0x100),_0x21e46d(0xfe),_0x21e46d(0xc8),_0x21e46d(0xc1),'Alasan\x20pastinya\x20tidak\x20diketahui\x20tetapi\x20ini\x20adalah\x20kesalahan\x20bailey.\x20\x20Lebih\x20dari\x20satu\x20opsi\x20mungkin\x20telah\x20memicu\x20kesalahan\x20ini.','*🛑\x20ERROR\x20REPORT\x20🛑*\x0a\x0a*An\x20error\x20occurred!*\x0a*Couldn\x27t\x20analyze\x20error!*\x0a*This\x20is\x20because\x20of\x20the\x20command\x20you\x20used\x20recently!*\x0a\x0a_➥\x20Error_\x20:\x20*',_0x21e46d(0xf5),_0x21e46d(0xf2),_0x21e46d(0xd1),_0x21e46d(0xd2),_0x21e46d(0xca),_0x21e46d(0xd3),_0x21e46d(0xe4),_0x21e46d(0xfd),_0x21e46d(0x106),'*❔️\x20പിശക്\x20വിശകലനം\x20❔️*\x0a\x0a*ഇനിപ്പറയുന്ന\x20കാരണത്താൽ\x20നിങ്ങൾക്ക്\x20ഈ\x20പിശക്\x20പരിഹരിക്കാൻ\x20കഴിയുന്നില്ലെങ്കിൽ,\x20പരിഹരിക്കാൻ\x20ഇത്\x20ഡെവലപ്പർക്ക്\x20റിപ്പോർട്ട്\x20ചെയ്യുക!*\x0a\x0a_➥\x20കാരണം_\x20:\x20*','പ്രവർത്തനത്തിൽ\x20പ്രധാനപ്പെട്ട\x20എന്തെങ്കിലും\x20കണ്ടെത്താനായില്ല.','Jika\x20Anda\x20menggunakannya\x20lagi,\x20ini\x20mungkin\x20membaik.\x20\x20Jika\x20kesalahan\x20berlanjut,\x20Coba\x20mulai\x20ulang\x20bot.','Penggunaan\x20beberapa\x20perintah\x20(\x20sticker,\x20photo,\x20unvoice,\x20unaudio\x20dll.\x20)\x20pada\x20log/self\x20number.',_0x21e46d(0x109),'Avoid\x20using\x20update\x20command\x20more\x20than\x20one\x20time\x20and\x20avoid\x20updating\x20more\x20than\x20one\x20app\x20in\x20the\x20heroku\x20account\x20at\x20the\x20same\x20time.',_0x21e46d(0xf1),'Try\x20entering\x20latin\x20letters\x20along\x20with\x20the\x20command\x20instead\x20emojis\x20and\x20non-latin\x20letters.',_0x21e46d(0x107),_0x21e46d(0xe5),_0x21e46d(0xc6),_0x21e46d(0xe0),_0x21e46d(0x105),_0x21e46d(0x10f),_0x21e46d(0xf8),_0x21e46d(0x112),_0x21e46d(0xcd),_0x21e46d(0xbd),_0x21e46d(0xe1),_0x21e46d(0xd6),_0x21e46d(0xe3),_0x21e46d(0xc0),_0x21e46d(0xc5),_0x21e46d(0xc9),_0x21e46d(0xf4),_0x21e46d(0xf6),'ഒന്നിലധികം\x20തവണ\x20അപ്‌ഡേറ്റ്\x20കമാൻഡ്\x20ഉപയോഗിക്കുന്നത്\x20ഒഴിവാക്കുക,\x20ഒരേ\x20സമയം\x20ഹീറോകു\x20അക്കൗണ്ടിൽ\x20ഒന്നിലധികം\x20ആപ്പുകൾ\x20അപ്‌ഡേറ്റ്\x20ചെയ്യുന്നത്\x20ഒഴിവാക്കുക.',_0x21e46d(0xeb),'decode'];return _0x4480=function(){return _0xfa5ee0;},_0x4480();}function _0x19f1(_0x48d037,_0x311eda){var _0x52cd5b=_0x4480();return _0x19f1=function(_0x24261c,_0x5dbc7a){_0x24261c=_0x24261c-0x189;var _0x2a1067=_0x52cd5b[_0x24261c];return _0x2a1067;},_0x19f1(_0x48d037,_0x311eda);}function getErrorMessage(_0x1ba348,_0x3940ac,_0x4c8f88){var _0x577a8d=_0x5df1,_0x4f5c3b=_0x19f1,_0x2c3899=undefined;if(_0x4c8f88==_0x4f5c3b(0x198)){if(_0x1ba348=='EN')_0x2c3899=_0x4f5c3b(0x1c0)+_0x3940ac+'*';if(_0x1ba348=='ML')_0x2c3899=_0x4f5c3b(0x192)+_0x3940ac+'*';if(_0x1ba348=='ID')_0x2c3899=_0x4f5c3b(0x19e)+_0x3940ac+'*';return _0x2c3899;}else{if(_0x4c8f88==_0x4f5c3b(0x1d2)){var _0x6d8c3c=undefined,_0x5e3b28=undefined;if(_0x3940ac[_0x4f5c3b(0x18c)][_0x4f5c3b(0x1d5)](_0x577a8d(0xe8))){if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x1a5),_0x5e3b28=_0x4f5c3b(0x1a3);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x4f5c3b(0x1d1),_0x5e3b28=_0x577a8d(0xea);else{if(_0x1ba348=='ID')_0x6d8c3c=_0x4f5c3b(0x1c4),_0x5e3b28=_0x4f5c3b(0x1ce);}}}else{if(_0x3940ac[_0x4f5c3b(0x18c)][_0x4f5c3b(0x1d5)](_0x4f5c3b(0x1ad))){if(_0x1ba348=='EN')_0x6d8c3c='Couldn\x27t\x20find\x20something\x20that\x20is\x20important\x20to\x20do\x20action.',_0x5e3b28=_0x4f5c3b(0x1d3);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x4f5c3b(0x1c2),_0x5e3b28=_0x577a8d(0x10b);else{if(_0x1ba348=='ID')_0x6d8c3c='Tidak\x20dapat\x20menemukan\x20sesuatu\x20yang\x20penting\x20untuk\x20dilakukan\x20tindakan.',_0x5e3b28=_0x4f5c3b(0x1be);}}}else{if(_0x3940ac[_0x4f5c3b(0x18c)]['includes'](_0x4f5c3b(0x1a0))){if(_0x1ba348=='EN')_0x6d8c3c=_0x577a8d(0xf0),_0x5e3b28=_0x577a8d(0xf7);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x4f5c3b(0x1c7),_0x5e3b28=_0x4f5c3b(0x1c5);else{if(_0x1ba348=='ID')_0x6d8c3c=_0x4f5c3b(0x19a),_0x5e3b28=_0x4f5c3b(0x1ac);}}}else{if(_0x3940ac['message'][_0x4f5c3b(0x1d5)](_0x4f5c3b(0x1aa))){if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x1c9),_0x5e3b28=_0x4f5c3b(0x1b1);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x577a8d(0xc4),_0x5e3b28=_0x4f5c3b(0x1c5);else{if(_0x1ba348=='ID')_0x6d8c3c=_0x4f5c3b(0x1af),_0x5e3b28=_0x577a8d(0x10e);}}}else{if(_0x3940ac[_0x4f5c3b(0x18c)]['includes'](_0x4f5c3b(0x1bf))||_0x3940ac[_0x4f5c3b(0x18c)][_0x4f5c3b(0x1d5)](_0x4f5c3b(0x1bb))){if(_0x1ba348=='EN')_0x6d8c3c=_0x577a8d(0xcf),_0x5e3b28=_0x4f5c3b(0x1b1);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x577a8d(0xfc),_0x5e3b28=_0x577a8d(0x109);else{if(_0x1ba348=='EN')_0x6d8c3c=_0x577a8d(0x104),_0x5e3b28=_0x577a8d(0x10e);}}}else{if(_0x3940ac[_0x4f5c3b(0x18c)][_0x4f5c3b(0x1d5)](_0x4f5c3b(0x1a8))){if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x193),_0x5e3b28=_0x4f5c3b(0x1a1);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x4f5c3b(0x18f),_0x5e3b28=_0x4f5c3b(0x1a9);else{if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x1bc),_0x5e3b28=_0x4f5c3b(0x1a6);}}}else{if(_0x3940ac[_0x4f5c3b(0x18c)][_0x577a8d(0xe3)](_0x4f5c3b(0x1a4))){if(_0x1ba348=='EN')_0x6d8c3c=_0x577a8d(0xc7),_0x5e3b28=_0x577a8d(0x103);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x577a8d(0xfa),_0x5e3b28=_0x577a8d(0xce);else{if(_0x1ba348=='ID')_0x6d8c3c=_0x4f5c3b(0x1b6),_0x5e3b28=_0x4f5c3b(0x1c3);}}}else{if(_0x3940ac['message'][_0x4f5c3b(0x1d5)](_0x4f5c3b(0x190))){if(_0x1ba348=='EN')_0x6d8c3c=_0x577a8d(0x10d),_0x5e3b28=_0x4f5c3b(0x1cb);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x4f5c3b(0x194),_0x5e3b28=_0x577a8d(0x101);else{if(_0x1ba348=='ID')_0x6d8c3c=_0x577a8d(0xf9),_0x5e3b28=_0x4f5c3b(0x19d);}}}else{if(_0x3940ac[_0x577a8d(0xf4)][_0x4f5c3b(0x1d5)](_0x4f5c3b(0x1bd))){if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x195),_0x5e3b28=_0x4f5c3b(0x1c8);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x4f5c3b(0x1b9),_0x5e3b28=_0x4f5c3b(0x196);else{if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x1b2),_0x5e3b28=_0x4f5c3b(0x1cc);}}}else{if(_0x3940ac[_0x577a8d(0xf4)][_0x4f5c3b(0x1d5)](_0x577a8d(0xde))){if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x191),_0x5e3b28=_0x4f5c3b(0x1a7);else{if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x1ba),_0x5e3b28=_0x577a8d(0xd5);else{if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x18b),_0x5e3b28=_0x4f5c3b(0x1b0);}}}else{if(_0x3940ac[_0x4f5c3b(0x18c)][_0x4f5c3b(0x1d5)]('git.heroku.com')){if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x1a2),_0x5e3b28=_0x4f5c3b(0x1c6);else{if(_0x1ba348=='EN')_0x6d8c3c=_0x577a8d(0xc2),_0x5e3b28=_0x4f5c3b(0x18e);else{if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x1b5),_0x5e3b28=_0x4f5c3b(0x1b3);}}}else{if(_0x3940ac[_0x577a8d(0xf4)][_0x577a8d(0xe3)](_0x4f5c3b(0x1b4))){if(_0x1ba348=='EN')_0x6d8c3c=_0x4f5c3b(0x199),_0x5e3b28=_0x4f5c3b(0x1ab);else{if(_0x1ba348=='ML')_0x6d8c3c=_0x4f5c3b(0x1ae),_0x5e3b28=_0x4f5c3b(0x18d);else{if(_0x1ba348=='ID')_0x6d8c3c=_0x4f5c3b(0x19c),_0x5e3b28=_0x4f5c3b(0x1ca);}}}else _0x6d8c3c=![],_0x5e3b28=![];}}}}}}}}}}}if(!_0x6d8c3c||!_0x5e3b28){if(_0x1ba348=='EN')_0x2c3899=_0x4f5c3b(0x1b7)+_0x3940ac+'*';if(_0x1ba348=='ML')_0x2c3899=_0x577a8d(0x108)+_0x3940ac+'*';if(_0x1ba348=='ID')_0x2c3899=_0x577a8d(0x110)+_0x3940ac+'*';return _0x2c3899;}else{if(_0x1ba348=='EN')_0x2c3899=_0x4f5c3b(0x1c0)+_0x3940ac+_0x4f5c3b(0x1cd)+_0x4f5c3b(0x18a)+_0x6d8c3c+'*\x0a_➥\x20Solution_\x20:\x20*'+_0x5e3b28+'*';if(_0x1ba348=='ML')_0x2c3899=_0x577a8d(0xbf)+_0x3940ac+_0x4f5c3b(0x1cd)+_0x4f5c3b(0x1c1)+_0x6d8c3c+_0x4f5c3b(0x19f)+_0x5e3b28+'*';if(_0x1ba348=='ID')_0x2c3899=_0x4f5c3b(0x19e)+_0x3940ac+_0x4f5c3b(0x1cd)+_0x577a8d(0xcc)+_0x6d8c3c+_0x577a8d(0x111)+_0x5e3b28+'*';return _0x2c3899;}}}}

const LeonDB = config.DATABASE.define('Leon', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

startLeon();

async function startLeon() {
    await config.DATABASE.sync();
    var StrSes_Db = await LeonDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    const Leon = new WAConnection();
    const Session = new StringSession();
    Leon.version = [3, 3430, 9];
    Leon.setMaxListeners(0);

    Leon.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        Leon.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        Leon.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    Leon.on ('open', async () => {
        console.log(
            chalk.blueBright.italic('🔁 CHECKING FOR COMMANDS...')
        );

        const authInfo = Leon.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await LeonDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    Leon.on('connecting', async () => {
        console.log(`${chalk.green.bold('👻 Leon')}
${chalk.white.bold('💬 Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('👤 Made By TOXIC-DEVIL')}

${chalk.green.bold("🔄 Connecting...")}`);
    });
    

    Leon.on('open', async () => {
        console.log(
            chalk.green.bold('🛑 NO COMMANDS FOUND!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ INSTALLING COMMANDS...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
          try {
              if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                  console.log(plugin.dataValues.name);
                  var response = await got(plugin.dataValues.url);
                  if (response.statusCode == 200) {
                      fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                      require('./plugins/' + plugin.dataValues.name + '.js');
                  }     
              }
          } catch {
              console.log('❌ PLUGIN (' + plugin.dataValues.name + ') HAS BEEN CORRUPTED!')
          }
        });

        console.log(
            chalk.blueBright.italic('✅ COMMANDS INSTALLED SUCCESSFULLY!')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('🎉 LEON IS NOW ACTIVE IN YOUR ACCOUNT!')
        );
       
         var startMsg = { en: "%2A%F0%9F%91%BB%20LEON%20IS%20NOW%20ACTIVE%2A", ml: "%2A%F0%9F%91%BB%20%E0%B4%B2%E0%B4%BF%E0%B4%AF%E0%B5%8B%E0%B5%BA%20%E0%B4%87%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B5%8B%E0%B5%BE%20%E0%B4%B8%E0%B4%9C%E0%B5%80%E0%B4%B5%E0%B4%AE%E0%B4%BE%E0%B4%A3%E0%B5%8D%2A", id: "%2A%F0%9F%91%BB%20Leon%20sekarang%20aktif%2A" }

         if (config.LANG == 'EN') {
             await Leon.sendMessage(Leon.user.jid, decodeURI(startMsg.en), MessageType.text);
         } else if (config.LANG == 'ID') {
             await Leon.sendMessage(Leon.user.jid, decodeURI(startMsg.id), MessageType.text);             
         } else {
             await Leon.sendMessage(Leon.user.jid, decodeURI(startMsg.ml), MessageType.text);
        }
    });
    
    setInterval(async () => { 
        if (config.AUTOBIO == 'true') {
            if (Leon.user.jid.startsWith('90')) { // Turkey
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('994')) { // Azerbayjan
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('94')) { // Sri Lanka
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('351')) { // Portugal
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('75')) { // Russia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Europe/Kaliningrad' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('7')) { // Indian
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('62')) { // Indonesia
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('49')) { // Germany
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('61')) { // Australia 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('55')) { // Brazil
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('33')) { // France
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('34')) { // Spain
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Europe/Madrid' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('44')) { // UK
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('39')) { // Italy 
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('7')) { // Kazakhistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Almaty' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('998')) { // Uzbekistan 
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else if (Leon.user.jid.startsWith('993')) { // Turkmenistan
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time
                await Leon.setStatus(biography)
            }
        }
    }, 7890);

    Leon.on('chat-update', async (m) => {
        var _0xa374=["\x68\x61\x73\x4E\x65\x77\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65\x73","\x63\x6F\x75\x6E\x74","\x61\x6C\x6C"];if(!m[_0xa374[0]]){return};if(!m[_0xa374[1]]&&  !m[_0xa374[2]]){return};const {messages}=m;var msg=messages[_0xa374[3]]()[0]

        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                  let pp 
                  try { pp = await Leon.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await Leon.getProfilePicture(); }
                   var json = await Leon.groupMetadata(msg.key.remoteJid)
                   await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                   let mention = '@' + msg.messageStubParameters[0].split('@')[0]
                   await Leon.sendMessage(msg.key.remoteJid, res.data, MessageType.image, { mimetype: Mimetype.png, caption:  gb.message.replace('@user', mention).replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', Leon.user.name), contextInfo: { mentionedJid: mention }, previewType: 0 }); });   
                } else {
                   var json = await Leon.groupMetadata(msg.key.remoteJid)
                   let mention = '@' + msg.messageStubParameters[0].split('@')[0]
                   await Leon.sendMessage(msg.key.remoteJid, gb.message.replace('@user', mention).replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', Leon.user.name), MessageType.text, { contextInfo: { mentionedJid: mention }, previewType: 0 });
            }
          }  
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {

             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                  let pp 
                  try { pp = await Leon.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await Leon.getProfilePicture(); }
                   var json = await Leon.groupMetadata(msg.key.remoteJid)
                   await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                   let mention = '@' + msg.messageStubParameters[0].split('@')[0]
                   await Leon.sendMessage(msg.key.remoteJid, res.data, MessageType.image, { mimetype: Mimetype.png, caption:  gb.message.replace('@user', mention).replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', Leon.user.name), contextInfo: { mentionedJid: mention }, previewType: 0 }); });   
                } else {
                   var json = await Leon.groupMetadata(msg.key.remoteJid)
                   let mention = '@' + msg.messageStubParameters[0].split('@')[0]
                   await Leon.sendMessage(msg.key.remoteJid, gb.message.replace('@user', mention).replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', Leon.user.name), MessageType.text, { contextInfo: { mentionedJid: mention }, previewType: 0 });
            }
          }         
            return;                               
        }

        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.endsWith('g.us') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }

        var _0xd3f9=["\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x43\x48\x41\x54\x4D\x4F\x44\x45","\x70\x63","\x70\x72\x69\x76\x61\x74\x65\x20\x63\x68\x61\x74","\x70\x72\x69\x76\x61\x74\x65\x20\x63\x68\x61\x74\x73","\x67\x2E\x75\x73","\x65\x6E\x64\x73\x57\x69\x74\x68","\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64","\x6B\x65\x79","\x67\x63","\x67\x72\x6F\x75\x70\x20\x63\x68\x61\x74","\x67\x72\x6F\x75\x70\x73","\x67\x72\x6F\x75\x70\x20\x63\x68\x61\x74\x73"];let cm=config[_0xd3f9[1]][_0xd3f9[0]]();if(cm== _0xd3f9[2]|| cm== _0xd3f9[3]|| cm== _0xd3f9[4]){if(msg[_0xd3f9[8]][_0xd3f9[7]][_0xd3f9[6]](_0xd3f9[5])){return}}else {if(cm== _0xd3f9[9]|| cm== _0xd3f9[10]|| cm== _0xd3f9[11]|| cm== _0xd3f9[12]){if(!msg[_0xd3f9[8]][_0xd3f9[7]][_0xd3f9[6]](_0xd3f9[5])){return}}}

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                  var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                  var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                  var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else if (msg.message && msg.message.buttonsResponseMessage.selectedButtonId) {
                  var text_msg = msg.message.buttonsResponseMessage.selectedButtonId;
                } else if (msg.message && msg.message.listResponseMessage.singleSelectReply.selectedRowId) {
                  var text_msg = msg.message.listResponseMessage.singleSelectReply.selectedRowId;
                } else {
                  var text_msg = undefined
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var sender = msg.key.remoteJid.endsWith('g.us') ? msg.participant : msg.key.remoteJid
                    sender = sender === Leon.user.jid ? Leon.user.jid : sender
                    var chat = Leon.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.endsWith('g.us')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.endsWith('g.us')) sendMsg = true;
                    }
    
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await Leon.chatRead(msg.key.remoteJid);
                        }
                        
                        var match = text_msg.match(command.pattern);

                        var _0xf390=["\x6F\x6E","\x69\x6D\x61\x67\x65","\x70\x68\x6F\x74\x6F","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x76\x69\x64\x65\x6F","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65"];if(command[_0xf390[0]]!== undefined&& (command[_0xf390[0]]=== _0xf390[1]|| command[_0xf390[0]]=== _0xf390[2])&& msg[_0xf390[4]][_0xf390[3]]!== null){whats=  new Image(Leon,msg)}else {if(command[_0xf390[0]]!== undefined&& (command[_0xf390[0]]=== _0xf390[5])&& msg[_0xf390[4]][_0xf390[6]]!== null){whats=  new Video(Leon,msg)}else {whats=  new Message(Leon,msg)}}

                        if (config.PVTDELMSG == 'true' && command.deleteCommand && msg.key.fromMe) {
                            await whats.delete();
                        }
                        
                        try {
                            await command.function(whats, match, sender);
                        }
                        catch (error) {
                          let error_report = await getErrorMessage(config.LANG, error, config.ERROR_ANALYZER);
                          await Leon.sendMessage(Leon.user.jid, error_report, MessageType.text);
                        }
                    }
                }
            }
        )
    });

    try {
        await Leon.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('ERROR...'))
            Leon.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await Leon.connect();
            } catch {
                return;
            }
        }
    }
}
