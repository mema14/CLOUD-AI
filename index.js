
//const _0x2acfe3=_0xa174;(function(_0x4f0a88,_0x43cee8){const _0x384840=_0xa174,_0x4b01e1=_0x4f0a88();while(!![]){try{const _0xaae76=parseInt(_0x384840(0x158))/0x1*(parseInt(_0x384840(0x121))/0x2)+parseInt(_0x384840(0x124))/0x3+-parseInt(_0x384840(0x146))/0x4+-parseInt(_0x384840(0x13b))/0x5*(parseInt(_0x384840(0x154))/0x6)+parseInt(_0x384840(0x15a))/0x7+parseInt(_0x384840(0x134))/0x8*(-parseInt(_0x384840(0x161))/0x9)+-parseInt(_0x384840(0x135))/0xa;if(_0xaae76===_0x43cee8)break;else _0x4b01e1['push'](_0x4b01e1['shift']());}catch(_0x1ec4a7){_0x4b01e1['push'](_0x4b01e1['shift']());}}}(_0x403e,0xb595c));import _0x32c315 from'dotenv';_0x32c315[_0x2acfe3(0x128)]();import{makeWASocket,Browsers,fetchLatestBaileysVersion,DisconnectReason,useMultiFileAuthState}from'@whiskeysockets/baileys';function _0xa174(_0x599e84,_0x276711){const _0x403ee2=_0x403e();return _0xa174=function(_0xa174e9,_0x584daf){_0xa174e9=_0xa174e9-0x121;let _0x2cbf1e=_0x403ee2[_0xa174e9];return _0x2cbf1e;},_0xa174(_0x599e84,_0x276711);}import{Handler,Callupdate,GroupUpdate}from'./data/index.js';import _0x5ec0e3 from'express';import _0x1c3174 from'pino';import _0x53c0c9 from'fs';import _0x4a6278 from'node-cache';import _0x4e279b from'path';import _0x5aed02 from'chalk';import _0x3896f3 from'moment-timezone';function _0x403e(){const _0x2d205d=['green','Critical\x20Error:','log','Connection\x20reestablished\x20after\x20restart.','error','257139CocBIB','toJSON','PORT','silent','bera\x20tech\x20bot\x20whatsapp\x20user\x20bot','demon-slayer\x20using\x20WA\x20v','#FFA500','blue','join','loadMessage','SESSION_ID','No\x20session\x20found\x20or\x20downloaded,\x20QR\x20code\x20will\x20be\x20printed\x20for\x20authentication.','safari','MODE','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','send','924564YgCWZp','url','fromMe','2059668nSwjMF','private','hex','🔒\x20Session\x20downloaded,\x20starting\x20bot.','config','session','messages.upsert','🔒\x20Session\x20file\x20found,\x20proceeding\x20without\x20QR\x20code.','key','promises','group-participants.update','floor','data','#32CD32','3.3','user','160qLTCsS','6407030wrZqbK','message','✅\x20Viewed\x20status\x20from\x20','existsSync',',\x22time\x22:\x22','creds.json','425OvSSHx','❌\x20Error\x20marking\x20status\x20as\x20viewed:','🔒\x20Session\x20Successfully\x20Loaded\x20!!','endsWith','Server\x20is\x20running\x20on\x20port\x20','call','level','bold','exit','writeFile','public','1564892OpMouo','statusCode','output','length','messages','Error\x20during\x20auto\x20reaction/status\x20viewing:','CONNECTED\x20SUCCESSFULL','stringify','get','mkdirSync','trace','split','BERA\x20TECH\x20CONNECTED\x20SUCCESSFUL','remoteJid','46830UlIAMu','string','readMessages','close','3fCoEvp','https://files.catbox.moe/ldetco.jpg','6559987VvJkAu','open'];_0x403e=function(){return _0x2d205d;};return _0x403e();}import _0x843452 from'axios';import _0x493d97 from'./config.cjs';import _0x5a16bf from'./lib/autoreact.cjs';const {emojis,doReact}=_0x5a16bf,sessionName=_0x2acfe3(0x129),app=_0x5ec0e3(),orange=_0x5aed02[_0x2acfe3(0x142)][_0x2acfe3(0x126)](_0x2acfe3(0x167)),lime=_0x5aed02[_0x2acfe3(0x142)][_0x2acfe3(0x126)](_0x2acfe3(0x131));let useQR=![],initialConnection=!![];const PORT=process['env'][_0x2acfe3(0x163)]||0xbb8,MAIN_LOGGER=_0x1c3174({'timestamp':()=>_0x2acfe3(0x139)+new Date()[_0x2acfe3(0x162)]()+'\x22'}),logger=MAIN_LOGGER['child']({});logger[_0x2acfe3(0x141)]=_0x2acfe3(0x150);const msgRetryCounterCache=new _0x4a6278(),__filename=new URL(import.meta[_0x2acfe3(0x122)])['pathname'],__dirname=_0x4e279b['dirname'](__filename),sessionDir=_0x4e279b[_0x2acfe3(0x169)](__dirname,_0x2acfe3(0x129)),credsPath=_0x4e279b['join'](sessionDir,_0x2acfe3(0x13a));!_0x53c0c9[_0x2acfe3(0x138)](sessionDir)&&_0x53c0c9[_0x2acfe3(0x14f)](sessionDir,{'recursive':!![]});async function downloadSessionData(){const _0x3d74b5=_0x2acfe3;if(!_0x493d97[_0x3d74b5(0x16b)])return console['error'](_0x3d74b5(0x16f)),![];const _0x1c2e38=_0x493d97[_0x3d74b5(0x16b)][_0x3d74b5(0x151)]('BERA-TECH$')[0x1],_0x1f94d8='https://pastebin.com/raw/'+_0x1c2e38;try{const _0x175e50=await _0x843452['get'](_0x1f94d8),_0x439e3b=typeof _0x175e50[_0x3d74b5(0x130)]===_0x3d74b5(0x155)?_0x175e50['data']:JSON[_0x3d74b5(0x14d)](_0x175e50[_0x3d74b5(0x130)]);return await _0x53c0c9[_0x3d74b5(0x12d)][_0x3d74b5(0x144)](credsPath,_0x439e3b),console[_0x3d74b5(0x15e)](_0x3d74b5(0x13d)),!![];}catch(_0xfcb206){return![];}}async function start(){const _0x101457=_0x2acfe3;try{const {state:_0x2ecb26,saveCreds:_0x2ec164}=await useMultiFileAuthState(sessionDir),{version:_0x2b5695,isLatest:_0x222cb0}=await fetchLatestBaileysVersion();console[_0x101457(0x15e)](_0x101457(0x166)+_0x2b5695[_0x101457(0x169)]('.')+',\x20isLatest:\x20'+_0x222cb0);const _0x4d7d7f=makeWASocket({'version':_0x2b5695,'logger':_0x1c3174({'level':_0x101457(0x164)}),'printQRInTerminal':useQR,'browser':['demon',_0x101457(0x16d),_0x101457(0x132)],'auth':_0x2ecb26,'getMessage':async _0x198fb4=>{const _0x5ee9ff=_0x101457;if(store){const _0x19559b=await store[_0x5ee9ff(0x16a)](_0x198fb4[_0x5ee9ff(0x153)],_0x198fb4['id']);return _0x19559b[_0x5ee9ff(0x136)]||undefined;}return{'conversation':_0x5ee9ff(0x165)};}});_0x4d7d7f['ev']['on']('connection.update',_0x4a571d=>{const _0x4144fb=_0x101457,{connection:_0x3b5cc9,lastDisconnect:_0x525d09}=_0x4a571d;if(_0x3b5cc9===_0x4144fb(0x157))_0x525d09['error']?.[_0x4144fb(0x148)]?.[_0x4144fb(0x147)]!==DisconnectReason['loggedOut']&&start();else _0x3b5cc9===_0x4144fb(0x15b)&&(initialConnection?(console['log'](_0x5aed02[_0x4144fb(0x15c)](_0x4144fb(0x152))),_0x4d7d7f['sendMessage'](_0x4d7d7f[_0x4144fb(0x133)]['id'],{'image':{'url':_0x4144fb(0x159)},'caption':'╭─────────────━┈⊷\x0a\x0a│\x20*𝖭𝖮𝖭-𝖯𝖱𝖤𝖥𝖨𝖷-𝖷𝖬𝖣*\x0a\x0a╰─────────────━┈⊷\x0a\x0a╭─────────────━┈⊷\x0a\x0a│\x20*ʙᴏᴛ\x20ᴄᴏɴɴᴇᴄᴛᴇᴅ\x20sᴜᴄᴄᴇssғᴜʟʟʏ*\x0a\x0a│\x20⚠️\x20Join\x20our\x20support\x20group\x20to\x20avoid\x20disconnection:\x0a\x0a│🔗\x20https://chat.whatsapp.com/JLFAlCXdXMh8lT4sxHplvG\x0a\x0a│\x0a\x0a╰─────────────━┈⊷\x0a\x0a>\x20*ʀᴇɢᴀʀᴅs\x20ʙᴇʀᴀ\x20ᴛᴇᴄʜ*'}),initialConnection=![]):console[_0x444fb(0x15e)](_0x5aed02[_0x4144fb(0x168)](_0x4144fb(0x15f))));}),_0x4d7d7f['ev']['on']('creds.update',_0x2ec164),_0x4d7d7f['ev']['on'](_0x101457(0x12a),async _0x2ee530=>await Handler(_0x2ee530,_0x4d7d7f,logger)),_0x4d7d7f['ev']['on'](_0x101457(0x140),async _0x57d17e=>await Callupdate(_0x57d17e,_0x4d7d7f)),_0x4d7d7f['ev']['on'](_0x101457(0x12e),async _0x364236=>await GroupUpdate(_0x4d7d7f,_0x364236));if(_0x493d97['MODE']===_0x101457(0x145))_0x4d7d7f[_0x101457(0x145)]=!![];else _0x493d97[_0x101457(0x16e)]===_0x101457(0x125)&&(_0x4d7d7f['public']=![]);_0x4d7d7f['ev']['on'](_0x101457(0x12a),async _0x475977=>{const _0x109367=_0x101457;try{const _0x318509=_0x475977[_0x109367(0x14a)][0x0];if(!_0x318509[_0x109367(0x12c)][_0x109367(0x123)]&&_0x493d97['AUTO_REACT']){const _0x29d91a=emojis[Math[_0x109367(0x12f)](Math['random']()*emojis[_0x109367(0x149)])];await doReact(_0x29d91a,_0x318509,_0x4d7d7f);}if(_0x318509[_0x109367(0x12c)][_0x109367(0x153)][_0x109367(0x13e)]('@broadcast')&&_0x318509[_0x109367(0x136)]?.['imageMessage'])try{await _0x4d7d7f[_0x109367(0x156)]([_0x318509[_0x109367(0x12c)]]),console[_0x109367(0x15e)](_0x5aed02['green'](_0x109367(0x137)+(_0x318509[_0x109367(0x12c)]['participant']||_0x318509[_0x109367(0x12c)][_0x109367(0x153)])));}catch(_0x558b1f){console['error'](_0x109367(0x13c),_0x558b1f);}}catch(_0x160b99){console['error'](_0x109367(0x14b),_0x160b99);}});}catch(_0x1b3188){console[_0x101457(0x160)](_0x101457(0x15d),_0x1b3188),process[_0x101457(0x143)](0x1);}}async function init(){const _0x1fcd48=_0x2acfe3;if(_0x53c0c9[_0x1fcd48(0x138)](credsPath))console[_0x1fcd48(0x15e)](_0x1fcd48(0x12b)),await start();else{const _0x560b70=await downloadSessionData();_0x560b70?(console[_0x1fcd48(0x15e)](_0x1fcd48(0x127)),await start()):(console[_0x1fcd48(0x15e)](_0x1fcd48(0x16c)),useQR=!![],await start());}}init(),app[_0x2acfe3(0x14e)]('/',(_0x16224c,_0x67251)=>{const _0x456132=_0x2acfe3;_0x67251[_0x456132(0x170)](_0x456132(0x14c));}),app['listen'](PORT,()=>{const _0x266442=_0x2acfe3;console[_0x266442(0x15e)](_0x266442(0x13f)+PO









































