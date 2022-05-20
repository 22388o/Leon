let Leon = require('../events');
let Bot = require('../events');
let fs = require('fs');
let axios = require('axios');
let { MessageType, Mimetype, MessageOptions } = require('@adiwajshing/baileys');
let conf = require('../config');
let axiosdef = require("axios").default;
let os = require('os');
let translatte = require('translatte');
let LanguageDetect = require('languagedetect');
let lngDetector = new LanguageDetect();
let PD = require('./sql/plugin');
let Config = require('../config');
let td = Config.WORKTYPE == 'public' ? false : true
let Language = require('../language');
let Lang = Language.getString('ai');

var NAME = "Name"
var ABOUT = "About"
var NUMBER = "Number"
var LINK = "Link"
var VERSION = "Version"
var BRANCH = "Branch"
var INT_CMD = "Internal Commands"
var EXT_CMD = "External Commands"
var TTL_CMD = "Total Commands"
var OWNER = "Owner"
var C_OWNER = "Contact Owner"
var DEV = "Developer"
if (Config.LANG == 'ML') NAME = "പേര്", ABOUT = "എബൌട്ട്‌", NUMBER = "നമ്പർ", LINK = "ലിങ്ക്", VERSION = "പതിപ്പ്", BRANCH = "ബ്രാഞ്ച്", INT_CMD = "ആന്തരിക കമാൻഡുകൾ", EXT_CMD = "ബാഹ്യ കമാൻഡുകൾ", TTL_CMD = "മൊത്തം കമാൻഡുകൾ", OWNER = "ഉടമ", C_OWNER = "ഉടമയെ ബന്ധപ്പെടുക", DEV = "ഡെവലപ്പർ"
if (Config.LANG == 'ID') NAME = "Nama", ABOUT = "Tentang", NUMBER = "Nomor", LINK = "Tautan", VERSION = "Versi", BRANCH = "Cabang", INT_CMD = "Perintah Internal", EXT_CMD = "Perintah External", TTL_CMD = "Total Perintah", OWNER = "Pemilik", C_OWNER = "Hubungi Pemilik", DEV = "Pengembang"

Leon.addCommand({pattern: 'simi ?(.*)', fromMe: td, desc: Lang.SIMI_DESC}, async (message, match) => {
    try {
      await axios.get(Config.API + '/ai/simi?text=' + encodeURIComponent(match[1]) + '&lang=' + Config.LANG).then(async (json) => {
        await message.sendReply('\n*🤖 '+ Lang.BOT_DIVIDER +'* ```' + json.data.response + '```\n');
      });
    } catch (e) {
      await message.sendReply(Lang.NOT_FOUND_RESPONSE);
    }
});

Leon.addCommand({pattern: 'aco ?(.*)', fromMe: td, desc: Lang.ACO_DESC}, async (message, match, sender) => {
    try {
      var id = sender.split('@')[0]
      await axios.get(Config.API + '/ai/aco?text=' + encodeURIComponent(match[1]) + '&id=' + id + '&lang=' + Config.LANG).then(async (json) => {
        await message.sendReply('\n*💬 '+ Lang.BOT_DIVIDER +'* ```' + json.data.response + '```\n');
      });
    } catch (e) {
      await message.sendReply(Lang.NOT_FOUND_RESPONSE);
    }
});

