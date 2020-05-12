(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-polyfills-css-shim"],{

/***/ "./node_modules/@ionic/core/dist/esm/css-shim-c6f94a39.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/css-shim-c6f94a39.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Stencil Client Platform v1.11.2 | MIT Licensed | https://stenciljs.com
 */
var StyleNode=function(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector="";};function parse(e){return parseCss(lex(e=clean(e)),e)}function clean(e){return e.replace(RX.comments,"").replace(RX.port,"")}function lex(e){var t=new StyleNode;t.start=0,t.end=e.length;for(var r=t,n=0,s=e.length;n<s;n++)if(e[n]===OPEN_BRACE){r.rules||(r.rules=[]);var o=r,a=o.rules[o.rules.length-1]||null;(r=new StyleNode).start=n+1,r.parent=o,r.previous=a,o.rules.push(r);}else e[n]===CLOSE_BRACE&&(r.end=n+1,r=r.parent||t);return t}function parseCss(e,t){var r=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=r.trim(),e.parent){var n=e.previous?e.previous.end:e.parent.start;r=(r=(r=_expandUnicodeEscapes(r=t.substring(n,e.start-1))).replace(RX.multipleSpaces," ")).substring(r.lastIndexOf(";")+1);var s=e.parsedSelector=e.selector=r.trim();e.atRule=0===s.indexOf(AT_START),e.atRule?0===s.indexOf(MEDIA_START)?e.type=types.MEDIA_RULE:s.match(RX.keyframesRule)&&(e.type=types.KEYFRAMES_RULE,e.keyframesName=e.selector.split(RX.multipleSpaces).pop()):0===s.indexOf(VAR_START)?e.type=types.MIXIN_RULE:e.type=types.STYLE_RULE;}var o=e.rules;if(o)for(var a=0,i=o.length,l=void 0;a<i&&(l=o[a]);a++)parseCss(l,t);return e}function _expandUnicodeEscapes(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var e=arguments[1],t=6-e.length;t--;)e="0"+e;return "\\"+e}))}var types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@";function findRegex(e,t,r){e.lastIndex=0;var n=t.substring(r).match(e);if(n){var s=r+n.index;return {start:s,end:s+n[0].length}}return null}var VAR_USAGE_START=/\bvar\(/,VAR_ASSIGN_START=/\B--[\w-]+\s*:/,COMMENTS=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,TRAILING_LINES=/^[\t ]+\n/gm;function resolveVar(e,t,r){return e[t]?e[t]:r?executeTemplate(r,e):""}function findVarEndIndex(e,t){for(var r=0,n=t;n<e.length;n++){var s=e[n];if("("===s)r++;else if(")"===s&&--r<=0)return n+1}return n}function parseVar(e,t){var r=findRegex(VAR_USAGE_START,e,t);if(!r)return null;var n=findVarEndIndex(e,r.start),s=e.substring(r.end,n-1).split(","),o=s[0],a=s.slice(1);return {start:r.start,end:n,propName:o.trim(),fallback:a.length>0?a.join(",").trim():void 0}}function compileVar(e,t,r){var n=parseVar(e,r);if(!n)return t.push(e.substring(r,e.length)),e.length;var s=n.propName,o=null!=n.fallback?compileTemplate(n.fallback):void 0;return t.push(e.substring(r,n.start),(function(e){return resolveVar(e,s,o)})),n.end}function executeTemplate(e,t){for(var r="",n=0;n<e.length;n++){var s=e[n];r+="string"==typeof s?s:s(t);}return r}function findEndValue(e,t){for(var r=!1,n=!1,s=t;s<e.length;s++){var o=e[s];if(r)n&&'"'===o&&(r=!1),n||"'"!==o||(r=!1);else if('"'===o)r=!0,n=!0;else if("'"===o)r=!0,n=!1;else{if(";"===o)return s+1;if("}"===o)return s}}return s}function removeCustomAssigns(e){for(var t="",r=0;;){var n=findRegex(VAR_ASSIGN_START,e,r),s=n?n.start:e.length;if(t+=e.substring(r,s),!n)break;r=findEndValue(e,s);}return t}function compileTemplate(e){var t=0;e=removeCustomAssigns(e=e.replace(COMMENTS,"")).replace(TRAILING_LINES,"");for(var r=[];t<e.length;)t=compileVar(e,r,t);return r}function resolveValues(e){var t={};e.forEach((function(e){e.declarations.forEach((function(e){t[e.prop]=e.value;}));}));for(var r={},n=Object.entries(t),s=function(e){var t=!1;if(n.forEach((function(e){var n=e[0],s=executeTemplate(e[1],r);s!==r[n]&&(r[n]=s,t=!0);})),!t)return "break"},o=0;o<10;o++){if("break"===s())break}return r}function getSelectors(e,t){if(void 0===t&&(t=0),!e.rules)return [];var r=[];return e.rules.filter((function(e){return e.type===types.STYLE_RULE})).forEach((function(e){var n=getDeclarations(e.cssText);n.length>0&&e.parsedSelector.split(",").forEach((function(e){e=e.trim(),r.push({selector:e,declarations:n,specificity:computeSpecificity(),nu:t});})),t++;})),r}function computeSpecificity(e){return 1}var IMPORTANT="!important",FIND_DECLARATIONS=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function getDeclarations(e){for(var t,r=[];t=FIND_DECLARATIONS.exec(e.trim());){var n=normalizeValue(t[2]),s=n.value,o=n.important;r.push({prop:t[1].trim(),value:compileTemplate(s),important:o});}return r}function normalizeValue(e){var t=(e=e.replace(/\s+/gim," ").trim()).endsWith(IMPORTANT);return t&&(e=e.substr(0,e.length-IMPORTANT.length).trim()),{value:e,important:t}}function getActiveSelectors(e,t,r){var n=[],s=getScopesForElement(t,e);return r.forEach((function(e){return n.push(e)})),s.forEach((function(e){return n.push(e)})),sortSelectors(getSelectorsForScopes(n).filter((function(t){return matches(e,t.selector)})))}function getScopesForElement(e,t){for(var r=[];t;){var n=e.get(t);n&&r.push(n),t=t.parentElement;}return r}function getSelectorsForScopes(e){var t=[];return e.forEach((function(e){t.push.apply(t,e.selectors);})),t}function sortSelectors(e){return e.sort((function(e,t){return e.specificity===t.specificity?e.nu-t.nu:e.specificity-t.specificity})),e}function matches(e,t){return ":root"===t||"html"===t||e.matches(t)}function parseCSS(e){var t=parse(e),r=compileTemplate(e);return {original:e,template:r,selectors:getSelectors(t),usesCssVars:r.length>1}}function addGlobalStyle(e,t){if(e.some((function(e){return e.styleEl===t})))return !1;var r=parseCSS(t.textContent);return r.styleEl=t,e.push(r),!0}function updateGlobalScopes(e){var t=resolveValues(getSelectorsForScopes(e));e.forEach((function(e){e.usesCssVars&&(e.styleEl.textContent=executeTemplate(e.template,t));}));}function reScope(e,t){var r=e.template.map((function(r){return "string"==typeof r?replaceScope(r,e.scopeId,t):r})),n=e.selectors.map((function(r){return Object.assign(Object.assign({},r),{selector:replaceScope(r.selector,e.scopeId,t)})}));return Object.assign(Object.assign({},e),{template:r,selectors:n,scopeId:t})}function replaceScope(e,t,r){return e=replaceAll(e,"\\."+t,"."+r)}function replaceAll(e,t,r){return e.replace(new RegExp(t,"g"),r)}function loadDocument(e,t){return loadDocumentStyles(e,t),loadDocumentLinks(e,t).then((function(){updateGlobalScopes(t);}))}function startWatcher(e,t){"undefined"!=typeof MutationObserver&&new MutationObserver((function(){loadDocumentStyles(e,t)&&updateGlobalScopes(t);})).observe(document.head,{childList:!0});}function loadDocumentLinks(e,t){for(var r=[],n=e.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),s=0;s<n.length;s++)r.push(addGlobalLink(e,t,n[s]));return Promise.all(r)}function loadDocumentStyles(e,t){return Array.from(e.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map((function(e){return addGlobalStyle(t,e)})).some(Boolean)}function addGlobalLink(e,t,r){var n=r.href;return fetch(n).then((function(e){return e.text()})).then((function(s){if(hasCssVariables(s)&&r.parentNode){hasRelativeUrls(s)&&(s=fixRelativeUrls(s,n));var o=e.createElement("style");o.setAttribute("data-styles",""),o.textContent=s,addGlobalStyle(t,o),r.parentNode.insertBefore(o,r),r.remove();}})).catch((function(e){console.error(e);}))}var CSS_VARIABLE_REGEXP=/[\s;{]--[-a-zA-Z0-9]+\s*:/m;function hasCssVariables(e){return e.indexOf("var(")>-1||CSS_VARIABLE_REGEXP.test(e)}var CSS_URL_REGEXP=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;function hasRelativeUrls(e){return CSS_URL_REGEXP.lastIndex=0,CSS_URL_REGEXP.test(e)}function fixRelativeUrls(e,t){var r=t.replace(/[^/]*$/,"");return e.replace(CSS_URL_REGEXP,(function(e,t){var n=r+t;return e.replace(t,n)}))}var CustomStyle=function(){function e(e,t){this.win=e,this.doc=t,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1;}return e.prototype.i=function(){var e=this;return this.didInit||!this.win.requestAnimationFrame?Promise.resolve():(this.didInit=!0,new Promise((function(t){e.win.requestAnimationFrame((function(){startWatcher(e.doc,e.globalScopes),loadDocument(e.doc,e.globalScopes).then((function(){return t()}));}));})))},e.prototype.addLink=function(e){var t=this;return addGlobalLink(this.doc,this.globalScopes,e).then((function(){t.updateGlobal();}))},e.prototype.addGlobalStyle=function(e){addGlobalStyle(this.globalScopes,e)&&this.updateGlobal();},e.prototype.createHostStyle=function(e,t,r,n){if(this.hostScopeMap.has(e))throw new Error("host style already created");var s=this.registerHostTemplate(r,t,n),o=this.doc.createElement("style");return o.setAttribute("data-no-shim",""),s.usesCssVars?n?(o["s-sc"]=t=s.scopeId+"-"+this.count,o.textContent="/*needs update*/",this.hostStyleMap.set(e,o),this.hostScopeMap.set(e,reScope(s,t)),this.count++):(s.styleEl=o,s.usesCssVars||(o.textContent=executeTemplate(s.template,{})),this.globalScopes.push(s),this.updateGlobal(),this.hostScopeMap.set(e,s)):o.textContent=r,o},e.prototype.removeHost=function(e){var t=this.hostStyleMap.get(e);t&&t.remove(),this.hostStyleMap.delete(e),this.hostScopeMap.delete(e);},e.prototype.updateHost=function(e){var t=this.hostScopeMap.get(e);if(t&&t.usesCssVars&&t.isScoped){var r=this.hostStyleMap.get(e);if(r){var n=resolveValues(getActiveSelectors(e,this.hostScopeMap,this.globalScopes));r.textContent=executeTemplate(t.template,n);}}},e.prototype.updateGlobal=function(){updateGlobalScopes(this.globalScopes);},e.prototype.registerHostTemplate=function(e,t,r){var n=this.scopesMap.get(t);return n||((n=parseCSS(e)).scopeId=t,n.isScoped=r,this.scopesMap.set(t,n)),n},e}();!function(e){!e||e.__cssshim||e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")||(e.__cssshim=new CustomStyle(e,e.document));}("undefined"!=typeof window&&window);


