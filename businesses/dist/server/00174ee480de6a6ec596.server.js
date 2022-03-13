(()=>{"use strict";const e=(e,t,s,i,n,r,o)=>e>=i-o&&e<=i+o&&t>=n-o&&t<=n+o&&s>=r-o&&s<=r+o,t=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");var s=function(e,t,s,i){return new(s||(s=Promise))((function(n,r){function o(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))};const i=[{pos:[997.4505615234375,-3200.703369140625,-36.4007568359375],name:"Electricity Company",defaultProductPrice:500,isUnique:!0},{pos:[-77.6044,-833.7363,243.3737],name:"Phone Company",defaultProductPrice:500,isUnique:!0},{pos:[0,0,0],name:"24/7",defaultProductPrice:500}];new class extends class extends class extends class extends class extends class{constructor(){this.routingBucketCondition=(e,t)=>!0,this.assignServerBaseListeners()}RegisterAdminCommand(e,t,s,i){RegisterCommand(e,((e,i,n)=>{Number(global.exports.authentication.getPlayerInfo(e,"adminLevel"))<t||s(e,i,n)}),i)}assignServerBaseListeners(){onNet(`${GetCurrentResourceName()}:set-client-routing-bucket`,((e,t)=>{this.routingBucketCondition(e,t)&&SetEntityRoutingBucket(e,t)}))}}{removeClientsideVehicles(){TriggerClientEvent(`${GetCurrentResourceName()}:ARM_remove-vehicles`,-1)}}{}{constructor(e){super(),this.dbTableName=e,this._entities=[],this.loadDBEntities(),this._assignExports(),this.assignDBEntityCommunicationListeners()}get entities(){return this._entities}getEntities(){return this._entities}createEntity(e){return(()=>s(this,void 0,void 0,(function*(){try{const t=this.getEntityProperties(e),s=this.getEntityPropertiesValues(e,t),i=yield global.exports.oxmysql.insert_async(`INSERT INTO \`${this.dbTableName}\` (${t.join(", ")}) VALUES (${Array(t.length).fill("?").join(", ")})`,s);return this._entities.push(Object.assign(Object.assign({},e),{id:i})),this.syncWithClients(),i}catch(e){return console.log(e),null}})))()}removeEntity(e){return(()=>s(this,void 0,void 0,(function*(){try{const t=yield global.exports.oxmysql.query_async(`DELETE FROM \`${this.dbTableName}\` WHERE id = ?`,[e.id]);return this._entities=this._entities.filter((t=>t.id!==e.id)),this.syncWithClients(),!!t}catch(e){return console.log(e),!1}})))()}saveDBEntityAsync(e){return(()=>s(this,void 0,void 0,(function*(){try{const t=this.getEntityByDBId(e),s=this.getEntityProperties(t),i=this.getEntityPropertiesValues(t,s),n=" = ?, ",r=yield global.exports.oxmysql.update_async(`UPDATE \`${this.dbTableName}\` SET ${s.join(n).concat(n).slice(0,-2)} WHERE id = ?`,[...i,t.id]);return r&&this.syncWithClients(),r>0}catch(e){return console.log(e),!1}})))()}getEntityByDBId(e){return this._entities.find((t=>t.id===e))}loadDBEntities(){setImmediate((()=>s(this,void 0,void 0,(function*(){const e=(yield global.exports.oxmysql.query_async(`SELECT * FROM \`${this.dbTableName}\``,[])).map((e=>(Object.keys(e).forEach((t=>{var s;e[t]=JSON.parse((s=e[t].toString(),!/^\s*$/.test(s)&&(s=(s=(s=s.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@")).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")).replace(/(?:^|:|,)(?:\s*\[)+/g,""),/^[\],:{}\s]*$/.test(s))?e[t]:`"${e[t]}"`),(function(e,t){return"object"==typeof t||isNaN(t)?t:Number(t)}))})),e)));(null==e?void 0:e.length)&&(this._entities=e,setTimeout((()=>{this.syncWithClients()}),2e3))}))))}getEntityProperties(e){const t=[];for(let s in e)"id"!==s&&t.push(s);return t}assignDBEntityCommunicationListeners(){onNet("authentication:player-authenticated",(e=>{this._entities.length&&this.syncWithClients(e)}))}getEntityPropertiesValues(e,t){return t.map((t=>Array.isArray(e[t])?JSON.stringify(e[t]):e[t].toString()))}syncWithClients(e){TriggerClientEvent(`${GetCurrentResourceName()}:db-send-entities`,e||-1,this.entities)}_assignExports(){exports("getEntities",this.getEntities.bind(this))}}{getClosestEntityOfSameTypeToPlayer(e){return this.getClosestEntityOfSameTypeExitToPlayer(e)||this.getClosestEntityOfSameTypeEntranceToPlayer(e)}getClosestEntityOfSameTypeEntranceToPlayer(t){const s=GetEntityCoords(GetPlayerPed(t),!0);return this.entities.find((t=>e(s[0],s[1],s[2],t.entranceX,t.entranceY,t.entranceZ,3)))||null}getClosestEntityOfSameTypeExitToPlayer(t){const s=GetEntityRoutingBucket(GetPlayerPed(t)),i=this.getEntityByDBId(s),n=GetEntityCoords(GetPlayerPed(t),!0);return i&&e(n[0],n[1],n[2],i.exitX,i.exitY,i.exitZ,3)?i:null}}{constructor(e){super(e),this.registerCommands(),this.registerListeners(),this.registerExports()}registerCommands(){this.RegisterAdminCommand("setdepositposition",6,((e,t)=>{let s;const i=GetEntityCoords(GetPlayerPed(e),!0);t&&t[0]?s=this.getEntityByDBId(Number(t[0])):console.log("Syntax: /setdepositposition <business-id>!"),s?(s.depositX=i[0],s.depositY=i[1],s.depositZ=i[2],console.log(global.exports.authentication.getPlayerInfo(e,"name"),`has set a new deposit position for business ID ${s.id} to X: ${s.depositX.toFixed(4)}, Y:${s.depositY.toFixed(4)}, Z:${s.depositZ.toFixed(4)}!`),this.saveDBEntityAsync(s.id)):console.log("Failed - Business undefined")}),!1),this.RegisterAdminCommand("bizid",2,(e=>{let t=this.getClosestEntityOfSameTypeToPlayer(e);t?console.log(`Closest business ID is: ${t.id}`):console.log("Failed - No business close to player.")}),!1),this.RegisterAdminCommand("removebusiness",6,((e,t)=>{let s=this.getClosestEntityOfSameTypeToPlayer(e);t&&t[0]&&(s=this.getEntityByDBId(Number(t[0]))||this.getClosestEntityOfSameTypeToPlayer(e)),s?(console.log(global.exports.authentication.getPlayerInfo(e,"name"),"removed a business!"),this.removeEntity(s)):console.log("Failed - Business undefined")}),!1),this.RegisterAdminCommand("createbusiness",6,((e,t)=>{if(t.length<3)return void console.log("Syntax: /createbusiness <business-type> <price> <level>!");const s=Number(t[0]),n=Number(t[1]),r=Number(t[2]),o=GetEntityCoords(GetPlayerPed(e),!0);i[s].isUnique&&this.entities.find((e=>e.name===i[s].name))?global.exports.chat.addMessage(e,"Because this business type is unique, there can only be one business of this type on the server."):this.createEntity({owner:"",level:r,name:i[s].name,entranceX:o[0],entranceY:o[1],entranceZ:o[2],firstPurchasePrice:n,exitX:i[s].pos[0],exitY:i[s].pos[1],exitZ:i[s].pos[2],sellingPrice:0,partnerIds:[],parent:-1,productPrice:i[s].defaultProductPrice})}),!1),RegisterCommand("enterbusiness",(e=>{const t=this.getClosestEntityOfSameTypeEntranceToPlayer(e);t?this.isEnterable(t)&&(t.owner===global.exports.authentication.getPlayerInfo(e,"name")||t.partnerIds.includes(Number(global.exports.authentication.getPlayerInfo(e,"id")))?this.teleportIntoBusiness(e,t):TriggerClientEvent(`${GetCurrentResourceName()}:force-showui`,e,t)):global.exports.chat.addMessage(e,"Couldn't find a valid business.")}),!1),RegisterCommand("exitbusiness",(e=>{let t=this.getClosestEntityOfSameTypeExitToPlayer(e);t&&(SetEntityCoords(GetPlayerPed(e),t.entranceX,t.entranceY,t.entranceZ,!0,!1,!1,!0),SetEntityRoutingBucket(GetPlayerPed(e),0))}),!1),RegisterCommand("businessmenu",(e=>{var s;const i=GetEntityRoutingBucket(GetPlayerPed(e)),n=this.entities.find((e=>e.id===i));0!==i&&n?TriggerClientEvent(`${GetCurrentResourceName()}-menu:force-showui`,e,{stats:[{key:"Level",value:n.level},{key:"Partners",value:null===(s=n.partnerIds)||void 0===s?void 0:s.length},{key:"Income",value:"$750/hr"},{key:"Security(%)",value:"0%"},{key:"Pet",value:"German Shepherd"},{key:"Pet Status",value:"Happy"},{key:"Price",value:n.sellingPrice>0?`$${t(n.sellingPrice)}`:"Not for Sale"},{key:"Value",value:"$"+t(n.firstPurchasePrice)},{key:"Upgrades",value:"0/3"},{key:"Taxes",value:"$1,000/hr"},{key:"Pet Expenses",value:"$50/hr"}],items:n.partnerIds.map((e=>({outline:"#404158",topLeft:"1",bottomRight:"",width:65,image:"1"}))),leftMenu:{description:"Business Management",buttons:[{title:"Set For Sale",subtitle:"Enable players to buy your business",icon:"sell"},{title:"Sell To Bank",subtitle:"Sell immediately for 50% value",icon:"account_balance"},{title:"Fire All Partners",subtitle:"Fire all partners immediately",icon:"logout"}]},rightMenu:{description:"Business Upgrades",buttons:[{title:"Heal Upgrade",subtitle:"Enable healing for $300/hr",icon:"favorite_border"}]},title:`Business Menu - ${n.owner}'s ${n.name} (#${n.id})`}):console.log("Failed to show businessmenu to ",GetPlayerName(e))}),!1)}registerListeners(){onNet(`${GetCurrentResourceName()}:request-purchase-business`,(()=>{const e=this.getClosestEntityOfSameTypeToPlayer(source);if(e.owner&&e.sellingPrice>0||!e.owner&&e.firstPurchasePrice<=Number(global.exports.authentication.getPlayerInfo(source,"cash"))){const s=e.owner?e.sellingPrice:e.firstPurchasePrice;TriggerClientEvent(`${GetCurrentResourceName()}:show-dialog`,source,{title:"Purchase this business?",content:`Are you sure you want to purchase this business for $${t(s)}?`,buttons:[{title:"Confirm"}],dialogId:"purchase_unowned_business"})}})),onNet(`${GetCurrentResourceName()}:confirm-purchase-business`,(e=>{return t=this,s=void 0,n=function*(){const t=this.getClosestEntityOfSameTypeToPlayer(e);if(t.owner&&t.sellingPrice>0||!t.owner&&t.firstPurchasePrice<=Number(global.exports.authentication.getPlayerInfo(e,"cash"))){const s=t.owner?t.sellingPrice:t.firstPurchasePrice,i=t.owner;t.owner=global.exports.authentication.getPlayerInfo(e,"name"),(yield this.saveDBEntityAsync(t.id))?(global.exports.authentication.setPlayerInfo(e,"cash",Number(global.exports.authentication.getPlayerInfo(e,"cash"))-s,!1),global.exports.authentication.setPlayerInfo(e,"businesskeys",[...global.exports.authentication.getPlayerInfo(e,"businesskeys"),t.id]),this.teleportIntoBusiness(e,t),TriggerClientEvent(`${GetCurrentResourceName()}:business-purchased`,e,t)):t.owner=i}},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{l(n.next(e))}catch(e){r(e)}}function a(e){try{l(n.throw(e))}catch(e){r(e)}}function l(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(o,a)}l((n=n.apply(t,s||[])).next())}));var t,s,i,n}))}syncWithClients(e){if(super.syncWithClients(e),e){const t=global.exports.authentication.getPlayerInfo(e,"name"),s=this.entities.filter((e=>e.owner===t));s.length&&global.exports.authentication.setPlayerInfo(e,"businesskeys",s.map((e=>e.id)))}}isEnterable(e){return 0!==e.entranceX&&0!==e.entranceY&&0!==e.entranceZ}teleportIntoBusiness(e,t){SetEntityCoords(GetPlayerPed(e),t.exitX,t.exitY,t.exitZ,!0,!1,!1,!0),SetEntityRoutingBucket(GetPlayerPed(e),t.id)}registerExports(){exports("getClosestBusiness",this.getClosestEntityOfSameTypeToPlayer),exports("getClosestBusinessExit",this.getClosestEntityOfSameTypeExitToPlayer)}}("businesses")})();