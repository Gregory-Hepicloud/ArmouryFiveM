(()=>{"use strict";let e;onNet("armoury-overlay:update-item",(e=>{var t;SendNuiMessage(JSON.stringify({type:"update",stat:e.id,icon:e.icon,value:null===(t=e.value)||void 0===t?void 0:t.toString(),redIgnored:e.redIgnored||!1}))})),onNet("armoury-overlay:set-message",(t=>{SendNuiMessage(JSON.stringify({type:"addmessage",message:JSON.stringify({id:t.id,content:t.content})})),t.removeAfter&&(null!=e&&clearTimeout(e),e=setTimeout((()=>{emit("armoury-overlay:delete-message",{id:t.id}),e&&(e=null)}),t.removeAfter))})),onNet("armoury-overlay:delete-message",(e=>{SendNuiMessage(JSON.stringify({type:"removemessage",message:JSON.stringify({id:e.id})}))})),onNet(`${GetCurrentResourceName()}:show-money-overlay`,(e=>{SendNuiMessage(JSON.stringify({type:"moneygain",gain:e}))})),onNet(`${GetCurrentResourceName()}:show-context-menu`,(e=>{SetNuiFocus(!0,!1),SetNuiFocusKeepInput(!0),SendNuiMessage(JSON.stringify({type:"showcontextmenu",menu:JSON.stringify(e)}))})),onNet(`${GetCurrentResourceName()}:hide-context-menu`,(()=>{SetNuiFocus(!1,!1),SetNuiFocusKeepInput(!1),SendNuiMessage(JSON.stringify({type:"hidecontextmenu"}))})),RegisterNuiCallbackType("context-menu-item-pressed"),on("__cfx_nui:context-menu-item-pressed",((e,t)=>{emit(`${GetCurrentResourceName()}:context-menu-item-pressed`,e),t("ok")})),RegisterNuiCallbackType("hide-context-menu"),on("__cfx_nui:hide-context-menu",((e,t)=>{emit(`${GetCurrentResourceName()}:hide-context-menu`),emit(`${GetCurrentResourceName()}:context-menu-hidden`),t("ok")}))})();