Leon.addCommand({on: 'text', fromMe: false, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {

var _0xad7bf9=_0x40bb;(function(_0x24eed7,_0x3f8e45){var _0x5ce9f5=_0x40bb,_0x220776=_0x24eed7();while(!![]){try{var _0x2475cd=parseInt(_0x5ce9f5(0x11b))/0x1*(parseInt(_0x5ce9f5(0x11e))/0x2)+parseInt(_0x5ce9f5(0x105))/0x3+-parseInt(_0x5ce9f5(0x10b))/0x4*(-parseInt(_0x5ce9f5(0x10f))/0x5)+parseInt(_0x5ce9f5(0x121))/0x6+parseInt(_0x5ce9f5(0x10e))/0x7*(-parseInt(_0x5ce9f5(0x120))/0x8)+-parseInt(_0x5ce9f5(0x111))/0x9+-parseInt(_0x5ce9f5(0x109))/0xa;if(_0x2475cd===_0x3f8e45)break;else _0x220776['push'](_0x220776['shift']());}catch(_0x3b9882){_0x220776['push'](_0x220776['shift']());}}}(_0x42a9,0x271be));function _0x40bb(_0x2e5127,_0x40d3eb){var _0x42a9f6=_0x42a9();return _0x40bb=function(_0x40bbe0,_0x2c95c6){_0x40bbe0=_0x40bbe0-0x104;var _0x55aaa1=_0x42a9f6[_0x40bbe0];return _0x55aaa1;},_0x40bb(_0x2e5127,_0x40d3eb);}function _0x42a9(){var _0xfaee=['g.us','auto','reply_message','12SxwqDs','english','sendMessage','18014iNjxRa','length','104pajuff','934584oBeYjX','endsWith','cnt','then','http://api.brainshop.ai/get?bid=163403&key=nXErU3jPbHzm0Pcp&uid=','406311EyJFFm','split','message','text','4817670vMPGEg','user','81484hdnhrf','FULLACO','client','644qKSwPJ','65XEtPyM','detect','188595UIPBJy','LANG','&msg=','get','data','jid','mention'];_0x42a9=function(){return _0xfaee;};return _0x42a9();}if(conf[_0xad7bf9(0x10c)]=='true'&&(!message[_0xad7bf9(0x116)][_0xad7bf9(0x122)](_0xad7bf9(0x118))||message[_0xad7bf9(0x116)][_0xad7bf9(0x122)](_0xad7bf9(0x118))&&(message['mention']!==![]&&message[_0xad7bf9(0x117)][_0xad7bf9(0x11f)]!==0x0||message[_0xad7bf9(0x11a)]!==![]))){if(message['jid']['endsWith'](_0xad7bf9(0x118))&&(message[_0xad7bf9(0x117)]!==![]&&message['mention'][_0xad7bf9(0x11f)]!==0x0))message[_0xad7bf9(0x117)]['map'](async _0x2d8494=>{var _0x2daa60=_0xad7bf9;if(message['client']['user'][_0x2daa60(0x116)]['split']('@')[0x0]===_0x2d8494[_0x2daa60(0x106)]('@')[0x0]){var _0x42affa=message[_0x2daa60(0x10d)][_0x2daa60(0x10a)][_0x2daa60(0x116)][_0x2daa60(0x106)]('@')[0x0],_0x174d57=message[_0x2daa60(0x107)],_0x10329c=lngDetector['detect'](_0x174d57),_0x1a37b7='';_0x10329c[0x0][0x0]!==_0x2daa60(0x11c)?(ceviri=await translatte(_0x174d57,{'from':'auto','to':'EN'}),_0x2daa60(0x108)in ceviri&&(_0x1a37b7=ceviri['text'])):_0x1a37b7=_0x174d57;var _0x4ff5d5=encodeURI(_0x1a37b7);await axios['get'](_0x2daa60(0x104)+_0x42affa+_0x2daa60(0x113)+_0x4ff5d5)['then'](async _0x42d057=>{var _0x58e66a=_0x2daa60,_0x1763d9='';conf[_0x58e66a(0x112)]!=='EN'?(ceviri=await translatte(_0x42d057[_0x58e66a(0x115)][_0x58e66a(0x123)],{'from':_0x58e66a(0x119),'to':conf[_0x58e66a(0x112)]}),_0x58e66a(0x108)in ceviri&&(_0x1763d9=ceviri[_0x58e66a(0x108)])):_0x1763d9=_0x42d057[_0x58e66a(0x115)][_0x58e66a(0x123)],await message['client'][_0x58e66a(0x11d)](message[_0x58e66a(0x116)],_0x1763d9,MessageType[_0x58e66a(0x108)],{'quoted':message[_0x58e66a(0x115)]});});}});else{if(message[_0xad7bf9(0x116)][_0xad7bf9(0x122)](_0xad7bf9(0x118))&&message['reply_message']!==![]){if(message['reply_message'][_0xad7bf9(0x116)][_0xad7bf9(0x106)]('@')[0x0]===message[_0xad7bf9(0x10d)][_0xad7bf9(0x10a)][_0xad7bf9(0x116)]['split']('@')[0x0]){var unique_ident=message[_0xad7bf9(0x10d)][_0xad7bf9(0x10a)][_0xad7bf9(0x116)][_0xad7bf9(0x106)]('@')[0x0],finm=message[_0xad7bf9(0x107)],ldet=lngDetector['detect'](finm),trmsg='';ldet[0x0][0x0]!=='english'?(ceviri=await translatte(finm,{'from':_0xad7bf9(0x119),'to':'EN'}),_0xad7bf9(0x108)in ceviri&&(trmsg=ceviri[_0xad7bf9(0x108)])):trmsg=finm;var uren=encodeURI(trmsg);await axios[_0xad7bf9(0x114)](_0xad7bf9(0x104)+unique_ident+'&msg='+uren)['then'](async _0x1f9967=>{var _0x3afd27=_0xad7bf9,_0x255649='';conf['LANG']!=='EN'?(ceviri=await translatte(_0x1f9967[_0x3afd27(0x115)][_0x3afd27(0x123)],{'from':_0x3afd27(0x119),'to':conf['LANG']}),'text'in ceviri&&(_0x255649=ceviri[_0x3afd27(0x108)])):_0x255649=_0x1f9967[_0x3afd27(0x115)][_0x3afd27(0x123)],await message[_0x3afd27(0x10d)][_0x3afd27(0x11d)](message[_0x3afd27(0x116)],_0x255649,MessageType[_0x3afd27(0x108)],{'quoted':message[_0x3afd27(0x115)]});});}}else{var unique_ident=message[_0xad7bf9(0x10d)][_0xad7bf9(0x10a)]['jid'][_0xad7bf9(0x106)]('@')[0x0],finm=message[_0xad7bf9(0x107)],ldet=lngDetector[_0xad7bf9(0x110)](finm),trmsg='';ldet[0x0][0x0]!=='english'?(ceviri=await translatte(finm,{'from':_0xad7bf9(0x119),'to':'EN'}),_0xad7bf9(0x108)in ceviri&&(trmsg=ceviri[_0xad7bf9(0x108)])):trmsg=finm;var uren=encodeURI(trmsg);await axios[_0xad7bf9(0x114)](_0xad7bf9(0x104)+unique_ident+_0xad7bf9(0x113)+uren)[_0xad7bf9(0x124)](async _0x4eee99=>{var _0xcd8a33=_0xad7bf9,_0x532a16='';conf['LANG']!=='EN'?(ceviri=await translatte(_0x4eee99[_0xcd8a33(0x115)][_0xcd8a33(0x123)],{'from':_0xcd8a33(0x119),'to':conf[_0xcd8a33(0x112)]}),_0xcd8a33(0x108)in ceviri&&(_0x532a16=ceviri[_0xcd8a33(0x108)])):_0x532a16=_0x4eee99['data'][_0xcd8a33(0x123)],await message['client'][_0xcd8a33(0x11d)](message[_0xcd8a33(0x116)],_0x532a16,MessageType['text'],{'quoted':message[_0xcd8a33(0x115)]});});}}}
}));

