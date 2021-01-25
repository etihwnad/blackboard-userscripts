// ==UserScript==
// @name         Blackboard: shrink vertical top space
// @namespace    http://www.whiteaudio.com/
// @downloadURL  https://github.com/etihwnad/blackboard-userscripts/raw/master/blackboard-shrink-vertical-space.user.js
// @version      0.8
// @description  Remove the top banner and shrink vertical blank space
// @author       You
// @match        https://blackboard.valpo.edu/webapps/*
// @grant        GM_addStyle
// ==/UserScript==

// remove Valpo image
GM_addStyle("div.brandingImgWrap { display: none !important; }");

// padding was: 0px 28px, pad so it sits to the left of the "global-nav-link"
GM_addStyle("div.tabWrapper-right { padding:0px 200px; }");

// padding was: 10px 1.2cm 19px
GM_addStyle(".appTabs a{ padding:0px 10px 10px 10px; }");

// height was: 89px, change -64
GM_addStyle("#navFrame { height:25px !important; }");

// padding was: 12px 9px 12px 18px
GM_addStyle("#breadcrumbs { padding-top:0px; padding-bottom:0px; }");

// padding was: 20px 20px
GM_addStyle("#pageTitleDiv { padding-top:2px; padding-bottom:2px; }");

GM_addStyle(".mainButton a{ padding-top:2px; padding-bottom:2px; }");
GM_addStyle(".mainButton h2 a{ padding-top:2px; padding-bottom:2px; }");
GM_addStyle(".secondaryButton a{ padding-top:2px; padding-bottom:2px; }");
GM_addStyle(".secondaryButton h2 a{ padding-top:2px; padding-bottom:2px; }");

// move quicklinks to top
GM_addStyle("#quick_links_wrap { top: 0px; }");


// gradebook cells
GM_addStyle(".gbtable tbody tr td, .gbtable tbody tr th, .gbtable_header th, .gbtable thead th { padding:0px !important; }");

// group listing cells
GM_addStyle(".inventory tbody tr td, .inventory tbody tr th, .inventory thead th { padding:0px !important; }");

// adjust contentFrame height by net change to navFrame from above
// TODO: how to calculate this number on the fly??
var frame = document.getElementById("contentFrame");
if (frame && "offsetHeight" in frame) {
    var newHeight = frame.offsetHeight + 60;
    frame.style.height = newHeight + 'px';
}