/***/ }),

/***/ "./node_modules/@ionic/pwa-elements/dist/esm/css-shim-8775d9ad-556f0cc2.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/css-shim-8775d9ad-556f0cc2.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Extremely simple css parser. Intended to be not more than what we need
and definitely not necessarily correct =).
*/
/** @unrestricted */
var StyleNode = /** @class */ (function () {
    function StyleNode() {
        this.start = 0;
        this.end = 0;
        this.previous = null;
        this.parent = null;
        this.rules = null;
        this.parsedCssText = '';
        this.cssText = '';
        this.atRule = false;
        this.type = 0;
        this.keyframesName = '';
        this.selector = '';
        this.parsedSelector = '';
    }
    return StyleNode;
}());
// given a string of css, return a simple rule tree
/**
 * @param {string} text
 * @return {StyleNode}
 */
function parse(text) {
    text = clean(text);
    return parseCss(lex(text), text);
}
// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */
function clean(cssText) {
    return cssText.replace(RX.comments, '').replace(RX.port, '');
}
// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {StyleNode}
 */
function lex(text) {
    var root = new StyleNode();
    root['start'] = 0;
    root['end'] = text.length;
    var n = root;
    for (var i = 0, l = text.length; i < l; i++) {
        if (text[i] === OPEN_BRACE) {
            if (!n['rules']) {
                n['rules'] = [];
            }
            var p = n;
            var previous = p['rules'][p['rules'].length - 1] || null;
            n = new StyleNode();
            n['start'] = i + 1;
            n['parent'] = p;
            n['previous'] = previous;
            p['rules'].push(n);
        }
        else if (text[i] === CLOSE_BRACE) {
            n['end'] = i + 1;
            n = n['parent'] || root;
        }
    }
    return root;
}
// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {StyleNode}
 */