Leon.addCommand({pattern: 'info ?(.*)', fromMe: td, desc: Lang.INFO_BOT}, (async (message, match) => {

var _0xf8d1=["\x6A\x69\x64","\x75\x73\x65\x72","\x63\x6C\x69\x65\x6E\x74","\x67\x65\x74\x50\x72\x6F\x66\x69\x6C\x65\x50\x69\x63\x74\x75\x72\x65","","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x62\x62\x2E\x63\x6F\x2F\x62\x64\x79\x30\x4A\x53\x42\x2F\x61\x76\x61\x74\x61\x72\x2D\x63\x6F\x6E\x74\x61\x63\x74\x2E\x70\x6E\x67","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x67\x65\x74\x53\x74\x61\x74\x75\x73","\x69\x73\x4F\x6E\x57\x68\x61\x74\x73\x41\x70\x70","\x6E\x61\x6D\x65","\x66\x69\x6E\x64\x41\x6C\x6C","\x50\x6C\x75\x67\x69\x6E\x44\x42","\x6C\x65\x6E\x67\x74\x68","\x63\x6F\x6D\x6D\x61\x6E\x64\x73","\x5F\u27A5\x20","\x5F\x20\x3A\x20\x2A","\x2A\x0A\x5F\u27A5\x20","\x73\x74\x61\x74\x75\x73","\x2A\x0A\x5F\u27A5\x20\x4A\x49\x44\x5F\x20\x3A\x20\x2A","\x40","\x73\x70\x6C\x69\x74","\x5F\x20\x3A\x20\x2A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x61\x2E\x6D\x65\x2F","\x56\x45\x52\x53\x49\x4F\x4E","\x42\x52\x41\x4E\x43\x48","\x4F\x57\x4E\x45\x52","\x4F\x57\x4E\x45\x52\x4E\x55\x4D","\x5F\x20\x3A\x20\x2A\x54\x4F\x58\x49\x43\x20\x44\x45\x56\x49\x4C\x2A","\x64\x61\x74\x61","\x66\x72\x6F\x6D","\x73\x65\x6E\x64\x49\x6D\x61\x67\x65"];var me=message[_0xf8d1[2]][_0xf8d1[1]][_0xf8d1[0]];var ppUrl= await message[_0xf8d1[2]][_0xf8d1[3]](me);if(ppUrl=== undefined|| ppUrl=== null|| ppUrl== _0xf8d1[4]){ppUrl= _0xf8d1[5]};var pp= await axios[_0xf8d1[7]](ppUrl,{responseType:_0xf8d1[6]});var about= await message[_0xf8d1[2]][_0xf8d1[8]](me);var us= await message[_0xf8d1[2]][_0xf8d1[9]](me);var name=message[_0xf8d1[2]][_0xf8d1[1]][_0xf8d1[10]];var ec= await PD[_0xf8d1[12]][_0xf8d1[11]]();ec= ec[_0xf8d1[13]];var ic=Bot[_0xf8d1[14]][_0xf8d1[13]]- ec;var ttc=ic+ ec;var msg=_0xf8d1[15]+ NAME+ _0xf8d1[16]+ name+ _0xf8d1[17]+ ABOUT+ _0xf8d1[16]+ about[_0xf8d1[18]]+ _0xf8d1[19]+ us[_0xf8d1[0]]+ _0xf8d1[17]+ NUMBER+ _0xf8d1[16]+ us[_0xf8d1[0]][_0xf8d1[21]](_0xf8d1[20])[0]+ _0xf8d1[17]+ LINK+ _0xf8d1[22]+ us[_0xf8d1[0]][_0xf8d1[21]](_0xf8d1[20])[0]+ _0xf8d1[17]+ VERSION+ _0xf8d1[16]+ Config[_0xf8d1[23]]+ _0xf8d1[17]+ BRANCH+ _0xf8d1[16]+ Config[_0xf8d1[24]]+ _0xf8d1[17]+ INT_CMD+ _0xf8d1[16]+ ic+ _0xf8d1[17]+ EXT_CMD+ _0xf8d1[16]+ ec+ _0xf8d1[17]+ TTL_CMD+ _0xf8d1[16]+ ttc+ _0xf8d1[17]+ OWNER+ _0xf8d1[16]+ Config[_0xf8d1[25]]+ _0xf8d1[17]+ C_OWNER+ _0xf8d1[22]+ Config[_0xf8d1[26]]+ _0xf8d1[17]+ DEV+ _0xf8d1[27];return  await message[_0xf8d1[30]](Buffer[_0xf8d1[29]](pp[_0xf8d1[28]]),msg)
}));
