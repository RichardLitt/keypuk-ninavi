// Valyrian Facebook v 9000
// Compiled by Rhaegar Littauer | @LearnValyrian
// Translated by @LearnValyrian
// No (c) on anything, whatsoever.
// https://github.com/RichardLitt/keypuk-ninavi
//
// Based on:
// Secwepemc Facebook!
// version 0.1 BETA!
// 2010-08-25
// Copyright (c) 2010, Neskie Manuel
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey 0.3 or later: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Dothraki Facebook", and click Uninstall.
//
// To install on Chrome, just drag it into a window. It'll work.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Valyrian Facebook
// @namespace     https://github.com/RichardLitt/keypuk-ninavi
// @description   script to change the Facebook
// @include       http://www.facebook.com/*
// @include       https://www.facebook.com/*
// ==/UserScript==


// Array of words to change.
// Section: Unsorted
var es = new Array();
es["English (US)"] = "Valyrian";
es["English (UK)"] = "Valyrian";
es["Like"] = "Valar morghulis";
es["Comment"] = "Valar dohaeris";
es["Unlike"] = "Valar dohaeris";
es["dragonfire"] = "dracarys";
es["Brother"] = "Valonqar";
es["wise"] = "maegi";

//Basic Tag altering.
function translate_tag(tag) {
	var fbelem = document.getElementsByTagName(tag);
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}
}

//Basic Tag altering.
function translate_class(classname) {
	var fbelem = document.getElementsByClassName(classname);

	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}
}

function loadSecwepemc() {
	translate_tag('a');
	translate_tag('th');
	translate_tag('td');
	translate_tag('span');
	translate_tag('h3');
	translate_tag('dt');

	translate_class('ego_social_context');

	var fbelem = document.getElementsByTagName('input');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.getAttribute('placeholder') in es) {
		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
	    }
	    if (thisElem.getAttribute('value') in es) {
		thisElem.setAttribute('value',es[thisElem.getAttribute('value')]);
	    }
	}

	var fbelem = document.getElementsByTagName('textarea');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.getAttribute('placeholder') in es) {
		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
	    }
	    if (thisElem.getAttribute('title') in es) {
		thisElem.setAttribute('title',es[thisElem.getAttribute('title')]);
	    }
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}

//	var fbelem = document.getElementsByClassName('UIImageBlock_Content UIImageBlock_ICON_Content');
//	for (var i = 0; i < fbelem.length; i++) {
//	    var thisElem = fbelem[i];
//	    //finds if one person likes this.
//	    if (thisElem.textContent.match('likes this.')){
//		icon = thisElem.childNodes[0]
//		link = thisElem.childNodes[1]
//		link.textContent = link.textContent.replace('likes this.', 'r xwexwistes.');
//		thisElem.textContent = '';
//		thisElem.appendChild(icon);
//		thisElem.appendChild(link);
//	    }
//	    if (thisElem.textContent.match('like this.')){
//		icon = thisElem.childNodes[0]
//		link = thisElem.childNodes[1]
//		link.textContent = link.textContent.replace('like this.', 'r xwexwistep.');
//		thisElem.textContent = '';
//		thisElem.appendChild(icon);
//		thisElem.appendChild(link);
//	    }
//	}

	var fbelem = document.getElementsByTagName('h2');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		icon = thisElem.childNodes[0]
		thisElem.textContent = es[thisElem.textContent];
		thisElem.appendChild(icon);
	    }
	}
}

loadSecwepemc();

function changedNode(e) {
	translate_tag('a');
	translate_tag('th');
	translate_tag('td');
	translate_tag('span');
	translate_tag('h3');
	translate_tag('dt');

	translate_class('ego_social_context');

	var fbelem = e.target.getElementsByTagName('input');
	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.getAttribute('placeholder') in es) {
		    		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
		    	    }
		    if (thisElem.getAttribute('value') in es) {
		    		thisElem.setAttribute('value',es[thisElem.getAttribute('value')]);
		    	    }
		}
	var fbelem = e.target.getElementsByTagName('textarea');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.getAttribute('placeholder') in es) {
		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
	    }
	    if (thisElem.getAttribute('title') in es) {
		thisElem.setAttribute('title',es[thisElem.getAttribute('title')]);
	    }
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}

//	var fbelem = e.target.getElementsByClassName('UIImageBlock_Content UIImageBlock_ICON_Content');
//	for (var i = 0; i < fbelem.length; i++) {
//	    var thisElem = fbelem[i];
//	    //finds if one person likes this.
//	    if (thisElem.textContent.match('likes this.')){
//		icon = thisElem.childNodes[0]
//		link = thisElem.childNodes[1]
//		link.textContent = link.textContent.replace('likes this.', 'r xwexwistes.');
//		thisElem.textContent = '';
//		thisElem.appendChild(icon);
//		thisElem.appendChild(link);
// 	    }
//	    if (thisElem.textContent.match('like this.')){
//		    cnodes = thisElem.childNodes;
//		    for (var j = 0; j < cnodes.length; j++){
//			    cnode = cnodes[j];
//			    thisElem.appendChild(cnode);
//		    }
//	    }
//	}

	var fbelem = e.target.getElementsByTagName('h2');
	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.textContent in es) {
		    		icon = thisElem.childNodes[0]
		    		thisElem.textContent = es[thisElem.textContent];
		    		thisElem.appendChild(icon);
		    	    }
		}
}

document.addEventListener('DOMNodeInserted', changedNode, false);