function parseCss(node, text) {
    var t = text.substring(node['start'], node['end'] - 1);
    node['parsedCssText'] = node['cssText'] = t.trim();
    if (node.parent) {
        var ss = node.previous ? node.previous['end'] : node.parent['start'];
        t = text.substring(ss, node['start'] - 1);
        t = _expandUnicodeEscapes(t);
        t = t.replace(RX.multipleSpaces, ' ');
        // TODO(sorvell): ad hoc; make selector include only after last ;
        // helps with mixin syntax
        t = t.substring(t.lastIndexOf(';') + 1);
        var s = node['parsedSelector'] = node['selector'] = t.trim();
        node['atRule'] = (s.indexOf(AT_START) === 0);
        // note, support a subset of rule types...
        if (node['atRule']) {
            if (s.indexOf(MEDIA_START) === 0) {
                node['type'] = types.MEDIA_RULE;
            }
            else if (s.match(RX.keyframesRule)) {
                node['type'] = types.KEYFRAMES_RULE;
                node['keyframesName'] = node['selector'].split(RX.multipleSpaces).pop();
            }
        }
        else {
            if (s.indexOf(VAR_START) === 0) {
                node['type'] = types.MIXIN_RULE;
            }
            else {
                node['type'] = types.STYLE_RULE;
            }
        }
    }
    var r$ = node['rules'];
    if (r$) {
        for (var i = 0, l = r$.length, r = void 0; (i < l) && (r = r$[i]); i++) {
            parseCss(r, text);
        }
    }
    return node;
}
/**
 * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
 * expanded form that doesn't require trailing space `\000033`
 * @param {string} s
 * @return {string}
 */
