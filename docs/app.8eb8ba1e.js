parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
var e,t=document.querySelectorAll("section"),n=document.querySelectorAll(".nav-links"),o=document.querySelectorAll(".navbuttons"),c=function(e){n.forEach(function(t){t.dataset.section!=e?t.classList.remove("active"):t.classList.add("active")}),o.forEach(function(t){t.dataset.section!=e?t.classList.remove("active"):t.classList.add("active")})},i=function(t){e=t},r=function(){var t=e.previousElementSibling;null!=t&&t.scrollIntoView()},a=function(){var t=e.nextElementSibling;null!=t&&t.scrollIntoView()},s=function(e){switch(e){case"ArrowUp":r();break;case"ArrowDown":a();break;default:console.log("How did you get past my if statement?")}},l=function(e,t){e.forEach(function(e){e.isIntersecting&&(c(e.target.id),i(e.target))})},u={threshold:.5},d=new IntersectionObserver(l,u);t.forEach(function(e){d.observe(e)}),window.addEventListener("keydown",function(e){"ArrowUp"===e.code&&(e.preventDefault(),s(e.code)),"ArrowDown"===e.code&&(e.preventDefault(),s(e.code))});
},{}]},{},["QdeU"], null)
//# sourceMappingURL=/app.8eb8ba1e.js.map