import { e as exportChapeau } from "./export_chapeau-CsPk7c8y.js";
function onReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var nativeObjectToString$1 = objectProto$5.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$4.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$4 = Object.prototype;
var nativeObjectToString = objectProto$4.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray = Array.isArray;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
class AsyncForm {
  constructor(el) {
    if (el.dataset.refAsyncForm) {
      return AsyncForm.refs[el.dataset.refAsyncForm];
    }
    this.ref = Math.random();
    AsyncForm.refs[this.ref] = this;
    el.dataset.refAsyncForm = this.ref;
    this.el = el;
    this.form = el.querySelector("form");
    this.formSuccess = el.querySelector(".w-form-done");
    this.formFail = el.querySelector(".w-form-fail");
    this.submitButton = el.querySelector('[type="submit"]');
    this.buttonText = this.getSubmitText();
    this.waitingText = this.submitButton.dataset.wait;
    this.beforeSubmitHandlers = [];
    this.payloadHandlers = [];
    this.inputHandlers = [];
    this.onStateHandlers = [];
    this.el.addEventListener("submit", (e) => this.submit(e));
  }
  /**
   * @callback BeforeSubmitHandler
   * @returns {bool} if false then the form is not submitted
   */
  /**
   * Gets called before the form starts to submit
   * Allows to cancel the submit by returning false
   * @param {BeforeSubmitHandler} fn
   */
  set onBeforeSubmit(fn) {
    this.beforeSubmitHandlers.push(fn);
  }
  /**
   * @callback PayloadHandler
   * @param {Object} payload The current payload
   * @returns {Object} The new payload
   */
  /**
   * Allows for adding custom value to the payload
   * Gets called before form elements are converted
   * All handlers will be called in the order they were registered
   * @param {PayloadHandler} fn
   */
  set onPayload(fn) {
    this.payloadHandlers.push(fn);
  }
  /**
   * @callback InputHandler
   * @param {HTMLElement} input The input element
   * @param {String} value The current value
   * @returns {String | Promise<String>} The new value
   */
  /**
   * Allows for transforming the values of the form elements
   * All handlers will be called in the order they were registered
   * Can be async
   * @param {InputHandler} fn
   */
  set onInput(fn) {
    this.inputHandlers.push(fn);
  }
  /**
   * @callback StateHandler
   * @param {'loading' | 'success' | 'error'} state
   */
  /**
   * Gets called when the forms state changes
   * @param {StateHandler} fn
   */
  set onState(fn) {
    this.onStateHandlers.push(fn);
  }
  async submit(event) {
    event.preventDefault();
    try {
      const shouldSubmit = this.beforeSubmitHandlers.reduce(
        (prev, handler) => handler() && prev,
        true
      );
      if (!shouldSubmit) return;
      this.setState("loading");
      const payload = await this.createPayload();
      const url = this.form.action;
      const method = this.form.method;
      const options = {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      };
      const response = await fetch(url, options);
      if (response.ok) {
        this.setState("success");
      } else {
        this.setState("error");
      }
    } catch (err) {
      console.error(err);
      this.setState("error");
    }
  }
  async createPayload() {
    let payload = this.payloadHandlers.reduce(
      (payload2, handler) => handler(payload2),
      {}
    );
    const inputElements = this.elements.filter((el) => el.name !== "");
    for (const input of inputElements) {
      const name = input.name;
      let value = input.value;
      if (input.type === "checkbox") {
        value = input.checked;
      }
      if (input.type === "radio" && !input.checked) {
        value = null;
      }
      for (const inputHandler of this.inputHandlers) {
        value = await inputHandler(input, value);
      }
      if (value === null) {
        continue;
      }
      const group = input.dataset.group;
      const path = [group, name].filter((item) => item);
      const existingValue = get(payload, path);
      if (typeof existingValue !== "undefined") {
        value = [existingValue, value].flat();
      }
      set(payload, path, value);
    }
    return payload;
  }
  /**
   * @param {'loading' | 'success' | 'error'} state
   */
  setState(state) {
    switch (state) {
      case "loading":
        this.form.style.display = null;
        this.formSuccess.style.display = null;
        this.formFail.style.display = null;
        this.elements.forEach((el) => el.disabled = true);
        this.setSubmitText(this.waitingText);
        break;
      case "success":
        this.form.style.display = "none";
        this.formSuccess.style.display = "block";
        this.formFail.style.display = "none";
        this.elements.forEach((el) => el.disabled = false);
        this.setSubmitText(this.buttonText);
        this.form.reset();
        this.formSuccess.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break;
      case "error":
        this.form.style.display = null;
        this.formSuccess.style.display = null;
        this.formFail.style.display = "block";
        this.elements.forEach((el) => el.disabled = false);
        this.setSubmitText(this.buttonText);
        break;
    }
    this.onStateHandlers.forEach((handler) => handler(state));
  }
  getSubmitText() {
    if (this.submitButton instanceof HTMLInputElement) {
      return this.submitButton.value;
    } else {
      return this.submitButton.textContent;
    }
  }
  setSubmitText(value) {
    if (this.submitButton instanceof HTMLInputElement) {
      this.submitButton.value = value;
    } else {
      this.submitButton.textContent = value;
    }
  }
  get elements() {
    return Array.from(this.form.elements);
  }
}
AsyncForm.refs = {};
window.AsyncForm = AsyncForm;
onReady(() => {
  Array.from(document.querySelectorAll("[c-async-form]")).forEach(
    (el) => new AsyncForm(el)
  );
});
function styleInject(css2, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
function injectCss(css2) {
  styleInject(css2, { insertAt: "top" });
}
const exportGlobal = (module) => Object.assign(globalThis, module);
const css$1 = ".filepond--root,\n.filepond--root *,\n.filepond--drop-label label {\n	cursor: pointer;\n}\n\n.filepond--root {\n	font-size: 1em;\n}\n\n.filepond--drop-label {\n	justify-content: start;\n	padding-left: 1em;\n}\n\n.filepond--panel-root {\n	background-color: transparent;\n	border-radius: 0;\n	border: 1px solid #ededed;\n}\n\n.filepond--list {\n	left: 1em;\n	right: 1em;\n}\n\n.filepond--drop-label.filepond--drop-label label {\n	padding: 0;\n}\n\n.filepond--item {\n	margin: 0;\n	margin-bottom: 0.25em;\n}\n";
injectCss(css$1);
class FileUpload {
  constructor(el) {
    if (el.dataset.refFileUpload) {
      return FileUpload.refs[el.dataset.refFileUpload];
    }
    this.ref = Math.random();
    FileUpload.refs[this.ref] = this;
    el.dataset.refFileUpload = this.ref;
    this.inputs = el.querySelectorAll('input[type="file"]');
    this.fileponds = {};
    this.headers = {
      Authorization: "pFdRC99ihTG!C%BQB6EJKjc!n%"
    };
    document.addEventListener("FilePond:loaded", () => this.onload());
    const asyncForm = new AsyncForm(el.closest("[c-async-form]"));
    asyncForm.onBeforeSubmit = () => this.beforeSubmit();
    asyncForm.onPayload = (payload) => this.onPayload(payload);
    asyncForm.onInput = async (input, value) => await this.inputHandler(input, value);
    import("./filepond-B0K1-56P.js").then(exportGlobal);
  }
  onload() {
    FilePond.registerPlugin(FilePondPluginFileValidateType);
    FilePond.registerPlugin(FilePondPluginFileValidateSize);
    const options = {
      server: {
        url: "https://formupload.agentur-chapeau.de/",
        process: {
          url: "process",
          headers: this.headers
        },
        revert: {
          url: "revert",
          headers: this.headers
        },
        restore: null,
        load: null,
        fetch: null
      },
      credits: false,
      ...defaultLabels,
      ...window.c_fileupload_options
    };
    for (const input of this.inputs) {
      this.fileponds[input.name] = FilePond.create(input, {
        ...options,
        maxFiles: input.dataset.maxFiles || null,
        maxFileSize: input.dataset.maxFileSize || null,
        maxTotalFileSize: input.dataset.maxTotalFileSize || null
      });
    }
  }
  beforeSubmit() {
    for (const [_, filepond] of Object.entries(this.fileponds)) {
      if (!(filepond.status == FilePond.Status.EMPTY || filepond.status == FilePond.Status.READY)) {
        alert("Es sind noch nicht alle Dateien hochgeladen!");
        return false;
      }
    }
    return true;
  }
  onPayload(payload) {
    for (const input of this.inputs) {
      if (input.multiple) {
        payload[input.name] = [];
      }
    }
    return payload;
  }
  async inputHandler(input, value) {
    if (!input.closest(".filepond--root")) {
      return value;
    }
    if (!input.closest(".filepond--data")) {
      return null;
    }
    const filepond = this.fileponds[input.name];
    const fileObject = filepond.getFiles().find((f) => f.serverId === value);
    const res = await fetch(`${filepond.server.url}finish`, {
      method: "POST",
      body: value,
      headers: this.headers
    });
    if (!res.ok) {
      throw new Error("Upload could not finish ", res);
    }
    const fileUrl = await res.text();
    const fileName = fileObject.filename;
    const fileSize = fileObject.fileSize;
    return {
      url: fileUrl,
      name: fileName,
      size: fileSize
    };
  }
}
FileUpload.refs = {};
window.FileUpload = FileUpload;
onReady(() => {
  Array.from(document.querySelectorAll("[c-file-upload]")).forEach(
    (el) => new FileUpload(el)
  );
});
const defaultLabels = {
  labelIdle: `Dateien hierher ziehen oder <span class="filepond--label-action">auswählen</span>`,
  labelInvalidField: "Feld enthält ungültige Dateien",
  labelFileWaitingForSize: "Auf Größe warten",
  labelFileSizeNotAvailable: "Größe nicht verfügbar",
  labelFileLoading: "Laden",
  labelFileLoadError: "Fehler beim Laden",
  labelFileProcessing: "Hochladen",
  labelFileProcessingComplete: "Hochgeladen",
  labelFileProcessingAborted: "Hochladen abgebrochen",
  labelFileProcessingError: "Fehler beim Hochladen",
  labelFileProcessingRevertError: "Fehler beim Entfernen",
  labelFileRemoveError: "Fehler beim Löschen",
  labelTapToCancel: "Tippen zum Abbrechen ",
  labelTapToRetry: "Tippen zum Wiederholen",
  labelTapToUndo: "Tippen zum Entfernen",
  labelButtonRemoveItem: "Entfernen",
  labelButtonAbortItemLoad: "Abbrechen",
  labelButtonRetryItemLoad: "Wiederholen",
  labelButtonAbortItemProcessing: "Abbrechen",
  labelButtonUndoItemProcessing: "Entfernen",
  labelButtonRetryItemProcessing: "Wiederholen",
  labelButtonProcessItem: "Hochladen",
  labelMaxFileSizeExceeded: "Datei ist zu groß",
  labelMaxFileSize: "Maximale Dateigröße beträgt {filesize}",
  labelMaxTotalFileSizeExceeded: "Maximale Gesamtgröße überschritten",
  labelMaxTotalFileSize: "Maximale Gesamtgröße beträgt {filesize}",
  labelFileTypeNotAllowed: "Ungültiger Dateityp",
  fileValidateTypeLabelExpectedTypes: "Gültige Dateitypen: {allButLastType} und {lastType}",
  fileValidateTypeLabelExpectedTypesMap: {
    "image/*": "Bilddateien",
    "image/png": ".png",
    "image/jpg": ".jpg",
    "image/jpeg": ".jpeg",
    "application/pdf": ".pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx"
  }
};
onReady(() => {
  if (window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid");
    if (gclid) {
      window.localStorage.setItem("gclid", gclid);
    }
    const fbclid = params.get("fbclid");
    if (fbclid) {
      const fbc = `fb.1.${Date.now()}.${fbclid}`;
      window.localStorage.setItem("fbc", fbc);
    }
    const ttclid = params.get("ttclid");
    if (ttclid) {
      window.localStorage.setItem("ttclid", ttclid);
    }
  }
  const forms = Array.from(document.querySelectorAll("[c-conversion] > form"));
  forms.forEach((form) => {
    const inputs = [
      "gclid",
      "fbc",
      "fbp",
      "user-agent",
      "ttclid",
      "url"
    ].reduce((obj, name) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      form.appendChild(input);
      return {
        ...obj,
        [name]: input
      };
    }, {});
    form.addEventListener("submit", () => {
      const conversionIds = getConversionIDs();
      inputs.gclid.value = conversionIds.gclid;
      inputs.fbc.value = conversionIds.fbc;
      inputs.fbp.value = conversionIds.fbp;
      inputs["user-agent"].value = conversionIds.useragent;
      inputs.ttclid.value = conversionIds.ttclid;
      inputs.url.value = conversionIds.url;
      if (window.fbq !== void 0) {
        fbq("track", "SubmitApplication", {}, { eventID: conversionIds.fbp });
      }
    });
  });
  const trackElements = Array.from(
    document.querySelectorAll("[data-fb-track]")
  );
  trackElements.forEach((el) => {
    el.addEventListener("click", () => {
      const isDisabled = el.dataset.trackDisabled === "true";
      if (isDisabled) return;
      const event = el.dataset.fbTrack;
      const conversionIds = getConversionIDs();
      const url = el.dataset.trackUrl;
      if (window.fbq !== void 0) {
        fbq("track", event, {}, { eventID: conversionIds.fbp });
      }
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          event,
          ...conversionIds
        })
      });
    });
  });
});
function getConversionIDs() {
  const gclid = window.localStorage.getItem("gclid");
  const fbc = window.localStorage.getItem("fbc");
  const fbp = getCookie("_fbp");
  const useragent = navigator.userAgent;
  const ttclid = window.localStorage.getItem("ttclid");
  const url = window.location.href;
  return {
    gclid,
    fbc,
    fbp,
    useragent,
    ttclid,
    url
  };
}
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  else return null;
}
const css = "[c-cloak] {\n	display: none;\n}\n";
injectCss(css);
var Webflow = window.Webflow || [];
Webflow.push(async () => {
  if (document.querySelector("[c-chapeau-form]")) {
    await import("./awf-D5m8_nM8.js").then(exportGlobal);
    createChapeauFormular();
  }
});
function createChapeauFormular() {
  const $main = document.querySelector('[c-chapeau-form="main"]');
  const $nav = $main.querySelector('[c-chapeau-form="nav"]');
  const $totalSteps = $main.querySelector('[c-chapeau-form="total-steps"]');
  const $progress = $main.querySelector('[c-chapeau-form="progress"]');
  const $slider = $main.querySelector('[c-chapeau-form="slider"]');
  const $slideList = $main.querySelector('[c-chapeau-form="slides"]');
  const $notQualifiedMsg = $main.querySelector(
    '[c-chapeau-form="not-qualified-message"]'
  );
  const $buttons = $main.querySelector('[c-chapeau-form="buttons"]');
  const formSelector = '[c-chapeau-form="form"]';
  const nextSelector = '[c-chapeau-form="next"]';
  const backSelector = '[c-chapeau-form="back"]';
  const currentStepSelector = '[c-chapeau-form="current-step"]';
  moveCmsSlidesToSlider($slider, $slideList);
  const msf = new AWF.MSF({
    hiddeButtonsOnSubmit: false,
    // Buttons will be manually hidden
    scrollTopOnStepChange: false,
    formSelector,
    nextSelector,
    backSelector,
    currentStepSelector
  });
  useDisabledClass(msf);
  useProgressBar(msf, $progress);
  useBrowserValidation(msf);
  useNotQualified(msf, $notQualifiedMsg, $nav, $buttons);
  useConversion(msf);
  useAyncForm(msf, $main);
  useFileUpload(msf, $main);
  const totalSteps = msf.view.steps.length;
  $totalSteps.textContent = totalSteps;
  window.msf = msf;
  $main.removeAttribute("c-cloak");
  msf.view.setMaskHeight(0);
}
function moveCmsSlidesToSlider($slider, $slideList) {
  var _a;
  const sliderMask = $slider.querySelector(":scope > .w-slider-mask");
  const slides = Array.from(
    $slideList.querySelectorAll(":scope > .w-dyn-items > .w-dyn-item")
  );
  Array.from(sliderMask.querySelectorAll(".w-slide")).forEach(
    (el) => el.remove()
  );
  slides.forEach((slide) => {
    slide.classList.add("w-slide");
    sliderMask.appendChild(slide);
  });
  $slideList.remove();
  Webflow.destroy();
  Webflow.ready();
  (_a = Webflow.require("ix2")) == null ? void 0 : _a.init();
  Webflow.require("slider").redraw();
  Webflow.require("slider").ready();
}
function useProgressBar({ view, controller }, $progress) {
  view.next.addEventListener("click", updateProgressBar);
  view.back.addEventListener("click", updateProgressBar);
  updateProgressBar();
  function updateProgressBar() {
    const currentStep = controller.currentStep + 1;
    const totalSteps = view.steps.length;
    const progress = Math.min(currentStep / totalSteps * 100, 100);
    $progress.style.width = `${progress}%`;
  }
}
function useNotQualified({ view, controller }, notQualifiedMsg, nav, buttons) {
  view.form.addEventListener("change", checkQualified);
  function checkQualified() {
    var _a;
    const inputs = view.getInputs(controller.currentStep);
    const notQualified = inputs.some((input) => {
      if (input.checked) {
        return input.parentElement.querySelector(
          '[c-chapeau-form="not-qualified"]'
        ) != null;
      } else {
        return false;
      }
    });
    const currentSlide = view.steps[controller.currentStep];
    const isNextSlideNotQualifiedMessage = (_a = currentSlide.nextSibling) == null ? void 0 : _a.matches(
      '[c-chapeau-form="not-qualified-message"]'
    );
    if (notQualified) {
      if (!isNextSlideNotQualifiedMessage) {
        currentSlide.insertAdjacentHTML("afterend", notQualifiedMsg.outerHTML);
        currentSlide.nextElementSibling.querySelector('[c-chapeau-form="not-qualified-back"]').addEventListener("click", () => view.back.click());
      }
    } else {
      if (isNextSlideNotQualifiedMessage) {
        currentSlide.nextSibling.remove();
      }
    }
    currentSlide.dataset.notQualified = notQualified;
    Webflow.require("slider").redraw();
    Webflow.require("slider").ready();
  }
  const originalSubmitForm = view.submitForm.bind(view);
  view.submitForm = () => {
    const lastSlide = view.steps[view.steps.length - 1];
    if (lastSlide.dataset.notQualified === "true") {
      view.goNext();
      hideElements();
    } else {
      originalSubmitForm();
    }
  };
  view.next.addEventListener("click", () => {
    const lastSlide = view.steps[controller.currentStep - 1];
    if ((lastSlide == null ? void 0 : lastSlide.dataset.notQualified) === "true") {
      hideElements();
    }
  });
  view.back.addEventListener("click", () => {
    showElements();
  });
  function hideElements() {
    view.hideElement(nav);
    view.hideElement(buttons);
  }
  function showElements() {
    view.showElement(nav);
    view.showElement(buttons);
  }
}
function useDisabledClass({ view }) {
  view.enableElement(view.back);
  view.disableElement = (el) => {
    if (!el) return;
    el.classList.add("disabled");
  };
  view.enableElement = (el) => {
    if (!el) return;
    el.classList.remove("disabled");
  };
  view.disableElement(view.back);
}
function useBrowserValidation(msf) {
  msf.view;
  const controller = msf.controller;
  const originalCheckRequiredInputs = controller.checkRequiredInputs.bind(controller);
  function newCheckRequiredInputs() {
    this.inputsCurrentlyValid = true;
    const inputs = this.view.getInputs(this.currentStep);
    for (const input of inputs) {
      const isValid = input.reportValidity();
      if (!isValid) {
        this.inputsCurrentlyValid = false;
        return false;
      }
    }
    return originalCheckRequiredInputs();
  }
  controller.checkRequiredInputs = newCheckRequiredInputs.bind(controller);
}
function useAyncForm({ view, controller }, $main) {
  const $back = view.back;
  const $next = view.next;
  const asyncForm = new AsyncForm($main);
  asyncForm.onState = (state) => {
    if (state === "success") {
      view.hideElement($back);
      view.hideElement($next);
    }
  };
  controller.observeSubmitText();
  controller.handleSubmit = () => {
    controller.currentStep = Math.min(
      controller.currentStep,
      view.steps.length - 1
    );
  };
}
function useFileUpload(msf, $main) {
  new FileUpload($main);
  const view = msf.view;
  const controller = msf.controller;
  view.form.addEventListener("FilePond:updatefiles", () => {
    setTimeout(() => view.setMaskHeight(controller.currentStep), 100);
  });
}
function useConversion({ view, controller }) {
  view.form.addEventListener("change", checkValidity);
  view.next.addEventListener("click", checkValidity);
  view.back.addEventListener("click", checkValidity);
  checkValidity();
  function checkValidity() {
    const inputs = view.getInputs(controller.currentStep);
    const inputsNotValid = inputs.some((input) => !input.checkValidity());
    const currentSlide = view.steps[controller.currentStep];
    const currentSlideNotQualified = currentSlide.dataset.notQualified == "true";
    view.next.dataset.trackDisabled = inputsNotValid || currentSlideNotQualified;
  }
}
const Chapeau = exportChapeau({
  AsyncForm,
  FileUpload,
  getConversionIDs
});
export {
  Chapeau as C,
  injectCss as i
};
//# sourceMappingURL=index-CWcLrCW9.js.map
