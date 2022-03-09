(()=>{"use strict";var e={187:e=>{var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function r(){r.init.call(this)}e.exports=r,e.exports.once=function(e,t){return new Promise((function(n,i){function s(n){e.removeListener(t,r),i(n)}function r(){"function"==typeof e.removeListener&&e.removeListener("error",s),n([].slice.call(arguments))}m(e,t,r,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&m(e,"error",t,{once:!0})}(e,s)}))},r.EventEmitter=r,r.prototype._events=void 0,r.prototype._eventsCount=0,r.prototype._maxListeners=void 0;var o=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function a(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function u(e,t,n,i){var s,r,o,u;if(c(n),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),r=e._events),o=r[t]),void 0===o)o=r[t]=n,++e._eventsCount;else if("function"==typeof o?o=r[t]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),(s=a(e))>0&&o.length>s&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=o.length,u=l,console&&console.warn&&console.warn(u)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},s=l.bind(i);return s.listener=n,i.wrapFn=s,s}function d(e,t,n){var i=e._events;if(void 0===i)return[];var s=i[t];return void 0===s?[]:"function"==typeof s?n?[s.listener||s]:[s]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(s):f(s,s.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function f(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function m(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function s(r){i.once&&e.removeEventListener(t,s),n(r)}))}}Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),r.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return a(this)},r.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var s="error"===e,r=this._events;if(void 0!==r)s=s&&void 0===r.error;else if(!s)return!1;if(s){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var c=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw c.context=o,c}var a=r[e];if(void 0===a)return!1;if("function"==typeof a)i(a,this,t);else{var u=a.length,l=f(a,u);for(n=0;n<u;++n)i(l[n],this,t)}return!0},r.prototype.addListener=function(e,t){return u(this,e,t,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(e,t){return u(this,e,t,!0)},r.prototype.once=function(e,t){return c(t),this.on(e,h(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,h(this,e,t)),this},r.prototype.removeListener=function(e,t){var n,i,s,r,o;if(c(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(s=-1,r=n.length-1;r>=0;r--)if(n[r]===t||n[r].listener===t){o=n[r].listener,s=r;break}if(s<0)return this;0===s?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,s),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,o||t)}return this},r.prototype.off=r.prototype.removeListener,r.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var s,r=Object.keys(n);for(i=0;i<r.length;++i)"removeListener"!==(s=r[i])&&this.removeAllListeners(s);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},r.prototype.listeners=function(e){return d(this,e,!0)},r.prototype.rawListeners=function(e){return d(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},r.prototype.listenerCount=p,r.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{const e=e=>new Promise((t=>setTimeout(t,e))),t=(e,t,n,i,s,r,o)=>e>=i-o&&e<=i+o&&t>=s-o&&t<=s+o&&n>=r-o&&n<=r+o,i=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");var s=n(187),r=function(e,t,n,i){return new(n||(n=Promise))((function(s,r){function o(e){try{a(i.next(e))}catch(e){r(e)}}function c(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}a((i=i.apply(e,t||[])).next())}))};new class extends class extends class extends class extends class extends class extends class{constructor(){this.tickInstance=null,this.tickFunctions=[],this.routingBucket=0,this.assignBaseListeners()}addToTick(...e){e.forEach((e=>{-1!==this.tickFunctions.findIndex((t=>t.id===e.id))&&console.error(`[ClientBase]: A tick function with the id ${e.id} already exists in the stack! The newly added tick function will not be executed.`)})),this.tickFunctions.push(...e),this.removeTickDuplicates(),this.refreshTicks()}addToTickUnique(...e){e.forEach((e=>{this.removeFromTick(e.id)})),this.addToTick(...e)}removeFromTick(e){this.tickFunctions=this.tickFunctions.filter((t=>t.id!=e))}refreshTicks(){this.tickInstance&&(clearTick(this.tickInstance),this.tickInstance=null),this.tickFunctions.length>0&&(this.tickInstance=setTick((()=>{return e=this,t=void 0,i=function*(){if(!this.tickFunctions.length)return clearTick(this.tickInstance),void(this.tickInstance=null);this.tickFunctions.forEach((e=>{e.function()}))},new((n=void 0)||(n=Promise))((function(s,r){function o(e){try{a(i.next(e))}catch(e){r(e)}}function c(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}a((i=i.apply(e,t||[])).next())}));var e,t,n,i})))}removeTickDuplicates(){this.tickFunctions=this.tickFunctions.filter((e=>this.tickFunctions.findIndex((t=>t.id==e.id))==this.tickFunctions.indexOf(e)))}assignBaseListeners(){onNet(`${GetCurrentResourceName()}:set-routing-bucket`,(e=>{this.routingBucket=e}))}setEntityRoutingBucket(e){TriggerServerEvent(`${GetCurrentResourceName()}:set-client-routing-bucket`,e),this.routingBucket=e}}{constructor(){super(),this._blips=[],this._markers=[],this._vehicles=[],this._peds=[],this.assignDefaultEntityListeners()}get blips(){return this._blips}get markers(){return this._markers}get vehicles(){return this._vehicles}get peds(){return this._peds}createBlips(e){const t=e.map((e=>Object.assign(Object.assign({},e),{instance:null})));this._blips.push(...t),this.refreshBlips()}clearBlips(){this._blips.forEach((e=>{RemoveBlip(e.instance)})),this._blips=[]}refreshBlips(){this.blips.forEach((e=>{e.instance||(e.instance=AddBlipForCoord(e.pos[0],e.pos[1],e.pos[2]),SetBlipSprite(e.instance,e.id),SetBlipDisplay(e.instance,4),SetBlipScale(e.instance,1),SetBlipColour(e.instance,e.color),SetBlipAsShortRange(e.instance,!0),BeginTextCommandSetBlipName("STRING"),AddTextComponentString(e.title),EndTextCommandSetBlipName(e.instance))}))}createMarkers(e){const t=e.map((e=>Object.assign(Object.assign({},e),{instance:null})));this._markers.push(...t),this.refreshMarkers()}clearMarkers(){this._markers=[],this.removeFromTick(`${GetCurrentResourceName()}_markers`)}refreshMarkers(){this.addToTickUnique({id:`${GetCurrentResourceName()}_markers`,function:()=>r(this,void 0,void 0,(function*(){const n=GetEntityCoords(GetPlayerPed(-1),!0);this._markers.forEach((i=>r(this,void 0,void 0,(function*(){var s,r,o;if(t(n[0],n[1],n[2],i.pos[0],i.pos[1],i.pos[2],i.renderDistance)){if(i.textureDict&&!HasStreamedTextureDictLoaded(i.textureDict))for(RequestStreamedTextureDict(i.textureDict,!0);!HasStreamedTextureDictLoaded(i.textureDict);)yield e(100);DrawMarker(i.marker,i.pos[0],i.pos[1],i.pos[2],0,0,0,(null===(s=i.rotation)||void 0===s?void 0:s[0])||0,(null===(r=i.rotation)||void 0===r?void 0:r[1])||0,(null===(o=i.rotation)||void 0===o?void 0:o[2])||0,i.scale,i.scale,i.scale,i.rgba[0],i.rgba[1],i.rgba[2],i.rgba[3],!1,!0,2,!1,i.textureDict||null,i.textureName||null,!1),i.underlyingCircle&&DrawMarker(i.underlyingCircle.marker,i.pos[0],i.pos[1],i.pos[2]-.9,0,0,0,0,0,0,i.underlyingCircle.scale,i.underlyingCircle.scale,i.underlyingCircle.scale,i.underlyingCircle.rgba[0]||i.rgba[0],i.underlyingCircle.rgba[1]||i.rgba[1],i.underlyingCircle.rgba[2]||i.rgba[2],i.underlyingCircle.rgba[3]||i.rgba[3],!1,!0,2,!1,null,null,!1)}}))))}))})}createVehicleAsync(t,n,i,s,o,c,a,u=!1){return r(this,void 0,void 0,(function*(){let r=0;for(RequestModel(t);!HasModelLoaded(t);){if(r>10)return 0;yield e(100),r++}const l=CreateVehicle(t,n,i,s,o,c,a);return l&&(a&&this._vehicles.push(l),u&&TaskWarpPedIntoVehicle(GetPlayerPed(-1),l,-1)),l}))}removeVehicle(e){DoesEntityExist(e)&&DeleteEntity(e),this._vehicles.indexOf(e)>-1&&this._vehicles.splice(this._vehicles.indexOf(e),1)}removePed(e){DoesEntityExist(e)&&DeleteEntity(e),this._peds.indexOf(e)>-1&&this._peds.splice(this._peds.indexOf(e),1)}createPedInsideVehicleAsync(t,n,i,s,o,c){return r(this,void 0,void 0,(function*(){let r=0;for(RequestModel(i);!HasModelLoaded(i);){if(r>10)return 0;yield e(100),r++}const a=CreatePedInsideVehicle(t,n,i,s,o,c);return a&&this._peds.push(a),a}))}assignDefaultEntityListeners(){onNet("onResourceStop",(e=>{e===GetCurrentResourceName()&&(this._vehicles.forEach((e=>{this.removeVehicle(e)})),this._peds.forEach((e=>{this.removePed(e)})),this._vehicles=[],this._peds=[])}))}}{constructor(){super(...arguments),this._actionPoints=[]}get actionPoints(){return this._actionPoints}createActionPoints(...e){this._actionPoints.push(...e),this.refreshActionPoints()}clearActionPoints(){this._actionPoints=[],this.removeFromTick(`${GetCurrentResourceName()}_actionpoints`)}removeActionPoint(e){this._actionPoints=this._actionPoints.filter((t=>!(e.pos[0]===t.pos[0]&&e.pos[1]===t.pos[1]&&e.pos[2]===t.pos[2]))),this._actionPoints.length||this.clearActionPoints()}refreshActionPoints(){this.addToTickUnique({id:`${GetCurrentResourceName()}_actionpoints`,function:()=>{const e=GetEntityCoords(GetPlayerPed(-1),!0);let n=[];this._actionPoints.forEach((i=>{t(e[0],e[1],e[2],i.pos[0],i.pos[1],i.pos[2],1*(IsPedInAnyVehicle(GetPlayerPed(-1),!1)?4:1))&&(i.action(),i.once&&n.push(i))})),n.length>0&&(n.forEach((e=>{this._actionPoints.splice(this._actionPoints.indexOf(e),1)})),n=[])}})}}{constructor(){super(...arguments),this.timeBetweenFeeds=8e3}addToFeed(...e){e.forEach(((e,t)=>{setTimeout((()=>{BeginTextCommandThefeedPost("STRING"),AddTextComponentSubstringPlayerName(e),EndTextCommandThefeedPostTicker(!1,!0)}),t*this.timeBetweenFeeds)}))}}{getPlayerInfo(e){let t=GetConvar(`${n.g.GetPlayerServerId(n.g.PlayerId())}_PI_${e}`,"-1");return t.toString().includes(";ARM;,")&&(t=t.split(";ARM;,")),t}}{constructor(){super(),this.uiDisplay=!1,this.uiDisplayCooldownTimestamp=0,this.onIncomingUIMessageEvent=new s,this.addDefaultListeners()}isUIShowing(){return this.uiDisplay}isUIOnCooldown(){return Date.now()<this.uiDisplayCooldownTimestamp}showUI(){EnterCursorMode(),SetNuiFocus(!0,!0),SetNuiFocusKeepInput(!1),this.uiDisplay=!0,this.addToTickUnique({id:`${GetCurrentResourceName()}_UI`,function:()=>{DisableControlAction(0,1,this.uiDisplay),DisableControlAction(0,2,this.uiDisplay),DisableControlAction(0,142,this.uiDisplay),DisableControlAction(0,18,this.uiDisplay),DisableControlAction(0,322,this.uiDisplay),DisableControlAction(0,106,this.uiDisplay),this.uiDisplay||(this.removeFromTick(`${GetCurrentResourceName()}_UI`),SetNuiFocus(!1,!1))}})}hideUI(){this.uiDisplayCooldownTimestamp=Date.now()+3e3,LeaveCursorMode(),this.uiDisplay=!1,SendNuiMessage(JSON.stringify({type:"dismiss"}))}addUIListener(e){RegisterNuiCallbackType(e),on(`__cfx_nui:${e}`,((t,n)=>{this.onIncomingUIMessageEvent.emit(e,t),n("ok")})),this.onIncomingUIMessageEvent.on(e,(t=>{this.onIncomingUIMessage.call(this,e,t)}))}onIncomingUIMessage(e,t){}onForceShowUI(e){this.showUI()}onForceHideUI(){this.hideUI()}addDefaultListeners(){RegisterNuiCallbackType("dismiss"),on("__cfx_nui:dismiss",((e,t)=>{this.hideUI(),t("ok")})),onNet(`${GetCurrentResourceName()}:force-showui`,(e=>{this.onForceShowUI(e)}))}}{constructor(){super(),this.assignListeners(),this.addUIListener("buttonclick"),this.addUIListener("dialogbuttonclick")}onForceShowUI(e){super.onForceShowUI(e),this.updateUIData(e)}onForceHideUI(){super.onForceHideUI()}updateUIData(e){e.owner,this.getPlayerInfo("name");const t="nobody"===e.owner,n=t?e.firstPurchasePrice:e.sellingPrice;let s="";s=t?`House For Sale! (Price: $${i(e.firstPurchasePrice)}) (#${e.id})`:`${e.owner}'s house (#${e.id})${e.sellingPrice?" - For sale!":""}`,SendNuiMessage(JSON.stringify({type:"update",title:s,description:"Houses offer you storage, security, a place to sleep, rent opportunities and more. Houses are automatically sold as a result of prolonged inactivity.",resource:GetCurrentResourceName(),buttons:[Object.assign({title:"Purchase",subtitle:`Purchase this house for $${i(n)}.`,icon:"attach_money"},t||e.sellingPrice>0?Number(this.getPlayerInfo("cash"))<n?{disabled:!0,tooltip:"You do not have enough money"}:{disabled:!1}:{disabled:!0,tooltip:"Not for sale"}),Object.assign({title:"Rent",subtitle:`Rent a room in the house${e.rentPrice>0?" for $"+i(e.rentPrice):""}.`,icon:"bed"},t?{disabled:!0,tooltip:"House is not owned by anybody"}:e.rentPrice?Number(this.getPlayerInfo("cash"))>e.rentPrice?{disabled:!1}:{disabled:!0,tooltip:"Not enough money for rent"}:{disabled:!0,tooltip:"Doesn't accept tenants"}),{title:"Break in",subtitle:"Attempt to break the lock",icon:"door_back",disabled:!0,tooltip:"Lockpicking skill too low"}]}))}onIncomingUIMessage(e,t){if(super.onIncomingUIMessage(e,t),"buttonclick"===e)switch(t.buttonId){case 0:TriggerServerEvent(`${GetCurrentResourceName()}:request-purchase-house`);break;case 1:TriggerServerEvent(`${GetCurrentResourceName()}:request-become-tenant`)}"dialogbuttonclick"===e&&"purchase_unowned_house"===t.dialogId&&TriggerServerEvent(`${GetCurrentResourceName()}:confirm-purchase-house`,GetPlayerServerId(PlayerId()))}assignListeners(){onNet(`${GetCurrentResourceName()}:db-send-entities`,(e=>{console.log(e),this.clearMarkers(),this.clearBlips(),this.clearActionPoints(),e.forEach((e=>{const t=e.owner===this.getPlayerInfo("name"),n="nobody"===e.owner;this.createMarkers([{marker:9,pos:[e.entranceX,e.entranceY,e.entranceZ],rgba:t?[93,182,229,255]:[144,226,167,255],renderDistance:35,scale:.75,textureDict:"houses",textureName:"home_marker",rotation:[90,0,0],underlyingCircle:{marker:25,scale:1.75,rgba:t?[93,182,229,255]:[144,226,167,255]}}]),console.log(e.entranceX,typeof e.entranceX),this.createBlips([{id:40,color:t?57:n?69:59,title:t?"House - Your house":"House - "+(n?"Unbought":"Owned"),pos:[e.entranceX,e.entranceY,e.entranceZ]}]),this.createActionPoints({pos:[e.entranceX,e.entranceY,e.entranceZ],action:()=>{DisableControlAction(0,38,!0),DisableControlAction(0,68,!0),DisableControlAction(0,86,!0),DisableControlAction(0,29,!0),BeginTextCommandDisplayHelp("STRING"),AddTextComponentSubstringPlayerName("Press ~INPUT_PICKUP~ to enter the house."+("nobody"!==e.owner&&e.sellingPrice>0?`~n~Press ~INPUT_SPECIAL_ABILITY_SECONDARY~ to buy for $${i(e.sellingPrice)}.`:"")),EndTextCommandDisplayHelp(0,!1,!0,1),IsDisabledControlJustPressed(0,38)&&ExecuteCommand("enterhouse"),IsDisabledControlJustPressed(0,29)&&ExecuteCommand("enterhouse")}}),this.actionPoints.find((t=>{t.pos[0]===e.exitX&&t.pos[1]===e.exitY&&(t.pos[2],e.exitZ)}))||this.createActionPoints({pos:[e.exitX,e.exitY,e.exitZ],action:()=>{DisableControlAction(0,38,!0),DisableControlAction(0,68,!0),DisableControlAction(0,86,!0),DisableControlAction(0,244,!0),BeginTextCommandDisplayHelp("STRING"),AddTextComponentSubstringPlayerName("Press ~INPUT_PICKUP~ to exit the house.~n~Press ~INPUT_INTERACTION_MENU~ to open up the house menu."),EndTextCommandDisplayHelp(0,!1,!0,1),IsDisabledControlJustPressed(0,38)&&ExecuteCommand("exithouse"),IsDisabledControlJustPressed(0,244)&&ExecuteCommand("housemenu")}})}))})),onNet(`${GetCurrentResourceName()}:show-dialog`,(e=>{SendNuiMessage(JSON.stringify({type:"opendialog",dialogdata:JSON.stringify(e)}))})),onNet(`${GetCurrentResourceName()}:house-purchased`,(()=>{this.hideUI()})),onNet(`${GetCurrentResourceName()}:house-became-tenant`,(()=>{this.hideUI()}))}}})()})();