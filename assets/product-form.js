/* select-pure: https://www.webcomponents.org/element/select-pure */
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(e,i,s){var o=s.value;if("function"!=typeof o)throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(t(o)));var n=!1;return{configurable:!0,get:function(){if(n||this===e.prototype||this.hasOwnProperty(i)||"function"!=typeof o)return o;var t=o.bind(this);return n=!0,Object.defineProperty(this,i,{configurable:!0,get:function(){return t},set:function(t){o=t,delete this[i]}}),n=!1,t},set:function(t){o=t}}}var i,s,o,n;const l=globalThis.trustedTypes,r=l?l.createPolicy("lit-html",{createHTML:t=>t}):void 0,a=`lit$${(Math.random()+"").slice(9)}$`,d="?"+a,h=`<${d}>`,c=document,p=(t="")=>c.createComment(t),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v=Array.isArray,f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,b=/-->/g,y=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,m=/'/g,S=/"/g,x=/^(?:script|style|textarea)$/i,w=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),O=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),C=new WeakMap,$=c.createTreeWalker(c,129,null,!1);class P{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const c=t.length-1,u=this.parts,[v,w]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",l=f;for(let e=0;e<i;e++){const i=t[e];let r,d,c=-1,p=0;for(;p<i.length&&(l.lastIndex=p,d=l.exec(i),null!==d);)p=l.lastIndex,l===f?"!--"===d[1]?l=b:void 0!==d[1]?l=y:void 0!==d[2]?(x.test(d[2])&&(o=RegExp("</"+d[2],"g")),l=g):void 0!==d[3]&&(l=g):l===g?">"===d[0]?(l=null!=o?o:f,c=-1):void 0===d[1]?c=-2:(c=l.lastIndex-d[2].length,r=d[1],l=void 0===d[3]?g:'"'===d[3]?S:m):l===S||l===m?l=g:l===b||l===y?l=f:(l=g,o=void 0);const u=l===g&&t[e+1].startsWith("/>")?" ":"";n+=l===f?i+h:c>=0?(s.push(r),i.slice(0,c)+"$lit$"+i.slice(c)+a+u):i+a+(-2===c?(s.push(void 0),e):u)}const d=n+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==r?r.createHTML(d):d,s]})(t,e);if(this.el=P.createElement(v,i),$.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=$.nextNode())&&u.length<c;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(a)){const i=w[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(a),e=/([.?@])?(.*)/.exec(i);u.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?R:"?"===e[1]?N:"@"===e[1]?L:I})}else u.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(x.test(s.tagName)){const t=s.textContent.split(a),e=t.length-1;if(e>0){s.textContent=l?l.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],p()),$.nextNode(),u.push({type:2,index:++o});s.append(t[e],p())}}}else if(8===s.nodeType)if(s.data===d)u.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(a,t+1));)u.push({type:7,index:o}),t+=a.length-1}o++}}static createElement(t,e){const i=c.createElement("template");return i.innerHTML=t,i}}function E(t,e,i=t,s){var o,n,l,r;if(e===O)return e;let a=void 0!==s?null===(o=i.Σi)||void 0===o?void 0:o[s]:i.Σo;const d=u(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(n=null==a?void 0:a.O)||void 0===n||n.call(a,!1),void 0===d?a=void 0:(a=new d(t),a.T(t,i,s)),void 0!==s?(null!==(l=(r=i).Σi)&&void 0!==l?l:r.Σi=[])[s]=a:i.Σo=a),void 0!==a&&(e=E(t,a.S(t,e.values),a,s)),e}class H{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(i,!0);$.currentNode=o;let n=$.nextNode(),l=0,r=0,a=s[0];for(;void 0!==a;){if(l===a.index){let e;2===a.type?e=new A(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new U(n,this,t)),this.l.push(e),a=s[++r]}l!==(null==a?void 0:a.index)&&(n=$.nextNode(),l++)}return o}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class A{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=E(this,t,e),u(t)?t===k||null==t||""===t?(this.H!==k&&this.R(),this.H=k):t!==this.H&&t!==O&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return v(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(c.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=P.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===o)this.H.v(i);else{const t=new H(o,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new P(t)),e}g(t){v(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const o of t)s===e.length?e.push(i=new A(this.k(p()),this.k(p()),this,this.options)):i=e[s],i.I(o),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class I{constructor(t,e,i,s,o){this.type=1,this.H=k,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(k),this.strings=i):this.H=k}get tagName(){return this.element.tagName}I(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=E(this,t,e,0),n=!u(t)||t!==this.H&&t!==O,n&&(this.H=t);else{const s=t;let l,r;for(t=o[0],l=0;l<o.length-1;l++)r=E(this,s[i+l],e,l),r===O&&(r=this.H[l]),n||(n=!u(r)||r!==this.H[l]),r===k?t=k:t!==k&&(t+=(null!=r?r:"")+o[l+1]),this.H[l]=r}n&&!s&&this.W(t)}W(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends I{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===k?void 0:t}}class N extends I{constructor(){super(...arguments),this.type=4}W(t){t&&t!==k?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class L extends I{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=E(this,t,e,0))&&void 0!==i?i:k)===O)return;const s=this.H,o=t===k&&s!==k||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==k&&(s===k||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class U{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){E(this,t)}}null===(s=(i=globalThis).litHtmlPlatformSupport)||void 0===s||s.call(i,P,A),(null!==(o=(n=globalThis).litHtmlVersions)&&void 0!==o?o:n.litHtmlVersions=[]).push("2.0.0-rc.3");const z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,M=Symbol();class T{constructor(t,e){if(e!==M)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return z&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const V=new Map,_=t=>{let e=V.get(t);return void 0===e&&V.set(t,e=new T(t,M)),e},D=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(t instanceof T)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return _(i)},j=(t,e)=>{z?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))},B=z?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>_("string"==typeof t?t:t+""))(e)})(t):t;var q,W,K,F;const J={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Z=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:Z};class Q extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(B(t))}else void 0!==t&&e.push(B(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return j(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=G){var s,o;const n=this.constructor.Πp(t,i);if(void 0!==n&&!0===i.reflect){const l=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:J.toAttribute)(e,i.type);this.Πh=t,null==l?this.removeAttribute(n):this.setAttribute(n,l),this.Πh=null}}K(t,e){var i,s,o;const n=this.constructor,l=n.Πm.get(t);if(void 0!==l&&this.Πh!==l){const t=n.getPropertyOptions(l),r=t.converter,a=null!==(o=null!==(s=null===(i=r)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof r?r:null)&&void 0!==o?o:J.fromAttribute;this.Πh=l,this[l]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Z)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var X,Y,tt,et,it,st;Q.finalized=!0,Q.elementProperties=new Map,Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},null===(W=(q=globalThis).reactiveElementPlatformSupport)||void 0===W||W.call(q,{ReactiveElement:Q}),(null!==(K=(F=globalThis).reactiveElementVersions)&&void 0!==K?K:F.reactiveElementVersions=[]).push("1.0.0-rc.2"),(null!==(X=(st=globalThis).litElementVersions)&&void 0!==X?X:st.litElementVersions=[]).push("3.0.0-rc.2");class ot extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new A(e.insertBefore(p(),t),t,void 0,i)}return l.I(t),l})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return O}}ot.finalized=!0,ot._$litElement$=!0,null===(tt=(Y=globalThis).litElementHydrateSupport)||void 0===tt||tt.call(Y,{LitElement:ot}),null===(it=(et=globalThis).litElementPlatformSupport)||void 0===it||it.call(et,{LitElement:ot});const nt=t=>null!=t?t:k,lt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)}const dt="Enter",ht="Tab",ct=()=>{},pt={label:"",value:"",select:ct,unselect:ct,disabled:!1,hidden:!1,selected:!1},ut=D`.select-wrapper{position:relative}.select{bottom:0;display:flex;flex-wrap:wrap;left:0;position:absolute;right:0;top:0;width:var(--select-width,100%)}.label:focus{outline:var(--select-outline,2px solid #e3e3e3)}.label:after{border-bottom:1px solid var(--color,#000);border-right:1px solid var(--color,#000);box-sizing:border-box;content:"";display:block;height:10px;margin-top:-2px;transform:rotate(45deg);transition:.2s ease-in-out;width:10px}.label.visible:after{margin-bottom:-4px;margin-top:0;transform:rotate(225deg)}select{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;opacity:0}select[multiple]{z-index:0}.label,select{align-items:center;background-color:var(--background-color,#fff);border-radius:var(--border-radius,4px);border:var(--border-width,1px) solid var(--border-color,#000);box-sizing:border-box;color:var(--color,#000);cursor:pointer;display:flex;font-family:var(--font-family,inherit);font-size:var(--font-size,14px);font-weight:var(--font-weight,400);min-height:var(--select-height,44px);justify-content:space-between;padding:var(--padding,0 10px);width:100%;z-index:1}@media only screen and (hover:none) and (pointer:coarse){select{z-index:2}}.dropdown{background-color:var(--border-color,#000);border-radius:var(--border-radius,4px);border:var(--border-width,1px) solid var(--border-color,#000);display:none;flex-direction:column;gap:var(--border-width,1px);justify-content:space-between;max-height:calc(var(--select-height,44px) * var(--dropdown-items,4) + var(--border-width,1px) * calc(var(--dropdown-items,4) - 1));overflow-y:scroll;position:absolute;top:calc(var(--select-height,44px) + var(--dropdown-gap,0px));width:calc(100% - var(--border-width,1px) * 2);z-index:var(--dropdown-z-index,2)}.dropdown.visible{display:flex;z-index:100}.disabled{background-color:var(--disabled-background-color,#bdc3c7);color:var(--disabled-color,#ecf0f1);cursor:default}.multi-selected{background-color:var(--selected-background-color,#e3e3e3);border-radius:var(--border-radius,4px);color:var(--selected-color,#000);display:flex;gap:8px;justify-content:space-between;padding:2px 4px}.multi-selected-wrapper{display:flex;flex-wrap:wrap;gap:4px;width:calc(100% - 30px)}.cross:after{content:'\\00d7';display:inline-block;height:100%;text-align:center;width:12px}`,vt=D`.option{align-items:center;background-color:var(--background-color,#fff);box-sizing:border-box;color:var(--color,#000);cursor:pointer;display:flex;font-family:var(--font-family,inherit);font-size:var(--font-size,14px);font-weight:var(--font-weight,400);min-height:var(--select-height,44px);justify-content:flex-start;padding:var(--padding,0 10px);width:100%}.option:not(.disabled):focus,.option:not(.disabled):not(.selected):hover{background-color:var(--hover-background-color,#e3e3e3);color:var(--hover-color,#000)}.selected{background-color:var(--selected-background-color,#e3e3e3);color:var(--selected-color,#000)}.disabled{background-color:var(--disabled-background-color,#e3e3e3);color:var(--disabled-color,#000);cursor:default}`;var ft=function(t,e,i,s){var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let bt=class extends ot{constructor(){super(...arguments),this.isSelected=!1,this.isDisabled=!1,this.isHidden=!1,this.optionValue="",this.displayedLabel="",this.optionIndex=-1}static get styles(){return vt}connectedCallback(){super.connectedCallback(),this.isSelected=null!==this.getAttribute("selected"),this.isDisabled=null!==this.getAttribute("disabled"),this.isHidden=null!==this.getAttribute("hidden"),this.optionValue=this.getAttribute("value")||"",this.assignDisplayedLabel(),this.fireOnReadyCallback()}getOption(){return{label:this.displayedLabel,value:this.optionValue,select:this.select,unselect:this.unselect,selected:this.isSelected,disabled:this.isDisabled,hidden:this.isHidden}}select(){this.isSelected=!0,this.setAttribute("selected","")}unselect(){this.isSelected=!1,this.removeAttribute("selected")}setOnReadyCallback(t,e){this.onReady=t,this.optionIndex=e}setOnSelectCallback(t){this.onSelect=t}render(){const t=["option"];return this.isSelected&&t.push("selected"),this.isDisabled&&t.push("disabled"),w`<div class="${t.join(" ")}" @click="${this.fireOnSelectCallback}" @keydown="${this.fireOnSelectIfEnterPressed}" tabindex="${nt(this.isDisabled?void 0:"0")}"><slot hidden @slotchange="${this.assignDisplayedLabel}"></slot>${this.displayedLabel}</div>`}assignDisplayedLabel(){this.textContent?this.displayedLabel=this.textContent:this.getAttribute("label")&&(this.displayedLabel=this.getAttribute("label")||"")}fireOnReadyCallback(){this.onReady&&this.onReady(this.getOption(),this.optionIndex)}fireOnSelectCallback(t){t.stopPropagation(),this.onSelect&&!this.isDisabled&&this.onSelect(this.optionValue)}fireOnSelectIfEnterPressed(t){t.key===dt&&this.fireOnSelectCallback(t)}};ft([at()],bt.prototype,"isSelected",void 0),ft([at()],bt.prototype,"isDisabled",void 0),ft([at()],bt.prototype,"isHidden",void 0),ft([at()],bt.prototype,"optionValue",void 0),ft([at()],bt.prototype,"displayedLabel",void 0),ft([at()],bt.prototype,"optionIndex",void 0),ft([e],bt.prototype,"getOption",null),ft([e],bt.prototype,"select",null),ft([e],bt.prototype,"unselect",null),ft([e],bt.prototype,"fireOnReadyCallback",null),bt=ft([lt("option-pure")],bt);var yt=function(t,e,i,s){var o,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(e,i,l):o(e,i))||l);return n>3&&l&&Object.defineProperty(e,i,l),l};let gt=class extends ot{constructor(){super(...arguments),this.options=[],this.visible=!1,this.selectedOption=pt,this._selectedOptions=[],this.disabled=!1,this.isMultipleSelect=!1,this.name="",this._id="",this.formName="",this.value="",this.values=[],this.defaultLabel="",this.totalRenderedChildOptions=-1,this.form=null,this.hiddenInput=null}static get styles(){return ut}connectedCallback(){super.connectedCallback(),this.disabled=null!==this.getAttribute("disabled"),this.isMultipleSelect=null!==this.getAttribute("multiple"),this.name=this.getAttribute("name")||"",this._id=this.getAttribute("id")||"",this.formName=this.name||this.id,this.defaultLabel=this.getAttribute("default-label")||""}open(){this.disabled||(this.visible=!0,this.removeEventListeners(),document.body.addEventListener("click",this.close,!0))}close(t){t&&this.contains(t.target)||(this.visible=!1,this.removeEventListeners())}enable(){this.disabled=!1}disable(){this.disabled=!0}get selectedIndex(){var t;return null===(t=this.nativeSelect)||void 0===t?void 0:t.selectedIndex}set selectedIndex(t){(t||0===t)&&this.selectOptionByValue(this.options[t].value)}get selectedOptions(){var t;return null===(t=this.nativeSelect)||void 0===t?void 0:t.selectedOptions}render(){const t=["label"];return this.disabled&&t.push("disabled"),this.visible&&t.push("visible"),w`<div class="select-wrapper"><select @change="${this.handleNativeSelectChange}" ?disabled="${this.disabled}" ?multiple="${this.isMultipleSelect}" name="${nt(this.name||void 0)}" id="${nt(this.id||void 0)}" size="1">${this.getNativeOptionsHtml()}</select><div class="select"><div class="${t.join(" ")}" @click="${this.visible?this.close:this.open}" @keydown="${this.openDropdownIfProperKeyIsPressed}" tabindex="0">${this.getDisplayedLabel()}</div><div class="dropdown${this.visible?" visible":""}"><slot @slotchange="${this.initializeSelect}"></slot></div></div></div>`}handleNativeSelectChange(){var t;this.selectedIndex=null===(t=this.nativeSelect)||void 0===t?void 0:t.selectedIndex}getNativeOptionsHtml(){return this.options.map(this.getSingleNativeOptionHtml)}getSingleNativeOptionHtml({value:t,label:e,hidden:i,disabled:s}){return w`<option value="${t}" ?selected="${this.isOptionSelected(t)}" ?hidden="${i}" ?disabled="${s}">${e}</option>`}isOptionSelected(t){let e=this.selectedOption.value===t;return this.isMultipleSelect&&(e=Boolean(this._selectedOptions.find((e=>e.value===t)))),e}openDropdownIfProperKeyIsPressed(t){t.key!==dt&&t.key!==ht||this.open()}getDisplayedLabel(){return this.isMultipleSelect&&this._selectedOptions.length?this.getMultiSelectLabelHtml():this.selectedOption.label||this.defaultLabel}getMultiSelectLabelHtml(){return w`<div class="multi-selected-wrapper">${this._selectedOptions.map(this.getMultiSelectSelectedOptionHtml)}</div>`}getMultiSelectSelectedOptionHtml({label:t,value:e}){return w`<span class="multi-selected">${t} <span class="cross" @click="${t=>this.fireOnSelectCallback(t,e)}"></span></span>`}fireOnSelectCallback(t,e){t.stopPropagation(),this.selectOptionByValue(e)}initializeSelect(){this.processChildOptions(),this.selectDefaultOptionIfNoneSelected(),this.appendHiddenInputToClosestForm()}processChildOptions(){const t=this.querySelectorAll("option-pure");this.totalRenderedChildOptions=t.length;for(let e=0;e<t.length;e++)this.initializeSingleOption(t[e],e)}selectDefaultOptionIfNoneSelected(){!this.selectedOption.value&&!this.isMultipleSelect&&this.options.length&&this.selectOptionByValue(this.options[0].value)}initializeSingleOption(t,e){t.setOnSelectCallback(this.selectOptionByValue),this.options[e]=t.getOption(),this.options[e].selected&&this.selectOptionByValue(this.options[e].value)}removeEventListeners(){document.body.removeEventListener("click",this.close)}appendHiddenInputToClosestForm(){this.form=this.closest("form"),this.form&&!this.hiddenInput&&(this.hiddenInput=document.createElement("input"),this.hiddenInput.setAttribute("type","hidden"),this.hiddenInput.setAttribute("name",this.formName),this.form.appendChild(this.hiddenInput))}unselectAllOptions(){for(let t=0;t<this.options.length;t++)this.options[t].unselect()}selectOptionByValue(t){const e=this.options.find((({value:e})=>e===t));e&&this.setSelectValue(e)}setSelectValue(t){this.isMultipleSelect?this.setMultiSelectValue(t):this.setSingleSelectValue(t),this.updateHiddenInputInForm(),this.dispatchChangeEvent()}dispatchChangeEvent(){this.dispatchEvent(new Event("change"))}setMultiSelectValue(t){const e=this._selectedOptions.indexOf(t);-1!==e?(this.values.splice(e,1),this._selectedOptions.splice(e,1),t.unselect()):(this.values.push(t.value),this._selectedOptions.push(t),t.select()),this.requestUpdate()}setSingleSelectValue(t){this.unselectAllOptions(),this.close(),this.selectedOption=t,this.value=t.value,t.select()}updateHiddenInputInForm(){if(!this.form||!this.hiddenInput)return;this.hiddenInput.value=this.isMultipleSelect?this.values.join(","):this.value;const t=new Event("change",{bubbles:!0});this.hiddenInput.dispatchEvent(t)}};yt([at()],gt.prototype,"options",void 0),yt([at()],gt.prototype,"visible",void 0),yt([at()],gt.prototype,"selectedOption",void 0),yt([at()],gt.prototype,"_selectedOptions",void 0),yt([at()],gt.prototype,"disabled",void 0),yt([at()],gt.prototype,"isMultipleSelect",void 0),yt([at()],gt.prototype,"name",void 0),yt([at()],gt.prototype,"_id",void 0),yt([at()],gt.prototype,"formName",void 0),yt([at()],gt.prototype,"value",void 0),yt([at()],gt.prototype,"values",void 0),yt([at()],gt.prototype,"defaultLabel",void 0),yt([at()],gt.prototype,"totalRenderedChildOptions",void 0),yt([function(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}})({descriptor:i=>{const s={get(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i;return void 0===this[e]&&(this[e]=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t)),this[e]}}return s}})}("select")],gt.prototype,"nativeSelect",void 0),yt([e],gt.prototype,"close",null),yt([e],gt.prototype,"getSingleNativeOptionHtml",null),yt([e],gt.prototype,"getMultiSelectLabelHtml",null),yt([e],gt.prototype,"getMultiSelectSelectedOptionHtml",null),yt([e],gt.prototype,"initializeSelect",null),yt([e],gt.prototype,"initializeSingleOption",null),yt([e],gt.prototype,"removeEventListeners",null),yt([e],gt.prototype,"appendHiddenInputToClosestForm",null),yt([e],gt.prototype,"selectOptionByValue",null),gt=yt([lt("select-pure")],gt);