//const _0x5b793d=_0x7b72;(function(_0x1cca1b,_0x2589b4){const _0xb54c33=_0x7b72,_0x5152ad=_0x1cca1b();while(!![]){try{const _0x4dc9a5=parseInt(_0xb54c33(0x165))/0x1*(-parseInt(_0xb54c33(0x19e))/0x2)+parseInt(_0xb54c33(0x176))/0x3*(-parseInt(_0xb54c33(0x17d))/0x4)+-parseInt(_0xb54c33(0x1a9))/0x5+-parseInt(_0xb54c33(0x17f))/0x6*(parseInt(_0xb54c33(0x18e))/0x7)+-parseInt(_0xb54c33(0x194))/0x8*(parseInt(_0xb54c33(0x186))/0x9)+-parseInt(_0xb54c33(0x160))/0xa*(parseInt(_0xb54c33(0x19d))/0xb)+-parseInt(_0xb54c33(0x177))/0xc*(-parseInt(_0xb54c33(0x197))/0xd);if(_0x4dc9a5===_0x2589b4)break;else _0x5152ad['push'](_0x5152ad['shift']());}catch(_0x3329f0){_0x5152ad['push'](_0x5152ad['shift']());}}}(_0x3050,0x5e522));function hi(){const _0x6e180d=_0x7b72;console[_0x6e180d(0x168)](_0x6e180d(0x1b4));}hi();import _0x124211 from'dotenv';_0x124211[_0x5b793d(0x1a2)]();import{makeWASocket,Browsers,fetchLatestBaileysVersion,DisconnectReason,useMultiFileAuthState}from'@whiskeysockets/baileys';import{Handler,Callupdate,GroupUpdate}from'./data/index.js';import _0x2cf063 from'express';import _0x3c56fe from'pino';import _0x4b936c from'fs';import _0x3807f6 from'node-cache';import _0x481565 from'path';import _0x4d9857 from'chalk';import _0x1bfc97 from'moment-timezone';import _0x45c80f from'axios';import _0x12fe4f from'./config.cjs';import _0xc7ea0e from'./lib/autoreact.cjs';const {emojis,doReact}=_0xc7ea0e,sessionName='session',app=_0x2cf063(),orange=_0x4d9857[_0x5b793d(0x16d)]['hex'](_0x5b793d(0x199)),lime=_0x4d9857[_0x5b793d(0x16d)][_0x5b793d(0x1a1)]('#32CD32');function _0x3050(){const _0x3ca460=['Hello\x20World!','session','147860yLUmKH','data','message','group-participants.update','writeFile','3cWpVCI','send','loadMessage','log','♻️\x20Connection\x20reestablished\x20after\x20restart.','length','stringify',',\x20isLatest:\x20','bold','demon-slayer\x20whatsapp\x20user\x20bot','join','participant','key','public','exit','level','BERA-TECH$','55755zuHMit','180myQEdJ','listen','SESSION_ID','readMessages','remoteJid','existsSync','132kKPJpI','❌\x20Error\x20marking\x20status\x20as\x20viewed:','564AzpOIS','3.3','Server\x20is\x20running\x20on\x20port\x20','Error\x20during\x20auto\x20reaction/status\x20viewing:','sendMessage','✅\x20Viewed\x20status\x20from\x20','CONNECTED\x20SUCCESSFULL','19503jGOuOF','creds.json','error','endsWith','bot\x20\x20Connected','messages.upsert','connection.update','╭─────────────━┈⊷\x0a\x0a│\x20*ℂ𝕃𝕆𝕌𝔻\x20𝔸𝕀*\x0a\x0a╰─────────────━┈⊷\x0a\x0a╭─────────────━┈⊷\x0a\x0a│\x20*ʙᴏᴛ\x20ᴄᴏɴɴᴇᴄᴛᴇᴅ\x20sᴜᴄᴄᴇssғᴜʟʟʏ*\x0a\x0a│\x20*ᴘʟᴇᴀsᴇ\x20ғᴏʟʟᴏᴡ\x20ᴜs\x20ʙᴇʟᴏᴡ*\x0a\x0a╰─────────────━┈⊷\x0a\x0a>\x20*Regards\x20Bruce\x20Bera*','2667rljWTW','fromMe','random','call',',\x22time\x22:\x22','string','1392rnEuwc','imageMessage','silent','2501447GsVHwx','PORT','#FFA500','@broadcast','env','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','187EVVgbP','476228HSNSkE','demon','user','hex','config','creds.update','🔒\x20Session\x20Successfully\x20Loaded\x20!!','mkdirSync','dirname','pathname','loggedOut','2540330mxpJTI','get','MODE','private','green','url','messages','🔒\x20Session\x20downloaded,\x20starting\x20bot.','floor','toJSON','Critical\x20Error:'];_0x3050=function(){return _0x3ca460;};return _0x3050();}let useQR=![],initialConnection=!![];const PORT=process[_0x5b793d(0x19b)][_0x5b793d(0x198)]||0xbb8,MAIN_LOGGER=_0x3c56fe({'timestamp':()=>_0x5b793d(0x192)+new Date()[_0x5b793d(0x1b2)]()+'\x22'}),logger=MAIN_LOGGER['child']({});logger[_0x5b793d(0x174)]='trace';const msgRetryCounterCache=new _0x3807f6(),__filename=new URL(import.meta[_0x5b793d(0x1ae)])[_0x5b793d(0x1a7)],__dirname=_0x481565[_0x5b793d(0x1a6)](__filename),sessionDir=_0x481565[_0x5b793d(0x16f)](__dirname,_0x5b793d(0x15f)),credsPath=_0x481565['join'](sessionDir,_0x5b793d(0x187));function _0x7b72(_0x1eb3fb,_0x437b66){const _0x305090=_0x3050();return _0x7b72=function(_0x7b7206,_0x5bbc77){_0x7b7206=_0x7b7206-0x15f;let _0x549f3f=_0x305090[_0x7b7206];return _0x549f3f;},_0x7b72(_0x1eb3fb,_0x437b66);}!_0x4b936c['existsSync'](sessionDir)&&_0x4b936c[_0x5b793d(0x1a5)](sessionDir,{'recursive':!![]});async function downloadSessionData(){const _0x45fc6e=_0x5b793d;if(!_0x12fe4f['SESSION_ID'])return console['error'](_0x45fc6e(0x19c)),![];const _0x38f1d9=_0x12fe4f[_0x45fc6e(0x179)]['split'](_0x45fc6e(0x175))[0x1],_0x26e226='https://pastebin.com/raw/'+_0x38f1d9;try{const _0x930bdd=await _0x45c80f[_0x45fc6e(0x1aa)](_0x26e226),_0x58c8c5=typeof _0x930bdd[_0x45fc6e(0x161)]===_0x45fc6e(0x193)?_0x930bdd[_0x45fc6e(0x161)]:JSON[_0x45fc6e(0x16b)](_0x930bdd[_0x45fc6e(0x161)]);return await _0x4b936c['promises'][_0x45fc6e(0x164)](credsPath,_0x58c8c5),console[_0x45fc6e(0x168)](_0x45fc6e(0x1a4)),!![];}catch(_0x4f60e7){return![];}}async function start(){const _0x5390b6=_0x5b793d;try{const {state:_0x5c84a1,saveCreds:_0x68a88f}=await useMultiFileAuthState(sessionDir),{version:_0x23b205,isLatest:_0x1bea9a}=await fetchLatestBaileysVersion();console['log']('demon-slayer\x20using\x20WA\x20v'+_0x23b205[_0x5390b6(0x16f)]('.')+_0x5390b6(0x16c)+_0x1bea9a);const _0xf6a2d7=makeWASocket({'version':_0x23b205,'logger':_0x3c56fe({'level':_0x5390b6(0x196)}),'printQRInTerminal':useQR,'browser':[_0x5390b6(0x19f),'safari',_0x5390b6(0x180)],'auth':_0x5c84a1,'getMessage':async _0x45fcaa=>{const _0x435e93=_0x5390b6;if(store){const _0x19ac1c=await store[_0x435e93(0x167)](_0x45fcaa['remoteJid'],_0x45fcaa['id']);return _0x19ac1c[_0x435e93(0x162)]||undefined;}return{'conversation':_0x435e93(0x16e)};}});_0xf6a2d7['ev']['on'](_0x5390b6(0x18c),_0x444ee3=>{const _0x1c58c8=_0x5390b6,{connection:_0x27e134,lastDisconnect:_0x58237e}=_0x444ee3;if(_0x27e134==='close')_0x58237e[_0x1c58c8(0x188)]?.['output']?.['statusCode']!==DisconnectReason[_0x1c58c8(0x1a8)]&&start();else _0x27e134==='open'&&(initialConnection?(console[_0x1c58c8(0x168)](_0x4d9857['green'](_0x1c58c8(0x18a))),_0xf6a2d7[_0x1c58c8(0x183)](_0xf6a2d7[_0x1c58c8(0x1a0)]['id'],{'image':{'url':'https://files.catbox.moe/e3t1zg.jpg'},'caption':_0x1c58c8(0x18d)}),initialConnection=![]):console[_0x1c58c8(0x168)](_0x4d9857['blue'](_0x1c58c8(0x169))));}),_0xf6a2d7['ev']['on'](_0x5390b6(0x1a3),_0x68a88f),_0xf6a2d7['ev']['on'](_0x5390b6(0x18b),async _0x550181=>await Handler(_0x550181,_0xf6a2d7,logger)),_0xf6a2d7['ev']['on'](_0x5390b6(0x191),async _0x20daeb=>await Callupdate(_0x20daeb,_0xf6a2d7)),_0xf6a2d7['ev']['on'](_0x5390b6(0x163),async _0x3c500e=>await GroupUpdate(_0xf6a2d7,_0x3c500e));if(_0x12fe4f[_0x5390b6(0x1ab)]==='public')_0xf6a2d7['public']=!![];else _0x12fe4f[_0x5390b6(0x1ab)]===_0x5390b6(0x1ac)&&(_0xf6a2d7[_0x5390b6(0x172)]=![]);_0xf6a2d7['ev']['on'](_0x5390b6(0x18b),async _0x511107=>{const _0x24e811=_0x5390b6;try{const _0x5cfd68=_0x511107[_0x24e811(0x1af)][0x0];if(!_0x5cfd68[_0x24e811(0x171)][_0x24e811(0x18f)]&&_0x12fe4f['AUTO_REACT']){const _0x591579=emojis[Math[_0x24e811(0x1b1)](Math[_0x24e811(0x190)]()*emojis[_0x24e811(0x16a)])];await doReact(_0x591579,_0x5cfd68,_0xf6a2d7);}if(_0x5cfd68['key']['remoteJid'][_0x24e811(0x189)](_0x24e811(0x19a))&&_0x5cfd68[_0x24e811(0x162)]?.[_0x24e811(0x195)])try{await _0xf6a2d7[_0x24e811(0x17a)]([_0x5cfd68[_0x24e811(0x171)]]),console[_0x24e811(0x168)](_0x4d9857[_0x24e811(0x1ad)](_0x24e811(0x184)+(_0x5cfd68[_0x24e811(0x171)][_0x24e811(0x170)]||_0x5cfd68['key'][_0x24e811(0x17b)])));}catch(_0x135a9c){console[_0x24e811(0x188)](_0x24e811(0x17e),_0x135a9c);}}catch(_0xebf651){console[_0x24e811(0x188)](_0x24e811(0x182),_0xebf651);}});}catch(_0x2af2f8){console['error'](_0x5390b6(0x1b3),_0x2af2f8),process[_0x5390b6(0x173)](0x1);}}async function init(){const _0x201cb1=_0x5b793d;if(_0x4b936c[_0x201cb1(0x17c)](credsPath))console[_0x201cb1(0x168)]('🔒\x20Session\x20file\x20found,\x20proceeding\x20without\x20QR\x20code.'),await start();else{const _0x113de5=await downloadSessionData();_0x113de5?(console[_0x201cb1(0x168)](_0x201cb1(0x1b0)),await start()):(console[_0x201cb1(0x168)]('No\x20session\x20found\x20or\x20downloaded,\x20QR\x20code\x20will\x20be\x20printed\x20for\x20authentication.'),useQR=!![],await start());}}init(),app['get']('/',(_0x192fbd,_0x148b63)=>{const _0x2c2d01=_0x5b793d;_0x148b63[_0x2c2d01(0x166)](_0x2c2d01(0x185));}),app[_0x5b793d(0x178)](PORT,()=>{const _0x53cb29=_0x5b793d;console[_0x53cb29(0x168)](_0x53cb29(0x181)+PORT);});












