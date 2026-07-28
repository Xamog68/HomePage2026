var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function(){var i=function(d){var c=[],g;for(g in d)c.push(g+"="+d[g]);return c.join("\n")};var j=function(d){for(var c,g=d.origin,b=d.data.split("\n"),e={},a=0;a<b.length;a++){var f=b[a].indexOf("=");-1!=f&&(e[b[a].substr(0,f)]=b[a].substr(f+1))}if("google_loc_request"==e[0]){b={};b[1]=e[1];b[2]=2;for(var a=window,e=0,f=a,h=0;a!=a.parent;){a=a.parent;h++;try{c=!!a.location.href||""===a.location.href}catch(k){c=!1}c&&(f=a,e=h)}c=f;b[3]=c.location.href;b[4]=c.document.referrer;b[5]=e;d.source.postMessage(i(b),g)}};
window.addEventListener?window.addEventListener("message",j,!1):window.attachEvent&&window.attachEvent("onmessage",j);})();

}

/*
     FILE ARCHIVED ON 20:43:09 Jan 30, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:08:17 Jul 28, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.512
  load_resource: 97.474
  PetaboxLoader3.resolve: 56.783
  PetaboxLoader3.datanode: 11.151
*/