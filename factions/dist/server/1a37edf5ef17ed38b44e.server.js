(()=>{"use strict";const e={onPlayerDeath:"armoury:onPlayerDeath",onPlayerAuthenticate:"authentication:player-authenticated",onPlayerDisconnect:"playerDropped",onResourceStop:"onResourceStop",onContextMenuItemPressed:"armoury-overlay:context-menu-item-pressed",onPlayerEnterVehicle:"armoury:onPlayerEnterVehicle"};var t;!function(e){e[e.SERVER_TO_SERVER=0]="SERVER_TO_SERVER",e[e.SERVER_TO_CLIENT=1]="SERVER_TO_CLIENT",e[e.CLIENT_TO_SERVER=2]="CLIENT_TO_SERVER",e[e.CLIENT_TO_CLIENT=3]="CLIENT_TO_CLIENT"}(t||(t={}));const n=new Map,i=new Map,s=new Map;function o(i){return function(s,o,r){const a=e[o]||(null==i?void 0:i.eventName),l=(null==i?void 0:i.direction)||t.CLIENT_TO_SERVER;(null==a?void 0:a.length)?(n.has(s.constructor)||n.set(s.constructor,[]),n.get(s.constructor).some((([e,t,n])=>e===o))||n.get(s.constructor).push([o,a,l])):console.error(`${o} is not recognized as a default event, thus this listener won't work. Please use the eventName property inside the data parameter.`)}}function r(){return function(e,t,n){i.has(e.constructor)||i.set(e.constructor,[]),i.get(e.constructor).some((e=>e===t))||i.get(e.constructor).push(t)}}const a=(e,t,n,i,s,o,r)=>e>=i-r&&e<=i+r&&t>=s-r&&t<=s+r&&n>=o-r&&n<=o+r,l=e=>!/^\s*$/.test(e)&&(e=(e=(e=e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@")).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")).replace(/(?:^|:|,)(?:\s*\[)+/g,""),/^[\],:{}\s]*$/.test(e));var c=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},u=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};class d extends class extends class extends class{constructor(){this.routingBucketCondition=(e,t)=>!0,this.assignServerBaseListeners()}RegisterAdminCommand(e,t,n,i){RegisterCommand(e,((e,i,s)=>{Number(global.exports.authentication.getPlayerInfo(e,"adminLevel"))<t||n(e,i,s)}),i)}assignServerBaseListeners(){onNet(`${GetCurrentResourceName()}:set-client-routing-bucket`,((e,t)=>{this.routingBucketCondition(e,t)&&SetEntityRoutingBucket(e,t)}))}}{removeClientsideVehicles(){TriggerClientEvent(`${GetCurrentResourceName()}:ARM_remove-vehicles`,-1)}}{}{constructor(e,t=!1){super(),this.dbTableName=e,this._entities=[],this._playerToEntityBindings=new Map,t&&this.loadDBEntities()}get entities(){return this._entities}get playerToEntityBindings(){return this._playerToEntityBindings}getEntities(){return this._entities}createEntity(e,t){return(()=>u(this,void 0,void 0,(function*(){try{let n=this.getEntityProperties(e),i=this.getEntityPropertiesValues(e,n);t&&(n=["id",...n],i=[t.toString(),...i]);const s=yield global.exports.oxmysql.insert_async(`INSERT INTO \`${this.dbTableName}\` (${n.join(", ")}) VALUES (${Array(n.length).fill("?").join(", ")})`,i),o=Object.assign(Object.assign({},e),{id:t||s});return this._entities.push(o),this.syncWithClients(),o}catch(e){return console.log(e),null}})))()}removeEntity(e){return(()=>u(this,void 0,void 0,(function*(){try{const t=yield global.exports.oxmysql.query_async(`DELETE FROM \`${this.dbTableName}\` WHERE id = ?`,[e.id]);return this._entities=this._entities.filter((t=>t.id!==e.id)),this.syncWithClients(),!!t}catch(e){return console.log(e),!1}})))()}saveDBEntityAsync(e){return(()=>u(this,void 0,void 0,(function*(){try{const t=this.getEntityByDBId(e),n=this.getEntityProperties(t),i=this.getEntityPropertiesValues(t,n),s=" = ?, ",o=yield global.exports.oxmysql.update_async(`UPDATE \`${this.dbTableName}\` SET ${n.join(s).concat(s).slice(0,-2)} WHERE id = ?`,[...i,t.id]);return o&&this.syncWithClients(),o>0}catch(e){return console.log(e),!1}})))()}getEntityByDBId(e){return this._entities.find((t=>t.id===e))}loadDBEntityFor(e,t="id",n){return u(this,void 0,void 0,(function*(){const i=(yield global.exports.oxmysql.query_async(`SELECT * FROM \`${this.dbTableName}\` WHERE ${t} = ?`,[e])).map((e=>(Object.keys(e).forEach((t=>{e[t]=JSON.parse(l(e[t].toString())?e[t]:`"${e[t]}"`,(function(e,t){return"object"==typeof t||isNaN(t)?t:Number(t)}))})),e)));return(null==i?void 0:i.length)?(i.forEach((e=>{this._entities.push(e),n&&this.bindEntityToPlayerByEntityId(e.id,n)})),setTimeout((()=>{this.syncWithClients()}),2e3),(null==i?void 0:i.length)>1?i:i[0]):null}))}loadDBEntities(){setImmediate((()=>u(this,void 0,void 0,(function*(){const e=(yield global.exports.oxmysql.query_async(`SELECT * FROM \`${this.dbTableName}\``,[])).map((e=>(Object.keys(e).forEach((t=>{e[t]=JSON.parse(l(e[t].toString())?e[t]:`"${e[t]}"`,(function(e,t){return"object"==typeof t||isNaN(t)?t:Number(t)}))})),e)));(null==e?void 0:e.length)&&(this._entities=e,setTimeout((()=>{this.syncWithClients()}),2e3))}))))}getEntityProperties(e){const t=[];for(let n in e)"id"!==n&&t.push(n);return t}getEntityPropertiesValues(e,t){return t.map((t=>Array.isArray(e[t])||"object"==typeof e[t]?JSON.stringify(e[t]):e[t].toString()))}syncWithClients(e){TriggerClientEvent(`${GetCurrentResourceName()}:db-send-entities`,e||-1,this.entities)}bindEntityToPlayer(e,t){this.entities.includes(e)&&this.bindEntityToPlayerByEntityId(e.id,t)}bindEntityToPlayerByEntityId(e,t){this._entities.some((t=>t.id===e))&&(this._playerToEntityBindings.has(t)?this._playerToEntityBindings.set(t,[...this._playerToEntityBindings.get(t),e]):this._playerToEntityBindings.set(t,[e]))}onBoundEntityDestroyed(e,t){}onPlayerAuthenticate(e,t){this._entities.length&&this.syncWithClients(e)}onPlayerDisconnect(){this._playerToEntityBindings.has(source)&&((this._playerToEntityBindings.has(source)?this._playerToEntityBindings.get(source):[]).forEach((e=>{const t=this._entities.find((t=>t.id===e));t&&(this.onBoundEntityDestroyed(t,source),this._entities.splice(this._entities.indexOf(t),1))})),this._playerToEntityBindings.delete(source))}}c([r()],d.prototype,"getEntities",null),c([o()],d.prototype,"onPlayerAuthenticate",null),c([o()],d.prototype,"onPlayerDisconnect",null);class y extends d{getClosestEntityOfSameTypeToPlayer(e){return this.getClosestEntityOfSameTypeExitToPlayer(e)||this.getClosestEntityOfSameTypeEntranceToPlayer(e)}getClosestEntityOfSameTypeEntranceToPlayer(e){const t=GetEntityCoords(GetPlayerPed(e),!0);return this.entities.find((e=>a(t[0],t[1],t[2],e.entranceX,e.entranceY,e.entranceZ,3)))||null}getClosestEntityOfSameTypeExitToPlayer(e){const t=GetEntityRoutingBucket(GetPlayerPed(e)),n=this.getEntityByDBId(t),i=GetEntityCoords(GetPlayerPed(e),!0);return n&&a(i[0],i[1],i[2],n.exitX,n.exitY,n.exitZ,3)?n:null}}var h=function(e,t,n,i){var s,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,n,r):s(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r};let g=class extends y{constructor(e){super(e,!0),this.registerCommands(),this.registerExports(),this.registerListeners()}getOnlineFactionMembers(e){const t=this.entities.find((t=>t.internalId===e));return t?t.members.filter((e=>null!=e.onlineId)):[]}getAllFactionMembers(e){var t;return(null===(t=this.entities.find((t=>t.internalId===e)))||void 0===t?void 0:t.members)||[]}getFaction(e){return this.entities.find((t=>t.internalId===e))}isPlayerMemberOfFaction(e,t){var n;return null===(n=this.getFaction(e))||void 0===n?void 0:n.members.some((e=>e.onlineId===t))}registerCommands(){this.RegisterAdminCommand("removefaction",6,((e,t)=>{let n=this.getClosestEntityOfSameTypeToPlayer(e);t&&t[0]&&(n=this.getEntityByDBId(Number(t[0]))||this.getClosestEntityOfSameTypeToPlayer(e)),n?(console.log(global.exports.authentication.getPlayerInfo(e,"name"),"removed a faction!"),this.removeEntity(n)):console.log("Failed - Faction undefined")}),!1),this.RegisterAdminCommand("createfaction",6,((e,t)=>{if(t.length<3)return void console.log("Syntax: /createfaction <factionId> <factionName>!");const n=t[0],i=t.slice(1).join(" "),s=GetEntityCoords(GetPlayerPed(e),!0);this.createEntity({name:i,internalId:n,blipId:-1,entranceX:s[0],entranceY:s[1],entranceZ:s[2],exitX:0,exitY:0,exitZ:0,members:[]})}),!1),RegisterCommand("factionmenu",(e=>{const t=this.entities.find((e=>"taxi"===e.internalId));t?TriggerClientEvent(`${GetCurrentResourceName()}:force-showui`,e,{stats:[{key:"Name",value:"Taxi Cab Company"},{key:"Leader",value:"Tony Delgado"},{key:"Members",value:"1"}],items:t.members.map((e=>({outline:"#404158",topLeft:"1",bottomRight:"",width:65,image:"1"}))),leftMenu:{description:"Faction Management",buttons:[{title:"Message Of The Day",subtitle:"Change the MOTD of the faction",icon:"campaign"},{title:"Schedule Meeting",subtitle:"Schedule a meeting with all members",icon:"groups"},{title:"Respawn Vehicles (FVR)",subtitle:"Respawn all faction vehicles.",icon:"rv_hookup"},{title:"Pay Salaries",subtitle:"Pay all salaries immediately",icon:"attach_money"}]},rightMenu:{description:"Individual Member Management",buttons:[{title:"Manage Privileges",subtitle:"Rank up/down, make tester, etc.",icon:"star_rate"},{title:"Manage Faction Sanctions",subtitle:"View, Add or Remove faction sanctions.",icon:"report"},{title:"Set Member Note",subtitle:"Set a note about this member.",icon:"shield"},{title:"Check Work Report",subtitle:"Check Member's Work Report.",icon:"shield"},{title:"Uninvite",subtitle:"Uninvite this member.",icon:"exit_to_app"}]},title:`Faction Menu - ${t.name} (${t.members.length} Members)`,resource:GetCurrentResourceName()}):console.log("Failed to show factionmenu to ",GetPlayerName(e))}),!1)}registerExports(){exports("getOnlineFactionMembers",this.getOnlineFactionMembers.bind(this)),exports("getAllFactionMembers",this.getAllFactionMembers.bind(this)),exports("getFaction",this.getFaction.bind(this))}registerListeners(){onNet("authentication:player-authenticated",((e,t)=>{this.entities.forEach((n=>{const i=n.members.find((e=>e.id===t.id));i&&(i.onlineId=e)}))})),onNet("authentication:player-logout",(e=>{this.entities.forEach((t=>{const n=t.members.find((t=>t.onlineId===e));n&&(n.onlineId=null)}))}))}};h([r()],g.prototype,"isPlayerMemberOfFaction",null),g=h([function(e){return class extends e{constructor(...o){super(...o),n.has(e)&&n.get(e).forEach((([e,n,i])=>{i===t.CLIENT_TO_CLIENT?on(n,super[e].bind(this)):onNet(n,super[e].bind(this))})),i.has(e)&&i.get(e).forEach((e=>{exports(e,super[e].bind(this))})),s.has(e)&&s.get(e).forEach((([e,t])=>{RegisterCommand(e.toLowerCase(),((n,i,s)=>{Number(global.exports.authentication.getPlayerInfo(n,"adminLevel"))<t||super[e].call(this,n,i,s)}),!1)}))}}}],g),new g("factions")})();