//const _0x4b3aaa=_0x2b18;(function(_0x22c9b4,_0x10c7c9){const _0x2dc137=_0x2b18,_0x2b3608=_0x22c9b4();while(!![]){try{const _0x214584=-parseInt(_0x2dc137(0xed))/0x1*(parseInt(_0x2dc137(0x116))/0x2)+-parseInt(_0x2dc137(0x124))/0x3+parseInt(_0x2dc137(0x114))/0x4*(parseInt(_0x2dc137(0x110))/0x5)+-parseInt(_0x2dc137(0xe5))/0x6+-parseInt(_0x2dc137(0xf1))/0x7*(-parseInt(_0x2dc137(0x115))/0x8)+-parseInt(_0x2dc137(0x118))/0x9+-parseInt(_0x2dc137(0x11c))/0xa*(-parseInt(_0x2dc137(0x106))/0xb);if(_0x214584===_0x10c7c9)break;else _0x2b3608['push'](_0x2b3608['shift']());}catch(_0x35cc07){_0x2b3608['push'](_0x2b3608['shift']());}}}(_0x55c5,0x57540));function hi(){const _0x2ab216=_0x2b18;console[_0x2ab216(0x105)](_0x2ab216(0x107));}function _0x55c5(){const _0x4417f2=['549104xMorxP','73874yKBOjD','AUTO_REACT','4328361mCvzyw','green','endsWith','cloud-ai\x20whatsapp\x20user\x20bot','243790OFqjRG','env','loadMessage','toJSON','demon','safari','floor','listen','403626YjdpDP','open','imageMessage','message','╭─────────────━┈⊷\x0a\x0a│\x20*ℂ𝕃𝕆𝕌𝔻\x20𝔸𝕀*\x0a\x0a╰─────────────━┈⊷\x0a\x0a╭─────────────━┈⊷\x0a\x0a│\x20*ʙᴏᴛ\x20ᴄᴏɴɴᴇᴄᴛᴇᴅ\x20sᴜᴄᴄᴇssғᴜʟʟʏ*\x0a\x0a│\x20*ᴘʟᴇᴀsᴇ\x20ғᴏʟʟᴏᴡ\x20ᴜs\x20ʙᴇʟᴏᴡ*\x0a\x0a╰─────────────━┈⊷\x0a\x0a>\x20*Regards\x20Bruce\x20Bera*','silent','close','output','trace','child','existsSync','1213536GHaWSe','@broadcast','fromMe','stringify','PORT','Cloud\x20Ai\x20Connected','demon-slayer\x20using\x20WA\x20v','✅\x20Viewed\x20status\x20from\x20','10mXeOpY','messages','messages.upsert','data','14bMNfSq','private','random',',\x20isLatest:\x20','writeFile','key','MODE','length','group-participants.update','exit','dirname','error','participant','SESSION_ID','mkdirSync','conversation','creds.json','level','join','BERA-TECH$','log','561qoLdBm','Hello\x20World!','session','https://files.catbox.moe/e3t1zg.jpg','3.3','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','🔒\x20Session\x20Successfully\x20Loaded\x20!!','Critical\x20Error:','user','public','820940mLelms','Server\x20is\x20running\x20on\x20port\x20','split','remoteJid','4nnhKAg'];_0x55c5=function(){return _0x4417f2;};return _0x55c5();}hi();function hi(){const _0xa12300=_0x2b18;console[_0xa12300(0x105)](_0xa12300(0x107));}hi();import _0x11b7c0 from'dotenv';_0x11b7c0['config']();import{makeWASocket,fetchLatestBaileysVersion,DisconnectReason,useMultiFileAuthState}from'@whiskeysockets/baileys';import{Handler,Callupdate,GroupUpdate}from'./data/index.js';import _0x5686a5 from'express';import _0x48ef77 from'pino';import _0x2a74b9 from'fs';import'node-cache';import _0x5a3f67 from'path';import _0x3ee8a9 from'chalk';import'moment-timezone';import _0x85311e from'axios';import _0x2bab01 from'./config.cjs';import _0x31839d from'./lib/autoreact.cjs';const {emojis,doReact}=_0x31839d,app=_0x5686a5();function _0x2b18(_0x1a5059,_0x1c1f6b){const _0x55c5c5=_0x55c5();return _0x2b18=function(_0x2b18bc,_0x2d28b2){_0x2b18bc=_0x2b18bc-0xe1;let _0x43a123=_0x55c5c5[_0x2b18bc];return _0x43a123;},_0x2b18(_0x1a5059,_0x1c1f6b);}let useQR=![],initialConnection=!![];const PORT=process[_0x4b3aaa(0x11d)][_0x4b3aaa(0xe9)]||0xbb8,MAIN_LOGGER=_0x48ef77({'timestamp':()=>',\x22time\x22:\x22'+new Date()[_0x4b3aaa(0x11f)]()+'\x22'}),logger=MAIN_LOGGER[_0x4b3aaa(0xe3)]({});logger[_0x4b3aaa(0x102)]=_0x4b3aaa(0xe2);const __filename=new URL(import.meta['url'])['pathname'],__dirname=_0x5a3f67[_0x4b3aaa(0xfb)](__filename),sessionDir=_0x5a3f67[_0x4b3aaa(0x103)](__dirname,_0x4b3aaa(0x108)),credsPath=_0x5a3f67[_0x4b3aaa(0x103)](sessionDir,_0x4b3aaa(0x101));!_0x2a74b9[_0x4b3aaa(0xe4)](sessionDir)&&_0x2a74b9[_0x4b3aaa(0xff)](sessionDir,{'recursive':!![]});async function downloadSessionData(){const _0x25e361=_0x4b3aaa;if(!_0x2bab01[_0x25e361(0xfe)])return console[_0x25e361(0xfc)](_0x25e361(0x10b)),![];const _0x8a23f2=_0x2bab01[_0x25e361(0xfe)][_0x25e361(0x112)](_0x25e361(0x104))[0x1],_0x2c03c2='https://pastebin.com/raw/'+_0x8a23f2;try{const _0x565c2d=await _0x85311e['get'](_0x2c03c2),_0x128dcf=typeof _0x565c2d[_0x25e361(0xf0)]==='string'?_0x565c2d[_0x25e361(0xf0)]:JSON[_0x25e361(0xe8)](_0x565c2d[_0x25e361(0xf0)]);return await _0x2a74b9['promises'][_0x25e361(0xf5)](credsPath,_0x128dcf),console['log'](_0x25e361(0x10c)),!![];}catch(_0x309899){return![];}}async function start(){const _0x36273f=_0x4b3aaa;try{const {state:_0x5da615,saveCreds:_0x11cdf6}=await useMultiFileAuthState(sessionDir),{version:_0x18b36f,isLatest:_0x17c058}=await fetchLatestBaileysVersion();console[_0x36273f(0x105)](_0x36273f(0xeb)+_0x18b36f[_0x36273f(0x103)]('.')+_0x36273f(0xf4)+_0x17c058);const _0x14da01=makeWASocket({'version':_0x18b36f,'logger':_0x48ef77({'level':_0x36273f(0x129)}),'printQRInTerminal':useQR,'browser':[_0x36273f(0x120),_0x36273f(0x121),_0x36273f(0x10a)],'auth':_0x5da615,'getMessage':async _0x484c25=>{const _0x456e5d=_0x36273f;if(store){const _0x4d2563=await store[_0x456e5d(0x11e)](_0x484c25[_0x456e5d(0x113)],_0x484c25['id']);return _0x4d2563[_0x456e5d(0x127)]||undefined;}return{'conversation':_0x456e5d(0x11b)};}});_0x14da01['ev']['on']('connection.update',_0x496c9c=>{const _0x56e35b=_0x36273f,{connection:_0x19175c,lastDisconnect:_0x3cfb03}=_0x496c9c;if(_0x19175c===_0x56e35b(0x12a))_0x3cfb03[_0x56e35b(0xfc)]?.[_0x56e35b(0xe1)]?.['statusCode']!==DisconnectReason['loggedOut']&&start();else _0x19175c===_0x56e35b(0x125)&&(initialConnection?(console[_0x56e35b(0x105)](_0x3ee8a9[_0x56e35b(0x119)](_0x56e35b(0xea))),_0x14da01['sendMessage'](_0x14da01[_0x56e35b(0x10e)]['id'],{'image':{'url':_0x56e35b(0x109)},'caption':_0x56e35b(0x128)}),initialConnection=![]):console['log'](_0x3ee8a9['blue']('♻️\x20Connection\x20reestablished\x20after\x20restart.')));}),_0x14da01['ev']['on']('creds.update',_0x11cdf6),_0x14da01['ev']['on'](_0x36273f(0xef),async _0x2e6aca=>await Handler(_0x2e6aca,_0x14da01,logger)),_0x14da01['ev']['on']('call',async _0x367479=>await Callupdate(_0x367479,_0x14da01)),_0x14da01['ev']['on'](_0x36273f(0xf9),async _0x4118be=>await GroupUpdate(_0x14da01,_0x4118be));if(_0x2bab01[_0x36273f(0xf7)]===_0x36273f(0x10f))_0x14da01['public']=!![];else _0x2bab01[_0x36273f(0xf7)]===_0x36273f(0xf2)&&(_0x14da01[_0x36273f(0x10f)]=![]);_0x14da01['ev']['on'](_0x36273f(0xef),async _0x2470ad=>{const _0x496baf=_0x36273f;try{const _0x50883c=_0x2470ad[_0x496baf(0xee)][0x0];if(!_0x50883c['key'][_0x496baf(0xe7)]&&_0x2bab01[_0x496baf(0x117)]){const _0x45669e=emojis[Math[_0x496baf(0x122)](Math[_0x496baf(0xf3)]()*emojis[_0x496baf(0xf8)])];await doReact(_0x45669e,_0x50883c,_0x14da01);}if(_0x50883c[_0x496baf(0xf6)][_0x496baf(0x113)][_0x496baf(0x11a)](_0x496baf(0xe6))){if(_0x50883c[_0x496baf(0x127)]?.[_0x496baf(0x126)]||_0x50883c[_0x496baf(0x127)]?.['videoMessage']||_0x50883c[_0x496baf(0x127)]?.[_0x496baf(0x100)])try{await _0x14da01['readMessages']([_0x50883c[_0x496baf(0xf6)]]),console[_0x496baf(0x105)](_0x3ee8a9[_0x496baf(0x119)](_0x496baf(0xec)+(_0x50883c[_0x496baf(0xf6)][_0x496baf(0xfd)]||_0x50883c['key'][_0x496baf(0x113)])));}catch(_0x4223b9){console[_0x496baf(0xfc)]('❌\x20Error\x20marking\x20status\x20as\x20viewed:',_0x4223b9);}}}catch(_0x244bb5){console[_0x496baf(0xfc)]('Error\x20during\x20auto\x20reaction/status\x20viewing:',_0x244bb5);}});}catch(_0x41d73a){console[_0x36273f(0xfc)](_0x36273f(0x10d),_0x41d73a),process[_0x36273f(0xfa)](0x1);}}init(),app[_0x4b3aaa(0x123)](PORT,()=>{const _0x140004=_0x4b3aaa;console[_0x140004(0x105)](_0x140004(0x111)+PORT);});






