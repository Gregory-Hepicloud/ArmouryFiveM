(()=>{"use strict";var e={187:e=>{var t,i="object"==typeof Reflect?Reflect:null,n=i&&"function"==typeof i.apply?i.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)};t=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise((function(i,n){function r(i){e.removeListener(t,s),n(i)}function s(){"function"==typeof e.removeListener&&e.removeListener("error",r),i([].slice.call(arguments))}v(e,t,s,{once:!0}),"error"!==t&&function(e,t,i){"function"==typeof e.on&&v(e,"error",t,{once:!0})}(e,r)}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function a(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function u(e,t,i,n){var r,s,o,u;if(c(i),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),s=e._events),o=s[t]),void 0===o)o=s[t]=i,++e._eventsCount;else if("function"==typeof o?o=s[t]=n?[i,o]:[o,i]:n?o.unshift(i):o.push(i),(r=a(e))>0&&o.length>r&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=o.length,u=l,console&&console.warn&&console.warn(u)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(e,t,i){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:i},r=l.bind(n);return r.listener=i,n.wrapFn=r,r}function f(e,t,i){var n=e._events;if(void 0===n)return[];var r=n[t];return void 0===r?[]:"function"==typeof r?i?[r.listener||r]:[r]:i?function(e){for(var t=new Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(r):d(r,r.length)}function p(e){var t=this._events;if(void 0!==t){var i=t[e];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function d(e,t){for(var i=new Array(t),n=0;n<t;++n)i[n]=e[n];return i}function v(e,t,i,n){if("function"==typeof e.on)n.once?e.once(t,i):e.on(t,i);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(s){n.once&&e.removeEventListener(t,r),i(s)}))}}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return a(this)},s.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var r="error"===e,s=this._events;if(void 0!==s)r=r&&void 0===s.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var c=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw c.context=o,c}var a=s[e];if(void 0===a)return!1;if("function"==typeof a)n(a,this,t);else{var u=a.length,l=d(a,u);for(i=0;i<u;++i)n(l[i],this,t)}return!0},s.prototype.addListener=function(e,t){return u(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return u(this,e,t,!0)},s.prototype.once=function(e,t){return c(t),this.on(e,h(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,h(this,e,t)),this},s.prototype.removeListener=function(e,t){var i,n,r,s,o;if(c(t),void 0===(n=this._events))return this;if(void 0===(i=n[e]))return this;if(i===t||i.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,i.listener||t));else if("function"!=typeof i){for(r=-1,s=i.length-1;s>=0;s--)if(i[s]===t||i[s].listener===t){o=i[s].listener,r=s;break}if(r<0)return this;0===r?i.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(i,r),1===i.length&&(n[e]=i[0]),void 0!==n.removeListener&&this.emit("removeListener",e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,i,n;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[e]),this;if(0===arguments.length){var r,s=Object.keys(i);for(n=0;n<s.length;++n)"removeListener"!==(r=s[n])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=i[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},s.prototype.listeners=function(e){return f(this,e,!0)},s.prototype.rawListeners=function(e){return f(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},s.prototype.listenerCount=p,s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e=i(187);const t=e=>new Promise((t=>setTimeout(t,e))),n=(e,t,i,n,r,s,o)=>e>=n-o&&e<=n+o&&t>=r-o&&t<=r+o&&i>=s-o&&i<=s+o;var r=function(e,t,i,n){return new(i||(i=Promise))((function(r,s){function o(e){try{a(n.next(e))}catch(e){s(e)}}function c(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,c)}a((n=n.apply(e,t||[])).next())}))};new class extends class extends class extends class extends class extends class{constructor(){this.tickInstance=null,this.tickFunctions=[],this.routingBucket=0,this.assignBaseListeners()}addToTick(...e){e.forEach((e=>{-1!==this.tickFunctions.findIndex((t=>t.id===e.id))&&console.error(`[ClientBase]: A tick function with the id ${e.id} already exists in the stack! The newly added tick function will not be executed.`)})),this.tickFunctions.push(...e),this.removeTickDuplicates(),this.refreshTicks()}addToTickUnique(...e){e.forEach((e=>{this.removeFromTick(e.id)})),this.addToTick(...e)}removeFromTick(e){this.tickFunctions=this.tickFunctions.filter((t=>t.id!=e))}refreshTicks(){this.tickInstance&&(clearTick(this.tickInstance),this.tickInstance=null),this.tickFunctions.length>0&&(this.tickInstance=setTick((()=>{return e=this,t=void 0,n=function*(){if(!this.tickFunctions.length)return clearTick(this.tickInstance),void(this.tickInstance=null);this.tickFunctions.forEach((e=>{e.function()}))},new((i=void 0)||(i=Promise))((function(r,s){function o(e){try{a(n.next(e))}catch(e){s(e)}}function c(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,c)}a((n=n.apply(e,t||[])).next())}));var e,t,i,n})))}removeTickDuplicates(){this.tickFunctions=this.tickFunctions.filter((e=>this.tickFunctions.findIndex((t=>t.id==e.id))==this.tickFunctions.indexOf(e)))}assignBaseListeners(){onNet(`${GetCurrentResourceName()}:set-routing-bucket`,(e=>{this.routingBucket=e}))}setEntityRoutingBucket(e){TriggerServerEvent(`${GetCurrentResourceName()}:set-client-routing-bucket`,e),this.routingBucket=e}}{constructor(){super(),this._blips=[],this._markers=[],this._vehicles=[],this.assignDefaultEntityListeners()}get blips(){return this._blips}get markers(){return this._markers}get vehicles(){return this._vehicles}createBlips(e){const t=e.map((e=>Object.assign(Object.assign({},e),{instance:null})));this._blips.push(...t),this.refreshBlips()}clearBlips(){this._blips.forEach((e=>{RemoveBlip(e.instance)})),this._blips=[]}refreshBlips(){this.blips.forEach((e=>{e.instance||(e.instance=AddBlipForCoord(e.pos[0],e.pos[1],e.pos[2]),SetBlipSprite(e.instance,e.id),SetBlipDisplay(e.instance,4),SetBlipScale(e.instance,1),SetBlipColour(e.instance,e.color),SetBlipAsShortRange(e.instance,!0),BeginTextCommandSetBlipName("STRING"),AddTextComponentString(e.title),EndTextCommandSetBlipName(e.instance))}))}createMarkers(e){const t=e.map((e=>Object.assign(Object.assign({},e),{instance:null})));this._markers.push(...t),this.refreshMarkers()}clearMarkers(){this._markers=[],this.removeFromTick(`${GetCurrentResourceName()}_markers`)}refreshMarkers(){this.addToTickUnique({id:`${GetCurrentResourceName()}_markers`,function:()=>r(this,void 0,void 0,(function*(){const e=GetEntityCoords(GetPlayerPed(-1),!0);this._markers.forEach((i=>r(this,void 0,void 0,(function*(){var r,s,o;if(n(e[0],e[1],e[2],i.pos[0],i.pos[1],i.pos[2],i.renderDistance)){if(i.textureDict&&!HasStreamedTextureDictLoaded(i.textureDict))for(RequestStreamedTextureDict(i.textureDict,!0);!HasStreamedTextureDictLoaded(i.textureDict);)yield t(100);DrawMarker(i.marker,i.pos[0],i.pos[1],i.pos[2],0,0,0,(null===(r=i.rotation)||void 0===r?void 0:r[0])||0,(null===(s=i.rotation)||void 0===s?void 0:s[1])||0,(null===(o=i.rotation)||void 0===o?void 0:o[2])||0,i.scale,i.scale,i.scale,i.rgba[0],i.rgba[1],i.rgba[2],i.rgba[3],!1,!0,2,!1,i.textureDict||null,i.textureName||null,!1),i.underlyingCircle&&DrawMarker(i.underlyingCircle.marker,i.pos[0],i.pos[1],i.pos[2]-.9,0,0,0,0,0,0,i.underlyingCircle.scale,i.underlyingCircle.scale,i.underlyingCircle.scale,i.underlyingCircle.rgba[0]||i.rgba[0],i.underlyingCircle.rgba[1]||i.rgba[1],i.underlyingCircle.rgba[2]||i.rgba[2],i.underlyingCircle.rgba[3]||i.rgba[3],!1,!0,2,!1,null,null,!1)}}))))}))})}createVehicleAsync(e,i,n,s,o,c,a,u=!1){return r(this,void 0,void 0,(function*(){let r=0;for(RequestModel(e);!HasModelLoaded(e);){if(r>10)return 0;yield t(100),r++}const l=CreateVehicle(e,i,n,s,o,c,a);return l&&(a&&this._vehicles.push(l),u&&TaskWarpPedIntoVehicle(GetPlayerPed(-1),l,-1)),l}))}removeVehicle(e){DoesEntityExist(e)&&DeleteEntity(e),this._vehicles.indexOf(e)>-1&&this._vehicles.splice(this._vehicles.indexOf(e),1)}assignDefaultEntityListeners(){onNet("onResourceStop",(e=>{e===GetCurrentResourceName()&&(this._vehicles.forEach((e=>{this.removeVehicle(e)})),this._vehicles=[])}))}}{constructor(){super(...arguments),this._actionPoints=[]}get actionPoints(){return this._actionPoints}createActionPoints(...e){this._actionPoints.push(...e),this.refreshActionPoints()}clearActionPoints(){this._actionPoints=[],this.removeFromTick(`${GetCurrentResourceName()}_actionpoints`)}removeActionPoint(e){this._actionPoints=this._actionPoints.filter((t=>!(e.pos[0]===t.pos[0]&&e.pos[1]===t.pos[1]&&e.pos[2]===t.pos[2]))),this._actionPoints.length||this.clearActionPoints()}refreshActionPoints(){this.addToTickUnique({id:`${GetCurrentResourceName()}_actionpoints`,function:()=>{const e=GetEntityCoords(GetPlayerPed(-1),!0);let t=[];this._actionPoints.forEach((i=>{n(e[0],e[1],e[2],i.pos[0],i.pos[1],i.pos[2],1*(IsPedInAnyVehicle(GetPlayerPed(-1),!1)?4:1))&&(i.action(),i.once&&t.push(i))})),t.length>0&&(t.forEach((e=>{this._actionPoints.splice(this._actionPoints.indexOf(e),1)})),t=[])}})}}{getPlayerInfo(e){let t=GetConvar(`${i.g.GetPlayerServerId(i.g.PlayerId())}_PI_${e}`,"-1");return t.toString().includes(";ARM;,")&&(t=t.split(";ARM;,")),t}}{constructor(){super(),this.uiDisplay=!1,this.uiDisplayCooldownTimestamp=0,this.onIncomingUIMessageEvent=new e,this.addDefaultListeners()}isUIShowing(){return this.uiDisplay}isUIOnCooldown(){return Date.now()<this.uiDisplayCooldownTimestamp}showUI(){EnterCursorMode(),SetNuiFocus(!0,!0),SetNuiFocusKeepInput(!1),this.uiDisplay=!0,this.addToTickUnique({id:`${GetCurrentResourceName()}_UI`,function:()=>{DisableControlAction(0,1,this.uiDisplay),DisableControlAction(0,2,this.uiDisplay),DisableControlAction(0,142,this.uiDisplay),DisableControlAction(0,18,this.uiDisplay),DisableControlAction(0,322,this.uiDisplay),DisableControlAction(0,106,this.uiDisplay),this.uiDisplay||(this.removeFromTick(`${GetCurrentResourceName()}_UI`),SetNuiFocus(!1,!1))}})}hideUI(){this.uiDisplayCooldownTimestamp=Date.now()+3e3,LeaveCursorMode(),this.uiDisplay=!1,SendNuiMessage(JSON.stringify({type:"dismiss"}))}addUIListener(e){RegisterNuiCallbackType(e),on(`__cfx_nui:${e}`,((t,i)=>{this.onIncomingUIMessageEvent.emit(e,t),i("ok")})),this.onIncomingUIMessageEvent.on(e,(t=>{this.onIncomingUIMessage.call(this,e,t)}))}onIncomingUIMessage(e,t){}onForceShowUI(e){this.showUI()}onForceHideUI(){this.hideUI()}addDefaultListeners(){RegisterNuiCallbackType("dismiss"),on("__cfx_nui:dismiss",((e,t)=>{this.hideUI(),t("ok")})),onNet(`${GetCurrentResourceName()}:force-showui`,(e=>{this.onForceShowUI(e)}))}}{constructor(){super(),this.addControllerListeners()}onForceShowUI(e){super.onForceShowUI(e),this.updateUIData(e)}onForceHideUI(){super.onForceHideUI()}updateUIData(e){SendNuiMessage(JSON.stringify({type:"update",resource:GetCurrentResourceName(),firstSectionTitle:"House Information",secondSectionTitle:"Tenants",slots:Array(6).fill(0),stats:JSON.stringify(e.stats),items:JSON.stringify(e.items),menuCategory:"tenants",title:e.title,leftMenu:JSON.stringify(e.leftMenu),rightMenu:JSON.stringify(e.rightMenu)}))}addControllerListeners(){}}})()})();