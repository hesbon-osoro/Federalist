"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Hesbon Osoro
   Date: 12/10/22   

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

/* Event Listener */

window.addEventListener("load", findKeyWords);
window.addEventListener("load", makeKeyStyles);

/* Supplied Functions */

function findKeyWords() {
  var aside = document.createElement("aside");
  aside.setAttribute("id", "keywords");
  var h1 = document.createElement("h1");
  h1.textContent = "Keyword List";
  aside.appendChild(h1);
  var ol = document.createElement("ol");
  aside.appendChild(ol);
  var keyWordElems = document.querySelectorAll("dfn");
  var keyWords = new Array(keyWordElems.length);
  for (var i = 0; i < keyWordElems.length; i++) {
    keyWords[i] = keyWordElems[i].textContent;
    var linkID = replaceWS(keyWords[i]);
    keyWordElems[i].setAttribute("id", "keyword_" + linkID);
  }
  keyWords.sort();
  for (var i = 0; i < keyWords.length; i++) {
    var keyWordListItem = document.createElement("li");
    var keyWordLink = document.createElement("a");
    keyWordLink.innerHTML = keyWords[i];
    var linkID = replaceWS(keyWords[i]);
    keyWordLink.setAttribute("href", "#keyword_" + linkID);
    keyWordListItem.appendChild(keyWordLink);
    ol.appendChild(keyWordListItem);
  }
  document
    .getElementById("doc")
    .insertBefore(aside, document.getElementById("doc").firstChild);
}

function makeKeyStyles() {
  var styleSheet = document.createElement("style");
  document.head.appendChild(styleSheet);
  styleSheet.sheet.insertRule(
    "aside#keywords {border: 3px solid rgb(101, 101, 101); float: right; margin: 20px 0px 20px 20px; padding: 10px; width: 320px;}",
    0
  );
  styleSheet.sheet.insertRule(
    "aside#keywords h1 {font-size: 2em; margin: 5px; text-align: center;}",
    1
  );
  styleSheet.sheet.insertRule(
    "aside#keywords ol {margin-left: 20px; font-size: 1.2em;}",
    2
  );
  styleSheet.sheet.insertRule("aside#keywords ol li {line-height: 1.5em;}", 3);
  styleSheet.sheet.insertRule(
    "aside#keywords ol li a {color: rgb(101, 101, 101); text-decoration: none;}",
    4
  );
}

function replaceWS(textStr) {
  var revText = textStr.replace(/\s+/g, "_");
  return revText;
}