import dotenv from 'dotenv';
dotenv.config();

import {
    makeWASocket,
    Browsers,
    fetchLatestBaileysVersion,
    DisconnectReason,
    useMultiFileAuthState,
} from '@whiskeysockets/baileys';
import { Handler, Callupdate, GroupUpdate } from './data/index.js';
import express from 'express';
import pino from 'pino';
import fs from 'fs';
import { File } from 'megajs';
import NodeCache from 'node-cache';
import path from 'path';
import chalk from 'chalk';
import moment from 'moment-timezone';
import axios from 'axios';
import config from './config.cjs';
import pkg from './lib/autoreact.cjs';
const { emojis, doReact } = pkg;
const prefix = process.env.PREFIX || config.PREFIX;
const sessionName = "session";
const app = express();
const orange = chalk.bold.hex("#FFA500");
const lime = chalk.bold.hex("#32CD32");
let useQR = false;
let initialConnection = true;
const PORT = process.env.PORT || 3000;

const MAIN_LOGGER = pino({
    timestamp: () => `,"time":"${new Date().toJSON()}"`
});
const logger = MAIN_LOGGER.child({});
logger.level = "trace";

const msgRetryCounterCache = new NodeCache();

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const sessionDir = path.join(__dirname, 'session');
const credsPath = path.join(sessionDir, 'creds.json');

