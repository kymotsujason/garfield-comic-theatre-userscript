// ==UserScript==
// @name          Garfield Comic Theatre mode
// @namespace     https://github.com/kymotsujason/garfield-comic-theatre-userscript
// @description	  Remove everything except comic strip + black background, super messy code though
// @author        kymotsujason
// @homepage      https://github.com/kymotsujason/garfield-comic-theatre-userscript
// @include       http://garfield.com/comic/*
// @include       https://garfield.com/comic/*
// @include       http://*.garfield.com/comic/*
// @include       https://*.garfield.com/comic/*
// @version       1.0
// ==/UserScript==
(function() {var css = [
    " body {",
	"  background-color: #000!important",
	"}",
	" .container-main {",
	"  width: 100%!important;",
	"  height: auto!important;",
	"  max-height: 100vh;",
	"  max-width: 100%;",
	"  left: 0!important;",
	"  background-color: #000!important",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		document.documentElement.appendChild(node);
	}
}
})();
$(".img-responsive").css('width', $(window).width());
$(".banner").remove();
$(".ad-tower-right").remove();
$(".push").remove();
$(".text-right").remove();
$("#pgf-logo").remove();
$(".header").remove();
$(".ticker").remove();
$(".breadcrumb").remove();
$(".padding-bottom-30").remove();
$(".clearfix").remove();
$(".footer").remove();