function _expandUnicodeEscapes(s) {
    return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
        var code = arguments[1], repeat = 6 - code.length;
        while (repeat--) {
            code = '0' + code;
        }
        return '\\' + code;
    });
}
/** @enum {number} */
var types = {
    STYLE_RULE: 1,
    KEYFRAMES_RULE: 7,
    MEDIA_RULE: 4,
    MIXIN_RULE: 1000
};
var OPEN_BRACE = '{';
var CLOSE_BRACE = '}';
// helper regexp's
var RX = {
    comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    port: /@import[^;]*;/gim,
    customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    keyframesRule: /^@[^\s]*keyframes/,
    multipleSpaces: /\s+/g
};
var VAR_START = '--';
var MEDIA_START = '@media';
var AT_START = '@';
function findRegex(regex, cssText, offset) {
    regex['lastIndex'] = 0;
    var r = cssText.substring(offset).match(regex);
    if (r) {
        var start = offset + r['index'];
        return {
            start: start,
            end: start + r[0].length
        };
    }
    return null;
}
var VAR_USAGE_START = /\bvar\(/;
var VAR_ASSIGN_START = /\B--[\w-]+\s*:/;
var COMMENTS = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim;
var TRAILING_LINES = /^[\t ]+\n/gm;
function resolveVar(props, prop, fallback) {
    if (props[prop]) {
        return props[prop];
    }
    if (fallback) {
        return executeTemplate(fallback, props);
    }
    return '';
}
function findVarEndIndex(cssText, offset) {
    var count = 0;
    var i = offset;
    for (; i < cssText.length; i++) {
        var c = cssText[i];
        if (c === '(') {
            count++;
        }
        else if (c === ')') {
            count--;
            if (count <= 0) {
                return i + 1;
            }
        }
    }
    return i;
}
function parseVar(cssText, offset) {
    var varPos = findRegex(VAR_USAGE_START, cssText, offset);
    if (!varPos) {
        return null;
    }
    var endVar = findVarEndIndex(cssText, varPos.start);
    var varContent = cssText.substring(varPos.end, endVar - 1);
    var _a = varContent.split(','), propName = _a[0], fallback = _a.slice(1);
    return {
        start: varPos.start,
        end: endVar,
        propName: propName.trim(),
        fallback: fallback.length > 0 ? fallback.join(',').trim() : undefined
    };
}
function compileVar(cssText, template, offset) {
    var varMeta = parseVar(cssText, offset);
    if (!varMeta) {
        template.push(cssText.substring(offset, cssText.length));
        return cssText.length;
    }
    var propName = varMeta.propName;
    var fallback = varMeta.fallback != null ? compileTemplate(varMeta.fallback) : undefined;
    template.push(cssText.substring(offset, varMeta.start), function (params) { return resolveVar(params, propName, fallback); });
    return varMeta.end;
}
function executeTemplate(template, props) {
    var final = '';
    for (var i = 0; i < template.length; i++) {
        var s = template[i];
        final += (typeof s === 'string')
            ? s
            : s(props);
    }
    return final;
}
function findEndValue(cssText, offset) {
    var onStr = false;
    var double = false;
    var i = offset;
    for (; i < cssText.length; i++) {
        var c = cssText[i];
        if (onStr) {
            if (double && c === '"') {
                onStr = false;
            }
            if (!double && c === '\'') {
                onStr = false;
            }
        }
        else {
            if (c === '"') {
                onStr = true;
                double = true;
            }
            else if (c === '\'') {
                onStr = true;
                double = false;
            }
            else if (c === ';') {
                return i + 1;
            }
            else if (c === '}') {
                return i;
            }
        }
    }
    return i;
}
function removeCustomAssigns(cssText) {
    var final = '';
    var offset = 0;
    while (true) {
        var assignPos = findRegex(VAR_ASSIGN_START, cssText, offset);
        var start = assignPos ? assignPos.start : cssText.length;
        final += cssText.substring(offset, start);
        if (assignPos) {
            offset = findEndValue(cssText, start);
        }
        else {
            break;
        }
    }
    return final;
}
function compileTemplate(cssText) {
    var index = 0;
    cssText = cssText.replace(COMMENTS, '');
    cssText = removeCustomAssigns(cssText)
        .replace(TRAILING_LINES, '');
    var segments = [];
    while (index < cssText.length) {
        index = compileVar(cssText, segments, index);
    }
    return segments;
}
function resolveValues(selectors) {
    var props = {};
    selectors.forEach(function (selector) {
        selector.declarations.forEach(function (dec) {
            props[dec.prop] = dec.value;
        });
    });
    var propsValues = {};
    var entries = Object.entries(props);
    var _loop_1 = function (i) {
        var dirty = false;
        entries.forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var propValue = executeTemplate(value, propsValues);
            if (propValue !== propsValues[key]) {
                propsValues[key] = propValue;
                dirty = true;
            }
        });
        if (!dirty) {
            return "break";
        }
    };
    for (var i = 0; i < 10; i++) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    return propsValues;
}
function getSelectors(root, index) {
    if (index === void 0) { index = 0; }
    if (!root.rules) {
        return [];
    }
    var selectors = [];
    root.rules
        .filter(function (rule) { return rule.type === types.STYLE_RULE; })
        .forEach(function (rule) {
        var declarations = getDeclarations(rule.cssText);
        if (declarations.length > 0) {
            rule.parsedSelector.split(',').forEach(function (selector) {
                selector = selector.trim();
                selectors.push({
                    selector: selector,
                    declarations: declarations,
                    specificity: computeSpecificity(),
                    nu: index
                });
            });
        }
        index++;
    });
    return selectors;
}
function computeSpecificity(_selector) {
    return 1;
}
var IMPORTANT = '!important';
var FIND_DECLARATIONS = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;
function getDeclarations(cssText) {
    var declarations = [];
    var xArray;
    while (xArray = FIND_DECLARATIONS.exec(cssText.trim())) {
        var _a = normalizeValue(xArray[2]), value = _a.value, important = _a.important;
        declarations.push({
            prop: xArray[1].trim(),
            value: compileTemplate(value),
            important: important,
        });
    }
    return declarations;
}
function normalizeValue(value) {
    var regex = /\s+/gim;
    value = value.replace(regex, ' ').trim();
    var important = value.endsWith(IMPORTANT);
    if (important) {
        value = value.substr(0, value.length - IMPORTANT.length).trim();
    }
    return {
        value: value,
        important: important
    };
}
function getActiveSelectors(hostEl, hostScopeMap, globalScopes) {
    // computes the css scopes that might affect this particular element
    // avoiding using spread arrays to avoid ts helper fns when in es5
    var scopes = [];
    var scopesForElement = getScopesForElement(hostScopeMap, hostEl);
    // globalScopes are always took into account
    globalScopes.forEach(function (s) { return scopes.push(s); });
    // the parent scopes are computed by walking parent dom until <html> is reached
    scopesForElement.forEach(function (s) { return scopes.push(s); });
    // each scope might have an array of associated selectors
    // let's flatten the complete array of selectors from all the scopes
    var selectorSet = getSelectorsForScopes(scopes);
    // we filter to only the selectors that matches the hostEl
    var activeSelectors = selectorSet.filter(function (selector) { return matches(hostEl, selector.selector); });
    // sort selectors by specifity
    return sortSelectors(activeSelectors);
}
function getScopesForElement(hostTemplateMap, node) {
    var scopes = [];
    while (node) {
        var scope = hostTemplateMap.get(node);
        if (scope) {
            scopes.push(scope);
        }
        node = node.parentElement;
    }
    return scopes;
}
function getSelectorsForScopes(scopes) {
    var selectors = [];
    scopes.forEach(function (scope) {
        selectors.push.apply(selectors, scope.selectors);
    });
    return selectors;
}
function sortSelectors(selectors) {
    selectors.sort(function (a, b) {
        if (a.specificity === b.specificity) {
            return a.nu - b.nu;
        }
        return a.specificity - b.specificity;
    });
    return selectors;
}
function matches(el, selector) {
    return selector === ':root' || selector === 'html' || el.matches(selector);
}
function parseCSS(original) {
    var ast = parse(original);
    var template = compileTemplate(original);
    var selectors = getSelectors(ast);
    return {
        original: original,
        template: template,
        selectors: selectors,
        usesCssVars: template.length > 1
    };
}
function addGlobalStyle(globalScopes, styleEl) {
    if (globalScopes.some(function (css) { return css.styleEl === styleEl; })) {
        return false;
    }
    var css = parseCSS(styleEl.textContent);
    css.styleEl = styleEl;
    globalScopes.push(css);
    return true;
}
function updateGlobalScopes(scopes) {
    var selectors = getSelectorsForScopes(scopes);
    var props = resolveValues(selectors);
    scopes.forEach(function (scope) {
        if (scope.usesCssVars) {
            scope.styleEl.textContent = executeTemplate(scope.template, props);
        }
    });
}
function reScope(scope, scopeId) {
    var template = scope.template.map(function (segment) {
        return (typeof segment === 'string')
            ? replaceScope(segment, scope.scopeId, scopeId)
            : segment;
    });
    var selectors = scope.selectors.map(function (sel) {
        return Object.assign(Object.assign({}, sel), { selector: replaceScope(sel.selector, scope.scopeId, scopeId) });
    });
    return Object.assign(Object.assign({}, scope), { template: template,
        selectors: selectors,
        scopeId: scopeId });
}
function replaceScope(original, oldScopeId, newScopeId) {
    original = replaceAll(original, "\\." + oldScopeId, "." + newScopeId);
    return original;
}
function replaceAll(input, find, replace) {
    return input.replace(new RegExp(find, 'g'), replace);
}
function loadDocument(doc, globalScopes) {
    loadDocumentStyles(doc, globalScopes);
    return loadDocumentLinks(doc, globalScopes).then(function () {
        updateGlobalScopes(globalScopes);
    });
}
function startWatcher(doc, globalScopes) {
    var mutation = new MutationObserver(function () {
        if (loadDocumentStyles(doc, globalScopes)) {
            updateGlobalScopes(globalScopes);
        }
    });
    mutation.observe(document.head, { childList: true });
}
function loadDocumentLinks(doc, globalScopes) {
    var promises = [];
    var linkElms = doc.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])');
    for (var i = 0; i < linkElms.length; i++) {
        promises.push(addGlobalLink(doc, globalScopes, linkElms[i]));
    }
    return Promise.all(promises);
}
function loadDocumentStyles(doc, globalScopes) {
    var styleElms = Array.from(doc.querySelectorAll('style:not([data-styles]):not([data-no-shim])'));
    return styleElms
        .map(function (style) { return addGlobalStyle(globalScopes, style); })
        .some(Boolean);
}
function addGlobalLink(doc, globalScopes, linkElm) {
    var url = linkElm.href;
    return fetch(url).then(function (rsp) { return rsp.text(); }).then(function (text) {
        if (hasCssVariables(text) && linkElm.parentNode) {
            if (hasRelativeUrls(text)) {
                text = fixRelativeUrls(text, url);
            }
            var styleEl = doc.createElement('style');
            styleEl.setAttribute('data-styles', '');
            styleEl.textContent = text;
            addGlobalStyle(globalScopes, styleEl);
            linkElm.parentNode.insertBefore(styleEl, linkElm);
            linkElm.remove();
        }
    }).catch(function (err) {
        console.error(err);
    });
}
// This regexp tries to determine when a variable is declared, for example:
//
// .my-el { --highlight-color: green; }
//
// but we don't want to trigger when a classname uses "--" or a pseudo-class is
// used. We assume that the only characters that can preceed a variable
// declaration are "{", from an opening block, ";" from a preceeding rule, or a
// space. This prevents the regexp from matching a word in a selector, since
// they would need to start with a "." or "#". (We assume element names don't
// start with "--").
var CSS_VARIABLE_REGEXP = /[\s;{]--[-a-zA-Z0-9]+\s*:/m;
function hasCssVariables(css) {
    return css.indexOf('var(') > -1 || CSS_VARIABLE_REGEXP.test(css);
}
// This regexp find all url() usages with relative urls
var CSS_URL_REGEXP = /url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;
function hasRelativeUrls(css) {
    CSS_URL_REGEXP.lastIndex = 0;
    return CSS_URL_REGEXP.test(css);
}
function fixRelativeUrls(css, originalUrl) {
    // get the basepath from the original import url
    var basePath = originalUrl.replace(/[^/]*$/, '');
    // replace the relative url, with the new relative url
    return css.replace(CSS_URL_REGEXP, function (fullMatch, url) {
        // rhe new relative path is the base path + uri
        // TODO: normalize relative URL
        var relativeUrl = basePath + url;
        return fullMatch.replace(url, relativeUrl);
    });
}
var CustomStyle = /** @class */ (function () {
    function CustomStyle(win, doc) {
        this.win = win;
        this.doc = doc;
        this.count = 0;
        this.hostStyleMap = new WeakMap();
        this.hostScopeMap = new WeakMap();
        this.globalScopes = [];
        this.scopesMap = new Map();
        this.didInit = false;
    }
    CustomStyle.prototype.i = function () {
        var _this = this;
        if (this.didInit || !this.win.requestAnimationFrame) {
            return Promise.resolve();
        }
        else {
            this.didInit = true;
            return new Promise(function (resolve) {
                _this.win.requestAnimationFrame(function () {
                    startWatcher(_this.doc, _this.globalScopes);
                    loadDocument(_this.doc, _this.globalScopes).then(function () { return resolve(); });
                });
            });
        }
    };
    CustomStyle.prototype.addLink = function (linkEl) {
        var _this = this;
        return addGlobalLink(this.doc, this.globalScopes, linkEl).then(function () {
            _this.updateGlobal();
        });
    };
    CustomStyle.prototype.addGlobalStyle = function (styleEl) {
        if (addGlobalStyle(this.globalScopes, styleEl)) {
            this.updateGlobal();
        }
    };
    CustomStyle.prototype.createHostStyle = function (hostEl, cssScopeId, cssText, isScoped) {
        if (this.hostScopeMap.has(hostEl)) {
            throw new Error('host style already created');
        }
        var baseScope = this.registerHostTemplate(cssText, cssScopeId, isScoped);
        var styleEl = this.doc.createElement('style');
        styleEl.setAttribute('data-no-shim', '');
        if (!baseScope.usesCssVars) {
            // This component does not use (read) css variables
            styleEl.textContent = cssText;
        }
        else if (isScoped) {
            // This component is dynamic: uses css var and is scoped
            styleEl['s-sc'] = cssScopeId = baseScope.scopeId + "-" + this.count;
            styleEl.textContent = '/*needs update*/';
            this.hostStyleMap.set(hostEl, styleEl);
            this.hostScopeMap.set(hostEl, reScope(baseScope, cssScopeId));
            this.count++;
        }
        else {
            // This component uses css vars, but it's no-encapsulation (global static)
            baseScope.styleEl = styleEl;
            if (!baseScope.usesCssVars) {
                styleEl.textContent = executeTemplate(baseScope.template, {});
            }
            this.globalScopes.push(baseScope);
            this.updateGlobal();
            this.hostScopeMap.set(hostEl, baseScope);
        }
        return styleEl;
    };
    CustomStyle.prototype.removeHost = function (hostEl) {
        var css = this.hostStyleMap.get(hostEl);
        if (css) {
            css.remove();
        }
        this.hostStyleMap.delete(hostEl);
        this.hostScopeMap.delete(hostEl);
    };
    CustomStyle.prototype.updateHost = function (hostEl) {
        var scope = this.hostScopeMap.get(hostEl);
        if (scope && scope.usesCssVars && scope.isScoped) {
            var styleEl = this.hostStyleMap.get(hostEl);
            if (styleEl) {
                var selectors = getActiveSelectors(hostEl, this.hostScopeMap, this.globalScopes);
                var props = resolveValues(selectors);
                styleEl.textContent = executeTemplate(scope.template, props);
            }
        }
    };
    CustomStyle.prototype.updateGlobal = function () {
        updateGlobalScopes(this.globalScopes);
    };
    CustomStyle.prototype.registerHostTemplate = function (cssText, scopeId, isScoped) {
        var scope = this.scopesMap.get(scopeId);
        if (!scope) {
            scope = parseCSS(cssText);
            scope.scopeId = scopeId;
            scope.isScoped = isScoped;
            this.scopesMap.set(scopeId, scope);
        }
        return scope;
    };
    return CustomStyle;
}());
(function (win) {
    if (win && !win.__cssshim && (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)')))) {
        win.__cssshim = new CustomStyle(win, win.document);
    }
})(typeof window !== 'undefined' && window);


/***/ })

}]);
//# sourceMappingURL=stencil-polyfills-css-shim-es2015.js.map