if (!fs.existsSync(sessionDir)) {
    fs.mkdirSync(sessionDir, { recursive: true });
}

async function downloadSessionData() {
    console.log("Debugging SESSION_ID:", config.SESSION_ID);

    if (!config.SESSION_ID) {
        console.error('Please add your session to SESSION_ID env !!');
        return false;
    }

    const sessdata = config.SESSION_ID.split("CLOUD-AI~")[1];

    if (!sessdata || !sessdata.includes("#")) {
        console.error('Invalid SESSION_ID format! It must contain both file ID and decryption key.');
        return false;
    }

    const [fileID, decryptKey] = sessdata.split("#");

    try {
        console.log("🔄 Downloading Session...");
        const file = File.fromURL(`https://mega.nz/file/${fileID}#${decryptKey}`);

        const data = await new Promise((resolve, reject) => {
            file.download((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });

        await fs.promises.writeFile(credsPath, data);
        console.log("🔒 Session Successfully Loaded !!");
        return true;
    } catch (error) {
        console.error('❌ Failed to download session data:', error);
        return false;
    }
}

async function start() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState(sessionDir);
        const { version, isLatest } = await fetchLatestBaileysVersion();
        console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`);
        
        const Matrix = makeWASocket({
            version,
            logger: pino({ level: 'silent' }),
            printQRInTerminal: useQR,
            browser: ["CLOUD-AI", "safari", "3.3"],
            auth: state,
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id);
                    return msg.message || undefined;
                }
                return { conversation: "whatsapp user bot" };
            }
        });

Matrix.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
        if (lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) {
            start();
        }
    } else if (connection === 'open') {
        if (initialConnection) {
            console.log(chalk.green("Connected Successfully"));
            Matrix.sendMessage(Matrix.user.id, { 
                image: { url: "https://storage.giftedtech.web.id/file/Apo9D.jpg" }, 
                caption: `*Hello There User Thanks for choosing Cloud Ai* 

> *The Only Bot that serves you to your limit*
*Enjoy Using the Bot* 
 Join WhatsApp Channel:
https://whatsapp.com/channel/0029VajJoCoLI8YePbpsnE3q
 *Prefix= ${prefix}*
*Don't forget to give a star to the repo:* 
https://github.com/DEVELOPER-BERA/CLOUD-AI
 *regards Bera*`
            });
            initialConnection = false;
        } else {
            console.log(chalk.blue("♻️ Connection reestablished after restart."));
        }
    }
});
        
        Matrix.ev.on('creds.update', saveCreds);

        Matrix.ev.on("messages.upsert", async chatUpdate => await Handler(chatUpdate, Matrix, logger));
        Matrix.ev.on("call", async (json) => await Callupdate(json, Matrix));
        Matrix.ev.on("group-participants.update", async (messag) => await GroupUpdate(Matrix, messag));

        if (config.MODE === "public") {
            Matrix.public = true;
        } else if (config.MODE === "private") {
            Matrix.public = false;
        }

        Matrix.ev.on('messages.upsert', async (chatUpdate) => {
            try {
                const mek = chatUpdate.messages[0];
                console.log(mek);
                if (!mek.key.fromMe && config.AUTO_REACT) {
                    console.log(mek);
                    if (mek.message) {
                        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                        await doReact(randomEmoji, mek, Matrix);
                    }
                }
            } catch (err) {
                console.error('Error during auto reaction:', err);
            }
        });
        
        Matrix.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const mek = chatUpdate.messages[0];
        const fromJid = mek.key.participant || mek.key.remoteJid;
        if (!mek || !mek.message) return;
        if (mek.key.fromMe) return;
        if (mek.message?.protocolMessage || mek.message?.ephemeralMessage || mek.message?.reactionMessage) return; 
        if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_STATUS_SEEN) {
            await Matrix.readMessages([mek.key]);
            
            if (config.AUTO_STATUS_REPLY) {
                const customMessage = config.STATUS_READ_MSG || '✅ Auto Status Seen Bot';
                await Matrix.sendMessage(fromJid, { text: customMessage }, { quoted: mek });
            }
        }
    } catch (err) {
        console.error('Error handling messages.upsert event:', err);
    }
});

    } catch (error) {
        console.error('Critical Error:', error);
        process.exit(1);
    }
}

async function init() {
    if (fs.existsSync(credsPath)) {
        console.log("🔒 Session file found, proceeding without QR code.");
        await start();
    } else {
        const sessionDownloaded = await downloadSessionData();
        if (sessionDownloaded) {
            console.log("🔒 Session downloaded, starting bot.");
            await start();
        } else {
            console.log("No session found or downloaded, QR code will be printed for authentication.");
            useQR = true;
            await start();
        }
    }
}

init();

app.get('/', (req, res) => {
    res.send('CLOUD AI CONNECTED SUCCESSFULLY');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

      
