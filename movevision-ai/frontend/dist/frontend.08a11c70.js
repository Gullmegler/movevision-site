// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"d2FNE":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1f29d02308a11c70";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"96tIl":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$b29b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$b29b.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$b29b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _i18N = require("./i18n");
var _stylesCss = require("./styles.css");
var _s = $RefreshSig$();
function App() {
    _s();
    const [file, setFile] = (0, _react.useState)(null);
    function handleDrop(e) {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
    }
    function handleUpload() {
        if (!file) return alert("No file selected.");
        alert(`Uploading: ${file.name}`);
    // TODO: Send til backend
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                src: "./logo.png",
                alt: "Move Vision",
                className: "logo"
            }, void 0, false, {
                fileName: "App.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                children: (0, _i18N.t)("upload")
            }, void 0, false, {
                fileName: "App.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                children: (0, _i18N.t)("welcome")
            }, void 0, false, {
                fileName: "App.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "dropzone",
                onDragOver: (e)=>e.preventDefault(),
                onDrop: handleDrop,
                children: file ? file.name : (0, _i18N.t)("drop_prompt")
            }, void 0, false, {
                fileName: "App.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                type: "file",
                onChange: (e)=>setFile(e.target.files[0]),
                style: {
                    marginTop: "1rem"
                }
            }, void 0, false, {
                fileName: "App.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                onClick: handleUpload,
                style: {
                    marginTop: "1rem"
                },
                children: (0, _i18N.t)("upload")
            }, void 0, false, {
                fileName: "App.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "App.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(App, "Nkb8eHkBruGouXteoqeZ1R6wRVk=");
_c = App;
exports.default = App;
var _c;
$RefreshReg$(_c, "App");

  $parcel$ReactRefreshHelpers$b29b.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","./i18n":"3xOup","./styles.css":"7N9bM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"dVPUn":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("ee51401569654d91");

},{"ee51401569654d91":"gnlQf"}],"gnlQf":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    'use strict';
    var React = require("58362d9d82be395f");
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || '';
        return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || 'Context';
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case REACT_PROFILER_TYPE:
                return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
                return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || 'Memo';
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var assign = Object.assign;
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes('<anonymous>')) _frame = _frame.replace('<anonymous>', fn.displayName);
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return '';
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return '' + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV(type, config, maybeKey, source, self) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.
        if (maybeKey !== undefined) {
            checkKeyStringCoercion(maybeKey);
            key = '' + maybeKey;
        }
        if (hasValidKey(config)) {
            checkKeyStringCoercion(config.key);
            key = '' + config.key;
        }
        if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object
        for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
         // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    var didWarnAboutKeySpread = {};
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
            var children = props.children;
            if (children !== undefined) {
                if (isStaticChildren) {
                    if (isArray(children)) {
                        for(var i = 0; i < children.length; i++)validateChildKeys(children[i], type);
                        if (Object.freeze) Object.freeze(children);
                    } else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                } else validateChildKeys(children, type);
            }
        }
        if (hasOwnProperty.call(props, 'key')) {
            var componentName = getComponentNameFromType(type);
            var keys = Object.keys(props).filter(function(k) {
                return k !== 'key';
            });
            var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';
            if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';
                error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                didWarnAboutKeySpread[componentName + beforeExample] = true;
            }
        }
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    } // These two functions exist to still get child warnings in dev
    var jsxDEV$1 = jsxWithValidation;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = jsxDEV$1;
})();

},{"58362d9d82be395f":"jMk1U"}],"jMk1U":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("a569817e6ea559f6");

},{"a569817e6ea559f6":"ghslp"}],"ghslp":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    'use strict';
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ReactVersion = '18.3.1';
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
        transition: null
    };
    var ReactCurrentActQueue = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false
    };
    /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
    }
    ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
    }; // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame.getCurrentStack = null;
    ReactDebugCurrentFrame.getStackAddendum = function() {
        var stack = ''; // Add an extra top frame while an element is being validated
        if (currentExtraStackFrame) stack += currentExtraStackFrame;
         // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) stack += impl() || '';
        return stack;
    };
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner
    };
    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.
    function warn(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        printWarning('warn', format, args);
    }
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
    /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
        /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
            return false;
        },
        /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
        },
        /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
        },
        /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
        }
    };
    var assign = Object.assign;
    var emptyObject = {};
    Object.freeze(emptyObject);
    /**
 * Base class helpers for the updating state of a component.
 */ function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component.prototype.setState = function(partialState, callback) {
        if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    var deprecatedAPIs = {
        isMounted: [
            'isMounted',
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            'replaceState',
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    var defineDeprecationWarning = function(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                return undefined;
            }
        });
    };
    for(var fnName in deprecatedAPIs)if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    function ComponentDummy() {}
    ComponentDummy.prototype = Component.prototype;
    /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    // an immutable object with a single mutable value
    function createRef() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return '' + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || '';
        return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || 'Context';
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case REACT_PROFILER_TYPE:
                return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
                return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || 'Memo';
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config);
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = '' + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            if (Object.freeze) Object.freeze(childArray);
            props.children = childArray;
        } // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
        if (element === null || element === undefined) throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName; // Original props are copied
        var props = assign({}, element.props); // Reserved names are extracted
        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.
        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source; // Owner will be preserved, unless ref is overridden
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = '' + config.key;
            } // Remaining properties override existing props
            var defaultProps;
            if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) // Resolve default props
                props[propName] = defaultProps[propName];
                else props[propName] = config[propName];
            }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            '=': '=0',
            ':': '=2'
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return '$' + escapedString;
    }
    /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === 'object' && element !== null && element.key != null) {
            checkKeyStringCoercion(element.key);
            return escape('' + element.key);
        } // Implicit key determined by the index in the set
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === 'undefined' || type === 'boolean') // All of the above are perceived as null.
        children = null;
        var invokeCallback = false;
        if (children === null) invokeCallback = true;
        else switch(type){
            case 'string':
            case 'number':
                invokeCallback = true;
                break;
            case 'object':
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:
            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
                var escapedChildKey = '';
                if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                mapIntoArray(mappedChild, array, escapedChildKey, '', function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                    // The `if` statement here prevents auto-disabling of the safe
                    // coercion ESLint rule, so we must manually disable it below.
                    // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) checkKeyStringCoercion(mappedChild.key);
                    mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                    escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
                }
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (isArray(children)) for(var i = 0; i < children.length; i++){
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
        else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
                var iterableChildren = children;
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    didWarnAboutMaps = true;
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === 'object') {
                // eslint-disable-next-line react-internal/safe-string-coercion
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
            }
        }
        return subtreeCount;
    }
    /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
        if (children == null) return children;
        var result = [];
        var count = 0;
        mapIntoArray(children, result, '', '', function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++; // Don't return anything
        });
        return n;
    }
    /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
    }
    /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
        if (!isValidElement(children)) throw new Error('React.Children.only expected to receive a single React element child.');
        return children;
    }
    function createContext(defaultValue) {
        // TODO: Second argument used to be an optional `calculateChangedBits`
        // function. Warn to reserve for future use?
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
            Provider: {
                get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                },
                set: function(_Provider) {
                    context.Provider = _Provider;
                }
            },
            _currentValue: {
                get: function() {
                    return context._currentValue;
                },
                set: function(_currentValue) {
                    context._currentValue = _currentValue;
                }
            },
            _currentValue2: {
                get: function() {
                    return context._currentValue2;
                },
                set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                }
            },
            _threadCount: {
                get: function() {
                    return context._threadCount;
                },
                set: function(_threadCount) {
                    context._threadCount = _threadCount;
                }
            },
            Consumer: {
                get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                }
            },
            displayName: {
                get: function() {
                    return context.displayName;
                },
                set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                        hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                }
            }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
        context._currentRenderer = null;
        context._currentRenderer2 = null;
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            // This might throw either because it's missing or throws. If so, we treat it
            // as still uninitialized and try again next time. Which is the same as what
            // happens if the ctor or any wrappers processing the ctor throws. This might
            // end up fixing it if the resolution was a concurrency bug.
            thenable.then(function(moduleObject) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = moduleObject;
                }
            }, function(error) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
            if (payload._status === Uninitialized) {
                // In case, we're still uninitialized, then we're waiting for the thenable
                // to resolve. Set it as pending in the meantime.
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
            }
        }
        if (payload._status === Resolved) {
            var moduleObject = payload._result;
            if (moduleObject === undefined) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
            if (!('default' in moduleObject)) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
            return moduleObject.default;
        } else throw payload._result;
    }
    function lazy(ctor) {
        var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe
        Object.defineProperties(lazyType, {
            defaultProps: {
                configurable: true,
                get: function() {
                    return defaultProps;
                },
                set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'defaultProps', {
                        enumerable: true
                    });
                }
            },
            propTypes: {
                configurable: true,
                get: function() {
                    return propTypes;
                },
                set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'propTypes', {
                        enumerable: true
                    });
                }
            }
        });
        return lazyType;
    }
    function forwardRef(render) {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof render !== 'function') error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        else if (render.length !== 0 && render.length !== 2) error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.forwardRef((props, ref) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!render.name && !render.displayName) render.displayName = name;
            }
        });
        return elementType;
    }
    var REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function memo(type, compare) {
        if (!isValidElementType(type)) error("memo: The first argument must be a component. Instead received: %s", type === null ? 'null' : typeof type);
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.memo((props) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!type.name && !type.displayName) type.displayName = name;
            }
        });
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (dispatcher === null) error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        // intentionally don't throw our own error because this is in a hot path.
        // Also helps ensure this is inlined.
        return dispatcher;
    }
    function useContext(Context) {
        var dispatcher = resolveDispatcher();
        // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.
            if (realContext.Consumer === Context) error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            else if (realContext.Provider === Context) error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context);
    }
    function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useInsertionEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useInsertionEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
    }
    function useTransition() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useTransition();
    }
    function useDeferredValue(value) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDeferredValue(value);
    }
    function useId() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useId();
    }
    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher$1.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes('<anonymous>')) _frame = _frame.replace('<anonymous>', fn.displayName);
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return '';
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
        } else setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        } // Legacy hook: remove it
        Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, 'type', {
                    value: type
                });
                return type;
            }
        });
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], newElement.type);
        validatePropTypes(newElement);
        return newElement;
    }
    function startTransition(scope, options) {
        var prevTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition = {};
        var currentTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
        try {
            scope();
        } finally{
            ReactCurrentBatchConfig.transition = prevTransition;
            if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                currentTransition._updatedFibers.clear();
            }
        }
    }
    var didWarnAboutMessageChannel = false;
    var enqueueTaskImpl = null;
    function enqueueTask(task) {
        if (enqueueTaskImpl === null) try {
            // read require off the module object to get around the bundlers.
            // we don't want them to detect a require and bundle a Node polyfill.
            var requireString = ('require' + Math.random()).slice(0, 7);
            var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
            // version of setImmediate, bypassing fake timers if any.
            enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
        } catch (_err) {
            // we're in a browser
            // we can't use regular timers because they may still be faked
            // so we try MessageChannel+postMessage instead
            enqueueTaskImpl = function(callback) {
                if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === 'undefined') error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(undefined);
            };
        }
        return enqueueTaskImpl(task);
    }
    var actScopeDepth = 0;
    var didWarnNoAwaitAct = false;
    function act(callback) {
        // `act` calls can be nested, so we track the depth. This represents the
        // number of `act` scopes on the stack.
        var prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        if (ReactCurrentActQueue.current === null) // This is the outermost `act` scope. Initialize the queue. The reconciler
        // will detect the queue and use it instead of Scheduler.
        ReactCurrentActQueue.current = [];
        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
        var result;
        try {
            // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
            // set to `true` while the given callback is executed, not for updates
            // triggered during an async event, because this is how the legacy
            // implementation of `act` behaved.
            ReactCurrentActQueue.isBatchingLegacy = true;
            result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
            // which flushed updates immediately after the scope function exits, even
            // if it's an async function.
            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                }
            }
        } catch (error) {
            popActScope(prevActScopeDepth);
            throw error;
        } finally{
            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
        }
        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
            var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
            // for it to resolve before exiting the current scope.
            var wasAwaited = false;
            var thenable = {
                then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue) {
                        popActScope(prevActScopeDepth);
                        if (actScopeDepth === 0) // We've exited the outermost act scope. Recursively flush the
                        // queue until there's no remaining work.
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        else resolve(returnValue);
                    }, function(error) {
                        // The callback threw an error.
                        popActScope(prevActScopeDepth);
                        reject(error);
                    });
                }
            };
            if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') // eslint-disable-next-line no-undef
            Promise.resolve().then(function() {}).then(function() {
                if (!wasAwaited) {
                    didWarnNoAwaitAct = true;
                    error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                }
            });
            return thenable;
        } else {
            var returnValue = result; // The callback is not an async function. Exit the current scope
            // immediately, without awaiting.
            popActScope(prevActScopeDepth);
            if (actScopeDepth === 0) {
                // Exiting the outermost act scope. Flush the queue.
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                } // Return a thenable. If the user awaits it, we'll flush again in
                // case additional work was scheduled by a microtask.
                var _thenable = {
                    then: function(resolve, reject) {
                        // Confirm we haven't re-entered another `act` scope, in case
                        // the user does something weird like await the thenable
                        // multiple times.
                        if (ReactCurrentActQueue.current === null) {
                            // Recursively flush the queue until there's no remaining work.
                            ReactCurrentActQueue.current = [];
                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        } else resolve(returnValue);
                    }
                };
                return _thenable;
            } else {
                // Since we're inside a nested `act` scope, the returned thenable
                // immediately resolves. The outer scope will flush the queue.
                var _thenable2 = {
                    then: function(resolve, reject) {
                        resolve(returnValue);
                    }
                };
                return _thenable2;
            }
        }
    }
    function popActScope(prevActScopeDepth) {
        if (prevActScopeDepth !== actScopeDepth - 1) error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactCurrentActQueue.current;
        if (queue !== null) try {
            flushActQueue(queue);
            enqueueTask(function() {
                if (queue.length === 0) {
                    // No additional work was scheduled. Finish.
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                } else // Keep flushing work until there's none left.
                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
        } catch (error) {
            reject(error);
        }
        else resolve(returnValue);
    }
    var isFlushing = false;
    function flushActQueue(queue) {
        if (!isFlushing) {
            // Prevent re-entrance.
            isFlushing = true;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do callback = callback(true);
                    while (callback !== null);
                }
                queue.length = 0;
            } catch (error) {
                // If something throws, leave the remaining callbacks on the queue.
                queue = queue.slice(i + 1);
                throw error;
            } finally{
                isFlushing = false;
            }
        }
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.act = act;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.startTransition = startTransition;
    exports.unstable_act = act;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useDeferredValue = useDeferredValue;
    exports.useEffect = useEffect;
    exports.useId = useId;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useInsertionEffect = useInsertionEffect;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.useSyncExternalStore = useSyncExternalStore;
    exports.useTransition = useTransition;
    exports.version = ReactVersion;
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();

},{}],"3xOup":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "t", ()=>t);
const translations = {
    en: {
        upload: "Upload file",
        welcome: "Welcome to Move Vision",
        drop_prompt: "Drag & drop file here"
    },
    no: {
        upload: "Last opp fil",
        welcome: "Velkommen til Move Vision",
        drop_prompt: "Dra og slipp fil her"
    }
};
function t(key) {
    const lang = navigator.language.startsWith("no") ? "no" : "en";
    return translations[lang][key] || key;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7N9bM":[function() {},{}],"7h6Pi":[function(require,module,exports,__globalThis) {
"use strict";
var Refresh = require("7422ead32dcc1e6b");
function debounce(func, delay) {
    {
        let timeout = undefined;
        let lastTime = 0;
        return function(args) {
            // Call immediately if last call was more than the delay ago.
            // Otherwise, set a timeout. This means the first call is fast
            // (for the common case of a single update), and subsequent updates
            // are batched.
            let now = Date.now();
            if (now - lastTime > delay) {
                lastTime = now;
                func.call(null, args);
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = undefined;
                    lastTime = Date.now();
                    func.call(null, args);
                }, delay);
            }
        };
    }
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30);
module.exports.init = function() {
    if (!globalThis.$RefreshReg$) {
        Refresh.injectIntoGlobalHook(globalThis);
        globalThis.$RefreshReg$ = function() {};
        globalThis.$RefreshSig$ = function() {
            return function(type) {
                return type;
            };
        };
        if (typeof window !== 'undefined') {
            let ErrorOverlay = require("e4d875b7642f9496");
            ErrorOverlay.setEditorHandler(function(errorLocation) {
                let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
                fetch(module.bundle.devServer + `/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
            });
            ErrorOverlay.startReportingRuntimeErrors({
                onError: function() {}
            });
            window.addEventListener('parcelhmraccept', ()=>{
                ErrorOverlay.dismissRuntimeErrors();
            });
        }
    }
};
// Everything below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module1) {
    globalThis.$RefreshReg$ = function(type, id) {
        Refresh.register(type, module1.id + ' ' + id);
    };
    globalThis.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module1) {
    if (typeof window === 'undefined') return;
    if (isReactRefreshBoundary(module1.exports)) {
        registerExportsForReactRefresh(module1);
        if (module1.hot) {
            module1.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module1.exports;
            });
            module1.hot.accept(function(getParents) {
                var prevExports = module1.hot.data.prevExports;
                var nextExports = module1.exports;
                // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports);
                // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
}
// When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module1) {
    var exports = module1.exports, id = module1.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        var typeID = id + ' %exports% ' + key;
        Refresh.register(exportValue, typeID);
    }
}

},{"7422ead32dcc1e6b":"hpiFP","e4d875b7642f9496":"gnoim"}],"hpiFP":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("96622d495519d4e");

},{"96622d495519d4e":"7AD9f"}],"7AD9f":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function computeFullKey(signature) {
        if (null !== signature.fullKey) return signature.fullKey;
        var fullKey = signature.ownKey;
        try {
            var hooks = signature.getCustomHooks();
        } catch (err) {
            return signature.forceReset = !0, signature.fullKey = fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if ("function" !== typeof hook) return signature.forceReset = !0, signature.fullKey = fullKey;
            hook = allSignaturesByType.get(hook);
            if (void 0 !== hook) {
                var nestedHookKey = computeFullKey(hook);
                hook.forceReset && (signature.forceReset = !0);
                fullKey += "\n---\n" + nestedHookKey;
            }
        }
        return signature.fullKey = fullKey;
    }
    function resolveFamily(type) {
        return updatedFamiliesByType.get(type);
    }
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function getProperty(object, property) {
        try {
            return object[property];
        } catch (err) {}
    }
    function register(type, id) {
        if (!(null === type || "function" !== typeof type && "object" !== typeof type || allFamiliesByType.has(type))) {
            var family = allFamiliesByID.get(id);
            void 0 === family ? (family = {
                current: type
            }, allFamiliesByID.set(id, family)) : pendingUpdates.push([
                family,
                type
            ]);
            allFamiliesByType.set(type, family);
            if ("object" === typeof type && null !== type) switch(getProperty(type, "$$typeof")){
                case REACT_FORWARD_REF_TYPE:
                    register(type.render, id + "$render");
                    break;
                case REACT_MEMO_TYPE:
                    register(type.type, id + "$type");
            }
        }
    }
    function setSignature(type, key) {
        var forceReset = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, getCustomHooks = 3 < arguments.length ? arguments[3] : void 0;
        allSignaturesByType.has(type) || allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
        if ("object" === typeof type && null !== type) switch(getProperty(type, "$$typeof")){
            case REACT_FORWARD_REF_TYPE:
                setSignature(type.render, key, forceReset, getCustomHooks);
                break;
            case REACT_MEMO_TYPE:
                setSignature(type.type, key, forceReset, getCustomHooks);
        }
    }
    function collectCustomHooksForSignature(type) {
        type = allSignaturesByType.get(type);
        void 0 !== type && computeFullKey(type);
    }
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_MEMO_TYPE = Symbol.for("react.memo"), PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, allFamiliesByID = new Map(), allFamiliesByType = new PossiblyWeakMap(), allSignaturesByType = new PossiblyWeakMap(), updatedFamiliesByType = new PossiblyWeakMap(), pendingUpdates = [], helpersByRendererID = new Map(), helpersByRoot = new Map(), mountedRoots = new Set(), failedRoots = new Set(), rootElements = "function" === typeof WeakMap ? new WeakMap() : null, isPerformingRefresh = !1;
    exports._getMountedRootCount = function() {
        return mountedRoots.size;
    };
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = function() {
        var savedType, hasCustomHooks, didCollectHooks = !1;
        return function(type, key, forceReset, getCustomHooks) {
            if ("string" === typeof key) return savedType || (savedType = type, hasCustomHooks = "function" === typeof getCustomHooks), null == type || "function" !== typeof type && "object" !== typeof type || setSignature(type, key, forceReset, getCustomHooks), type;
            !didCollectHooks && hasCustomHooks && (didCollectHooks = !0, collectCustomHooksForSignature(savedType));
        };
    };
    exports.getFamilyByID = function(id) {
        return allFamiliesByID.get(id);
    };
    exports.getFamilyByType = function(type) {
        return allFamiliesByType.get(type);
    };
    exports.hasUnrecoverableErrors = function() {
        return !1;
    };
    exports.injectIntoGlobalHook = function(globalObject) {
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (void 0 === hook) {
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: !0,
                inject: function() {
                    return nextID++;
                },
                onScheduleFiberRoot: function() {},
                onCommitFiberRoot: function() {},
                onCommitFiberUnmount: function() {}
            };
        }
        if (hook.isDisabled) console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
        else {
            var oldInject = hook.inject;
            hook.inject = function(injected) {
                var id = oldInject.apply(this, arguments);
                "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
                return id;
            };
            hook.renderers.forEach(function(injected, id) {
                "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
            });
            var oldOnCommitFiberRoot = hook.onCommitFiberRoot, oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
            hook.onScheduleFiberRoot = function(id, root, children) {
                isPerformingRefresh || (failedRoots.delete(root), null !== rootElements && rootElements.set(root, children));
                return oldOnScheduleFiberRoot.apply(this, arguments);
            };
            hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
                var helpers = helpersByRendererID.get(id);
                if (void 0 !== helpers) {
                    helpersByRoot.set(root, helpers);
                    helpers = root.current;
                    var alternate = helpers.alternate;
                    null !== alternate ? (alternate = null != alternate.memoizedState && null != alternate.memoizedState.element && mountedRoots.has(root), helpers = null != helpers.memoizedState && null != helpers.memoizedState.element, !alternate && helpers ? (mountedRoots.add(root), failedRoots.delete(root)) : alternate && helpers || (alternate && !helpers ? (mountedRoots.delete(root), didError ? failedRoots.add(root) : helpersByRoot.delete(root)) : alternate || helpers || didError && failedRoots.add(root))) : mountedRoots.add(root);
                }
                return oldOnCommitFiberRoot.apply(this, arguments);
            };
        }
    };
    exports.isLikelyComponentType = function(type) {
        switch(typeof type){
            case "function":
                if (null != type.prototype) {
                    if (type.prototype.isReactComponent) return !0;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (1 < ownNames.length || "constructor" !== ownNames[0] || type.prototype.__proto__ !== Object.prototype) return !1;
                }
                type = type.name || type.displayName;
                return "string" === typeof type && /^[A-Z]/.test(type);
            case "object":
                if (null != type) switch(getProperty(type, "$$typeof")){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        return !0;
                }
                return !1;
            default:
                return !1;
        }
    };
    exports.performReactRefresh = function() {
        if (0 === pendingUpdates.length || isPerformingRefresh) return null;
        isPerformingRefresh = !0;
        try {
            var staleFamilies = new Set(), updatedFamilies = new Set(), updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0];
                _ref = _ref[1];
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(_ref, family);
                family.current = _ref;
                prevType.prototype && prevType.prototype.isReactComponent || _ref.prototype && _ref.prototype.isReactComponent ? _ref = !1 : (prevType = allSignaturesByType.get(prevType), _ref = allSignaturesByType.get(_ref), _ref = void 0 === prevType && void 0 === _ref || void 0 !== prevType && void 0 !== _ref && computeFullKey(prevType) === computeFullKey(_ref) && !_ref.forceReset ? !0 : !1);
                _ref ? updatedFamilies.add(family) : staleFamilies.add(family);
            });
            var update = {
                updatedFamilies: updatedFamilies,
                staleFamilies: staleFamilies
            };
            helpersByRendererID.forEach(function(helpers) {
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = !1, firstError = null, failedRootsSnapshot = cloneSet(failedRoots), mountedRootsSnapshot = cloneSet(mountedRoots), helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
                failedRoots.has(root);
                if (null !== rootElements && rootElements.has(root)) {
                    var element = rootElements.get(root);
                    try {
                        helpers.scheduleRoot(root, element);
                    } catch (err) {
                        didError || (didError = !0, firstError = err);
                    }
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    didError || (didError = !0, firstError = err);
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = !1;
        }
    };
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"gnoim":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setEditorHandler", ()=>$da9882e673ac146b$export$25a22ac46f1bd016);
parcelHelpers.export(exports, "reportRuntimeError", ()=>$da9882e673ac146b$export$74e9101ce4078c0);
parcelHelpers.export(exports, "startReportingRuntimeErrors", ()=>$da9882e673ac146b$export$cda2c88a41631c16);
parcelHelpers.export(exports, "dismissRuntimeErrors", ()=>$da9882e673ac146b$export$1cfa6d161ca81bd9);
parcelHelpers.export(exports, "stopReportingRuntimeErrors", ()=>$da9882e673ac146b$export$25ba7d9a816639e7);
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ /* eslint-disable react/react-in-jsx-scope, no-console */ var $b6c7f0288a15c619$var$n, $b6c7f0288a15c619$export$41c562ebe57d11e2, $b6c7f0288a15c619$var$u, $b6c7f0288a15c619$export$a8257692ac88316c, $b6c7f0288a15c619$var$i, $b6c7f0288a15c619$var$r, $b6c7f0288a15c619$var$o, $b6c7f0288a15c619$var$e, $b6c7f0288a15c619$var$f, $b6c7f0288a15c619$var$c, $b6c7f0288a15c619$var$s, $b6c7f0288a15c619$var$a, $b6c7f0288a15c619$var$h, $b6c7f0288a15c619$var$p = {}, $b6c7f0288a15c619$var$y = [], $b6c7f0288a15c619$var$v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $b6c7f0288a15c619$var$w = Array.isArray;
function $b6c7f0288a15c619$var$d(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function $b6c7f0288a15c619$var$g(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function $b6c7f0288a15c619$export$c8a8987d4410bf2d(l, u, t) {
    var i, r, o, e = {};
    for(o in u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? $b6c7f0288a15c619$var$n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)null == e[o] && (e[o] = l.defaultProps[o]);
    return $b6c7f0288a15c619$var$m(l, e, i, r, null);
}
function $b6c7f0288a15c619$var$m(n, t, i, r, o) {
    var e = {
        type: n,
        props: t,
        key: i,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == o ? ++$b6c7f0288a15c619$var$u : o,
        __i: -1,
        __u: 0
    };
    return null == o && null != $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(e), e;
}
function $b6c7f0288a15c619$export$7d1e3a5e95ceca43() {
    return {
        current: null
    };
}
function $b6c7f0288a15c619$export$ffb0004e005737fa(n) {
    return n.children;
}
function $b6c7f0288a15c619$export$16fa2f45be04daa8(n, l) {
    this.props = n, this.context = l;
}
function $b6c7f0288a15c619$var$S(n, l) {
    if (null == l) return n.__ ? $b6c7f0288a15c619$var$S(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? $b6c7f0288a15c619$var$S(n) : null;
}
function $b6c7f0288a15c619$var$C(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return $b6c7f0288a15c619$var$C(n);
    }
}
function $b6c7f0288a15c619$var$M(n) {
    (!n.__d && (n.__d = !0) && $b6c7f0288a15c619$var$i.push(n) && !$b6c7f0288a15c619$var$$.__r++ || $b6c7f0288a15c619$var$r != $b6c7f0288a15c619$export$41c562ebe57d11e2.debounceRendering) && (($b6c7f0288a15c619$var$r = $b6c7f0288a15c619$export$41c562ebe57d11e2.debounceRendering) || $b6c7f0288a15c619$var$o)($b6c7f0288a15c619$var$$);
}
function $b6c7f0288a15c619$var$$() {
    for(var n, u, t, r, o, f, c, s = 1; $b6c7f0288a15c619$var$i.length;)$b6c7f0288a15c619$var$i.length > s && $b6c7f0288a15c619$var$i.sort($b6c7f0288a15c619$var$e), n = $b6c7f0288a15c619$var$i.shift(), s = $b6c7f0288a15c619$var$i.length, n.__d && (t = void 0, o = (r = (u = n).__v).__e, f = [], c = [], u.__P && ((t = $b6c7f0288a15c619$var$d({}, r)).__v = r.__v + 1, $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(t), $b6c7f0288a15c619$var$O(u.__P, t, r, u.__n, u.__P.namespaceURI, 32 & r.__u ? [
        o
    ] : null, f, null == o ? $b6c7f0288a15c619$var$S(r) : o, !!(32 & r.__u), c), t.__v = r.__v, t.__.__k[t.__i] = t, $b6c7f0288a15c619$var$z(f, t, c), t.__e != o && $b6c7f0288a15c619$var$C(t)));
    $b6c7f0288a15c619$var$$.__r = 0;
}
function $b6c7f0288a15c619$var$I(n, l, u, t, i, r, o, e, f, c, s) {
    var a, h, v, w, d, g, _ = t && t.__k || $b6c7f0288a15c619$var$y, m = l.length;
    for(f = $b6c7f0288a15c619$var$P(u, l, _, f, m), a = 0; a < m; a++)null != (v = u.__k[a]) && (h = -1 == v.__i ? $b6c7f0288a15c619$var$p : _[v.__i] || $b6c7f0288a15c619$var$p, v.__i = a, g = $b6c7f0288a15c619$var$O(n, v, h, i, r, o, e, f, c, s), w = v.__e, v.ref && h.ref != v.ref && (h.ref && $b6c7f0288a15c619$var$q(h.ref, null, v), s.push(v.ref, v.__c || w, v)), null == d && null != w && (d = w), 4 & v.__u || h.__k === v.__k ? f = $b6c7f0288a15c619$var$A(v, f, n) : "function" == typeof v.type && void 0 !== g ? f = g : w && (f = w.nextSibling), v.__u &= -7);
    return u.__e = d, f;
}
function $b6c7f0288a15c619$var$P(n, l, u, t, i) {
    var r, o, e, f, c, s = u.length, a = s, h = 0;
    for(n.__k = new Array(i), r = 0; r < i; r++)null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? (f = r + h, (o = n.__k[r] = "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? $b6c7f0288a15c619$var$m(null, o, null, null, null) : $b6c7f0288a15c619$var$w(o) ? $b6c7f0288a15c619$var$m($b6c7f0288a15c619$export$ffb0004e005737fa, {
        children: o
    }, null, null, null) : null == o.constructor && o.__b > 0 ? $b6c7f0288a15c619$var$m(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = $b6c7f0288a15c619$var$L(o, u, f, a)) && (a--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
    if (a) for(r = 0; r < s; r++)null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = $b6c7f0288a15c619$var$S(e)), $b6c7f0288a15c619$var$B(e, e));
    return t;
}
function $b6c7f0288a15c619$var$A(n, l, u) {
    var t, i;
    if ("function" == typeof n.type) {
        for(t = n.__k, i = 0; t && i < t.length; i++)t[i] && (t[i].__ = n, l = $b6c7f0288a15c619$var$A(t[i], l, u));
        return l;
    }
    n.__e != l && (l && n.type && !u.contains(l) && (l = $b6c7f0288a15c619$var$S(n)), u.insertBefore(n.__e, l || null), l = n.__e);
    do l = l && l.nextSibling;
    while (null != l && 8 == l.nodeType);
    return l;
}
function $b6c7f0288a15c619$export$47e4c5b300681277(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || ($b6c7f0288a15c619$var$w(n) ? n.some(function(n) {
        $b6c7f0288a15c619$export$47e4c5b300681277(n, l);
    }) : l.push(n)), l;
}
function $b6c7f0288a15c619$var$L(n, l, u, t) {
    var i, r, o = n.key, e = n.type, f = l[u];
    if (null === f && null == n.key || f && o == f.key && e == f.type && 0 == (2 & f.__u)) return u;
    if (t > (null != f && 0 == (2 & f.__u) ? 1 : 0)) for(i = u - 1, r = u + 1; i >= 0 || r < l.length;){
        if (i >= 0) {
            if ((f = l[i]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return i;
            i--;
        }
        if (r < l.length) {
            if ((f = l[r]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return r;
            r++;
        }
    }
    return -1;
}
function $b6c7f0288a15c619$var$T(n, l, u) {
    "-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || $b6c7f0288a15c619$var$v.test(l) ? u : u + "px";
}
function $b6c7f0288a15c619$var$j(n, l, u, t, i) {
    var r;
    n: if ("style" == l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || $b6c7f0288a15c619$var$T(n.style, l, "");
            if (u) for(l in u)t && u[l] == t[l] || $b6c7f0288a15c619$var$T(n.style, l, u[l]);
        }
    } else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace($b6c7f0288a15c619$var$f, "$1")), l = l.toLowerCase() in n || "onFocusOut" == l || "onFocusIn" == l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u.u = t.u : (u.u = $b6c7f0288a15c619$var$c, n.addEventListener(l, r ? $b6c7f0288a15c619$var$a : $b6c7f0288a15c619$var$s, r)) : n.removeEventListener(l, r ? $b6c7f0288a15c619$var$a : $b6c7f0288a15c619$var$s, r);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
    }
}
function $b6c7f0288a15c619$var$F(n) {
    return function(u) {
        if (this.l) {
            var t = this.l[u.type + n];
            if (null == u.t) u.t = $b6c7f0288a15c619$var$c++;
            else if (u.t < t.u) return;
            return t($b6c7f0288a15c619$export$41c562ebe57d11e2.event ? $b6c7f0288a15c619$export$41c562ebe57d11e2.event(u) : u);
        }
    };
}
function $b6c7f0288a15c619$var$O(n, u, t, i, r, o, e, f, c, s) {
    var a, h, p, y, v, _, m, b, S, C, M, $, P, A, H, L, T, j = u.type;
    if (null != u.constructor) return null;
    128 & t.__u && (c = !!(32 & t.__u), o = [
        f = u.__e = t.__e
    ]), (a = $b6c7f0288a15c619$export$41c562ebe57d11e2.__b) && a(u);
    n: if ("function" == typeof j) try {
        if (b = u.props, S = "prototype" in j && j.prototype.render, C = (a = j.contextType) && i[a.__c], M = a ? C ? C.props.value : a.__ : i, t.__c ? m = (h = u.__c = t.__c).__ = h.__E : (S ? u.__c = h = new j(b, M) : (u.__c = h = new $b6c7f0288a15c619$export$16fa2f45be04daa8(b, M), h.constructor = j, h.render = $b6c7f0288a15c619$var$D), C && C.sub(h), h.props = b, h.state || (h.state = {}), h.context = M, h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), S && null == h.__s && (h.__s = h.state), S && null != j.getDerivedStateFromProps && (h.__s == h.state && (h.__s = $b6c7f0288a15c619$var$d({}, h.__s)), $b6c7f0288a15c619$var$d(h.__s, j.getDerivedStateFromProps(b, h.__s))), y = h.props, v = h.state, h.__v = u, p) S && null == j.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (S && null == j.getDerivedStateFromProps && b !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(b, M), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(b, h.__s, M) || u.__v == t.__v) {
                for(u.__v != t.__v && (h.props = b, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
                    n && (n.__ = u);
                }), $ = 0; $ < h._sb.length; $++)h.__h.push(h._sb[$]);
                h._sb = [], h.__h.length && e.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(b, h.__s, M), S && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(y, v, _);
            });
        }
        if (h.context = M, h.props = b, h.__P = n, h.__e = !1, P = $b6c7f0288a15c619$export$41c562ebe57d11e2.__r, A = 0, S) {
            for(h.state = h.__s, h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
            h._sb = [];
        } else do h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        while (h.__d && ++A < 25);
        h.state = h.__s, null != h.getChildContext && (i = $b6c7f0288a15c619$var$d($b6c7f0288a15c619$var$d({}, i), h.getChildContext())), S && !p && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(y, v)), L = a, null != a && a.type === $b6c7f0288a15c619$export$ffb0004e005737fa && null == a.key && (L = $b6c7f0288a15c619$var$N(a.props.children)), f = $b6c7f0288a15c619$var$I(n, $b6c7f0288a15c619$var$w(L) ? L : [
            L
        ], u, t, i, r, o, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), m && (h.__E = h.__ = null);
    } catch (n) {
        if (u.__v = null, c || null != o) {
            if (n.then) {
                for(u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;)f = f.nextSibling;
                o[o.indexOf(f)] = null, u.__e = f;
            } else for(T = o.length; T--;)$b6c7f0288a15c619$var$g(o[T]);
        } else u.__e = t.__e, u.__k = t.__k;
        $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u, t);
    }
    else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = $b6c7f0288a15c619$var$V(t.__e, u, t, i, r, o, e, c, s);
    return (a = $b6c7f0288a15c619$export$41c562ebe57d11e2.diffed) && a(u), 128 & u.__u ? void 0 : f;
}
function $b6c7f0288a15c619$var$z(n, u, t) {
    for(var i = 0; i < t.length; i++)$b6c7f0288a15c619$var$q(t[i], t[++i], t[++i]);
    $b6c7f0288a15c619$export$41c562ebe57d11e2.__c && $b6c7f0288a15c619$export$41c562ebe57d11e2.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u.__v);
        }
    });
}
function $b6c7f0288a15c619$var$N(n) {
    return "object" != typeof n || null == n || n.__b && n.__b > 0 ? n : $b6c7f0288a15c619$var$w(n) ? n.map($b6c7f0288a15c619$var$N) : $b6c7f0288a15c619$var$d({}, n);
}
function $b6c7f0288a15c619$var$V(u, t, i, r, o, e, f, c, s) {
    var a, h, y, v, d, _, m, b = i.props, k = t.props, x = t.type;
    if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
        for(a = 0; a < e.length; a++)if ((d = e[a]) && "setAttribute" in d == !!x && (x ? d.localName == x : 3 == d.nodeType)) {
            u = d, e[a] = null;
            break;
        }
    }
    if (null == u) {
        if (null == x) return document.createTextNode(k);
        u = document.createElementNS(o, x, k.is && k), c && ($b6c7f0288a15c619$export$41c562ebe57d11e2.__m && $b6c7f0288a15c619$export$41c562ebe57d11e2.__m(t, e), c = !1), e = null;
    }
    if (null == x) b === k || c && u.data == k || (u.data = k);
    else {
        if (e = e && $b6c7f0288a15c619$var$n.call(u.childNodes), b = i.props || $b6c7f0288a15c619$var$p, !c && null != e) for(b = {}, a = 0; a < u.attributes.length; a++)b[(d = u.attributes[a]).name] = d.value;
        for(a in b)if (d = b[a], "children" == a) ;
        else if ("dangerouslySetInnerHTML" == a) y = d;
        else if (!(a in k)) {
            if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
            $b6c7f0288a15c619$var$j(u, a, null, d, o);
        }
        for(a in k)d = k[a], "children" == a ? v = d : "dangerouslySetInnerHTML" == a ? h = d : "value" == a ? _ = d : "checked" == a ? m = d : c && "function" != typeof d || b[a] === d || $b6c7f0288a15c619$var$j(u, a, d, b[a], o);
        if (h) c || y && (h.__html == y.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
        else if (y && (u.innerHTML = ""), $b6c7f0288a15c619$var$I("template" == t.type ? u.content : u, $b6c7f0288a15c619$var$w(v) ? v : [
            v
        ], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && $b6c7f0288a15c619$var$S(i, 0), c, s), null != e) for(a = e.length; a--;)$b6c7f0288a15c619$var$g(e[a]);
        c || (a = "value", "progress" == x && null == _ ? u.removeAttribute("value") : null != _ && (_ !== u[a] || "progress" == x && !_ || "option" == x && _ != b[a]) && $b6c7f0288a15c619$var$j(u, a, _, b[a], o), a = "checked", null != m && m != u[a] && $b6c7f0288a15c619$var$j(u, a, m, b[a], o));
    }
    return u;
}
function $b6c7f0288a15c619$var$q(n, u, t) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == u || (n.__u = n(u));
        } else n.current = u;
    } catch (n) {
        $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, t);
    }
}
function $b6c7f0288a15c619$var$B(n, u, t) {
    var i, r;
    if ($b6c7f0288a15c619$export$41c562ebe57d11e2.unmount && $b6c7f0288a15c619$export$41c562ebe57d11e2.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || $b6c7f0288a15c619$var$q(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(r = 0; r < i.length; r++)i[r] && $b6c7f0288a15c619$var$B(i[r], u, t || "function" != typeof n.type);
    t || $b6c7f0288a15c619$var$g(n.__e), n.__c = n.__ = n.__e = void 0;
}
function $b6c7f0288a15c619$var$D(n, l, u) {
    return this.constructor(n, u);
}
function $b6c7f0288a15c619$export$b3890eb0ae9dca99(u, t, i) {
    var r, o, e, f;
    t == document && (t = document.documentElement), $b6c7f0288a15c619$export$41c562ebe57d11e2.__ && $b6c7f0288a15c619$export$41c562ebe57d11e2.__(u, t), o = (r = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], $b6c7f0288a15c619$var$O(t, u = (!r && i || t).__k = $b6c7f0288a15c619$export$c8a8987d4410bf2d($b6c7f0288a15c619$export$ffb0004e005737fa, null, [
        u
    ]), o || $b6c7f0288a15c619$var$p, $b6c7f0288a15c619$var$p, t.namespaceURI, !r && i ? [
        i
    ] : o ? null : t.firstChild ? $b6c7f0288a15c619$var$n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), $b6c7f0288a15c619$var$z(e, u, f);
}
function $b6c7f0288a15c619$export$fa8d919ba61d84db(n, l) {
    $b6c7f0288a15c619$export$b3890eb0ae9dca99(n, l, $b6c7f0288a15c619$export$fa8d919ba61d84db);
}
function $b6c7f0288a15c619$export$e530037191fcd5d7(l, u, t) {
    var i, r, o, e, f = $b6c7f0288a15c619$var$d({}, l.props);
    for(o in l.type && l.type.defaultProps && (e = l.type.defaultProps), u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : f[o] = null == u[o] && null != e ? e[o] : u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? $b6c7f0288a15c619$var$n.call(arguments, 2) : t), $b6c7f0288a15c619$var$m(l.type, f, i || l.key, r || l.ref, null);
}
function $b6c7f0288a15c619$export$fd42f52fd3ae1109(n) {
    function l(n) {
        var u, t;
        return this.getChildContext || (u = new Set, (t = {})[l.__c] = this, this.getChildContext = function() {
            return t;
        }, this.componentWillUnmount = function() {
            u = null;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value != n.value && u.forEach(function(n) {
                n.__e = !0, $b6c7f0288a15c619$var$M(n);
            });
        }, this.sub = function(n) {
            u.add(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                u && u.delete(n), l && l.call(n);
            };
        }), n.children;
    }
    return l.__c = "__cC" + $b6c7f0288a15c619$var$h++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
        return n.children(l);
    }).contextType = l, l;
}
$b6c7f0288a15c619$var$n = $b6c7f0288a15c619$var$y.slice, $b6c7f0288a15c619$export$41c562ebe57d11e2 = {
    __e: function(n, l, u, t) {
        for(var i, r, o; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, $b6c7f0288a15c619$var$u = 0, $b6c7f0288a15c619$export$a8257692ac88316c = function(n) {
    return null != n && null == n.constructor;
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s != this.state ? this.__s : this.__s = $b6c7f0288a15c619$var$d({}, this.state), "function" == typeof n && (n = n($b6c7f0288a15c619$var$d({}, u), this.props)), n && $b6c7f0288a15c619$var$d(u, n), null != n && this.__v && (l && this._sb.push(l), $b6c7f0288a15c619$var$M(this));
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $b6c7f0288a15c619$var$M(this));
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.render = $b6c7f0288a15c619$export$ffb0004e005737fa, $b6c7f0288a15c619$var$i = [], $b6c7f0288a15c619$var$o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $b6c7f0288a15c619$var$e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, $b6c7f0288a15c619$var$$.__r = 0, $b6c7f0288a15c619$var$f = /(PointerCapture)$|Capture$/i, $b6c7f0288a15c619$var$c = 0, $b6c7f0288a15c619$var$s = $b6c7f0288a15c619$var$F(!1), $b6c7f0288a15c619$var$a = $b6c7f0288a15c619$var$F(!0), $b6c7f0288a15c619$var$h = 0;
var $23b7c1cb98b19658$var$t = /["&<]/;
function $23b7c1cb98b19658$var$n(r) {
    if (0 === r.length || !1 === $23b7c1cb98b19658$var$t.test(r)) return r;
    for(var e = 0, n = 0, o = "", f = ""; n < r.length; n++){
        switch(r.charCodeAt(n)){
            case 34:
                f = "&quot;";
                break;
            case 38:
                f = "&amp;";
                break;
            case 60:
                f = "&lt;";
                break;
            default:
                continue;
        }
        n !== e && (o += r.slice(e, n)), o += f, e = n + 1;
    }
    return n !== e && (o += r.slice(e, n)), o;
}
var $23b7c1cb98b19658$var$o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $23b7c1cb98b19658$var$f = 0, $23b7c1cb98b19658$var$i = Array.isArray;
function $23b7c1cb98b19658$export$34b9dba7ce09269b(e, t, n, o, i, u) {
    t || (t = {});
    var a, c, p = t;
    if ("ref" in p) for(c in p = {}, t)"ref" == c ? a = t[c] : p[c] = t[c];
    var l = {
        type: e,
        props: p,
        key: n,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --$23b7c1cb98b19658$var$f,
        __i: -1,
        __u: 0,
        __source: i,
        __self: u
    };
    if ("function" == typeof e && (a = e.defaultProps)) for(c in a)void 0 === p[c] && (p[c] = a[c]);
    return $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(l), l;
}
function $23b7c1cb98b19658$export$45700d561b2268ac(r) {
    var t = $23b7c1cb98b19658$export$34b9dba7ce09269b($b6c7f0288a15c619$export$ffb0004e005737fa, {
        tpl: r,
        exprs: [].slice.call(arguments, 1)
    });
    return t.key = t.__v, t;
}
var $23b7c1cb98b19658$var$c = {}, $23b7c1cb98b19658$var$p = /[A-Z]/g;
function $23b7c1cb98b19658$export$991f6ffe102e5bac(e, t) {
    if ($b6c7f0288a15c619$export$41c562ebe57d11e2.attr) {
        var f = $b6c7f0288a15c619$export$41c562ebe57d11e2.attr(e, t);
        if ("string" == typeof f) return f;
    }
    if ("ref" === e || "key" === e) return "";
    if ("style" === e && "object" == typeof t) {
        var i = "";
        for(var u in t){
            var a = t[u];
            if (null != a && "" !== a) {
                var l = "-" == u[0] ? u : $23b7c1cb98b19658$var$c[u] || ($23b7c1cb98b19658$var$c[u] = u.replace($23b7c1cb98b19658$var$p, "-$&").toLowerCase()), s = ";";
                "number" != typeof a || l.startsWith("--") || $23b7c1cb98b19658$var$o.test(l) || (s = "px;"), i = i + l + ":" + a + s;
            }
        }
        return e + '="' + i + '"';
    }
    return null == t || !1 === t || "function" == typeof t || "object" == typeof t ? "" : !0 === t ? e : e + '="' + $23b7c1cb98b19658$var$n(t) + '"';
}
function $23b7c1cb98b19658$export$40e96e718441efeb(r) {
    if (null == r || "boolean" == typeof r || "function" == typeof r) return null;
    if ("object" == typeof r) {
        if (void 0 === r.constructor) return r;
        if ($23b7c1cb98b19658$var$i(r)) {
            for(var e = 0; e < r.length; e++)r[e] = $23b7c1cb98b19658$export$40e96e718441efeb(r[e]);
            return r;
        }
    }
    return $23b7c1cb98b19658$var$n("" + r);
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $883a43040cbd0629$var$boundErrorHandler = null;
function $883a43040cbd0629$var$errorHandler(callback, e) {
    // $FlowFixMe
    if (!e.error) return;
    // $FlowFixMe
    const { error: error } = e;
    if (error instanceof Error) callback(error);
    else // Look in your browser's devtools for more information
    callback(new Error(error));
}
function $883a43040cbd0629$export$6503ec6e8aabbaf(target, callback) {
    if ($883a43040cbd0629$var$boundErrorHandler !== null) return;
    $883a43040cbd0629$var$boundErrorHandler = $883a43040cbd0629$var$errorHandler.bind(undefined, callback);
    target.addEventListener('error', $883a43040cbd0629$var$boundErrorHandler);
}
function $883a43040cbd0629$export$d07f55d4c15c0440(target) {
    if ($883a43040cbd0629$var$boundErrorHandler === null) return;
    target.removeEventListener('error', $883a43040cbd0629$var$boundErrorHandler);
    $883a43040cbd0629$var$boundErrorHandler = null;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $900f8c32b7484e20$var$boundRejectionHandler = null;
function $900f8c32b7484e20$var$rejectionHandler(callback, e) {
    if (e == null || e.reason == null) return callback(new Error('Unknown'));
    let { reason: reason } = e;
    if (reason instanceof Error) return callback(reason);
    // A non-error was rejected, we don't have a trace :(
    // Look in your browser's devtools for more information
    return callback(new Error(reason));
}
function $900f8c32b7484e20$export$6503ec6e8aabbaf(target, callback) {
    if ($900f8c32b7484e20$var$boundRejectionHandler !== null) return;
    $900f8c32b7484e20$var$boundRejectionHandler = $900f8c32b7484e20$var$rejectionHandler.bind(undefined, callback);
    // $FlowFixMe
    target.addEventListener('unhandledrejection', $900f8c32b7484e20$var$boundRejectionHandler);
}
function $900f8c32b7484e20$export$d07f55d4c15c0440(target) {
    if ($900f8c32b7484e20$var$boundRejectionHandler === null) return;
    // $FlowFixMe
    target.removeEventListener('unhandledrejection', $900f8c32b7484e20$var$boundRejectionHandler);
    $900f8c32b7484e20$var$boundRejectionHandler = null;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $5f72ade198404e99$var$stackTraceRegistered = false;
// Default: https://docs.microsoft.com/en-us/scripting/javascript/reference/stacktracelimit-property-error-javascript
let $5f72ade198404e99$var$restoreStackTraceValue = 10;
const $5f72ade198404e99$var$MAX_STACK_LENGTH = 50;
function $5f72ade198404e99$export$6503ec6e8aabbaf(limit = $5f72ade198404e99$var$MAX_STACK_LENGTH) {
    if ($5f72ade198404e99$var$stackTraceRegistered) return;
    try {
        $5f72ade198404e99$var$restoreStackTraceValue = Error.stackTraceLimit;
        Error.stackTraceLimit = limit;
        $5f72ade198404e99$var$stackTraceRegistered = true;
    } catch (e) {
    // Not all browsers support this so we don't care if it errors
    }
}
function $5f72ade198404e99$export$d07f55d4c15c0440() {
    if (!$5f72ade198404e99$var$stackTraceRegistered) return;
    try {
        Error.stackTraceLimit = $5f72ade198404e99$var$restoreStackTraceValue;
        $5f72ade198404e99$var$stackTraceRegistered = false;
    } catch (e) {
    // Not all browsers support this so we don't care if it errors
    }
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * A representation of a stack frame.
 */ class $d35756f426c25812$export$8949fddf10447898 {
    constructor(functionName = null, fileName = null, lineNumber = null, columnNumber = null, scriptCode = null, sourceFunctionName = null, sourceFileName = null, sourceLineNumber = null, sourceColumnNumber = null, sourceScriptCode = null){
        if (functionName && functionName.indexOf('Object.') === 0) functionName = functionName.slice(7);
        if (// https://github.com/facebook/create-react-app/issues/2097
        // Let's ignore a meaningless name we get for top-level modules.
        functionName === 'friendlySyntaxErrorLabel' || functionName === 'exports.__esModule' || functionName === '<anonymous>' || !functionName) functionName = null;
        this.functionName = functionName;
        this.fileName = fileName;
        this.lineNumber = lineNumber;
        this.columnNumber = columnNumber;
        this._originalFunctionName = sourceFunctionName;
        this._originalFileName = sourceFileName;
        this._originalLineNumber = sourceLineNumber;
        this._originalColumnNumber = sourceColumnNumber;
        this._scriptCode = scriptCode;
        this._originalScriptCode = sourceScriptCode;
    }
    /**
   * Returns the name of this function.
   */ getFunctionName() {
        return this.functionName || '(anonymous function)';
    }
    /**
   * Returns the source of the frame.
   * This contains the file name, line number, and column number when available.
   */ getSource() {
        let str = '';
        if (this.fileName != null) str += this.fileName + ':';
        if (this.lineNumber != null) str += this.lineNumber + ':';
        if (this.columnNumber != null) str += this.columnNumber + ':';
        return str.slice(0, -1);
    }
    /**
   * Returns a pretty version of this stack frame.
   */ toString() {
        const functionName = this.getFunctionName();
        const source = this.getSource();
        return `${functionName}${source ? ` (${source})` : ``}`;
    }
}
var $d35756f426c25812$export$2e2bcd8739ae039 = $d35756f426c25812$export$8949fddf10447898;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $865b9ffc545cb441$var$regexExtractLocation = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;
function $865b9ffc545cb441$var$extractLocation(token) {
    return $865b9ffc545cb441$var$regexExtractLocation.exec(token) // $FlowFixMe
    .slice(1).map((v)=>{
        const p = Number(v);
        if (!isNaN(p)) return p;
        return v;
    });
}
const $865b9ffc545cb441$var$regexValidFrame_Chrome = /^\s*(at|in)\s.+(:\d+)/;
const $865b9ffc545cb441$var$regexValidFrame_FireFox = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;
function $865b9ffc545cb441$var$parseStack(stack) {
    let frames = stack.filter((e)=>$865b9ffc545cb441$var$regexValidFrame_Chrome.test(e) || $865b9ffc545cb441$var$regexValidFrame_FireFox.test(e)).map((e)=>{
        if ($865b9ffc545cb441$var$regexValidFrame_FireFox.test(e)) {
            // Strip eval, we don't care about it
            let isEval = false;
            if (/ > (eval|Function)/.test(e)) {
                e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ':$1');
                isEval = true;
            }
            const data = e.split(/[@]/g);
            const last = data.pop();
            return new $d35756f426c25812$export$2e2bcd8739ae039(data.join('@') || (isEval ? 'eval' : null), ...$865b9ffc545cb441$var$extractLocation(last));
        } else {
            // Strip eval, we don't care about it
            if (e.indexOf('(eval ') !== -1) e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
            if (e.indexOf('(at ') !== -1) e = e.replace(/\(at /, '(');
            const data = e.trim().split(/\s+/g).slice(1);
            const last = data.pop();
            return new $d35756f426c25812$export$2e2bcd8739ae039(data.join(' ') || null, ...$865b9ffc545cb441$var$extractLocation(last));
        }
    });
    let index = frames.findIndex((frame)=>frame.getFunctionName().includes('react-stack-bottom-frame'));
    if (index >= 0) frames = frames.slice(0, index);
    return frames;
}
/**
 * Turns an <code>Error</code>, or similar object, into a set of <code>StackFrame</code>s.
 * @alias parse
 */ function $865b9ffc545cb441$export$98e6a39c04603d36(error) {
    if (error == null) throw new Error('You cannot pass a null object.');
    if (typeof error === 'string') return $865b9ffc545cb441$var$parseStack(error.split('\n'));
    if (Array.isArray(error)) return $865b9ffc545cb441$var$parseStack(error);
    if (typeof error.stack === 'string') return $865b9ffc545cb441$var$parseStack(error.stack.split('\n'));
    throw new Error('The error you provided does not contain a stack trace.');
}
var $865b9ffc545cb441$export$2e2bcd8739ae039 = $865b9ffc545cb441$export$98e6a39c04603d36;
/**
 * Enhances a set of <code>StackFrame</code>s with their original positions and code (when available).
 * @param {StackFrame[]} frames A set of <code>StackFrame</code>s which contain (generated) code positions.
 * @param {number} [contextLines=3] The number of lines to provide before and after the line specified in the <code>StackFrame</code>.
 */ async function $df495b51087c401c$export$35b6448019ed80b8(error, contextLines = 3) {
    const frames = $865b9ffc545cb441$export$98e6a39c04603d36(error);
    // $FlowFixMe
    let res = await fetch(module.bundle.devServer + '/__parcel_code_frame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contextLines: contextLines,
            frames: frames.map((f)=>({
                    fileName: f.fileName,
                    lineNumber: f.lineNumber,
                    columnNumber: f.columnNumber
                }))
        })
    });
    let json = await res.json();
    return json.map((f, i)=>new $d35756f426c25812$export$8949fddf10447898(frames[i].functionName, f.fileName, f.lineNumber, f.columnNumber, f.compiledLines, frames[i].functionName, f.sourceFileName, f.sourceLineNumber, f.sourceColumnNumber, f.sourceLines));
}
var $df495b51087c401c$export$2e2bcd8739ae039 = $df495b51087c401c$export$35b6448019ed80b8;
const $6d40ebe8356580e0$var$CONTEXT_SIZE = 3;
function $6d40ebe8356580e0$export$9123e6c9c0ac21ed(crash) {
    return (error, unhandledRejection = false)=>{
        $df495b51087c401c$export$2e2bcd8739ae039(error, $6d40ebe8356580e0$var$CONTEXT_SIZE).then((stackFrames)=>{
            if (stackFrames == null) return;
            crash({
                error: error,
                unhandledRejection: unhandledRejection,
                contextSize: $6d40ebe8356580e0$var$CONTEXT_SIZE,
                stackFrames: stackFrames
            });
        }).catch((e)=>{
            // eslint-disable-next-line no-console
            console.log('Could not get the stack frames of error:', e);
        });
    };
}
function $6d40ebe8356580e0$var$patchConsole(method, onError) {
    /* eslint-disable no-console */ let original = console[method];
    console[method] = (...args)=>{
        let error = null;
        if (typeof args[0] === 'string') {
            let format = args[0].match(/%[oOdisfc]/g);
            if (format) {
                let errorIndex = format.findIndex((match)=>match === '%o' || match === '%O');
                if (errorIndex < 0) errorIndex = format.findIndex((match)=>match === '%s');
                if (errorIndex >= 0) error = args[errorIndex + 1];
                else error = args[1];
                if (!(error instanceof Error)) {
                    let index = 1;
                    let message = args[0].replace(/%[oOdisfc]/g, (match)=>{
                        switch(match){
                            case '%s':
                                return String(args[index++]);
                            case '%f':
                                return parseFloat(args[index++]);
                            case '%d':
                            case '%i':
                                return parseInt(args[index++], 10);
                            case '%o':
                            case '%O':
                                if (args[index] instanceof Error) return String(args[index++]);
                                else return JSON.stringify(args[index++]);
                            case '%c':
                                index++;
                                return '';
                        }
                    });
                    error = new Error(message);
                }
            } else error = new Error(args[0]);
        } else error = args.find((arg)=>arg instanceof Error);
        if (error && !error.message.includes('[parcel]') && typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
            // Attempt to append the React component stack
            // TODO: use React.captureOwnerStack once stable.
            let hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (hook.renderers instanceof Map) {
                for (let renderer of hook.renderers.values())if (typeof renderer?.currentDispatcherRef?.getCurrentStack === 'function') {
                    let stack = renderer.currentDispatcherRef.getCurrentStack();
                    if (stack) {
                        error.stack += stack;
                        break;
                    }
                }
            }
            onError(error);
        }
        original.apply(console, args);
    };
/* eslint-enable no-console */ }
function $6d40ebe8356580e0$export$38ec23daa6e8dcdf(crash) {
    const crashWithFramesRunTime = $6d40ebe8356580e0$export$9123e6c9c0ac21ed(crash);
    $883a43040cbd0629$export$6503ec6e8aabbaf(window, (error)=>crashWithFramesRunTime(error, false));
    $900f8c32b7484e20$export$6503ec6e8aabbaf(window, (error)=>crashWithFramesRunTime(error, true));
    $5f72ade198404e99$export$6503ec6e8aabbaf();
    $6d40ebe8356580e0$var$patchConsole('error', (error)=>crashWithFramesRunTime(error, false));
    return function() {
        $5f72ade198404e99$export$d07f55d4c15c0440();
        $900f8c32b7484e20$export$d07f55d4c15c0440(window);
        $883a43040cbd0629$export$d07f55d4c15c0440(window);
    };
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ var $10ecac3e4062713a$var$t, $10ecac3e4062713a$var$r, $10ecac3e4062713a$var$u, $10ecac3e4062713a$var$i, $10ecac3e4062713a$var$o = 0, $10ecac3e4062713a$var$f = [], $10ecac3e4062713a$var$c = $b6c7f0288a15c619$export$41c562ebe57d11e2, $10ecac3e4062713a$var$e = $10ecac3e4062713a$var$c.__b, $10ecac3e4062713a$var$a = $10ecac3e4062713a$var$c.__r, $10ecac3e4062713a$var$v = $10ecac3e4062713a$var$c.diffed, $10ecac3e4062713a$var$l = $10ecac3e4062713a$var$c.__c, $10ecac3e4062713a$var$m = $10ecac3e4062713a$var$c.unmount, $10ecac3e4062713a$var$s = $10ecac3e4062713a$var$c.__;
function $10ecac3e4062713a$var$p(n, t) {
    $10ecac3e4062713a$var$c.__h && $10ecac3e4062713a$var$c.__h($10ecac3e4062713a$var$r, n, $10ecac3e4062713a$var$o || t), $10ecac3e4062713a$var$o = 0;
    var u = $10ecac3e4062713a$var$r.__H || ($10ecac3e4062713a$var$r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({}), u.__[n];
}
function $10ecac3e4062713a$export$60241385465d0a34(n) {
    return $10ecac3e4062713a$var$o = 1, $10ecac3e4062713a$export$13e3392192263954($10ecac3e4062713a$var$D, n);
}
function $10ecac3e4062713a$export$13e3392192263954(n, u, i) {
    var o = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : $10ecac3e4062713a$var$D(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = $10ecac3e4062713a$var$r, !$10ecac3e4062713a$var$r.__f)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return !!n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = o.__c.props !== n;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), c && c.call(this, n, t, r) || i;
        };
        $10ecac3e4062713a$var$r.__f = !0;
        var c = $10ecac3e4062713a$var$r.shouldComponentUpdate, e = $10ecac3e4062713a$var$r.componentWillUpdate;
        $10ecac3e4062713a$var$r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, $10ecac3e4062713a$var$r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function $10ecac3e4062713a$export$6d9c69b0de29b591(n, u) {
    var i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 3);
    !$10ecac3e4062713a$var$c.__s && $10ecac3e4062713a$var$C(i.__H, u) && (i.__ = n, i.u = u, $10ecac3e4062713a$var$r.__H.__h.push(i));
}
function $10ecac3e4062713a$export$e5c5a5f917a5871c(n, u) {
    var i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 4);
    !$10ecac3e4062713a$var$c.__s && $10ecac3e4062713a$var$C(i.__H, u) && (i.__ = n, i.u = u, $10ecac3e4062713a$var$r.__h.push(i));
}
function $10ecac3e4062713a$export$b8f5890fc79d6aca(n) {
    return $10ecac3e4062713a$var$o = 5, $10ecac3e4062713a$export$1538c33de8887b59(function() {
        return {
            current: n
        };
    }, []);
}
function $10ecac3e4062713a$export$d5a552a76deda3c2(n, t, r) {
    $10ecac3e4062713a$var$o = 6, $10ecac3e4062713a$export$e5c5a5f917a5871c(function() {
        if ("function" == typeof n) {
            var r = n(t());
            return function() {
                n(null), r && "function" == typeof r && r();
            };
        }
        if (n) return n.current = t(), function() {
            return n.current = null;
        };
    }, null == r ? r : r.concat(n));
}
function $10ecac3e4062713a$export$1538c33de8887b59(n, r) {
    var u = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 7);
    return $10ecac3e4062713a$var$C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function $10ecac3e4062713a$export$35808ee640e87ca7(n, t) {
    return $10ecac3e4062713a$var$o = 8, $10ecac3e4062713a$export$1538c33de8887b59(function() {
        return n;
    }, t);
}
function $10ecac3e4062713a$export$fae74005e78b1a27(n) {
    var u = $10ecac3e4062713a$var$r.context[n.__c], i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub($10ecac3e4062713a$var$r)), u.props.value) : n.__;
}
function $10ecac3e4062713a$export$dc8fbce3eb94dc1e(n, t) {
    $10ecac3e4062713a$var$c.useDebugValue && $10ecac3e4062713a$var$c.useDebugValue(t ? t(n) : n);
}
function $10ecac3e4062713a$export$c052f6604b7d51fe(n) {
    var u = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 10), i = $10ecac3e4062713a$export$60241385465d0a34();
    return u.__ = n, $10ecac3e4062713a$var$r.componentDidCatch || ($10ecac3e4062713a$var$r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function $10ecac3e4062713a$export$f680877a34711e37() {
    var n = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 11);
    if (!n.__) {
        for(var u = $10ecac3e4062713a$var$r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function $10ecac3e4062713a$var$j() {
    for(var n; n = $10ecac3e4062713a$var$f.shift();)if (n.__P && n.__H) try {
        n.__H.__h.forEach($10ecac3e4062713a$var$z), n.__H.__h.forEach($10ecac3e4062713a$var$B), n.__H.__h = [];
    } catch (t) {
        n.__H.__h = [], $10ecac3e4062713a$var$c.__e(t, n.__v);
    }
}
$10ecac3e4062713a$var$c.__b = function(n) {
    $10ecac3e4062713a$var$r = null, $10ecac3e4062713a$var$e && $10ecac3e4062713a$var$e(n);
}, $10ecac3e4062713a$var$c.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), $10ecac3e4062713a$var$s && $10ecac3e4062713a$var$s(n, t);
}, $10ecac3e4062713a$var$c.__r = function(n) {
    $10ecac3e4062713a$var$a && $10ecac3e4062713a$var$a(n), $10ecac3e4062713a$var$t = 0;
    var i = ($10ecac3e4062713a$var$r = n.__c).__H;
    i && ($10ecac3e4062713a$var$u === $10ecac3e4062713a$var$r ? (i.__h = [], $10ecac3e4062713a$var$r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (i.__h.forEach($10ecac3e4062713a$var$z), i.__h.forEach($10ecac3e4062713a$var$B), i.__h = [], $10ecac3e4062713a$var$t = 0)), $10ecac3e4062713a$var$u = $10ecac3e4062713a$var$r;
}, $10ecac3e4062713a$var$c.diffed = function(n) {
    $10ecac3e4062713a$var$v && $10ecac3e4062713a$var$v(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (1 !== $10ecac3e4062713a$var$f.push(t) && $10ecac3e4062713a$var$i === $10ecac3e4062713a$var$c.requestAnimationFrame || (($10ecac3e4062713a$var$i = $10ecac3e4062713a$var$c.requestAnimationFrame) || $10ecac3e4062713a$var$w)($10ecac3e4062713a$var$j)), t.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u), n.u = void 0;
    })), $10ecac3e4062713a$var$u = $10ecac3e4062713a$var$r = null;
}, $10ecac3e4062713a$var$c.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.forEach($10ecac3e4062713a$var$z), n.__h = n.__h.filter(function(n) {
                return !n.__ || $10ecac3e4062713a$var$B(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], $10ecac3e4062713a$var$c.__e(r, n.__v);
        }
    }), $10ecac3e4062713a$var$l && $10ecac3e4062713a$var$l(n, t);
}, $10ecac3e4062713a$var$c.unmount = function(n) {
    $10ecac3e4062713a$var$m && $10ecac3e4062713a$var$m(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            $10ecac3e4062713a$var$z(n);
        } catch (n) {
            t = n;
        }
    }), r.__H = void 0, t && $10ecac3e4062713a$var$c.__e(t, r.__v));
};
var $10ecac3e4062713a$var$k = "function" == typeof requestAnimationFrame;
function $10ecac3e4062713a$var$w(n) {
    var t, r = function() {
        clearTimeout(u), $10ecac3e4062713a$var$k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    $10ecac3e4062713a$var$k && (t = requestAnimationFrame(r));
}
function $10ecac3e4062713a$var$z(n) {
    var t = $10ecac3e4062713a$var$r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), $10ecac3e4062713a$var$r = t;
}
function $10ecac3e4062713a$var$B(n) {
    var t = $10ecac3e4062713a$var$r;
    n.__c = n.__(), $10ecac3e4062713a$var$r = t;
}
function $10ecac3e4062713a$var$C(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function $10ecac3e4062713a$var$D(n, t) {
    return "function" == typeof t ? t(n) : t;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $74bb4be6e9b78681$export$f30cb9bc4f736419 = {
    // Colors for components styles
    background: 'white',
    color: 'black',
    headerColor: '#ce1126',
    primaryPreBackground: 'rgba(206, 17, 38, 0.05)',
    primaryPreColor: 'inherit',
    secondaryPreBackground: 'rgba(251, 245, 180, 0.3)',
    secondaryPreColor: 'inherit',
    footer: '#878e91',
    anchorColor: '#878e91',
    toggleBackground: 'transparent',
    toggleColor: '#878e91',
    closeColor: '#293238',
    navBackground: 'rgba(206, 17, 38, 0.05)',
    navArrow: '#ce1126',
    diffAdded: 'green',
    diffRemoved: '#ce1126',
    // Light color scheme inspired by https://chriskempson.github.io/base16/css/base16-github.css
    // base00: '#ffffff',
    base01: '#f5f5f5',
    // base02: '#c8c8fa',
    base03: '#6e6e6e',
    // base04: '#e8e8e8',
    base05: '#333333',
    // base06: '#ffffff',
    // base07: '#ffffff',
    base08: '#881280',
    // base09: '#0086b3',
    // base0A: '#795da3',
    base0B: '#1155cc',
    base0C: '#994500',
    // base0D: '#795da3',
    base0E: '#c80000'
};
const $74bb4be6e9b78681$export$3e936a8db52a10a0 = {
    // Colors for components styles
    background: '#353535',
    color: 'white',
    headerColor: '#e83b46',
    primaryPreBackground: 'rgba(206, 17, 38, 0.1)',
    primaryPreColor: '#fccfcf',
    secondaryPreBackground: 'rgba(251, 245, 180, 0.1)',
    secondaryPreColor: '#fbf5b4',
    footer: '#878e91',
    anchorColor: '#878e91',
    toggleBackground: 'transparent',
    toggleColor: '#878e91',
    closeColor: '#ffffff',
    navBackground: 'rgba(206, 17, 38, 0.2)',
    navArrow: '#ce1126',
    diffAdded: '#85e285',
    diffRemoved: '#ff5459',
    // Dark color scheme inspired by https://github.com/atom/base16-tomorrow-dark-theme/blob/master/styles/colors.less
    // base00: '#1d1f21',
    base01: '#282a2e',
    // base02: '#373b41',
    base03: '#969896',
    // base04: '#b4b7b4',
    base05: '#c5c8c6',
    // base06: '#e0e0e0',
    // base07: '#ffffff',
    base08: '#cc6666',
    // base09: '#de935f',
    // base0A: '#f0c674',
    base0B: '#b5bd68',
    base0C: '#8abeb7',
    // base0D: '#81a2be',
    base0E: '#b294bb'
};
const $74bb4be6e9b78681$export$bca14c5b3b88a9c9 = Object.fromEntries(Object.keys($74bb4be6e9b78681$export$f30cb9bc4f736419).map((key)=>[
        key,
        `light-dark(${$74bb4be6e9b78681$export$f30cb9bc4f736419[key]}, ${$74bb4be6e9b78681$export$3e936a8db52a10a0[key]})`
    ]));
const $74bb4be6e9b78681$export$7ef984671d1853d7 = {
    width: '100vw',
    height: '100vh',
    maxWidth: 'none',
    maxHeight: 'none',
    border: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    outline: 'none',
    colorScheme: 'light dark'
};
const $20d888b381d18c6c$var$overlayStyle = {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    height: '100%',
    width: '1024px',
    maxWidth: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '0.5rem',
    boxSizing: 'border-box',
    textAlign: 'left',
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '11px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    lineHeight: 1.5,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color
};
function $20d888b381d18c6c$var$ErrorOverlay(props) {
    const { shortcutHandler: shortcutHandler } = props;
    $10ecac3e4062713a$export$6d9c69b0de29b591(()=>{
        const onKeyDown = (e)=>{
            if (shortcutHandler) shortcutHandler(e.key);
        };
        window.addEventListener('keydown', onKeyDown);
        return ()=>{
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [
        shortcutHandler
    ]);
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $20d888b381d18c6c$var$overlayStyle,
        children: props.children
    });
}
var $20d888b381d18c6c$export$2e2bcd8739ae039 = $20d888b381d18c6c$var$ErrorOverlay;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $7aae0c9ea64fc08c$var$closeButtonStyle = {
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.closeColor,
    lineHeight: '1rem',
    fontSize: '1.5rem',
    padding: '1rem',
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
    top: 0
};
function $7aae0c9ea64fc08c$var$CloseButton({ close: close }) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        title: "Click or press Escape to dismiss.",
        onClick: close,
        style: $7aae0c9ea64fc08c$var$closeButtonStyle,
        children: "\xd7"
    });
}
var $7aae0c9ea64fc08c$export$2e2bcd8739ae039 = $7aae0c9ea64fc08c$var$CloseButton;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $1adc179a826c5dd2$var$navigationBarStyle = {
    marginBottom: '0.5rem'
};
const $1adc179a826c5dd2$var$buttonContainerStyle = {
    marginRight: '1em'
};
const $1adc179a826c5dd2$var$_navButtonStyle = {
    border: 'none',
    borderRadius: '4px',
    padding: '3px 6px',
    cursor: 'pointer'
};
const $1adc179a826c5dd2$var$leftButtonStyle = {
    ...$1adc179a826c5dd2$var$_navButtonStyle,
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navArrow,
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    marginRight: '1px'
};
const $1adc179a826c5dd2$var$rightButtonStyle = {
    ...$1adc179a826c5dd2$var$_navButtonStyle,
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navArrow,
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px'
};
function $1adc179a826c5dd2$var$NavigationBar(props) {
    const { currentError: currentError, totalErrors: totalErrors, previous: previous, next: next } = props;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $1adc179a826c5dd2$var$navigationBarStyle,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                style: $1adc179a826c5dd2$var$buttonContainerStyle,
                children: [
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: previous,
                        style: $1adc179a826c5dd2$var$leftButtonStyle,
                        children: "\u2190"
                    }),
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: next,
                        style: $1adc179a826c5dd2$var$rightButtonStyle,
                        children: "\u2192"
                    })
                ]
            }),
            `${currentError} of ${totalErrors} errors on the page`
        ]
    });
}
var $1adc179a826c5dd2$export$2e2bcd8739ae039 = $1adc179a826c5dd2$var$NavigationBar;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $c306e3a42547c8c2$var$headerStyle = {
    fontSize: '2em',
    fontFamily: 'sans-serif',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.headerColor,
    whiteSpace: 'pre-wrap',
    // Top bottom margin spaces header
    // Right margin revents overlap with close button
    margin: '0 2rem 0.75rem 0',
    flex: '0 0 auto'
};
function $c306e3a42547c8c2$var$Header(props) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $c306e3a42547c8c2$var$headerStyle,
        children: props.headerText
    });
}
var $c306e3a42547c8c2$export$2e2bcd8739ae039 = $c306e3a42547c8c2$var$Header;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $97c30df7f5c364f7$var$_preStyle = {
    position: 'relative',
    display: 'block',
    padding: '0.5em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem'
};
const $97c30df7f5c364f7$var$codeStyle = {
    fontFamily: 'Consolas, Menlo, monospace'
};
function $97c30df7f5c364f7$var$CodeBlock({ main: main, codeHTML: codeHTML }) {
    const primaryPreStyle = {
        ...$97c30df7f5c364f7$var$_preStyle,
        backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreBackground,
        color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreColor
    };
    const secondaryPreStyle = {
        ...$97c30df7f5c364f7$var$_preStyle,
        backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.secondaryPreBackground,
        color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.secondaryPreColor
    };
    const preStyle = main ? primaryPreStyle : secondaryPreStyle;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
        style: preStyle,
        children: $23b7c1cb98b19658$export$34b9dba7ce09269b("code", {
            style: $97c30df7f5c364f7$var$codeStyle,
            dangerouslySetInnerHTML: {
                __html: codeHTML
            }
        })
    });
}
var $97c30df7f5c364f7$export$2e2bcd8739ae039 = $97c30df7f5c364f7$var$CodeBlock;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $f78f50d61026cdc5$export$44b1e5ee7f53eae1(sourceFileName, sourceLineNumber, sourceColumnNumber, fileName, lineNumber, columnNumber, compiled) {
    let prettyURL;
    if (!compiled && sourceFileName && typeof sourceLineNumber === 'number') {
        // Remove everything up to the first /src/ or /node_modules/
        const trimMatch = /^[/|\\].*?[/|\\]((src|node_modules)[/|\\].*)/.exec(sourceFileName);
        if (trimMatch && trimMatch[1]) prettyURL = trimMatch[1];
        else prettyURL = sourceFileName;
        prettyURL += ':' + sourceLineNumber;
        // Note: we intentionally skip 0's because they're produced by cheap webpack maps
        if (sourceColumnNumber) prettyURL += ':' + sourceColumnNumber;
    } else if (fileName && typeof lineNumber === 'number') {
        prettyURL = fileName + ':' + lineNumber;
        // Note: we intentionally skip 0's because they're produced by cheap webpack maps
        if (columnNumber) prettyURL += ':' + columnNumber;
    } else prettyURL = 'unknown';
    return prettyURL.replace('webpack://', '.');
}
var $f78f50d61026cdc5$export$2e2bcd8739ae039 = $f78f50d61026cdc5$export$44b1e5ee7f53eae1;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $cdea3ae92bef6910$exports = {};
'use strict';
$cdea3ae92bef6910$exports = $cdea3ae92bef6910$var$ansiHTML;
// Reference to https://github.com/sindresorhus/ansi-regex
var $cdea3ae92bef6910$var$_regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
var $cdea3ae92bef6910$var$_defColors = {
    reset: [
        'fff',
        '000'
    ],
    black: '000',
    red: 'ff0000',
    green: '209805',
    yellow: 'e8bf03',
    blue: '0000ff',
    magenta: 'ff00ff',
    cyan: '00ffee',
    lightgrey: 'f0f0f0',
    darkgrey: '888'
};
var $cdea3ae92bef6910$var$_styles = {
    30: 'black',
    31: 'red',
    32: 'green',
    33: 'yellow',
    34: 'blue',
    35: 'magenta',
    36: 'cyan',
    37: 'lightgrey'
};
var $cdea3ae92bef6910$var$_openTags = {
    '1': 'font-weight:bold',
    '2': 'opacity:0.5',
    '3': '<i>',
    '4': '<u>',
    '8': 'display:none',
    '9': '<del>' // delete
};
var $cdea3ae92bef6910$var$_closeTags = {
    '23': '</i>',
    '24': '</u>',
    '29': '</del>' // reset delete
};
[
    0,
    21,
    22,
    27,
    28,
    39,
    49
].forEach(function(n) {
    $cdea3ae92bef6910$var$_closeTags[n] = '</span>';
});
/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */ function $cdea3ae92bef6910$var$ansiHTML(text) {
    // Returns the text if the string has no ANSI escape code.
    if (!$cdea3ae92bef6910$var$_regANSI.test(text)) return text;
    // Cache opened sequence.
    var ansiCodes = [];
    // Replace with markup.
    var ret = text.replace(/\033\[(\d+)m/g, function(match, seq) {
        var ot = $cdea3ae92bef6910$var$_openTags[seq];
        if (ot) {
            // If current sequence has been opened, close it.
            if (!!~ansiCodes.indexOf(seq)) {
                ansiCodes.pop();
                return '</span>';
            }
            // Open tag.
            ansiCodes.push(seq);
            return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
        }
        var ct = $cdea3ae92bef6910$var$_closeTags[seq];
        if (ct) {
            // Pop sequence
            ansiCodes.pop();
            return ct;
        }
        return '';
    });
    // Make sure tags are closed.
    var l = ansiCodes.length;
    l > 0 && (ret += Array(l + 1).join('</span>'));
    return ret;
}
/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */ $cdea3ae92bef6910$var$ansiHTML.setColors = function(colors) {
    if (typeof colors !== 'object') throw new Error('`colors` parameter must be an Object.');
    var _finalColors = {};
    for(var key in $cdea3ae92bef6910$var$_defColors){
        var hex = colors.hasOwnProperty(key) ? colors[key] : null;
        if (!hex) {
            _finalColors[key] = $cdea3ae92bef6910$var$_defColors[key];
            continue;
        }
        if ('reset' === key) {
            if (typeof hex === 'string') hex = [
                hex
            ];
            if (!Array.isArray(hex) || hex.length === 0 || hex.some(function(h) {
                return typeof h !== 'string';
            })) throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
            var defHexColor = $cdea3ae92bef6910$var$_defColors[key];
            if (!hex[0]) hex[0] = defHexColor[0];
            if (hex.length === 1 || !hex[1]) {
                hex = [
                    hex[0]
                ];
                hex.push(defHexColor[1]);
            }
            hex = hex.slice(0, 2);
        } else if (typeof hex !== 'string') throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
        _finalColors[key] = hex;
    }
    $cdea3ae92bef6910$var$_setTags(_finalColors);
};
/**
 * Reset colors.
 */ $cdea3ae92bef6910$var$ansiHTML.reset = function() {
    $cdea3ae92bef6910$var$_setTags($cdea3ae92bef6910$var$_defColors);
};
/**
 * Expose tags, including open and close.
 * @type {Object}
 */ $cdea3ae92bef6910$var$ansiHTML.tags = {};
if (Object.defineProperty) {
    Object.defineProperty($cdea3ae92bef6910$var$ansiHTML.tags, 'open', {
        get: function() {
            return $cdea3ae92bef6910$var$_openTags;
        }
    });
    Object.defineProperty($cdea3ae92bef6910$var$ansiHTML.tags, 'close', {
        get: function() {
            return $cdea3ae92bef6910$var$_closeTags;
        }
    });
} else {
    $cdea3ae92bef6910$var$ansiHTML.tags.open = $cdea3ae92bef6910$var$_openTags;
    $cdea3ae92bef6910$var$ansiHTML.tags.close = $cdea3ae92bef6910$var$_closeTags;
}
function $cdea3ae92bef6910$var$_setTags(colors) {
    // reset all
    $cdea3ae92bef6910$var$_openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1];
    // inverse
    $cdea3ae92bef6910$var$_openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0];
    // dark grey
    $cdea3ae92bef6910$var$_openTags['90'] = 'color:#' + colors.darkgrey;
    for(var code in $cdea3ae92bef6910$var$_styles){
        var color = $cdea3ae92bef6910$var$_styles[code];
        var oriColor = colors[color] || '000';
        $cdea3ae92bef6910$var$_openTags[code] = 'color:#' + oriColor;
        code = parseInt(code);
        $cdea3ae92bef6910$var$_openTags[(code + 10).toString()] = 'background:#' + oriColor;
    }
}
$cdea3ae92bef6910$var$ansiHTML.reset();
// Map ANSI colors from what babel-code-frame uses to base16-github
// See: https://github.com/babel/babel/blob/e86f62b304d280d0bab52c38d61842b853848ba6/packages/babel-code-frame/src/index.js#L9-L22
const $b67e2a05a9c13039$var$colors = {
    reset: [
        $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base05,
        'transparent'
    ],
    black: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base05,
    red: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base08 /* marker, bg-invalid */ ,
    green: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0B /* string */ ,
    yellow: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base08 /* capitalized, jsx_tag, punctuator */ ,
    blue: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0C,
    magenta: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0C /* regex */ ,
    cyan: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0E /* keyword */ ,
    gray: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base03 /* comment, gutter */ ,
    lightgrey: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base01,
    darkgrey: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base03
};
/*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).setColors($b67e2a05a9c13039$var$colors);
// $FlowFixMe
for(let tag in /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open)/*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open[tag] = /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open[tag].replace(/#light-dark/g, 'light-dark');
function $b67e2a05a9c13039$var$generateAnsiHTML(txt) {
    return /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports)(txt.replace(/[&<>"']/g, (c)=>{
        switch(c){
            case '&':
                return '&amp';
            case '<':
                return '&lt;';
            case '>':
                return '&gt';
            case '"':
                return '&quot;';
            case "'":
                return '&#39;';
            default:
                return c;
        }
    }));
}
var $b67e2a05a9c13039$export$2e2bcd8739ae039 = $b67e2a05a9c13039$var$generateAnsiHTML;
const $e0e0fa52b83f95a9$var$linkStyle = {
    fontSize: '0.9em',
    marginBottom: '0.9em'
};
const $e0e0fa52b83f95a9$var$anchorStyle = {
    textDecoration: 'none',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.anchorColor,
    cursor: 'pointer'
};
const $e0e0fa52b83f95a9$var$codeAnchorStyle = {
    cursor: 'pointer'
};
const $e0e0fa52b83f95a9$var$toggleStyle = {
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.toggleColor,
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.toggleBackground,
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '1em',
    padding: '0px',
    lineHeight: '1.5'
};
function $e0e0fa52b83f95a9$var$StackFrame(props) {
    const { frame: frame, critical: critical, showCode: showCode } = props;
    const { fileName: fileName, lineNumber: lineNumber, columnNumber: columnNumber, _scriptCode: scriptLines, _originalFileName: sourceFileName, _originalLineNumber: sourceLineNumber, _originalColumnNumber: sourceColumnNumber, _originalScriptCode: sourceLines } = frame;
    const functionName = frame.getFunctionName();
    const [compiled, setCompiled] = $10ecac3e4062713a$export$60241385465d0a34(!sourceLines);
    const getErrorLocation = ()=>{
        const { _originalFileName: fileName, _originalLineNumber: lineNumber } = props.frame;
        // Unknown file
        if (!fileName) return null;
        // e.g. "/path-to-my-app/webpack/bootstrap eaddeb46b67d75e4dfc1"
        const isInternalWebpackBootstrapCode = fileName.trim().indexOf(' ') !== -1;
        if (isInternalWebpackBootstrapCode) return null;
        // Code is in a real file
        return {
            fileName: fileName,
            lineNumber: lineNumber || 1
        };
    };
    const editorHandler = ()=>{
        const errorLoc = getErrorLocation();
        if (!errorLoc) return;
        props.editorHandler?.(errorLoc);
    };
    const url = $f78f50d61026cdc5$export$44b1e5ee7f53eae1(sourceFileName, sourceLineNumber, sourceColumnNumber, fileName, lineNumber, columnNumber, compiled);
    let codeBlockProps = null;
    if (showCode) {
        if (compiled && scriptLines && scriptLines.length !== 0 && lineNumber != null) codeBlockProps = {
            codeHTML: $b67e2a05a9c13039$export$2e2bcd8739ae039(scriptLines),
            main: critical
        };
        else if (!compiled && sourceLines && sourceLines.length !== 0 && sourceLineNumber != null) codeBlockProps = {
            codeHTML: $b67e2a05a9c13039$export$2e2bcd8739ae039(sourceLines),
            main: critical
        };
    }
    const canOpenInEditor = getErrorLocation() !== null && props.editorHandler !== null;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: functionName
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                style: $e0e0fa52b83f95a9$var$linkStyle,
                children: $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                    role: "link",
                    style: canOpenInEditor ? $e0e0fa52b83f95a9$var$anchorStyle : null,
                    onClick: canOpenInEditor ? editorHandler : null,
                    onKeyDown: canOpenInEditor ? (e)=>{
                        if (e.key === 'Enter') editorHandler();
                    } : null,
                    tabIndex: canOpenInEditor ? '0' : null,
                    children: url
                })
            }),
            codeBlockProps && $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                style: {
                    marginBottom: '1.5em'
                },
                children: [
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                        onClick: canOpenInEditor ? editorHandler : null,
                        style: canOpenInEditor ? $e0e0fa52b83f95a9$var$codeAnchorStyle : null,
                        children: $23b7c1cb98b19658$export$34b9dba7ce09269b($97c30df7f5c364f7$export$2e2bcd8739ae039, {
                            ...codeBlockProps
                        })
                    }),
                    scriptLines && sourceLines && $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        style: $e0e0fa52b83f95a9$var$toggleStyle,
                        onClick: ()=>{
                            setCompiled(!compiled);
                        },
                        children: 'View ' + (compiled ? 'source' : 'compiled')
                    })
                ]
            })
        ]
    });
}
var $e0e0fa52b83f95a9$export$2e2bcd8739ae039 = $e0e0fa52b83f95a9$var$StackFrame;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $9a1abb59f5d10ec8$var$_collapsibleStyle = {
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '1em',
    padding: '0px',
    lineHeight: '1.5'
};
const $9a1abb59f5d10ec8$var$collapsibleCollapsedStyle = {
    ...$9a1abb59f5d10ec8$var$_collapsibleStyle,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color,
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    marginBottom: '1.5em'
};
const $9a1abb59f5d10ec8$var$collapsibleExpandedStyle = {
    ...$9a1abb59f5d10ec8$var$_collapsibleStyle,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color,
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    marginBottom: '0.6em'
};
function $9a1abb59f5d10ec8$var$Collapsible(props) {
    const [collapsed, setCollapsed] = $10ecac3e4062713a$export$60241385465d0a34(true);
    const toggleCollapsed = ()=>{
        setCollapsed(!collapsed);
    };
    const count = props.children.length;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("details", {
        open: !collapsed,
        onToggle: toggleCollapsed,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("summary", {
                style: collapsed ? $9a1abb59f5d10ec8$var$collapsibleCollapsedStyle : $9a1abb59f5d10ec8$var$collapsibleExpandedStyle,
                children: (collapsed ? "\u25B6" : "\u25BC") + ` ${count} stack frames were ` + (collapsed ? 'collapsed.' : 'expanded.')
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: [
                    props.children,
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: toggleCollapsed,
                        style: $9a1abb59f5d10ec8$var$collapsibleExpandedStyle,
                        children: `\u{25B2} ${count} stack frames were expanded.`
                    })
                ]
            })
        ]
    });
}
var $9a1abb59f5d10ec8$export$2e2bcd8739ae039 = $9a1abb59f5d10ec8$var$Collapsible;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $e95d7084caaf4e6d$export$723fa77eef12dd9f(sourceFileName, fileName) {
    return sourceFileName == null || sourceFileName === '' || sourceFileName.indexOf('~/') !== -1 || sourceFileName.indexOf('node_modules/') !== -1 || sourceFileName.indexOf('error-overlay') !== -1 || sourceFileName.trim().indexOf(' ') !== -1 || fileName == null || fileName === '';
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $a5027556d7003a42$export$64794fcb05cf0bcf(errorName) {
    switch(errorName){
        case 'EvalError':
        case 'InternalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
            return true;
        default:
            return false;
    }
}
var $a5027556d7003a42$export$2e2bcd8739ae039 = $a5027556d7003a42$export$64794fcb05cf0bcf;
const $5ee7d2edb790dd06$var$traceStyle = {
    fontSize: '1em',
    flex: '0 1 auto',
    minHeight: '0px',
    overflow: 'auto'
};
function $5ee7d2edb790dd06$var$StackTrace(props) {
    const { stackFrames: stackFrames, errorName: errorName, contextSize: contextSize, editorHandler: editorHandler } = props;
    const renderedFrames = [];
    let hasReachedAppCode = false, currentBundle = [], bundleCount = 0;
    stackFrames.forEach((frame, index)=>{
        const { fileName: fileName, _originalFileName: sourceFileName } = frame;
        const isInternalUrl = $e95d7084caaf4e6d$export$723fa77eef12dd9f(sourceFileName, fileName);
        const isThrownIntentionally = !$a5027556d7003a42$export$64794fcb05cf0bcf(errorName);
        const shouldCollapse = isInternalUrl && (isThrownIntentionally || hasReachedAppCode);
        if (!isInternalUrl) hasReachedAppCode = true;
        const frameEle = $23b7c1cb98b19658$export$34b9dba7ce09269b($e0e0fa52b83f95a9$export$2e2bcd8739ae039, {
            frame: frame,
            contextSize: contextSize,
            critical: index === 0,
            showCode: !shouldCollapse,
            editorHandler: editorHandler
        }, 'frame-' + index);
        const lastElement = index === stackFrames.length - 1;
        if (shouldCollapse) currentBundle.push(frameEle);
        if (!shouldCollapse || lastElement) {
            if (currentBundle.length === 1) renderedFrames.push(currentBundle[0]);
            else if (currentBundle.length > 1) {
                bundleCount++;
                renderedFrames.push($23b7c1cb98b19658$export$34b9dba7ce09269b($9a1abb59f5d10ec8$export$2e2bcd8739ae039, {
                    children: currentBundle
                }, 'bundle-' + bundleCount));
            }
            currentBundle = [];
        }
        if (!shouldCollapse) renderedFrames.push(frameEle);
    });
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $5ee7d2edb790dd06$var$traceStyle,
        children: renderedFrames
    });
}
var $5ee7d2edb790dd06$export$2e2bcd8739ae039 = $5ee7d2edb790dd06$var$StackTrace;
const $2eeadf2892cff4e4$var$diffStyle = {
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreColor,
    padding: '0.5em',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem'
};
function $2eeadf2892cff4e4$export$2e2bcd8739ae039({ diff: diff }) {
    let lines = diff.split('\n').flatMap((line, i)=>[
            $2eeadf2892cff4e4$var$formatLine(line, i),
            '\n'
        ]).slice(0, -1);
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
        style: $2eeadf2892cff4e4$var$diffStyle,
        children: lines
    });
}
function $2eeadf2892cff4e4$var$formatLine(line, index) {
    if (line.startsWith('+')) return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        style: {
            color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.diffAdded,
            fontWeight: 'bold'
        },
        children: line
    }, index);
    else if (line.startsWith('-') || line.startsWith('>')) return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        style: {
            color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.diffRemoved,
            fontWeight: 'bold'
        },
        children: line
    }, index);
    else return line;
}
const $4baa71cb4cecc0ea$var$wrapperStyle = {
    display: 'flex',
    flexDirection: 'column'
};
function $4baa71cb4cecc0ea$var$RuntimeError({ errorRecord: errorRecord, editorHandler: editorHandler }) {
    const { error: error, unhandledRejection: unhandledRejection, contextSize: contextSize, stackFrames: stackFrames } = errorRecord;
    const errorName = unhandledRejection ? 'Unhandled Rejection (' + error.name + ')' : error.name;
    // Make header prettier
    const message = error.message;
    let headerText = message.match(/^\w*:/) || !errorName ? message : errorName + ': ' + message;
    headerText = headerText // TODO: maybe remove this prefix from fbjs?
    // It's just scaring people
    .replace(/^Invariant Violation:\s*/, '') // This is not helpful either:
    .replace(/^Warning:\s*/, '') // Break the actionable part to the next line.
    // AFAIK React 16+ should already do this.
    .replace(' Check the render method', '\n\nCheck the render method').replace(' Check your code at', '\n\nCheck your code at');
    let link, diff;
    if (headerText.includes('https://react.dev/link/hydration-mismatch')) {
        [headerText, diff] = headerText.split('https://react.dev/link/hydration-mismatch');
        link = 'https://react.dev/link/hydration-mismatch';
    } else if (headerText.includes('This will cause a hydration error.')) {
        [headerText, diff] = headerText.split('This will cause a hydration error.');
        headerText += 'This will cause a hydration error.';
    }
    let lines = headerText.split('\n');
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $4baa71cb4cecc0ea$var$wrapperStyle,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b($c306e3a42547c8c2$export$2e2bcd8739ae039, {
                headerText: lines[0]
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
                children: lines.slice(1).join('\n').trim()
            }),
            link && $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: $23b7c1cb98b19658$export$34b9dba7ce09269b("a", {
                    href: link,
                    target: "_blank",
                    rel: "noreferrer",
                    children: link
                })
            }),
            diff && $23b7c1cb98b19658$export$34b9dba7ce09269b($2eeadf2892cff4e4$export$2e2bcd8739ae039, {
                diff: diff.trim()
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($5ee7d2edb790dd06$export$2e2bcd8739ae039, {
                stackFrames: stackFrames,
                errorName: errorName,
                contextSize: contextSize,
                editorHandler: editorHandler
            })
        ]
    });
}
var $4baa71cb4cecc0ea$export$2e2bcd8739ae039 = $4baa71cb4cecc0ea$var$RuntimeError;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $7606db210182b733$var$footerStyle = {
    fontFamily: 'sans-serif',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.footer,
    marginTop: '0.5rem',
    flex: '0 0 auto'
};
function $7606db210182b733$var$Footer(props) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $7606db210182b733$var$footerStyle,
        children: [
            props.line1,
            $23b7c1cb98b19658$export$34b9dba7ce09269b("br", {}),
            props.line2
        ]
    });
}
var $7606db210182b733$export$2e2bcd8739ae039 = $7606db210182b733$var$Footer;
function $d0eac8b125ed15e2$var$RuntimeErrorContainer(props) {
    const { errorRecords: errorRecords, close: close } = props;
    const totalErrors = errorRecords.length;
    let [currentIndex, setCurrentIndex] = $10ecac3e4062713a$export$60241385465d0a34(0);
    let previous = ()=>{
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalErrors - 1);
    };
    let next = ()=>{
        setCurrentIndex(currentIndex < totalErrors - 1 ? currentIndex + 1 : 0);
    };
    return $23b7c1cb98b19658$export$34b9dba7ce09269b($20d888b381d18c6c$export$2e2bcd8739ae039, {
        shortcutHandler: (key)=>{
            if (key === 'Escape') props.close();
            else if (key === 'ArrowLeft') previous();
            else if (key === 'ArrowRight') next();
        },
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b($7aae0c9ea64fc08c$export$2e2bcd8739ae039, {
                close: close
            }),
            totalErrors > 1 && $23b7c1cb98b19658$export$34b9dba7ce09269b($1adc179a826c5dd2$export$2e2bcd8739ae039, {
                currentError: currentIndex + 1,
                totalErrors: totalErrors,
                previous: previous,
                next: next
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($4baa71cb4cecc0ea$export$2e2bcd8739ae039, {
                errorRecord: errorRecords[currentIndex],
                editorHandler: props.editorHandler
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($7606db210182b733$export$2e2bcd8739ae039, {
                line1: "This screen is visible only in development. It will not appear if the app crashes in production.",
                line2: "Open your browser\u2019s developer console to further inspect this error.  Click the 'X' or hit ESC to dismiss this message."
            })
        ]
    });
}
var $d0eac8b125ed15e2$export$2e2bcd8739ae039 = $d0eac8b125ed15e2$var$RuntimeErrorContainer;
let $da9882e673ac146b$var$iframe = null;
let $da9882e673ac146b$var$editorHandler = null;
let $da9882e673ac146b$var$currentRuntimeErrorRecords = [];
let $da9882e673ac146b$var$stopListeningToRuntimeErrors = null;
function $da9882e673ac146b$export$25a22ac46f1bd016(handler) {
    $da9882e673ac146b$var$editorHandler = handler;
    if ($da9882e673ac146b$var$iframe) $da9882e673ac146b$var$update();
}
function $da9882e673ac146b$export$74e9101ce4078c0(error, options) {
    $6d40ebe8356580e0$export$9123e6c9c0ac21ed($da9882e673ac146b$var$handleRuntimeError(options))(error, false);
}
function $da9882e673ac146b$export$cda2c88a41631c16(options) {
    if ($da9882e673ac146b$var$stopListeningToRuntimeErrors !== null) throw new Error('Already listening');
    $da9882e673ac146b$var$stopListeningToRuntimeErrors = $6d40ebe8356580e0$export$38ec23daa6e8dcdf($da9882e673ac146b$var$handleRuntimeError(options));
}
const $da9882e673ac146b$var$handleRuntimeError = (options)=>(errorRecord)=>{
        try {
            if (typeof options.onError === 'function') options.onError.call(null);
        } finally{
            if ($da9882e673ac146b$var$currentRuntimeErrorRecords.some(({ error: error })=>error === errorRecord.error)) // This fixes https://github.com/facebook/create-react-app/issues/3011.
            // eslint-disable-next-line no-unsafe-finally
            return;
            $da9882e673ac146b$var$currentRuntimeErrorRecords = $da9882e673ac146b$var$currentRuntimeErrorRecords.concat([
                errorRecord
            ]);
            $da9882e673ac146b$var$update();
        }
    };
function $da9882e673ac146b$export$1cfa6d161ca81bd9() {
    $da9882e673ac146b$var$currentRuntimeErrorRecords = [];
    $da9882e673ac146b$var$update();
}
function $da9882e673ac146b$export$25ba7d9a816639e7() {
    if ($da9882e673ac146b$var$stopListeningToRuntimeErrors === null) throw new Error('Not currently listening');
    try {
        $da9882e673ac146b$var$stopListeningToRuntimeErrors();
    } finally{
        $da9882e673ac146b$var$stopListeningToRuntimeErrors = null;
    }
}
let $da9882e673ac146b$var$rootNode, $da9882e673ac146b$var$shadow;
function $da9882e673ac146b$var$update() {
    if (!$da9882e673ac146b$var$rootNode) {
        $da9882e673ac146b$var$rootNode = document.createElement('parcel-error-overlay');
        $da9882e673ac146b$var$shadow = $da9882e673ac146b$var$rootNode.attachShadow({
            mode: 'open'
        });
        if ($da9882e673ac146b$var$rootNode) document.body?.appendChild($da9882e673ac146b$var$rootNode);
    }
    if ($da9882e673ac146b$var$currentRuntimeErrorRecords.length > 0 && $da9882e673ac146b$var$shadow) $b6c7f0288a15c619$export$b3890eb0ae9dca99($23b7c1cb98b19658$export$34b9dba7ce09269b("dialog", {
        ref: (d)=>d?.showModal(),
        style: $74bb4be6e9b78681$export$7ef984671d1853d7,
        onClose: $da9882e673ac146b$export$1cfa6d161ca81bd9,
        children: $23b7c1cb98b19658$export$34b9dba7ce09269b($da9882e673ac146b$var$ErrorOverlay, {})
    }), $da9882e673ac146b$var$shadow);
    else {
        $da9882e673ac146b$var$rootNode?.remove();
        $da9882e673ac146b$var$rootNode = null;
    }
}
function $da9882e673ac146b$var$ErrorOverlay() {
    if ($da9882e673ac146b$var$currentRuntimeErrorRecords.length > 0) return $23b7c1cb98b19658$export$34b9dba7ce09269b($d0eac8b125ed15e2$export$2e2bcd8739ae039, {
        errorRecords: $da9882e673ac146b$var$currentRuntimeErrorRecords,
        close: $da9882e673ac146b$export$1cfa6d161ca81bd9,
        editorHandler: $da9882e673ac146b$var$editorHandler
    });
    return null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["d2FNE","96tIl"], "96tIl", "parcelRequirea736", {}, null, null, "http://localhost:1234")

//# sourceMappingURL=frontend.08a11c70.js.map