if (!customElements.get('product-form')) {
  customElements.define('product-form', class ProductForm extends HTMLElement {
    constructor() {
      super();

      this.form = this.querySelector('form');
      this.form.querySelector('[name=id]').disabled = false;
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.cartNotification = document.querySelector('cart-notification');
    }

    onSubmitHandler(evt) {
      // Disable ajax cart
      // evt.preventDefault();

      const submitButton = this.querySelector('[type="submit"]');
      if (submitButton.classList.contains('loading')) return;

      this.handleErrorMessage();
      this.cartNotification.setActiveElement(document.activeElement);

      submitButton.setAttribute('aria-disabled', true);
      submitButton.classList.add('loading');
      this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

      // Disable ajax cart
      return;

      const config = fetchConfig('javascript');
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      delete config.headers['Content-Type'];

      const formData = new FormData(this.form);
      formData.append('sections', this.cartNotification.getSectionsToRender().map((section) => section.id));
      formData.append('sections_url', window.location.pathname);
      config.body = formData;

      fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            this.handleErrorMessage(response.description);
            return;
          }

          this.cartNotification.renderContents(response);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          submitButton.classList.remove('loading');
          submitButton.removeAttribute('aria-disabled');
          this.querySelector('.loading-overlay__spinner').classList.add('hidden');
        });
    }

    handleErrorMessage(errorMessage = false) {
      this.errorMessageWrapper = this.errorMessageWrapper || this.querySelector('.product-form__error-message-wrapper');
      this.errorMessage = this.errorMessage || this.errorMessageWrapper.querySelector('.product-form__error-message');

      this.errorMessageWrapper.toggleAttribute('hidden', !errorMessage);

      if (errorMessage) {
        this.errorMessage.textContent = errorMessage;
      }
    }
  });
}
