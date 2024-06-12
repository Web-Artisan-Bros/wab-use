import { ref as le, computed as K, defineComponent as Se, openBlock as B, createBlock as ae, unref as ie, withCtx as ur, createElementVNode as R, createElementBlock as L, Fragment as He, renderList as qr, mergeProps as xe, watch as kr, createCommentVNode as Be, isRef as mr, normalizeClass as Ve, resolveDynamicComponent as bu } from "vue";
import { defineStore as Au } from "pinia";
import { ClientOnly as Rr } from "nuxt";
var J = {}, $ = {};
function vu(e, r, u) {
  if (u === void 0 && (u = Array.prototype), e && typeof u.find == "function")
    return u.find.call(e, r);
  for (var t = 0; t < e.length; t++)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      var n = e[t];
      if (r.call(void 0, n, t, e))
        return n;
    }
}
function tr(e, r) {
  return r === void 0 && (r = Object), r && typeof r.freeze == "function" ? r.freeze(e) : e;
}
function Eu(e, r) {
  if (e === null || typeof e != "object")
    throw new TypeError("target is not an object");
  for (var u in r)
    Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
  return e;
}
var Or = tr({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: "text/html",
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function(e) {
    return e === Or.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: "application/xml",
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: "text/xml",
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: "application/xhtml+xml",
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: "image/svg+xml"
}), Ir = tr({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: "http://www.w3.org/1999/xhtml",
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function(e) {
    return e === Ir.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: "http://www.w3.org/2000/svg",
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: "http://www.w3.org/XML/1998/namespace",
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: "http://www.w3.org/2000/xmlns/"
});
$.assign = Eu;
$.find = vu;
$.freeze = tr;
$.MIME_TYPE = Or;
$.NAMESPACE = Ir;
var Lr = $, U = Lr.find, Ne = Lr.NAMESPACE;
function Cu(e) {
  return e !== "";
}
function wu(e) {
  return e ? e.split(/[\t\n\f\r ]+/).filter(Cu) : [];
}
function yu(e, r) {
  return e.hasOwnProperty(r) || (e[r] = !0), e;
}
function gr(e) {
  if (!e)
    return [];
  var r = wu(e);
  return Object.keys(r.reduce(yu, {}));
}
function xu(e) {
  return function(r) {
    return e && e.indexOf(r) !== -1;
  };
}
function _e(e, r) {
  for (var u in e)
    Object.prototype.hasOwnProperty.call(e, u) && (r[u] = e[u]);
}
function O(e, r) {
  var u = e.prototype;
  if (!(u instanceof r)) {
    let t = function() {
    };
    t.prototype = r.prototype, t = new t(), _e(u, t), e.prototype = u = t;
  }
  u.constructor != e && (typeof e != "function" && console.error("unknown Class:" + e), u.constructor = e);
}
var I = {}, M = I.ELEMENT_NODE = 1, ce = I.ATTRIBUTE_NODE = 2, ze = I.TEXT_NODE = 3, Mr = I.CDATA_SECTION_NODE = 4, Ur = I.ENTITY_REFERENCE_NODE = 5, Bu = I.ENTITY_NODE = 6, Pr = I.PROCESSING_INSTRUCTION_NODE = 7, Vr = I.COMMENT_NODE = 8, zr = I.DOCUMENT_NODE = 9, Gr = I.DOCUMENT_TYPE_NODE = 10, G = I.DOCUMENT_FRAGMENT_NODE = 11, Nu = I.NOTATION_NODE = 12, S = {}, N = {};
S.INDEX_SIZE_ERR = (N[1] = "Index size error", 1);
S.DOMSTRING_SIZE_ERR = (N[2] = "DOMString size error", 2);
var k = S.HIERARCHY_REQUEST_ERR = (N[3] = "Hierarchy request error", 3);
S.WRONG_DOCUMENT_ERR = (N[4] = "Wrong document", 4);
S.INVALID_CHARACTER_ERR = (N[5] = "Invalid character", 5);
S.NO_DATA_ALLOWED_ERR = (N[6] = "No data allowed", 6);
S.NO_MODIFICATION_ALLOWED_ERR = (N[7] = "No modification allowed", 7);
var jr = S.NOT_FOUND_ERR = (N[8] = "Not found", 8);
S.NOT_SUPPORTED_ERR = (N[9] = "Not supported", 9);
var Dr = S.INUSE_ATTRIBUTE_ERR = (N[10] = "Attribute in use", 10);
S.INVALID_STATE_ERR = (N[11] = "Invalid state", 11);
S.SYNTAX_ERR = (N[12] = "Syntax error", 12);
S.INVALID_MODIFICATION_ERR = (N[13] = "Invalid modification", 13);
S.NAMESPACE_ERR = (N[14] = "Invalid namespace", 14);
S.INVALID_ACCESS_ERR = (N[15] = "Invalid access", 15);
function y(e, r) {
  if (r instanceof Error)
    var u = r;
  else
    u = this, Error.call(this, N[e]), this.message = N[e], Error.captureStackTrace && Error.captureStackTrace(this, y);
  return u.code = e, r && (this.message = this.message + ": " + r), u;
}
y.prototype = Error.prototype;
_e(S, y);
function z() {
}
z.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function(e) {
    return e >= 0 && e < this.length ? this[e] : null;
  },
  toString: function(e, r) {
    for (var u = [], t = 0; t < this.length; t++)
      se(this[t], u, e, r);
    return u.join("");
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function(e) {
    return Array.prototype.filter.call(this, e);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function(e) {
    return Array.prototype.indexOf.call(this, e);
  }
};
function pe(e, r) {
  this._node = e, this._refresh = r, nr(this);
}
function nr(e) {
  var r = e._node._inc || e._node.ownerDocument._inc;
  if (e._inc !== r) {
    var u = e._refresh(e._node);
    if (uu(e, "length", u.length), !e.$$length || u.length < e.$$length)
      for (var t = u.length; t in e; t++)
        Object.prototype.hasOwnProperty.call(e, t) && delete e[t];
    _e(u, e), e._inc = r;
  }
}
pe.prototype.item = function(e) {
  return nr(this), this[e] || null;
};
O(pe, z);
function Ge() {
}
function $r(e, r) {
  for (var u = e.length; u--; )
    if (e[u] === r)
      return u;
}
function br(e, r, u, t) {
  if (t ? r[$r(r, t)] = u : r[r.length++] = u, e) {
    u.ownerElement = e;
    var n = e.ownerDocument;
    n && (t && Yr(n, e, t), Tu(n, e, u));
  }
}
function Ar(e, r, u) {
  var t = $r(r, u);
  if (t >= 0) {
    for (var n = r.length - 1; t < n; )
      r[t] = r[++t];
    if (r.length = n, e) {
      var o = e.ownerDocument;
      o && (Yr(o, e, u), u.ownerElement = null);
    }
  } else
    throw new y(jr, new Error(e.tagName + "@" + u));
}
Ge.prototype = {
  length: 0,
  item: z.prototype.item,
  getNamedItem: function(e) {
    for (var r = this.length; r--; ) {
      var u = this[r];
      if (u.nodeName == e)
        return u;
    }
  },
  setNamedItem: function(e) {
    var r = e.ownerElement;
    if (r && r != this._ownerElement)
      throw new y(Dr);
    var u = this.getNamedItem(e.nodeName);
    return br(this._ownerElement, this, e, u), u;
  },
  /* returns Node */
  setNamedItemNS: function(e) {
    var r = e.ownerElement, u;
    if (r && r != this._ownerElement)
      throw new y(Dr);
    return u = this.getNamedItemNS(e.namespaceURI, e.localName), br(this._ownerElement, this, e, u), u;
  },
  /* returns Node */
  removeNamedItem: function(e) {
    var r = this.getNamedItem(e);
    return Ar(this._ownerElement, this, r), r;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(e, r) {
    var u = this.getNamedItemNS(e, r);
    return Ar(this._ownerElement, this, u), u;
  },
  getNamedItemNS: function(e, r) {
    for (var u = this.length; u--; ) {
      var t = this[u];
      if (t.localName == r && t.namespaceURI == e)
        return t;
    }
    return null;
  }
};
function Hr() {
}
Hr.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function(e, r) {
    return !0;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function(e, r, u) {
    var t = new qe();
    if (t.implementation = this, t.childNodes = new z(), t.doctype = u || null, u && t.appendChild(u), r) {
      var n = t.createElementNS(e, r);
      t.appendChild(n);
    }
    return t;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function(e, r, u) {
    var t = new Xe();
    return t.name = e, t.nodeName = e, t.publicId = r || "", t.systemId = u || "", t;
  }
};
function D() {
}
D.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function(e, r) {
    return je(this, e, r);
  },
  replaceChild: function(e, r) {
    je(this, e, r, Jr), r && this.removeChild(r);
  },
  removeChild: function(e) {
    return Wr(this, e);
  },
  appendChild: function(e) {
    return this.insertBefore(e, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(e) {
    return Qe(this.ownerDocument || this, this, e);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var e = this.firstChild; e; ) {
      var r = e.nextSibling;
      r && r.nodeType == ze && e.nodeType == ze ? (this.removeChild(r), e.appendData(r.data)) : (e.normalize(), e = r);
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function(e, r) {
    return this.ownerDocument.implementation.hasFeature(e, r);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function(e) {
    for (var r = this; r; ) {
      var u = r._nsMap;
      if (u) {
        for (var t in u)
          if (Object.prototype.hasOwnProperty.call(u, t) && u[t] === e)
            return t;
      }
      r = r.nodeType == ce ? r.ownerDocument : r.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(e) {
    for (var r = this; r; ) {
      var u = r._nsMap;
      if (u && Object.prototype.hasOwnProperty.call(u, e))
        return u[e];
      r = r.nodeType == ce ? r.ownerDocument : r.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(e) {
    var r = this.lookupPrefix(e);
    return r == null;
  }
};
function Xr(e) {
  return e == "<" && "&lt;" || e == ">" && "&gt;" || e == "&" && "&amp;" || e == '"' && "&quot;" || "&#" + e.charCodeAt() + ";";
}
_e(I, D);
_e(I, D.prototype);
function Te(e, r) {
  if (r(e))
    return !0;
  if (e = e.firstChild)
    do
      if (Te(e, r))
        return !0;
    while (e = e.nextSibling);
}
function qe() {
  this.ownerDocument = this;
}
function Tu(e, r, u) {
  e && e._inc++;
  var t = u.namespaceURI;
  t === Ne.XMLNS && (r._nsMap[u.prefix ? u.localName : ""] = u.value);
}
function Yr(e, r, u, t) {
  e && e._inc++;
  var n = u.namespaceURI;
  n === Ne.XMLNS && delete r._nsMap[u.prefix ? u.localName : ""];
}
function or(e, r, u) {
  if (e && e._inc) {
    e._inc++;
    var t = r.childNodes;
    if (u)
      t[t.length++] = u;
    else {
      for (var n = r.firstChild, o = 0; n; )
        t[o++] = n, n = n.nextSibling;
      t.length = o, delete t[t.length];
    }
  }
}
function Wr(e, r) {
  var u = r.previousSibling, t = r.nextSibling;
  return u ? u.nextSibling = t : e.firstChild = t, t ? t.previousSibling = u : e.lastChild = u, r.parentNode = null, r.previousSibling = null, r.nextSibling = null, or(e.ownerDocument, e), r;
}
function Fu(e) {
  return e && (e.nodeType === D.DOCUMENT_NODE || e.nodeType === D.DOCUMENT_FRAGMENT_NODE || e.nodeType === D.ELEMENT_NODE);
}
function Su(e) {
  return e && (P(e) || ar(e) || j(e) || e.nodeType === D.DOCUMENT_FRAGMENT_NODE || e.nodeType === D.COMMENT_NODE || e.nodeType === D.PROCESSING_INSTRUCTION_NODE);
}
function j(e) {
  return e && e.nodeType === D.DOCUMENT_TYPE_NODE;
}
function P(e) {
  return e && e.nodeType === D.ELEMENT_NODE;
}
function ar(e) {
  return e && e.nodeType === D.TEXT_NODE;
}
function vr(e, r) {
  var u = e.childNodes || [];
  if (U(u, P) || j(r))
    return !1;
  var t = U(u, j);
  return !(r && t && u.indexOf(t) > u.indexOf(r));
}
function Er(e, r) {
  var u = e.childNodes || [];
  function t(o) {
    return P(o) && o !== r;
  }
  if (U(u, t))
    return !1;
  var n = U(u, j);
  return !(r && n && u.indexOf(n) > u.indexOf(r));
}
function _u(e, r, u) {
  if (!Fu(e))
    throw new y(k, "Unexpected parent node type " + e.nodeType);
  if (u && u.parentNode !== e)
    throw new y(jr, "child not in parent");
  if (
    // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
    !Su(r) || // 5. If either `node` is a Text node and `parent` is a document,
    // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
    // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
    // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
    j(r) && e.nodeType !== D.DOCUMENT_NODE
  )
    throw new y(
      k,
      "Unexpected node type " + r.nodeType + " for parent node type " + e.nodeType
    );
}
function qu(e, r, u) {
  var t = e.childNodes || [], n = r.childNodes || [];
  if (r.nodeType === D.DOCUMENT_FRAGMENT_NODE) {
    var o = n.filter(P);
    if (o.length > 1 || U(n, ar))
      throw new y(k, "More than one element or text in fragment");
    if (o.length === 1 && !vr(e, u))
      throw new y(k, "Element in fragment can not be inserted before doctype");
  }
  if (P(r) && !vr(e, u))
    throw new y(k, "Only one element can be added and only after doctype");
  if (j(r)) {
    if (U(t, j))
      throw new y(k, "Only one doctype is allowed");
    var a = U(t, P);
    if (u && t.indexOf(a) < t.indexOf(u))
      throw new y(k, "Doctype can only be inserted before an element");
    if (!u && a)
      throw new y(k, "Doctype can not be appended since element is present");
  }
}
function Jr(e, r, u) {
  var t = e.childNodes || [], n = r.childNodes || [];
  if (r.nodeType === D.DOCUMENT_FRAGMENT_NODE) {
    var o = n.filter(P);
    if (o.length > 1 || U(n, ar))
      throw new y(k, "More than one element or text in fragment");
    if (o.length === 1 && !Er(e, u))
      throw new y(k, "Element in fragment can not be inserted before doctype");
  }
  if (P(r) && !Er(e, u))
    throw new y(k, "Only one element can be added and only after doctype");
  if (j(r)) {
    if (U(t, function(c) {
      return j(c) && c !== u;
    }))
      throw new y(k, "Only one doctype is allowed");
    var a = U(t, P);
    if (u && t.indexOf(a) < t.indexOf(u))
      throw new y(k, "Doctype can only be inserted before an element");
  }
}
function je(e, r, u, t) {
  _u(e, r, u), e.nodeType === D.DOCUMENT_NODE && (t || qu)(e, r, u);
  var n = r.parentNode;
  if (n && n.removeChild(r), r.nodeType === G) {
    var o = r.firstChild;
    if (o == null)
      return r;
    var a = r.lastChild;
  } else
    o = a = r;
  var i = u ? u.previousSibling : e.lastChild;
  o.previousSibling = i, a.nextSibling = u, i ? i.nextSibling = o : e.firstChild = o, u == null ? e.lastChild = a : u.previousSibling = a;
  do
    o.parentNode = e;
  while (o !== a && (o = o.nextSibling));
  return or(e.ownerDocument || e, e), r.nodeType == G && (r.firstChild = r.lastChild = null), r;
}
function ku(e, r) {
  return r.parentNode && r.parentNode.removeChild(r), r.parentNode = e, r.previousSibling = e.lastChild, r.nextSibling = null, r.previousSibling ? r.previousSibling.nextSibling = r : e.firstChild = r, e.lastChild = r, or(e.ownerDocument, e, r), r;
}
qe.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: zr,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function(e, r) {
    if (e.nodeType == G) {
      for (var u = e.firstChild; u; ) {
        var t = u.nextSibling;
        this.insertBefore(u, r), u = t;
      }
      return e;
    }
    return je(this, e, r), e.ownerDocument = this, this.documentElement === null && e.nodeType === M && (this.documentElement = e), e;
  },
  removeChild: function(e) {
    return this.documentElement == e && (this.documentElement = null), Wr(this, e);
  },
  replaceChild: function(e, r) {
    je(this, e, r, Jr), e.ownerDocument = this, r && this.removeChild(r), P(e) && (this.documentElement = e);
  },
  // Introduced in DOM Level 2:
  importNode: function(e, r) {
    return ru(this, e, r);
  },
  // Introduced in DOM Level 2:
  getElementById: function(e) {
    var r = null;
    return Te(this.documentElement, function(u) {
      if (u.nodeType == M && u.getAttribute("id") == e)
        return r = u, !0;
    }), r;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function(e) {
    var r = gr(e);
    return new pe(this, function(u) {
      var t = [];
      return r.length > 0 && Te(u.documentElement, function(n) {
        if (n !== u && n.nodeType === M) {
          var o = n.getAttribute("class");
          if (o) {
            var a = e === o;
            if (!a) {
              var i = gr(o);
              a = r.every(xu(i));
            }
            a && t.push(n);
          }
        }
      }), t;
    });
  },
  //document factory method:
  createElement: function(e) {
    var r = new ee();
    r.ownerDocument = this, r.nodeName = e, r.tagName = e, r.localName = e, r.childNodes = new z();
    var u = r.attributes = new Ge();
    return u._ownerElement = r, r;
  },
  createDocumentFragment: function() {
    var e = new Ye();
    return e.ownerDocument = this, e.childNodes = new z(), e;
  },
  createTextNode: function(e) {
    var r = new ir();
    return r.ownerDocument = this, r.appendData(e), r;
  },
  createComment: function(e) {
    var r = new sr();
    return r.ownerDocument = this, r.appendData(e), r;
  },
  createCDATASection: function(e) {
    var r = new lr();
    return r.ownerDocument = this, r.appendData(e), r;
  },
  createProcessingInstruction: function(e, r) {
    var u = new pr();
    return u.ownerDocument = this, u.tagName = u.nodeName = u.target = e, u.nodeValue = u.data = r, u;
  },
  createAttribute: function(e) {
    var r = new $e();
    return r.ownerDocument = this, r.name = e, r.nodeName = e, r.localName = e, r.specified = !0, r;
  },
  createEntityReference: function(e) {
    var r = new cr();
    return r.ownerDocument = this, r.nodeName = e, r;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(e, r) {
    var u = new ee(), t = r.split(":"), n = u.attributes = new Ge();
    return u.childNodes = new z(), u.ownerDocument = this, u.nodeName = r, u.tagName = r, u.namespaceURI = e, t.length == 2 ? (u.prefix = t[0], u.localName = t[1]) : u.localName = r, n._ownerElement = u, u;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(e, r) {
    var u = new $e(), t = r.split(":");
    return u.ownerDocument = this, u.nodeName = r, u.name = r, u.namespaceURI = e, u.specified = !0, t.length == 2 ? (u.prefix = t[0], u.localName = t[1]) : u.localName = r, u;
  }
};
O(qe, D);
function ee() {
  this._nsMap = {};
}
ee.prototype = {
  nodeType: M,
  hasAttribute: function(e) {
    return this.getAttributeNode(e) != null;
  },
  getAttribute: function(e) {
    var r = this.getAttributeNode(e);
    return r && r.value || "";
  },
  getAttributeNode: function(e) {
    return this.attributes.getNamedItem(e);
  },
  setAttribute: function(e, r) {
    var u = this.ownerDocument.createAttribute(e);
    u.value = u.nodeValue = "" + r, this.setAttributeNode(u);
  },
  removeAttribute: function(e) {
    var r = this.getAttributeNode(e);
    r && this.removeAttributeNode(r);
  },
  //four real opeartion method
  appendChild: function(e) {
    return e.nodeType === G ? this.insertBefore(e, null) : ku(this, e);
  },
  setAttributeNode: function(e) {
    return this.attributes.setNamedItem(e);
  },
  setAttributeNodeNS: function(e) {
    return this.attributes.setNamedItemNS(e);
  },
  removeAttributeNode: function(e) {
    return this.attributes.removeNamedItem(e.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function(e, r) {
    var u = this.getAttributeNodeNS(e, r);
    u && this.removeAttributeNode(u);
  },
  hasAttributeNS: function(e, r) {
    return this.getAttributeNodeNS(e, r) != null;
  },
  getAttributeNS: function(e, r) {
    var u = this.getAttributeNodeNS(e, r);
    return u && u.value || "";
  },
  setAttributeNS: function(e, r, u) {
    var t = this.ownerDocument.createAttributeNS(e, r);
    t.value = t.nodeValue = "" + u, this.setAttributeNode(t);
  },
  getAttributeNodeNS: function(e, r) {
    return this.attributes.getNamedItemNS(e, r);
  },
  getElementsByTagName: function(e) {
    return new pe(this, function(r) {
      var u = [];
      return Te(r, function(t) {
        t !== r && t.nodeType == M && (e === "*" || t.tagName == e) && u.push(t);
      }), u;
    });
  },
  getElementsByTagNameNS: function(e, r) {
    return new pe(this, function(u) {
      var t = [];
      return Te(u, function(n) {
        n !== u && n.nodeType === M && (e === "*" || n.namespaceURI === e) && (r === "*" || n.localName == r) && t.push(n);
      }), t;
    });
  }
};
qe.prototype.getElementsByTagName = ee.prototype.getElementsByTagName;
qe.prototype.getElementsByTagNameNS = ee.prototype.getElementsByTagNameNS;
O(ee, D);
function $e() {
}
$e.prototype.nodeType = ce;
O($e, D);
function ke() {
}
ke.prototype = {
  data: "",
  substringData: function(e, r) {
    return this.data.substring(e, e + r);
  },
  appendData: function(e) {
    e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
  },
  insertData: function(e, r) {
    this.replaceData(e, 0, r);
  },
  appendChild: function(e) {
    throw new Error(N[k]);
  },
  deleteData: function(e, r) {
    this.replaceData(e, r, "");
  },
  replaceData: function(e, r, u) {
    var t = this.data.substring(0, e), n = this.data.substring(e + r);
    u = t + u + n, this.nodeValue = this.data = u, this.length = u.length;
  }
};
O(ke, D);
function ir() {
}
ir.prototype = {
  nodeName: "#text",
  nodeType: ze,
  splitText: function(e) {
    var r = this.data, u = r.substring(e);
    r = r.substring(0, e), this.data = this.nodeValue = r, this.length = r.length;
    var t = this.ownerDocument.createTextNode(u);
    return this.parentNode && this.parentNode.insertBefore(t, this.nextSibling), t;
  }
};
O(ir, ke);
function sr() {
}
sr.prototype = {
  nodeName: "#comment",
  nodeType: Vr
};
O(sr, ke);
function lr() {
}
lr.prototype = {
  nodeName: "#cdata-section",
  nodeType: Mr
};
O(lr, ke);
function Xe() {
}
Xe.prototype.nodeType = Gr;
O(Xe, D);
function Zr() {
}
Zr.prototype.nodeType = Nu;
O(Zr, D);
function Qr() {
}
Qr.prototype.nodeType = Bu;
O(Qr, D);
function cr() {
}
cr.prototype.nodeType = Ur;
O(cr, D);
function Ye() {
}
Ye.prototype.nodeName = "#document-fragment";
Ye.prototype.nodeType = G;
O(Ye, D);
function pr() {
}
pr.prototype.nodeType = Pr;
O(pr, D);
function Kr() {
}
Kr.prototype.serializeToString = function(e, r, u) {
  return eu.call(e, r, u);
};
D.prototype.toString = eu;
function eu(e, r) {
  var u = [], t = this.nodeType == 9 && this.documentElement || this, n = t.prefix, o = t.namespaceURI;
  if (o && n == null) {
    var n = t.lookupPrefix(o);
    if (n == null)
      var a = [
        { namespace: o, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return se(this, u, e, r, a), u.join("");
}
function Cr(e, r, u) {
  var t = e.prefix || "", n = e.namespaceURI;
  if (!n || t === "xml" && n === Ne.XML || n === Ne.XMLNS)
    return !1;
  for (var o = u.length; o--; ) {
    var a = u[o];
    if (a.prefix === t)
      return a.namespace !== n;
  }
  return !0;
}
function Je(e, r, u) {
  e.push(" ", r, '="', u.replace(/[<>&"\t\n\r]/g, Xr), '"');
}
function se(e, r, u, t, n) {
  if (n || (n = []), t)
    if (e = t(e), e) {
      if (typeof e == "string") {
        r.push(e);
        return;
      }
    } else
      return;
  switch (e.nodeType) {
    case M:
      var o = e.attributes, a = o.length, b = e.firstChild, i = e.tagName;
      u = Ne.isHTML(e.namespaceURI) || u;
      var c = i;
      if (!u && !e.prefix && e.namespaceURI) {
        for (var s, l = 0; l < o.length; l++)
          if (o.item(l).name === "xmlns") {
            s = o.item(l).value;
            break;
          }
        if (!s)
          for (var f = n.length - 1; f >= 0; f--) {
            var p = n[f];
            if (p.prefix === "" && p.namespace === e.namespaceURI) {
              s = p.namespace;
              break;
            }
          }
        if (s !== e.namespaceURI)
          for (var f = n.length - 1; f >= 0; f--) {
            var p = n[f];
            if (p.namespace === e.namespaceURI) {
              p.prefix && (c = p.prefix + ":" + i);
              break;
            }
          }
      }
      r.push("<", c);
      for (var m = 0; m < a; m++) {
        var v = o.item(m);
        v.prefix == "xmlns" ? n.push({ prefix: v.localName, namespace: v.value }) : v.nodeName == "xmlns" && n.push({ prefix: "", namespace: v.value });
      }
      for (var m = 0; m < a; m++) {
        var v = o.item(m);
        if (Cr(v, u, n)) {
          var d = v.prefix || "", g = v.namespaceURI;
          Je(r, d ? "xmlns:" + d : "xmlns", g), n.push({ prefix: d, namespace: g });
        }
        se(v, r, u, t, n);
      }
      if (i === c && Cr(e, u, n)) {
        var d = e.prefix || "", g = e.namespaceURI;
        Je(r, d ? "xmlns:" + d : "xmlns", g), n.push({ prefix: d, namespace: g });
      }
      if (b || u && !/^(?:meta|link|img|br|hr|input)$/i.test(i)) {
        if (r.push(">"), u && /^script$/i.test(i))
          for (; b; )
            b.data ? r.push(b.data) : se(b, r, u, t, n.slice()), b = b.nextSibling;
        else
          for (; b; )
            se(b, r, u, t, n.slice()), b = b.nextSibling;
        r.push("</", c, ">");
      } else
        r.push("/>");
      return;
    case zr:
    case G:
      for (var b = e.firstChild; b; )
        se(b, r, u, t, n.slice()), b = b.nextSibling;
      return;
    case ce:
      return Je(r, e.name, e.value);
    case ze:
      return r.push(
        e.data.replace(/[<&>]/g, Xr)
      );
    case Mr:
      return r.push("<![CDATA[", e.data, "]]>");
    case Vr:
      return r.push("<!--", e.data, "-->");
    case Gr:
      var _ = e.publicId, w = e.systemId;
      if (r.push("<!DOCTYPE ", e.name), _)
        r.push(" PUBLIC ", _), w && w != "." && r.push(" ", w), r.push(">");
      else if (w && w != ".")
        r.push(" SYSTEM ", w, ">");
      else {
        var F = e.internalSubset;
        F && r.push(" [", F, "]"), r.push(">");
      }
      return;
    case Pr:
      return r.push("<?", e.target, " ", e.data, "?>");
    case Ur:
      return r.push("&", e.nodeName, ";");
    default:
      r.push("??", e.nodeName);
  }
}
function ru(e, r, u) {
  var t;
  switch (r.nodeType) {
    case M:
      t = r.cloneNode(!1), t.ownerDocument = e;
    case G:
      break;
    case ce:
      u = !0;
      break;
  }
  if (t || (t = r.cloneNode(!1)), t.ownerDocument = e, t.parentNode = null, u)
    for (var n = r.firstChild; n; )
      t.appendChild(ru(e, n, u)), n = n.nextSibling;
  return t;
}
function Qe(e, r, u) {
  var t = new r.constructor();
  for (var n in r)
    if (Object.prototype.hasOwnProperty.call(r, n)) {
      var o = r[n];
      typeof o != "object" && o != t[n] && (t[n] = o);
    }
  switch (r.childNodes && (t.childNodes = new z()), t.ownerDocument = e, t.nodeType) {
    case M:
      var a = r.attributes, i = t.attributes = new Ge(), c = a.length;
      i._ownerElement = t;
      for (var s = 0; s < c; s++)
        t.setAttributeNode(Qe(e, a.item(s), !0));
      break;
    case ce:
      u = !0;
  }
  if (u)
    for (var l = r.firstChild; l; )
      t.appendChild(Qe(e, l, u)), l = l.nextSibling;
  return t;
}
function uu(e, r, u) {
  e[r] = u;
}
try {
  if (Object.defineProperty) {
    let e = function(r) {
      switch (r.nodeType) {
        case M:
        case G:
          var u = [];
          for (r = r.firstChild; r; )
            r.nodeType !== 7 && r.nodeType !== 8 && u.push(e(r)), r = r.nextSibling;
          return u.join("");
        default:
          return r.nodeValue;
      }
    };
    Object.defineProperty(pe.prototype, "length", {
      get: function() {
        return nr(this), this.$$length;
      }
    }), Object.defineProperty(D.prototype, "textContent", {
      get: function() {
        return e(this);
      },
      set: function(r) {
        switch (this.nodeType) {
          case M:
          case G:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (r || String(r)) && this.appendChild(this.ownerDocument.createTextNode(r));
            break;
          default:
            this.data = r, this.value = r, this.nodeValue = r;
        }
      }
    }), uu = function(r, u, t) {
      r["$$" + u] = t;
    };
  }
} catch {
}
J.DocumentType = Xe;
J.DOMException = y;
J.DOMImplementation = Hr;
J.Element = ee;
J.Node = D;
J.NodeList = z;
J.XMLSerializer = Kr;
var We = {}, tu = {};
(function(e) {
  var r = $.freeze;
  e.XML_ENTITIES = r({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  }), e.HTML_ENTITIES = r({
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    AMP: "&",
    amp: "&",
    And: "⩓",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    ap: "≈",
    apacir: "⩯",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    Barwed: "⌆",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    Because: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxDL: "╗",
    boxDl: "╖",
    boxdL: "╕",
    boxdl: "┐",
    boxDR: "╔",
    boxDr: "╓",
    boxdR: "╒",
    boxdr: "┌",
    boxH: "═",
    boxh: "─",
    boxHD: "╦",
    boxHd: "╤",
    boxhD: "╥",
    boxhd: "┬",
    boxHU: "╩",
    boxHu: "╧",
    boxhU: "╨",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxUL: "╝",
    boxUl: "╜",
    boxuL: "╛",
    boxul: "┘",
    boxUR: "╚",
    boxUr: "╙",
    boxuR: "╘",
    boxur: "└",
    boxV: "║",
    boxv: "│",
    boxVH: "╬",
    boxVh: "╫",
    boxvH: "╪",
    boxvh: "┼",
    boxVL: "╣",
    boxVl: "╢",
    boxvL: "╡",
    boxvl: "┤",
    boxVR: "╠",
    boxVr: "╟",
    boxvR: "╞",
    boxvr: "├",
    bprime: "‵",
    Breve: "˘",
    breve: "˘",
    brvbar: "¦",
    Bscr: "ℬ",
    bscr: "𝒷",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    Cap: "⋒",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    CenterDot: "·",
    centerdot: "·",
    Cfr: "ℭ",
    cfr: "𝔠",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    cir: "○",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    Colon: "∷",
    colon: ":",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    Conint: "∯",
    conint: "∮",
    ContourIntegral: "∮",
    Copf: "ℂ",
    copf: "𝕔",
    coprod: "∐",
    Coproduct: "∐",
    COPY: "©",
    copy: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    Cross: "⨯",
    cross: "✗",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    Cup: "⋓",
    cup: "∪",
    cupbrcap: "⩈",
    CupCap: "≍",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    Dagger: "‡",
    dagger: "†",
    daleth: "ℸ",
    Darr: "↡",
    dArr: "⇓",
    darr: "↓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    DD: "ⅅ",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    Diamond: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    Downarrow: "⇓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    ecir: "≖",
    Ecirc: "Ê",
    ecirc: "ê",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    eDot: "≑",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp: " ",
    emsp13: " ",
    emsp14: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    Escr: "ℰ",
    escr: "ℯ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    ExponentialE: "ⅇ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    ForAll: "∀",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    Fscr: "ℱ",
    fscr: "𝒻",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    gE: "≧",
    ge: "≥",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    Gg: "⋙",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gl: "≷",
    gla: "⪥",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gnE: "≩",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    Gt: "≫",
    GT: ">",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    hArr: "⇔",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    Hfr: "ℌ",
    hfr: "𝔥",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    Hopf: "ℍ",
    hopf: "𝕙",
    horbar: "―",
    HorizontalLine: "─",
    Hscr: "ℋ",
    hscr: "𝒽",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    Ifr: "ℑ",
    ifr: "𝔦",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Im: "ℑ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    Int: "∬",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    Iscr: "ℐ",
    iscr: "𝒾",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    Lang: "⟪",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    Larr: "↞",
    lArr: "⇐",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    lAtail: "⤛",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lBarr: "⤎",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    lE: "≦",
    le: "≤",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    Leftarrow: "⇐",
    leftarrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    Ll: "⋘",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lnE: "≨",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftarrow: "⟵",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    Lscr: "ℒ",
    lscr: "𝓁",
    Lsh: "↰",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    Lt: "≪",
    LT: "<",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "·",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    Mscr: "ℳ",
    mscr: "𝓂",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    nearhk: "⤤",
    neArr: "⇗",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlArr: "⇍",
    nlarr: "↚",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nLeftarrow: "⇍",
    nleftarrow: "↚",
    nLeftrightarrow: "⇎",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    Nopf: "ℕ",
    nopf: "𝕟",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nRightarrow: "⇏",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nVDash: "⊯",
    nVdash: "⊮",
    nvDash: "⊭",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwArr: "⇖",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    ocir: "⊚",
    Ocirc: "Ô",
    ocirc: "ô",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    Or: "⩔",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    Otimes: "⨷",
    otimes: "⊗",
    otimesas: "⨶",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    par: "∥",
    para: "¶",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    Popf: "ℙ",
    popf: "𝕡",
    pound: "£",
    Pr: "⪻",
    pr: "≺",
    prap: "⪷",
    prcue: "≼",
    prE: "⪳",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    Prime: "″",
    prime: "′",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportion: "∷",
    Proportional: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    Qopf: "ℚ",
    qopf: "𝕢",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    QUOT: '"',
    quot: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    Rang: "⟫",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    Rarr: "↠",
    rArr: "⇒",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    rAtail: "⤜",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    RBarr: "⤐",
    rBarr: "⤏",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    Re: "ℜ",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    REG: "®",
    reg: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    Rfr: "ℜ",
    rfr: "𝔯",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    Rightarrow: "⇒",
    rightarrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    Ropf: "ℝ",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    Rscr: "ℛ",
    rscr: "𝓇",
    Rsh: "↱",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    Sc: "⪼",
    sc: "≻",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    sccue: "≽",
    scE: "⪴",
    sce: "⪰",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    searhk: "⤥",
    seArr: "⇘",
    searr: "↘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    Square: "□",
    square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    Sub: "⋐",
    sub: "⊂",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    Subset: "⋐",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    Sum: "∑",
    sum: "∑",
    sung: "♪",
    Sup: "⋑",
    sup: "⊃",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    Supset: "⋑",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swArr: "⇙",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "	",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    Therefore: "∴",
    therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    thinsp: " ",
    ThinSpace: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    Tilde: "∼",
    tilde: "˜",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    times: "×",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    TRADE: "™",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    Uarr: "↟",
    uArr: "⇑",
    uarr: "↑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrow: "↑",
    Uparrow: "⇑",
    uparrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    updownarrow: "↕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    upsi: "υ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    vArr: "⇕",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    Vbar: "⫫",
    vBar: "⫨",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    VDash: "⊫",
    Vdash: "⊩",
    vDash: "⊨",
    vdash: "⊢",
    Vdashl: "⫦",
    Vee: "⋁",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    Verbar: "‖",
    verbar: "|",
    Vert: "‖",
    vert: "|",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    Wedge: "⋀",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xhArr: "⟺",
    xharr: "⟷",
    Xi: "Ξ",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    Yuml: "Ÿ",
    yuml: "ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    Zfr: "ℨ",
    zfr: "𝔷",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    Zopf: "ℤ",
    zopf: "𝕫",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }), e.entityMap = e.HTML_ENTITIES;
})(tu);
var fr = {}, Fe = $.NAMESPACE, Ke = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, wr = new RegExp("[\\-\\.0-9" + Ke.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), yr = new RegExp("^" + Ke.source + wr.source + "*(?::" + Ke.source + wr.source + "*)?$"), ve = 0, X = 1, ue = 2, Ee = 3, te = 4, ne = 5, Ce = 6, Me = 7;
function fe(e, r) {
  this.message = e, this.locator = r, Error.captureStackTrace && Error.captureStackTrace(this, fe);
}
fe.prototype = new Error();
fe.prototype.name = fe.name;
function nu() {
}
nu.prototype = {
  parse: function(e, r, u) {
    var t = this.domBuilder;
    t.startDocument(), ou(r, r = {}), Ru(
      e,
      r,
      u,
      t,
      this.errorHandler
    ), t.endDocument();
  }
};
function Ru(e, r, u, t, n) {
  function o(E) {
    if (E > 65535) {
      E -= 65536;
      var q = 55296 + (E >> 10), De = 56320 + (E & 1023);
      return String.fromCharCode(q, De);
    } else
      return String.fromCharCode(E);
  }
  function a(E) {
    var q = E.slice(1, -1);
    return Object.hasOwnProperty.call(u, q) ? u[q] : q.charAt(0) === "#" ? o(parseInt(q.substr(1).replace("x", "0x"))) : (n.error("entity not found:" + E), E);
  }
  function i(E) {
    if (E > d) {
      var q = e.substring(d, E).replace(/&#?\w+;/g, a);
      p && c(d), t.characters(q, 0, E - d), d = E;
    }
  }
  function c(E, q) {
    for (; E >= l && (q = f.exec(e)); )
      s = q.index, l = s + q[0].length, p.lineNumber++;
    p.columnNumber = E - s + 1;
  }
  for (var s = 0, l = 0, f = /.*(?:\r\n?|\n)|.*$/g, p = t.locator, m = [{ currentNSMap: r }], v = {}, d = 0; ; ) {
    try {
      var g = e.indexOf("<", d);
      if (g < 0) {
        if (!e.substr(d).match(/^\s*$/)) {
          var b = t.doc, _ = b.createTextNode(e.substr(d));
          b.appendChild(_), t.currentElement = _;
        }
        return;
      }
      switch (g > d && i(g), e.charAt(g + 1)) {
        case "/":
          var x = e.indexOf(">", g + 3), w = e.substring(g + 2, x).replace(/[ \t\n\r]+$/g, ""), F = m.pop();
          x < 0 ? (w = e.substring(g + 2).replace(/[\s<].*/, ""), n.error("end tag name: " + w + " is not complete:" + F.tagName), x = g + 1 + w.length) : w.match(/\s</) && (w = w.replace(/[\s<].*/, ""), n.error("end tag name: " + w + " maybe not complete"), x = g + 1 + w.length);
          var re = F.localNSMap, he = F.tagName == w, Oe = he || F.tagName && F.tagName.toLowerCase() == w.toLowerCase();
          if (Oe) {
            if (t.endElement(F.uri, F.localName, w), re)
              for (var me in re)
                Object.prototype.hasOwnProperty.call(re, me) && t.endPrefixMapping(me);
            he || n.fatalError("end tag name: " + w + " is not match the current start tagName:" + F.tagName);
          } else
            m.push(F);
          x++;
          break;
        case "?":
          p && c(g), x = Uu(e, g, t);
          break;
        case "!":
          p && c(g), x = Mu(e, g, t, n);
          break;
        default:
          p && c(g);
          var T = new au(), Z = m[m.length - 1].currentNSMap, x = Ou(e, g, T, Z, a, n), A = T.length;
          if (!T.closed && Lu(e, x, T.tagName, v) && (T.closed = !0, u.nbsp || n.warning("unclosed xml attribute")), p && A) {
            for (var Ie = xr(p, {}), H = 0; H < A; H++) {
              var ge = T[H];
              c(ge.offset), ge.locator = xr(p, {});
            }
            t.locator = Ie, Br(T, t, Z) && m.push(T), t.locator = p;
          } else
            Br(T, t, Z) && m.push(T);
          Fe.isHTML(T.uri) && !T.closed ? x = Iu(e, x, T.tagName, a, t) : x++;
      }
    } catch (E) {
      if (E instanceof fe)
        throw E;
      n.error("element parse error: " + E), x = -1;
    }
    x > d ? d = x : i(Math.max(g, d) + 1);
  }
}
function xr(e, r) {
  return r.lineNumber = e.lineNumber, r.columnNumber = e.columnNumber, r;
}
function Ou(e, r, u, t, n, o) {
  function a(p, m, v) {
    u.attributeNames.hasOwnProperty(p) && o.fatalError("Attribute " + p + " redefined"), u.addValue(
      p,
      // @see https://www.w3.org/TR/xml/#AVNormalize
      // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
      // - recursive replacement of (DTD) entity references
      // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
      m.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, n),
      v
    );
  }
  for (var i, c, s = ++r, l = ve; ; ) {
    var f = e.charAt(s);
    switch (f) {
      case "=":
        if (l === X)
          i = e.slice(r, s), l = Ee;
        else if (l === ue)
          l = Ee;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (l === Ee || l === X)
          if (l === X && (o.warning('attribute value must after "="'), i = e.slice(r, s)), r = s + 1, s = e.indexOf(f, r), s > 0)
            c = e.slice(r, s), a(i, c, r - 1), l = ne;
          else
            throw new Error("attribute value no end '" + f + "' match");
        else if (l == te)
          c = e.slice(r, s), a(i, c, r), o.warning('attribute "' + i + '" missed start quot(' + f + ")!!"), r = s + 1, l = ne;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (l) {
          case ve:
            u.setTagName(e.slice(r, s));
          case ne:
          case Ce:
          case Me:
            l = Me, u.closed = !0;
          case te:
          case X:
            break;
          case ue:
            u.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return o.error("unexpected end of input"), l == ve && u.setTagName(e.slice(r, s)), s;
      case ">":
        switch (l) {
          case ve:
            u.setTagName(e.slice(r, s));
          case ne:
          case Ce:
          case Me:
            break;
          case te:
          case X:
            c = e.slice(r, s), c.slice(-1) === "/" && (u.closed = !0, c = c.slice(0, -1));
          case ue:
            l === ue && (c = i), l == te ? (o.warning('attribute "' + c + '" missed quot(")!'), a(i, c, r)) : ((!Fe.isHTML(t[""]) || !c.match(/^(?:disabled|checked|selected)$/i)) && o.warning('attribute "' + c + '" missed value!! "' + c + '" instead!!'), a(c, c, r));
            break;
          case Ee:
            throw new Error("attribute value missed!!");
        }
        return s;
      case "":
        f = " ";
      default:
        if (f <= " ")
          switch (l) {
            case ve:
              u.setTagName(e.slice(r, s)), l = Ce;
              break;
            case X:
              i = e.slice(r, s), l = ue;
              break;
            case te:
              var c = e.slice(r, s);
              o.warning('attribute "' + c + '" missed quot(")!!'), a(i, c, r);
            case ne:
              l = Ce;
              break;
          }
        else
          switch (l) {
            case ue:
              u.tagName, (!Fe.isHTML(t[""]) || !i.match(/^(?:disabled|checked|selected)$/i)) && o.warning('attribute "' + i + '" missed value!! "' + i + '" instead2!!'), a(i, i, r), r = s, l = X;
              break;
            case ne:
              o.warning('attribute space is required"' + i + '"!!');
            case Ce:
              l = X, r = s;
              break;
            case Ee:
              l = te, r = s;
              break;
            case Me:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    s++;
  }
}
function Br(e, r, u) {
  for (var t = e.tagName, n = null, f = e.length; f--; ) {
    var o = e[f], a = o.qName, i = o.value, p = a.indexOf(":");
    if (p > 0)
      var c = o.prefix = a.slice(0, p), s = a.slice(p + 1), l = c === "xmlns" && s;
    else
      s = a, c = null, l = a === "xmlns" && "";
    o.localName = s, l !== !1 && (n == null && (n = {}, ou(u, u = {})), u[l] = n[l] = i, o.uri = Fe.XMLNS, r.startPrefixMapping(l, i));
  }
  for (var f = e.length; f--; ) {
    o = e[f];
    var c = o.prefix;
    c && (c === "xml" && (o.uri = Fe.XML), c !== "xmlns" && (o.uri = u[c || ""]));
  }
  var p = t.indexOf(":");
  p > 0 ? (c = e.prefix = t.slice(0, p), s = e.localName = t.slice(p + 1)) : (c = null, s = e.localName = t);
  var m = e.uri = u[c || ""];
  if (r.startElement(m, s, t, e), e.closed) {
    if (r.endElement(m, s, t), n)
      for (c in n)
        Object.prototype.hasOwnProperty.call(n, c) && r.endPrefixMapping(c);
  } else
    return e.currentNSMap = u, e.localNSMap = n, !0;
}
function Iu(e, r, u, t, n) {
  if (/^(?:script|textarea)$/i.test(u)) {
    var o = e.indexOf("</" + u + ">", r), a = e.substring(r + 1, o);
    if (/[&<]/.test(a))
      return /^script$/i.test(u) ? (n.characters(a, 0, a.length), o) : (a = a.replace(/&#?\w+;/g, t), n.characters(a, 0, a.length), o);
  }
  return r + 1;
}
function Lu(e, r, u, t) {
  var n = t[u];
  return n == null && (n = e.lastIndexOf("</" + u + ">"), n < r && (n = e.lastIndexOf("</" + u)), t[u] = n), n < r;
}
function ou(e, r) {
  for (var u in e)
    Object.prototype.hasOwnProperty.call(e, u) && (r[u] = e[u]);
}
function Mu(e, r, u, t) {
  var n = e.charAt(r + 2);
  switch (n) {
    case "-":
      if (e.charAt(r + 3) === "-") {
        var o = e.indexOf("-->", r + 4);
        return o > r ? (u.comment(e, r + 4, o - r - 4), o + 3) : (t.error("Unclosed comment"), -1);
      } else
        return -1;
    default:
      if (e.substr(r + 3, 6) == "CDATA[") {
        var o = e.indexOf("]]>", r + 9);
        return u.startCDATA(), u.characters(e, r + 9, o - r - 9), u.endCDATA(), o + 3;
      }
      var a = Pu(e, r), i = a.length;
      if (i > 1 && /!doctype/i.test(a[0][0])) {
        var c = a[1][0], s = !1, l = !1;
        i > 3 && (/^public$/i.test(a[2][0]) ? (s = a[3][0], l = i > 4 && a[4][0]) : /^system$/i.test(a[2][0]) && (l = a[3][0]));
        var f = a[i - 1];
        return u.startDTD(c, s, l), u.endDTD(), f.index + f[0].length;
      }
  }
  return -1;
}
function Uu(e, r, u) {
  var t = e.indexOf("?>", r);
  if (t) {
    var n = e.substring(r, t).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return n ? (n[0].length, u.processingInstruction(n[1], n[2]), t + 2) : -1;
  }
  return -1;
}
function au() {
  this.attributeNames = {};
}
au.prototype = {
  setTagName: function(e) {
    if (!yr.test(e))
      throw new Error("invalid tagName:" + e);
    this.tagName = e;
  },
  addValue: function(e, r, u) {
    if (!yr.test(e))
      throw new Error("invalid attribute:" + e);
    this.attributeNames[e] = this.length, this[this.length++] = { qName: e, value: r, offset: u };
  },
  length: 0,
  getLocalName: function(e) {
    return this[e].localName;
  },
  getLocator: function(e) {
    return this[e].locator;
  },
  getQName: function(e) {
    return this[e].qName;
  },
  getURI: function(e) {
    return this[e].uri;
  },
  getValue: function(e) {
    return this[e].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function Pu(e, r) {
  var u, t = [], n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (n.lastIndex = r, n.exec(e); u = n.exec(e); )
    if (t.push(u), u[1])
      return t;
}
fr.XMLReader = nu;
fr.ParseError = fe;
var Vu = $, zu = J, Nr = tu, iu = fr, Gu = zu.DOMImplementation, Tr = Vu.NAMESPACE, ju = iu.ParseError, $u = iu.XMLReader;
function su(e) {
  return e.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function lu(e) {
  this.options = e || { locator: {} };
}
lu.prototype.parseFromString = function(e, r) {
  var u = this.options, t = new $u(), n = u.domBuilder || new Re(), o = u.errorHandler, a = u.locator, i = u.xmlns || {}, c = /\/x?html?$/.test(r), s = c ? Nr.HTML_ENTITIES : Nr.XML_ENTITIES;
  a && n.setDocumentLocator(a), t.errorHandler = Hu(o, n, a), t.domBuilder = u.domBuilder || n, c && (i[""] = Tr.HTML), i.xml = i.xml || Tr.XML;
  var l = u.normalizeLineEndings || su;
  return e && typeof e == "string" ? t.parse(
    l(e),
    i,
    s
  ) : t.errorHandler.error("invalid doc source"), n.doc;
};
function Hu(e, r, u) {
  if (!e) {
    if (r instanceof Re)
      return r;
    e = r;
  }
  var t = {}, n = e instanceof Function;
  u = u || {};
  function o(a) {
    var i = e[a];
    !i && n && (i = e.length == 2 ? function(c) {
      e(a, c);
    } : e), t[a] = i && function(c) {
      i("[xmldom " + a + "]	" + c + er(u));
    } || function() {
    };
  }
  return o("warning"), o("error"), o("fatalError"), t;
}
function Re() {
  this.cdata = !1;
}
function oe(e, r) {
  r.lineNumber = e.lineNumber, r.columnNumber = e.columnNumber;
}
Re.prototype = {
  startDocument: function() {
    this.doc = new Gu().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(e, r, u, t) {
    var n = this.doc, o = n.createElementNS(e, u || r), a = t.length;
    Ue(this, o), this.currentElement = o, this.locator && oe(this.locator, o);
    for (var i = 0; i < a; i++) {
      var e = t.getURI(i), c = t.getValue(i), u = t.getQName(i), s = n.createAttributeNS(e, u);
      this.locator && oe(t.getLocator(i), s), s.value = s.nodeValue = c, o.setAttributeNode(s);
    }
  },
  endElement: function(e, r, u) {
    var t = this.currentElement;
    t.tagName, this.currentElement = t.parentNode;
  },
  startPrefixMapping: function(e, r) {
  },
  endPrefixMapping: function(e) {
  },
  processingInstruction: function(e, r) {
    var u = this.doc.createProcessingInstruction(e, r);
    this.locator && oe(this.locator, u), Ue(this, u);
  },
  ignorableWhitespace: function(e, r, u) {
  },
  characters: function(e, r, u) {
    if (e = Fr.apply(this, arguments), e) {
      if (this.cdata)
        var t = this.doc.createCDATASection(e);
      else
        var t = this.doc.createTextNode(e);
      this.currentElement ? this.currentElement.appendChild(t) : /^\s*$/.test(e) && this.doc.appendChild(t), this.locator && oe(this.locator, t);
    }
  },
  skippedEntity: function(e) {
  },
  endDocument: function() {
    this.doc.normalize();
  },
  setDocumentLocator: function(e) {
    (this.locator = e) && (e.lineNumber = 0);
  },
  //LexicalHandler
  comment: function(e, r, u) {
    e = Fr.apply(this, arguments);
    var t = this.doc.createComment(e);
    this.locator && oe(this.locator, t), Ue(this, t);
  },
  startCDATA: function() {
    this.cdata = !0;
  },
  endCDATA: function() {
    this.cdata = !1;
  },
  startDTD: function(e, r, u) {
    var t = this.doc.implementation;
    if (t && t.createDocumentType) {
      var n = t.createDocumentType(e, r, u);
      this.locator && oe(this.locator, n), Ue(this, n), this.doc.doctype = n;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(e) {
    console.warn("[xmldom warning]	" + e, er(this.locator));
  },
  error: function(e) {
    console.error("[xmldom error]	" + e, er(this.locator));
  },
  fatalError: function(e) {
    throw new ju(e, this.locator);
  }
};
function er(e) {
  if (e)
    return `
@` + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
}
function Fr(e, r, u) {
  return typeof e == "string" ? e.substr(r, u) : e.length >= r + u || r ? new java.lang.String(e, r, u) + "" : e;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
  Re.prototype[e] = function() {
    return null;
  };
});
function Ue(e, r) {
  e.currentElement ? e.currentElement.appendChild(r) : e.doc.appendChild(r);
}
We.__DOMHandler = Re;
We.normalizeLineEndings = su;
We.DOMParser = lu;
var cu = We.DOMParser;
async function Xu(e, r = !1) {
  return await new Promise((u, t) => {
    try {
      const n = {};
      let o;
      if (typeof e == "string") {
        const i = new cu().parseFromString(e, "text/xml");
        i.firstChild && (o = i.firstChild);
      } else
        o = e;
      const a = (i, c = n) => {
        c.type = i.nodeName;
        const s = i.childNodes;
        if (s !== null && s.length) {
          c.content = [];
          for (let l = 0; l < s.length; l++)
            s[l].nodeType === 3 ? s[l].nodeValue && c.content.push(s[l].nodeValue) : (c.content.push({}), a(s[l], c.content[c.content.length - 1]));
        }
        if (i.attributes !== null && i.attributes.length) {
          c.attributes = {};
          for (let l = 0; l < i.attributes.length; l++)
            c.attributes[i.attributes[l].nodeName] = i.attributes[l].nodeValue;
        }
      };
      a(o), u(r ? JSON.stringify(n) : n);
    } catch (n) {
      t(n);
    }
  });
}
async function Yu(e, r = !0) {
  return await new Promise((u, t) => {
    try {
      let n = e;
      typeof e == "string" && (n = JSON.parse(e));
      const o = (i) => {
        let c = `<${i.type}`;
        return i.attributes && Object.entries(i.attributes).forEach(([s, l]) => {
          c += ` ${s}="${l}"`;
        }), c += ">", i.content && i.content.forEach((s) => {
          c += typeof s == "string" ? s : o(s);
        }), c += `</${i.type}>`, c;
      }, a = o(n);
      u(r ? a : new cu().parseFromString(a, "text/xml"));
    } catch (n) {
      t(n);
    }
  });
}
function pu(e) {
  var r, u, t = "";
  if (typeof e == "string" || typeof e == "number")
    t += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (r = 0; r < n; r++)
        e[r] && (u = pu(e[r])) && (t && (t += " "), t += u);
    } else
      for (u in e)
        e[u] && (t && (t += " "), t += u);
  return t;
}
function Wu() {
  for (var e, r, u = 0, t = "", n = arguments.length; u < n; u++)
    (e = arguments[u]) && (r = pu(e)) && (t && (t += " "), t += r);
  return t;
}
const dr = "-";
function Ju(e) {
  const r = Qu(e), {
    conflictingClassGroups: u,
    conflictingClassGroupModifiers: t
  } = e;
  function n(a) {
    const i = a.split(dr);
    return i[0] === "" && i.length !== 1 && i.shift(), fu(i, r) || Zu(a);
  }
  function o(a, i) {
    const c = u[a] || [];
    return i && t[a] ? [...c, ...t[a]] : c;
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  };
}
function fu(e, r) {
  var a;
  if (e.length === 0)
    return r.classGroupId;
  const u = e[0], t = r.nextPart.get(u), n = t ? fu(e.slice(1), t) : void 0;
  if (n)
    return n;
  if (r.validators.length === 0)
    return;
  const o = e.join(dr);
  return (a = r.validators.find(({
    validator: i
  }) => i(o))) == null ? void 0 : a.classGroupId;
}
const Sr = /^\[(.+)\]$/;
function Zu(e) {
  if (Sr.test(e)) {
    const r = Sr.exec(e)[1], u = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (u)
      return "arbitrary.." + u;
  }
}
function Qu(e) {
  const {
    theme: r,
    prefix: u
  } = e, t = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return et(Object.entries(e.classGroups), u).forEach(([o, a]) => {
    rr(a, t, o, r);
  }), t;
}
function rr(e, r, u, t) {
  e.forEach((n) => {
    if (typeof n == "string") {
      const o = n === "" ? r : _r(r, n);
      o.classGroupId = u;
      return;
    }
    if (typeof n == "function") {
      if (Ku(n)) {
        rr(n(t), r, u, t);
        return;
      }
      r.validators.push({
        validator: n,
        classGroupId: u
      });
      return;
    }
    Object.entries(n).forEach(([o, a]) => {
      rr(a, _r(r, o), u, t);
    });
  });
}
function _r(e, r) {
  let u = e;
  return r.split(dr).forEach((t) => {
    u.nextPart.has(t) || u.nextPart.set(t, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), u = u.nextPart.get(t);
  }), u;
}
function Ku(e) {
  return e.isThemeGetter;
}
function et(e, r) {
  return r ? e.map(([u, t]) => {
    const n = t.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, i]) => [r + a, i])) : o);
    return [u, n];
  }) : e;
}
function rt(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, u = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n(o, a) {
    u.set(o, a), r++, r > e && (r = 0, t = u, u = /* @__PURE__ */ new Map());
  }
  return {
    get(o) {
      let a = u.get(o);
      if (a !== void 0)
        return a;
      if ((a = t.get(o)) !== void 0)
        return n(o, a), a;
    },
    set(o, a) {
      u.has(o) ? u.set(o, a) : n(o, a);
    }
  };
}
const du = "!";
function ut(e) {
  const r = e.separator, u = r.length === 1, t = r[0], n = r.length;
  return function(a) {
    const i = [];
    let c = 0, s = 0, l;
    for (let d = 0; d < a.length; d++) {
      let g = a[d];
      if (c === 0) {
        if (g === t && (u || a.slice(d, d + n) === r)) {
          i.push(a.slice(s, d)), s = d + n;
          continue;
        }
        if (g === "/") {
          l = d;
          continue;
        }
      }
      g === "[" ? c++ : g === "]" && c--;
    }
    const f = i.length === 0 ? a : a.substring(s), p = f.startsWith(du), m = p ? f.substring(1) : f, v = l && l > s ? l - s : void 0;
    return {
      modifiers: i,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: v
    };
  };
}
function tt(e) {
  if (e.length <= 1)
    return e;
  const r = [];
  let u = [];
  return e.forEach((t) => {
    t[0] === "[" ? (r.push(...u.sort(), t), u = []) : u.push(t);
  }), r.push(...u.sort()), r;
}
function nt(e) {
  return {
    cache: rt(e.cacheSize),
    splitModifiers: ut(e),
    ...Ju(e)
  };
}
const ot = /\s+/;
function at(e, r) {
  const {
    splitModifiers: u,
    getClassGroupId: t,
    getConflictingClassGroupIds: n
  } = r, o = /* @__PURE__ */ new Set();
  return e.trim().split(ot).map((a) => {
    const {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: s,
      maybePostfixModifierPosition: l
    } = u(a);
    let f = t(l ? s.substring(0, l) : s), p = !!l;
    if (!f) {
      if (!l)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (f = t(s), !f)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      p = !1;
    }
    const m = tt(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? m + du : m,
      classGroupId: f,
      originalClassName: a,
      hasPostfixModifier: p
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: c,
      hasPostfixModifier: s
    } = a, l = i + c;
    return o.has(l) ? !1 : (o.add(l), n(c, s).forEach((f) => o.add(i + f)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function it() {
  let e = 0, r, u, t = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (u = hu(r)) && (t && (t += " "), t += u);
  return t;
}
function hu(e) {
  if (typeof e == "string")
    return e;
  let r, u = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (r = hu(e[t])) && (u && (u += " "), u += r);
  return u;
}
function st(e, ...r) {
  let u, t, n, o = a;
  function a(c) {
    const s = r.reduce((l, f) => f(l), e());
    return u = nt(s), t = u.cache.get, n = u.cache.set, o = i, i(c);
  }
  function i(c) {
    const s = t(c);
    if (s)
      return s;
    const l = at(c, u);
    return n(c, l), l;
  }
  return function() {
    return o(it.apply(null, arguments));
  };
}
function C(e) {
  const r = (u) => u[e] || [];
  return r.isThemeGetter = !0, r;
}
const mu = /^\[(?:([a-z-]+):)?(.+)\]$/i, lt = /^\d+\/\d+$/, ct = /* @__PURE__ */ new Set(["px", "full", "screen"]), pt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ft = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ht = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function V(e) {
  return Q(e) || ct.has(e) || lt.test(e);
}
function Y(e) {
  return de(e, "length", wt);
}
function Q(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Pe(e) {
  return de(e, "number", Q);
}
function we(e) {
  return !!e && Number.isInteger(Number(e));
}
function gt(e) {
  return e.endsWith("%") && Q(e.slice(0, -1));
}
function h(e) {
  return mu.test(e);
}
function W(e) {
  return pt.test(e);
}
const Dt = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function bt(e) {
  return de(e, Dt, gu);
}
function At(e) {
  return de(e, "position", gu);
}
const vt = /* @__PURE__ */ new Set(["image", "url"]);
function Et(e) {
  return de(e, vt, xt);
}
function Ct(e) {
  return de(e, "", yt);
}
function ye() {
  return !0;
}
function de(e, r, u) {
  const t = mu.exec(e);
  return t ? t[1] ? typeof r == "string" ? t[1] === r : r.has(t[1]) : u(t[2]) : !1;
}
function wt(e) {
  return ft.test(e) && !dt.test(e);
}
function gu() {
  return !1;
}
function yt(e) {
  return ht.test(e);
}
function xt(e) {
  return mt.test(e);
}
function Bt() {
  const e = C("colors"), r = C("spacing"), u = C("blur"), t = C("brightness"), n = C("borderColor"), o = C("borderRadius"), a = C("borderSpacing"), i = C("borderWidth"), c = C("contrast"), s = C("grayscale"), l = C("hueRotate"), f = C("invert"), p = C("gap"), m = C("gradientColorStops"), v = C("gradientColorStopPositions"), d = C("inset"), g = C("margin"), b = C("opacity"), _ = C("padding"), w = C("saturate"), F = C("scale"), re = C("sepia"), he = C("skew"), Oe = C("space"), me = C("translate"), T = () => ["auto", "contain", "none"], Z = () => ["auto", "hidden", "clip", "visible", "scroll"], x = () => ["auto", h, r], A = () => [h, r], Ie = () => ["", V, Y], H = () => ["auto", Q, h], ge = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], E = () => ["solid", "dashed", "dotted", "double", "none"], q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], De = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], be = () => ["", "0", h], hr = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Ae = () => [Q, Pe], Le = () => [Q, h];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ye],
      spacing: [V, Y],
      blur: ["none", "", W, h],
      brightness: Ae(),
      borderColor: [e],
      borderRadius: ["none", "", "full", W, h],
      borderSpacing: A(),
      borderWidth: Ie(),
      contrast: Ae(),
      grayscale: be(),
      hueRotate: Le(),
      invert: be(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [gt, Y],
      inset: x(),
      margin: x(),
      opacity: Ae(),
      padding: A(),
      saturate: Ae(),
      scale: Ae(),
      sepia: be(),
      skew: Le(),
      space: A(),
      translate: A()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", h]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [W]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": hr()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": hr()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...ge(), h]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [d]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [d]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [d]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [d]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [d]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [d]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [d]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [d]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [d]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", we, h]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: x()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", h]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: be()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: be()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", we, h]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ye]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", we, h]
        }, h]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ye]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [we, h]
        }, h]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", h]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", h]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...De()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...De(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...De(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [_]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [_]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [_]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [_]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [_]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [_]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [_]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [_]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [_]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Oe]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [Oe]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", h, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [h, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [h, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [W]
        }, W]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [h, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [h, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [h, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [h, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", W, Y]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ye]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", h]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Q, Pe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", V, h]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", h]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", h]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [b]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [b]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...E(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", V, Y]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", V, h]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", h]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", h]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [b]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...ge(), At]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", bt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Et]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...E(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: E()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...E()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [V, h]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [V, Y]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Ie()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [V, Y]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", W, Ct]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ye]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...q(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": q()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [u]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [t]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", W, h]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [s]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [l]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [re]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [u]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [t]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [s]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [l]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [re]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", h]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Le()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", h]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Le()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", h]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [F]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [F]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [F]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [we, h]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [me]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [me]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [he]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [he]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", h]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", h]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", h]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [V, Y, Pe]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Nt = /* @__PURE__ */ st(Bt);
function Ze(...e) {
  return Nt(Wu(e));
}
function Tt() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
const Du = Au("wabSvgMedia", () => {
  const e = le({}), r = (s, l = {}) => {
    e.value[s] = l, i(s).then((f) => {
      e.value[s] = {
        ...l,
        ...f
      };
    });
  }, u = (s, l) => {
    t(s) || r(s, { ...l, id: Tt() });
  }, t = (s) => Object.keys(e.value).includes(s), n = (s) => e.value[s], o = async (s) => {
    const l = await Xu(`<content>${s}</content>`);
    if (!l || !l.content)
      return;
    const f = l.content.find((m) => {
      var v;
      return m.type === "svg" && ((v = m.content) == null ? void 0 : v.length) > 0;
    }), p = (f == null ? void 0 : f.attributes) ?? {};
    return p.style = (p.style ?? "").split(";").reduce((m, v) => {
      let [d, g] = v.split(":");
      return d && (m[d] = g), m;
    }, {}), { props: p, content: f };
  }, a = async (s) => {
    const l = [];
    return await Promise.all(s.content.map(async (f) => {
      if (typeof f == "object") {
        const p = await Yu(f);
        l.push(p);
      }
    })), l;
  }, i = async (s) => {
    if (s)
      try {
        const f = await (await (await fetch(s)).blob()).text(), p = await o(f);
        return {
          html: (await a(p == null ? void 0 : p.content)).join(""),
          props: p == null ? void 0 : p.props
        };
      } catch (l) {
        return {
          html: null,
          props: null,
          error: l
        };
      }
  }, c = (s) => {
    let l = [];
    return s instanceof Array ? (s.forEach((f) => {
      const p = c(f);
      Object.keys(p).length > 0 && l.push(p);
    }), l) : (Object.entries(s).forEach(([f, p]) => {
      if (console.log(f), s.mime === "image/svg+xml") {
        u(s.url, s), l = s;
        return;
      }
      if (p && typeof p == "object") {
        const m = c(p);
        Object.keys(m).length > 0 && (l = m);
      }
    }), l);
  };
  return {
    icons: e,
    add: r,
    has: t,
    get: n,
    load: u,
    searchForSvg: c,
    iconsList: K(() => Object.values(e.value))
  };
}), Ft = {
  class: "svgIcons",
  style: { display: "none" }
}, St = /* @__PURE__ */ R("svg", { class: "h-0" }, [
  /* @__PURE__ */ R("defs", null, [
    /* @__PURE__ */ R("linearGradient", {
      id: "bg-gradient-vertical",
      gradientUnits: "userSpaceOnUse"
    }, [
      /* @__PURE__ */ R("stop", { "stop-color": "#584E96" }),
      /* @__PURE__ */ R("stop", {
        offset: "1",
        "stop-color": "#00AEC4"
      })
    ])
  ])
], -1), _t = /* @__PURE__ */ R("svg", {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  id: "error_icon"
}, [
  /* @__PURE__ */ R("g", null, [
    /* @__PURE__ */ R("path", { d: `M32,1.8C15.3,1.8,1.8,15.3,1.8,32S15.3,62.3,32,62.3S62.3,48.7,62.3,32S48.7,1.8,32,1.8z M32,57.8
          C17.8,57.8,6.3,46.2,6.3,32C6.3,17.8,17.8,6.3,32,6.3c14.2,0,25.8,11.6,25.8,25.8C57.8,46.2,46.2,57.8,32,57.8z` }),
    /* @__PURE__ */ R("path", { d: `M41.2,22.7c-0.9-0.9-2.3-0.9-3.2,0L32,28.8l-6.1-6.1c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2l6.1,6.1l-6.1,6.1
          c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7l6.1-6.1l6.1,6.1c0.4,0.4,1,0.7,1.6,0.7
          c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2L35.2,32l6.1-6.1C42.1,25,42.1,23.6,41.2,22.7z` })
  ])
], -1), qt = ["id", "innerHTML"], en = /* @__PURE__ */ Se({
  __name: "svgMediaMainRenderer",
  setup(e) {
    const r = Du();
    return (u, t) => (B(), ae(ie(Rr), null, {
      default: ur(() => [
        R("div", Ft, [
          St,
          _t,
          (B(!0), L(He, null, qr(ie(r).icons, (n) => (B(), L("svg", xe({
            key: n.id,
            ref_for: !0
          }, n.props, {
            id: n.id,
            innerHTML: n.html
          }), null, 16, qt))), 128))
        ])
      ]),
      _: 1
    }));
  }
}), kt = ["href"], Rt = ["innerHTML"], Ot = /* @__PURE__ */ R("use", { href: "#error_icon" }, null, -1), It = [
  Ot
], Lt = /* @__PURE__ */ Se({
  __name: "svgMedia",
  props: {
    url: { default: "" },
    includeFullSvg: { type: Boolean, default: !1 },
    class: { default: "" },
    showErrorIcon: { type: Boolean, default: !0 }
  },
  setup(e, { expose: r }) {
    const u = e, t = Du(), n = K(() => t.icons[u.url] ?? null), o = le(null), a = K(() => u.class);
    return r({
      svgEl: o
    }), kr(() => u.url, (i) => {
      t.load(i, {});
    }, { immediate: !0 }), (i, c) => (B(), ae(ie(Rr), null, {
      default: ur(() => {
        var s, l, f, p;
        return [
          n.value && !i.includeFullSvg && !n.value.error ? (B(), L("svg", xe({ key: 0 }, { ...((s = n.value) == null ? void 0 : s.props) ?? {}, ...i.$attrs }, {
            class: ie(Ze)("w-full h-full", a.value),
            style: { fill: "var(--svg-fill, currentColor)" },
            ref_key: "svgEl",
            ref: o
          }), [
            R("use", {
              href: "#" + ((l = n.value) == null ? void 0 : l.id)
            }, null, 8, kt)
          ], 16)) : n.value && i.includeFullSvg && !n.value.error ? (B(), L("svg", xe({ key: 1 }, { ...((f = n.value) == null ? void 0 : f.props) ?? {}, ...i.$attrs }, {
            class: ie(Ze)("w-full h-full", a.value),
            style: { fill: "var(--svg-fill, currentColor)" },
            ref_key: "svgEl",
            ref: o,
            innerHTML: n.value.html
          }), null, 16, Rt)) : n.value && n.value.error ? (B(), L("svg", xe({ key: 2 }, { ...((p = n.value) == null ? void 0 : p.props) ?? {}, ...i.$attrs }, {
            class: ie(Ze)("w-full h-full", a.value),
            style: { fill: "var(--svg-fill, currentColor)" },
            ref_key: "svgEl",
            ref: o
          }), It, 16)) : Be("", !0)
        ];
      }),
      _: 1
    }));
  }
});
function Mt(e, r, u) {
  return typeof e == "string" ? e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || []);
}
const Ut = {
  some: 0,
  all: 1
};
function Pt(e, r, { root: u, margin: t, amount: n = "some" } = {}) {
  const o = Mt(e), a = /* @__PURE__ */ new WeakMap(), i = (s) => {
    s.forEach((l) => {
      const f = a.get(l.target);
      if (l.isIntersecting !== !!f)
        if (l.isIntersecting) {
          const p = r(l);
          typeof p == "function" ? a.set(l.target, p) : c.unobserve(l.target);
        } else
          f && (f(l), a.delete(l.target));
    });
  }, c = new IntersectionObserver(i, {
    root: u,
    rootMargin: t,
    threshold: typeof n == "number" ? n : Ut[n]
  });
  return o.forEach((s) => c.observe(s)), () => c.disconnect();
}
function Vt(e, r) {
  const u = le(!1);
  return kr(() => e, (t) => {
    !t || mr(t) && !t.value || Pt(mr(t) ? t.value : t, ({ target: n }) => (u.value = !0, r && r.onInView && r.onInView(n), () => {
      u.value = !1, r && r.onOutView && r.onOutView(n);
    }), {
      // @ts-ignore
      amount: 0.1,
      ...r ?? {}
    });
  }, { immediate: !0 }), K(() => u.value);
}
const zt = ["poster"], Gt = ["src"], jt = ["src"], $t = /* @__PURE__ */ Se({
  __name: "videoMedia",
  props: {
    data: {},
    class: {}
  },
  setup(e) {
    var i;
    const r = e, u = le(null), t = le(!1), n = le(!1);
    (i = u.value) == null || i.addEventListener("loadeddata", () => {
      n.value = !0;
    }), Vt(u, {
      onInView: () => {
        var c;
        t.value = !0, (c = u.value) == null || c.play();
      },
      onOutView: () => {
        var c;
        (c = u.value) == null || c.pause();
      }
    });
    const o = K(() => r.data.previewUrl), a = K(() => r.class);
    return (c, s) => (B(), L(He, null, [
      R("video", {
        autoplay: "",
        muted: "",
        loop: "",
        class: Ve(["object-cover", a.value]),
        playsinline: "",
        preload: "metadata",
        poster: o.value,
        ref_key: "videoEl",
        ref: u
      }, [
        t.value ? (B(), L("source", {
          key: 0,
          src: c.data.url,
          type: "video/mp4"
        }, null, 8, Gt)) : Be("", !0)
      ], 10, zt),
      n.value ? Be("", !0) : (B(), L("img", {
        key: 0,
        src: o.value,
        alt: "video placeholder",
        class: Ve(["absolute inset-0 object-cover", a.value])
      }, null, 10, jt))
    ], 64));
  }
}), Ht = { class: "block" }, Xt = ["media", "srcset"], Yt = ["src", "alt"], Wt = /* @__PURE__ */ Se({
  __name: "imageMedia",
  props: {
    url: {},
    alternativeText: {},
    formats: {},
    cover: { type: Boolean }
  },
  setup(e) {
    const r = e, u = K(() => r.formats ? r.formats.map((t) => ({
      width: t.width,
      url: t.url
    })) : null);
    return (t, n) => (B(), L("picture", Ht, [
      u.value ? (B(!0), L(He, { key: 0 }, qr(u.value, (o, a) => (B(), L("source", {
        key: a,
        media: "(max-width: " + o.width + "px)",
        srcset: o.url
      }, null, 8, Xt))), 128)) : Be("", !0),
      R("img", {
        src: t.url,
        alt: t.alternativeText,
        class: Ve(["max-h-full block", { "object-cover h-full w-full": t.cover }]),
        loading: "lazy"
      }, null, 10, Yt)
    ]));
  }
}), Jt = ["src", "alt"], rn = /* @__PURE__ */ Se({
  __name: "mediaElement",
  props: {
    data: {},
    tag: {},
    simpleImage: { type: Boolean },
    cover: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (r, u) => r.data ? (B(), ae(bu(r.tag ?? "div"), { key: 0 }, {
      default: ur(() => {
        var t, n;
        return [
          (t = r.data.mime) != null && t.startsWith("video") ? (B(), ae($t, {
            key: 0,
            class: "w-full h-full",
            data: r.data
          }, null, 8, ["data"])) : (n = r.data.mime) != null && n.includes("svg") ? (B(), ae(Lt, xe({
            key: 1,
            url: r.data.url
          }, r.$attrs), null, 16, ["url"])) : (B(), L(He, { key: 2 }, [
            r.simpleImage ? (B(), L("img", {
              key: 0,
              src: r.data.url,
              alt: r.data.alternativeText,
              class: Ve(["w-full h-full object-center", { "object-cover": r.cover }])
            }, null, 10, Jt)) : (B(), ae(Wt, {
              key: 1,
              url: r.data.url,
              "alternative-text": r.data.alternativeText,
              formats: r.data.formats,
              cover: r.cover,
              class: "w-full h-full"
            }, null, 8, ["url", "alternative-text", "formats", "cover"]))
          ], 64))
        ];
      }),
      _: 1
    })) : Be("", !0);
  }
});
export {
  Wt as ImageMedia,
  rn as MediaElement,
  Lt as SvgMedia,
  en as SvgMediaMainRenderer,
  $t as VideoMedia
};
