/**
══════════════════════════════════════════════════════════════════════════════════════════════════════

░██████╗███████╗░█████╗░███╗░░██╗       ███╗░░░███╗██████╗░
██╔════╝██╔════╝██╔══██╗████╗░██║       ████╗░████║██╔══██╗
╚█████╗░█████╗░░██║░░██║██╔██╗██║       ██╔████╔██║██║░░██║
░╚═══██╗██╔══╝░░██║░░██║██║╚████║       ██║╚██╔╝██║██║░░██║
██████╔╝███████╗╚█████╔╝██║░╚███║       ██║░╚═╝░██║██████╔╝
╚═════╝░╚══════╝░╚════╝░╚═╝░░╚══╝       ╚═╝░░░░░╚═╝╚═════╝░

══════════════════════════════════════════════════════════════════════════════════════════════════════
*
   * @project_name : SEON-MD
   * @author : Sadiya Tech
   * @youtube : https://www.youtube.com/@Sadiya-Tech
   * @description : SEON-MD ,A Multi-functional whatsapp user bot.
*
* 
   * Created By Sadiya Tech.
   * © 2025 SEON-MD.
*/

const _0x3b0644=_0x2dbc;function _0x2dbc(_0x549a33,_0x1c2e30){const _0x597438=_0x5974();return _0x2dbc=function(_0x2dbcfe,_0x3343ba){_0x2dbcfe=_0x2dbcfe-0x1bd;let _0x58deae=_0x597438[_0x2dbcfe];return _0x58deae;},_0x2dbc(_0x549a33,_0x1c2e30);}(function(_0x28b398,_0x14346b){const _0x18d158=_0x2dbc,_0x5896ea=_0x28b398();while(!![]){try{const _0xb72584=-parseInt(_0x18d158(0x1c8))/0x1+parseInt(_0x18d158(0x1c4))/0x2*(-parseInt(_0x18d158(0x1c3))/0x3)+parseInt(_0x18d158(0x1d1))/0x4+parseInt(_0x18d158(0x1c1))/0x5*(parseInt(_0x18d158(0x1cb))/0x6)+parseInt(_0x18d158(0x1ce))/0x7+parseInt(_0x18d158(0x1ca))/0x8*(-parseInt(_0x18d158(0x1c0))/0x9)+parseInt(_0x18d158(0x1c7))/0xa*(parseInt(_0x18d158(0x1c5))/0xb);if(_0xb72584===_0x14346b)break;else _0x5896ea['push'](_0x5896ea['shift']());}catch(_0x3320aa){_0x5896ea['push'](_0x5896ea['shift']());}}}(_0x5974,0xc44ef));const fetch=(..._0xb3e856)=>import(_0x3b0644(0x1d0))['then'](({default:_0xd75ef8})=>_0xd75ef8(..._0xb3e856)),cheerio=require('cheerio'),tools=require('../lib/apk');async function search(_0x1ab665){const _0xa28f7c=_0x3b0644;let _0x4efccd=await fetch(tools['api'](0x5,'/apps/search',{'query':_0x1ab665,'limit':0x3e8})),_0x5693b2={};return _0x4efccd=await _0x4efccd['json'](),_0x5693b2=_0x4efccd['datalist'][_0xa28f7c(0x1bf)]['map'](_0x40971e=>{const _0x5882ff=_0xa28f7c;return{'name':_0x40971e[_0x5882ff(0x1be)],'id':_0x40971e[_0x5882ff(0x1cd)]};}),_0x5693b2;}function _0x5974(){const _0x10e997=['icon','package','10270890OUzinu','api','node-fetch','4618476GoEXRJ','updated','datalist','name','list','9UrxuCm','1745605ANdXmh','/apps/search','3387jijNtw','2162uMcMOv','596189qvoOFJ','file','100iqOQfI','597707uaLadC','exports','7126120JsmISa','6wTAbUd'];_0x5974=function(){return _0x10e997;};return _0x5974();}async function download(_0x1404df){const _0x50fd9b=_0x3b0644;let _0x507078=await fetch(tools[_0x50fd9b(0x1cf)](0x5,_0x50fd9b(0x1c2),{'query':_0x1404df,'limit':0x1}));_0x507078=await _0x507078['json']();let _0x381163=_0x507078[_0x50fd9b(0x1bd)][_0x50fd9b(0x1bf)][0x0][_0x50fd9b(0x1be)],_0x5250ec=_0x507078[_0x50fd9b(0x1bd)][_0x50fd9b(0x1bf)][0x0][_0x50fd9b(0x1cd)],_0x13e31f=_0x507078[_0x50fd9b(0x1bd)]['list'][0x0][_0x50fd9b(0x1cc)],_0x5f4bd2=_0x507078[_0x50fd9b(0x1bd)][_0x50fd9b(0x1bf)][0x0][_0x50fd9b(0x1c6)]['path'],_0x9d0442=_0x507078['datalist'][_0x50fd9b(0x1bf)][0x0][_0x50fd9b(0x1d2)];return{'name':_0x381163,'lastup':_0x9d0442,'package':_0x5250ec,'icon':_0x13e31f,'dllink':_0x5f4bd2};}module[_0x3b0644(0x1c9)]={'search':search,'download':download};
