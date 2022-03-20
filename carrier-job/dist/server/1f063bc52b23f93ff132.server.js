(()=>{"use strict";const e=(e,t,s,r,o,i,a)=>e>=r-a&&e<=r+a&&t>=o-a&&t<=o+a&&s>=i-a&&s<=i+a,t=[-522.5355,-2866.82,4.00038];new class extends class extends class extends class{constructor(){this.routingBucketCondition=(e,t)=>!0,this.assignServerBaseListeners()}RegisterAdminCommand(e,t,s,r){RegisterCommand(e,((e,r,o)=>{Number(global.exports.authentication.getPlayerInfo(e,"adminLevel"))<t||s(e,r,o)}),r)}assignServerBaseListeners(){onNet(`${GetCurrentResourceName()}:set-client-routing-bucket`,((e,t)=>{this.routingBucketCondition(e,t)&&SetEntityRoutingBucket(e,t)}))}}{removeClientsideVehicles(){TriggerClientEvent(`${GetCurrentResourceName()}:ARM_remove-vehicles`,-1)}}{}{constructor(){super(),this.carriers=new Map,this.savedPositions=new Map,this.assignEvents()}beginRouteForPlayer(t,s){const r=GetEntityCoords(GetPlayerPed(t),!0);let o;if(Array.from(this.savedPositions.keys()).forEach((t=>{e(r[0],r[1],r[2],t[0],t[1],t[2],15)&&(o=this.savedPositions.get(t).pos)})),!o){const e=this.getPossibleDeliveryPoints(r,15);o=e[Math.floor(Math.random()*e.length)].pos,this.savedPositions.set(r,{pos:o})}this.updatePackageUI(),TriggerClientEvent(`${GetCurrentResourceName()}:begin-route`,source,{X:o[0],Y:o[1],Z:o[2]-1},s),setTimeout((()=>{this.savedPositions.delete(r)}),1e4)}updatePackageUI(e=!0){this.carriers.has(source)&&(e?global.exports["armoury-overlay"].setMessage(source,{id:"carrier-packages",content:0===this.carriers.get(source)?"You have no packages left. Pick some up from the docks.":`You have ${this.carriers.get(source)}/15 packages left.`}):global.exports["armoury-overlay"].deleteMessage(source,{id:"carrier-packages"}))}getPossibleDeliveryPoints(t,s){const r=global.exports.businesses.getEntities().filter((e=>0!==e.depositX&&0!==e.depositY)).map((e=>({pos:[e.depositX,e.depositY,e.depositZ]})));return t&&s?r.filter((r=>!e(t[0],t[1],t[2],r.pos[0],r.pos[1],r.pos[2],s))):r}assignEvents(){onNet(`${GetCurrentResourceName()}:playerDropped`,(()=>{this.carriers.has(source)&&this.carriers.delete(source)})),onNet("baseevents:leftVehicle",(()=>{this.updatePackageUI(!1)})),onNet("baseevents:enteredVehicle",(()=>{GetEntityModel(GetVehiclePedIsIn(GetPlayerPed(source),!1))===GetHashKey("Mule")&&this.updatePackageUI()})),onNet(`${GetCurrentResourceName()}:quick-start`,((e=!1)=>{this.carriers.set(source,15),this.beginRouteForPlayer(source,!e)})),onNet(`${GetCurrentResourceName()}:get-job`,(()=>{global.exports.authentication.setPlayerInfo(source,"job","carrier",!1),TriggerClientEvent("carrier-job:job-assigned",source)})),onNet(`${GetCurrentResourceName()}:route-finished`,(()=>{const t=GetEntityCoords(GetPlayerPed(source),!0);this.getPossibleDeliveryPoints().forEach((s=>{if(e(t[0],t[1],t[2],s.pos[0],s.pos[1],s.pos[2],10)&&GetEntityModel(GetVehiclePedIsIn(GetPlayerPed(source),!1))===GetHashKey("Mule"))return exports.authentication.setPlayerInfo(source,"cash",Number(exports.authentication.getPlayerInfo(source,"cash"))+(1e3+Math.floor(1e3*Math.random())),!1),global.exports.skills.incrementPlayerSkill(source,"carrier",.01),this.carriers.set(source,this.carriers.get(source)-1),void(0===this.carriers.get(source)?this.triggerPickup(source):this.beginRouteForPlayer(source,!1))}))}))}triggerPickup(e){this.updatePackageUI(),TriggerClientEvent(`${GetCurrentResourceName()}:pickup-route`,e,{X:t[0],Y:t[1],Z:t[2]})}}})();