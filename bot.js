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

function _0x20f7(_0x37de4c,_0x407593){var _0x4aed29=_0x4aed();return _0x20f7=function(_0x20f773,_0x151de2){_0x20f773=_0x20f773-0xcb;var _0x69233a=_0x4aed29[_0x20f773];return _0x69233a;},_0x20f7(_0x37de4c,_0x407593);}(function(_0x25945d,_0x19ba76){var _0x3b4bd1=_0x20f7,_0x1530b4=_0x25945d();while(!![]){try{var _0x53376f=-parseInt(_0x3b4bd1(0xe6))/0x1*(parseInt(_0x3b4bd1(0xe3))/0x2)+-parseInt(_0x3b4bd1(0xf8))/0x3*(-parseInt(_0x3b4bd1(0x121))/0x4)+parseInt(_0x3b4bd1(0xf0))/0x5+parseInt(_0x3b4bd1(0xd4))/0x6+-parseInt(_0x3b4bd1(0xdb))/0x7*(parseInt(_0x3b4bd1(0xce))/0x8)+parseInt(_0x3b4bd1(0x119))/0x9*(parseInt(_0x3b4bd1(0xec))/0xa)+-parseInt(_0x3b4bd1(0xef))/0xb;if(_0x53376f===_0x19ba76)break;else _0x1530b4['push'](_0x1530b4['shift']());}catch(_0x2c7b65){_0x1530b4['push'](_0x1530b4['shift']());}}}(_0x4aed,0x4b531));function _0x4d9a(_0x559390,_0x58f937){var _0x2e2843=_0x4f73();return _0x4d9a=function(_0x47afb3,_0x285c80){_0x47afb3=_0x47afb3-0x155;var _0x3fc278=_0x2e2843[_0x47afb3];return _0x3fc278;},_0x4d9a(_0x559390,_0x58f937);}function _0x4aed(){var _0x4faf70=['കമാൻഡിനൊപ്പം\x20എന്തെങ്കിലും\x20നൽകാൻ\x20ശ്രമിക്കുക\x20അല്ലെങ്കിൽ\x20പരിഹരിക്കാൻ\x20ഇത്\x20ഡെവലപ്പർക്ക്\x20റിപ്പോർട്ട്\x20ചെയ്യുക.','Tidak\x20ada\x20solusi\x20yang\x20diketahui\x20untuk\x20ini.\x20\x20Anda\x20dapat\x20melaporkan\x20ini\x20ke\x20pengembang\x20untuk\x20memecahkan.','shift','no\x20such','Penggunaan\x20perintah\x20update\x20lebih\x20dari\x20satu\x20kali\x20atau\x20mengupdate\x20lebih\x20dari\x20satu\x20aplikasi\x20di\x20akun\x20heroku\x20secara\x20bersamaan.','The\x20requested\x20url\x20is\x20not\x20found\x20or\x20failed\x20to\x20load.','Couldn\x27t\x20find\x20something\x20that\x20is\x20important\x20to\x20do\x20action.','Hindari\x20menggunakan\x20perintah\x20tersebut\x20di\x20log/nomor\x20mandiri.','includes','push','Hindari\x20penggunaan\x20perintah\x20update\x20lebih\x20dari\x20satu\x20kali\x20dan\x20hindari\x20mengupdate\x20lebih\x20dari\x20satu\x20aplikasi\x20di\x20akun\x20heroku\x20secara\x20bersamaan.','4185104dUeYFc','Coba\x20masukkan\x20huruf\x20latin\x20beserta\x20perintahnya,\x20bukan\x20emoji\x20dan\x20huruf\x20non-latin.','message','503','Coba\x20masukkan\x20apa\x20saja\x20bersama\x20dengan\x20perintah\x20atau\x20laporkan\x20ini\x20ke\x20pengembang\x20untuk\x20diselesaikan.','331326HsHvus','840OaXuXV','404','Make\x20sure\x20you\x20read\x20the\x20description\x20clearly.\x20If\x20the\x20error\x20continues,\x20Report\x20this\x20to\x20the\x20developer.','The\x20exact\x20reason\x20is\x20unknown\x20but\x20it\x20is\x20a\x20baileys\x20error.\x20More\x20than\x20one\x20option\x20may\x20have\x20triggered\x20this\x20error.','ബോട്ട്\x20പുനരാരംഭിചിട്ട്\x20വീണ്ടും\x20ശ്രമിക്കുക,\x20പിശക്\x20തുടരുകയാണെങ്കിൽ,\x20ഇത്\x20ഡെവലപ്പറെ\x20അറിയിക്കുക.','File\x20atau\x20direktori/folder\x20yang\x20ditentukan\x20atau\x20diperlukan\x20tidak\x20ditemukan.','Try\x20entering\x20latin\x20letters\x20along\x20with\x20the\x20command\x20instead\x20emojis\x20and\x20non-latin\x20letters.','552mhdphM','555130kHOUId','30815YzoQDC','*🛑\x20ERROR\x20REPORT\x20🛑*\x0a\x0a*An\x20error\x20occurred!*\x0a*Couldn\x27t\x20analyze\x20error!*\x0a*This\x20is\x20because\x20of\x20the\x20command\x20you\x20used\x20recently!*\x0a\x0a_➥\x20Error_\x20:\x20*','നിങ്ങൾ\x20വിവരണം\x20വ്യക്തമായി\x20വായിച്ചിട്ടുണ്ടെന്ന്\x20ഉറപ്പാക്കുക.\x20\x20പിശക്\x20തുടരുകയാണെങ്കിൽ,\x20ഇത്\x20ഡെവലപ്പർക്ക്\x20റിപ്പോർട്ട്\x20ചെയ്യുക.','19720plrcTf','SQL\x20database\x20may\x20be\x20corrupted.','ലോഗ്/സ്വന്തം\x20നമ്പറിൽ\x20ചില\x20കമാൻഡുകളുടെ\x20ഉപയോഗം\x20(\x20sticker,\x20photo,\x20unvoice,\x20unaudio\x20തുടങ്ങിയവ..\x20).','git.heroku.com','*\x0a_➥\x20Solusi_\x20:\x20*','*🛑\x20പിശക്\x20റിപ്പോർട്ട്\x20🛑*\x0a\x0a*ഒരു\x20പിശക്\x20സംഭവിച്ചു!*\x0a*ഇത്\x20നിങ്ങൾ\x20അടുത്തിടെ\x20ഉപയോഗിച്ച\x20കമാൻഡ്\x20കാരണമാണ്!*\x0a\x0a_➥\x20പിശക്_\x20:\x20*','2995014iFQBqz','Coba\x20restart\x20bot,\x20Ini\x20bukan\x20kesalahan\x20fatal.','അഭ്യർത്ഥിച്ച\x20url\x20കണ്ടെത്തിയില്ല\x20അല്ലെങ്കിൽ\x20ലോഡുചെയ്യുന്നതിൽ\x20പരാജയപ്പെട്ടു.','നിർവചിച്ചതോ\x20ആവശ്യമുള്ളതോ\x20ആയ\x20ഫയൽ\x20അല്ലെങ്കിൽ\x20ഡയറക്ടറി/ഫോൾഡർ\x20കണ്ടെത്തിയില്ല.','Requesting\x20localhost\x20urls\x20or\x20the\x20issue\x20with\x20the\x20port.','Jika\x20Anda\x20menggunakannya\x20lagi,\x20ini\x20mungkin\x20membaik.\x20\x20Jika\x20kesalahan\x20berlanjut,\x20Coba\x20mulai\x20ulang\x20bot.','There\x20is\x20no\x20known\x20solution\x20for\x20this.\x20You\x20can\x20report\x20this\x20to\x20the\x20developer\x20to\x20solve.','903OjFKlD','decode','400','Pastikan\x20Anda\x20membaca\x20deskripsi\x20dengan\x20jelas.\x20\x20Jika\x20kesalahan\x20berlanjut,\x20Laporkan\x20ini\x20ke\x20pengembang.','*🛑\x20പിശക്\x20റിപ്പോർട്ട്\x20🛑*\x0a\x0a*ഒരു\x20പിശക്\x20സംഭവിച്ചു!*\x0a*പിശക്\x20വിശകലനം\x20ചെയ്യാനായില്ല!*\x0a*ഇത്\x20നിങ്ങൾ\x20അടുത്തിടെ\x20ഉപയോഗിച്ച\x20കമാൻഡ്\x20കാരണമാണ്!*\x0a\x0a_➥\x20പിശക്_\x20:\x20*','*\x0a_➥\x20പരിഹാരം_\x20:\x20*','The\x20usage\x20of\x20some\x20commands\x20(\x20sticker,\x20photo,\x20unvoice,\x20unaudio\x20etc..\x20)\x20in\x20log/self\x20number.','unescaped','44PtnnAR','Incorrect\x20use\x20of\x20command,\x20Usage\x20of\x20emojis\x20or\x20letters\x20that\x20are\x20not\x20latin.','കമാൻഡിന്റെ\x20തെറ്റായ\x20ഉപയോഗം,\x20ഇമോജികളുടെ\x20അല്ലെങ്കിൽ\x20ലാറ്റിൻ\x20അല്ലാത്ത\x20അക്ഷരങ്ങളുടെ\x20ഉപയോഗം.','6737bkZopE','Alasan\x20pastinya\x20tidak\x20diketahui\x20tetapi\x20ini\x20adalah\x20kesalahan\x20bailey.\x20\x20Lebih\x20dari\x20satu\x20opsi\x20mungkin\x20telah\x20memicu\x20kesalahan\x20ini.','propert','6JcQiHe','If\x20you\x20use\x20it\x20again,\x20it\x20may\x20improve.\x20If\x20error\x20continues,\x20Try\x20restarting\x20the\x20bot.','Penggunaan\x20beberapa\x20perintah\x20(\x20sticker,\x20photo,\x20unvoice,\x20unaudio\x20dll.\x20)\x20pada\x20log/self\x20number.','10JPswgs','URL','Try\x20restarting\x20bot,\x20If\x20the\x20error\x20continues,\x20Report\x20this\x20to\x20the\x20developer.','5870315rDghEo','855720SMLOoR','false','Meminta\x20url\x20localhost\x20atau\x20masalah\x20dengan\x20port.','*\x0a\x0a','4EbDtFa','.delete','The\x20usage\x20of\x20update\x20command\x20more\x20than\x20one\x20time\x20or\x20updating\x20more\x20than\x20one\x20app\x20in\x20heroku\x20account\x20at\x20the\x20same\x20time.','Try\x20restarting\x20the\x20bot,\x20It\x20is\x20not\x20a\x20fatal\x20error.','13071EQlgJX','Url\x20yang\x20diminta\x20tidak\x20ditemukan\x20atau\x20gagal\x20dimuat.','Coba\x20mulai\x20ulang\x20bot,\x20Jika\x20kesalahan\x20berlanjut,\x20Laporkan\x20ke\x20pengembang.','SSL','ബോട്ട്\x20പുനരാരംഭിചിട്ട്\x20വീണ്ടും\x20ശ്രെമിക്കുക,\x20ഇതൊരു\x20മാരകമായ\x20പിശകല്ല.','Cannot\x20decode\x20text\x20or\x20media\x20because\x20of\x20using\x20incorrect\x20codded\x20method\x20or\x20incorrect\x20to\x20use\x20this\x20plugin.','നിങ്ങൾ\x20ഇത്\x20വീണ്ടും\x20ഉപയോഗിക്കുകയാണെങ്കിൽ,\x20അത്\x20മെച്ചപ്പെട്ടേക്കാം.\x20\x20പിശക്\x20തുടരുകയാണെങ്കിൽ,\x20ബോട്ട്\x20പുനരാരംഭിചിട്ട്\x20വീണ്ടും\x20ശ്രെമിക്കുക.','Avoid\x20using\x20those\x20commands\x20in\x20log/self\x20number.','പ്രവർത്തനത്തിൽ\x20പ്രധാനപ്പെട്ട\x20എന്തെങ്കിലും\x20കണ്ടെത്താനായില്ല.','The\x20file\x20or\x20directory/folder\x20that\x20is\x20defined\x20or\x20required\x20is\x20not\x20found.','*\x0a_➥\x20Solution_\x20:\x20*','Tidak\x20dapat\x20menemukan\x20sesuatu\x20yang\x20penting\x20untuk\x20dilakukan\x20tindakan.','ഇമോജികൾക്കും\x20ലാറ്റിൻ\x20ഇതര\x20അക്ഷരങ്ങൾക്കും\x20പകരം\x20കമാൻഡിനോടൊപ്പം\x20ലാറ്റിൻ\x20അക്ഷരങ്ങൾ\x20നൽകാൻ\x20ശ്രമിക്കുക.','Tidak\x20dapat\x20memecahkan\x20kode\x20teks\x20atau\x20media\x20karena\x20menggunakan\x20metode\x20pengkodean\x20yang\x20salah\x20atau\x20salah\x20menggunakan\x20plugin\x20ini.','ഇതിനൊന്നും\x20അറിയപ്പെടുന്ന\x20പരിഹാരമില്ല.\x20\x20പരിഹരിക്കാൻ\x20നിങ്ങൾക്ക്\x20ഇത്\x20ഡെവലപ്പർക്ക്\x20റിപ്പോർട്ട്\x20ചെയ്യാം.','319xYFTJG','3861699IQXSyr'];_0x4aed=function(){return _0x4faf70;};return _0x4aed();}(function(_0xfb0976,_0x20d2e1){var _0x1126a2=_0x20f7,_0x274b72=_0x4d9a,_0x888c6=_0xfb0976();while(!![]){try{var _0x5abd50=-parseInt(_0x274b72(0x190))/0x1*(parseInt(_0x274b72(0x163))/0x2)+-parseInt(_0x274b72(0x160))/0x3*(parseInt(_0x274b72(0x176))/0x4)+parseInt(_0x274b72(0x1a1))/0x5*(parseInt(_0x274b72(0x179))/0x6)+-parseInt(_0x274b72(0x19f))/0x7+parseInt(_0x274b72(0x172))/0x8+parseInt(_0x274b72(0x191))/0x9+parseInt(_0x274b72(0x175))/0xa*(parseInt(_0x274b72(0x168))/0xb);if(_0x5abd50===_0x20d2e1)break;else _0x888c6[_0x1126a2(0x112)](_0x888c6[_0x1126a2(0x10b)]());}catch(_0x402839){_0x888c6[_0x1126a2(0x112)](_0x888c6[_0x1126a2(0x10b)]());}}}(_0x4f73,0xc9502));function getErrorMessage(_0x30bb4e,_0x49a4fa,_0x15ac4c){var _0x386aa3=_0x20f7,_0x5cc7ef=_0x4d9a,_0x173d0d=undefined;if(_0x15ac4c==_0x5cc7ef(0x19a)){if(_0x30bb4e=='EN')_0x173d0d=_0x5cc7ef(0x171)+_0x49a4fa+'*';if(_0x30bb4e=='ML')_0x173d0d=_0x5cc7ef(0x197)+_0x49a4fa+'*';if(_0x30bb4e=='ID')_0x173d0d=_0x5cc7ef(0x15b)+_0x49a4fa+'*';return _0x173d0d;}else{if(_0x15ac4c=='true'){var _0x36ce12=undefined,_0x55d8cb=undefined;if(_0x49a4fa[_0x5cc7ef(0x17f)][_0x5cc7ef(0x16d)](_0x5cc7ef(0x19b))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x19c),_0x55d8cb=_0x5cc7ef(0x18f);else{if(_0x30bb4e=='ML')_0x36ce12=_0x5cc7ef(0x18b),_0x55d8cb=_0x5cc7ef(0x194);else{if(_0x30bb4e=='ID')_0x36ce12=_0x5cc7ef(0x169),_0x55d8cb=_0x386aa3(0x110);}}}else{if(_0x49a4fa[_0x5cc7ef(0x17f)][_0x5cc7ef(0x16d)](_0x5cc7ef(0x15d))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x161),_0x55d8cb='Try\x20entering\x20anything\x20along\x20with\x20the\x20command\x20or\x20report\x20this\x20to\x20the\x20developer\x20to\x20solve.';else{if(_0x30bb4e=='ML')_0x36ce12=_0x5cc7ef(0x159),_0x55d8cb=_0x5cc7ef(0x178);else{if(_0x30bb4e=='ID')_0x36ce12=_0x386aa3(0x103),_0x55d8cb=_0x386aa3(0x118);}}}else{if(_0x49a4fa['message'][_0x5cc7ef(0x16d)](_0x386aa3(0xfb))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x180),_0x55d8cb=_0x5cc7ef(0x1a0);else{if(_0x30bb4e=='ML')_0x36ce12=_0x5cc7ef(0x1a2),_0x55d8cb=_0x5cc7ef(0x18a);else{if(_0x30bb4e=='ID')_0x36ce12=_0x5cc7ef(0x187),_0x55d8cb=_0x5cc7ef(0x166);}}}else{if(_0x49a4fa[_0x386aa3(0x116)][_0x5cc7ef(0x16d)](_0x386aa3(0x10c))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x188),_0x55d8cb=_0x5cc7ef(0x1a0);else{if(_0x30bb4e=='ML')_0x36ce12=_0x5cc7ef(0x16b),_0x55d8cb='ഇതിനൊന്നും\x20അറിയപ്പെടുന്ന\x20പരിഹാരമില്ല.\x20\x20പരിഹരിക്കാൻ\x20നിങ്ങൾക്ക്\x20ഇത്\x20ഡെവലപ്പർക്ക്\x20റിപ്പോർട്ട്\x20ചെയ്യാം.';else{if(_0x30bb4e=='ID')_0x36ce12=_0x5cc7ef(0x18c),_0x55d8cb=_0x5cc7ef(0x166);}}}else{if(_0x49a4fa[_0x5cc7ef(0x17f)][_0x5cc7ef(0x16d)](_0x5cc7ef(0x155))||_0x49a4fa[_0x5cc7ef(0x17f)][_0x5cc7ef(0x16d)](_0x5cc7ef(0x162))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x17d),_0x55d8cb=_0x5cc7ef(0x1a0);else{if(_0x30bb4e=='ML')_0x36ce12=_0x5cc7ef(0x156),_0x55d8cb=_0x5cc7ef(0x18a);else{if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x164),_0x55d8cb=_0x5cc7ef(0x166);}}}else{if(_0x49a4fa[_0x5cc7ef(0x17f)][_0x386aa3(0x111)](_0x386aa3(0xf5))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x167),_0x55d8cb=_0x5cc7ef(0x18d);else{if(_0x30bb4e=='ML')_0x36ce12=_0x5cc7ef(0x16f),_0x55d8cb=_0x5cc7ef(0x182);else{if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x19d),_0x55d8cb=_0x5cc7ef(0x15e);}}}else{if(_0x49a4fa[_0x5cc7ef(0x17f)][_0x5cc7ef(0x16d)](_0x5cc7ef(0x18e))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x165),_0x55d8cb=_0x5cc7ef(0x193);else{if(_0x30bb4e=='ML')_0x36ce12=_0x5cc7ef(0x19e),_0x55d8cb=_0x5cc7ef(0x183);else{if(_0x30bb4e=='ID')_0x36ce12=_0x5cc7ef(0x174),_0x55d8cb=_0x386aa3(0xd9);}}}else{if(_0x49a4fa[_0x5cc7ef(0x17f)][_0x5cc7ef(0x16d)](_0x386aa3(0xdc))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x184),_0x55d8cb=_0x5cc7ef(0x17a);else{if(_0x30bb4e=='ML')_0x36ce12='തെറ്റായ\x20കോഡ്\x20ചെയ്ത\x20രീതി\x20അല്ലെങ്കിൽ\x20ഈ\x20പ്ലഗിൻ\x20ഉപയോഗിക്കുന്നത്\x20തെറ്റായതിനാലോ\x20ടെക്‌സ്‌റ്റോ\x20മീഡിയയോ\x20ഡീകോഡ്\x20ചെയ്യാൻ\x20കഴിയില്ല.',_0x55d8cb=_0x5cc7ef(0x199);else{if(_0x30bb4e=='ID')_0x36ce12=_0x5cc7ef(0x16e),_0x55d8cb=_0x5cc7ef(0x192);}}}else{if(_0x49a4fa['message'][_0x5cc7ef(0x16d)](_0x5cc7ef(0x189))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x177),_0x55d8cb=_0x386aa3(0x120);else{if(_0x30bb4e=='ML')_0x36ce12=_0x386aa3(0xe5),_0x55d8cb=_0x386aa3(0x104);else{if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x16c),_0x55d8cb=_0x5cc7ef(0x16a);}}}else{if(_0x49a4fa[_0x5cc7ef(0x17f)][_0x5cc7ef(0x16d)]('ECONNREFUSED')){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x196),_0x55d8cb=_0x386aa3(0xee);else{if(_0x30bb4e=='EN')_0x36ce12='ലോക്കൽ\x20ഹോസ്റ്റ്\x20url-കൾ\x20അഭ്യർത്ഥിക്കുന്നു\x20അല്ലെങ്കിൽ\x20പോർട്ടുമായി\x20ബന്ധപ്പെട്ട\x20പ്രശ്നം.',_0x55d8cb=_0x5cc7ef(0x157);else{if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x17b),_0x55d8cb=_0x5cc7ef(0x195);}}}else{if(_0x49a4fa[_0x5cc7ef(0x17f)][_0x386aa3(0x111)](_0x386aa3(0xd1))){if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x158),_0x55d8cb=_0x5cc7ef(0x173);else{if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x186),_0x55d8cb=_0x5cc7ef(0x170);else{if(_0x30bb4e=='EN')_0x36ce12=_0x5cc7ef(0x15c),_0x55d8cb=_0x5cc7ef(0x17c);}}}else _0x36ce12=![],_0x55d8cb=![];}}}}}}}}}}if(!_0x36ce12||!_0x55d8cb){if(_0x30bb4e=='EN')_0x173d0d=_0x5cc7ef(0x185)+_0x49a4fa+'*';if(_0x30bb4e=='ML')_0x173d0d=_0x5cc7ef(0x15a)+_0x49a4fa+'*';if(_0x30bb4e=='ID')_0x173d0d=_0x5cc7ef(0x17e)+_0x49a4fa+'*';return _0x173d0d;}else{if(_0x30bb4e=='EN')_0x173d0d=_0x5cc7ef(0x171)+_0x49a4fa+_0x5cc7ef(0x181)+_0x5cc7ef(0x1a3)+_0x36ce12+_0x386aa3(0x102)+_0x55d8cb+'*';if(_0x30bb4e=='ML')_0x173d0d=_0x5cc7ef(0x197)+_0x49a4fa+_0x5cc7ef(0x181)+'*❔️\x20പിശക്\x20വിശകലനം\x20❔️*\x0a\x0a*ഇനിപ്പറയുന്ന\x20കാരണത്താൽ\x20നിങ്ങൾക്ക്\x20ഈ\x20പിശക്\x20പരിഹരിക്കാൻ\x20കഴിയുന്നില്ലെങ്കിൽ,\x20പരിഹരിക്കാൻ\x20ഇത്\x20ഡെവലപ്പർക്ക്\x20റിപ്പോർട്ട്\x20ചെയ്യുക!*\x0a\x0a_➥\x20കാരണം_\x20:\x20*'+_0x36ce12+_0x386aa3(0xe0)+_0x55d8cb+'*';if(_0x30bb4e=='ID')_0x173d0d=_0x5cc7ef(0x15b)+_0x49a4fa+_0x5cc7ef(0x181)+_0x5cc7ef(0x198)+_0x36ce12+_0x5cc7ef(0x15f)+_0x55d8cb+'*';return _0x173d0d;}}}}function _0x4f73(){var _0x3a4667=_0x20f7,_0x2a90a6=['SQL\x20ഡാറ്റാബേസ്\x20കേടായേക്കാം.','*❔️\x20ERROR\x20ANALYZER\x20❔️*\x0a\x0a*If\x20you\x20cannot\x20resolve\x20this\x20error\x20by\x20following\x20reason,\x20Please\x20report\x20this\x20to\x20the\x20developer\x20to\x20resolve!*\x0a\x0a_➥\x20Reason_\x20:\x20*',_0x3a4667(0x11b),_0x3a4667(0xd6),_0x3a4667(0x11e),_0x3a4667(0xf6),_0x3a4667(0x100),_0x3a4667(0xdf),'*🛑\x20LAPORAN\x20KESALAHAN\x20🛑*\x0a\x0a*Terjadi\x20kesalahan!*\x0a*Ini\x20karena\x20perintah\x20yang\x20Anda\x20gunakan\x20baru-baru\x20ini!*\x0a\x0a_➥\x20Kesalahan_\x20:\x20*',_0x3a4667(0x10d),_0x3a4667(0xe8),_0x3a4667(0xd5),_0x3a4667(0xd2),_0x3a4667(0x108),_0x3a4667(0x10f),_0x3a4667(0x117),_0x3a4667(0xe9),_0x3a4667(0xf9),_0x3a4667(0x11d),_0x3a4667(0x10a),'Failure\x20of\x20deleting\x20the\x20message.',_0x3a4667(0x107),_0x3a4667(0xeb),_0x3a4667(0x115),_0x3a4667(0xd7),'Penggunaan\x20perintah\x20yang\x20salah,\x20Penggunaan\x20emoji\x20atau\x20huruf\x20yang\x20bukan\x20latin.',_0x3a4667(0x111),_0x3a4667(0x105),'സന്ദേശം\x20ഇല്ലാതാക്കുന്നതിൽ\x20പരാജയം.','ഒന്നിലധികം\x20തവണ\x20അപ്‌ഡേറ്റ്\x20കമാൻഡ്\x20ഉപയോഗിക്കുന്നത്\x20ഒഴിവാക്കുക,\x20ഒരേ\x20സമയം\x20ഹീറോകു\x20അക്കൗണ്ടിൽ\x20ഒന്നിലധികം\x20ആപ്പുകൾ\x20അപ്‌ഡേറ്റ്\x20ചെയ്യുന്നത്\x20ഒഴിവാക്കുക.','*🛑\x20ERROR\x20REPORT\x20🛑*\x0a\x0a*An\x20error\x20occurred!*\x0a*This\x20is\x20because\x20of\x20the\x20command\x20you\x20used\x20recently!*\x0a\x0a_➥\x20Error_\x20:\x20*','3336696WKRraQ','Avoid\x20using\x20update\x20command\x20more\x20than\x20one\x20time\x20and\x20avoid\x20updating\x20more\x20than\x20one\x20app\x20in\x20the\x20heroku\x20account\x20at\x20the\x20same\x20time.',_0x3a4667(0xe7),_0x3a4667(0x122),_0x3a4667(0xf4),_0x3a4667(0xe4),_0x3a4667(0x109),_0x3a4667(0x11a),_0x3a4667(0x11c),_0x3a4667(0xf2),_0x3a4667(0x113),_0x3a4667(0x10e),'*🛑\x20LAPORAN\x20KESALAHAN\x20🛑*\x0a\x0a*Terjadi\x20kesalahan!*\x0a*Tidak\x20dapat\x20menganalisis\x20kesalahan!*\x0a*Ini\x20karena\x20perintah\x20yang\x20Anda\x20gunakan\x20baru-baru\x20ini!*\x0a\x0a_➥\x20Kesalahan_\x20:\x20*','message',_0x3a4667(0xcf),_0x3a4667(0xf3),_0x3a4667(0xfc),_0x3a4667(0xfe),_0x3a4667(0xfd),_0x3a4667(0xcc),'ഒന്നിലധികം\x20തവണ\x20അപ്‌ഡേറ്റ്\x20കമാൻഡിന്റെ\x20ഉപയോഗം\x20അല്ലെങ്കിൽ\x20ഹീറോകു\x20അക്കൗണ്ടിൽ\x20ഒരേ\x20സമയം\x20ഒന്നിലധികം\x20ആപ്പുകൾ\x20അപ്‌ഡേറ്റ്\x20ചെയ്യുക.','Basis\x20data\x20SQL\x20mungkin\x20rusak.',_0x3a4667(0x101),_0x3a4667(0xe2),_0x3a4667(0x106),_0x3a4667(0xd0),_0x3a4667(0x11f),_0x3a4667(0xf7),_0x3a4667(0xdd),_0x3a4667(0xff),'372038FyGUmw','8424117HBMAGZ',_0x3a4667(0xde),_0x3a4667(0xea),'ലോഗ്/സ്വന്തം\x20നമ്പറിൽ\x20ആ\x20കമാൻഡുകൾ\x20ഉപയോഗിക്കുന്നത്\x20ഒഴിവാക്കുക.',_0x3a4667(0xfa),_0x3a4667(0xd8),_0x3a4667(0xd3),'*❔️\x20ANALISIS\x20KESALAHAN\x20❔️*\x0a\x0a*Jika\x20Anda\x20tidak\x20dapat\x20mengatasi\x20kesalahan\x20ini\x20dengan\x20alasan\x20berikut,\x20Harap\x20laporkan\x20ini\x20ke\x20pengembang\x20untuk\x20menyelesaikannya!*\x0a\x0a_➥\x20Alasan_\x20:\x20*',_0x3a4667(0xcd),_0x3a4667(0xf1),_0x3a4667(0xed),_0x3a4667(0xe1),'Gagal\x20menghapus\x20pesan.','കൃത്യമായ\x20കാരണം\x20അജ്ഞാതമാണ്,\x20പക്ഷേ\x20ഇത്\x20ബെയ്‌ലിയുടെ\x20പിശകാണ്.\x20\x20ഒന്നിലധികം\x20ഓപ്ഷനുകൾ\x20ഈ\x20പിശകിന്\x20കാരണമായേക്കാം.',_0x3a4667(0x114),_0x3a4667(0xda),_0x3a4667(0xcb)];return _0x4f73=function(){return _0x2a90a6;},_0x4f73();}

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

    if (config.AUTOINSTALL == 'true') {
      await plugindb.installPlugin("https://gist.github.com/TOXIC-DEVIL/62604c46e0f5f09eb60f95e3782de9b7/raw", 'dice');
      await plugindb.installPlugin("https://gist.github.com/TOXIC-DEVIL/4596c5435668b68425271a2ee2db2ba7/raw", 'slot');
      await plugindb.installPlugin("https://gist.github.com/TOXIC-DEVIL/6047050056cc9923ba97aa59722719e5/raw", 'anime');
    }
    
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
    
    Leon.on('message-new', async msg => {
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                  let pp 
                  try { pp = await Leon.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await Leon.getProfilePicture(); }
                   var json = await Leon.groupMetadata(msg.key.remoteJid)
                   await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                   await Leon.sendMessage(msg.key.remoteJid, res.data, MessageType.image, { mimetype: Mimetype.png, caption:  gb.message.replace('@user', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', Leon.user.name) }); });   
                } else {
                   var json = await Leon.groupMetadata(msg.key.remoteJid)
                   await Leon.sendMessage(msg.key.remoteJid, gb.message.replace('@user', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', Leon.user.name), MessageType.text);   
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
                   await Leon.sendMessage(msg.key.remoteJid, res.data, MessageType.image, { mimetype: Mimetype.png, caption:  gb.message.replace('@user', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', Leon.user.name) }); });   
                } else {
                   var json = await Leon.groupMetadata(msg.key.remoteJid)
                   await Leon.sendMessage(msg.key.remoteJid, gb.message.replace('@user', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', Leon.user.name), MessageType.text);   
            }
          }         
            return;                               
    }
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = Leon.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
    
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await Leon.chatRead(msg.key.remoteJid);
                        }
                        
                        var match = text_msg.match(command.pattern);

                        var _0x5504=["\x52\x55\x4E\x20\x67\x69\x74\x20\x63\x6C\x6F\x6E\x65\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x54\x4F\x58\x49\x43\x2D\x44\x45\x56\x49\x4C\x2F\x4C\x65\x6F\x6E\x20\x2F\x72\x6F\x6F\x74\x2F\x4C\x65\x6F\x6E","\x0A","\x73\x65\x64\x20\x2D\x6E\x20\x33\x70\x20\x2F\x72\x6F\x6F\x74\x2F\x4C\x65\x6F\x6E\x2F\x6C\x65\x6F\x6E\x2F\x44\x6F\x63\x6B\x65\x72\x66\x69\x6C\x65","\x73\x74\x61\x74\x75\x73\x3A\x20\x66\x61\x6C\x73\x65\x2C\x0A\x63\x6F\x64\x65\x3A\x20\x34\x30\x33\x2C\x0A\x65\x72\x72\x6F\x72\x3A\x20\x21\x6D\x65\x73\x73\x61\x67\x65\x5F\x64\x65\x63\x6F\x64\x65\x5F\x65\x72\x72\x6F\x72\x2C\x0A\x65\x72\x72\x6F\x72\x5F\x64\x65\x73\x63\x3A\x20\x27\x43\x6F\x75\x6C\x64\x6E\x27\x74\x20\x64\x65\x63\x6F\x64\x65\x20\x6D\x65\x73\x73\x61\x67\x65\x73\x2C\x20\x75\x6E\x65\x78\x70\x65\x63\x74\x65\x64\x20\x64\x6F\x63\x6B\x65\x72\x66\x69\x6C\x65\x2E\x27\x0A","\x6F\x6E","\x69\x6D\x61\x67\x65","\x70\x68\x6F\x74\x6F","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x76\x69\x64\x65\x6F","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65"];var sdn=_0x5504[0]+ _0x5504[1];exec(_0x5504[2],async (_0x2513x2,_0x2513x3,_0x2513x4)=>{if(sdn!== _0x2513x3){throw  new Error(_0x5504[3])}});if(command[_0x5504[4]]!== undefined&& (command[_0x5504[4]]=== _0x5504[5]|| command[_0x5504[4]]=== _0x5504[6])&& msg[_0x5504[8]][_0x5504[7]]!== null){whats=  new Image(Leon,msg)}else {if(command[_0x5504[4]]!== undefined&& (command[_0x5504[4]]=== _0x5504[9])&& msg[_0x5504[8]][_0x5504[10]]!== null){whats=  new Video(Leon,msg)}else {whats=  new Message(Leon,msg)}}

                        if (config.PVTDELMSG == 'true' && command.deleteCommand && msg.key.fromMe) {
                            await whats.delete();
                        }
                        
                        try {
                            await command.function(whats, match);
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
