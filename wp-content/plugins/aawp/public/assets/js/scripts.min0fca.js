!function(a){var b=!1;if("function"==typeof define&&define.amd&&(define(a),b=!0),"object"==typeof exports&&(module.exports=a(),b=!0),!b){var c=window.Cookies,d=window.Cookies=a();d.noConflict=function(){return window.Cookies=c,d}}}(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var c=arguments[a];for(var d in c)b[d]=c[d]}return b}function b(c){function d(b,e,f){var g;if("undefined"!=typeof document){if(arguments.length>1){if(f=a({path:"/"},d.defaults,f),"number"==typeof f.expires){var h=new Date;h.setMilliseconds(h.getMilliseconds()+864e5*f.expires),f.expires=h}f.expires=f.expires?f.expires.toUTCString():"";try{g=JSON.stringify(e),/^[\{\[]/.test(g)&&(e=g)}catch(i){}e=c.write?c.write(e,b):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),b=encodeURIComponent(String(b)),b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),b=b.replace(/[\(\)]/g,escape);var j="";for(var k in f)f[k]&&(j+="; "+k,f[k]!==!0&&(j+="="+f[k]));return document.cookie=b+"="+e+j}b||(g={});for(var l=document.cookie?document.cookie.split("; "):[],m=/(%[0-9A-Z]{2})+/g,n=0;n<l.length;n++){var o=l[n].split("="),p=o.slice(1).join("=");'"'===p.charAt(0)&&(p=p.slice(1,-1));try{var q=o[0].replace(m,decodeURIComponent);if(p=c.read?c.read(p,q):c(p,q)||p.replace(m,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(i){}if(b===q){g=p;break}b||(g[q]=p)}catch(i){}}return g}}return d.set=d,d.get=function(a){return d.call(d,a)},d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,"",a(c,{expires:-1}))},d.withConverter=b,d}return b(function(){})}),jQuery(document).ready(function(a){}),jQuery(document).ready(function(a){a('[data-aawp-click-tracking="true"] a, a[data-aawp-click-tracking="true"]').on("click",function(b){var c=a(this);if("undefined"==typeof c.data("aawp-prevent-click-tracking")){var d=a(this).attr("data-aawp-click-tracking")?a(this):a(this).closest('[data-aawp-click-tracking="true"]'),e=!1;if("undefined"!=typeof d.data("aawp-product-id")&&(e=d.data("aawp-product-id")),"undefined"!=typeof d.data("aawp-product-title")&&(e=d.data("aawp-product-title")),e){var f="amazon-link",g="click";"function"==typeof gtag?gtag("event",g,{event_category:f,event_label:e}):"undefined"!=typeof ga?ga("send","event",f,g,e):"undefined"!=typeof _gaq?_gaq.push(["_trackEvent",f,g,e]):"undefined"!=typeof __gaTracker?__gaTracker("send","event",f,g,e):"undefined"!=typeof _paq?_paq.push(["trackEvent",f,g,e]):"undefined"!=typeof dataLayer&&dataLayer.push({event:"amazon-affiliate-link-click",category:f,action:g,label:e})}}})}),jQuery(document).ready(function(a){function b(){x=x.toLowerCase(),s.hasOwnProperty(x)&&(w=s[x],w===v&&p===!1||t.hasOwnProperty(w)&&(y=t[w],g(v,w,y)))}function c(){"geoip-db"===q?d():"ipinfo"===q?e():"dbip"===q?f():d()}function d(){var a="https://geolocation-db.com/jsonp/";o&&(a="https://geolocation-db.com/jsonp/"+o),jQuery.ajax({url:a,jsonpCallback:"callback",dataType:"jsonp",success:function(a){"undefined"!=typeof a.IPv4&&"undefined"!=typeof a.country_code&&(x=a.country_code,l(x)),b()}})}function e(){var a="https://ipinfo.io/json/";o&&(a="https://ipinfo.io/"+o+"/json/"),jQuery.ajax({url:a,jsonpCallback:"callback",dataType:"jsonp",success:function(a){"undefined"!=typeof a.ip&&"undefined"!=typeof a.country&&(x=a.country,l(x)),b()}})}function f(){var a="https://api.db-ip.com/v2/free/self/";o&&(a="https://api.db-ip.com/v2/free/"+o+"/"),jQuery.ajax({url:a,dataType:"json",crossDomain:!0,success:function(a){"undefined"!=typeof a.ipAddress&&"undefined"!=typeof a.countryCode&&(x=a.countryCode,l(x)),b()}})}function g(b,c,d){null!==d&&a("a[href*='/amazon'], a[href*='/www.amazon'], a[href*='/amzn'], a[href*='/www.amzn']").each(function(e){var f=a(this).data("aawp-geotargeting");if(!f){var g=a(this).closest("*[data-aawp-product-id]").data("aawp-geotargeting");if(!g)return}var k=a(this).attr("href");"asin"===u||k.indexOf("prime")!=-1?k=i(k,b,c):"title"===u&&(k=h(a(this),k,b,c)),void 0!==k&&(k=j(k,"tag",d),a(this).attr("href",k))})}function h(b,c,d,e){var f=b.data("aawp-product-title");return f||(f=b.parents().filter(function(){return a(this).data("aawp-product-title")}).eq(0).data("aawp-product-title")),f&&(f=k(f,5),c="https://www.amazon."+e+"/s/?field-keywords="+encodeURIComponent(f)),c}function i(a,b,c){var d=!1,e=!1;if(a.indexOf("amzn."+v)!=-1&&(d=!0),a.indexOf("amazon."+v)!=-1&&(e=!0),(d||e)&&a.indexOf("tag=")!=-1)return a="com"==b&&d?a.replace("amzn."+b,"amazon."+c+"/dp"):"com"==c?a.replace("amazon."+b,"amzn."+c):a.replace("amazon."+b,"amazon."+c)}function j(a,b,c){null==c&&(c="");var d=new RegExp("\\b("+b+"=).*?(&|$)");return a.search(d)>=0?a.replace(d,"$1"+c+"$2"):a+(a.indexOf("?")>0?"&":"?")+b+"="+c}function k(a,b){return a.split(/\s+/).slice(0,b).join(" ")}function l(a){p||a&&z.set("aawp-geotargeting",a)}function m(){var a={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(b,c,d){a[c]=void 0!==d?d:""}),!!a.aawp_debug_geotargeting}function n(){var a={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,function(b,c,d){a[c]=void 0!==d?d:""}),a.aawp_debug_geotargeting_ip?a.aawp_debug_geotargeting_ip:""}if("undefined"!=typeof aawp_geotargeting_settings&&"undefined"!=typeof aawp_geotargeting_localized_stores&&"undefined"!=typeof aawp_geotargeting_tracking_ids){var o=n(),p=m(),q="undefined"!=typeof aawp_geotargeting_api?aawp_geotargeting_api:"",r=aawp_geotargeting_settings,s=aawp_geotargeting_localized_stores,t=aawp_geotargeting_tracking_ids;if(!r.hasOwnProperty("store"))return;var u=r.hasOwnProperty("mode")?r.mode:"mode",v=r.store,w="",x="",y="",z=Cookies.noConflict(),A=z.get("aawp-geotargeting");void 0!==A&&p===!1?(x=A,b()):c()}});