!function(){function e(e){for(var t=document.getElementById(e),s=e+"-expended",n=document.getElementById(e+"_littleImage").children,a=0;a<n.length;a++)n[a].onclick=function(){var e=document.getElementsByClassName(s)[0];if(0<this.className.indexOf(s))return!1;t.src=this.src,e.classList.remove(s),e.removeAttribute("class"),this.classList.add(s)}}document.getElementById("stussy_littleImage")&&(e("stussy"),e("bicycle")),document.getElementById("waxom_littleImage")&&(e("waxom"),e("mairala"),e("noemi"),e("thisSite")),document.getElementById("fashionerMainPage_littleImage")&&(e("fashionerMainPage"),e("fashionerOneItem"),e("fashionerCart"),e("fashionerPP"),e("fashionerOrders"),e("fashionerQR")),document.getElementById("landingsOperators_littleImage")&&(e("landingsOperators"),e("landingsBYMTC"),e("landingsGeoline"),e("landingsSerious"))}();for(var btn=document.getElementsByClassName("projects_typeItem"),q=0;q<btn.length;q++)btn[q].onclick=function(){filterSelection(this.id.split("_")[1]);var e=document.getElementsByClassName("projects_typeItemActive");e[0].className=e[0].className.replace(" projects_typeItemActive",""),this.className+=" projects_typeItemActive"};function filterSelection(e){var t,s;for(t=document.getElementsByClassName("projects_onePostHolder"),"All"==e&&(e=""),s=0;s<t.length;s++)w3RemoveClass(t[s],"showProject"),-1<t[s].className.indexOf(e)&&w3AddClass(t[s],"showProject")}function w3AddClass(e,t){var s,n,a;for(n=e.className.split(" "),a=t.split(" "),s=0;s<a.length;s++)-1==n.indexOf(a[s])&&(e.className+=" "+a[s])}function w3RemoveClass(e,t){var s,n,a;for(n=e.className.split(" "),a=t.split(" "),s=0;s<a.length;s++)for(;-1<n.indexOf(a[s]);)n.splice(n.indexOf(a[s]),1);e.className=n.join(" ")}filterSelection("All"),function(){"use strict";var n,a=document.getElementsByClassName("mainScreen_arrow")[0],l=document.documentElement.clientHeight;a&&a.addEventListener("click",function e(){a.style.opacity=".6";var t=Math.max(window.pageYOffset);var s=Math.round(-2*(t-l)/25);if(0==s)return clearTimeout(n),!1;{if(!(t<=l&&1.1*l<document.body.scrollHeight))return clearTimeout(n),!1;window.scrollBy(0,s+100),n=setTimeout(e,10)}})}();