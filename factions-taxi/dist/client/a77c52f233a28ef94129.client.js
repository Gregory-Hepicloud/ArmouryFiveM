(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();const t=e=>new Promise((t=>setTimeout(t,e))),i=(e,t,i,s,n,r,o)=>e>=s-o&&e<=s+o&&t>=n-o&&t<=n+o&&i>=r-o&&i<=r+o;var s=function(e,t,i,s){return new(i||(i=Promise))((function(n,r){function o(e){try{a(s.next(e))}catch(e){r(e)}}function c(e){try{a(s.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,c)}a((s=s.apply(e,t||[])).next())}))};new class extends class extends class extends class extends class extends class{constructor(){this.tickInstance=null,this.tickFunctions=[],this.routingBucket=0,this.assignBaseListeners()}addToTick(...e){e.forEach((e=>{-1!==this.tickFunctions.findIndex((t=>t.id===e.id))&&console.error(`[ClientBase]: A tick function with the id ${e.id} already exists in the stack! The newly added tick function will not be executed.`)})),this.tickFunctions.push(...e),this.removeTickDuplicates(),this.refreshTicks()}addToTickUnique(...e){e.forEach((e=>{this.removeFromTick(e.id)})),this.addToTick(...e)}removeFromTick(e){this.tickFunctions=this.tickFunctions.filter((t=>t.id!=e))}refreshTicks(){this.tickInstance&&(clearTick(this.tickInstance),this.tickInstance=null),this.tickFunctions.length>0&&(this.tickInstance=setTick((()=>{return e=this,t=void 0,s=function*(){if(!this.tickFunctions.length)return clearTick(this.tickInstance),void(this.tickInstance=null);this.tickFunctions.forEach((e=>{e.function()}))},new((i=void 0)||(i=Promise))((function(n,r){function o(e){try{a(s.next(e))}catch(e){r(e)}}function c(e){try{a(s.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,c)}a((s=s.apply(e,t||[])).next())}));var e,t,i,s})))}removeTickDuplicates(){this.tickFunctions=this.tickFunctions.filter((e=>this.tickFunctions.findIndex((t=>t.id==e.id))==this.tickFunctions.indexOf(e)))}assignBaseListeners(){onNet(`${GetCurrentResourceName()}:set-routing-bucket`,(e=>{this.routingBucket=e}))}setEntityRoutingBucket(e){TriggerServerEvent(`${GetCurrentResourceName()}:set-client-routing-bucket`,e),this.routingBucket=e}}{constructor(){super(),this._blips=[],this._markers=[],this._vehicles=[],this._peds=[],this.assignDefaultEntityListeners()}get blips(){return this._blips}get markers(){return this._markers}get vehicles(){return this._vehicles}get peds(){return this._peds}createBlips(e){const t=e.map((e=>Object.assign(Object.assign({},e),{instance:null})));this._blips.push(...t),this.refreshBlips()}clearBlips(){this._blips.forEach((e=>{RemoveBlip(e.instance)})),this._blips=[]}refreshBlips(){this.blips.forEach((e=>{e.instance||(e.instance=AddBlipForCoord(e.pos[0],e.pos[1],e.pos[2]),SetBlipSprite(e.instance,e.id),SetBlipDisplay(e.instance,4),SetBlipScale(e.instance,1),SetBlipColour(e.instance,e.color),SetBlipAsShortRange(e.instance,!0),BeginTextCommandSetBlipName("STRING"),AddTextComponentString(e.title),EndTextCommandSetBlipName(e.instance))}))}createMarkers(e){const t=e.map((e=>Object.assign(Object.assign({},e),{instance:null})));this._markers.push(...t),this.refreshMarkers()}clearMarkers(){this._markers=[],this.removeFromTick(`${GetCurrentResourceName()}_markers`)}refreshMarkers(){this.addToTickUnique({id:`${GetCurrentResourceName()}_markers`,function:()=>s(this,void 0,void 0,(function*(){const e=GetEntityCoords(GetPlayerPed(-1),!0);this._markers.forEach((n=>s(this,void 0,void 0,(function*(){var s,r,o;if(i(e[0],e[1],e[2],n.pos[0],n.pos[1],n.pos[2],n.renderDistance)){if(n.textureDict&&!HasStreamedTextureDictLoaded(n.textureDict))for(RequestStreamedTextureDict(n.textureDict,!0);!HasStreamedTextureDictLoaded(n.textureDict);)yield t(100);DrawMarker(n.marker,n.pos[0],n.pos[1],n.pos[2],0,0,0,(null===(s=n.rotation)||void 0===s?void 0:s[0])||0,(null===(r=n.rotation)||void 0===r?void 0:r[1])||0,(null===(o=n.rotation)||void 0===o?void 0:o[2])||0,n.scale,n.scale,n.scale,n.rgba[0],n.rgba[1],n.rgba[2],n.rgba[3],!1,!0,2,!1,n.textureDict||null,n.textureName||null,!1),n.underlyingCircle&&DrawMarker(n.underlyingCircle.marker,n.pos[0],n.pos[1],n.pos[2]-.9,0,0,0,0,0,0,n.underlyingCircle.scale,n.underlyingCircle.scale,n.underlyingCircle.scale,n.underlyingCircle.rgba[0]||n.rgba[0],n.underlyingCircle.rgba[1]||n.rgba[1],n.underlyingCircle.rgba[2]||n.rgba[2],n.underlyingCircle.rgba[3]||n.rgba[3],!1,!0,2,!1,null,null,!1)}}))))}))})}createVehicleAsync(e,i,n,r,o,c,a,l=!1){return s(this,void 0,void 0,(function*(){let s=0;for(RequestModel(e);!HasModelLoaded(e);){if(s>10)return 0;yield t(100),s++}const h=CreateVehicle(e,i,n,r,o,c,a);return h&&(a&&this._vehicles.push(h),l&&TaskWarpPedIntoVehicle(GetPlayerPed(-1),h,-1)),h}))}removeVehicle(e){DoesEntityExist(e)&&DeleteEntity(e),this._vehicles.indexOf(e)>-1&&this._vehicles.splice(this._vehicles.indexOf(e),1)}removePed(e){DoesEntityExist(e)&&DeleteEntity(e),this._peds.indexOf(e)>-1&&this._peds.splice(this._peds.indexOf(e),1)}createPedInsideVehicleAsync(e,i,n,r,o,c){return s(this,void 0,void 0,(function*(){let s=0;for(RequestModel(n);!HasModelLoaded(n);){if(s>10)return 0;yield t(100),s++}const a=CreatePedInsideVehicle(e,i,n,r,o,c);return a&&this._peds.push(a),a}))}assignDefaultEntityListeners(){onNet("onResourceStop",(e=>{e===GetCurrentResourceName()&&(this._vehicles.forEach((e=>{this.removeVehicle(e)})),this._peds.forEach((e=>{this.removePed(e)})),this._vehicles=[],this._peds=[])}))}}{constructor(){super(...arguments),this._actionPoints=[]}get actionPoints(){return this._actionPoints}createActionPoints(...e){this._actionPoints.push(...e),this.refreshActionPoints()}clearActionPoints(){this._actionPoints=[],this.removeFromTick(`${GetCurrentResourceName()}_actionpoints`)}removeActionPoint(e){this._actionPoints=this._actionPoints.filter((t=>!(e.pos[0]===t.pos[0]&&e.pos[1]===t.pos[1]&&e.pos[2]===t.pos[2]))),this._actionPoints.length||this.clearActionPoints()}refreshActionPoints(){this.addToTickUnique({id:`${GetCurrentResourceName()}_actionpoints`,function:()=>{const e=GetEntityCoords(GetPlayerPed(-1),!0);let t=[];this._actionPoints.forEach((s=>{i(e[0],e[1],e[2],s.pos[0],s.pos[1],s.pos[2],1*(IsPedInAnyVehicle(GetPlayerPed(-1),!1)?4:1))&&(s.action(),s.once&&t.push(s))})),t.length>0&&(t.forEach((e=>{this._actionPoints.splice(this._actionPoints.indexOf(e),1)})),t=[])}})}}{constructor(){super(...arguments),this.timeBetweenFeeds=8e3}addToFeed(...e){e.forEach(((e,t)=>{setTimeout((()=>{BeginTextCommandThefeedPost("STRING"),AddTextComponentSubstringPlayerName(e),EndTextCommandThefeedPostTicker(!1,!0)}),t*this.timeBetweenFeeds)}))}}{getPlayerInfo(t){let i=GetConvar(`${e.g.GetPlayerServerId(e.g.PlayerId())}_PI_${t}`,"-1");return i.toString().includes(";ARM;,")&&(i=i.split(";ARM;,")),i}}{constructor(){super(),this.setupNPCBehaviour()}spawnTaxiNPC(){const e=GetEntityCoords(GetPlayerPed(-1)),t=GetClosestVehicleNode(e[0]+100*Math.pow(-1,Math.floor(3*Math.random())),e[1]+100*Math.pow(-1,Math.floor(3*Math.random())),e[2],0,100,2.5),s=-956048545;this.createVehicleAsync(s,t[1][0],t[1][1],t[1][2],0,!0,!0,!1).then((t=>{this.createPedInsideVehicleAsync(t,26,GetHashKey("cs_movpremmale"),-1,!0,!0).then((n=>{TaskVehicleDriveToCoord(n,t,e[0],e[1],e[2],15,1,s,5,5,1),SetEntityInvincible(n,!0),SetEntityAsMissionEntity(n,!0,!0),SetPedRelationshipGroupHash(n,this.relationshipGroup),SetVehicleDoorsLocked(t,0);const r=AddBlipForEntity(n);SetBlipAsFriendly(r,!0),SetBlipSprite(r,198),SetBlipColour(r,5),AddTextEntry("TAXIBLIP","Your taxi driver"),BeginTextCommandSetBlipName("TAXIBLIP"),AddTextComponentSubstringPlayerName("me"),EndTextCommandSetBlipName(r),this.addToTickUnique({id:`${GetCurrentResourceName()}_taxitransport`,function:()=>{const e=GetEntityCoords(GetPlayerPed(-1)),r=GetEntityCoords(n);i(e[0],e[1],e[2],r[0],r[1],r[2],6)?(DisableControlAction(0,23,!0),IsDisabledControlJustPressed(0,23)&&(TaskVehicleDriveToCoord(n,t,165.74505615234375,-1557.2967529296875,29.24609375,30,1,s,5,5,1),TaskWarpPedIntoVehicle(GetPlayerPed(-1),t,0),this.removeFromTick(`${GetCurrentResourceName()}_taxitransport`))):DisableControlAction(0,23,!1)}})}))}))}setupNPCBehaviour(){this.relationshipGroup=AddRelationshipGroup("taxi_driver")[1],SetRelationshipBetweenGroups(0,this.relationshipGroup,GetHashKey("PLAYER")),SetRelationshipBetweenGroups(0,GetHashKey("PLAYER"),this.relationshipGroup)}}})();