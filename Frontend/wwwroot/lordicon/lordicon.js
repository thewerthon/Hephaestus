(function () {
	"use strict";
	function e(t) {
		return JSON.parse(JSON.stringify(t))
	}
	function f(t) {
		return null == t
	}
	function r(t) {
		return null !== t && "object" == typeof t
	}
	function t(t, e, i) {
		const s = Array.isArray(e) ? e : e.split(".");
		let a = t;
		for (const t of s) {
			if (!r(a))
				return i;
			if (!(t in a))
				return i;
			a = a[t]
		}
		return void 0 === a ? i : a
	}
	function a(t, e, i) {
		let r = t;
		const s = Array.isArray(e) ? e : e.split(".");
		for (let t = 0; t < s.length; ++t)
			t === s.length - 1 ? r[s[t]] = i : r = r[s[t]]
	}
	const o = {
		aliceblue: "#f0f8ff",
		antiquewhite: "#faebd7",
		aqua: "#00ffff",
		aquamarine: "#7fffd4",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		bisque: "#ffe4c4",
		black: "#000000",
		blanchedalmond: "#ffebcd",
		blue: "#0000ff",
		blueviolet: "#8a2be2",
		brown: "#a52a2a",
		burlywood: "#deb887",
		cadetblue: "#5f9ea0",
		chartreuse: "#7fff00",
		chocolate: "#d2691e",
		coral: "#ff7f50",
		cornflowerblue: "#6495ed",
		cornsilk: "#fff8dc",
		crimson: "#dc143c",
		cyan: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgoldenrod: "#b8860b",
		darkgray: "#a9a9a9",
		darkgreen: "#006400",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkseagreen: "#8fbc8f",
		darkslateblue: "#483d8b",
		darkslategray: "#2f4f4f",
		darkturquoise: "#00ced1",
		darkviolet: "#9400d3",
		deeppink: "#ff1493",
		deepskyblue: "#00bfff",
		dimgray: "#696969",
		dodgerblue: "#1e90ff",
		firebrick: "#b22222",
		floralwhite: "#fffaf0",
		forestgreen: "#228b22",
		fuchsia: "#ff00ff",
		gainsboro: "#dcdcdc",
		ghostwhite: "#f8f8ff",
		gold: "#ffd700",
		goldenrod: "#daa520",
		gray: "#808080",
		green: "#008000",
		greenyellow: "#adff2f",
		honeydew: "#f0fff0",
		hotpink: "#ff69b4",
		indianred: "#cd5c5c",
		indigo: "#4b0082",
		ivory: "#fffff0",
		khaki: "#f0e68c",
		lavender: "#e6e6fa",
		lavenderblush: "#fff0f5",
		lawngreen: "#7cfc00",
		lemonchiffon: "#fffacd",
		lightblue: "#add8e6",
		lightcoral: "#f08080",
		lightcyan: "#e0ffff",
		lightgoldenrodyellow: "#fafad2",
		lightgrey: "#d3d3d3",
		lightgreen: "#90ee90",
		lightpink: "#ffb6c1",
		lightsalmon: "#ffa07a",
		lightseagreen: "#20b2aa",
		lightskyblue: "#87cefa",
		lightslategray: "#778899",
		lightsteelblue: "#b0c4de",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		limegreen: "#32cd32",
		linen: "#faf0e6",
		magenta: "#ff00ff",
		maroon: "#800000",
		mediumaquamarine: "#66cdaa",
		mediumblue: "#0000cd",
		mediumorchid: "#ba55d3",
		mediumpurple: "#9370d8",
		mediumseagreen: "#3cb371",
		mediumslateblue: "#7b68ee",
		mediumspringgreen: "#00fa9a",
		mediumturquoise: "#48d1cc",
		mediumvioletred: "#c71585",
		midnightblue: "#191970",
		mintcream: "#f5fffa",
		mistyrose: "#ffe4e1",
		moccasin: "#ffe4b5",
		navajowhite: "#ffdead",
		navy: "#000080",
		oldlace: "#fdf5e6",
		olive: "#808000",
		olivedrab: "#6b8e23",
		orange: "#ffa500",
		orangered: "#ff4500",
		orchid: "#da70d6",
		palegoldenrod: "#eee8aa",
		palegreen: "#98fb98",
		paleturquoise: "#afeeee",
		palevioletred: "#d87093",
		papayawhip: "#ffefd5",
		peachpuff: "#ffdab9",
		peru: "#cd853f",
		pink: "#ffc0cb",
		plum: "#dda0dd",
		powderblue: "#b0e0e6",
		purple: "#800080",
		rebeccapurple: "#663399",
		red: "#ff0000",
		rosybrown: "#bc8f8f",
		royalblue: "#4169e1",
		saddlebrown: "#8b4513",
		salmon: "#fa8072",
		sandybrown: "#f4a460",
		seagreen: "#2e8b57",
		seashell: "#fff5ee",
		sienna: "#a0522d",
		silver: "#c0c0c0",
		skyblue: "#87ceeb",
		slateblue: "#6a5acd",
		slategray: "#708090",
		snow: "#fffafa",
		springgreen: "#00ff7f",
		steelblue: "#4682b4",
		tan: "#d2b48c",
		teal: "#008080",
		thistle: "#d8bfd8",
		tomato: "#ff6347",
		turquoise: "#40e0d0",
		violet: "#ee82ee",
		wheat: "#f5deb3",
		white: "#ffffff",
		whitesmoke: "#f5f5f5",
		yellow: "#ffff00",
		yellowgreen: "#9acd32"
	};
	function i(t) {
		return t.startsWith("#") ? 4 === t.length ? `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}` : t : o[t.toLowerCase()] || "#000000"
	}
	function l(t) {
		if (t && "string" == typeof t)
			return t.split(",").filter((t => t)).map((t => t.split(":"))).filter((t => 2 == t.length)).reduce(((t, e) => (t[e[0].toLowerCase()] = i(e[1]), t)), {})
	}
	function d(t) {
		return "light" === t || 1 === t || "1" === t ? 1 : "regular" === t || 2 === t || "2" === t ? 2 : "bold" === t || 3 === t || "3" === t ? 3 : "number" == typeof t || "string" == typeof t ? +t : void 0
	}
	function c(t) {
		if ("string" == typeof t)
			return t
	}
	function u(t) {
		const e = t.toString(16);
		return 1 == e.length ? "0" + e : e
	}
	function s(t) {
		return Math.round(t / 255 * 1e3) / 1e3
	}
	function b(t) {
		return Math.round(255 * t)
	}
	function g(t) {
		const {
			r: e,
			g: i,
			b: r
		} = function (t) {
			let e = parseInt("#" != t[0] ? t : t.substring(1), 16);
			return {
				r: e >> 16 & 255,
				g: e >> 8 & 255,
				b: 255 & e
			}
		}
				(t);
		return [s(e), s(i), s(r)]
	}
	function h(t) {
		return function (t) {
			return "#" + u(t.r) + u(t.g) + u(t.b)
		}
			({
				r: b(t[0]),
				g: b(t[1]),
				b: b(t[2])
			})
	}
	function p(t, {
		lottieInstance: e
	} = {}) {
		const i = [];
		return t && t.layers ? (t.layers.forEach(((t, r) => {
			t.nm && t.ef && t.ef.forEach(((t, s) => {
				const a = t?.ef?.[0]?.v?.k;
				if (void 0 === a)
					return;
				let n,
					o;
				if (n = e ? `renderer.elements.${r}.effectsManager.effectElements.${s}.effectElements.0.p.v` : `layers.${r}.ef.${s}.ef.0.v.k`, "ADBE Color Control" === t.mn ? o = "color" : "ADBE Slider Control" === t.mn ? o = "slider" : "ADBE Point Control" === t.mn ? o = "point" : "ADBE Checkbox Control" === t.mn ? o = "checkbox" : t.mn.startsWith("Pseudo/") && (o = "feature"), !o)
					return;
				const h = t.nm.toLowerCase();
				i.push({
					name: h,
					path: n,
					value: a,
					type: o
				})
			}))
		})), i) : i
	}
	function y(t, e) {
		for (const i of e)
			a(t, i.path, i.value)
	}
	function m(t, e, r) {
		for (const n of e)
			"color" === n.type ? "object" == typeof r && "r" in r && "g" in r && "b" in r ? a(t, n.path, [s(r.r), s(r.g), s(r.b)]) : Array.isArray(r) ? a(t, n.path, r) : "string" == typeof r && a(t, n.path, g(i(r))) : "point" === n.type ? "object" == typeof r && "x" in r && "y" in r ? (a(t, n.path + ".0", r.x), a(t, n.path + ".1", r.y)) : Array.isArray(r) && (a(t, n.path + ".0", r[0]), a(t, n.path + ".1", r[1])) : a(t, n.path, r)
	}
	const SUPPORTS_ADOPTING_STYLE_SHEETS = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
		INTERSECTION_LOADING_EVENTS = ["click", "mouseenter", "mouseleave"],
		ELEMENT_STYLE = "\n    :host {\n        position: relative;\n        display: inline-block;\n        width: 32px;\n        height: 32px;\n        transform: translate3d(0px, 0px, 0px);\n    }\n\n    :host(.current-color) svg path[fill] {\n        fill: currentColor;\n    }\n\n    :host(.current-color) svg path[stroke] {\n        stroke: currentColor;\n    }\n\n    svg {\n        position: absolute;\n        pointer-events: none;\n        display: block;\n        transform: unset!important;\n    }\n\n    ::slotted(*) {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .body.ready ::slotted(*) {\n        display: none;\n    }\n";
	let styleSheet;
	const OBSERVED_ATTRIBUTES = ["src", "icon", "state", "morph", "anim", "animtrigger", "trigger", "intro", "introtrigger", "outro", "outrotrigger", "repears", "loading", "stroke", "target", "colors"];
	class Element extends HTMLElement {
		static _iconLoader;
		static _playerFactory;
		static _definedTriggers = new Map;
		static get version() {
			return "1.4.3"
		}
		static get observedAttributes() {
			return OBSERVED_ATTRIBUTES
		}
		static setIconLoader(t) {
			Element._iconLoader = t
		}
		static setPlayerFactory(t) {
			Element._playerFactory = t
		}
		static defineTrigger(t, e) {
			Element._definedTriggers.set(t, e)
		}
		_root;
		_isConnected = !1;
		_isReady = !1;
		_assignedIconData;
		_loadedIconData;
		_triggerInstance;
		_playerInstance;
		delayedLoading = null;
		attributeChangedCallback(t, e, i) {
			this[`${t}Changed`].call(this)
		}
		connectedCallback() {
			if (this._root || this.createElements(), "lazy" === this.loading) {
				let t;
				this.delayedLoading = e => {
					t.unobserve(this),
						t = void 0,
						this.delayedLoading = null,
						e || this.createPlayer()
				},
					t = new IntersectionObserver(((e, i) => {
						e.forEach((e => {
							e.isIntersecting && t && this.delayedLoading && this.delayedLoading()
						}))
					})),
					t.observe(this)
			} else if ("interaction" === this.loading) {
				let t;
				this.delayedLoading = r => {
					for (const t of INTERSECTION_LOADING_EVENTS)
						(e || this).removeEventListener(t, i);
					this.delayedLoading = null,
						r || this.createPlayer().then((() => {
							(e || this).dispatchEvent(new Event(t))
						}))
				};
				const e = this.target ? this.closest(this.target) : null;
				let i = e => {
					const i = e?.type;
					t ? t = i : (t = i, this.delayedLoading && this.delayedLoading())
				};
				i = i.bind(this);
				for (const t of INTERSECTION_LOADING_EVENTS)
					(e || this).addEventListener(t, i)
			} else
				this.createPlayer();
			this._isConnected = !0
		}
		disconnectedCallback() {
			this.delayedLoading && this.delayedLoading(!0),
				this.destroyPlayer(),
				this._isConnected = !1
		}
		createElements() {
			if (this._root = this.attachShadow({
				mode: "open"
			}), SUPPORTS_ADOPTING_STYLE_SHEETS)
				styleSheet || (styleSheet = new CSSStyleSheet, styleSheet.replaceSync(ELEMENT_STYLE)), this._root.adoptedStyleSheets = [styleSheet];
			else {
				const t = document.createElement("style");
				t.innerHTML = ELEMENT_STYLE,
					this._root.appendChild(t)
			}
			const t = document.createElement("div");
			t.classList.add("body"),
				this._root.appendChild(t);
			const e = document.createElement("slot");
			t.appendChild(e)
		}
		async createPlayer() {
			if (!Element._playerFactory)
				throw new Error("Missing player loader!");
			if (this.delayedLoading)
				return;
			const t = await this.loadIconData();
			if (!t)
				return;
			this._playerInstance = Element._playerFactory(this.animationContainer, t, {
				state: c(this.state),
				stroke: d(this.stroke),
				colors: l(this.colors),
				scale: parseFloat("" + this.getAttribute("scale") || ""),
				axisX: parseFloat("" + this.getAttribute("axis-x") || ""),
				axisY: parseFloat("" + this.getAttribute("axis-y") || "")
			});
			const e = Object.entries(this._playerInstance.colors || {});
			if (e.length) {
				let t = "";
				for (const [i, r] of e)
					t += `\n                    :host(:not(.current-color)) svg path[fill].${i} {\n                        fill: var(--lord-icon-${i}, var(--lord-icon-${i}-base, #000));\n                    }\n        \n                    :host(:not(.current-color)) svg path[stroke].${i} {\n                        stroke: var(--lord-icon-${i}, var(--lord-icon-${i}-base, #000));\n                    }\n                `;
				const i = document.createElement("style");
				i.innerHTML = t,
					this.animationContainer.appendChild(i)
			}
			this._playerInstance.connect(),
				this._playerInstance.addEventListener("ready", (() => {
					this._triggerInstance && this._triggerInstance.onReady && this._triggerInstance.onReady()
				})),
				this._playerInstance.addEventListener("refresh", (() => {
					this.refresh(),
						this._triggerInstance && this._triggerInstance.onRefresh && this._triggerInstance.onRefresh()
				})),
				this._playerInstance.addEventListener("complete", (() => {
					this._triggerInstance && this._triggerInstance.onComplete && this._triggerInstance.onComplete()
				})),
				this._playerInstance.addEventListener("frame", (() => {
					this._triggerInstance && this._triggerInstance.onFrame && this._triggerInstance.onFrame()
				})),
				this.refresh(),
				this.triggerChanged(),
				await new Promise(((t, e) => {
					this._playerInstance.isReady ? t() : this._playerInstance.addEventListener("ready", t)
				})),
				this._isReady = !0,
				this.dispatchEvent(new CustomEvent("ready"))
		}
		destroyPlayer() {
			this._isReady = !1,
				this._loadedIconData = void 0,
				this._triggerInstance && (this._triggerInstance.onDisconnected && this._triggerInstance.onDisconnected(), this._triggerInstance = void 0),
				this._playerInstance && (this._playerInstance.disconnect(), this._playerInstance = void 0)
		}
		async loadIconData() {
			let t = this.iconData;
			if (!t)
				if (this.icon && Element._iconLoader)
					this._loadedIconData = t = await Element._iconLoader(this.icon);
				else if (this.src) {
					const e = await fetch(this.src);
					this._loadedIconData = t = await e.json()
				}
			return t
		}
		refresh() {
			this.movePaletteToCssVariables()
		}
		movePaletteToCssVariables() {
			for (const [t, e] of Object.entries(this._playerInstance.colors || {}))
				e ? this.animationContainer.style.setProperty(`--lord-icon-${t}-base`, e) : this.animationContainer.style.removeProperty(`--lord-icon-${t}-base`)
		}
		targetChanged() {
			this.triggerChanged()
		}
		loadingChanged() {

		}
		animChanged() {
			this.triggerChanged()
		}
		animtriggerChanged() {
			this.triggerChanged()
		}
		triggerChanged() {
			if (this._triggerInstance && (this._triggerInstance.onDisconnected && this._triggerInstance.onDisconnected(), this._triggerInstance = void 0, this._playerInstance?.pause()), !this.trigger || !this._playerInstance)
				return;
			const t = Element._definedTriggers.get(this.trigger);
			if (!t)
				throw new Error("Can't use unregistered trigger!");
			const e = this.target ? this.closest(this.target) : null;
			this._triggerInstance = new t(this._playerInstance, this, e || this),
				this._triggerInstance.onConnected && this._triggerInstance.onConnected(),
				this._playerInstance.isReady && this._triggerInstance.onReady && this._triggerInstance.onReady()
		}
		colorsChanged() {
			this._playerInstance && (this._playerInstance.colors = l(this.colors) || null)
		}
		strokeChanged() {
			this._playerInstance && (this._playerInstance.stroke = d(this.stroke) || null)
		}
		stateChanged() {
			this._playerInstance && (this._playerInstance.state = this.state)
		}
		morphChanged() {
			this._playerInstance && (this._playerInstance.morph = this.morph)
		}
		introChanged() {
			this._playerInstance && (this._playerInstance.intro = this.intro)
		}
		introtriggerChanged() {
			this.triggerChanged()
		}
		outroChanged() {
			this._playerInstance && (this._playerInstance.outro = this.outro)
		}
		outrotriggerChanged() {
			this.triggerChanged()
		}
		iconChanged() {
			this._isConnected && (this.destroyPlayer(), this.createPlayer())
		}
		srcChanged() {
			this._isConnected && (this.destroyPlayer(), this.createPlayer())
		}
		set icon(t) {
			if (t && r(t))
				this._assignedIconData !== t && (this._assignedIconData = t, this.hasAttribute("icon") ? this.removeAttribute("icon") : this.iconChanged());
			else {
				const e = this._assignedIconData;
				this._assignedIconData = void 0,
					t && "string" == typeof t ? this.setAttribute("icon", t) : (this.removeAttribute("icon"), e && this.iconChanged())
			}
		}
		get icon() {
			return this._assignedIconData || this.getAttribute("icon")
		}
		set src(t) {
			t ? this.setAttribute("src", t) : this.removeAttribute("src")
		}
		get src() {
			return this.getAttribute("src")
		}
		set anim(t) {
			t ? this.setAttribute("anim", t) : this.removeAttribute("anim")
		}
		get anim() {
			return this.getAttribute("anim")
		}
		set animtrigger(t) {
			t ? this.setAttribute("animtrigger", t) : this.removeAttribute("animtrigger")
		}
		get animtrigger() {
			return this.getAttribute("animtrigger")
		}
		set state(t) {
			t ? this.setAttribute("state", t) : this.removeAttribute("state")
		}
		get state() {
			return this.getAttribute("state")
		}
		set morph(t) {
			t ? this.setAttribute("morph", t) : this.removeAttribute("morph")
		}
		get morph() {
			return this.getAttribute("morph")
		}
		set intro(t) {
			t ? this.setAttribute("intro", t) : this.removeAttribute("intro")
		}
		get intro() {
			return this.getAttribute("intro")
		}
		set introtrigger(t) {
			t ? this.setAttribute("introtrigger", t) : this.removeAttribute("introtrigger")
		}
		get introtrigger() {
			return this.getAttribute("introtrigger")
		}
		set outro(t) {
			t ? this.setAttribute("outro", t) : this.removeAttribute("outro")
		}
		get outro() {
			return this.getAttribute("outro")
		}
		set outrotrigger(t) {
			t ? this.setAttribute("outrotrigger", t) : this.removeAttribute("outrotrigger")
		}
		get outrotrigger() {
			return this.getAttribute("outrotrigger")
		}
		set colors(t) {
			t ? this.setAttribute("colors", t) : this.removeAttribute("colors")
		}
		get colors() {
			return this.getAttribute("colors")
		}
		set trigger(t) {
			t ? this.setAttribute("trigger", t) : this.removeAttribute("trigger")
		}
		get trigger() {
			return this.getAttribute("trigger")
		}
		set loading(t) {
			t ? this.setAttribute("loading", t) : this.removeAttribute("loading")
		}
		get loading() {
			if (this.getAttribute("loading")) {
				const t = this.getAttribute("loading").toLowerCase();
				if ("lazy" === t)
					return "lazy";
				if ("interaction" === t)
					return "interaction"
			}
			return null
		}
		set target(t) {
			t ? this.setAttribute("target", t) : this.removeAttribute("target")
		}
		get target() {
			return this.getAttribute("target")
		}
		set stroke(t) {
			t ? this.setAttribute("stroke", t) : this.removeAttribute("stroke")
		}
		get stroke() {
			return this.hasAttribute("stroke") ? this.getAttribute("stroke") : null
		}
		get isReady() {
			return this._isReady
		}
		get playerInstance() {
			return this._playerInstance
		}
		get triggerInstance() {
			return this._triggerInstance
		}
		get animationContainer() {
			return this._root.lastElementChild
		}
		get iconData() {
			return this._assignedIconData || this._loadedIconData
		}
	}
	const DEFAULT_LOTTIE_WEB_OPTIONS = {
		renderer: "svg",
		loop: !1,
		autoplay: !1,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid meet",
			progressiveLoad: !0,
			hideOnTransparent: !0
		}
	};
	function createColorsProxy() {
		return new Proxy(this, {
			set: (t, e, i, r) => ("string" == typeof e && (i ? m(this.lottie, this.rawProperties.filter((t => "color" === t.type && t.name === e)), i) : y(this.lottie, this.rawProperties.filter((t => "color" === t.type && t.name === e))), t.refresh()), !0),
			get: (e, i, r) => {
				for (const r of e.rawProperties)
					if ("color" == r.type && "string" == typeof i && i == r.name) {
						const e = t(this.lottie, r.path);
						if (e)
							return h(e)
					}
			},
			deleteProperty: (t, e) => ("string" == typeof e && (y(this.lottie, this.rawProperties.filter((t => "color" === t.type && t.name === e))), t.refresh()), !0),
			ownKeys: t => t.rawProperties.filter((t => "color" == t.type)).map((t => t.name)),
			has: (t, e) => {
				for (const i of t.rawProperties)
					if ("color" == i.type && "string" == typeof e && e == i.name)
						return !0;
				return !1
			},
			getOwnPropertyDescriptor: t => ({
				enumerable: !0,
				configurable: !0
			})
		})
	}
	class Player {
		_animationLoader;
		_container;
		_iconData;
		_initial;
		_options;
		_lottie;
		_isReady = !1;
		_colorsProxy;
		_direction = 1;
		_speed = 1;
		_rawProperties;
		_eventCallbacks = {};
		_state;
		_states;
		constructor(t, i, r, s, n) {
			if (this._animationLoader = t, this._container = i, this._iconData = r, this._initial = s || {}, this._options = n || DEFAULT_LOTTIE_WEB_OPTIONS, this._states = (r.markers || []).map((t => {
				const [e, i] = t.cm.split(":"),
					r = {
						time: t.tm,
						duration: t.dr,
						name: i || e,
						default:
							!(!i || !e.includes("default"))
					};
				return (r.name === this._initial.state || r.default && f(this._initial.state)) && (this._state = r),
					r
			})).filter((t => t.duration > 0)), this._states.length && (this._initial.stroke && ![1, 2, 3, "light", "regular", "bold"].includes(this._initial.stroke) && delete this._initial.stroke, this._initial.state && !this._state && (this._state = this._states.filter((t => t.default))[0])), !this._states.length) {
				this._iconData = e(this._iconData);
				const t = p(this._iconData, {
					lottieInstance: !1
				});
				if (t && this._initial.state) {
					const e = `state-${this._initial.state.toLowerCase()}`;
					m(this._iconData, t.filter((t => t.name.startsWith("state-"))), 0),
						m(this._iconData, t.filter((t => t.name === e)), 1)
				}
				if (t && this._initial.stroke) {
					const e = t.filter((t => "stroke" === t.name))[0];
					if (e) {
						const t = e.value / 50,
							i = this._initial.stroke * t;
						a(this._iconData, e.path, i)
					}
				}
				if (t && this._initial.scale) {
					const e = t.filter((t => "scale" === t.name))[0];
					if (e) {
						const t = e.value / 50,
							i = this._initial.scale * t;
						a(this._iconData, e.path, i)
					}
				}
				if (t && this._initial.axisX && this._initial.axisY) {
					const e = t.filter((t => "axis" === t.name))[0];
					if (e) {
						const t = (e.value[0] + e.value[1]) / 2 / 50;
						a(this._iconData, e.path + ".0", this._initial.axisX * t),
							a(this._iconData, e.path + ".1", this._initial.axisY * t)
					}
				}
			}
		}
		connect() {
			if (this._lottie)
				throw new Error("Already connected player!");
			const t = {},
				i = {};
			if (this._state && (i.initialSegment = [this._state.time, this._state.time + this._state.duration + 1]), this._states.length) {
				const e = this._states[0],
					i = this._states[this._states.length - 1];
				t.ip = e.time,
					t.op = i.time + i.duration + 1
			}
			this._lottie = this._animationLoader({
				...this._options,
				...i,
				container: this._container,
				animationData: Object.assign(e(this._iconData), t)
			}),
				this._initial.colors && (this.colors = this._initial.colors),
				this._initial.stroke && (this.stroke = this._initial.stroke),
				this._lottie.addEventListener("complete", (t => {
					this.triggerEvent("complete")
				})),
				this._lottie.addEventListener("loopComplete", (() => {
					this.triggerEvent("complete")
				})),
				this._lottie.addEventListener("enterFrame", (t => {
					this.triggerEvent("frame")
				})),
				this._lottie.isLoaded ? (this._container.classList.add("ready"), this._isReady = !0, this.triggerEvent("ready")) : this._lottie.addEventListener("config_ready", (() => {
					this._container.classList.add("ready"),
						this._isReady = !0,
						this.triggerEvent("ready")
				}))
		}
		disconnect() {
			if (!this._lottie)
				throw new Error("Not connected player!");
			this._isReady = !1,
				this._lottie.destroy(),
				this._lottie = void 0,
				this._colorsProxy = void 0,
				this._rawProperties = void 0,
				this._container.classList.remove("ready")
		}
		addEventListener(t, e) {
			return this._eventCallbacks[t] || (this._eventCallbacks[t] = []),
				this._eventCallbacks[t].push(e),
				() => {
					this.removeEventListener(t, e)
				}
		}
		removeEventListener(t, e) {
			if (e) {
				if (this._eventCallbacks[t]) {
					let i = 0,
						r = this._eventCallbacks[t].length;
					for (; i < r;)
						this._eventCallbacks[t][i] === e && (this._eventCallbacks[t].splice(i, 1), i -= 1, r -= 1), i += 1;
					this._eventCallbacks[t].length || (this._eventCallbacks[t] = null)
				}
			} else
				this._eventCallbacks[t] = null
		}
		triggerEvent(t, e) {
			if (this._eventCallbacks[t]) {
				const i = this._eventCallbacks[t];
				for (let t = 0; t < i.length; t += 1)
					i[t](e)
			}
		}
		refresh() {
			this._lottie?.renderer.renderFrame(null),
				this.triggerEvent("refresh")
		}
		play() {
			this._lottie.setDirection(this._direction),
				this._lottie.play()
		}
		playFromBeginning() {
			this._lottie.setDirection(1),
				this._state ? this._lottie.playSegments([this._state.time, this._state.time + this._state.duration + 1], !0) : this._lottie.goToAndPlay(0)
		}
		pause() {
			this._lottie.pause()
		}
		stop() {
			this._lottie.stop()
		}
		goToFrame(t) {
			this._lottie.goToAndStop(t, !0)
		}
		goToFirstFrame() {
			this.goToFrame(0)
		}
		goToLastFrame() {
			this.goToFrame(Math.max(0, this.frames))
		}
		set properties(t) {
			this.colors = t.colors || null,
				this.stroke = t.stroke || null,
				this.state = t.state || null
		}
		get properties() {
			const t = {};
			return this.rawProperties.filter((t => "color" === t.type)).length && (t.colors = {
				...this.colors
			}),
				this.rawProperties.filter((t => "stroke" === t.name || "stroke-layers" === t.name)).length && (t.stroke = this.stroke),
				this._states.length && (t.state = this.state),
				t
		}
		set colors(t) {
			if (y(this._lottie, this.rawProperties.filter((t => "color" === t.type))), t)
				for (const [e, i] of Object.entries(t))
					m(this._lottie, this.rawProperties.filter((t => "color" === t.type && t.name === e)), i);
			this.refresh()
		}
		get colors() {
			return this._colorsProxy || (this._colorsProxy = createColorsProxy.call(this)),
				this._colorsProxy
		}
		set stroke(t) {
			y(this._lottie, this.rawProperties.filter((t => "stroke" === t.name || "stroke-layers" === t.name)));
			const e = d(t);
			e && m(this._lottie, this.rawProperties.filter((t => "stroke" === t.name || "stroke-layers" === t.name)), e),
				this.refresh()
		}
		get stroke() {
			const e = this.rawProperties.filter((t => "stroke" === t.name || "stroke-layers" === t.name))[0];
			return e && d(+t(this._lottie, e.path)) || null
		}
		set state(t) {
			if (t === this.state)
				return;
			const e = this.isPlaying;
			this._state = void 0,
				f(t) ? this._state = this._states.filter((t => t.default))[0] : t && (this._state = this._states.filter((e => e.name === t))[0], this._state || (this._state = this._states.filter((t => t.default))[0])),
				this._state ? this._lottie?.setSegment(this._state.time, this._state.time + this._state.duration + 1) : this._lottie.resetSegments(!0),
				this.goToFirstFrame(),
				e && (this.pause(), this.play())
		}
		get state() {
			return this._state ? this._state.name : ""
		}
		set speed(t) {
			this._speed = t,
				this._lottie?.setSpeed(t)
		}
		get speed() {
			return this._speed
		}
		set direction(t) {
			this._direction = t,
				this._lottie.setDirection(t)
		}
		get direction() {
			return this._direction
		}
		set loop(t) {
			this._lottie.loop = t
		}
		get loop() {
			return !!this._lottie.loop
		}
		set frame(t) {
			this.goToFrame(Math.max(0, Math.min(this.frames, t)))
		}
		get frame() {
			return this._lottie.currentFrame
		}
		get states() {
			return this._states
		}
		get isPlaying() {
			return !this._lottie.isPaused
		}
		get isReady() {
			return this._isReady
		}
		get frames() {
			return this._lottie.getDuration(!0) - 1
		}
		get duration() {
			return this._lottie.getDuration(!1)
		}
		get lottie() {
			return this._lottie
		}
		get rawProperties() {
			return this._rawProperties || (this._rawProperties = p(this._iconData, {
				lottieInstance: !0
			}), !this._states.length && this._rawProperties && (this._rawProperties = this._rawProperties.filter((t => "scale" !== t.name && "axis" !== t.name && "stroke" !== t.name && !t.name.startsWith("state-"))))),
				this._rawProperties || []
		}
	}

	const STATE_ANIMS = ["state", "loop"];
	const MORPH_ANIMS = ["morph", "morphin", "morphout", "boomerang", "looprang"];

	class Base {

		player;
		element;
		targetElement;
		anim = "";
		trigger = "";
		introTrigger = "";
		outroTrigger = "";
		hover = false;
		click = false;
		timeout = null;
		hasAnim = false;
		hasIntro = false;
		hasIntro = false;
		initAnim = false;
		initIntro = false;
		initOutro = false;
		boomerang = false;
		playedCount = 0;
		playedAnim = false;
		playedIntro = false;
		playedOutro = false;
		intersectionObserver;

		constructor(player, element, targetElement) {
			this.player = player;
			this.element = element;
			this.targetElement = targetElement;
			this.onEnter = this.onEnter.bind(this);
			this.onLeave = this.onLeave.bind(this);
			this.onClick = this.onClick.bind(this);
			this.anim = this.element.getAttribute("trigger") ?? "none";
			this.trigger = this.element.getAttribute("animtrigger") ?? "none";
			this.introTrigger = this.element.getAttribute("introtrigger") ?? "none";
			this.outroTrigger = this.element.getAttribute("outrotrigger") ?? "none";
			this.hasAnim = (this.state != "none" || this.morph != "none") && this.trigger != "none";
			this.hasIntro = this.intro != "none" && this.introTrigger != "none";
			this.hasOutro = this.outro != "none" && this.outroTrigger != "none";
			this.playedIntro = !this.hasIntro;
			this.playedAnim = !this.hasAnim;
		}

		onConnected() {
			if (this.hasIntro) this.goToIntro();
			if (this.hasOutro && !this.hasAnim && !this.hasIntro) this.goToOutro();
			this.targetElement.addEventListener("mouseenter", this.onEnter);
			this.targetElement.addEventListener("mouseleave", this.onLeave);
			this.targetElement.addEventListener("touchend", this.onClick, { passive: !0 });
			this.targetElement.addEventListener("mouseup", this.onClick);
		}

		onDisconnected() {
			this.resetIntersectionObserver();
			this.targetElement.removeEventListener("mouseenter", this.onEnter);
			this.targetElement.removeEventListener("mouseleave", this.onLeave);
			this.targetElement.removeEventListener("touchend", this.onClick);
			this.targetElement.removeEventListener("mouseup", this.onClick);
			this.resetTimeout();
		}

		onReady() {
			if (this.introTrigger.includes("auto")) this.playIntroAnim();
			if (this.outroTrigger.includes("auto")) this.playOutroAnim();
		}

		onComplete() {
			if (this.initIntro) this.playedIntro = true;
			if (this.initOutro) this.playedOutro = true;

			if (this.initAnim) {
				if (STATE_ANIMS.includes(this.anim) && !this.boomerang) this.playedAnim = true;
				if (MORPH_ANIMS.includes(this.anim) && !this.boomerang) this.playedAnim = true;
				if (this.repeats > 0) this.playedCount++;
			}

			if (this.introTrigger.includes("auto")) this.playIntroAnim();
			if (this.outroTrigger.includes("auto")) this.playOutroAnim();
		}

		resetTimeout() {
			if (this.timeout) {
				clearTimeout(this.timeout);
				this.timeout = null;
			}
		}

		resetIntersectionObserver() {
			if (this.intersectionObserver) {
				this.intersectionObserver.unobserve(this.element);
				this.intersectionObserver = undefined;
			}
		}

		goToIntro() {
			this.player.direction = +1;
			this.player.state = this.intro;
			this.player.goToFirstFrame();
		}

		goToOutro() {
			this.player.direction = -1;
			this.player.state = this.outro;
			this.player.goToLastFrame();
		}

		playIntro() {
			this.resetTimeout();
			this.player.direction = +1;
			this.player.state = this.intro;
			this.player.goToFirstFrame();
			this.timeout = setTimeout(() => this.player.play(), this.delay);
			this.initIntro = true;
		}

		playOutro() {
			this.resetTimeout();
			this.player.direction = -1;
			this.player.state = this.outro;
			this.player.goToLastFrame();
			this.timeout = setTimeout(() => this.player.play(), this.delay);
			this.initOutro = true;
		}

		playState(direction = 0, reset = false, interrupt = false) {
			if (reset) this.playedCount = 0;
			if (interrupt || !this.player.isPlaying) {
				if (this.repeats == 0 || this.playedCount < this.repeats) {
					this.resetTimeout();
					this.player.state = this.state;
					this.player.direction = this.cdir(direction);
					this.timeout = setTimeout(() => this.player.play(), this.wait);
					this.initAnim = true;
				} else {
					if (this.click) this.click = false;
				}
			}
		}

		playMorph(direction = 0, reset = false, interrupt = false) {
			if (reset) this.playedCount = 0;
			if (interrupt || !this.player.isPlaying) {
				if (this.repeats == 0 || this.playedCount < this.repeats) {
					this.resetTimeout();
					this.player.state = this.morph;
					this.player.direction = this.cdir(direction, false);
					this.timeout = setTimeout(() => this.player.play(), this.wait);
					this.initAnim = true;
				} else {
					if (this.click) this.click = false;
				}
			}
		}

		playIntroAnim() {
			if (!this.playedIntro && !this.playedAnim && !this.playedOutro) {
				if (this.loading) {
					this.playIntro();
				} else {
					const handleIntersection = (entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								this.playIntro();
								this.resetIntersectionObserver();
							}
						});
					};
					this.intersectionObserver = new IntersectionObserver(handleIntersection);
					this.intersectionObserver.observe(this.element);
				}
			}
		}

		playOutroAnim() {
			if (this.playedIntro && this.playedAnim && !this.playedOutro) {
				if (this.loading) {
					this.playOutro();
				} else {
					const handleIntersection = (entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								this.playOutro();
								this.resetIntersectionObserver();
							}
						});
					};
					this.intersectionObserver = new IntersectionObserver(handleIntersection);
					this.intersectionObserver.observe(this.element);
				}
			}
		}

		playStateAnim(direction = 0, reset = false, interrupt = false) {
			if (this.playedIntro && !this.playedOutro) {
				if (this.loading) {
					this.playState(direction, reset, interrupt);
				} else {
					const handleIntersection = (entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								this.playState(direction, reset, interrupt);
								this.resetIntersectionObserver();
							}
						});
					};
					this.intersectionObserver = new IntersectionObserver(handleIntersection);
					this.intersectionObserver.observe(this.element);
				}
			}
		}

		playMorphAnim(direction = 0, reset = false, interrupt = false) {
			if (this.playedIntro && !this.playedOutro) {
				if (this.loading) {
					this.playMorph(direction, reset, interrupt);
				} else {
					const handleIntersection = (entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								this.playMorph(direction, reset, interrupt);
								this.resetIntersectionObserver();
							}
						});
					};
					this.intersectionObserver = new IntersectionObserver(handleIntersection);
					this.intersectionObserver.observe(this.element);
				}
			}
		}

		cdir(direction = 0, goToFrame = true) {
			if (direction == 0) {
				return this.player.direction * -1;
			} else {
				if (goToFrame && direction > 0) this.player.goToFirstFrame();
				if (goToFrame && direction < 0) this.player.goToLastFrame();
				return Math.sign(direction);
			}
		}

		get state() {
			return this.element.getAttribute("state") ?? this.element.state;
		}

		get morph() {
			return this.element.getAttribute("morph") ?? "none";
		}

		get intro() {
			return this.element.getAttribute("intro") ?? "none";
		}

		get outro() {
			return this.element.getAttribute("outro") ?? "none";
		}

		get wait() {
			return Math.max(Number(this.element.getAttribute("wait")) || 0, 0);
		}

		get delay() {
			return Math.max(Number(this.element.getAttribute("delay")) || 0, 0);
		}

		get repeats() {
			return Math.max(Math.floor(Number(this.element.getAttribute("repeats"))) || 0, 0);
		}

		get loading() {
			return this.element.hasAttribute("loading");
		}

		onEnter() {
			this.hover = true;
			if (this.introTrigger.includes("hover")) this.playIntroAnim();
			if (this.outroTrigger.includes("hover")) this.playOutroAnim();
		}

		onClick() {
			this.click = !this.click;
			if (this.introTrigger.includes("click")) this.playIntroAnim();
			if (this.outroTrigger.includes("click")) this.playOutroAnim();
		}

		onLeave() {
			this.hover = false;
		}

	}

	class State extends Base {

		onReady() {
			super.onReady();
			if (this.trigger.includes("auto") && !this.playedAnim) this.playStateAnim(+1, false, false);
		}

		onComplete() {
			super.onComplete();
			if (this.trigger.includes("auto") && !this.playedAnim) this.playStateAnim(+1, false, false);
		}

		onEnter() {
			super.onEnter();
			if (this.trigger.includes("hover")) this.playStateAnim(+1, true, false);
		}

		onClick() {
			super.onClick();
			if (this.trigger.includes("click")) this.playStateAnim(+1, true, false);
		}

	}

	class Loop extends Base {

		onReady() {
			super.onReady();
			if (this.trigger.includes("auto")) this.playStateAnim(+1, false, false);
		}

		onComplete() {
			super.onComplete();
			if (this.trigger.includes("auto")) this.playStateAnim(+1, false, false);
			if (this.trigger.includes("hover") && this.hover) this.playStateAnim(+1, false, false);
			if (this.trigger.includes("click") && this.click) this.playStateAnim(+1, false, false);
		}

		onEnter() {
			super.onEnter();
			if (this.trigger.includes("hover") && this.hover) this.playStateAnim(+1, true, false);
		}

		onClick() {
			super.onClick();
			if (this.trigger.includes("click") && this.click) this.playStateAnim(+1, true, false);
		}

	}

	class Morph extends Base {

		onReady() {
			super.onReady();
			if (this.trigger.includes("auto") && !this.playedAnim) this.playMorphAnim(+1, false, false);
		}

		onComplete() {
			super.onComplete();
			if (this.trigger.includes("auto") && !this.playedAnim) this.playMorphAnim(+1, false, false);
		}

		onEnter() {
			super.onEnter();
			if (this.trigger.includes("hover")) this.playMorphAnim(+1, true, true);
		}

		onClick() {
			super.onClick();
			if (this.trigger.includes("click")) this.playMorphAnim(0, true, true);
		}

		onLeave() {
			super.onLeave();
			if (this.trigger.includes("hover")) this.playMorphAnim(-1, true, true);
		}

	}

	class MorphIn extends Base {

		onReady() {
			super.onReady();
			if (this.trigger.includes("auto") && !this.playedAnim) this.playMorphAnim(+1, false, false);
		}

		onComplete() {
			super.onComplete();
			if (this.trigger.includes("auto") && !this.playedAnim) this.playMorphAnim(+1, false, false);
		}

		onEnter() {
			super.onEnter();
			if (this.trigger.includes("hover")) this.playMorphAnim(+1, true, true);
		}

		onClick() {
			super.onClick();
			if (this.trigger.includes("click")) this.playMorphAnim(+1, true, true);
		}

	}

	class MorphOut extends Base {

		onReady() {
			super.onReady();
			if (this.trigger.includes("auto") && !this.playedAnim) this.playMorphAnim(-1, false, false);
		}

		onComplete() {
			super.onComplete();
			if (this.trigger.includes("auto") && !this.playedAnim) this.playMorphAnim(-1, false, false);
		}

		onEnter() {
			super.onEnter();
			if (this.trigger.includes("hover")) this.playMorphAnim(-1, true, true);
		}

		onClick() {
			super.onClick();
			if (this.trigger.includes("click")) this.playMorphAnim(-1, true, true);
		}

	}

	class Boomerang extends Base {

		onReady() {
			super.onReady();
			if (this.trigger.includes("auto")) this.boomerang = true, this.playMorphAnim(+1, false, false);
		}

		onComplete() {
			super.onComplete();
			if (this.boomerang) this.boomerang = false, this.playMorphAnim(-1, false, false);
		}

		onEnter() {
			super.onEnter();
			if (this.trigger.includes("hover")) this.boomerang = true, this.playMorphAnim(+1, true, false);
		}

		onClick() {
			super.onClick();
			if (this.trigger.includes("click")) this.boomerang = true, this.playMorphAnim(+1, true, false);
		}

	}

	class Looprang extends Base {

		onReady() {
			super.onReady();
			if (this.trigger.includes("auto")) this.boomerang = true, this.playMorphAnim(+1, false, false);
		}

		onComplete() {
			super.onComplete();
			if (this.boomerang) {
				this.boomerang = false, this.playMorphAnim(-1, false, false);
			} else {
				if (this.trigger.includes("auto")) this.boomerang = true, this.playMorphAnim(+1, false, false);
				if (this.trigger.includes("hover") && this.hover) this.boomerang = true, this.playMorphAnim(+1, false, false);
				if (this.trigger.includes("click") && this.click) this.boomerang = true, this.playMorphAnim(+1, false, false);
			}
		}

		onEnter() {
			super.onEnter();
			if (this.trigger.includes("hover") && this.hover) this.boomerang = true, this.playMorphAnim(+1, true, false);
		}

		onClick() {
			super.onClick();
			if (this.trigger.includes("click") && this.click) this.boomerang = true, this.playMorphAnim(+1, true, false);
		}

	}

	function defineElement(t) {
		Element.setPlayerFactory(((e, i, r) => new Player(t, e, i, r))),
			Element.defineTrigger("none", Base),
			Element.defineTrigger("state", State),
			Element.defineTrigger("loop", Loop),
			Element.defineTrigger("morph", Morph),
			Element.defineTrigger("morphin", MorphIn),
			Element.defineTrigger("morphout", MorphOut),
			Element.defineTrigger("boomerang", Boomerang),
			Element.defineTrigger("looprang", Looprang),
			customElements.get && customElements.get("lord-icon") || customElements.define("lord-icon", Element)
	}

	function getDefaultExportFromCjs(t) {
		return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
	}
	var lottie$1 = {
		exports: {}
	};
	(function (module, exports) {
		var factory;
		"undefined" != typeof navigator && (factory = function () {
			var svgNS = "http://www.w3.org/2000/svg",
				locationHref = "",
				_useWebWorker = !1,
				initialDefaultFrame = -999999,
				setWebWorker = function (t) {
					_useWebWorker = !!t
				},
				getWebWorker = function () {
					return _useWebWorker
				},
				setLocationHref = function (t) {
					locationHref = t
				},
				getLocationHref = function () {
					return locationHref
				};
			function createTag(t) {
				return document.createElement(t)
			}
			function extendPrototype(t, e) {
				var i,
					r,
					s = t.length;
				for (i = 0; i < s; i += 1)
					for (var a in r = t[i].prototype)
						Object.prototype.hasOwnProperty.call(r, a) && (e.prototype[a] = r[a])
			}
			function getDescriptor(t, e) {
				return Object.getOwnPropertyDescriptor(t, e)
			}
			function createProxyFunction(t) {
				function e() { }
				return e.prototype = t,
					e
			}
			var audioControllerFactory = function () {
				function t(t) {
					this.audios = [],
						this.audioFactory = t,
						this._volume = 1,
						this._isMuted = !1
				}
				return t.prototype = {
					addAudio: function (t) {
						this.audios.push(t)
					},
					pause: function () {
						var t,
							e = this.audios.length;
						for (t = 0; t < e; t += 1)
							this.audios[t].pause()
					},
					resume: function () {
						var t,
							e = this.audios.length;
						for (t = 0; t < e; t += 1)
							this.audios[t].resume()
					},
					setRate: function (t) {
						var e,
							i = this.audios.length;
						for (e = 0; e < i; e += 1)
							this.audios[e].setRate(t)
					},
					createAudio: function (t) {
						return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
							src: [t]
						}) : {
							isPlaying: !1,
							play: function () {
								this.isPlaying = !0
							},
							seek: function () {
								this.isPlaying = !1
							},
							playing: function () { },
							rate: function () { },
							setVolume: function () { }
						}
					},
					setAudioFactory: function (t) {
						this.audioFactory = t
					},
					setVolume: function (t) {
						this._volume = t,
							this._updateVolume()
					},
					mute: function () {
						this._isMuted = !0,
							this._updateVolume()
					},
					unmute: function () {
						this._isMuted = !1,
							this._updateVolume()
					},
					getVolume: function () {
						return this._volume
					},
					_updateVolume: function () {
						var t,
							e = this.audios.length;
						for (t = 0; t < e; t += 1)
							this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
					}
				},
					function () {
						return new t
					}
			}
				(),
				createTypedArray = function () {
					function t(t, e) {
						var i,
							r = 0,
							s = [];
						switch (t) {
							case "int16":
							case "uint8c":
								i = 1;
								break;
							default:
								i = 1.1
						}
						for (r = 0; r < e; r += 1)
							s.push(i);
						return s
					}
					return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function (e, i) {
						return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
					}
						: t
				}
					();
			function createSizedArray(t) {
				return Array.apply(null, {
					length: t
				})
			}
			function _typeof$6(t) {
				return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
					return typeof t
				}
					: function (t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					},
					_typeof$6(t)
			}
			var subframeEnabled = !0,
				expressionsPlugin = null,
				expressionsInterfaces = null,
				idPrefix$1 = "",
				isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
				bmPow = Math.pow,
				bmSqrt = Math.sqrt,
				bmFloor = Math.floor,
				bmMax = Math.max,
				bmMin = Math.min,
				BMMath = {};
			!function () {
				var t,
					e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
					i = e.length;
				for (t = 0; t < i; t += 1)
					BMMath[e[t]] = Math[e[t]]
			}
				(),
				BMMath.random = Math.random,
				BMMath.abs = function (t) {
					if ("object" === _typeof$6(t) && t.length) {
						var e,
							i = createSizedArray(t.length),
							r = t.length;
						for (e = 0; e < r; e += 1)
							i[e] = Math.abs(t[e]);
						return i
					}
					return Math.abs(t)
				};
			var defaultCurveSegments = 150,
				degToRads = Math.PI / 180,
				roundCorner = .5519;
			function styleDiv(t) {
				t.style.position = "absolute",
					t.style.top = 0,
					t.style.left = 0,
					t.style.display = "block",
					t.style.transformOrigin = "0 0",
					t.style.webkitTransformOrigin = "0 0",
					t.style.backfaceVisibility = "visible",
					t.style.webkitBackfaceVisibility = "visible",
					t.style.transformStyle = "preserve-3d",
					t.style.webkitTransformStyle = "preserve-3d",
					t.style.mozTransformStyle = "preserve-3d"
			}
			function BMEnterFrameEvent(t, e, i, r) {
				this.type = t,
					this.currentTime = e,
					this.totalTime = i,
					this.direction = r < 0 ? -1 : 1
			}
			function BMCompleteEvent(t, e) {
				this.type = t,
					this.direction = e < 0 ? -1 : 1
			}
			function BMCompleteLoopEvent(t, e, i, r) {
				this.type = t,
					this.currentLoop = i,
					this.totalLoops = e,
					this.direction = r < 0 ? -1 : 1
			}
			function BMSegmentStartEvent(t, e, i) {
				this.type = t,
					this.firstFrame = e,
					this.totalFrames = i
			}
			function BMDestroyEvent(t, e) {
				this.type = t,
					this.target = e
			}
			function BMRenderFrameErrorEvent(t, e) {
				this.type = "renderFrameError",
					this.nativeError = t,
					this.currentTime = e
			}
			function BMConfigErrorEvent(t) {
				this.type = "configError",
					this.nativeError = t
			}
			var createElementID = (_count = 0, function () {
				return idPrefix$1 + "__lottie_element_" + (_count += 1)
			}),
				_count;
			function HSVtoRGB(t, e, i) {
				var r,
					s,
					a,
					n,
					o,
					h,
					l,
					p;
				switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
					case 0:
						r = i,
							s = p,
							a = h;
						break;
					case 1:
						r = l,
							s = i,
							a = h;
						break;
					case 2:
						r = h,
							s = i,
							a = p;
						break;
					case 3:
						r = h,
							s = l,
							a = i;
						break;
					case 4:
						r = p,
							s = h,
							a = i;
						break;
					case 5:
						r = i,
							s = h,
							a = l
				}
				return [r, s, a]
			}
			function RGBtoHSV(t, e, i) {
				var r,
					s = Math.max(t, e, i),
					a = Math.min(t, e, i),
					n = s - a,
					o = 0 === s ? 0 : n / s,
					h = s / 255;
				switch (s) {
					case a:
						r = 0;
						break;
					case t:
						r = e - i + n * (e < i ? 6 : 0),
							r /= 6 * n;
						break;
					case e:
						r = i - t + 2 * n,
							r /= 6 * n;
						break;
					case i:
						r = t - e + 4 * n,
							r /= 6 * n
				}
				return [r, o, h]
			}
			function addSaturationToRGB(t, e) {
				var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
				return i[1] += e,
					i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0),
					HSVtoRGB(i[0], i[1], i[2])
			}
			function addBrightnessToRGB(t, e) {
				var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
				return i[2] += e,
					i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0),
					HSVtoRGB(i[0], i[1], i[2])
			}
			function addHueToRGB(t, e) {
				var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
				return i[0] += e / 360,
					i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1),
					HSVtoRGB(i[0], i[1], i[2])
			}
			var rgbToHex = function () {
				var t,
					e,
					i = [];
				for (t = 0; t < 256; t += 1)
					e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
				return function (t, e, r) {
					return t < 0 && (t = 0),
						e < 0 && (e = 0),
						r < 0 && (r = 0),
						"#" + i[t] + i[e] + i[r]
				}
			}
				(),
				setSubframeEnabled = function (t) {
					subframeEnabled = !!t
				},
				getSubframeEnabled = function () {
					return subframeEnabled
				},
				setExpressionsPlugin = function (t) {
					expressionsPlugin = t
				},
				getExpressionsPlugin = function () {
					return expressionsPlugin
				},
				setExpressionInterfaces = function (t) {
					expressionsInterfaces = t
				},
				getExpressionInterfaces = function () {
					return expressionsInterfaces
				},
				setDefaultCurveSegments = function (t) {
					defaultCurveSegments = t
				},
				getDefaultCurveSegments = function () {
					return defaultCurveSegments
				},
				setIdPrefix = function (t) {
					idPrefix$1 = t
				};
			function createNS(t) {
				return document.createElementNS(svgNS, t)
			}
			function _typeof$5(t) {
				return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
					return typeof t
				}
					: function (t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					},
					_typeof$5(t)
			}
			var dataManager = function () {
				var t,
					e,
					i = 1,
					r = [],
					s = {
						onmessage: function () { },
						postMessage: function (e) {
							t({
								data: e
							})
						}
					},
					a = {
						postMessage: function (t) {
							s.onmessage({
								data: t
							})
						}
					};
				function n() {
					e || (e = function (e) {
						if (window.Worker && window.Blob && getWebWorker()) {
							var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
								type: "text/javascript"
							}),
								r = URL.createObjectURL(i);
							return new Worker(r)
						}
						return t = e,
							s
					}
						((function (t) {
							if (a.dataManager || (a.dataManager = function () {
								function t(s, a) {
									var n,
										o,
										h,
										l,
										p,
										c,
										f = s.length;
									for (o = 0; o < f; o += 1)
										if ("ks" in (n = s[o]) && !n.completed) {
											if (n.completed = !0, n.hasMask) {
												var d = n.masksProperties;
												for (l = d.length, h = 0; h < l; h += 1)
													if (d[h].pt.k.i)
														r(d[h].pt.k);
													else
														for (c = d[h].pt.k.length, p = 0; p < c; p += 1)
															d[h].pt.k[p].s && r(d[h].pt.k[p].s[0]), d[h].pt.k[p].e && r(d[h].pt.k[p].e[0])
											}
											0 === n.ty ? (n.layers = e(n.refId, a), t(n.layers, a)) : 4 === n.ty ? i(n.shapes) : 5 === n.ty && m(n)
										}
								}
								function e(t, e) {
									var i = function (t, e) {
										for (var i = 0, r = e.length; i < r;) {
											if (e[i].id === t)
												return e[i];
											i += 1
										}
										return null
									}
										(t, e);
									return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
								}
								function i(t) {
									var e,
										s,
										a;
									for (e = t.length - 1; e >= 0; e -= 1)
										if ("sh" === t[e].ty)
											if (t[e].ks.k.i)
												r(t[e].ks.k);
											else
												for (a = t[e].ks.k.length, s = 0; s < a; s += 1)
													t[e].ks.k[s].s && r(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && r(t[e].ks.k[s].e[0]);
										else
											"gr" === t[e].ty && i(t[e].it)
								}
								function r(t) {
									var e,
										i = t.i.length;
									for (e = 0; e < i; e += 1)
										t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
								}
								function s(t, e) {
									var i = e ? e.split(".") : [100, 100, 100];
									return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
								}
								var a,
									n = function () {
										var t = [4, 4, 14];
										function e(t) {
											var e,
												i,
												r,
												s = t.length;
											for (e = 0; e < s; e += 1)
												5 === t[e].ty && (r = (i = t[e]).t.d, i.t.d = {
													k: [{
														s: r,
														t: 0
													}
													]
												})
										}
										return function (i) {
											if (s(t, i.v) && (e(i.layers), i.assets)) {
												var r,
													a = i.assets.length;
												for (r = 0; r < a; r += 1)
													i.assets[r].layers && e(i.assets[r].layers)
											}
										}
									}
										(),
									o = (a = [4, 7, 99], function (t) {
										if (t.chars && !s(a, t.v)) {
											var e,
												r = t.chars.length;
											for (e = 0; e < r; e += 1) {
												var n = t.chars[e];
												n.data && n.data.shapes && (i(n.data.shapes), n.data.ip = 0, n.data.op = 99999, n.data.st = 0, n.data.sr = 1, n.data.ks = {
													p: {
														k: [0, 0],
														a: 0
													},
													s: {
														k: [100, 100],
														a: 0
													},
													a: {
														k: [0, 0],
														a: 0
													},
													r: {
														k: 0,
														a: 0
													},
													o: {
														k: 100,
														a: 0
													}
												}, t.chars[e].t || (n.data.shapes.push({
													ty: "no"
												}), n.data.shapes[0].it.push({
													p: {
														k: [0, 0],
														a: 0
													},
													s: {
														k: [100, 100],
														a: 0
													},
													a: {
														k: [0, 0],
														a: 0
													},
													r: {
														k: 0,
														a: 0
													},
													o: {
														k: 100,
														a: 0
													},
													sk: {
														k: 0,
														a: 0
													},
													sa: {
														k: 0,
														a: 0
													},
													ty: "tr"
												})))
											}
										}
									}),
									h = function () {
										var t = [5, 7, 15];
										function e(t) {
											var e,
												i,
												r = t.length;
											for (e = 0; e < r; e += 1)
												5 === t[e].ty && (i = void 0, "number" == typeof (i = t[e].t.p).a && (i.a = {
													a: 0,
													k: i.a
												}), "number" == typeof i.p && (i.p = {
													a: 0,
													k: i.p
												}), "number" == typeof i.r && (i.r = {
													a: 0,
													k: i.r
												}))
										}
										return function (i) {
											if (s(t, i.v) && (e(i.layers), i.assets)) {
												var r,
													a = i.assets.length;
												for (r = 0; r < a; r += 1)
													i.assets[r].layers && e(i.assets[r].layers)
											}
										}
									}
										(),
									l = function () {
										var t = [4, 1, 9];
										function e(t) {
											var i,
												r,
												s,
												a = t.length;
											for (i = 0; i < a; i += 1)
												if ("gr" === t[i].ty)
													e(t[i].it);
												else if ("fl" === t[i].ty || "st" === t[i].ty)
													if (t[i].c.k && t[i].c.k[0].i)
														for (s = t[i].c.k.length, r = 0; r < s; r += 1)
															t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
													else
														t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
										}
										function i(t) {
											var i,
												r = t.length;
											for (i = 0; i < r; i += 1)
												4 === t[i].ty && e(t[i].shapes)
										}
										return function (e) {
											if (s(t, e.v) && (i(e.layers), e.assets)) {
												var r,
													a = e.assets.length;
												for (r = 0; r < a; r += 1)
													e.assets[r].layers && i(e.assets[r].layers)
											}
										}
									}
										(),
									p = function () {
										var t = [4, 4, 18];
										function e(t) {
											var i,
												r,
												s;
											for (i = t.length - 1; i >= 0; i -= 1)
												if ("sh" === t[i].ty)
													if (t[i].ks.k.i)
														t[i].ks.k.c = t[i].closed;
													else
														for (s = t[i].ks.k.length, r = 0; r < s; r += 1)
															t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
												else
													"gr" === t[i].ty && e(t[i].it)
										}
										function i(t) {
											var i,
												r,
												s,
												a,
												n,
												o,
												h = t.length;
											for (r = 0; r < h; r += 1) {
												if ((i = t[r]).hasMask) {
													var l = i.masksProperties;
													for (a = l.length, s = 0; s < a; s += 1)
														if (l[s].pt.k.i)
															l[s].pt.k.c = l[s].cl;
														else
															for (o = l[s].pt.k.length, n = 0; n < o; n += 1)
																l[s].pt.k[n].s && (l[s].pt.k[n].s[0].c = l[s].cl), l[s].pt.k[n].e && (l[s].pt.k[n].e[0].c = l[s].cl)
												}
												4 === i.ty && e(i.shapes)
											}
										}
										return function (e) {
											if (s(t, e.v) && (i(e.layers), e.assets)) {
												var r,
													a = e.assets.length;
												for (r = 0; r < a; r += 1)
													e.assets[r].layers && i(e.assets[r].layers)
											}
										}
									}
										();
								function m(t) {
									0 === t.t.a.length && t.t.p
								}
								var c = {
									completeData: function (i) {
										i.__complete || (l(i), n(i), o(i), h(i), p(i), t(i.layers, i.assets), function (i, r) {
											if (i) {
												var s = 0,
													a = i.length;
												for (s = 0; s < a; s += 1)
													1 === i[s].t && (i[s].data.layers = e(i[s].data.refId, r), t(i[s].data.layers, r))
											}
										}
											(i.chars, i.assets), i.__complete = !0)
									}
								};
								return c.checkColors = l,
									c.checkChars = o,
									c.checkPathProperties = h,
									c.checkShapes = p,
									c.completeLayers = t,
									c
							}
								()), a.assetLoader || (a.assetLoader = function () {
									function t(t) {
										var e = t.getResponseHeader("content-type");
										return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
									}
									return {
										load: function (e, i, r, s) {
											var a,
												n = new XMLHttpRequest;
											try {
												n.responseType = "json"
											} catch (t) { }
											n.onreadystatechange = function () {
												if (4 === n.readyState)
													if (200 === n.status)
														a = t(n), r(a);
													else
														try {
															a = t(n),
																r(a)
														} catch (t) {
															s && s(t)
														}
											};
											try {
												n.open(["G", "E", "T"].join(""), e, !0)
											} catch (t) {
												n.open(["G", "E", "T"].join(""), i + "/" + e, !0)
											}
											n.send()
										}
									}
								}
									()), "loadAnimation" === t.data.type) a.assetLoader.load(t.data.path, t.data.fullPath, (function (e) {
										a.dataManager.completeData(e),
											a.postMessage({
												id: t.data.id,
												payload: e,
												status: "success"
											})
									}), (function () {
										a.postMessage({
											id: t.data.id,
											status: "error"
										})
									}));
							else if ("complete" === t.data.type) {
								var e = t.data.animation;
								a.dataManager.completeData(e),
									a.postMessage({
										id: t.data.id,
										payload: e,
										status: "success"
									})
							} else
								"loadData" === t.data.type && a.assetLoader.load(t.data.path, t.data.fullPath, (function (e) {
									a.postMessage({
										id: t.data.id,
										payload: e,
										status: "success"
									})
								}), (function () {
									a.postMessage({
										id: t.data.id,
										status: "error"
									})
								}))
						})), e.onmessage = function (t) {
							var e = t.data,
								i = e.id,
								s = r[i];
							r[i] = null,
								"success" === e.status ? s.onComplete(e.payload) : s.onError && s.onError()
						})
				}
				function o(t, e) {
					var s = "processId_" + (i += 1);
					return r[s] = {
						onComplete: t,
						onError: e
					},
						s
				}
				return {
					loadAnimation: function (t, i, r) {
						n();
						var s = o(i, r);
						e.postMessage({
							type: "loadAnimation",
							path: t,
							fullPath: window.location.origin + window.location.pathname,
							id: s
						})
					},
					loadData: function (t, i, r) {
						n();
						var s = o(i, r);
						e.postMessage({
							type: "loadData",
							path: t,
							fullPath: window.location.origin + window.location.pathname,
							id: s
						})
					},
					completeAnimation: function (t, i, r) {
						n();
						var s = o(i, r);
						e.postMessage({
							type: "complete",
							animation: t,
							id: s
						})
					}
				}
			}
				(),
				ImagePreloader = function () {
					var t = function () {
						var t = createTag("canvas");
						t.width = 1,
							t.height = 1;
						var e = t.getContext("2d");
						return e.fillStyle = "rgba(0,0,0,0)",
							e.fillRect(0, 0, 1, 1),
							t
					}
						();
					function e() {
						this.loadedAssets += 1,
							this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
					}
					function i() {
						this.loadedFootagesCount += 1,
							this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
					}
					function r(t, e, i) {
						var r = "";
						if (t.e)
							r = t.p;
						else if (e) {
							var s = t.p;
							-1 !== s.indexOf("images/") && (s = s.split("/")[1]),
								r = e + s
						} else
							r = i, r += t.u ? t.u : "", r += t.p;
						return r
					}
					function s(t) {
						var e = 0,
							i = setInterval(function () {
								(t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)),
									e += 1
							}
								.bind(this), 50)
					}
					function a(t) {
						var e = {
							assetData: t
						},
							i = r(t, this.assetsPath, this.path);
						return dataManager.loadData(i, function (t) {
							e.img = t,
								this._footageLoaded()
						}
							.bind(this), function () {
								e.img = {},
									this._footageLoaded()
							}
								.bind(this)),
							e
					}
					function n() {
						this._imageLoaded = e.bind(this),
							this._footageLoaded = i.bind(this),
							this.testImageLoaded = s.bind(this),
							this.createFootageData = a.bind(this),
							this.assetsPath = "",
							this.path = "",
							this.totalImages = 0,
							this.totalFootages = 0,
							this.loadedAssets = 0,
							this.loadedFootagesCount = 0,
							this.imagesLoadedCb = null,
							this.images = []
					}
					return n.prototype = {
						loadAssets: function (t, e) {
							var i;
							this.imagesLoadedCb = e;
							var r = t.length;
							for (i = 0; i < r; i += 1)
								t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
						},
						setAssetsPath: function (t) {
							this.assetsPath = t || ""
						},
						setPath: function (t) {
							this.path = t || ""
						},
						loadedImages: function () {
							return this.totalImages === this.loadedAssets
						},
						loadedFootages: function () {
							return this.totalFootages === this.loadedFootagesCount
						},
						destroy: function () {
							this.imagesLoadedCb = null,
								this.images.length = 0
						},
						getAsset: function (t) {
							for (var e = 0, i = this.images.length; e < i;) {
								if (this.images[e].assetData === t)
									return this.images[e].img;
								e += 1
							}
							return null
						},
						createImgData: function (e) {
							var i = r(e, this.assetsPath, this.path),
								s = createTag("img");
							s.crossOrigin = "anonymous",
								s.addEventListener("load", this._imageLoaded, !1),
								s.addEventListener("error", function () {
									a.img = t,
										this._imageLoaded()
								}
									.bind(this), !1),
								s.src = i;
							var a = {
								img: s,
								assetData: e
							};
							return a
						},
						createImageData: function (e) {
							var i = r(e, this.assetsPath, this.path),
								s = createNS("image");
							isSafari ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1),
								s.addEventListener("error", function () {
									a.img = t,
										this._imageLoaded()
								}
									.bind(this), !1),
								s.setAttributeNS("http://www.w3.org/1999/xlink", "href", i),
								this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
							var a = {
								img: s,
								assetData: e
							};
							return a
						},
						imageLoaded: e,
						footageLoaded: i,
						setCacheType: function (t, e) {
							"svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
						}
					},
						n
				}
					();
			function BaseEvent() { }
			BaseEvent.prototype = {
				triggerEvent: function (t, e) {
					if (this._cbs[t])
						for (var i = this._cbs[t], r = 0; r < i.length; r += 1)
							i[r](e)
				},
				addEventListener: function (t, e) {
					return this._cbs[t] || (this._cbs[t] = []),
						this._cbs[t].push(e),
						function () {
							this.removeEventListener(t, e)
						}
							.bind(this)
				},
				removeEventListener: function (t, e) {
					if (e) {
						if (this._cbs[t]) {
							for (var i = 0, r = this._cbs[t].length; i < r;)
								this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
							this._cbs[t].length || (this._cbs[t] = null)
						}
					} else
						this._cbs[t] = null
				}
			};
			var markerParser = function () {
				function t(t) {
					for (var e, i = t.split("\r\n"), r = {}, s = 0, a = 0; a < i.length; a += 1)
						2 === (e = i[a].split(":")).length && (r[e[0]] = e[1].trim(), s += 1);
					if (0 === s)
						throw new Error;
					return r
				}
				return function (e) {
					for (var i = [], r = 0; r < e.length; r += 1) {
						var s = e[r],
							a = {
								time: s.tm,
								duration: s.dr
							};
						try {
							a.payload = JSON.parse(e[r].cm)
						} catch (i) {
							try {
								a.payload = t(e[r].cm)
							} catch (t) {
								a.payload = {
									name: e[r].cm
								}
							}
						}
						i.push(a)
					}
					return i
				}
			}
				(),
				ProjectInterface = function () {
					function t(t) {
						this.compositions.push(t)
					}
					return function () {
						function e(t) {
							for (var e = 0, i = this.compositions.length; e < i;) {
								if (this.compositions[e].data && this.compositions[e].data.nm === t)
									return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
								e += 1
							}
							return null
						}
						return e.compositions = [],
							e.currentFrame = 0,
							e.registerComposition = t,
							e
					}
				}
					(),
				renderers = {},
				registerRenderer = function (t, e) {
					renderers[t] = e
				};
			function getRenderer(t) {
				return renderers[t]
			}
			function getRegisteredRenderer() {
				if (renderers.canvas)
					return "canvas";
				for (var t in renderers)
					if (renderers[t])
						return t;
				return ""
			}
			function _typeof$4(t) {
				return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
					return typeof t
				}
					: function (t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					},
					_typeof$4(t)
			}
			var AnimationItem = function () {
				this._cbs = [],
					this.name = "",
					this.path = "",
					this.isLoaded = !1,
					this.currentFrame = 0,
					this.currentRawFrame = 0,
					this.firstFrame = 0,
					this.totalFrames = 0,
					this.frameRate = 0,
					this.frameMult = 0,
					this.playSpeed = 1,
					this.playDirection = 1,
					this.playCount = 0,
					this.animationData = {},
					this.assets = [],
					this.isPaused = !0,
					this.autoplay = !1,
					this.loop = !0,
					this.renderer = null,
					this.animationID = createElementID(),
					this.assetsPath = "",
					this.timeCompleted = 0,
					this.segmentPos = 0,
					this.isSubframeEnabled = getSubframeEnabled(),
					this.segments = [],
					this._idle = !0,
					this._completedLoop = !1,
					this.projectInterface = ProjectInterface(),
					this.imagePreloader = new ImagePreloader,
					this.audioController = audioControllerFactory(),
					this.markers = [],
					this.configAnimation = this.configAnimation.bind(this),
					this.onSetupError = this.onSetupError.bind(this),
					this.onSegmentComplete = this.onSegmentComplete.bind(this),
					this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0),
					this.expressionsPlugin = getExpressionsPlugin()
			};
			extendPrototype([BaseEvent], AnimationItem),
				AnimationItem.prototype.setParams = function (t) {
					(t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
					var e = "svg";
					t.animType ? e = t.animType : t.renderer && (e = t.renderer);
					var i = getRenderer(e);
					this.renderer = new i(this, t.rendererSettings),
						this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
						this.renderer.setProjectInterface(this.projectInterface),
						this.animType = e,
						"" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10),
						this.autoplay = !("autoplay" in t) || t.autoplay,
						this.name = t.name ? t.name : "",
						this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments,
						this.assetsPath = t.assetsPath,
						this.initialSegment = t.initialSegment,
						t.audioFactory && this.audioController.setAudioFactory(t.audioFactory),
						t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
				},
				AnimationItem.prototype.onSetupError = function () {
					this.trigger("data_failed")
				},
				AnimationItem.prototype.setupAnimation = function (t) {
					dataManager.completeAnimation(t, this.configAnimation)
				},
				AnimationItem.prototype.setData = function (t, e) {
					e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
					var i = {
						wrapper: t,
						animationData: e
					},
						r = t.attributes;
					i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "",
						i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
					var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
					"false" === s ? i.loop = !1 : "true" === s ? i.loop = !0 : "" !== s && (i.loop = parseInt(s, 10));
					var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
					i.autoplay = "false" !== a,
						i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "",
						"false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1),
						i.path ? this.setParams(i) : this.trigger("destroy")
				},
				AnimationItem.prototype.includeLayers = function (t) {
					t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
					var e,
						i,
						r = this.animationData.layers,
						s = r.length,
						a = t.layers,
						n = a.length;
					for (i = 0; i < n; i += 1)
						for (e = 0; e < s;) {
							if (r[e].id === a[i].id) {
								r[e] = a[i];
								break
							}
							e += 1
						}
					if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
						for (s = t.assets.length, e = 0; e < s; e += 1)
							this.animationData.assets.push(t.assets[e]);
					this.animationData.__complete = !1,
						dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
				},
				AnimationItem.prototype.onSegmentComplete = function (t) {
					this.animationData = t;
					var e = getExpressionsPlugin();
					e && e.initExpressions(this),
						this.loadNextSegment()
				},
				AnimationItem.prototype.loadNextSegment = function () {
					var t = this.animationData.segments;
					if (!t || 0 === t.length || !this.autoloadSegments)
						return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
					var e = t.shift();
					this.timeCompleted = e.time * this.frameRate;
					var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
					this.segmentPos += 1,
						dataManager.loadData(i, this.includeLayers.bind(this), function () {
							this.trigger("data_failed")
						}
							.bind(this))
				},
				AnimationItem.prototype.loadSegments = function () {
					this.animationData.segments || (this.timeCompleted = this.totalFrames),
						this.loadNextSegment()
				},
				AnimationItem.prototype.imagesLoaded = function () {
					this.trigger("loaded_images"),
						this.checkLoaded()
				},
				AnimationItem.prototype.preloadImages = function () {
					this.imagePreloader.setAssetsPath(this.assetsPath),
						this.imagePreloader.setPath(this.path),
						this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
				},
				AnimationItem.prototype.configAnimation = function (t) {
					if (this.renderer)
						try {
							this.animationData = t,
								this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)),
								this.renderer.configAnimation(t),
								t.assets || (t.assets = []),
								this.assets = this.animationData.assets,
								this.frameRate = this.animationData.fr,
								this.frameMult = this.animationData.fr / 1e3,
								this.renderer.searchExtraCompositions(t.assets),
								this.markers = markerParser(t.markers || []),
								this.trigger("config_ready"),
								this.preloadImages(),
								this.loadSegments(),
								this.updaFrameModifier(),
								this.waitForFontsLoaded(),
								this.isPaused && this.audioController.pause()
						} catch (t) {
							this.triggerConfigError(t)
						}
				},
				AnimationItem.prototype.waitForFontsLoaded = function () {
					this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
				},
				AnimationItem.prototype.checkLoaded = function () {
					if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
						this.isLoaded = !0;
						var t = getExpressionsPlugin();
						t && t.initExpressions(this),
							this.renderer.initItems(),
							setTimeout(function () {
								this.trigger("DOMLoaded")
							}
								.bind(this), 0),
							this.gotoFrame(),
							this.autoplay && this.play()
					}
				},
				AnimationItem.prototype.resize = function (t, e) {
					var i = "number" == typeof t ? t : void 0,
						r = "number" == typeof e ? e : void 0;
					this.renderer.updateContainerSize(i, r)
				},
				AnimationItem.prototype.setSubframe = function (t) {
					this.isSubframeEnabled = !!t
				},
				AnimationItem.prototype.gotoFrame = function () {
					this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
						this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
						this.trigger("enterFrame"),
						this.renderFrame(),
						this.trigger("drawnFrame")
				},
				AnimationItem.prototype.renderFrame = function () {
					if (!1 !== this.isLoaded && this.renderer)
						try {
							this.expressionsPlugin && this.expressionsPlugin.resetFrame(),
								this.renderer.renderFrame(this.currentFrame + this.firstFrame)
						} catch (t) {
							this.triggerRenderFrameError(t)
						}
				},
				AnimationItem.prototype.play = function (t) {
					t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
				},
				AnimationItem.prototype.pause = function (t) {
					t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
				},
				AnimationItem.prototype.togglePause = function (t) {
					t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
				},
				AnimationItem.prototype.stop = function (t) {
					t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
				},
				AnimationItem.prototype.getMarkerData = function (t) {
					for (var e, i = 0; i < this.markers.length; i += 1)
						if ((e = this.markers[i]).payload && e.payload.name === t)
							return e;
					return null
				},
				AnimationItem.prototype.goToAndStop = function (t, e, i) {
					if (!i || this.name === i) {
						var r = Number(t);
						if (isNaN(r)) {
							var s = this.getMarkerData(t);
							s && this.goToAndStop(s.time, !0)
						} else
							e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
						this.pause()
					}
				},
				AnimationItem.prototype.goToAndPlay = function (t, e, i) {
					if (!i || this.name === i) {
						var r = Number(t);
						if (isNaN(r)) {
							var s = this.getMarkerData(t);
							s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
						} else
							this.goToAndStop(r, e, i);
						this.play()
					}
				},
				AnimationItem.prototype.advanceTime = function (t) {
					if (!0 !== this.isPaused && !1 !== this.isLoaded) {
						var e = this.currentRawFrame + t * this.frameModifier,
							i = !1;
						e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e),
							i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
					}
				},
				AnimationItem.prototype.adjustSegment = function (t, e) {
					this.playCount = 0,
						t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)),
						this.trigger("segmentStart")
				},
				AnimationItem.prototype.setSegment = function (t, e) {
					var i = -1;
					this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
						this.firstFrame = t,
						this.totalFrames = e - t,
						this.timeCompleted = this.totalFrames,
						-1 !== i && this.goToAndStop(i, !0)
				},
				AnimationItem.prototype.playSegments = function (t, e) {
					if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
						var i,
							r = t.length;
						for (i = 0; i < r; i += 1)
							this.segments.push(t[i])
					} else
						this.segments.push(t);
					this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
						this.isPaused && this.play()
				},
				AnimationItem.prototype.resetSegments = function (t) {
					this.segments.length = 0,
						this.segments.push([this.animationData.ip, this.animationData.op]),
						t && this.checkSegments(0)
				},
				AnimationItem.prototype.checkSegments = function (t) {
					return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
				},
				AnimationItem.prototype.destroy = function (t) {
					t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
				},
				AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
					this.currentRawFrame = t,
						this.gotoFrame()
				},
				AnimationItem.prototype.setSpeed = function (t) {
					this.playSpeed = t,
						this.updaFrameModifier()
				},
				AnimationItem.prototype.setDirection = function (t) {
					this.playDirection = t < 0 ? -1 : 1,
						this.updaFrameModifier()
				},
				AnimationItem.prototype.setLoop = function (t) {
					this.loop = t
				},
				AnimationItem.prototype.setVolume = function (t, e) {
					e && this.name !== e || this.audioController.setVolume(t)
				},
				AnimationItem.prototype.getVolume = function () {
					return this.audioController.getVolume()
				},
				AnimationItem.prototype.mute = function (t) {
					t && this.name !== t || this.audioController.mute()
				},
				AnimationItem.prototype.unmute = function (t) {
					t && this.name !== t || this.audioController.unmute()
				},
				AnimationItem.prototype.updaFrameModifier = function () {
					this.frameModifier = this.frameMult * this.playSpeed * this.playDirection,
						this.audioController.setRate(this.playSpeed * this.playDirection)
				},
				AnimationItem.prototype.getPath = function () {
					return this.path
				},
				AnimationItem.prototype.getAssetsPath = function (t) {
					var e = "";
					if (t.e)
						e = t.p;
					else if (this.assetsPath) {
						var i = t.p;
						-1 !== i.indexOf("images/") && (i = i.split("/")[1]),
							e = this.assetsPath + i
					} else
						e = this.path, e += t.u ? t.u : "", e += t.p;
					return e
				},
				AnimationItem.prototype.getAssetData = function (t) {
					for (var e = 0, i = this.assets.length; e < i;) {
						if (t === this.assets[e].id)
							return this.assets[e];
						e += 1
					}
					return null
				},
				AnimationItem.prototype.hide = function () {
					this.renderer.hide()
				},
				AnimationItem.prototype.show = function () {
					this.renderer.show()
				},
				AnimationItem.prototype.getDuration = function (t) {
					return t ? this.totalFrames : this.totalFrames / this.frameRate
				},
				AnimationItem.prototype.updateDocumentData = function (t, e, i) {
					try {
						this.renderer.getElementByPath(t).updateDocumentData(e, i)
					} catch (t) { }
				},
				AnimationItem.prototype.trigger = function (t) {
					if (this._cbs && this._cbs[t])
						switch (t) {
							case "enterFrame":
								this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
								break;
							case "drawnFrame":
								this.drawnFrameEvent.currentTime = this.currentFrame,
									this.drawnFrameEvent.totalTime = this.totalFrames,
									this.drawnFrameEvent.direction = this.frameModifier,
									this.triggerEvent(t, this.drawnFrameEvent);
								break;
							case "loopComplete":
								this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
								break;
							case "complete":
								this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
								break;
							case "segmentStart":
								this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
								break;
							case "destroy":
								this.triggerEvent(t, new BMDestroyEvent(t, this));
								break;
							default:
								this.triggerEvent(t)
						}
					"enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)),
						"loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)),
						"complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)),
						"segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)),
						"destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
				},
				AnimationItem.prototype.triggerRenderFrameError = function (t) {
					var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
					this.triggerEvent("error", e),
						this.onError && this.onError.call(this, e)
				},
				AnimationItem.prototype.triggerConfigError = function (t) {
					var e = new BMConfigErrorEvent(t, this.currentFrame);
					this.triggerEvent("error", e),
						this.onError && this.onError.call(this, e)
				};
			var animationManager = function () {
				var t = {},
					e = [],
					i = 0,
					r = 0,
					s = 0,
					a = !0,
					n = !1;
				function o(t) {
					for (var i = 0, s = t.target; i < r;)
						e[i].animation === s && (e.splice(i, 1), i -= 1, r -= 1, s.isPaused || p()), i += 1
				}
				function h(t, i) {
					if (!t)
						return null;
					for (var s = 0; s < r;) {
						if (e[s].elem === t && null !== e[s].elem)
							return e[s].animation;
						s += 1
					}
					var a = new AnimationItem;
					return m(a, t),
						a.setData(t, i),
						a
				}
				function l() {
					s += 1,
						d()
				}
				function p() {
					s -= 1
				}
				function m(t, i) {
					t.addEventListener("destroy", o),
						t.addEventListener("_active", l),
						t.addEventListener("_idle", p),
						e.push({
							elem: i,
							animation: t
						}),
						r += 1
				}
				function c(t) {
					var o,
						h = t - i;
					for (o = 0; o < r; o += 1)
						e[o].animation.advanceTime(h);
					i = t,
						s && !n ? window.requestAnimationFrame(c) : a = !0
				}
				function f(t) {
					i = t,
						window.requestAnimationFrame(c)
				}
				function d() {
					!n && s && a && (window.requestAnimationFrame(f), a = !1)
				}
				return t.registerAnimation = h,
					t.loadAnimation = function (t) {
						var e = new AnimationItem;
						return m(e, null),
							e.setParams(t),
							e
					},
					t.setSpeed = function (t, i) {
						var s;
						for (s = 0; s < r; s += 1)
							e[s].animation.setSpeed(t, i)
					},
					t.setDirection = function (t, i) {
						var s;
						for (s = 0; s < r; s += 1)
							e[s].animation.setDirection(t, i)
					},
					t.play = function (t) {
						var i;
						for (i = 0; i < r; i += 1)
							e[i].animation.play(t)
					},
					t.pause = function (t) {
						var i;
						for (i = 0; i < r; i += 1)
							e[i].animation.pause(t)
					},
					t.stop = function (t) {
						var i;
						for (i = 0; i < r; i += 1)
							e[i].animation.stop(t)
					},
					t.togglePause = function (t) {
						var i;
						for (i = 0; i < r; i += 1)
							e[i].animation.togglePause(t)
					},
					t.searchAnimations = function (t, e, i) {
						var r,
							s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
							a = s.length;
						for (r = 0; r < a; r += 1)
							i && s[r].setAttribute("data-bm-type", i), h(s[r], t);
						if (e && 0 === a) {
							i || (i = "svg");
							var n = document.getElementsByTagName("body")[0];
							n.innerText = "";
							var o = createTag("div");
							o.style.width = "100%",
								o.style.height = "100%",
								o.setAttribute("data-bm-type", i),
								n.appendChild(o),
								h(o, t)
						}
					},
					t.resize = function () {
						var t;
						for (t = 0; t < r; t += 1)
							e[t].animation.resize()
					},
					t.goToAndStop = function (t, i, s) {
						var a;
						for (a = 0; a < r; a += 1)
							e[a].animation.goToAndStop(t, i, s)
					},
					t.destroy = function (t) {
						var i;
						for (i = r - 1; i >= 0; i -= 1)
							e[i].animation.destroy(t)
					},
					t.freeze = function () {
						n = !0
					},
					t.unfreeze = function () {
						n = !1,
							d()
					},
					t.setVolume = function (t, i) {
						var s;
						for (s = 0; s < r; s += 1)
							e[s].animation.setVolume(t, i)
					},
					t.mute = function (t) {
						var i;
						for (i = 0; i < r; i += 1)
							e[i].animation.mute(t)
					},
					t.unmute = function (t) {
						var i;
						for (i = 0; i < r; i += 1)
							e[i].animation.unmute(t)
					},
					t.getRegisteredAnimations = function () {
						var t,
							i = e.length,
							r = [];
						for (t = 0; t < i; t += 1)
							r.push(e[t].animation);
						return r
					},
					t
			}
				(),
				BezierFactory = function () {
					var t = {
						getBezierEasing: function (t, i, r, s, a) {
							var n = a || ("bez_" + t + "_" + i + "_" + r + "_" + s).replace(/\./g, "p");
							if (e[n])
								return e[n];
							var o = new p([t, i, r, s]);
							return e[n] = o,
								o
						}
					},
						e = {},
						i = 11,
						r = 1 / (i - 1),
						s = "function" == typeof Float32Array;
					function a(t, e) {
						return 1 - 3 * e + 3 * t
					}
					function n(t, e) {
						return 3 * e - 6 * t
					}
					function o(t) {
						return 3 * t
					}
					function h(t, e, i) {
						return ((a(e, i) * t + n(e, i)) * t + o(e)) * t
					}
					function l(t, e, i) {
						return 3 * a(e, i) * t * t + 2 * n(e, i) * t + o(e)
					}
					function p(t) {
						this._p = t,
							this._mSampleValues = s ? new Float32Array(i) : new Array(i),
							this._precomputed = !1,
							this.get = this.get.bind(this)
					}
					return p.prototype = {
						get: function (t) {
							var e = this._p[0],
								i = this._p[1],
								r = this._p[2],
								s = this._p[3];
							return this._precomputed || this._precompute(),
								e === i && r === s ? t : 0 === t ? 0 : 1 === t ? 1 : h(this._getTForX(t), i, s)
						},
						_precompute: function () {
							var t = this._p[0],
								e = this._p[1],
								i = this._p[2],
								r = this._p[3];
							this._precomputed = !0,
								t === e && i === r || this._calcSampleValues()
						},
						_calcSampleValues: function () {
							for (var t = this._p[0], e = this._p[2], s = 0; s < i; ++s)
								this._mSampleValues[s] = h(s * r, t, e)
						},
						_getTForX: function (t) {
							for (var e = this._p[0], s = this._p[2], a = this._mSampleValues, n = 0, o = 1, p = i - 1; o !== p && a[o] <= t; ++o)
								n += r;
							var m = n + (t - a[--o]) / (a[o + 1] - a[o]) * r,
								c = l(m, e, s);
							return c >= .001 ? function (t, e, i, r) {
								for (var s = 0; s < 4; ++s) {
									var a = l(e, i, r);
									if (0 === a)
										return e;
									e -= (h(e, i, r) - t) / a
								}
								return e
							}
								(t, m, e, s) : 0 === c ? m : function (t, e, i, r, s) {
									var a,
										n,
										o = 0;
									do {
										(a = h(n = e + (i - e) / 2, r, s) - t) > 0 ? i = n : e = n
									} while (Math.abs(a) > 1e-7 && ++o < 10);
									return n
								}
									(t, n, n + r, e, s)
						}
					},
						t
				}
					(),
				pooling = {
					double: function (t) {
						return t.concat(createSizedArray(t.length))
					}
				},
				poolFactory = function (t, e, i) {
					var r = 0,
						s = t,
						a = createSizedArray(s);
					return {
						newElement: function () {
							return r ? a[r -= 1] : e()
						},
						release: function (t) {
							r === s && (a = pooling.double(a), s *= 2),
								i && i(t),
								a[r] = t,
								r += 1
						}
					}
				},
				bezierLengthPool = poolFactory(8, (function () {
					return {
						addedLength: 0,
						percents: createTypedArray("float32", getDefaultCurveSegments()),
						lengths: createTypedArray("float32", getDefaultCurveSegments())
					}
				})),
				segmentsLengthPool = poolFactory(8, (function () {
					return {
						lengths: [],
						totalLength: 0
					}
				}), (function (t) {
					var e,
						i = t.lengths.length;
					for (e = 0; e < i; e += 1)
						bezierLengthPool.release(t.lengths[e]);
					t.lengths.length = 0
				}));
			function bezFunction() {
				var t = Math;
				function e(t, e, i, r, s, a) {
					var n = t * r + e * s + i * a - s * r - a * t - i * e;
					return n > - .001 && n < .001
				}
				var i = function (t, e, i, r) {
					var s,
						a,
						n,
						o,
						h,
						l,
						p = getDefaultCurveSegments(),
						m = 0,
						c = [],
						f = [],
						d = bezierLengthPool.newElement();
					for (n = i.length, s = 0; s < p; s += 1) {
						for (h = s / (p - 1), l = 0, a = 0; a < n; a += 1)
							o = bmPow(1 - h, 3) * t[a] + 3 * bmPow(1 - h, 2) * h * i[a] + 3 * (1 - h) * bmPow(h, 2) * r[a] + bmPow(h, 3) * e[a], c[a] = o, null !== f[a] && (l += bmPow(c[a] - f[a], 2)), f[a] = c[a];
						l && (m += l = bmSqrt(l)),
							d.percents[s] = h,
							d.lengths[s] = m
					}
					return d.addedLength = m,
						d
				};
				function r(t) {
					this.segmentLength = 0,
						this.points = new Array(t)
				}
				function s(t, e) {
					this.partialLength = t,
						this.point = e
				}
				var a,
					n = (a = {}, function (t, i, n, o) {
						var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
						if (!a[h]) {
							var l,
								p,
								m,
								c,
								f,
								d,
								u,
								y = getDefaultCurveSegments(),
								g = 0,
								v = null;
							2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (y = 2);
							var b = new r(y);
							for (m = n.length, l = 0; l < y; l += 1) {
								for (u = createSizedArray(m), f = l / (y - 1), d = 0, p = 0; p < m; p += 1)
									c = bmPow(1 - f, 3) * t[p] + 3 * bmPow(1 - f, 2) * f * (t[p] + n[p]) + 3 * (1 - f) * bmPow(f, 2) * (i[p] + o[p]) + bmPow(f, 3) * i[p], u[p] = c, null !== v && (d += bmPow(u[p] - v[p], 2));
								g += d = bmSqrt(d),
									b.points[l] = new s(d, u),
									v = u
							}
							b.segmentLength = g,
								a[h] = b
						}
						return a[h]
					});
				function o(t, e) {
					var i = e.percents,
						r = e.lengths,
						s = i.length,
						a = bmFloor((s - 1) * t),
						n = t * e.addedLength,
						o = 0;
					if (a === s - 1 || 0 === a || n === r[a])
						return i[a];
					for (var h = r[a] > n ? -1 : 1, l = !0; l;)
						if (r[a] <= n && r[a + 1] > n ? (o = (n - r[a]) / (r[a + 1] - r[a]), l = !1) : a += h, a < 0 || a >= s - 1) {
							if (a === s - 1)
								return i[a];
							l = !1
						}
					return i[a] + (i[a + 1] - i[a]) * o
				}
				var h = createTypedArray("float32", 8);
				return {
					getSegmentsLength: function (t) {
						var e,
							r = segmentsLengthPool.newElement(),
							s = t.c,
							a = t.v,
							n = t.o,
							o = t.i,
							h = t._length,
							l = r.lengths,
							p = 0;
						for (e = 0; e < h - 1; e += 1)
							l[e] = i(a[e], a[e + 1], n[e], o[e + 1]), p += l[e].addedLength;
						return s && h && (l[e] = i(a[e], a[0], n[e], o[0]), p += l[e].addedLength),
							r.totalLength = p,
							r
					},
					getNewSegment: function (e, i, r, s, a, n, l) {
						a < 0 ? a = 0 : a > 1 && (a = 1);
						var p,
							m = o(a, l),
							c = o(n = n > 1 ? 1 : n, l),
							f = e.length,
							d = 1 - m,
							u = 1 - c,
							y = d * d * d,
							g = m * d * d * 3,
							v = m * m * d * 3,
							b = m * m * m,
							E = d * d * u,
							P = m * d * u + d * m * u + d * d * c,
							x = m * m * u + d * m * c + m * d * c,
							C = m * m * c,
							S = d * u * u,
							_ = m * u * u + d * c * u + d * u * c,
							T = m * c * u + d * c * c + m * u * c,
							k = m * c * c,
							A = u * u * u,
							M = c * u * u + u * c * u + u * u * c,
							D = c * c * u + u * c * c + c * u * c,
							I = c * c * c;
						for (p = 0; p < f; p += 1)
							h[4 * p] = t.round(1e3 * (y * e[p] + g * r[p] + v * s[p] + b * i[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (E * e[p] + P * r[p] + x * s[p] + C * i[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (S * e[p] + _ * r[p] + T * s[p] + k * i[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (A * e[p] + M * r[p] + D * s[p] + I * i[p])) / 1e3;
						return h
					},
					getPointInSegment: function (e, i, r, s, a, n) {
						var h = o(a, n),
							l = 1 - h;
						return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * r[0] + (h * h * l + l * h * h + h * l * h) * s[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * r[1] + (h * h * l + l * h * h + h * l * h) * s[1] + h * h * h * i[1])) / 1e3]
					},
					buildBezierData: n,
					pointOnLine2D: e,
					pointOnLine3D: function (i, r, s, a, n, o, h, l, p) {
						if (0 === s && 0 === o && 0 === p)
							return e(i, r, a, n, h, l);
						var m,
							c = t.sqrt(t.pow(a - i, 2) + t.pow(n - r, 2) + t.pow(o - s, 2)),
							f = t.sqrt(t.pow(h - i, 2) + t.pow(l - r, 2) + t.pow(p - s, 2)),
							d = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
						return (m = c > f ? c > d ? c - f - d : d - f - c : d > f ? d - f - c : f - c - d) > -1e-4 && m < 1e-4
					}
				}
			}
			var bez = bezFunction(),
				initFrame = initialDefaultFrame,
				mathAbs = Math.abs;
			function interpolateValue(t, e) {
				var i,
					r = this.offsetTime;
				"multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
				for (var s, a, n, o, h, l, p, m, c, f = e.lastIndex, d = f, u = this.keyframes.length - 1, y = !0; y;) {
					if (s = this.keyframes[d], a = this.keyframes[d + 1], d === u - 1 && t >= a.t - r) {
						s.h && (s = a),
							f = 0;
						break
					}
					if (a.t - r > t) {
						f = d;
						break
					}
					d < u - 1 ? d += 1 : (f = 0, y = !1)
				}
				n = this.keyframesMetadata[d] || {};
				var g,
					v = a.t - r,
					b = s.t - r;
				if (s.to) {
					n.bezierData || (n.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
					var E = n.bezierData;
					if (t >= v || t < b) {
						var P = t >= v ? E.points.length - 1 : 0;
						for (h = E.points[P].point.length, o = 0; o < h; o += 1)
							i[o] = E.points[P].point[o]
					} else {
						n.__fnct ? c = n.__fnct : (c = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, n.__fnct = c),
							l = c((t - b) / (v - b));
						var x,
							C = E.segmentLength * l,
							S = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
						for (m = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, y = !0, p = E.points.length; y;) {
							if (S += E.points[m].partialLength, 0 === C || 0 === l || m === E.points.length - 1) {
								for (h = E.points[m].point.length, o = 0; o < h; o += 1)
									i[o] = E.points[m].point[o];
								break
							}
							if (C >= S && C < S + E.points[m + 1].partialLength) {
								for (x = (C - S) / E.points[m + 1].partialLength, h = E.points[m].point.length, o = 0; o < h; o += 1)
									i[o] = E.points[m].point[o] + (E.points[m + 1].point[o] - E.points[m].point[o]) * x;
								break
							}
							m < p - 1 ? m += 1 : y = !1
						}
						e._lastPoint = m,
							e._lastAddedLength = S - E.points[m].partialLength,
							e._lastKeyframeIndex = d
					}
				} else {
					var _,
						T,
						k,
						A,
						M;
					if (u = s.s.length, g = a.s || s.e, this.sh && 1 !== s.h)
						t >= v ? (i[0] = g[0], i[1] = g[1], i[2] = g[2]) : t <= b ? (i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2]) : quaternionToEuler(i, slerp(createQuaternion(s.s), createQuaternion(g), (t - b) / (v - b)));
					else
						for (d = 0; d < u; d += 1)
							1 !== s.h && (t >= v ? l = 1 : t < b ? l = 0 : (s.o.x.constructor === Array ? (n.__fnct || (n.__fnct = []), n.__fnct[d] ? c = n.__fnct[d] : (_ = void 0 === s.o.x[d] ? s.o.x[0] : s.o.x[d], T = void 0 === s.o.y[d] ? s.o.y[0] : s.o.y[d], k = void 0 === s.i.x[d] ? s.i.x[0] : s.i.x[d], A = void 0 === s.i.y[d] ? s.i.y[0] : s.i.y[d], c = BezierFactory.getBezierEasing(_, T, k, A).get, n.__fnct[d] = c)) : n.__fnct ? c = n.__fnct : (_ = s.o.x, T = s.o.y, k = s.i.x, A = s.i.y, c = BezierFactory.getBezierEasing(_, T, k, A).get, s.keyframeMetadata = c), l = c((t - b) / (v - b)))), g = a.s || s.e, M = 1 === s.h ? s.s[d] : s.s[d] + (g[d] - s.s[d]) * l, "multidimensional" === this.propType ? i[d] = M : i = M
				}
				return e.lastIndex = f,
					i
			}
			function slerp(t, e, i) {
				var r,
					s,
					a,
					n,
					o,
					h = [],
					l = t[0],
					p = t[1],
					m = t[2],
					c = t[3],
					f = e[0],
					d = e[1],
					u = e[2],
					y = e[3];
				return (s = l * f + p * d + m * u + c * y) < 0 && (s = -s, f = -f, d = -d, u = -u, y = -y),
					1 - s > 1e-6 ? (r = Math.acos(s), a = Math.sin(r), n = Math.sin((1 - i) * r) / a, o = Math.sin(i * r) / a) : (n = 1 - i, o = i),
					h[0] = n * l + o * f,
					h[1] = n * p + o * d,
					h[2] = n * m + o * u,
					h[3] = n * c + o * y,
					h
			}
			function quaternionToEuler(t, e) {
				var i = e[0],
					r = e[1],
					s = e[2],
					a = e[3],
					n = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s),
					o = Math.asin(2 * i * r + 2 * s * a),
					h = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s);
				t[0] = n / degToRads,
					t[1] = o / degToRads,
					t[2] = h / degToRads
			}
			function createQuaternion(t) {
				var e = t[0] * degToRads,
					i = t[1] * degToRads,
					r = t[2] * degToRads,
					s = Math.cos(e / 2),
					a = Math.cos(i / 2),
					n = Math.cos(r / 2),
					o = Math.sin(e / 2),
					h = Math.sin(i / 2),
					l = Math.sin(r / 2);
				return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l]
			}
			function getValueAtCurrentTime() {
				var t = this.comp.renderedFrame - this.offsetTime,
					e = this.keyframes[0].t - this.offsetTime,
					i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
				if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
					this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
					var r = this.interpolateValue(t, this._caching);
					this.pv = r
				}
				return this._caching.lastFrame = t,
					this.pv
			}
			function setVValue(t) {
				var e;
				if ("unidimensional" === this.propType)
					e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
				else
					for (var i = 0, r = this.v.length; i < r;)
						e = t[i] * this.mult, mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
			}
			function processEffectsSequence() {
				if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
					if (this.lock)
						this.setVValue(this.pv);
					else {
						var t;
						this.lock = !0,
							this._mdf = this._isFirstFrame;
						var e = this.effectsSequence.length,
							i = this.kf ? this.pv : this.data.k;
						for (t = 0; t < e; t += 1)
							i = this.effectsSequence[t](i);
						this.setVValue(i),
							this._isFirstFrame = !1,
							this.lock = !1,
							this.frameId = this.elem.globalData.frameId
					}
			}
			function addEffect(t) {
				this.effectsSequence.push(t),
					this.container.addDynamicProperty(this)
			}
			function ValueProperty(t, e, i, r) {
				this.propType = "unidimensional",
					this.mult = i || 1,
					this.data = e,
					this.v = i ? e.k * i : e.k,
					this.pv = e.k,
					this._mdf = !1,
					this.elem = t,
					this.container = r,
					this.comp = t.comp,
					this.k = !1,
					this.kf = !1,
					this.vel = 0,
					this.effectsSequence = [],
					this._isFirstFrame = !0,
					this.getValue = processEffectsSequence,
					this.setVValue = setVValue,
					this.addEffect = addEffect
			}
			function MultiDimensionalProperty(t, e, i, r) {
				var s;
				this.propType = "multidimensional",
					this.mult = i || 1,
					this.data = e,
					this._mdf = !1,
					this.elem = t,
					this.container = r,
					this.comp = t.comp,
					this.k = !1,
					this.kf = !1,
					this.frameId = -1;
				var a = e.k.length;
				for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1)
					this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
				this._isFirstFrame = !0,
					this.effectsSequence = [],
					this.getValue = processEffectsSequence,
					this.setVValue = setVValue,
					this.addEffect = addEffect
			}
			function KeyframedValueProperty(t, e, i, r) {
				this.propType = "unidimensional",
					this.keyframes = e.k,
					this.keyframesMetadata = [],
					this.offsetTime = t.data.st,
					this.frameId = -1,
					this._caching = {
						lastFrame: initFrame,
						lastIndex: 0,
						value: 0,
						_lastKeyframeIndex: -1
					},
					this.k = !0,
					this.kf = !0,
					this.data = e,
					this.mult = i || 1,
					this.elem = t,
					this.container = r,
					this.comp = t.comp,
					this.v = initFrame,
					this.pv = initFrame,
					this._isFirstFrame = !0,
					this.getValue = processEffectsSequence,
					this.setVValue = setVValue,
					this.interpolateValue = interpolateValue,
					this.effectsSequence = [getValueAtCurrentTime.bind(this)],
					this.addEffect = addEffect
			}
			function KeyframedMultidimensionalProperty(t, e, i, r) {
				var s;
				this.propType = "multidimensional";
				var a,
					n,
					o,
					h,
					l = e.k.length;
				for (s = 0; s < l - 1; s += 1)
					e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, n = e.k[s + 1].s, o = e.k[s].to, h = e.k[s].ti, (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === n[0] && a[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === a.length || a[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null, e.k[s].ti = null));
				this.effectsSequence = [getValueAtCurrentTime.bind(this)],
					this.data = e,
					this.keyframes = e.k,
					this.keyframesMetadata = [],
					this.offsetTime = t.data.st,
					this.k = !0,
					this.kf = !0,
					this._isFirstFrame = !0,
					this.mult = i || 1,
					this.elem = t,
					this.container = r,
					this.comp = t.comp,
					this.getValue = processEffectsSequence,
					this.setVValue = setVValue,
					this.interpolateValue = interpolateValue,
					this.frameId = -1;
				var p = e.k[0].s.length;
				for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s = 0; s < p; s += 1)
					this.v[s] = initFrame, this.pv[s] = initFrame;
				this._caching = {
					lastFrame: initFrame,
					lastIndex: 0,
					value: createTypedArray("float32", p)
				},
					this.addEffect = addEffect
			}
			var PropertyFactory = (ob = {
				getProp: function (t, e, i, r, s) {
					var a;
					if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
						if ("number" == typeof e.k[0])
							a = new MultiDimensionalProperty(t, e, r, s);
						else
							switch (i) {
								case 0:
									a = new KeyframedValueProperty(t, e, r, s);
									break;
								case 1:
									a = new KeyframedMultidimensionalProperty(t, e, r, s)
							}
					else
						a = new ValueProperty(t, e, r, s);
					return a.effectsSequence.length && s.addDynamicProperty(a),
						a
				}
			}, ob),
				ob;
			function DynamicPropertyContainer() { }
			DynamicPropertyContainer.prototype = {
				addDynamicProperty: function (t) {
					-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
				},
				iterateDynamicProperties: function () {
					var t;
					this._mdf = !1;
					var e = this.dynamicProperties.length;
					for (t = 0; t < e; t += 1)
						this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
				},
				initDynamicPropertyContainer: function (t) {
					this.container = t,
						this.dynamicProperties = [],
						this._mdf = !1,
						this._isAnimated = !1
				}
			};
			var pointPool = poolFactory(8, (function () {
				return createTypedArray("float32", 2)
			}));
			function ShapePath() {
				this.c = !1,
					this._length = 0,
					this._maxLength = 8,
					this.v = createSizedArray(this._maxLength),
					this.o = createSizedArray(this._maxLength),
					this.i = createSizedArray(this._maxLength)
			}
			ShapePath.prototype.setPathData = function (t, e) {
				this.c = t,
					this.setLength(e);
				for (var i = 0; i < e;)
					this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
			},
				ShapePath.prototype.setLength = function (t) {
					for (; this._maxLength < t;)
						this.doubleArrayLength();
					this._length = t
				},
				ShapePath.prototype.doubleArrayLength = function () {
					this.v = this.v.concat(createSizedArray(this._maxLength)),
						this.i = this.i.concat(createSizedArray(this._maxLength)),
						this.o = this.o.concat(createSizedArray(this._maxLength)),
						this._maxLength *= 2
				},
				ShapePath.prototype.setXYAt = function (t, e, i, r, s) {
					var a;
					switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
						case "v":
							a = this.v;
							break;
						case "i":
							a = this.i;
							break;
						case "o":
							a = this.o;
							break;
						default:
							a = []
					}
					(!a[r] || a[r] && !s) && (a[r] = pointPool.newElement()),
						a[r][0] = t,
						a[r][1] = e
				},
				ShapePath.prototype.setTripleAt = function (t, e, i, r, s, a, n, o) {
					this.setXYAt(t, e, "v", n, o),
						this.setXYAt(i, r, "o", n, o),
						this.setXYAt(s, a, "i", n, o)
				},
				ShapePath.prototype.reverse = function () {
					var t = new ShapePath;
					t.setPathData(this.c, this._length);
					var e = this.v,
						i = this.o,
						r = this.i,
						s = 0;
					this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
					var a,
						n = this._length - 1,
						o = this._length;
					for (a = s; a < o; a += 1)
						t.setTripleAt(e[n][0], e[n][1], r[n][0], r[n][1], i[n][0], i[n][1], a, !1), n -= 1;
					return t
				},
				ShapePath.prototype.length = function () {
					return this._length
				};
			var shapePool = (factory = poolFactory(4, (function () {
				return new ShapePath
			}), (function (t) {
				var e,
					i = t._length;
				for (e = 0; e < i; e += 1)
					pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
				t._length = 0,
					t.c = !1
			})), factory.clone = function (t) {
				var e,
					i = factory.newElement(),
					r = void 0 === t._length ? t.v.length : t._length;
				for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1)
					i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
				return i
			}, factory),
				factory;
			function ShapeCollection() {
				this._length = 0,
					this._maxLength = 4,
					this.shapes = createSizedArray(this._maxLength)
			}
			ShapeCollection.prototype.addShape = function (t) {
				this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2),
					this.shapes[this._length] = t,
					this._length += 1
			},
				ShapeCollection.prototype.releaseShapes = function () {
					var t;
					for (t = 0; t < this._length; t += 1)
						shapePool.release(this.shapes[t]);
					this._length = 0
				};
			var shapeCollectionPool = function () {
				var t = {
					newShapeCollection: function () {
						return e ? r[e -= 1] : new ShapeCollection
					},
					release: function (t) {
						var s,
							a = t._length;
						for (s = 0; s < a; s += 1)
							shapePool.release(t.shapes[s]);
						t._length = 0,
							e === i && (r = pooling.double(r), i *= 2),
							r[e] = t,
							e += 1
					}
				},
					e = 0,
					i = 4,
					r = createSizedArray(i);
				return t
			}
				(),
				ShapePropertyFactory = function () {
					var t = -999999;
					function e(t, e, i) {
						var r,
							s,
							a,
							n,
							o,
							h,
							l,
							p,
							m,
							c = i.lastIndex,
							f = this.keyframes;
						if (t < f[0].t - this.offsetTime)
							r = f[0].s[0], a = !0, c = 0;
						else if (t >= f[f.length - 1].t - this.offsetTime)
							r = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0;
						else {
							for (var d, u, y, g = c, v = f.length - 1, b = !0; b && (d = f[g], !((u = f[g + 1]).t - this.offsetTime > t));)
								g < v - 1 ? g += 1 : b = !1;
							if (y = this.keyframesMetadata[g] || {}, c = g, !(a = 1 === d.h)) {
								if (t >= u.t - this.offsetTime)
									p = 1;
								else if (t < d.t - this.offsetTime)
									p = 0;
								else {
									var E;
									y.__fnct ? E = y.__fnct : (E = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = E),
										p = E((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)))
								}
								s = u.s ? u.s[0] : d.e[0]
							}
							r = d.s[0]
						}
						for (h = e._length, l = r.i[0].length, i.lastIndex = c, n = 0; n < h; n += 1)
							for (o = 0; o < l; o += 1)
								m = a ? r.i[n][o] : r.i[n][o] + (s.i[n][o] - r.i[n][o]) * p, e.i[n][o] = m, m = a ? r.o[n][o] : r.o[n][o] + (s.o[n][o] - r.o[n][o]) * p, e.o[n][o] = m, m = a ? r.v[n][o] : r.v[n][o] + (s.v[n][o] - r.v[n][o]) * p, e.v[n][o] = m
					}
					function i() {
						var e = this.comp.renderedFrame - this.offsetTime,
							i = this.keyframes[0].t - this.offsetTime,
							r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
							s = this._caching.lastFrame;
						return s !== t && (s < i && e < i || s > r && e > r) || (this._caching.lastIndex = s < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)),
							this._caching.lastFrame = e,
							this.pv
					}
					function r() {
						this.paths = this.localShapeCollection
					}
					function s(t) {
						(function (t, e) {
							if (t._length !== e._length || t.c !== e.c)
								return !1;
							var i,
								r = t._length;
							for (i = 0; i < r; i += 1)
								if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1])
									return !1;
							return !0
						})(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
					}
					function a() {
						if (this.elem.globalData.frameId !== this.frameId)
							if (this.effectsSequence.length)
								if (this.lock)
									this.setVValue(this.pv);
								else {
									var t,
										e;
									this.lock = !0,
										this._mdf = !1,
										t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
									var i = this.effectsSequence.length;
									for (e = 0; e < i; e += 1)
										t = this.effectsSequence[e](t);
									this.setVValue(t),
										this.lock = !1,
										this.frameId = this.elem.globalData.frameId
								}
							else
								this._mdf = !1
					}
					function n(t, e, i) {
						this.propType = "shape",
							this.comp = t.comp,
							this.container = t,
							this.elem = t,
							this.data = e,
							this.k = !1,
							this.kf = !1,
							this._mdf = !1;
						var s = 3 === i ? e.pt.k : e.ks.k;
						this.v = shapePool.clone(s),
							this.pv = shapePool.clone(this.v),
							this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
							this.paths = this.localShapeCollection,
							this.paths.addShape(this.v),
							this.reset = r,
							this.effectsSequence = []
					}
					function o(t) {
						this.effectsSequence.push(t),
							this.container.addDynamicProperty(this)
					}
					function h(e, s, a) {
						this.propType = "shape",
							this.comp = e.comp,
							this.elem = e,
							this.container = e,
							this.offsetTime = e.data.st,
							this.keyframes = 3 === a ? s.pt.k : s.ks.k,
							this.keyframesMetadata = [],
							this.k = !0,
							this.kf = !0;
						var n = this.keyframes[0].s[0].i.length;
						this.v = shapePool.newElement(),
							this.v.setPathData(this.keyframes[0].s[0].c, n),
							this.pv = shapePool.clone(this.v),
							this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
							this.paths = this.localShapeCollection,
							this.paths.addShape(this.v),
							this.lastFrame = t,
							this.reset = r,
							this._caching = {
								lastFrame: t,
								lastIndex: 0
							},
							this.effectsSequence = [i.bind(this)]
					}
					n.prototype.interpolateShape = e,
						n.prototype.getValue = a,
						n.prototype.setVValue = s,
						n.prototype.addEffect = o,
						h.prototype.getValue = a,
						h.prototype.interpolateShape = e,
						h.prototype.setVValue = s,
						h.prototype.addEffect = o;
					var l = function () {
						var t = roundCorner;
						function e(t, e) {
							this.v = shapePool.newElement(),
								this.v.setPathData(!0, 4),
								this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
								this.paths = this.localShapeCollection,
								this.localShapeCollection.addShape(this.v),
								this.d = e.d,
								this.elem = t,
								this.comp = t.comp,
								this.frameId = -1,
								this.initDynamicPropertyContainer(t),
								this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
								this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
								this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
						}
						return e.prototype = {
							reset: r,
							getValue: function () {
								this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
							},
							convertEllToPath: function () {
								var e = this.p.v[0],
									i = this.p.v[1],
									r = this.s.v[0] / 2,
									s = this.s.v[1] / 2,
									a = 3 !== this.d,
									n = this.v;
								n.v[0][0] = e,
									n.v[0][1] = i - s,
									n.v[1][0] = a ? e + r : e - r,
									n.v[1][1] = i,
									n.v[2][0] = e,
									n.v[2][1] = i + s,
									n.v[3][0] = a ? e - r : e + r,
									n.v[3][1] = i,
									n.i[0][0] = a ? e - r * t : e + r * t,
									n.i[0][1] = i - s,
									n.i[1][0] = a ? e + r : e - r,
									n.i[1][1] = i - s * t,
									n.i[2][0] = a ? e + r * t : e - r * t,
									n.i[2][1] = i + s,
									n.i[3][0] = a ? e - r : e + r,
									n.i[3][1] = i + s * t,
									n.o[0][0] = a ? e + r * t : e - r * t,
									n.o[0][1] = i - s,
									n.o[1][0] = a ? e + r : e - r,
									n.o[1][1] = i + s * t,
									n.o[2][0] = a ? e - r * t : e + r * t,
									n.o[2][1] = i + s,
									n.o[3][0] = a ? e - r : e + r,
									n.o[3][1] = i - s * t
							}
						},
							extendPrototype([DynamicPropertyContainer], e),
							e
					}
						(),
						p = function () {
							function t(t, e) {
								this.v = shapePool.newElement(),
									this.v.setPathData(!0, 0),
									this.elem = t,
									this.comp = t.comp,
									this.data = e,
									this.frameId = -1,
									this.d = e.d,
									this.initDynamicPropertyContainer(t),
									1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
									this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this),
									this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
									this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this),
									this.or = PropertyFactory.getProp(t, e.or, 0, 0, this),
									this.os = PropertyFactory.getProp(t, e.os, 0, .01, this),
									this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
									this.localShapeCollection.addShape(this.v),
									this.paths = this.localShapeCollection,
									this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
							}
							return t.prototype = {
								reset: r,
								getValue: function () {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
								},
								convertStarToPath: function () {
									var t,
										e,
										i,
										r,
										s = 2 * Math.floor(this.pt.v),
										a = 2 * Math.PI / s,
										n = !0,
										o = this.or.v,
										h = this.ir.v,
										l = this.os.v,
										p = this.is.v,
										m = 2 * Math.PI * o / (2 * s),
										c = 2 * Math.PI * h / (2 * s),
										f = -Math.PI / 2;
									f += this.r.v;
									var d = 3 === this.data.d ? -1 : 1;
									for (this.v._length = 0, t = 0; t < s; t += 1) {
										i = n ? l : p,
											r = n ? m : c;
										var u = (e = n ? o : h) * Math.cos(f),
											y = e * Math.sin(f),
											g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y),
											v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
										u += +this.p.v[0],
											y += +this.p.v[1],
											this.v.setTripleAt(u, y, u - g * r * i * d, y - v * r * i * d, u + g * r * i * d, y + v * r * i * d, t, !0),
											n = !n,
											f += a * d
									}
								},
								convertPolygonToPath: function () {
									var t,
										e = Math.floor(this.pt.v),
										i = 2 * Math.PI / e,
										r = this.or.v,
										s = this.os.v,
										a = 2 * Math.PI * r / (4 * e),
										n = .5 * -Math.PI,
										o = 3 === this.data.d ? -1 : 1;
									for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
										var h = r * Math.cos(n),
											l = r * Math.sin(n),
											p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
											m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
										h += +this.p.v[0],
											l += +this.p.v[1],
											this.v.setTripleAt(h, l, h - p * a * s * o, l - m * a * s * o, h + p * a * s * o, l + m * a * s * o, t, !0),
											n += i * o
									}
									this.paths.length = 0,
										this.paths[0] = this.v
								}
							},
								extendPrototype([DynamicPropertyContainer], t),
								t
						}
							(),
						m = function () {
							function t(t, e) {
								this.v = shapePool.newElement(),
									this.v.c = !0,
									this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
									this.localShapeCollection.addShape(this.v),
									this.paths = this.localShapeCollection,
									this.elem = t,
									this.comp = t.comp,
									this.frameId = -1,
									this.d = e.d,
									this.initDynamicPropertyContainer(t),
									this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
									this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
									this.r = PropertyFactory.getProp(t, e.r, 0, 0, this),
									this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
							}
							return t.prototype = {
								convertRectToPath: function () {
									var t = this.p.v[0],
										e = this.p.v[1],
										i = this.s.v[0] / 2,
										r = this.s.v[1] / 2,
										s = bmMin(i, r, this.r.v),
										a = s * (1 - roundCorner);
									this.v._length = 0,
										2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + s, t + i, e - r + a, 0, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - a, t + i, e + r - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e + r, t + i - s, e + r, t + i - a, e + r, 2, !0), this.v.setTripleAt(t - i + s, e + r, t - i + a, e + r, t - i + s, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - s, t - i, e + r - a, 4, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + a, t - i, e - r + s, 5, !0), this.v.setTripleAt(t - i + s, e - r, t - i + s, e - r, t - i + a, e - r, 6, !0), this.v.setTripleAt(t + i - s, e - r, t + i - a, e - r, t + i - s, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + a, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + a, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + a, t + i, e - r + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e - r, t + i - s, e - r, t + i - a, e - r, 1, !0), this.v.setTripleAt(t - i + s, e - r, t - i + a, e - r, t - i + s, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + s, t - i, e - r + a, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - a, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i + s, e + r, t - i + s, e + r, t - i + a, e + r, 5, !0), this.v.setTripleAt(t + i - s, e + r, t + i - a, e + r, t + i - s, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - s, t + i, e + r - a, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + a, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - a, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - a, e + r, t + i, e + r, 3, !0)))
								},
								getValue: function () {
									this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
								},
								reset: r
							},
								extendPrototype([DynamicPropertyContainer], t),
								t
						}
							(),
						c = {
							getShapeProp: function (t, e, i) {
								var r;
								return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new h(t, e, i) : new n(t, e, i) : 5 === i ? r = new m(t, e) : 6 === i ? r = new l(t, e) : 7 === i && (r = new p(t, e)),
									r.k && t.addDynamicProperty(r),
									r
							},
							getConstructorFunction: function () {
								return n
							},
							getKeyframedConstructorFunction: function () {
								return h
							}
						};
					return c
				}
					(),
				Matrix = function () {
					var t = Math.cos,
						e = Math.sin,
						i = Math.tan,
						r = Math.round;
					function s() {
						return this.props[0] = 1,
							this.props[1] = 0,
							this.props[2] = 0,
							this.props[3] = 0,
							this.props[4] = 0,
							this.props[5] = 1,
							this.props[6] = 0,
							this.props[7] = 0,
							this.props[8] = 0,
							this.props[9] = 0,
							this.props[10] = 1,
							this.props[11] = 0,
							this.props[12] = 0,
							this.props[13] = 0,
							this.props[14] = 0,
							this.props[15] = 1,
							this
					}
					function a(i) {
						if (0 === i)
							return this;
						var r = t(i),
							s = e(i);
						return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}
					function n(i) {
						if (0 === i)
							return this;
						var r = t(i),
							s = e(i);
						return this._t(1, 0, 0, 0, 0, r, -s, 0, 0, s, r, 0, 0, 0, 0, 1)
					}
					function o(i) {
						if (0 === i)
							return this;
						var r = t(i),
							s = e(i);
						return this._t(r, 0, s, 0, 0, 1, 0, 0, -s, 0, r, 0, 0, 0, 0, 1)
					}
					function h(i) {
						if (0 === i)
							return this;
						var r = t(i),
							s = e(i);
						return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}
					function l(t, e) {
						return this._t(1, e, t, 1, 0, 0)
					}
					function p(t, e) {
						return this.shear(i(t), i(e))
					}
					function m(r, s) {
						var a = t(s),
							n = e(s);
						return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
					}
					function c(t, e, i) {
						return i || 0 === i || (i = 1),
							1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
					}
					function f(t, e, i, r, s, a, n, o, h, l, p, m, c, f, d, u) {
						return this.props[0] = t,
							this.props[1] = e,
							this.props[2] = i,
							this.props[3] = r,
							this.props[4] = s,
							this.props[5] = a,
							this.props[6] = n,
							this.props[7] = o,
							this.props[8] = h,
							this.props[9] = l,
							this.props[10] = p,
							this.props[11] = m,
							this.props[12] = c,
							this.props[13] = f,
							this.props[14] = d,
							this.props[15] = u,
							this
					}
					function d(t, e, i) {
						return i = i || 0,
							0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
					}
					function u(t, e, i, r, s, a, n, o, h, l, p, m, c, f, d, u) {
						var y = this.props;
						if (1 === t && 0 === e && 0 === i && 0 === r && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m)
							return y[12] = y[12] * t + y[15] * c, y[13] = y[13] * a + y[15] * f, y[14] = y[14] * p + y[15] * d, y[15] *= u, this._identityCalculated = !1, this;
						var g = y[0],
							v = y[1],
							b = y[2],
							E = y[3],
							P = y[4],
							x = y[5],
							C = y[6],
							S = y[7],
							_ = y[8],
							T = y[9],
							k = y[10],
							A = y[11],
							M = y[12],
							D = y[13],
							I = y[14],
							F = y[15];
						return y[0] = g * t + v * s + b * h + E * c,
							y[1] = g * e + v * a + b * l + E * f,
							y[2] = g * i + v * n + b * p + E * d,
							y[3] = g * r + v * o + b * m + E * u,
							y[4] = P * t + x * s + C * h + S * c,
							y[5] = P * e + x * a + C * l + S * f,
							y[6] = P * i + x * n + C * p + S * d,
							y[7] = P * r + x * o + C * m + S * u,
							y[8] = _ * t + T * s + k * h + A * c,
							y[9] = _ * e + T * a + k * l + A * f,
							y[10] = _ * i + T * n + k * p + A * d,
							y[11] = _ * r + T * o + k * m + A * u,
							y[12] = M * t + D * s + I * h + F * c,
							y[13] = M * e + D * a + I * l + F * f,
							y[14] = M * i + D * n + I * p + F * d,
							y[15] = M * r + D * o + I * m + F * u,
							this._identityCalculated = !1,
							this
					}
					function y(t) {
						var e = t.props;
						return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
					}
					function g() {
						return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0),
							this._identity
					}
					function v(t) {
						for (var e = 0; e < 16;) {
							if (t.props[e] !== this.props[e])
								return !1;
							e += 1
						}
						return !0
					}
					function b(t) {
						var e;
						for (e = 0; e < 16; e += 1)
							t.props[e] = this.props[e];
						return t
					}
					function E(t) {
						var e;
						for (e = 0; e < 16; e += 1)
							this.props[e] = t[e]
					}
					function P(t, e, i) {
						return {
							x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
							y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
							z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
						}
					}
					function x(t, e, i) {
						return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
					}
					function C(t, e, i) {
						return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
					}
					function S(t, e, i) {
						return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
					}
					function _() {
						var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
							e = this.props[5] / t,
							i = -this.props[1] / t,
							r = -this.props[4] / t,
							s = this.props[0] / t,
							a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
							n = - (this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
							o = new Matrix;
						return o.props[0] = e,
							o.props[1] = i,
							o.props[4] = r,
							o.props[5] = s,
							o.props[12] = a,
							o.props[13] = n,
							o
					}
					function T(t) {
						return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
					}
					function k(t) {
						var e,
							i = t.length,
							r = [];
						for (e = 0; e < i; e += 1)
							r[e] = T(t[e]);
						return r
					}
					function A(t, e, i) {
						var r = createTypedArray("float32", 6);
						if (this.isIdentity())
							r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
						else {
							var s = this.props[0],
								a = this.props[1],
								n = this.props[4],
								o = this.props[5],
								h = this.props[12],
								l = this.props[13];
							r[0] = t[0] * s + t[1] * n + h,
								r[1] = t[0] * a + t[1] * o + l,
								r[2] = e[0] * s + e[1] * n + h,
								r[3] = e[0] * a + e[1] * o + l,
								r[4] = i[0] * s + i[1] * n + h,
								r[5] = i[0] * a + i[1] * o + l
						}
						return r
					}
					function M(t, e, i) {
						return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
					}
					function D(t, e) {
						if (this.isIdentity())
							return t + "," + e;
						var i = this.props;
						return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
					}
					function I() {
						for (var t = 0, e = this.props, i = "matrix3d("; t < 16;)
							i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
						return i
					}
					function F(t) {
						return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
					}
					function w() {
						var t = this.props;
						return "matrix(" + F(t[0]) + "," + F(t[1]) + "," + F(t[4]) + "," + F(t[5]) + "," + F(t[12]) + "," + F(t[13]) + ")"
					}
					return function () {
						this.reset = s,
							this.rotate = a,
							this.rotateX = n,
							this.rotateY = o,
							this.rotateZ = h,
							this.skew = p,
							this.skewFromAxis = m,
							this.shear = l,
							this.scale = c,
							this.setTransform = f,
							this.translate = d,
							this.transform = u,
							this.multiply = y,
							this.applyToPoint = P,
							this.applyToX = x,
							this.applyToY = C,
							this.applyToZ = S,
							this.applyToPointArray = M,
							this.applyToTriplePoints = A,
							this.applyToPointStringified = D,
							this.toCSS = I,
							this.to2dCSS = w,
							this.clone = b,
							this.cloneFromProps = E,
							this.equals = v,
							this.inversePoints = k,
							this.inversePoint = T,
							this.getInverseMatrix = _,
							this._t = this.transform,
							this.isIdentity = g,
							this._identity = !0,
							this._identityCalculated = !1,
							this.props = createTypedArray("float32", 16),
							this.reset()
					}
				}
					();
			function _typeof$3(t) {
				return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
					return typeof t
				}
					: function (t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					},
					_typeof$3(t)
			}
			var lottie = {};
			function setLocation(t) {
				setLocationHref(t)
			}
			function searchAnimations() {
				animationManager.searchAnimations()
			}
			function setSubframeRendering(t) {
				setSubframeEnabled(t)
			}
			function setPrefix(t) {
				setIdPrefix(t)
			}
			function loadAnimation(t) {
				return animationManager.loadAnimation(t)
			}
			function setQuality(t) {
				if ("string" == typeof t)
					switch (t) {
						case "high":
							setDefaultCurveSegments(200);
							break;
						default:
						case "medium":
							setDefaultCurveSegments(50);
							break;
						case "low":
							setDefaultCurveSegments(10)
					}
				else !isNaN(t) && t > 1 && setDefaultCurveSegments(t)
			}
			function inBrowser() {
				return "undefined" != typeof navigator
			}
			function installPlugin(t, e) {
				"expressions" === t && setExpressionsPlugin(e)
			}
			function getFactory(t) {
				switch (t) {
					case "propertyFactory":
						return PropertyFactory;
					case "shapePropertyFactory":
						return ShapePropertyFactory;
					case "matrix":
						return Matrix;
					default:
						return null
				}
			}
			function checkReady() {
				"complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
			}
			function getQueryVariable(t) {
				for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
					var r = e[i].split("=");
					if (decodeURIComponent(r[0]) == t)
						return decodeURIComponent(r[1])
				}
				return null
			}
			lottie.play = animationManager.play,
				lottie.pause = animationManager.pause,
				lottie.setLocationHref = setLocation,
				lottie.togglePause = animationManager.togglePause,
				lottie.setSpeed = animationManager.setSpeed,
				lottie.setDirection = animationManager.setDirection,
				lottie.stop = animationManager.stop,
				lottie.searchAnimations = searchAnimations,
				lottie.registerAnimation = animationManager.registerAnimation,
				lottie.loadAnimation = loadAnimation,
				lottie.setSubframeRendering = setSubframeRendering,
				lottie.resize = animationManager.resize,
				lottie.goToAndStop = animationManager.goToAndStop,
				lottie.destroy = animationManager.destroy,
				lottie.setQuality = setQuality,
				lottie.inBrowser = inBrowser,
				lottie.installPlugin = installPlugin,
				lottie.freeze = animationManager.freeze,
				lottie.unfreeze = animationManager.unfreeze,
				lottie.setVolume = animationManager.setVolume,
				lottie.mute = animationManager.mute,
				lottie.unmute = animationManager.unmute,
				lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations,
				lottie.useWebWorker = setWebWorker,
				lottie.setIDPrefix = setPrefix,
				lottie.__getFactory = getFactory,
				lottie.version = "5.12.2";
			var queryString = "",
				scripts = document.getElementsByTagName("script"),
				index = scripts.length - 1,
				myScript = scripts[index] || {
					src: ""
				};
			queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "",
				getQueryVariable("renderer");
			var readyStateCheckInterval = setInterval(checkReady, 100);
			try {
				"object" !== _typeof$3(exports) && (window.bodymovin = lottie)
			} catch (t) { }
			var ShapeModifiers = function () {
				var t = {},
					e = {};
				return t.registerModifier = function (t, i) {
					e[t] || (e[t] = i)
				},
					t.getModifier = function (t, i, r) {
						return new e[t](i, r)
					},
					t
			}
				();
			function ShapeModifier() { }
			function TrimModifier() { }
			function PuckerAndBloatModifier() { }
			ShapeModifier.prototype.initModifierProperties = function () { },
				ShapeModifier.prototype.addShapeToModifier = function () { },
				ShapeModifier.prototype.addShape = function (t) {
					if (!this.closed) {
						t.sh.container.addDynamicProperty(t.sh);
						var e = {
							shape: t.sh,
							data: t,
							localShapeCollection: shapeCollectionPool.newShapeCollection()
						};
						this.shapes.push(e),
							this.addShapeToModifier(e),
							this._isAnimated && t.setAsAnimated()
					}
				},
				ShapeModifier.prototype.init = function (t, e) {
					this.shapes = [],
						this.elem = t,
						this.initDynamicPropertyContainer(t),
						this.initModifierProperties(t, e),
						this.frameId = initialDefaultFrame,
						this.closed = !1,
						this.k = !1,
						this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
				},
				ShapeModifier.prototype.processKeys = function () {
					this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
				},
				extendPrototype([DynamicPropertyContainer], ShapeModifier),
				extendPrototype([ShapeModifier], TrimModifier),
				TrimModifier.prototype.initModifierProperties = function (t, e) {
					this.s = PropertyFactory.getProp(t, e.s, 0, .01, this),
						this.e = PropertyFactory.getProp(t, e.e, 0, .01, this),
						this.o = PropertyFactory.getProp(t, e.o, 0, 0, this),
						this.sValue = 0,
						this.eValue = 0,
						this.getValue = this.processKeys,
						this.m = e.m,
						this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
				},
				TrimModifier.prototype.addShapeToModifier = function (t) {
					t.pathsData = []
				},
				TrimModifier.prototype.calculateShapeEdges = function (t, e, i, r, s) {
					var a = [];
					e <= 1 ? a.push({
						s: t,
						e: e
					}) : t >= 1 ? a.push({
						s: t - 1,
						e: e - 1
					}) : (a.push({
						s: t,
						e: 1
					}), a.push({
						s: 0,
						e: e - 1
					}));
					var n,
						o,
						h = [],
						l = a.length;
					for (n = 0; n < l; n += 1) {
						var p,
							m;
						(o = a[n]).e * s < r || o.s * s > r + i || (p = o.s * s <= r ? 0 : (o.s * s - r) / i, m = o.e * s >= r + i ? 1 : (o.e * s - r) / i, h.push([p, m]))
					}
					return h.length || h.push([0, 0]),
						h
				},
				TrimModifier.prototype.releasePathsData = function (t) {
					var e,
						i = t.length;
					for (e = 0; e < i; e += 1)
						segmentsLengthPool.release(t[e]);
					return t.length = 0,
						t
				},
				TrimModifier.prototype.processShapes = function (t) {
					var e,
						i,
						r,
						s;
					if (this._mdf || t) {
						var a = this.o.v % 360 / 360;
						if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (i = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
							var n = e;
							e = i,
								i = n
						}
						e = 1e-4 * Math.round(1e4 * e),
							i = 1e-4 * Math.round(1e4 * i),
							this.sValue = e,
							this.eValue = i
					} else
						e = this.sValue, i = this.eValue;
					var o,
						h,
						l,
						p,
						m,
						c = this.shapes.length,
						f = 0;
					if (i === e)
						for (s = 0; s < c; s += 1)
							this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
					else if (1 === i && 0 === e || 0 === i && 1 === e) {
						if (this._mdf)
							for (s = 0; s < c; s += 1)
								this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
					} else {
						var d,
							u,
							y = [];
						for (s = 0; s < c; s += 1)
							if ((d = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
								if (h = (r = d.shape.paths)._length, m = 0, !d.shape._mdf && d.pathsData.length)
									m = d.totalShapeLength;
								else {
									for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1)
										p = bez.getSegmentsLength(r.shapes[o]), l.push(p), m += p.totalLength;
									d.totalShapeLength = m,
										d.pathsData = l
								}
								f += m,
									d.shape._mdf = !0
							} else
								d.shape.paths = d.localShapeCollection;
						var g,
							v = e,
							b = i,
							E = 0;
						for (s = c - 1; s >= 0; s -= 1)
							if ((d = this.shapes[s]).shape._mdf) {
								for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && c > 1 ? (g = this.calculateShapeEdges(e, i, d.totalShapeLength, E, f), E += d.totalShapeLength) : g = [[v, b]], h = g.length, o = 0; o < h; o += 1) {
									v = g[o][0],
										b = g[o][1],
										y.length = 0,
										b <= 1 ? y.push({
											s: d.totalShapeLength * v,
											e: d.totalShapeLength * b
										}) : v >= 1 ? y.push({
											s: d.totalShapeLength * (v - 1),
											e: d.totalShapeLength * (b - 1)
										}) : (y.push({
											s: d.totalShapeLength * v,
											e: d.totalShapeLength
										}), y.push({
											s: 0,
											e: d.totalShapeLength * (b - 1)
										}));
									var P = this.addShapes(d, y[0]);
									if (y[0].s !== y[0].e) {
										if (y.length > 1)
											if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
												var x = P.pop();
												this.addPaths(P, u),
													P = this.addShapes(d, y[1], x)
											} else
												this.addPaths(P, u), P = this.addShapes(d, y[1]);
										this.addPaths(P, u)
									}
								}
								d.shape.paths = u
							}
					}
				},
				TrimModifier.prototype.addPaths = function (t, e) {
					var i,
						r = t.length;
					for (i = 0; i < r; i += 1)
						e.addShape(t[i])
				},
				TrimModifier.prototype.addSegment = function (t, e, i, r, s, a, n) {
					s.setXYAt(e[0], e[1], "o", a),
						s.setXYAt(i[0], i[1], "i", a + 1),
						n && s.setXYAt(t[0], t[1], "v", a),
						s.setXYAt(r[0], r[1], "v", a + 1)
				},
				TrimModifier.prototype.addSegmentFromArray = function (t, e, i, r) {
					e.setXYAt(t[1], t[5], "o", i),
						e.setXYAt(t[2], t[6], "i", i + 1),
						r && e.setXYAt(t[0], t[4], "v", i),
						e.setXYAt(t[3], t[7], "v", i + 1)
				},
				TrimModifier.prototype.addShapes = function (t, e, i) {
					var r,
						s,
						a,
						n,
						o,
						h,
						l,
						p,
						m = t.pathsData,
						c = t.shape.paths.shapes,
						f = t.shape.paths._length,
						d = 0,
						u = [],
						y = !0;
					for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), u.push(i), r = 0; r < f; r += 1) {
						for (h = m[r].lengths, i.c = c[r].c, a = c[r].c ? h.length : h.length + 1, s = 1; s < a; s += 1)
							if (d + (n = h[s - 1]).addedLength < e.s)
								d += n.addedLength, i.c = !1;
							else {
								if (d > e.e) {
									i.c = !1;
									break
								}
								e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(c[r].v[s - 1], c[r].o[s - 1], c[r].i[s], c[r].v[s], i, o, y), y = !1) : (l = bez.getNewSegment(c[r].v[s - 1], c[r].v[s], c[r].o[s - 1], c[r].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1),
									d += n.addedLength,
									o += 1
							}
						if (c[r].c && h.length) {
							if (n = h[s - 1], d <= e.e) {
								var g = h[s - 1].addedLength;
								e.s <= d && e.e >= d + g ? (this.addSegment(c[r].v[s - 1], c[r].o[s - 1], c[r].i[0], c[r].v[0], i, o, y), y = !1) : (l = bez.getNewSegment(c[r].v[s - 1], c[r].v[0], c[r].o[s - 1], c[r].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1)
							} else
								i.c = !1;
							d += n.addedLength,
								o += 1
						}
						if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e)
							break;
						r < f - 1 && (i = shapePool.newElement(), y = !0, u.push(i), o = 0)
					}
					return u
				},
				extendPrototype([ShapeModifier], PuckerAndBloatModifier),
				PuckerAndBloatModifier.prototype.initModifierProperties = function (t, e) {
					this.getValue = this.processKeys,
						this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
						this._isAnimated = !!this.amount.effectsSequence.length
				},
				PuckerAndBloatModifier.prototype.processPath = function (t, e) {
					var i = e / 100,
						r = [0, 0],
						s = t._length,
						a = 0;
					for (a = 0; a < s; a += 1)
						r[0] += t.v[a][0], r[1] += t.v[a][1];
					r[0] /= s,
						r[1] /= s;
					var n,
						o,
						h,
						l,
						p,
						m,
						c = shapePool.newElement();
					for (c.c = t.c, a = 0; a < s; a += 1)
						n = t.v[a][0] + (r[0] - t.v[a][0]) * i, o = t.v[a][1] + (r[1] - t.v[a][1]) * i, h = t.o[a][0] + (r[0] - t.o[a][0]) * -i, l = t.o[a][1] + (r[1] - t.o[a][1]) * -i, p = t.i[a][0] + (r[0] - t.i[a][0]) * -i, m = t.i[a][1] + (r[1] - t.i[a][1]) * -i, c.setTripleAt(n, o, h, l, p, m, a);
					return c
				},
				PuckerAndBloatModifier.prototype.processShapes = function (t) {
					var e,
						i,
						r,
						s,
						a,
						n,
						o = this.shapes.length,
						h = this.amount.v;
					if (0 !== h)
						for (i = 0; i < o; i += 1) {
							if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
								for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1)
									n.addShape(this.processPath(e[r], h));
							a.shape.paths = a.localShapeCollection
						}
					this.dynamicProperties.length || (this._mdf = !1)
				};
			var TransformPropertyFactory = function () {
				var t = [0, 0];
				function e(t, e, i) {
					if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
						k: [0, 0, 0]
					}, 1, 0, this), e.rx) {
						if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
							var r,
								s = e.or.k.length;
							for (r = 0; r < s; r += 1)
								e.or.k[r].to = null, e.or.k[r].ti = null
						}
						this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this),
							this.or.sh = !0
					} else
						this.r = PropertyFactory.getProp(t, e.r || {
							k: 0
						}, 0, degToRads, this);
					e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)),
						this.a = PropertyFactory.getProp(t, e.a || {
							k: [0, 0, 0]
						}, 1, 0, this),
						this.s = PropertyFactory.getProp(t, e.s || {
							k: [100, 100, 100]
						}, 1, .01, this),
						e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
							_mdf: !1,
							v: 1
						},
						this._isDirty = !0,
						this.dynamicProperties.length || this.getValue(!0)
				}
				return e.prototype = {
					applyToMatrix: function (t) {
						var e = this._mdf;
						this.iterateDynamicProperties(),
							this._mdf = this._mdf || e,
							this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
							this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
							this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
							this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
							this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
					},
					getValue: function (e) {
						if (this.elem.globalData.frameId !== this.frameId) {
							if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
								var i;
								if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
									var r,
										s;
									if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
										this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
									else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
										r = [],
											s = [];
										var a = this.px,
											n = this.py;
										a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (r[0] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[1] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), s[0] = a.getValueAtTime(a.keyframes[0].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (r[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), s[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0)) : (r = [a.pv, n.pv], s[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime), s[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime))
									} else
										r = s = t;
									this.v.rotate(-Math.atan2(r[1] - s[1], r[0] - s[0]))
								}
								this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
							}
							this.frameId = this.elem.globalData.frameId
						}
					},
					precalculateMatrix: function () {
						if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
							if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
								if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
									return;
								this.pre.skewFromAxis(-this.sk.v, this.sa.v),
									this.appliedTransformations = 3
							}
							this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
						}
					},
					autoOrient: function () { }
				},
					extendPrototype([DynamicPropertyContainer], e),
					e.prototype.addDynamicProperty = function (t) {
						this._addDynamicProperty(t),
							this.elem.addDynamicProperty(t),
							this._isDirty = !0
					},
					e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
					getTransformProperty: function (t, i, r) {
						return new e(t, i, r)
					}
				}
			}
				();
			function RepeaterModifier() { }
			function RoundCornersModifier() { }
			function floatEqual(t, e) {
				return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
			}
			function floatZero(t) {
				return Math.abs(t) <= 1e-5
			}
			function lerp(t, e, i) {
				return t * (1 - i) + e * i
			}
			function lerpPoint(t, e, i) {
				return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)]
			}
			function quadRoots(t, e, i) {
				if (0 === t)
					return [];
				var r = e * e - 4 * t * i;
				if (r < 0)
					return [];
				var s = -e / (2 * t);
				if (0 === r)
					return [s];
				var a = Math.sqrt(r) / (2 * t);
				return [s - a, s + a]
			}
			function polynomialCoefficients(t, e, i, r) {
				return [3 * e - t - 3 * i + r, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
			}
			function singlePoint(t) {
				return new PolynomialBezier(t, t, t, t, !1)
			}
			function PolynomialBezier(t, e, i, r, s) {
				s && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)),
					s && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
				var a = polynomialCoefficients(t[0], e[0], i[0], r[0]),
					n = polynomialCoefficients(t[1], e[1], i[1], r[1]);
				this.a = [a[0], n[0]],
					this.b = [a[1], n[1]],
					this.c = [a[2], n[2]],
					this.d = [a[3], n[3]],
					this.points = [t, e, i, r]
			}
			function extrema(t, e) {
				var i = t.points[0][e],
					r = t.points[t.points.length - 1][e];
				if (i > r) {
					var s = r;
					r = i,
						i = s
				}
				for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
					if (a[n] > 0 && a[n] < 1) {
						var o = t.point(a[n])[e];
						o < i ? i = o : o > r && (r = o)
					}
				return {
					min: i,
					max: r
				}
			}
			function intersectData(t, e, i) {
				var r = t.boundingBox();
				return {
					cx: r.cx,
					cy: r.cy,
					width: r.width,
					height: r.height,
					bez: t,
					t: (e + i) / 2,
					t1: e,
					t2: i
				}
			}
			function splitData(t) {
				var e = t.bez.split(.5);
				return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
			}
			function boxIntersect(t, e) {
				return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
			}
			function intersectsImpl(t, e, i, r, s, a) {
				if (boxIntersect(t, e))
					if (i >= a || t.width <= r && t.height <= r && e.width <= r && e.height <= r)
						s.push([t.t, e.t]);
					else {
						var n = splitData(t),
							o = splitData(e);
						intersectsImpl(n[0], o[0], i + 1, r, s, a),
							intersectsImpl(n[0], o[1], i + 1, r, s, a),
							intersectsImpl(n[1], o[0], i + 1, r, s, a),
							intersectsImpl(n[1], o[1], i + 1, r, s, a)
					}
			}
			function crossProduct(t, e) {
				return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
			}
			function lineIntersection(t, e, i, r) {
				var s = [t[0], t[1], 1],
					a = [e[0], e[1], 1],
					n = [i[0], i[1], 1],
					o = [r[0], r[1], 1],
					h = crossProduct(crossProduct(s, a), crossProduct(n, o));
				return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
			}
			function polarOffset(t, e, i) {
				return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
			}
			function pointDistance(t, e) {
				return Math.hypot(t[0] - e[0], t[1] - e[1])
			}
			function pointEqual(t, e) {
				return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
			}
			function ZigZagModifier() { }
			function setPoint(t, e, i, r, s, a, n) {
				var o = i - Math.PI / 2,
					h = i + Math.PI / 2,
					l = e[0] + Math.cos(i) * r * s,
					p = e[1] - Math.sin(i) * r * s;
				t.setTripleAt(l, p, l + Math.cos(o) * a, p - Math.sin(o) * a, l + Math.cos(h) * n, p - Math.sin(h) * n, t.length())
			}
			function getPerpendicularVector(t, e) {
				var i = [e[0] - t[0], e[1] - t[1]],
					r = .5 * -Math.PI;
				return [Math.cos(r) * i[0] - Math.sin(r) * i[1], Math.sin(r) * i[0] + Math.cos(r) * i[1]]
			}
			function getProjectingAngle(t, e) {
				var i = 0 === e ? t.length() - 1 : e - 1,
					r = (e + 1) % t.length(),
					s = getPerpendicularVector(t.v[i], t.v[r]);
				return Math.atan2(0, 1) - Math.atan2(s[1], s[0])
			}
			function zigZagCorner(t, e, i, r, s, a, n) {
				var o = getProjectingAngle(e, i),
					h = e.v[i % e._length],
					l = e.v[0 === i ? e._length - 1 : i - 1],
					p = e.v[(i + 1) % e._length],
					m = 2 === a ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0,
					c = 2 === a ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
				setPoint(t, e.v[i % e._length], o, n, r, c / (2 * (s + 1)), m / (2 * (s + 1)))
			}
			function zigZagSegment(t, e, i, r, s, a) {
				for (var n = 0; n < r; n += 1) {
					var o = (n + 1) / (r + 1),
						h = 2 === s ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
						l = e.normalAngle(o);
					setPoint(t, e.point(o), l, a, i, h / (2 * (r + 1)), h / (2 * (r + 1))),
						a = -a
				}
				return a
			}
			function linearOffset(t, e, i) {
				var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
				return [polarOffset(t, r, i), polarOffset(e, r, i)]
			}
			function offsetSegment(t, e) {
				var i,
					r,
					s,
					a,
					n,
					o,
					h;
				i = (h = linearOffset(t.points[0], t.points[1], e))[0],
					r = h[1],
					s = (h = linearOffset(t.points[1], t.points[2], e))[0],
					a = h[1],
					n = (h = linearOffset(t.points[2], t.points[3], e))[0],
					o = h[1];
				var l = lineIntersection(i, r, s, a);
				null === l && (l = r);
				var p = lineIntersection(n, o, s, a);
				return null === p && (p = n),
					new PolynomialBezier(i, l, p, o)
			}
			function joinLines(t, e, i, r, s) {
				var a = e.points[3],
					n = i.points[0];
				if (3 === r)
					return a;
				if (pointEqual(a, n))
					return a;
				if (2 === r) {
					var o = -e.tangentAngle(1),
						h = -i.tangentAngle(0) + Math.PI,
						l = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), n, polarOffset(n, o + Math.PI / 2, 100)),
						p = l ? pointDistance(l, a) : pointDistance(a, n) / 2,
						m = polarOffset(a, o, 2 * p * roundCorner);
					return t.setXYAt(m[0], m[1], "o", t.length() - 1),
						m = polarOffset(n, h, 2 * p * roundCorner),
						t.setTripleAt(n[0], n[1], n[0], n[1], m[0], m[1], t.length()),
						n
				}
				var c = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, n, pointEqual(n, i.points[1]) ? i.points[3] : i.points[1]);
				return c && pointDistance(c, a) < s ? (t.setTripleAt(c[0], c[1], c[0], c[1], c[0], c[1], t.length()), c) : a
			}
			function getIntersection(t, e) {
				var i = t.intersections(e);
				return i.length && floatEqual(i[0][0], 1) && i.shift(),
					i.length ? i[0] : null
			}
			function pruneSegmentIntersection(t, e) {
				var i = t.slice(),
					r = e.slice(),
					s = getIntersection(t[t.length - 1], e[0]);
				return s && (i[t.length - 1] = t[t.length - 1].split(s[0])[0], r[0] = e[0].split(s[1])[1]),
					t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]] : [i, r]
			}
			function pruneIntersections(t) {
				for (var e, i = 1; i < t.length; i += 1)
					e = pruneSegmentIntersection(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
				return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]),
					t
			}
			function offsetSegmentSplit(t, e) {
				var i,
					r,
					s,
					a,
					n = t.inflectionPoints();
				if (0 === n.length)
					return [offsetSegment(t, e)];
				if (1 === n.length || floatEqual(n[1], 1))
					return i = (s = t.split(n[0]))[0], r = s[1], [offsetSegment(i, e), offsetSegment(r, e)];
				i = (s = t.split(n[0]))[0];
				var o = (n[1] - n[0]) / (1 - n[0]);
				return a = (s = s[1].split(o))[0],
					r = s[1],
					[offsetSegment(i, e), offsetSegment(a, e), offsetSegment(r, e)]
			}
			function OffsetPathModifier() { }
			function getFontProperties(t) {
				for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", s = e.length, a = 0; a < s; a += 1)
					switch (e[a].toLowerCase()) {
						case "italic":
							r = "italic";
							break;
						case "bold":
							i = "700";
							break;
						case "black":
							i = "900";
							break;
						case "medium":
							i = "500";
							break;
						case "regular":
						case "normal":
							i = "400";
							break;
						case "light":
						case "thin":
							i = "200"
					}
				return {
					style: r,
					weight: t.fWeight || i
				}
			}
			extendPrototype([ShapeModifier], RepeaterModifier),
				RepeaterModifier.prototype.initModifierProperties = function (t, e) {
					this.getValue = this.processKeys,
						this.c = PropertyFactory.getProp(t, e.c, 0, null, this),
						this.o = PropertyFactory.getProp(t, e.o, 0, null, this),
						this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this),
						this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this),
						this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this),
						this.data = e,
						this.dynamicProperties.length || this.getValue(!0),
						this._isAnimated = !!this.dynamicProperties.length,
						this.pMatrix = new Matrix,
						this.rMatrix = new Matrix,
						this.sMatrix = new Matrix,
						this.tMatrix = new Matrix,
						this.matrix = new Matrix
				},
				RepeaterModifier.prototype.applyTransforms = function (t, e, i, r, s, a) {
					var n = a ? -1 : 1,
						o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
						h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
					t.translate(r.p.v[0] * n * s, r.p.v[1] * n * s, r.p.v[2]),
						e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
						e.rotate(-r.r.v * n * s),
						e.translate(r.a.v[0], r.a.v[1], r.a.v[2]),
						i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
						i.scale(a ? 1 / o : o, a ? 1 / h : h),
						i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
				},
				RepeaterModifier.prototype.init = function (t, e, i, r) {
					for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;)
						i -= 1, this._elements.unshift(e[i]);
					this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
				},
				RepeaterModifier.prototype.resetElements = function (t) {
					var e,
						i = t.length;
					for (e = 0; e < i; e += 1)
						t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
				},
				RepeaterModifier.prototype.cloneElements = function (t) {
					var e = JSON.parse(JSON.stringify(t));
					return this.resetElements(e),
						e
				},
				RepeaterModifier.prototype.changeGroupRender = function (t, e) {
					var i,
						r = t.length;
					for (i = 0; i < r; i += 1)
						t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
				},
				RepeaterModifier.prototype.processShapes = function (t) {
					var e,
						i,
						r,
						s,
						a,
						n = !1;
					if (this._mdf || t) {
						var o,
							h = Math.ceil(this.c.v);
						if (this._groups.length < h) {
							for (; this._groups.length < h;) {
								var l = {
									it: this.cloneElements(this._elements),
									ty: "gr"
								};
								l.it.push({
									a: {
										a: 0,
										ix: 1,
										k: [0, 0]
									},
									nm: "Transform",
									o: {
										a: 0,
										ix: 7,
										k: 100
									},
									p: {
										a: 0,
										ix: 2,
										k: [0, 0]
									},
									r: {
										a: 1,
										ix: 6,
										k: [{
											s: 0,
											e: 0,
											t: 0
										}, {
											s: 0,
											e: 0,
											t: 1
										}
										]
									},
									s: {
										a: 0,
										ix: 3,
										k: [100, 100]
									},
									sa: {
										a: 0,
										ix: 5,
										k: 0
									},
									sk: {
										a: 0,
										ix: 4,
										k: 0
									},
									ty: "tr"
								}),
									this.arr.splice(0, 0, l),
									this._groups.splice(0, 0, l),
									this._currentCopies += 1
							}
							this.elem.reloadShapes(),
								n = !0
						}
						for (a = 0, r = 0; r <= this._groups.length - 1; r += 1) {
							if (o = a < h, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
								var p = this.elemsData[r].it,
									m = p[p.length - 1];
								0 !== m.transform.op.v ? (m.transform.op._mdf = !0, m.transform.op.v = 0) : m.transform.op._mdf = !1
							}
							a += 1
						}
						this._currentCopies = h;
						var c = this.o.v,
							f = c % 1,
							d = c > 0 ? Math.floor(c) : Math.ceil(c),
							u = this.pMatrix.props,
							y = this.rMatrix.props,
							g = this.sMatrix.props;
						this.pMatrix.reset(),
							this.rMatrix.reset(),
							this.sMatrix.reset(),
							this.tMatrix.reset(),
							this.matrix.reset();
						var v,
							b,
							E = 0;
						if (c > 0) {
							for (; E < d;)
								this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), E += 1;
							f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), E += f)
						} else if (c < 0) {
							for (; E > d;)
								this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), E -= 1;
							f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), E -= f)
						}
						for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
							if (b = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== E) {
								for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < b; v += 1)
									i[v] = this.matrix.props[v];
								this.matrix.reset()
							} else
								for (this.matrix.reset(), v = 0; v < b; v += 1)
									i[v] = this.matrix.props[v];
							E += 1,
								a -= 1,
								r += s
						}
					} else
						for (a = this._currentCopies, r = 0, s = 1; a;)
							i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, r += s;
					return n
				},
				RepeaterModifier.prototype.addShape = function () { },
				extendPrototype([ShapeModifier], RoundCornersModifier),
				RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
					this.getValue = this.processKeys,
						this.rd = PropertyFactory.getProp(t, e.r, 0, null, this),
						this._isAnimated = !!this.rd.effectsSequence.length
				},
				RoundCornersModifier.prototype.processPath = function (t, e) {
					var i,
						r = shapePool.newElement();
					r.c = t.c;
					var s,
						a,
						n,
						o,
						h,
						l,
						p,
						m,
						c,
						f,
						d,
						u,
						y = t._length,
						g = 0;
					for (i = 0; i < y; i += 1)
						s = t.v[i], n = t.o[i], a = t.i[i], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, m = u = s[1] - (s[1] - o[1]) * l, c = p - (p - s[0]) * roundCorner, f = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, c, f, d, u, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = c = s[0] + (o[0] - s[0]) * l, m = f = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, u = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, c, f, d, u, g), g += 1) : (r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
					return r
				},
				RoundCornersModifier.prototype.processShapes = function (t) {
					var e,
						i,
						r,
						s,
						a,
						n,
						o = this.shapes.length,
						h = this.rd.v;
					if (0 !== h)
						for (i = 0; i < o; i += 1) {
							if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
								for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1)
									n.addShape(this.processPath(e[r], h));
							a.shape.paths = a.localShapeCollection
						}
					this.dynamicProperties.length || (this._mdf = !1)
				},
				PolynomialBezier.prototype.point = function (t) {
					return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
				},
				PolynomialBezier.prototype.derivative = function (t) {
					return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
				},
				PolynomialBezier.prototype.tangentAngle = function (t) {
					var e = this.derivative(t);
					return Math.atan2(e[1], e[0])
				},
				PolynomialBezier.prototype.normalAngle = function (t) {
					var e = this.derivative(t);
					return Math.atan2(e[0], e[1])
				},
				PolynomialBezier.prototype.inflectionPoints = function () {
					var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
					if (floatZero(t))
						return [];
					var e = - .5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
						i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
					if (i < 0)
						return [];
					var r = Math.sqrt(i);
					return floatZero(r) ? r > 0 && r < 1 ? [e] : [] : [e - r, e + r].filter((function (t) {
						return t > 0 && t < 1
					}))
				},
				PolynomialBezier.prototype.split = function (t) {
					if (t <= 0)
						return [singlePoint(this.points[0]), this];
					if (t >= 1)
						return [this, singlePoint(this.points[this.points.length - 1])];
					var e = lerpPoint(this.points[0], this.points[1], t),
						i = lerpPoint(this.points[1], this.points[2], t),
						r = lerpPoint(this.points[2], this.points[3], t),
						s = lerpPoint(e, i, t),
						a = lerpPoint(i, r, t),
						n = lerpPoint(s, a, t);
					return [new PolynomialBezier(this.points[0], e, s, n, !0), new PolynomialBezier(n, a, r, this.points[3], !0)]
				},
				PolynomialBezier.prototype.bounds = function () {
					return {
						x: extrema(this, 0),
						y: extrema(this, 1)
					}
				},
				PolynomialBezier.prototype.boundingBox = function () {
					var t = this.bounds();
					return {
						left: t.x.min,
						right: t.x.max,
						top: t.y.min,
						bottom: t.y.max,
						width: t.x.max - t.x.min,
						height: t.y.max - t.y.min,
						cx: (t.x.max + t.x.min) / 2,
						cy: (t.y.max + t.y.min) / 2
					}
				},
				PolynomialBezier.prototype.intersections = function (t, e, i) {
					void 0 === e && (e = 2),
						void 0 === i && (i = 7);
					var r = [];
					return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, i),
						r
				},
				PolynomialBezier.shapeSegment = function (t, e) {
					var i = (e + 1) % t.length();
					return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0)
				},
				PolynomialBezier.shapeSegmentInverted = function (t, e) {
					var i = (e + 1) % t.length();
					return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0)
				},
				extendPrototype([ShapeModifier], ZigZagModifier),
				ZigZagModifier.prototype.initModifierProperties = function (t, e) {
					this.getValue = this.processKeys,
						this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this),
						this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this),
						this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this),
						this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
				},
				ZigZagModifier.prototype.processPath = function (t, e, i, r) {
					var s = t._length,
						a = shapePool.newElement();
					if (a.c = t.c, t.c || (s -= 1), 0 === s)
						return a;
					var n = -1,
						o = PolynomialBezier.shapeSegment(t, 0);
					zigZagCorner(a, t, 0, e, i, r, n);
					for (var h = 0; h < s; h += 1)
						n = zigZagSegment(a, o, e, i, r, -n), o = h !== s - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % s) : null, zigZagCorner(a, t, h + 1, e, i, r, n);
					return a
				},
				ZigZagModifier.prototype.processShapes = function (t) {
					var e,
						i,
						r,
						s,
						a,
						n,
						o = this.shapes.length,
						h = this.amplitude.v,
						l = Math.max(0, Math.round(this.frequency.v)),
						p = this.pointsType.v;
					if (0 !== h)
						for (i = 0; i < o; i += 1) {
							if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
								for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1)
									n.addShape(this.processPath(e[r], h, l, p));
							a.shape.paths = a.localShapeCollection
						}
					this.dynamicProperties.length || (this._mdf = !1)
				},
				extendPrototype([ShapeModifier], OffsetPathModifier),
				OffsetPathModifier.prototype.initModifierProperties = function (t, e) {
					this.getValue = this.processKeys,
						this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
						this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this),
						this.lineJoin = e.lj,
						this._isAnimated = 0 !== this.amount.effectsSequence.length
				},
				OffsetPathModifier.prototype.processPath = function (t, e, i, r) {
					var s = shapePool.newElement();
					s.c = t.c;
					var a,
						n,
						o,
						h = t.length();
					t.c || (h -= 1);
					var l = [];
					for (a = 0; a < h; a += 1)
						o = PolynomialBezier.shapeSegment(t, a), l.push(offsetSegmentSplit(o, e));
					if (!t.c)
						for (a = h - 1; a >= 0; a -= 1)
							o = PolynomialBezier.shapeSegmentInverted(t, a), l.push(offsetSegmentSplit(o, e));
					l = pruneIntersections(l);
					var p = null,
						m = null;
					for (a = 0; a < l.length; a += 1) {
						var c = l[a];
						for (m && (p = joinLines(s, m, c[0], i, r)), m = c[c.length - 1], n = 0; n < c.length; n += 1)
							o = c[n], p && pointEqual(o.points[0], p) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), p = o.points[3]
					}
					return l.length && joinLines(s, m, l[0][0], i, r),
						s
				},
				OffsetPathModifier.prototype.processShapes = function (t) {
					var e,
						i,
						r,
						s,
						a,
						n,
						o = this.shapes.length,
						h = this.amount.v,
						l = this.miterLimit.v,
						p = this.lineJoin;
					if (0 !== h)
						for (i = 0; i < o; i += 1) {
							if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t)
								for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1)
									n.addShape(this.processPath(e[r], h, p, l));
							a.shape.paths = a.localShapeCollection
						}
					this.dynamicProperties.length || (this._mdf = !1)
				};
			var FontManager = function () {
				var t = {
					w: 0,
					size: 0,
					shapes: [],
					data: {
						shapes: []
					}
				},
					e = [];
				e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
				var i = 127988,
					r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
				function s(t, e) {
					var i = createTag("span");
					i.setAttribute("aria-hidden", !0),
						i.style.fontFamily = e;
					var r = createTag("span");
					r.innerText = "giItT1WQy@!-/#",
						i.style.position = "absolute",
						i.style.left = "-10000px",
						i.style.top = "-10000px",
						i.style.fontSize = "300px",
						i.style.fontVariant = "normal",
						i.style.fontStyle = "normal",
						i.style.fontWeight = "normal",
						i.style.letterSpacing = "0",
						i.appendChild(r),
						document.body.appendChild(i);
					var s = r.offsetWidth;
					return r.style.fontFamily = function (t) {
						var e,
							i = t.split(","),
							r = i.length,
							s = [];
						for (e = 0; e < r; e += 1)
							"sans-serif" !== i[e] && "monospace" !== i[e] && s.push(i[e]);
						return s.join(",")
					}
						(t) + ", " + e, {
						node: r,
						w: s,
						parent: i
					}
				}
				function a(t, e) {
					var i,
						r = document.body && e ? "svg" : "canvas",
						s = getFontProperties(t);
					if ("svg" === r) {
						var a = createNS("text");
						a.style.fontSize = "100px",
							a.setAttribute("font-family", t.fFamily),
							a.setAttribute("font-style", s.style),
							a.setAttribute("font-weight", s.weight),
							a.textContent = "1",
							t.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", t.fClass)) : a.style.fontFamily = t.fFamily,
							e.appendChild(a),
							i = a
					} else {
						var n = new OffscreenCanvas(500, 500).getContext("2d");
						n.font = s.style + " " + s.weight + " 100px " + t.fFamily,
							i = n
					}
					return {
						measureText: function (t) {
							return "svg" === r ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
						}
					}
				}
				function n(t) {
					var e = 0,
						i = t.charCodeAt(0);
					if (i >= 55296 && i <= 56319) {
						var r = t.charCodeAt(1);
						r >= 56320 && r <= 57343 && (e = 1024 * (i - 55296) + r - 56320 + 65536)
					}
					return e
				}
				function o(t) {
					var e = n(t);
					return e >= 127462 && e <= 127487
				}
				var h = function () {
					this.fonts = [],
						this.chars = null,
						this.typekitLoaded = 0,
						this.isLoaded = !1,
						this._warned = !1,
						this.initTime = Date.now(),
						this.setIsLoadedBinded = this.setIsLoaded.bind(this),
						this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
				};
				h.isModifier = function (t, e) {
					var i = t.toString(16) + e.toString(16);
					return -1 !== r.indexOf(i)
				},
					h.isZeroWidthJoiner = function (t) {
						return 8205 === t
					},
					h.isFlagEmoji = function (t) {
						return o(t.substr(0, 2)) && o(t.substr(2, 2))
					},
					h.isRegionalCode = o,
					h.isCombinedCharacter = function (t) {
						return -1 !== e.indexOf(t)
					},
					h.isRegionalFlag = function (t, e) {
						var r = n(t.substr(e, 2));
						if (r !== i)
							return !1;
						var s = 0;
						for (e += 2; s < 5;) {
							if ((r = n(t.substr(e, 2))) < 917601 || r > 917626)
								return !1;
							s += 1,
								e += 2
						}
						return 917631 === n(t.substr(e, 2))
					},
					h.isVariationSelector = function (t) {
						return 65039 === t
					},
					h.BLACK_FLAG_CODE_POINT = i;
				var l = {
					addChars: function (t) {
						if (t) {
							var e;
							this.chars || (this.chars = []);
							var i,
								r,
								s = t.length,
								a = this.chars.length;
							for (e = 0; e < s; e += 1) {
								for (i = 0, r = !1; i < a;)
									this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
								r || (this.chars.push(t[e]), a += 1)
							}
						}
					},
					addFonts: function (t, e) {
						if (t) {
							if (this.chars)
								return this.isLoaded = !0, void (this.fonts = t.list);
							if (!document.body)
								return this.isLoaded = !0, t.list.forEach((function (t) {
									t.helper = a(t),
										t.cache = {}
								})), void (this.fonts = t.list);
							var i,
								r = t.list,
								n = r.length,
								o = n;
							for (i = 0; i < n; i += 1) {
								var h,
									l,
									p = !0;
								if (r[i].loaded = !1, r[i].monoCase = s(r[i].fFamily, "monospace"), r[i].sansCase = s(r[i].fFamily, "sans-serif"), r[i].fPath) {
									if ("p" === r[i].fOrigin || 3 === r[i].origin) {
										if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]')).length > 0 && (p = !1), p) {
											var m = createTag("style");
											m.setAttribute("f-forigin", r[i].fOrigin),
												m.setAttribute("f-origin", r[i].origin),
												m.setAttribute("f-family", r[i].fFamily),
												m.type = "text/css",
												m.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}",
												e.appendChild(m)
										}
									} else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
										for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1)
											- 1 !== h[l].href.indexOf(r[i].fPath) && (p = !1);
										if (p) {
											var c = createTag("link");
											c.setAttribute("f-forigin", r[i].fOrigin),
												c.setAttribute("f-origin", r[i].origin),
												c.type = "text/css",
												c.rel = "stylesheet",
												c.href = r[i].fPath,
												document.body.appendChild(c)
										}
									} else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
										for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1)
											r[i].fPath === h[l].src && (p = !1);
										if (p) {
											var f = createTag("link");
											f.setAttribute("f-forigin", r[i].fOrigin),
												f.setAttribute("f-origin", r[i].origin),
												f.setAttribute("rel", "stylesheet"),
												f.setAttribute("href", r[i].fPath),
												e.appendChild(f)
										}
									}
								} else
									r[i].loaded = !0, o -= 1;
								r[i].helper = a(r[i], e),
									r[i].cache = {},
									this.fonts.push(r[i])
							}
							0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
						} else
							this.isLoaded = !0
					},
					getCharData: function (e, i, r) {
						for (var s = 0, a = this.chars.length; s < a;) {
							if (this.chars[s].ch === e && this.chars[s].style === i && this.chars[s].fFamily === r)
								return this.chars[s];
							s += 1
						}
						return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, r)),
							t
					},
					getFontByName: function (t) {
						for (var e = 0, i = this.fonts.length; e < i;) {
							if (this.fonts[e].fName === t)
								return this.fonts[e];
							e += 1
						}
						return this.fonts[0]
					},
					measureText: function (t, e, i) {
						var r = this.getFontByName(e),
							s = t;
						if (!r.cache[s]) {
							var a = r.helper;
							if (" " === t) {
								var n = a.measureText("|" + t + "|"),
									o = a.measureText("||");
								r.cache[s] = (n - o) / 100
							} else
								r.cache[s] = a.measureText(t) / 100
						}
						return r.cache[s] * i
					},
					checkLoadedFonts: function () {
						var t,
							e,
							i,
							r = this.fonts.length,
							s = r;
						for (t = 0; t < r; t += 1)
							this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
						0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
					},
					setIsLoaded: function () {
						this.isLoaded = !0
					}
				};
				return h.prototype = l,
					h
			}
				();
			function SlotManager(t) {
				this.animationData = t
			}
			function slotFactory(t) {
				return new SlotManager(t)
			}
			function RenderableElement() { }
			SlotManager.prototype.getProp = function (t) {
				return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
			},
				RenderableElement.prototype = {
					initRenderable: function () {
						this.isInRange = !1,
							this.hidden = !1,
							this.isTransparent = !1,
							this.renderableComponents = []
					},
					addRenderableComponent: function (t) {
						-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
					},
					removeRenderableComponent: function (t) {
						-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
					},
					prepareRenderableFrame: function (t) {
						this.checkLayerLimits(t)
					},
					checkTransparency: function () {
						this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
					},
					checkLayerLimits: function (t) {
						this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
					},
					renderRenderable: function () {
						var t,
							e = this.renderableComponents.length;
						for (t = 0; t < e; t += 1)
							this.renderableComponents[t].renderFrame(this._isFirstFrame)
					},
					sourceRectAtTime: function () {
						return {
							top: 0,
							left: 0,
							width: 100,
							height: 100
						}
					},
					getLayerSize: function () {
						return 5 === this.data.ty ? {
							w: this.data.textData.width,
							h: this.data.textData.height
						}
							: {
								w: this.data.width,
								h: this.data.height
							}
					}
				};
			var getBlendMode = (blendModeEnums = {
				0: "source-over",
				1: "multiply",
				2: "screen",
				3: "overlay",
				4: "darken",
				5: "lighten",
				6: "color-dodge",
				7: "color-burn",
				8: "hard-light",
				9: "soft-light",
				10: "difference",
				11: "exclusion",
				12: "hue",
				13: "saturation",
				14: "color",
				15: "luminosity"
			}, function (t) {
				return blendModeEnums[t] || ""
			}),
				blendModeEnums;
			function SliderEffect(t, e, i) {
				this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
			}
			function AngleEffect(t, e, i) {
				this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
			}
			function ColorEffect(t, e, i) {
				this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
			}
			function PointEffect(t, e, i) {
				this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
			}
			function LayerIndexEffect(t, e, i) {
				this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
			}
			function MaskIndexEffect(t, e, i) {
				this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
			}
			function CheckboxEffect(t, e, i) {
				this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
			}
			function NoValueEffect() {
				this.p = {}
			}
			function EffectsManager(t, e) {
				var i,
					r = t.ef || [];
				this.effectElements = [];
				var s,
					a = r.length;
				for (i = 0; i < a; i += 1)
					s = new GroupEffect(r[i], e), this.effectElements.push(s)
			}
			function GroupEffect(t, e) {
				this.init(t, e)
			}
			function BaseElement() { }
			function FrameElement() { }
			function FootageElement(t, e, i) {
				this.initFrame(),
					this.initRenderable(),
					this.assetData = e.getAssetData(t.refId),
					this.footageData = e.imageLoader.getAsset(this.assetData),
					this.initBaseData(t, e, i)
			}
			function AudioElement(t, e, i) {
				this.initFrame(),
					this.initRenderable(),
					this.assetData = e.getAssetData(t.refId),
					this.initBaseData(t, e, i),
					this._isPlaying = !1,
					this._canPlay = !1;
				var r = this.globalData.getAssetsPath(this.assetData);
				this.audio = this.globalData.audioController.createAudio(r),
					this._currentTime = 0,
					this.globalData.audioController.addAudio(this),
					this._volumeMultiplier = 1,
					this._volume = 1,
					this._previousVolume = null,
					this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
						_placeholder: !0
					},
					this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
						k: [100]
					}, 1, .01, this)
			}
			function BaseRenderer() { }
			extendPrototype([DynamicPropertyContainer], GroupEffect),
				GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
				GroupEffect.prototype.init = function (t, e) {
					var i;
					this.data = t,
						this.effectElements = [],
						this.initDynamicPropertyContainer(e);
					var r,
						s = this.data.ef.length,
						a = this.data.ef;
					for (i = 0; i < s; i += 1) {
						switch (r = null, a[i].ty) {
							case 0:
								r = new SliderEffect(a[i], e, this);
								break;
							case 1:
								r = new AngleEffect(a[i], e, this);
								break;
							case 2:
								r = new ColorEffect(a[i], e, this);
								break;
							case 3:
								r = new PointEffect(a[i], e, this);
								break;
							case 4:
							case 7:
								r = new CheckboxEffect(a[i], e, this);
								break;
							case 10:
								r = new LayerIndexEffect(a[i], e, this);
								break;
							case 11:
								r = new MaskIndexEffect(a[i], e, this);
								break;
							case 5:
								r = new EffectsManager(a[i], e);
								break;
							default:
								r = new NoValueEffect(a[i])
						}
						r && this.effectElements.push(r)
					}
				},
				BaseElement.prototype = {
					checkMasks: function () {
						if (!this.data.hasMask)
							return !1;
						for (var t = 0, e = this.data.masksProperties.length; t < e;) {
							if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl)
								return !0;
							t += 1
						}
						return !1
					},
					initExpressions: function () {
						var t = getExpressionInterfaces();
						if (t) {
							var e = t("layer"),
								i = t("effects"),
								r = t("shape"),
								s = t("text"),
								a = t("comp");
							this.layerInterface = e(this),
								this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
							var n = i.createEffectsInterface(this, this.layerInterface);
							this.layerInterface.registerEffectsInterface(n),
								0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface)
						}
					},
					setBlendMode: function () {
						var t = getBlendMode(this.data.bm);
						(this.baseElement || this.layerElement).style["mix-blend-mode"] = t
					},
					initBaseData: function (t, e, i) {
						this.globalData = e,
							this.comp = i,
							this.data = t,
							this.layerId = createElementID(),
							this.data.sr || (this.data.sr = 1),
							this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
					},
					getType: function () {
						return this.type
					},
					sourceRectAtTime: function () { }
				},
				FrameElement.prototype = {
					initFrame: function () {
						this._isFirstFrame = !1,
							this.dynamicProperties = [],
							this._mdf = !1
					},
					prepareProperties: function (t, e) {
						var i,
							r = this.dynamicProperties.length;
						for (i = 0; i < r; i += 1)
							(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
					},
					addDynamicProperty: function (t) {
						-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
					}
				},
				FootageElement.prototype.prepareFrame = function () { },
				extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
				FootageElement.prototype.getBaseElement = function () {
					return null
				},
				FootageElement.prototype.renderFrame = function () { },
				FootageElement.prototype.destroy = function () { },
				FootageElement.prototype.initExpressions = function () {
					var t = getExpressionInterfaces();
					if (t) {
						var e = t("footage");
						this.layerInterface = e(this)
					}
				},
				FootageElement.prototype.getFootageData = function () {
					return this.footageData
				},
				AudioElement.prototype.prepareFrame = function (t) {
					if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder)
						this._currentTime = t / this.data.sr;
					else {
						var e = this.tm.v;
						this._currentTime = e
					}
					this._volume = this.lv.v[0];
					var i = this._volume * this._volumeMultiplier;
					this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
				},
				extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
				AudioElement.prototype.renderFrame = function () {
					this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
				},
				AudioElement.prototype.show = function () { },
				AudioElement.prototype.hide = function () {
					this.audio.pause(),
						this._isPlaying = !1
				},
				AudioElement.prototype.pause = function () {
					this.audio.pause(),
						this._isPlaying = !1,
						this._canPlay = !1
				},
				AudioElement.prototype.resume = function () {
					this._canPlay = !0
				},
				AudioElement.prototype.setRate = function (t) {
					this.audio.rate(t)
				},
				AudioElement.prototype.volume = function (t) {
					this._volumeMultiplier = t,
						this._previousVolume = t * this._volume,
						this.audio.volume(this._previousVolume)
				},
				AudioElement.prototype.getBaseElement = function () {
					return null
				},
				AudioElement.prototype.destroy = function () { },
				AudioElement.prototype.sourceRectAtTime = function () { },
				AudioElement.prototype.initExpressions = function () { },
				BaseRenderer.prototype.checkLayers = function (t) {
					var e,
						i,
						r = this.layers.length;
					for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1)
						this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
					this.checkPendingElements()
				},
				BaseRenderer.prototype.createItem = function (t) {
					switch (t.ty) {
						case 2:
							return this.createImage(t);
						case 0:
							return this.createComp(t);
						case 1:
							return this.createSolid(t);
						case 3:
						default:
							return this.createNull(t);
						case 4:
							return this.createShape(t);
						case 5:
							return this.createText(t);
						case 6:
							return this.createAudio(t);
						case 13:
							return this.createCamera(t);
						case 15:
							return this.createFootage(t)
					}
				},
				BaseRenderer.prototype.createCamera = function () {
					throw new Error("You're using a 3d camera. Try the html renderer.")
				},
				BaseRenderer.prototype.createAudio = function (t) {
					return new AudioElement(t, this.globalData, this)
				},
				BaseRenderer.prototype.createFootage = function (t) {
					return new FootageElement(t, this.globalData, this)
				},
				BaseRenderer.prototype.buildAllItems = function () {
					var t,
						e = this.layers.length;
					for (t = 0; t < e; t += 1)
						this.buildItem(t);
					this.checkPendingElements()
				},
				BaseRenderer.prototype.includeLayers = function (t) {
					var e;
					this.completeLayers = !1;
					var i,
						r = t.length,
						s = this.layers.length;
					for (e = 0; e < r; e += 1)
						for (i = 0; i < s;) {
							if (this.layers[i].id === t[e].id) {
								this.layers[i] = t[e];
								break
							}
							i += 1
						}
				},
				BaseRenderer.prototype.setProjectInterface = function (t) {
					this.globalData.projectInterface = t
				},
				BaseRenderer.prototype.initItems = function () {
					this.globalData.progressiveLoad || this.buildAllItems()
				},
				BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
					for (var r = this.elements, s = this.layers, a = 0, n = s.length; a < n;)
						s[a].ind == e && (r[a] && !0 !== r[a] ? (i.push(r[a]), r[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
				},
				BaseRenderer.prototype.addPendingElement = function (t) {
					this.pendingElements.push(t)
				},
				BaseRenderer.prototype.searchExtraCompositions = function (t) {
					var e,
						i = t.length;
					for (e = 0; e < i; e += 1)
						if (t[e].xt) {
							var r = this.createComp(t[e]);
							r.initExpressions(),
								this.globalData.projectInterface.registerComposition(r)
						}
				},
				BaseRenderer.prototype.getElementById = function (t) {
					var e,
						i = this.elements.length;
					for (e = 0; e < i; e += 1)
						if (this.elements[e].data.ind === t)
							return this.elements[e];
					return null
				},
				BaseRenderer.prototype.getElementByPath = function (t) {
					var e,
						i = t.shift();
					if ("number" == typeof i)
						e = this.elements[i];
					else {
						var r,
							s = this.elements.length;
						for (r = 0; r < s; r += 1)
							if (this.elements[r].data.nm === i) {
								e = this.elements[r];
								break
							}
					}
					return 0 === t.length ? e : e.getElementByPath(t)
				},
				BaseRenderer.prototype.setupGlobalData = function (t, e) {
					this.globalData.fontManager = new FontManager,
						this.globalData.slotManager = slotFactory(t),
						this.globalData.fontManager.addChars(t.chars),
						this.globalData.fontManager.addFonts(t.fonts, e),
						this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
						this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
						this.globalData.imageLoader = this.animationItem.imagePreloader,
						this.globalData.audioController = this.animationItem.audioController,
						this.globalData.frameId = 0,
						this.globalData.frameRate = t.fr,
						this.globalData.nm = t.nm,
						this.globalData.compSize = {
							w: t.w,
							h: t.h
						}
				};
			var effectTypes = {
				TRANSFORM_EFFECT: "transformEFfect"
			};
			function TransformElement() { }
			function MaskElement(t, e, i) {
				this.data = t,
					this.element = e,
					this.globalData = i,
					this.storedData = [],
					this.masksProperties = this.data.masksProperties || [],
					this.maskElement = null;
				var r,
					s,
					a = this.globalData.defs,
					n = this.masksProperties ? this.masksProperties.length : 0;
				this.viewData = createSizedArray(n),
					this.solidPath = "";
				var o,
					h,
					l,
					p,
					m,
					c,
					f = this.masksProperties,
					d = 0,
					u = [],
					y = createElementID(),
					g = "clipPath",
					v = "clip-path";
				for (r = 0; r < n; r += 1)
					if (("a" !== f[r].mode && "n" !== f[r].mode || f[r].inv || 100 !== f[r].o.k || f[r].o.x) && (g = "mask", v = "mask"), "s" !== f[r].mode && "i" !== f[r].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), s = createNS("path"), "n" === f[r].mode)
						this.viewData[r] = {
							op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
							prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
							elem: s,
							lastPath: ""
						},
							a.appendChild(s);
					else {
						var b;
						if (d += 1, s.setAttribute("fill", "s" === f[r].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== f[r].x.k ? (g = "mask", v = "mask", c = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (m = createNS("feMorphology")).setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), p.appendChild(m), a.appendChild(p), s.setAttribute("stroke", "s" === f[r].mode ? "#000000" : "#ffffff")) : (m = null, c = null), this.storedData[r] = {
							elem: s,
							x: c,
							expan: m,
							lastPath: "",
							lastOperator: "",
							filterId: b,
							lastRadius: 0
						}, "i" === f[r].mode) {
							h = u.length;
							var E = createNS("g");
							for (o = 0; o < h; o += 1)
								E.appendChild(u[o]);
							var P = createNS("mask");
							P.setAttribute("mask-type", "alpha"),
								P.setAttribute("id", y + "_" + d),
								P.appendChild(s),
								a.appendChild(P),
								E.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"),
								u.length = 0,
								u.push(E)
						} else
							u.push(s);
						f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
							this.viewData[r] = {
								elem: s,
								lastPath: "",
								op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
								prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
								invRect: l
							},
							this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r])
					}
				for (this.maskElement = createNS(g), n = u.length, r = 0; r < n; r += 1)
					this.maskElement.appendChild(u[r]);
				d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), a.appendChild(this.maskElement)),
					this.viewData.length && this.element.addRenderableComponent(this)
			}
			TransformElement.prototype = {
				initTransform: function () {
					var t = new Matrix;
					this.finalTransform = {
						mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
							o: 0
						},
						_matMdf: !1,
						_localMatMdf: !1,
						_opMdf: !1,
						mat: t,
						localMat: t,
						localOpacity: 1
					},
						this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
						this.data.ty
				},
				renderTransform: function () {
					if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
						var t,
							e = this.finalTransform.mat,
							i = 0,
							r = this.hierarchy.length;
						if (!this.finalTransform._matMdf)
							for (; i < r;) {
								if (this.hierarchy[i].finalTransform.mProp._mdf) {
									this.finalTransform._matMdf = !0;
									break
								}
								i += 1
							}
						if (this.finalTransform._matMdf)
							for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1)
								e.multiply(this.hierarchy[i].finalTransform.mProp.v)
					}
					this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf),
						this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
				},
				renderLocalTransform: function () {
					if (this.localTransforms) {
						var t = 0,
							e = this.localTransforms.length;
						if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
							for (; t < e;)
								this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
						if (this.finalTransform._localMatMdf) {
							var i = this.finalTransform.localMat;
							for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
								var r = this.localTransforms[t].matrix;
								i.multiply(r)
							}
							i.multiply(this.finalTransform.mat)
						}
						if (this.finalTransform._opMdf) {
							var s = this.finalTransform.localOpacity;
							for (t = 0; t < e; t += 1)
								s *= .01 * this.localTransforms[t].opacity;
							this.finalTransform.localOpacity = s
						}
					}
				},
				searchEffectTransforms: function () {
					if (this.renderableEffectsManager) {
						var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
						if (t.length) {
							this.localTransforms = [],
								this.finalTransform.localMat = new Matrix;
							var e = 0,
								i = t.length;
							for (e = 0; e < i; e += 1)
								this.localTransforms.push(t[e])
						}
					}
				},
				globalToLocal: function (t) {
					var e = [];
					e.push(this.finalTransform);
					for (var i, r = !0, s = this.comp; r;)
						s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : r = !1;
					var a,
						n = e.length;
					for (i = 0; i < n; i += 1)
						a = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
					return t
				},
				mHelper: new Matrix
			},
				MaskElement.prototype.getMaskProperty = function (t) {
					return this.viewData[t].prop
				},
				MaskElement.prototype.renderFrame = function (t) {
					var e,
						i = this.element.finalTransform.mat,
						r = this.masksProperties.length;
					for (e = 0; e < r; e += 1)
						if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
							var s = this.storedData[e].expan;
							this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
						}
				},
				MaskElement.prototype.getMaskelement = function () {
					return this.maskElement
				},
				MaskElement.prototype.createLayerSolidPath = function () {
					var t = "M0,0 ";
					return t += " h" + this.globalData.compSize.w,
						t += " v" + this.globalData.compSize.h,
						(t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
				},
				MaskElement.prototype.drawPath = function (t, e, i) {
					var r,
						s,
						a = " M" + e.v[0][0] + "," + e.v[0][1];
					for (s = e._length, r = 1; r < s; r += 1)
						a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
					if (e.c && s > 1 && (a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== a) {
						var n = "";
						i.elem && (e.c && (n = t.inv ? this.solidPath + a : a), i.elem.setAttribute("d", n)),
							i.lastPath = a
					}
				},
				MaskElement.prototype.destroy = function () {
					this.element = null,
						this.globalData = null,
						this.maskElement = null,
						this.data = null,
						this.masksProperties = null
				};
			var filtersFactory = function () {
				var t = {
					createFilter: function (t, e) {
						var i = createNS("filter");
						return i.setAttribute("id", t),
							!0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")),
							i
					},
					createAlphaToLuminanceFilter: function () {
						var t = createNS("feColorMatrix");
						return t.setAttribute("type", "matrix"),
							t.setAttribute("color-interpolation-filters", "sRGB"),
							t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
							t
					}
				};
				return t
			}
				(),
				featureSupport = function () {
					var t = {
						maskType: !0,
						svgLumaHidden: !0,
						offscreenCanvas: "undefined" != typeof OffscreenCanvas
					};
					return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1),
						/firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1),
						t
				}
					(),
				registeredEffects$1 = {},
				idPrefix = "filter_result_";
			function SVGEffects(t) {
				var e,
					i,
					r = "SourceGraphic",
					s = t.data.ef ? t.data.ef.length : 0,
					a = createElementID(),
					n = filtersFactory.createFilter(a, !0),
					o = 0;
				for (this.filters = [], e = 0; e < s; e += 1) {
					i = null;
					var h = t.data.ef[e].ty;
					registeredEffects$1[h] && (i = new (0, registeredEffects$1[h].effect)(n, t.effectsManager.effectElements[e], t, idPrefix + o, r), r = idPrefix + o, registeredEffects$1[h].countsAsEffect && (o += 1)),
						i && this.filters.push(i)
				}
				o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")),
					this.filters.length && t.addRenderableComponent(this)
			}
			function registerEffect$1(t, e, i) {
				registeredEffects$1[t] = {
					effect: e,
					countsAsEffect: i
				}
			}
			function SVGBaseElement() { }
			function HierarchyElement() { }
			function RenderableDOMElement() { }
			function IImageElement(t, e, i) {
				this.assetData = e.getAssetData(t.refId),
					this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)),
					this.initElement(t, e, i),
					this.sourceRect = {
						top: 0,
						left: 0,
						width: this.assetData.w,
						height: this.assetData.h
					}
			}
			function ProcessedElement(t, e) {
				this.elem = t,
					this.pos = e
			}
			function IShapeElement() { }
			SVGEffects.prototype.renderFrame = function (t) {
				var e,
					i = this.filters.length;
				for (e = 0; e < i; e += 1)
					this.filters[e].renderFrame(t)
			},
				SVGEffects.prototype.getEffects = function (t) {
					var e,
						i = this.filters.length,
						r = [];
					for (e = 0; e < i; e += 1)
						this.filters[e].type === t && r.push(this.filters[e]);
					return r
				},
				SVGBaseElement.prototype = {
					initRendererElement: function () {
						this.layerElement = createNS("g")
					},
					createContainerElements: function () {
						this.matteElement = createNS("g"),
							this.transformedElement = this.layerElement,
							this.maskedElement = this.layerElement,
							this._sizeChanged = !1;
						var t = null;
						if (this.data.td) {
							this.matteMasks = {};
							var e = createNS("g");
							e.setAttribute("id", this.layerId),
								e.appendChild(this.layerElement),
								t = e,
								this.globalData.defs.appendChild(e)
						} else
							this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
						if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
							var i = createNS("clipPath"),
								r = createNS("path");
							r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
							var s = createElementID();
							if (i.setAttribute("id", s), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
								var a = createNS("g");
								a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"),
									a.appendChild(this.layerElement),
									this.transformedElement = a,
									t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
							} else
								this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")")
						}
						0 !== this.data.bm && this.setBlendMode()
					},
					renderElement: function () {
						this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()),
							this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
					},
					destroyBaseElement: function () {
						this.layerElement = null,
							this.matteElement = null,
							this.maskManager.destroy()
					},
					getBaseElement: function () {
						return this.data.hd ? null : this.baseElement
					},
					createRenderableComponents: function () {
						this.maskManager = new MaskElement(this.data, this, this.globalData),
							this.renderableEffectsManager = new SVGEffects(this),
							this.searchEffectTransforms()
					},
					getMatte: function (t) {
						if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
							var e,
								i,
								r,
								s,
								a = this.layerId + "_" + t;
							if (1 === t || 3 === t) {
								var n = createNS("mask");
								n.setAttribute("id", a),
									n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"),
									(r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
									n.appendChild(r),
									this.globalData.defs.appendChild(n),
									featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = createElementID(), i = filtersFactory.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (s = createNS("g")).appendChild(r), n.appendChild(s), s.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
							} else if (2 === t) {
								var o = createNS("mask");
								o.setAttribute("id", a),
									o.setAttribute("mask-type", "alpha");
								var h = createNS("g");
								o.appendChild(h),
									e = createElementID(),
									i = filtersFactory.createFilter(e);
								var l = createNS("feComponentTransfer");
								l.setAttribute("in", "SourceGraphic"),
									i.appendChild(l);
								var p = createNS("feFuncA");
								p.setAttribute("type", "table"),
									p.setAttribute("tableValues", "1.0 0.0"),
									l.appendChild(p),
									this.globalData.defs.appendChild(i);
								var m = createNS("rect");
								m.setAttribute("width", this.comp.data.w),
									m.setAttribute("height", this.comp.data.h),
									m.setAttribute("x", "0"),
									m.setAttribute("y", "0"),
									m.setAttribute("fill", "#ffffff"),
									m.setAttribute("opacity", "0"),
									h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"),
									h.appendChild(m),
									(r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
									h.appendChild(r),
									featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), h.appendChild(m), s.appendChild(this.layerElement), h.appendChild(s)),
									this.globalData.defs.appendChild(o)
							}
							this.matteMasks[t] = a
						}
						return this.matteMasks[t]
					},
					setMatte: function (t) {
						this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
					}
				},
				HierarchyElement.prototype = {
					initHierarchy: function () {
						this.hierarchy = [],
							this._isParent = !1,
							this.checkParenting()
					},
					setHierarchy: function (t) {
						this.hierarchy = t
					},
					setAsParent: function () {
						this._isParent = !0
					},
					checkParenting: function () {
						void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
					}
				},
				extendPrototype([RenderableElement, createProxyFunction({
					initElement: function (t, e, i) {
						this.initFrame(),
							this.initBaseData(t, e, i),
							this.initTransform(t, e, i),
							this.initHierarchy(),
							this.initRenderable(),
							this.initRendererElement(),
							this.createContainerElements(),
							this.createRenderableComponents(),
							this.createContent(),
							this.hide()
					},
					hide: function () {
						this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
					},
					show: function () {
						this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
					},
					renderFrame: function () {
						this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
					},
					renderInnerContent: function () { },
					prepareFrame: function (t) {
						this._mdf = !1,
							this.prepareRenderableFrame(t),
							this.prepareProperties(t, this.isInRange),
							this.checkTransparency()
					},
					destroy: function () {
						this.innerElem = null,
							this.destroyBaseElement()
					}
				})], RenderableDOMElement),
				extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
				IImageElement.prototype.createContent = function () {
					var t = this.globalData.getAssetsPath(this.assetData);
					this.innerElem = createNS("image"),
						this.innerElem.setAttribute("width", this.assetData.w + "px"),
						this.innerElem.setAttribute("height", this.assetData.h + "px"),
						this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
						this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
						this.layerElement.appendChild(this.innerElem)
				},
				IImageElement.prototype.sourceRectAtTime = function () {
					return this.sourceRect
				},
				IShapeElement.prototype = {
					addShapeToModifiers: function (t) {
						var e,
							i = this.shapeModifiers.length;
						for (e = 0; e < i; e += 1)
							this.shapeModifiers[e].addShape(t)
					},
					isShapeInAnimatedModifiers: function (t) {
						for (var e = this.shapeModifiers.length; 0 < e;)
							if (this.shapeModifiers[0].isAnimatedWithShape(t))
								return !0;
						return !1
					},
					renderModifiers: function () {
						if (this.shapeModifiers.length) {
							var t,
								e = this.shapes.length;
							for (t = 0; t < e; t += 1)
								this.shapes[t].sh.reset();
							for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
						}
					},
					searchProcessedElement: function (t) {
						for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
							if (e[i].elem === t)
								return e[i].pos;
							i += 1
						}
						return 0
					},
					addProcessedElement: function (t, e) {
						for (var i = this.processedElements, r = i.length; r;)
							if (i[r -= 1].elem === t)
								return void (i[r].pos = e);
						i.push(new ProcessedElement(t, e))
					},
					prepareFrame: function (t) {
						this.prepareRenderableFrame(t),
							this.prepareProperties(t, this.isInRange)
					}
				};
			var lineCapEnum = {
				1: "butt",
				2: "round",
				3: "square"
			},
				lineJoinEnum = {
					1: "miter",
					2: "round",
					3: "bevel"
				};
			function SVGShapeData(t, e, i) {
				this.caches = [],
					this.styles = [],
					this.transformers = t,
					this.lStr = "",
					this.sh = i,
					this.lvl = e,
					this._isAnimated = !!i.k;
				for (var r = 0, s = t.length; r < s;) {
					if (t[r].mProps.dynamicProperties.length) {
						this._isAnimated = !0;
						break
					}
					r += 1
				}
			}
			function SVGStyleData(t, e) {
				this.data = t,
					this.type = t.ty,
					this.d = "",
					this.lvl = e,
					this._mdf = !1,
					this.closed = !0 === t.hd,
					this.pElem = createNS("path"),
					this.msElem = null
			}
			function DashProperty(t, e, i, r) {
				var s;
				this.elem = t,
					this.frameId = -1,
					this.dataProps = createSizedArray(e.length),
					this.renderer = i,
					this.k = !1,
					this.dashStr = "",
					this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0),
					this.dashoffset = createTypedArray("float32", 1),
					this.initDynamicPropertyContainer(r);
				var a,
					n = e.length || 0;
				for (s = 0; s < n; s += 1)
					a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
						n: e[s].n,
						p: a
					};
				this.k || this.getValue(!0),
					this._isAnimated = this.k
			}
			function SVGStrokeStyleData(t, e, i) {
				this.initDynamicPropertyContainer(t),
					this.getValue = this.iterateDynamicProperties,
					this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
					this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
					this.d = new DashProperty(t, e.d || {}, "svg", this),
					this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
					this.style = i,
					this._isAnimated = !!this._isAnimated
			}
			function SVGFillStyleData(t, e, i) {
				this.initDynamicPropertyContainer(t),
					this.getValue = this.iterateDynamicProperties,
					this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
					this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
					this.style = i
			}
			function SVGNoStyleData(t, e, i) {
				this.initDynamicPropertyContainer(t),
					this.getValue = this.iterateDynamicProperties,
					this.style = i
			}
			function GradientProperty(t, e, i) {
				this.data = e,
					this.c = createTypedArray("uint8c", 4 * e.p);
				var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
				this.o = createTypedArray("float32", r),
					this._cmdf = !1,
					this._omdf = !1,
					this._collapsable = this.checkCollapsable(),
					this._hasOpacity = r,
					this.initDynamicPropertyContainer(i),
					this.prop = PropertyFactory.getProp(t, e.k, 1, null, this),
					this.k = this.prop.k,
					this.getValue(!0)
			}
			function SVGGradientFillStyleData(t, e, i) {
				this.initDynamicPropertyContainer(t),
					this.getValue = this.iterateDynamicProperties,
					this.initGradientData(t, e, i)
			}
			function SVGGradientStrokeStyleData(t, e, i) {
				this.initDynamicPropertyContainer(t),
					this.getValue = this.iterateDynamicProperties,
					this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
					this.d = new DashProperty(t, e.d || {}, "svg", this),
					this.initGradientData(t, e, i),
					this._isAnimated = !!this._isAnimated
			}
			function ShapeGroupData() {
				this.it = [],
					this.prevViewData = [],
					this.gr = createNS("g")
			}
			function SVGTransformData(t, e, i) {
				this.transform = {
					mProps: t,
					op: e,
					container: i
				},
					this.elements = [],
					this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
			}
			SVGShapeData.prototype.setAsAnimated = function () {
				this._isAnimated = !0
			},
				SVGStyleData.prototype.reset = function () {
					this.d = "",
						this._mdf = !1
				},
				DashProperty.prototype.getValue = function (t) {
					if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
						var e = 0,
							i = this.dataProps.length;
						for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1)
							"o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
					}
				},
				extendPrototype([DynamicPropertyContainer], DashProperty),
				extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
				extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
				extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
				GradientProperty.prototype.comparePoints = function (t, e) {
					for (var i = 0, r = this.o.length / 2; i < r;) {
						if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01)
							return !1;
						i += 1
					}
					return !0
				},
				GradientProperty.prototype.checkCollapsable = function () {
					if (this.o.length / 2 != this.c.length / 4)
						return !1;
					if (this.data.k.k[0].s)
						for (var t = 0, e = this.data.k.k.length; t < e;) {
							if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
								return !1;
							t += 1
						}
					else if (!this.comparePoints(this.data.k.k, this.data.p))
						return !1;
					return !0
				},
				GradientProperty.prototype.getValue = function (t) {
					if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
						var e,
							i,
							r,
							s = 4 * this.data.p;
						for (e = 0; e < s; e += 1)
							i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
						if (this.o.length)
							for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1)
								i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
						this._mdf = !t
					}
				},
				extendPrototype([DynamicPropertyContainer], GradientProperty),
				SVGGradientFillStyleData.prototype.initGradientData = function (t, e, i) {
					this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
						this.s = PropertyFactory.getProp(t, e.s, 1, null, this),
						this.e = PropertyFactory.getProp(t, e.e, 1, null, this),
						this.h = PropertyFactory.getProp(t, e.h || {
							k: 0
						}, 0, .01, this),
						this.a = PropertyFactory.getProp(t, e.a || {
							k: 0
						}, 0, degToRads, this),
						this.g = new GradientProperty(t, e.g, this),
						this.style = i,
						this.stops = [],
						this.setGradientData(i.pElem, e),
						this.setGradientOpacity(e, i),
						this._isAnimated = !!this._isAnimated
				},
				SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
					var i = createElementID(),
						r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
					r.setAttribute("id", i),
						r.setAttribute("spreadMethod", "pad"),
						r.setAttribute("gradientUnits", "userSpaceOnUse");
					var s,
						a,
						n,
						o = [];
					for (n = 4 * e.g.p, a = 0; a < n; a += 4)
						s = createNS("stop"), r.appendChild(s), o.push(s);
					t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"),
						this.gf = r,
						this.cst = o
				},
				SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
					if (this.g._hasOpacity && !this.g._collapsable) {
						var i,
							r,
							s,
							a = createNS("mask"),
							n = createNS("path");
						a.appendChild(n);
						var o = createElementID(),
							h = createElementID();
						a.setAttribute("id", h);
						var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
						l.setAttribute("id", o),
							l.setAttribute("spreadMethod", "pad"),
							l.setAttribute("gradientUnits", "userSpaceOnUse"),
							s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
						var p = this.stops;
						for (r = 4 * t.g.p; r < s; r += 2)
							(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
						n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"),
							"gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)),
							this.of = l,
							this.ms = a,
							this.ost = p,
							this.maskId = h,
							e.msElem = n
					}
				},
				extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
				extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
			var buildShapeString = function (t, e, i, r) {
				if (0 === e)
					return "";
				var s,
					a = t.o,
					n = t.i,
					o = t.v,
					h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
				for (s = 1; s < e; s += 1)
					h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[s][0], n[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
				return i && e && (h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"),
					h
			},
				SVGElementsRenderer = function () {
					var t = new Matrix,
						e = new Matrix;
					function i(t, e, i) {
						(i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v),
							(i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
					}
					function r() { }
					function s(i, r, s) {
						var a,
							n,
							o,
							h,
							l,
							p,
							m,
							c,
							f,
							d,
							u = r.styles.length,
							y = r.lvl;
						for (p = 0; p < u; p += 1) {
							if (h = r.sh._mdf || s, r.styles[p].lvl < y) {
								for (c = e.reset(), f = y - r.styles[p].lvl, d = r.transformers.length - 1; !h && f > 0;)
									h = r.transformers[d].mProps._mdf || h, f -= 1, d -= 1;
								if (h)
									for (f = y - r.styles[p].lvl, d = r.transformers.length - 1; f > 0;)
										c.multiply(r.transformers[d].mProps.v), f -= 1, d -= 1
							} else
								c = t;
							if (n = (m = r.sh.paths)._length, h) {
								for (o = "", a = 0; a < n; a += 1)
									(l = m.shapes[a]) && l._length && (o += buildShapeString(l, l._length, l.c, c));
								r.caches[p] = o
							} else
								o = r.caches[p];
							r.styles[p].d += !0 === i.hd ? "" : o,
								r.styles[p]._mdf = h || r.styles[p]._mdf
						}
					}
					function a(t, e, i) {
						var r = e.style;
						(e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
							(e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
					}
					function n(t, e, i) {
						o(t, e, i),
							h(0, e, i)
					}
					function o(t, e, i) {
						var r,
							s,
							a,
							n,
							o,
							h = e.gf,
							l = e.g._hasOpacity,
							p = e.s.v,
							m = e.e.v;
						if (e.o._mdf || i) {
							var c = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
							e.style.pElem.setAttribute(c, e.o.v)
						}
						if (e.s._mdf || i) {
							var f = 1 === t.t ? "x1" : "cx",
								d = "x1" === f ? "y1" : "cy";
							h.setAttribute(f, p[0]),
								h.setAttribute(d, p[1]),
								l && !e.g._collapsable && (e.of.setAttribute(f, p[0]), e.of.setAttribute(d, p[1]))
						}
						if (e.g._cmdf || i) {
							r = e.cst;
							var u = e.g.c;
							for (a = r.length, s = 0; s < a; s += 1)
								(n = r[s]).setAttribute("offset", u[4 * s] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * s + 1] + "," + u[4 * s + 2] + "," + u[4 * s + 3] + ")")
						}
						if (l && (e.g._omdf || i)) {
							var y = e.g.o;
							for (a = (r = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < a; s += 1)
								n = r[s], e.g._collapsable || n.setAttribute("offset", y[2 * s] + "%"), n.setAttribute("stop-opacity", y[2 * s + 1])
						}
						if (1 === t.t)
							(e.e._mdf || i) && (h.setAttribute("x2", m[0]), h.setAttribute("y2", m[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", m[0]), e.of.setAttribute("y2", m[1])));
						else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
							o || (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)));
							var g = Math.atan2(m[1] - p[1], m[0] - p[0]),
								v = e.h.v;
							v >= 1 ? v = .99 : v <= -1 && (v = - .99);
							var b = o * v,
								E = Math.cos(g + e.a.v) * b + p[0],
								P = Math.sin(g + e.a.v) * b + p[1];
							h.setAttribute("fx", E),
								h.setAttribute("fy", P),
								l && !e.g._collapsable && (e.of.setAttribute("fx", E), e.of.setAttribute("fy", P))
						}
					}
					function h(t, e, i) {
						var r = e.style,
							s = e.d;
						s && (s._mdf || i) && s.dashStr && (r.pElem.setAttribute("stroke-dasharray", s.dashStr), r.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])),
							e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
							(e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v),
							(e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
					}
					return {
						createRenderFunction: function (t) {
							switch (t.ty) {
								case "fl":
									return a;
								case "gf":
									return o;
								case "gs":
									return n;
								case "st":
									return h;
								case "sh":
								case "el":
								case "rc":
								case "sr":
									return s;
								case "tr":
									return i;
								case "no":
									return r;
								default:
									return null
							}
						}
					}
				}
					();
			function SVGShapeElement(t, e, i) {
				this.shapes = [],
					this.shapesData = t.shapes,
					this.stylesList = [],
					this.shapeModifiers = [],
					this.itemsData = [],
					this.processedElements = [],
					this.animatedContents = [],
					this.initElement(t, e, i),
					this.prevViewData = []
			}
			function LetterProps(t, e, i, r, s, a) {
				this.o = t,
					this.sw = e,
					this.sc = i,
					this.fc = r,
					this.m = s,
					this.p = a,
					this._mdf = {
						o: !0,
						sw: !!e,
						sc: !!i,
						fc: !!r,
						m: !0,
						p: !0
					}
			}
			function TextProperty(t, e) {
				this._frameId = initialDefaultFrame,
					this.pv = "",
					this.v = "",
					this.kf = !1,
					this._isFirstFrame = !0,
					this._mdf = !1,
					e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)),
					this.data = e,
					this.elem = t,
					this.comp = this.elem.comp,
					this.keysIndex = 0,
					this.canResize = !1,
					this.minimumFontSize = 1,
					this.effectsSequence = [],
					this.currentData = {
						ascent: 0,
						boxWidth: this.defaultBoxWidth,
						f: "",
						fStyle: "",
						fWeight: "",
						fc: "",
						j: "",
						justifyOffset: "",
						l: [],
						lh: 0,
						lineWidths: [],
						ls: "",
						of: "",
						s: "",
						sc: "",
						sw: 0,
						t: 0,
						tr: 0,
						sz: 0,
						ps: null,
						fillColorAnim: !1,
						strokeColorAnim: !1,
						strokeWidthAnim: !1,
						yOffset: 0,
						finalSize: 0,
						finalText: [],
						finalLineHeight: 0,
						__complete: !1
					},
					this.copyData(this.currentData, this.data.d.k[0].s),
					this.searchProperty() || this.completeTextData(this.currentData)
			}
			extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
				SVGShapeElement.prototype.initSecondaryElement = function () { },
				SVGShapeElement.prototype.identityMatrix = new Matrix,
				SVGShapeElement.prototype.buildExpressionInterface = function () { },
				SVGShapeElement.prototype.createContent = function () {
					this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
						this.filterUniqueShapes()
				},
				SVGShapeElement.prototype.filterUniqueShapes = function () {
					var t,
						e,
						i,
						r,
						s = this.shapes.length,
						a = this.stylesList.length,
						n = [],
						o = !1;
					for (i = 0; i < a; i += 1) {
						for (r = this.stylesList[i], o = !1, n.length = 0, t = 0; t < s; t += 1)
							- 1 !== (e = this.shapes[t]).styles.indexOf(r) && (n.push(e), o = e._isAnimated || o);
						n.length > 1 && o && this.setShapesAsAnimated(n)
					}
				},
				SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
					var e,
						i = t.length;
					for (e = 0; e < i; e += 1)
						t[e].setAsAnimated()
				},
				SVGShapeElement.prototype.createStyleElement = function (t, e) {
					var i,
						r = new SVGStyleData(t, e),
						s = r.pElem;
					return "st" === t.ty ? i = new SVGStrokeStyleData(this, t, r) : "fl" === t.ty ? i = new SVGFillStyleData(this, t, r) : "gf" === t.ty || "gs" === t.ty ? (i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new SVGNoStyleData(this, t, r)),
						"st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)),
						2 === t.r && s.setAttribute("fill-rule", "evenodd"),
						t.ln && s.setAttribute("id", t.ln),
						t.cl && s.setAttribute("class", t.cl),
						t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)),
						this.stylesList.push(r),
						this.addToAnimatedContents(t, i),
						i
				},
				SVGShapeElement.prototype.createGroupElement = function (t) {
					var e = new ShapeGroupData;
					return t.ln && e.gr.setAttribute("id", t.ln),
						t.cl && e.gr.setAttribute("class", t.cl),
						t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
						e
				},
				SVGShapeElement.prototype.createTransformElement = function (t, e) {
					var i = TransformPropertyFactory.getTransformProperty(this, t, this),
						r = new SVGTransformData(i, i.o, e);
					return this.addToAnimatedContents(t, r),
						r
				},
				SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
					var r = 4;
					"rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
					var s = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
					return this.shapes.push(s),
						this.addShapeToModifiers(s),
						this.addToAnimatedContents(t, s),
						s
				},
				SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
					for (var i = 0, r = this.animatedContents.length; i < r;) {
						if (this.animatedContents[i].element === e)
							return;
						i += 1
					}
					this.animatedContents.push({
						fn: SVGElementsRenderer.createRenderFunction(t),
						element: e,
						data: t
					})
				},
				SVGShapeElement.prototype.setElementStyles = function (t) {
					var e,
						i = t.styles,
						r = this.stylesList.length;
					for (e = 0; e < r; e += 1)
						this.stylesList[e].closed || i.push(this.stylesList[e])
				},
				SVGShapeElement.prototype.reloadShapes = function () {
					var t;
					this._isFirstFrame = !0;
					var e = this.itemsData.length;
					for (t = 0; t < e; t += 1)
						this.prevViewData[t] = this.itemsData[t];
					for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
						this.dynamicProperties[t].getValue();
					this.renderModifiers()
				},
				SVGShapeElement.prototype.searchShapes = function (t, e, i, r, s, a, n) {
					var o,
						h,
						l,
						p,
						m,
						c,
						f = [].concat(a),
						d = t.length - 1,
						u = [],
						y = [];
					for (o = d; o >= 0; o -= 1) {
						if ((c = this.searchProcessedElement(t[o])) ? e[o] = i[c - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty)
							c ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), u.push(e[o].style);
						else if ("gr" === t[o].ty) {
							if (c)
								for (l = e[o].it.length, h = 0; h < l; h += 1)
									e[o].prevViewData[h] = e[o].it[h];
							else
								e[o] = this.createGroupElement(t[o]);
							this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, f, n),
								t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr)
						} else
							"tr" === t[o].ty ? (c || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, f.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (c || (e[o] = this.createShapeElement(t[o], f, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (c ? (m = e[o]).closed = !1 : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), y.push(m)) : "rp" === t[o].ty && (c ? (m = e[o]).closed = !0 : (m = ShapeModifiers.getModifier(t[o].ty), e[o] = m, m.init(this, t, o, e), this.shapeModifiers.push(m), n = !1), y.push(m));
						this.addProcessedElement(t[o], o + 1)
					}
					for (d = u.length, o = 0; o < d; o += 1)
						u[o].closed = !0;
					for (d = y.length, o = 0; o < d; o += 1)
						y[o].closed = !0
				},
				SVGShapeElement.prototype.renderInnerContent = function () {
					var t;
					this.renderModifiers();
					var e = this.stylesList.length;
					for (t = 0; t < e; t += 1)
						this.stylesList[t].reset();
					for (this.renderShape(), t = 0; t < e; t += 1)
						(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
				},
				SVGShapeElement.prototype.renderShape = function () {
					var t,
						e,
						i = this.animatedContents.length;
					for (t = 0; t < i; t += 1)
						e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
				},
				SVGShapeElement.prototype.destroy = function () {
					this.destroyBaseElement(),
						this.shapesData = null,
						this.itemsData = null
				},
				LetterProps.prototype.update = function (t, e, i, r, s, a) {
					this._mdf.o = !1,
						this._mdf.sw = !1,
						this._mdf.sc = !1,
						this._mdf.fc = !1,
						this._mdf.m = !1,
						this._mdf.p = !1;
					var n = !1;
					return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0),
						this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0),
						this.sc !== i && (this.sc = i, this._mdf.sc = !0, n = !0),
						this.fc !== r && (this.fc = r, this._mdf.fc = !0, n = !0),
						this.m !== s && (this.m = s, this._mdf.m = !0, n = !0),
						!a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, n = !0),
						n
				},
				TextProperty.prototype.defaultBoxWidth = [0, 0],
				TextProperty.prototype.copyData = function (t, e) {
					for (var i in e)
						Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
					return t
				},
				TextProperty.prototype.setCurrentData = function (t) {
					t.__complete || this.completeTextData(t),
						this.currentData = t,
						this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
						this._mdf = !0
				},
				TextProperty.prototype.searchProperty = function () {
					return this.searchKeyframes()
				},
				TextProperty.prototype.searchKeyframes = function () {
					return this.kf = this.data.d.k.length > 1,
						this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
						this.kf
				},
				TextProperty.prototype.addEffect = function (t) {
					this.effectsSequence.push(t),
						this.elem.addDynamicProperty(this)
				},
				TextProperty.prototype.getValue = function (t) {
					if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
						this.currentData.t = this.data.d.k[this.keysIndex].s.t;
						var e = this.currentData,
							i = this.keysIndex;
						if (this.lock)
							this.setCurrentData(this.currentData);
						else {
							var r;
							this.lock = !0,
								this._mdf = !1;
							var s = this.effectsSequence.length,
								a = t || this.data.d.k[this.keysIndex].s;
							for (r = 0; r < s; r += 1)
								a = i !== this.keysIndex ? this.effectsSequence[r](a, a.t) : this.effectsSequence[r](this.currentData, a.t);
							e !== a && this.setCurrentData(a),
								this.v = this.currentData,
								this.pv = this.v,
								this.lock = !1,
								this.frameId = this.elem.globalData.frameId
						}
					}
				},
				TextProperty.prototype.getKeyframeValue = function () {
					for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);)
						i += 1;
					return this.keysIndex !== i && (this.keysIndex = i),
						this.data.d.k[this.keysIndex].s
				},
				TextProperty.prototype.buildFinalText = function (t) {
					for (var e, i, r = [], s = 0, a = t.length, n = !1, o = !1, h = ""; s < a;)
						n = o, o = !1, e = t.charCodeAt(s), h = t.charAt(s), FontManager.isCombinedCharacter(e) ? n = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, s) ? h = t.substr(s, 14) : (i = t.charCodeAt(s + 1)) >= 56320 && i <= 57343 && (FontManager.isModifier(e, i) ? (h = t.substr(s, 2), n = !0) : h = FontManager.isFlagEmoji(t.substr(s, 4)) ? t.substr(s, 4) : t.substr(s, 2)) : e > 56319 ? (i = t.charCodeAt(s + 1), FontManager.isVariationSelector(e) && (n = !0)) : FontManager.isZeroWidthJoiner(e) && (n = !0, o = !0), n ? (r[r.length - 1] += h, n = !1) : r.push(h), s += h.length;
					return r
				},
				TextProperty.prototype.completeTextData = function (t) {
					t.__complete = !0;
					var e,
						i,
						r,
						s,
						a,
						n,
						o,
						h = this.elem.globalData.fontManager,
						l = this.data,
						p = [],
						m = 0,
						c = l.m.g,
						f = 0,
						d = 0,
						u = 0,
						y = [],
						g = 0,
						v = 0,
						b = h.getFontByName(t.f),
						E = 0,
						P = getFontProperties(b);
					t.fWeight = P.weight,
						t.fStyle = P.style,
						t.finalSize = t.s,
						t.finalText = this.buildFinalText(t.t),
						i = t.finalText.length,
						t.finalLineHeight = t.lh;
					var x,
						C = t.tr / 1e3 * t.finalSize;
					if (t.sz)
						for (var S, _, T = !0, k = t.sz[0], A = t.sz[1]; T;) {
							S = 0,
								g = 0,
								i = (_ = this.buildFinalText(t.t)).length,
								C = t.tr / 1e3 * t.finalSize;
							var M = -1;
							for (e = 0; e < i; e += 1)
								x = _[e].charCodeAt(0), r = !1, " " === _[e] ? M = e : 13 !== x && 3 !== x || (g = 0, r = !0, S += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(_[e], b.fStyle, b.fFamily), E = r ? 0 : o.w * t.finalSize / 100) : E = h.measureText(_[e], t.f, t.finalSize), g + E > k && " " !== _[e] ? (-1 === M ? i += 1 : e = M, S += t.finalLineHeight || 1.2 * t.finalSize, _.splice(e, M === e ? 1 : 0, "\r"), M = -1, g = 0) : (g += E, g += C);
							S += b.ascent * t.finalSize / 100,
								this.canResize && t.finalSize > this.minimumFontSize && A < S ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = _, i = t.finalText.length, T = !1)
						}
					g = -C,
						E = 0;
					var D,
						I = 0;
					for (e = 0; e < i; e += 1)
						if (r = !1, 13 === (x = (D = t.finalText[e]).charCodeAt(0)) || 3 === x ? (I = 0, y.push(g), v = g > v ? g : v, g = -2 * C, s = "", r = !0, u += 1) : s = D, h.chars ? (o = h.getCharData(D, b.fStyle, h.getFontByName(t.f).fFamily), E = r ? 0 : o.w * t.finalSize / 100) : E = h.measureText(s, t.f, t.finalSize), " " === D ? I += E + C : (g += E + C + I, I = 0), p.push({
							l: E,
							an: E,
							add: f,
							n: r,
							anIndexes: [],
							val: s,
							line: u,
							animatorJustifyOffset: 0
						}), 2 == c) {
							if (f += E, "" === s || " " === s || e === i - 1) {
								for ("" !== s && " " !== s || (f -= E); d <= e;)
									p[d].an = f, p[d].ind = m, p[d].extra = E, d += 1;
								m += 1,
									f = 0
							}
						} else if (3 == c) {
							if (f += E, "" === s || e === i - 1) {
								for ("" === s && (f -= E); d <= e;)
									p[d].an = f, p[d].ind = m, p[d].extra = E, d += 1;
								f = 0,
									m += 1
							}
						} else
							p[m].ind = m, p[m].extra = 0, m += 1;
					if (t.l = p, v = g > v ? g : v, y.push(g), t.sz)
						t.boxWidth = t.sz[0], t.justifyOffset = 0;
					else
						switch (t.boxWidth = v, t.j) {
							case 1:
								t.justifyOffset = -t.boxWidth;
								break;
							case 2:
								t.justifyOffset = -t.boxWidth / 2;
								break;
							default:
								t.justifyOffset = 0
						}
					t.lineWidths = y;
					var F,
						w,
						L,
						B,
						V = l.a;
					n = V.length;
					var R = [];
					for (a = 0; a < n; a += 1) {
						for ((F = V[a]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), B = 0, L = F.s.b, e = 0; e < i; e += 1)
							(w = p[e]).anIndexes[a] = B, (1 == L && "" !== w.val || 2 == L && "" !== w.val && " " !== w.val || 3 == L && (w.n || " " == w.val || e == i - 1) || 4 == L && (w.n || e == i - 1)) && (1 === F.s.rn && R.push(B), B += 1);
						l.a[a].s.totalChars = B;
						var O,
							G = -1;
						if (1 === F.s.rn)
							for (e = 0; e < i; e += 1)
								G != (w = p[e]).anIndexes[a] && (G = w.anIndexes[a], O = R.splice(Math.floor(Math.random() * R.length), 1)[0]), w.anIndexes[a] = O
					}
					t.yOffset = t.finalLineHeight || 1.2 * t.finalSize,
						t.ls = t.ls || 0,
						t.ascent = b.ascent * t.finalSize / 100
				},
				TextProperty.prototype.updateDocumentData = function (t, e) {
					e = void 0 === e ? this.keysIndex : e;
					var i = this.copyData({}, this.data.d.k[e].s);
					i = this.copyData(i, t),
						this.data.d.k[e].s = i,
						this.recalculate(e),
						this.setCurrentData(i),
						this.elem.addDynamicProperty(this)
				},
				TextProperty.prototype.recalculate = function (t) {
					var e = this.data.d.k[t].s;
					e.__complete = !1,
						this.keysIndex = 0,
						this._isFirstFrame = !0,
						this.getValue(e)
				},
				TextProperty.prototype.canResizeFont = function (t) {
					this.canResize = t,
						this.recalculate(this.keysIndex),
						this.elem.addDynamicProperty(this)
				},
				TextProperty.prototype.setMinimumFontSize = function (t) {
					this.minimumFontSize = Math.floor(t) || 1,
						this.recalculate(this.keysIndex),
						this.elem.addDynamicProperty(this)
				};
			var TextSelectorProp = function () {
				var t = Math.max,
					e = Math.min,
					i = Math.floor;
				function r(t, e) {
					this._currentTextLength = -1,
						this.k = !1,
						this.data = e,
						this.elem = t,
						this.comp = t.comp,
						this.finalS = 0,
						this.finalE = 0,
						this.initDynamicPropertyContainer(t),
						this.s = PropertyFactory.getProp(t, e.s || {
							k: 0
						}, 0, 0, this),
						this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
							v: 100
						},
						this.o = PropertyFactory.getProp(t, e.o || {
							k: 0
						}, 0, 0, this),
						this.xe = PropertyFactory.getProp(t, e.xe || {
							k: 0
						}, 0, 0, this),
						this.ne = PropertyFactory.getProp(t, e.ne || {
							k: 0
						}, 0, 0, this),
						this.sm = PropertyFactory.getProp(t, e.sm || {
							k: 100
						}, 0, 0, this),
						this.a = PropertyFactory.getProp(t, e.a, 0, .01, this),
						this.dynamicProperties.length || this.getValue()
				}
				return r.prototype = {
					getMult: function (r) {
						this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
						var s = 0,
							a = 0,
							n = 1,
							o = 1;
						this.ne.v > 0 ? s = this.ne.v / 100 : a = -this.ne.v / 100,
							this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
						var h = BezierFactory.getBezierEasing(s, a, n, o).get,
							l = 0,
							p = this.finalS,
							m = this.finalE,
							c = this.data.sh;
						if (2 === c)
							l = h(l = m === p ? r >= m ? 1 : 0 : t(0, e(.5 / (m - p) + (r - p) / (m - p), 1)));
						else if (3 === c)
							l = h(l = m === p ? r >= m ? 0 : 1 : 1 - t(0, e(.5 / (m - p) + (r - p) / (m - p), 1)));
						else if (4 === c)
							m === p ? l = 0 : (l = t(0, e(.5 / (m - p) + (r - p) / (m - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
						else if (5 === c) {
							if (m === p)
								l = 0;
							else {
								var f = m - p,
									d = -f / 2 + (r = e(t(0, r + .5 - p), m - p)),
									u = f / 2;
								l = Math.sqrt(1 - d * d / (u * u))
							}
							l = h(l)
						} else
							6 === c ? (m === p ? l = 0 : (r = e(t(0, r + .5 - p), m - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (m - p))) / 2), l = h(l)) : (r >= i(p) && (l = t(0, e(r - p < 0 ? e(m, 1) - (p - r) : m - r, 1))), l = h(l));
						if (100 !== this.sm.v) {
							var y = .01 * this.sm.v;
							0 === y && (y = 1e-8);
							var g = .5 - .5 * y;
							l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1)
						}
						return l * this.a.v
					},
					getValue: function (t) {
						this.iterateDynamicProperties(),
							this._mdf = t || this._mdf,
							this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
							t && 2 === this.data.r && (this.e.v = this._currentTextLength);
						var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
							i = this.o.v / e,
							r = this.s.v / e + i,
							s = this.e.v / e + i;
						if (r > s) {
							var a = r;
							r = s,
								s = a
						}
						this.finalS = r,
							this.finalE = s
					}
				},
					extendPrototype([DynamicPropertyContainer], r), {
					getTextSelectorProp: function (t, e, i) {
						return new r(t, e)
					}
				}
			}
				();
			function TextAnimatorDataProperty(t, e, i) {
				var r = {
					propType: !1
				},
					s = PropertyFactory.getProp,
					a = e.a;
				this.a = {
					r: a.r ? s(t, a.r, 0, degToRads, i) : r,
					rx: a.rx ? s(t, a.rx, 0, degToRads, i) : r,
					ry: a.ry ? s(t, a.ry, 0, degToRads, i) : r,
					sk: a.sk ? s(t, a.sk, 0, degToRads, i) : r,
					sa: a.sa ? s(t, a.sa, 0, degToRads, i) : r,
					s: a.s ? s(t, a.s, 1, .01, i) : r,
					a: a.a ? s(t, a.a, 1, 0, i) : r,
					o: a.o ? s(t, a.o, 0, .01, i) : r,
					p: a.p ? s(t, a.p, 1, 0, i) : r,
					sw: a.sw ? s(t, a.sw, 0, 0, i) : r,
					sc: a.sc ? s(t, a.sc, 1, 0, i) : r,
					fc: a.fc ? s(t, a.fc, 1, 0, i) : r,
					fh: a.fh ? s(t, a.fh, 0, 0, i) : r,
					fs: a.fs ? s(t, a.fs, 0, .01, i) : r,
					fb: a.fb ? s(t, a.fb, 0, .01, i) : r,
					t: a.t ? s(t, a.t, 0, 0, i) : r
				},
					this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i),
					this.s.t = e.s.t
			}
			function TextAnimatorProperty(t, e, i) {
				this._isFirstFrame = !0,
					this._hasMaskedPath = !1,
					this._frameId = -1,
					this._textData = t,
					this._renderType = e,
					this._elem = i,
					this._animatorsData = createSizedArray(this._textData.a.length),
					this._pathData = {},
					this._moreOptions = {
						alignment: {}
					},
					this.renderedLetters = [],
					this.lettersChangedFlag = !1,
					this.initDynamicPropertyContainer(i)
			}
			function ITextElement() { }
			TextAnimatorProperty.prototype.searchProperties = function () {
				var t,
					e,
					i = this._textData.a.length,
					r = PropertyFactory.getProp;
				for (t = 0; t < i; t += 1)
					e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
				this._textData.p && "m" in this._textData.p ? (this._pathData = {
					a: r(this._elem, this._textData.p.a, 0, 0, this),
					f: r(this._elem, this._textData.p.f, 0, 0, this),
					l: r(this._elem, this._textData.p.l, 0, 0, this),
					r: r(this._elem, this._textData.p.r, 0, 0, this),
					p: r(this._elem, this._textData.p.p, 0, 0, this),
					m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
				}, this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
					this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
			},
				TextAnimatorProperty.prototype.getMeasures = function (t, e) {
					if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
						this._isFirstFrame = !1;
						var i,
							r,
							s,
							a,
							n,
							o,
							h,
							l,
							p,
							m,
							c,
							f,
							d,
							u,
							y,
							g,
							v,
							b,
							E,
							P = this._moreOptions.alignment.v,
							x = this._animatorsData,
							C = this._textData,
							S = this.mHelper,
							_ = this._renderType,
							T = this.renderedLetters.length,
							k = t.l;
						if (this._hasMaskedPath) {
							if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
								var A,
									M = E.v;
								for (this._pathData.r.v && (M = M.reverse()), n = {
									tLength: 0,
									segments: []
								}, a = M._length - 1, g = 0, s = 0; s < a; s += 1)
									A = bez.buildBezierData(M.v[s], M.v[s + 1], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[s + 1][0] - M.v[s + 1][0], M.i[s + 1][1] - M.v[s + 1][1]]), n.tLength += A.segmentLength, n.segments.push(A), g += A.segmentLength;
								s = a,
									E.v.c && (A = bez.buildBezierData(M.v[s], M.v[0], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), n.tLength += A.segmentLength, n.segments.push(A), g += A.segmentLength),
									this._pathData.pi = n
							}
							if (n = this._pathData.pi, o = this._pathData.f.v, c = 0, m = 1, l = 0, p = !0, u = n.segments, o < 0 && E.v.c)
								for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), m = (d = u[c = u.length - 1].points).length - 1; o < 0;)
									o += d[m].partialLength, (m -= 1) < 0 && (m = (d = u[c -= 1].points).length - 1);
							f = (d = u[c].points)[m - 1],
								y = (h = d[m]).partialLength
						}
						a = k.length,
							i = 0,
							r = 0;
						var D,
							I,
							F,
							w,
							L,
							B = 1.2 * t.finalSize * .714,
							V = !0;
						F = x.length;
						var R,
							O,
							G,
							z,
							N,
							H,
							q,
							j,
							W,
							$,
							Y,
							K,
							X = -1,
							J = o,
							Z = c,
							U = m,
							Q = -1,
							tt = "",
							et = this.defaultPropsArray;
						if (2 === t.j || 1 === t.j) {
							var it = 0,
								rt = 0,
								st = 2 === t.j ? - .5 : -1,
								at = 0,
								nt = !0;
							for (s = 0; s < a; s += 1)
								if (k[s].n) {
									for (it && (it += rt); at < s;)
										k[at].animatorJustifyOffset = it, at += 1;
									it = 0,
										nt = !0
								} else {
									for (I = 0; I < F; I += 1)
										(D = x[I].a).t.propType && (nt && 2 === t.j && (rt += D.t.v * st), (L = x[I].s.getMult(k[s].anIndexes[I], C.a[I].s.totalChars)).length ? it += D.t.v * L[0] * st : it += D.t.v * L * st);
									nt = !1
								}
							for (it && (it += rt); at < s;)
								k[at].animatorJustifyOffset = it, at += 1
						}
						for (s = 0; s < a; s += 1) {
							if (S.reset(), z = 1, k[s].n)
								i = 0, r += t.yOffset, r += V ? 1 : 0, o = J, V = !1, this._hasMaskedPath && (m = U, f = (d = u[c = Z].points)[m - 1], y = (h = d[m]).partialLength, l = 0), tt = "", Y = "", W = "", K = "", et = this.defaultPropsArray;
							else {
								if (this._hasMaskedPath) {
									if (Q !== k[s].line) {
										switch (t.j) {
											case 1:
												o += g - t.lineWidths[k[s].line];
												break;
											case 2:
												o += (g - t.lineWidths[k[s].line]) / 2
										}
										Q = k[s].line
									}
									X !== k[s].ind && (k[X] && (o += k[X].extra), o += k[s].an / 2, X = k[s].ind),
										o += P[0] * k[s].an * .005;
									var ot = 0;
									for (I = 0; I < F; I += 1)
										(D = x[I].a).p.propType && ((L = x[I].s.getMult(k[s].anIndexes[I], C.a[I].s.totalChars)).length ? ot += D.p.v[0] * L[0] : ot += D.p.v[0] * L), D.a.propType && ((L = x[I].s.getMult(k[s].anIndexes[I], C.a[I].s.totalChars)).length ? ot += D.a.v[0] * L[0] : ot += D.a.v[0] * L);
									for (p = !0, this._pathData.a.v && (o = .5 * k[0].an + (g - this._pathData.f.v - .5 * k[0].an - .5 * k[k.length - 1].an) * X / (a - 1), o += this._pathData.f.v); p;)
										l + y >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, O = f.point[0] + (h.point[0] - f.point[0]) * v, G = f.point[1] + (h.point[1] - f.point[1]) * v, S.translate(-P[0] * k[s].an * .005, -P[1] * B * .01), p = !1) : d && (l += h.partialLength, (m += 1) >= d.length && (m = 0, u[c += 1] ? d = u[c].points : E.v.c ? (m = 0, d = u[c = 0].points) : (l -= h.partialLength, d = null)), d && (f = h, y = (h = d[m]).partialLength));
									R = k[s].an / 2 - k[s].add,
										S.translate(-R, 0, 0)
								} else
									R = k[s].an / 2 - k[s].add, S.translate(-R, 0, 0), S.translate(-P[0] * k[s].an * .005, -P[1] * B * .01, 0);
								for (I = 0; I < F; I += 1)
									(D = x[I].a).t.propType && (L = x[I].s.getMult(k[s].anIndexes[I], C.a[I].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? L.length ? o += D.t.v * L[0] : o += D.t.v * L : L.length ? i += D.t.v * L[0] : i += D.t.v * L));
								for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]), I = 0; I < F; I += 1)
									(D = x[I].a).a.propType && ((L = x[I].s.getMult(k[s].anIndexes[I], C.a[I].s.totalChars)).length ? S.translate(-D.a.v[0] * L[0], -D.a.v[1] * L[1], D.a.v[2] * L[2]) : S.translate(-D.a.v[0] * L, -D.a.v[1] * L, D.a.v[2] * L));
								for (I = 0; I < F; I += 1)
									(D = x[I].a).s.propType && ((L = x[I].s.getMult(k[s].anIndexes[I], C.a[I].s.totalChars)).length ? S.scale(1 + (D.s.v[0] - 1) * L[0], 1 + (D.s.v[1] - 1) * L[1], 1) : S.scale(1 + (D.s.v[0] - 1) * L, 1 + (D.s.v[1] - 1) * L, 1));
								for (I = 0; I < F; I += 1) {
									if (D = x[I].a, L = x[I].s.getMult(k[s].anIndexes[I], C.a[I].s.totalChars), D.sk.propType && (L.length ? S.skewFromAxis(-D.sk.v * L[0], D.sa.v * L[1]) : S.skewFromAxis(-D.sk.v * L, D.sa.v * L)), D.r.propType && (L.length ? S.rotateZ(-D.r.v * L[2]) : S.rotateZ(-D.r.v * L)), D.ry.propType && (L.length ? S.rotateY(D.ry.v * L[1]) : S.rotateY(D.ry.v * L)), D.rx.propType && (L.length ? S.rotateX(D.rx.v * L[0]) : S.rotateX(D.rx.v * L)), D.o.propType && (L.length ? z += (D.o.v * L[0] - z) * L[0] : z += (D.o.v * L - z) * L), t.strokeWidthAnim && D.sw.propType && (L.length ? H += D.sw.v * L[0] : H += D.sw.v * L), t.strokeColorAnim && D.sc.propType)
										for (j = 0; j < 3; j += 1)
											L.length ? N[j] += (D.sc.v[j] - N[j]) * L[0] : N[j] += (D.sc.v[j] - N[j]) * L;
									if (t.fillColorAnim && t.fc) {
										if (D.fc.propType)
											for (j = 0; j < 3; j += 1)
												L.length ? q[j] += (D.fc.v[j] - q[j]) * L[0] : q[j] += (D.fc.v[j] - q[j]) * L;
										D.fh.propType && (q = L.length ? addHueToRGB(q, D.fh.v * L[0]) : addHueToRGB(q, D.fh.v * L)),
											D.fs.propType && (q = L.length ? addSaturationToRGB(q, D.fs.v * L[0]) : addSaturationToRGB(q, D.fs.v * L)),
											D.fb.propType && (q = L.length ? addBrightnessToRGB(q, D.fb.v * L[0]) : addBrightnessToRGB(q, D.fb.v * L))
									}
								}
								for (I = 0; I < F; I += 1)
									(D = x[I].a).p.propType && (L = x[I].s.getMult(k[s].anIndexes[I], C.a[I].s.totalChars), this._hasMaskedPath ? L.length ? S.translate(0, D.p.v[1] * L[0], -D.p.v[2] * L[1]) : S.translate(0, D.p.v[1] * L, -D.p.v[2] * L) : L.length ? S.translate(D.p.v[0] * L[0], D.p.v[1] * L[1], -D.p.v[2] * L[2]) : S.translate(D.p.v[0] * L, D.p.v[1] * L, -D.p.v[2] * L));
								if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && ($ = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"), this._hasMaskedPath) {
									if (S.translate(0, -t.ls), S.translate(0, P[1] * B * .01 + r, 0), this._pathData.p.v) {
										b = (h.point[1] - f.point[1]) / (h.point[0] - f.point[0]);
										var ht = 180 * Math.atan(b) / Math.PI;
										h.point[0] < f.point[0] && (ht += 180),
											S.rotate(-ht * Math.PI / 180)
									}
									S.translate(O, G, 0),
										o -= P[0] * k[s].an * .005,
										k[s + 1] && X !== k[s + 1].ind && (o += k[s].an / 2, o += .001 * t.tr * t.finalSize)
								} else {
									switch (S.translate(i, r, 0), t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
										case 1:
											S.translate(k[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[s].line]), 0, 0);
											break;
										case 2:
											S.translate(k[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[s].line]) / 2, 0, 0)
									}
									S.translate(0, -t.ls),
										S.translate(R, 0, 0),
										S.translate(P[0] * k[s].an * .005, P[1] * B * .01, 0),
										i += k[s].l + .001 * t.tr * t.finalSize
								}
								"html" === _ ? tt = S.toCSS() : "svg" === _ ? tt = S.to2dCSS() : et = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]],
									K = z
							}
							T <= s ? (w = new LetterProps(K, W, $, Y, tt, et), this.renderedLetters.push(w), T += 1, this.lettersChangedFlag = !0) : (w = this.renderedLetters[s], this.lettersChangedFlag = w.update(K, W, $, Y, tt, et) || this.lettersChangedFlag)
						}
					}
				},
				TextAnimatorProperty.prototype.getValue = function () {
					this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
				},
				TextAnimatorProperty.prototype.mHelper = new Matrix,
				TextAnimatorProperty.prototype.defaultPropsArray = [],
				extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
				ITextElement.prototype.initElement = function (t, e, i) {
					this.lettersChangedFlag = !0,
						this.initFrame(),
						this.initBaseData(t, e, i),
						this.textProperty = new TextProperty(this, t.t, this.dynamicProperties),
						this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this),
						this.initTransform(t, e, i),
						this.initHierarchy(),
						this.initRenderable(),
						this.initRendererElement(),
						this.createContainerElements(),
						this.createRenderableComponents(),
						this.createContent(),
						this.hide(),
						this.textAnimator.searchProperties(this.dynamicProperties)
				},
				ITextElement.prototype.prepareFrame = function (t) {
					this._mdf = !1,
						this.prepareRenderableFrame(t),
						this.prepareProperties(t, this.isInRange)
				},
				ITextElement.prototype.createPathShape = function (t, e) {
					var i,
						r,
						s = e.length,
						a = "";
					for (i = 0; i < s; i += 1)
						"sh" === e[i].ty && (r = e[i].ks.k, a += buildShapeString(r, r.i.length, !0, t));
					return a
				},
				ITextElement.prototype.updateDocumentData = function (t, e) {
					this.textProperty.updateDocumentData(t, e)
				},
				ITextElement.prototype.canResizeFont = function (t) {
					this.textProperty.canResizeFont(t)
				},
				ITextElement.prototype.setMinimumFontSize = function (t) {
					this.textProperty.setMinimumFontSize(t)
				},
				ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, i, r, s) {
					switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
						case 1:
							e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
							break;
						case 2:
							e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
					}
					e.translate(r, s, 0)
				},
				ITextElement.prototype.buildColor = function (t) {
					return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
				},
				ITextElement.prototype.emptyProp = new LetterProps,
				ITextElement.prototype.destroy = function () { },
				ITextElement.prototype.validateText = function () {
					(this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
				};
			var emptyShapeData = {
				shapes: []
			};
			function SVGTextLottieElement(t, e, i) {
				this.textSpans = [],
					this.renderType = "svg",
					this.initElement(t, e, i)
			}
			function ISolidElement(t, e, i) {
				this.initElement(t, e, i)
			}
			function NullElement(t, e, i) {
				this.initFrame(),
					this.initBaseData(t, e, i),
					this.initFrame(),
					this.initTransform(t, e, i),
					this.initHierarchy()
			}
			function SVGRendererBase() { }
			function ICompElement() { }
			function SVGCompElement(t, e, i) {
				this.layers = t.layers,
					this.supports3d = !0,
					this.completeLayers = !1,
					this.pendingElements = [],
					this.elements = this.layers ? createSizedArray(this.layers.length) : [],
					this.initElement(t, e, i),
					this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
						_placeholder: !0
					}
			}
			function SVGRenderer(t, e) {
				this.animationItem = t,
					this.layers = null,
					this.renderedFrame = -1,
					this.svgElement = createNS("svg");
				var i = "";
				if (e && e.title) {
					var r = createNS("title"),
						s = createElementID();
					r.setAttribute("id", s),
						r.textContent = e.title,
						this.svgElement.appendChild(r),
						i += s
				}
				if (e && e.description) {
					var a = createNS("desc"),
						n = createElementID();
					a.setAttribute("id", n),
						a.textContent = e.description,
						this.svgElement.appendChild(a),
						i += " " + n
				}
				i && this.svgElement.setAttribute("aria-labelledby", i);
				var o = createNS("defs");
				this.svgElement.appendChild(o);
				var h = createNS("g");
				this.svgElement.appendChild(h),
					this.layerElement = h,
					this.renderConfig = {
						preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
						imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
						contentVisibility: e && e.contentVisibility || "visible",
						progressiveLoad: e && e.progressiveLoad || !1,
						hideOnTransparent: !(e && !1 === e.hideOnTransparent),
						viewBoxOnly: e && e.viewBoxOnly || !1,
						viewBoxSize: e && e.viewBoxSize || !1,
						className: e && e.className || "",
						id: e && e.id || "",
						focusable: e && e.focusable,
						filterSize: {
							width: e && e.filterSize && e.filterSize.width || "100%",
							height: e && e.filterSize && e.filterSize.height || "100%",
							x: e && e.filterSize && e.filterSize.x || "0%",
							y: e && e.filterSize && e.filterSize.y || "0%"
						},
						width: e && e.width,
						height: e && e.height,
						runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
					},
					this.globalData = {
						_mdf: !1,
						frameNum: -1,
						defs: o,
						renderConfig: this.renderConfig
					},
					this.elements = [],
					this.pendingElements = [],
					this.destroyed = !1,
					this.rendererType = "svg"
			}
			function ShapeTransformManager() {
				this.sequences = {},
					this.sequenceList = [],
					this.transform_key_count = 0
			}
			extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
				SVGTextLottieElement.prototype.createContent = function () {
					this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
				},
				SVGTextLottieElement.prototype.buildTextContents = function (t) {
					for (var e = 0, i = t.length, r = [], s = ""; e < i;)
						t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
					return r.push(s),
						r
				},
				SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
					if (t.shapes && t.shapes.length) {
						var i = t.shapes[0];
						if (i.it) {
							var r = i.it[i.it.length - 1];
							r.s && (r.s.k[0] = e, r.s.k[1] = e)
						}
					}
					return t
				},
				SVGTextLottieElement.prototype.buildNewText = function () {
					var t,
						e;
					this.addDynamicProperty(this);
					var i = this.textProperty.currentData;
					this.renderedLetters = createSizedArray(i ? i.l.length : 0),
						i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
						i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)),
						this.layerElement.setAttribute("font-size", i.finalSize);
					var r = this.globalData.fontManager.getFontByName(i.f);
					if (r.fClass)
						this.layerElement.setAttribute("class", r.fClass);
					else {
						this.layerElement.setAttribute("font-family", r.fFamily);
						var s = i.fWeight,
							a = i.fStyle;
						this.layerElement.setAttribute("font-style", a),
							this.layerElement.setAttribute("font-weight", s)
					}
					this.layerElement.setAttribute("aria-label", i.t);
					var n,
						o = i.l || [],
						h = !!this.globalData.fontManager.chars;
					e = o.length;
					var l = this.mHelper,
						p = this.data.singleShape,
						m = 0,
						c = 0,
						f = !0,
						d = .001 * i.tr * i.finalSize;
					if (!p || h || i.sz) {
						var u,
							y = this.textSpans.length;
						for (t = 0; t < e; t += 1) {
							if (this.textSpans[t] || (this.textSpans[t] = {
								span: null,
								childSpan: null,
								glyph: null
							}), !h || !p || 0 === t) {
								if (n = y > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), y <= t) {
									if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, h) {
										var g = createNS("g");
										n.appendChild(g),
											this.textSpans[t].childSpan = g
									}
									this.textSpans[t].span = n,
										this.layerElement.appendChild(n)
								}
								n.style.display = "inherit"
							}
							if (l.reset(), p && (o[t].n && (m = -d, c += i.yOffset, c += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(i, l, o[t].line, m, c), m += o[t].l || 0, m += d), h) {
								var v;
								if (1 === (u = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t)
									v = new SVGCompElement(u.data, this.globalData, this);
								else {
									var b = emptyShapeData;
									u.data && u.data.shapes && (b = this.buildShapeData(u.data, i.finalSize)),
										v = new SVGShapeElement(b, this.globalData, this)
								}
								if (this.textSpans[t].glyph) {
									var E = this.textSpans[t].glyph;
									this.textSpans[t].childSpan.removeChild(E.layerElement),
										E.destroy()
								}
								this.textSpans[t].glyph = v,
									v._debug = !0,
									v.prepareFrame(0),
									v.renderFrame(),
									this.textSpans[t].childSpan.appendChild(v.layerElement),
									1 === u.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
							} else
								p && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
						}
						p && n && n.setAttribute("d", "")
					} else {
						var P = this.textContainer,
							x = "start";
						switch (i.j) {
							case 1:
								x = "end";
								break;
							case 2:
								x = "middle";
								break;
							default:
								x = "start"
						}
						P.setAttribute("text-anchor", x),
							P.setAttribute("letter-spacing", d);
						var C = this.buildTextContents(i.finalText);
						for (e = C.length, c = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)
							(n = this.textSpans[t].span || createNS("tspan")).textContent = C[t], n.setAttribute("x", 0), n.setAttribute("y", c), n.style.display = "inherit", P.appendChild(n), this.textSpans[t] || (this.textSpans[t] = {
								span: null,
								glyph: null
							}), this.textSpans[t].span = n, c += i.finalLineHeight;
						this.layerElement.appendChild(P)
					}
					for (; t < this.textSpans.length;)
						this.textSpans[t].span.style.display = "none", t += 1;
					this._sizeChanged = !0
				},
				SVGTextLottieElement.prototype.sourceRectAtTime = function () {
					if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
						this._sizeChanged = !1;
						var t = this.layerElement.getBBox();
						this.bbox = {
							top: t.y,
							left: t.x,
							width: t.width,
							height: t.height
						}
					}
					return this.bbox
				},
				SVGTextLottieElement.prototype.getValue = function () {
					var t,
						e,
						i = this.textSpans.length;
					for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)
						(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
				},
				SVGTextLottieElement.prototype.renderInnerContent = function () {
					if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
						var t,
							e;
						this._sizeChanged = !0;
						var i,
							r,
							s,
							a = this.textAnimator.renderedLetters,
							n = this.textProperty.currentData.l;
						for (e = n.length, t = 0; t < e; t += 1)
							n[t].n || (i = a[t], r = this.textSpans[t].span, (s = this.textSpans[t].glyph) && s.renderFrame(), i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
					}
				},
				extendPrototype([IImageElement], ISolidElement),
				ISolidElement.prototype.createContent = function () {
					var t = createNS("rect");
					t.setAttribute("width", this.data.sw),
						t.setAttribute("height", this.data.sh),
						t.setAttribute("fill", this.data.sc),
						this.layerElement.appendChild(t)
				},
				NullElement.prototype.prepareFrame = function (t) {
					this.prepareProperties(t, !0)
				},
				NullElement.prototype.renderFrame = function () { },
				NullElement.prototype.getBaseElement = function () {
					return null
				},
				NullElement.prototype.destroy = function () { },
				NullElement.prototype.sourceRectAtTime = function () { },
				NullElement.prototype.hide = function () { },
				extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
				extendPrototype([BaseRenderer], SVGRendererBase),
				SVGRendererBase.prototype.createNull = function (t) {
					return new NullElement(t, this.globalData, this)
				},
				SVGRendererBase.prototype.createShape = function (t) {
					return new SVGShapeElement(t, this.globalData, this)
				},
				SVGRendererBase.prototype.createText = function (t) {
					return new SVGTextLottieElement(t, this.globalData, this)
				},
				SVGRendererBase.prototype.createImage = function (t) {
					return new IImageElement(t, this.globalData, this)
				},
				SVGRendererBase.prototype.createSolid = function (t) {
					return new ISolidElement(t, this.globalData, this)
				},
				SVGRendererBase.prototype.configAnimation = function (t) {
					this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
						this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
						this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
						this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility),
						this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width),
						this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height),
						this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
						this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
						void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
						this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
						this.animationItem.wrapper.appendChild(this.svgElement);
					var e = this.globalData.defs;
					this.setupGlobalData(t, e),
						this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
						this.data = t;
					var i = createNS("clipPath"),
						r = createNS("rect");
					r.setAttribute("width", t.w),
						r.setAttribute("height", t.h),
						r.setAttribute("x", 0),
						r.setAttribute("y", 0);
					var s = createElementID();
					i.setAttribute("id", s),
						i.appendChild(r),
						this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"),
						e.appendChild(i),
						this.layers = t.layers,
						this.elements = createSizedArray(t.layers.length)
				},
				SVGRendererBase.prototype.destroy = function () {
					var t;
					this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
						this.layerElement = null,
						this.globalData.defs = null;
					var e = this.layers ? this.layers.length : 0;
					for (t = 0; t < e; t += 1)
						this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
					this.elements.length = 0,
						this.destroyed = !0,
						this.animationItem = null
				},
				SVGRendererBase.prototype.updateContainerSize = function () { },
				SVGRendererBase.prototype.findIndexByInd = function (t) {
					var e = 0,
						i = this.layers.length;
					for (e = 0; e < i; e += 1)
						if (this.layers[e].ind === t)
							return e;
					return -1
				},
				SVGRendererBase.prototype.buildItem = function (t) {
					var e = this.elements;
					if (!e[t] && 99 !== this.layers[t].ty) {
						e[t] = !0;
						var i = this.createItem(this.layers[t]);
						if (e[t] = i, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
							var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
							if (-1 === r)
								return;
							if (this.elements[r] && !0 !== this.elements[r]) {
								var s = e[r].getMatte(this.layers[t].tt);
								i.setMatte(s)
							} else
								this.buildItem(r), this.addPendingElement(i)
						}
					}
				},
				SVGRendererBase.prototype.checkPendingElements = function () {
					for (; this.pendingElements.length;) {
						var t = this.pendingElements.pop();
						if (t.checkParenting(), t.data.tt)
							for (var e = 0, i = this.elements.length; e < i;) {
								if (this.elements[e] === t) {
									var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
										s = this.elements[r].getMatte(this.layers[e].tt);
									t.setMatte(s);
									break
								}
								e += 1
							}
					}
				},
				SVGRendererBase.prototype.renderFrame = function (t) {
					if (this.renderedFrame !== t && !this.destroyed) {
						var e;
						null === t ? t = this.renderedFrame : this.renderedFrame = t,
							this.globalData.frameNum = t,
							this.globalData.frameId += 1,
							this.globalData.projectInterface.currentFrame = t,
							this.globalData._mdf = !1;
						var i = this.layers.length;
						for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)
							(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
						if (this.globalData._mdf)
							for (e = 0; e < i; e += 1)
								(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
					}
				},
				SVGRendererBase.prototype.appendElementInPos = function (t, e) {
					var i = t.getBaseElement();
					if (i) {
						for (var r, s = 0; s < e;)
							this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
						r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
					}
				},
				SVGRendererBase.prototype.hide = function () {
					this.layerElement.style.display = "none"
				},
				SVGRendererBase.prototype.show = function () {
					this.layerElement.style.display = "block"
				},
				extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
				ICompElement.prototype.initElement = function (t, e, i) {
					this.initFrame(),
						this.initBaseData(t, e, i),
						this.initTransform(t, e, i),
						this.initRenderable(),
						this.initHierarchy(),
						this.initRendererElement(),
						this.createContainerElements(),
						this.createRenderableComponents(),
						!this.data.xt && e.progressiveLoad || this.buildAllItems(),
						this.hide()
				},
				ICompElement.prototype.prepareFrame = function (t) {
					if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
						if (this.tm._placeholder)
							this.renderedFrame = t / this.data.sr;
						else {
							var e = this.tm.v;
							e === this.data.op && (e = this.data.op - 1),
								this.renderedFrame = e
						}
						var i,
							r = this.elements.length;
						for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)
							(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
					}
				},
				ICompElement.prototype.renderInnerContent = function () {
					var t,
						e = this.layers.length;
					for (t = 0; t < e; t += 1)
						(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
				},
				ICompElement.prototype.setElements = function (t) {
					this.elements = t
				},
				ICompElement.prototype.getElements = function () {
					return this.elements
				},
				ICompElement.prototype.destroyElements = function () {
					var t,
						e = this.layers.length;
					for (t = 0; t < e; t += 1)
						this.elements[t] && this.elements[t].destroy()
				},
				ICompElement.prototype.destroy = function () {
					this.destroyElements(),
						this.destroyBaseElement()
				},
				extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
				SVGCompElement.prototype.createComp = function (t) {
					return new SVGCompElement(t, this.globalData, this)
				},
				extendPrototype([SVGRendererBase], SVGRenderer),
				SVGRenderer.prototype.createComp = function (t) {
					return new SVGCompElement(t, this.globalData, this)
				},
				ShapeTransformManager.prototype = {
					addTransformSequence: function (t) {
						var e,
							i = t.length,
							r = "_";
						for (e = 0; e < i; e += 1)
							r += t[e].transform.key + "_";
						var s = this.sequences[r];
						return s || (s = {
							transforms: [].concat(t),
							finalTransform: new Matrix,
							_mdf: !1
						}, this.sequences[r] = s, this.sequenceList.push(s)),
							s
					},
					processSequence: function (t, e) {
						for (var i = 0, r = t.transforms.length, s = e; i < r && !e;) {
							if (t.transforms[i].transform.mProps._mdf) {
								s = !0;
								break
							}
							i += 1
						}
						if (s)
							for (t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1)
								t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
						t._mdf = s
					},
					processSequences: function (t) {
						var e,
							i = this.sequenceList.length;
						for (e = 0; e < i; e += 1)
							this.processSequence(this.sequenceList[e], t)
					},
					getNewKey: function () {
						return this.transform_key_count += 1,
							"_" + this.transform_key_count
					}
				};
			var lumaLoader = function () {
				var t = "__lottie_element_luma_buffer",
					e = null,
					i = null,
					r = null;
				function s() {
					var s,
						a,
						n;
					e || (s = createNS("svg"), a = createNS("filter"), n = createNS("feColorMatrix"), a.setAttribute("id", t), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), a.appendChild(n), s.appendChild(a), s.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (s.style.display = "none"), r = s, document.body.appendChild(r), e = createTag("canvas"), (i = e.getContext("2d")).filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
				}
				return {
					load: s,
					get: function (r) {
						return e || s(),
							e.width = r.width,
							e.height = r.height,
							i.filter = "url(#" + t + ")",
							e
					}
				}
			};
			function createCanvas(t, e) {
				if (featureSupport.offscreenCanvas)
					return new OffscreenCanvas(t, e);
				var i = createTag("canvas");
				return i.width = t,
					i.height = e,
					i
			}
			var assetLoader = {
				loadLumaCanvas: lumaLoader.load,
				getLumaCanvas: lumaLoader.get,
				createCanvas: createCanvas
			},
				registeredEffects = {};
			function CVEffects(t) {
				var e,
					i,
					r = t.data.ef ? t.data.ef.length : 0;
				for (this.filters = [], e = 0; e < r; e += 1) {
					i = null;
					var s = t.data.ef[e].ty;
					registeredEffects[s] && (i = new (0, registeredEffects[s].effect)(t.effectsManager.effectElements[e], t)),
						i && this.filters.push(i)
				}
				this.filters.length && t.addRenderableComponent(this)
			}
			function registerEffect(t, e) {
				registeredEffects[t] = {
					effect: e
				}
			}
			function CVMaskElement(t, e) {
				var i;
				this.data = t,
					this.element = e,
					this.masksProperties = this.data.masksProperties || [],
					this.viewData = createSizedArray(this.masksProperties.length);
				var r = this.masksProperties.length,
					s = !1;
				for (i = 0; i < r; i += 1)
					"n" !== this.masksProperties[i].mode && (s = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
				this.hasMasks = s,
					s && this.element.addRenderableComponent(this)
			}
			function CVBaseElement() { }
			CVEffects.prototype.renderFrame = function (t) {
				var e,
					i = this.filters.length;
				for (e = 0; e < i; e += 1)
					this.filters[e].renderFrame(t)
			},
				CVEffects.prototype.getEffects = function (t) {
					var e,
						i = this.filters.length,
						r = [];
					for (e = 0; e < i; e += 1)
						this.filters[e].type === t && r.push(this.filters[e]);
					return r
				},
				CVMaskElement.prototype.renderFrame = function () {
					if (this.hasMasks) {
						var t,
							e,
							i,
							r,
							s = this.element.finalTransform.mat,
							a = this.element.canvasContext,
							n = this.masksProperties.length;
						for (a.beginPath(), t = 0; t < n; t += 1)
							if ("n" !== this.masksProperties[t].mode) {
								var o;
								this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)),
									r = this.viewData[t].v,
									e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0),
									a.moveTo(e[0], e[1]);
								var h = r._length;
								for (o = 1; o < h; o += 1)
									i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
								i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]),
									a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
							}
						this.element.globalData.renderer.save(!0),
							a.clip()
					}
				},
				CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
				CVMaskElement.prototype.destroy = function () {
					this.element = null
				};
			var operationsMap = {
				1: "source-in",
				2: "source-out",
				3: "source-in",
				4: "source-out"
			};
			function CVShapeData(t, e, i, r) {
				this.styledShapes = [],
					this.tr = [0, 0, 0, 0, 0, 0];
				var s,
					a = 4;
				"rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7),
					this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
				var n,
					o = i.length;
				for (s = 0; s < o; s += 1)
					i[s].closed || (n = {
						transforms: r.addTransformSequence(i[s].transforms),
						trNodes: []
					}, this.styledShapes.push(n), i[s].elements.push(n))
			}
			function CVShapeElement(t, e, i) {
				this.shapes = [],
					this.shapesData = t.shapes,
					this.stylesList = [],
					this.itemsData = [],
					this.prevViewData = [],
					this.shapeModifiers = [],
					this.processedElements = [],
					this.transformsManager = new ShapeTransformManager,
					this.initElement(t, e, i)
			}
			function CVTextElement(t, e, i) {
				this.textSpans = [],
					this.yOffset = 0,
					this.fillColorAnim = !1,
					this.strokeColorAnim = !1,
					this.strokeWidthAnim = !1,
					this.stroke = !1,
					this.fill = !1,
					this.justifyOffset = 0,
					this.currentRender = null,
					this.renderType = "canvas",
					this.values = {
						fill: "rgba(0,0,0,0)",
						stroke: "rgba(0,0,0,0)",
						sWidth: 0,
						fValue: ""
					},
					this.initElement(t, e, i)
			}
			function CVImageElement(t, e, i) {
				this.assetData = e.getAssetData(t.refId),
					this.img = e.imageLoader.getAsset(this.assetData),
					this.initElement(t, e, i)
			}
			function CVSolidElement(t, e, i) {
				this.initElement(t, e, i)
			}
			function CanvasRendererBase() { }
			function CanvasContext() {
				this.opacity = -1,
					this.transform = createTypedArray("float32", 16),
					this.fillStyle = "",
					this.strokeStyle = "",
					this.lineWidth = "",
					this.lineCap = "",
					this.lineJoin = "",
					this.miterLimit = "",
					this.id = Math.random()
			}
			function CVContextData() {
				var t;
				for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, t = 0; t < 15; t += 1) {
					var e = new CanvasContext;
					this.stack[t] = e
				}
				this._length = 15,
					this.nativeContext = null,
					this.transformMat = new Matrix,
					this.currentOpacity = 1,
					this.currentFillStyle = "",
					this.appliedFillStyle = "",
					this.currentStrokeStyle = "",
					this.appliedStrokeStyle = "",
					this.currentLineWidth = "",
					this.appliedLineWidth = "",
					this.currentLineCap = "",
					this.appliedLineCap = "",
					this.currentLineJoin = "",
					this.appliedLineJoin = "",
					this.appliedMiterLimit = "",
					this.currentMiterLimit = ""
			}
			function CVCompElement(t, e, i) {
				this.completeLayers = !1,
					this.layers = t.layers,
					this.pendingElements = [],
					this.elements = createSizedArray(this.layers.length),
					this.initElement(t, e, i),
					this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
						_placeholder: !0
					}
			}
			function CanvasRenderer(t, e) {
				this.animationItem = t,
					this.renderConfig = {
						clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
						context: e && e.context || null,
						progressiveLoad: e && e.progressiveLoad || !1,
						preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
						imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
						contentVisibility: e && e.contentVisibility || "visible",
						className: e && e.className || "",
						id: e && e.id || "",
						runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
					},
					this.renderConfig.dpr = e && e.dpr || 1,
					this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1),
					this.renderedFrame = -1,
					this.globalData = {
						frameNum: -1,
						_mdf: !1,
						renderConfig: this.renderConfig,
						currentGlobalAlpha: -1
					},
					this.contextData = new CVContextData,
					this.elements = [],
					this.pendingElements = [],
					this.transformMat = new Matrix,
					this.completeLayers = !1,
					this.rendererType = "canvas",
					this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
			}
			function HBaseElement() { }
			function HSolidElement(t, e, i) {
				this.initElement(t, e, i)
			}
			function HShapeElement(t, e, i) {
				this.shapes = [],
					this.shapesData = t.shapes,
					this.stylesList = [],
					this.shapeModifiers = [],
					this.itemsData = [],
					this.processedElements = [],
					this.animatedContents = [],
					this.shapesContainer = createNS("g"),
					this.initElement(t, e, i),
					this.prevViewData = [],
					this.currentBBox = {
						x: 999999,
						y: -999999,
						h: 0,
						w: 0
					}
			}
			function HTextElement(t, e, i) {
				this.textSpans = [],
					this.textPaths = [],
					this.currentBBox = {
						x: 999999,
						y: -999999,
						h: 0,
						w: 0
					},
					this.renderType = "svg",
					this.isMasked = !1,
					this.initElement(t, e, i)
			}
			function HCameraElement(t, e, i) {
				this.initFrame(),
					this.initBaseData(t, e, i),
					this.initHierarchy();
				var r = PropertyFactory.getProp;
				if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
					var s,
						a = t.ks.or.k.length;
					for (s = 0; s < a; s += 1)
						t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
				}
				this.or = r(this, t.ks.or, 1, degToRads, this),
					this.or.sh = !0,
					this.rx = r(this, t.ks.rx, 0, degToRads, this),
					this.ry = r(this, t.ks.ry, 0, degToRads, this),
					this.rz = r(this, t.ks.rz, 0, degToRads, this),
					this.mat = new Matrix,
					this._prevMat = new Matrix,
					this._isFirstFrame = !0,
					this.finalTransform = {
						mProp: this
					}
			}
			function HImageElement(t, e, i) {
				this.assetData = e.getAssetData(t.refId),
					this.initElement(t, e, i)
			}
			function HybridRendererBase(t, e) {
				this.animationItem = t,
					this.layers = null,
					this.renderedFrame = -1,
					this.renderConfig = {
						className: e && e.className || "",
						imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
						hideOnTransparent: !(e && !1 === e.hideOnTransparent),
						filterSize: {
							width: e && e.filterSize && e.filterSize.width || "400%",
							height: e && e.filterSize && e.filterSize.height || "400%",
							x: e && e.filterSize && e.filterSize.x || "-100%",
							y: e && e.filterSize && e.filterSize.y || "-100%"
						}
					},
					this.globalData = {
						_mdf: !1,
						frameNum: -1,
						renderConfig: this.renderConfig
					},
					this.pendingElements = [],
					this.elements = [],
					this.threeDElements = [],
					this.destroyed = !1,
					this.camera = null,
					this.supports3d = !0,
					this.rendererType = "html"
			}
			function HCompElement(t, e, i) {
				this.layers = t.layers,
					this.supports3d = !t.hasMask,
					this.completeLayers = !1,
					this.pendingElements = [],
					this.elements = this.layers ? createSizedArray(this.layers.length) : [],
					this.initElement(t, e, i),
					this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
						_placeholder: !0
					}
			}
			function HybridRenderer(t, e) {
				this.animationItem = t,
					this.layers = null,
					this.renderedFrame = -1,
					this.renderConfig = {
						className: e && e.className || "",
						imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
						hideOnTransparent: !(e && !1 === e.hideOnTransparent),
						filterSize: {
							width: e && e.filterSize && e.filterSize.width || "400%",
							height: e && e.filterSize && e.filterSize.height || "400%",
							x: e && e.filterSize && e.filterSize.x || "-100%",
							y: e && e.filterSize && e.filterSize.y || "-100%"
						},
						runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
					},
					this.globalData = {
						_mdf: !1,
						frameNum: -1,
						renderConfig: this.renderConfig
					},
					this.pendingElements = [],
					this.elements = [],
					this.threeDElements = [],
					this.destroyed = !1,
					this.camera = null,
					this.supports3d = !0,
					this.rendererType = "html"
			}
			CVBaseElement.prototype = {
				createElements: function () { },
				initRendererElement: function () { },
				createContainerElements: function () {
					if (this.data.tt >= 1) {
						this.buffers = [];
						var t = this.globalData.canvasContext,
							e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
						this.buffers.push(e);
						var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
						this.buffers.push(i),
							this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
					}
					this.canvasContext = this.globalData.canvasContext,
						this.transformCanvas = this.globalData.transformCanvas,
						this.renderableEffectsManager = new CVEffects(this),
						this.searchEffectTransforms()
				},
				createContent: function () { },
				setBlendMode: function () {
					var t = this.globalData;
					if (t.blendMode !== this.data.bm) {
						t.blendMode = this.data.bm;
						var e = getBlendMode(this.data.bm);
						t.canvasContext.globalCompositeOperation = e
					}
				},
				createRenderableComponents: function () {
					this.maskManager = new CVMaskElement(this.data, this),
						this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
				},
				hideElement: function () {
					this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
				},
				showElement: function () {
					this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
				},
				clearCanvas: function (t) {
					t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
				},
				prepareLayer: function () {
					if (this.data.tt >= 1) {
						var t = this.buffers[0].getContext("2d");
						this.clearCanvas(t),
							t.drawImage(this.canvasContext.canvas, 0, 0),
							this.currentTransform = this.canvasContext.getTransform(),
							this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
							this.clearCanvas(this.canvasContext),
							this.canvasContext.setTransform(this.currentTransform)
					}
				},
				exitLayer: function () {
					if (this.data.tt >= 1) {
						var t = this.buffers[1],
							e = t.getContext("2d");
						if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
							var i = assetLoader.getLumaCanvas(this.canvasContext.canvas);
							i.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0),
								this.clearCanvas(this.canvasContext),
								this.canvasContext.drawImage(i, 0, 0)
						}
						this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt],
							this.canvasContext.drawImage(t, 0, 0),
							this.canvasContext.globalCompositeOperation = "destination-over",
							this.canvasContext.drawImage(this.buffers[0], 0, 0),
							this.canvasContext.setTransform(this.currentTransform),
							this.canvasContext.globalCompositeOperation = "source-over"
					}
				},
				renderFrame: function (t) {
					if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
						this.renderTransform(),
							this.renderRenderable(),
							this.renderLocalTransform(),
							this.setBlendMode();
						var e = 0 === this.data.ty;
						this.prepareLayer(),
							this.globalData.renderer.save(e),
							this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props),
							this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity),
							this.renderInnerContent(),
							this.globalData.renderer.restore(e),
							this.exitLayer(),
							this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
							this._isFirstFrame && (this._isFirstFrame = !1)
					}
				},
				destroy: function () {
					this.canvasContext = null,
						this.data = null,
						this.globalData = null,
						this.maskManager.destroy()
				},
				mHelper: new Matrix
			},
				CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,
				CVBaseElement.prototype.show = CVBaseElement.prototype.showElement,
				CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated,
				extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
				CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,
				CVShapeElement.prototype.transformHelper = {
					opacity: 1,
					_opMdf: !1
				},
				CVShapeElement.prototype.dashResetter = [],
				CVShapeElement.prototype.createContent = function () {
					this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
				},
				CVShapeElement.prototype.createStyleElement = function (t, e) {
					var i = {
						data: t,
						type: t.ty,
						preTransforms: this.transformsManager.addTransformSequence(e),
						transforms: [],
						elements: [],
						closed: !0 === t.hd
					},
						r = {};
					if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
						k: 0
					}, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
						k: 0
					}, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
						if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
							var s = new DashProperty(this, t.d, "canvas", this);
							r.d = s,
								r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
						}
					} else
						i.r = 2 === t.r ? "evenodd" : "nonzero";
					return this.stylesList.push(i),
						r.style = i,
						r
				},
				CVShapeElement.prototype.createGroupElement = function () {
					return {
						it: [],
						prevViewData: []
					}
				},
				CVShapeElement.prototype.createTransformElement = function (t) {
					return {
						transform: {
							opacity: 1,
							_opMdf: !1,
							key: this.transformsManager.getNewKey(),
							op: PropertyFactory.getProp(this, t.o, 0, .01, this),
							mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
						}
					}
				},
				CVShapeElement.prototype.createShapeElement = function (t) {
					var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
					return this.shapes.push(e),
						this.addShapeToModifiers(e),
						e
				},
				CVShapeElement.prototype.reloadShapes = function () {
					var t;
					this._isFirstFrame = !0;
					var e = this.itemsData.length;
					for (t = 0; t < e; t += 1)
						this.prevViewData[t] = this.itemsData[t];
					for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
						this.dynamicProperties[t].getValue();
					this.renderModifiers(),
						this.transformsManager.processSequences(this._isFirstFrame)
				},
				CVShapeElement.prototype.addTransformToStyleList = function (t) {
					var e,
						i = this.stylesList.length;
					for (e = 0; e < i; e += 1)
						this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
				},
				CVShapeElement.prototype.removeTransformFromStyleList = function () {
					var t,
						e = this.stylesList.length;
					for (t = 0; t < e; t += 1)
						this.stylesList[t].closed || this.stylesList[t].transforms.pop()
				},
				CVShapeElement.prototype.closeStyles = function (t) {
					var e,
						i = t.length;
					for (e = 0; e < i; e += 1)
						t[e].closed = !0
				},
				CVShapeElement.prototype.searchShapes = function (t, e, i, r, s) {
					var a,
						n,
						o,
						h,
						l,
						p,
						m = t.length - 1,
						c = [],
						f = [],
						d = [].concat(s);
					for (a = m; a >= 0; a -= 1) {
						if ((h = this.searchProcessedElement(t[a])) ? e[a] = i[h - 1] : t[a]._shouldRender = r, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty)
							h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), c.push(e[a].style);
						else if ("gr" === t[a].ty) {
							if (h)
								for (o = e[a].it.length, n = 0; n < o; n += 1)
									e[a].prevViewData[n] = e[a].it[n];
							else
								e[a] = this.createGroupElement(t[a]);
							this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, d)
						} else
							"tr" === t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty || "zz" === t[a].ty || "op" === t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), f.push(l)) : "rp" === t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), e[a] = l, l.init(this, t, a, e), this.shapeModifiers.push(l), r = !1), f.push(l));
						this.addProcessedElement(t[a], a + 1)
					}
					for (this.removeTransformFromStyleList(), this.closeStyles(c), m = f.length, a = 0; a < m; a += 1)
						f[a].closed = !0
				},
				CVShapeElement.prototype.renderInnerContent = function () {
					this.transformHelper.opacity = 1,
						this.transformHelper._opMdf = !1,
						this.renderModifiers(),
						this.transformsManager.processSequences(this._isFirstFrame),
						this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
				},
				CVShapeElement.prototype.renderShapeTransform = function (t, e) {
					(t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
				},
				CVShapeElement.prototype.drawLayer = function () {
					var t,
						e,
						i,
						r,
						s,
						a,
						n,
						o,
						h,
						l = this.stylesList.length,
						p = this.globalData.renderer,
						m = this.globalData.canvasContext;
					for (t = 0; t < l; t += 1)
						if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
							for (p.save(), a = h.elements, "st" === o || "gs" === o ? (p.ctxStrokeStyle("st" === o ? h.co : h.grd), p.ctxLineWidth(h.wi), p.ctxLineCap(h.lc), p.ctxLineJoin(h.lj), p.ctxMiterLimit(h.ml || 0)) : p.ctxFillStyle("fl" === o ? h.co : h.grd), p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && m.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = a.length, e = 0; e < i; e += 1) {
								for ("st" !== o && "gs" !== o || (m.beginPath(), h.da && (m.setLineDash(h.da), m.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, r = 0; r < s; r += 1)
									"m" === n[r].t ? m.moveTo(n[r].p[0], n[r].p[1]) : "c" === n[r].t ? m.bezierCurveTo(n[r].pts[0], n[r].pts[1], n[r].pts[2], n[r].pts[3], n[r].pts[4], n[r].pts[5]) : m.closePath();
								"st" !== o && "gs" !== o || (p.ctxStroke(), h.da && m.setLineDash(this.dashResetter))
							}
							"st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(h.r),
								p.restore()
						}
				},
				CVShapeElement.prototype.renderShape = function (t, e, i, r) {
					var s,
						a;
					for (a = t, s = e.length - 1; s >= 0; s -= 1)
						"tr" === e[s].ty ? (a = i[s].transform, this.renderShapeTransform(t, a)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], i[s]) : "fl" === e[s].ty ? this.renderFill(e[s], i[s], a) : "st" === e[s].ty ? this.renderStroke(e[s], i[s], a) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], i[s], a) : "gr" === e[s].ty ? this.renderShape(a, e[s].it, i[s].it) : e[s].ty;
					r && this.drawLayer()
				},
				CVShapeElement.prototype.renderStyledShape = function (t, e) {
					if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
						var i,
							r,
							s,
							a = t.trNodes,
							n = e.paths,
							o = n._length;
						a.length = 0;
						var h = t.transforms.finalTransform;
						for (s = 0; s < o; s += 1) {
							var l = n.shapes[s];
							if (l && l.v) {
								for (r = l._length, i = 1; i < r; i += 1)
									1 === i && a.push({
										t: "m",
										p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
									}), a.push({
										t: "c",
										pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
									});
								1 === r && a.push({
									t: "m",
									p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
								}),
									l.c && r && (a.push({
										t: "c",
										pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
									}), a.push({
										t: "z"
									}))
							}
						}
						t.trNodes = a
					}
				},
				CVShapeElement.prototype.renderPath = function (t, e) {
					if (!0 !== t.hd && t._shouldRender) {
						var i,
							r = e.styledShapes.length;
						for (i = 0; i < r; i += 1)
							this.renderStyledShape(e.styledShapes[i], e.sh)
					}
				},
				CVShapeElement.prototype.renderFill = function (t, e, i) {
					var r = e.style;
					(e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
						(e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
				},
				CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
					var r,
						s = e.style;
					if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
						var a,
							n = this.globalData.canvasContext,
							o = e.s.v,
							h = e.e.v;
						if (1 === t.t)
							r = n.createLinearGradient(o[0], o[1], h[0], h[1]);
						else {
							var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
								p = Math.atan2(h[1] - o[1], h[0] - o[0]),
								m = e.h.v;
							m >= 1 ? m = .99 : m <= -1 && (m = - .99);
							var c = l * m,
								f = Math.cos(p + e.a.v) * c + o[0],
								d = Math.sin(p + e.a.v) * c + o[1];
							r = n.createRadialGradient(f, d, 0, o[0], o[1], l)
						}
						var u = t.g.p,
							y = e.g.c,
							g = 1;
						for (a = 0; a < u; a += 1)
							e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), r.addColorStop(y[4 * a] / 100, "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + g + ")");
						s.grd = r
					}
					s.coOp = e.o.v * i.opacity
				},
				CVShapeElement.prototype.renderStroke = function (t, e, i) {
					var r = e.style,
						s = e.d;
					s && (s._mdf || this._isFirstFrame) && (r.da = s.dashArray, r.do = s.dashoffset[0]),
						(e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
						(e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity),
						(e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
				},
				CVShapeElement.prototype.destroy = function () {
					this.shapesData = null,
						this.globalData = null,
						this.canvasContext = null,
						this.stylesList.length = 0,
						this.itemsData.length = 0
				},
				extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
				CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),
				CVTextElement.prototype.buildNewText = function () {
					var t = this.textProperty.currentData;
					this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
					var e = !1;
					t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)",
						this.fill = e;
					var i = !1;
					t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
					var r,
						s,
						a,
						n,
						o,
						h,
						l,
						p,
						m,
						c,
						f,
						d,
						u = this.globalData.fontManager.getFontByName(t.f),
						y = t.l,
						g = this.mHelper;
					this.stroke = i,
						this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily,
						s = t.finalText.length;
					var v = this.data.singleShape,
						b = .001 * t.tr * t.finalSize,
						E = 0,
						P = 0,
						x = !0,
						C = 0;
					for (r = 0; r < s; r += 1) {
						n = (a = this.globalData.fontManager.getCharData(t.finalText[r], u.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {},
							g.reset(),
							v && y[r].n && (E = -b, P += t.yOffset, P += x ? 1 : 0, x = !1),
							m = (l = n.shapes ? n.shapes[0].it : []).length,
							g.scale(t.finalSize / 100, t.finalSize / 100),
							v && this.applyTextPropertiesToMatrix(t, g, y[r].line, E, P),
							f = createSizedArray(m - 1);
						var S = 0;
						for (p = 0; p < m; p += 1)
							if ("sh" === l[p].ty) {
								for (h = l[p].ks.k.i.length, c = l[p].ks.k, d = [], o = 1; o < h; o += 1)
									1 === o && d.push(g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), d.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[o][0], c.i[o][1], 0), g.applyToY(c.i[o][0], c.i[o][1], 0), g.applyToX(c.v[o][0], c.v[o][1], 0), g.applyToY(c.v[o][0], c.v[o][1], 0));
								d.push(g.applyToX(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToY(c.o[o - 1][0], c.o[o - 1][1], 0), g.applyToX(c.i[0][0], c.i[0][1], 0), g.applyToY(c.i[0][0], c.i[0][1], 0), g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)),
									f[S] = d,
									S += 1
							}
						v && (E += y[r].l, E += b),
							this.textSpans[C] ? this.textSpans[C].elem = f : this.textSpans[C] = {
								elem: f
							},
							C += 1
					}
				},
				CVTextElement.prototype.renderInnerContent = function () {
					var t,
						e,
						i,
						r,
						s,
						a;
					this.validateText(),
						this.canvasContext.font = this.values.fValue,
						this.globalData.renderer.ctxLineCap("butt"),
						this.globalData.renderer.ctxLineJoin("miter"),
						this.globalData.renderer.ctxMiterLimit(4),
						this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
					var n,
						o = this.textAnimator.renderedLetters,
						h = this.textProperty.currentData.l;
					e = h.length;
					var l,
						p,
						m = null,
						c = null,
						f = null,
						d = this.globalData.renderer;
					for (t = 0; t < e; t += 1)
						if (!h[t].n) {
							if ((n = o[t]) && (d.save(), d.ctxTransform(n.p), d.ctxOpacity(n.o)), this.fill) {
								for (n && n.fc ? m !== n.fc && (d.ctxFillStyle(n.fc), m = n.fc) : m !== this.values.fill && (m = this.values.fill, d.ctxFillStyle(this.values.fill)), r = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
									for (a = (p = l[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), s = 2; s < a; s += 6)
										this.globalData.canvasContext.bezierCurveTo(p[s], p[s + 1], p[s + 2], p[s + 3], p[s + 4], p[s + 5]);
								this.globalData.canvasContext.closePath(),
									d.ctxFill()
							}
							if (this.stroke) {
								for (n && n.sw ? f !== n.sw && (f = n.sw, d.ctxLineWidth(n.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), n && n.sc ? c !== n.sc && (c = n.sc, d.ctxStrokeStyle(n.sc)) : c !== this.values.stroke && (c = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), r = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
									for (a = (p = l[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), s = 2; s < a; s += 6)
										this.globalData.canvasContext.bezierCurveTo(p[s], p[s + 1], p[s + 2], p[s + 3], p[s + 4], p[s + 5]);
								this.globalData.canvasContext.closePath(),
									d.ctxStroke()
							}
							n && this.globalData.renderer.restore()
						}
				},
				extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
				CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,
				CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
				CVImageElement.prototype.createContent = function () {
					if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
						var t = createTag("canvas");
						t.width = this.assetData.w,
							t.height = this.assetData.h;
						var e,
							i,
							r = t.getContext("2d"),
							s = this.img.width,
							a = this.img.height,
							n = s / a,
							o = this.assetData.w / this.assetData.h,
							h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
						n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (i = a) * o : i = (e = s) / o,
							r.drawImage(this.img, (s - e) / 2, (a - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h),
							this.img = t
					}
				},
				CVImageElement.prototype.renderInnerContent = function () {
					this.canvasContext.drawImage(this.img, 0, 0)
				},
				CVImageElement.prototype.destroy = function () {
					this.img = null
				},
				extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
				CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,
				CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
				CVSolidElement.prototype.renderInnerContent = function () {
					this.globalData.renderer.ctxFillStyle(this.data.sc),
						this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
				},
				extendPrototype([BaseRenderer], CanvasRendererBase),
				CanvasRendererBase.prototype.createShape = function (t) {
					return new CVShapeElement(t, this.globalData, this)
				},
				CanvasRendererBase.prototype.createText = function (t) {
					return new CVTextElement(t, this.globalData, this)
				},
				CanvasRendererBase.prototype.createImage = function (t) {
					return new CVImageElement(t, this.globalData, this)
				},
				CanvasRendererBase.prototype.createSolid = function (t) {
					return new CVSolidElement(t, this.globalData, this)
				},
				CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
				CanvasRendererBase.prototype.ctxTransform = function (t) {
					1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
				},
				CanvasRendererBase.prototype.ctxOpacity = function (t) {
					this.canvasContext.globalAlpha *= t < 0 ? 0 : t
				},
				CanvasRendererBase.prototype.ctxFillStyle = function (t) {
					this.canvasContext.fillStyle = t
				},
				CanvasRendererBase.prototype.ctxStrokeStyle = function (t) {
					this.canvasContext.strokeStyle = t
				},
				CanvasRendererBase.prototype.ctxLineWidth = function (t) {
					this.canvasContext.lineWidth = t
				},
				CanvasRendererBase.prototype.ctxLineCap = function (t) {
					this.canvasContext.lineCap = t
				},
				CanvasRendererBase.prototype.ctxLineJoin = function (t) {
					this.canvasContext.lineJoin = t
				},
				CanvasRendererBase.prototype.ctxMiterLimit = function (t) {
					this.canvasContext.miterLimit = t
				},
				CanvasRendererBase.prototype.ctxFill = function (t) {
					this.canvasContext.fill(t)
				},
				CanvasRendererBase.prototype.ctxFillRect = function (t, e, i, r) {
					this.canvasContext.fillRect(t, e, i, r)
				},
				CanvasRendererBase.prototype.ctxStroke = function () {
					this.canvasContext.stroke()
				},
				CanvasRendererBase.prototype.reset = function () {
					this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
				},
				CanvasRendererBase.prototype.save = function () {
					this.canvasContext.save()
				},
				CanvasRendererBase.prototype.restore = function (t) {
					this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
				},
				CanvasRendererBase.prototype.configAnimation = function (t) {
					if (this.animationItem.wrapper) {
						this.animationItem.container = createTag("canvas");
						var e = this.animationItem.container.style;
						e.width = "100%",
							e.height = "100%";
						var i = "0px 0px 0px";
						e.transformOrigin = i,
							e.mozTransformOrigin = i,
							e.webkitTransformOrigin = i,
							e["-webkit-transform"] = i,
							e.contentVisibility = this.renderConfig.contentVisibility,
							this.animationItem.wrapper.appendChild(this.animationItem.container),
							this.canvasContext = this.animationItem.container.getContext("2d"),
							this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className),
							this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
					} else
						this.canvasContext = this.renderConfig.context;
					this.contextData.setContext(this.canvasContext),
						this.data = t,
						this.layers = t.layers,
						this.transformCanvas = {
							w: t.w,
							h: t.h,
							sx: 0,
							sy: 0,
							tx: 0,
							ty: 0
						},
						this.setupGlobalData(t, document.body),
						this.globalData.canvasContext = this.canvasContext,
						this.globalData.renderer = this,
						this.globalData.isDashed = !1,
						this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
						this.globalData.transformCanvas = this.transformCanvas,
						this.elements = createSizedArray(t.layers.length),
						this.updateContainerSize()
				},
				CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
					var i,
						r,
						s,
						a;
					if (this.reset(), t ? (i = t, r = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
						var n = this.renderConfig.preserveAspectRatio.split(" "),
							o = n[1] || "meet",
							h = n[0] || "xMidYMid",
							l = h.substr(0, 4),
							p = h.substr(4);
						s = i / r,
							(a = this.transformCanvas.w / this.transformCanvas.h) > s && "meet" === o || a < s && "slice" === o ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)),
							this.transformCanvas.tx = "xMid" === l && (a < s && "meet" === o || a > s && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (a < s && "meet" === o || a > s && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : 0,
							this.transformCanvas.ty = "YMid" === p && (a > s && "meet" === o || a < s && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (a > s && "meet" === o || a < s && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : 0
					} else
						"none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
					this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1],
						this.ctxTransform(this.transformCanvas.props),
						this.canvasContext.beginPath(),
						this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
						this.canvasContext.closePath(),
						this.canvasContext.clip(),
						this.renderFrame(this.renderedFrame, !0)
				},
				CanvasRendererBase.prototype.destroy = function () {
					var t;
					for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)
						this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
					this.elements.length = 0,
						this.globalData.canvasContext = null,
						this.animationItem.container = null,
						this.destroyed = !0
				},
				CanvasRendererBase.prototype.renderFrame = function (t, e) {
					if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
						var i;
						this.renderedFrame = t,
							this.globalData.frameNum = t - this.animationItem._isFirstFrame,
							this.globalData.frameId += 1,
							this.globalData._mdf = !this.renderConfig.clearCanvas || e,
							this.globalData.projectInterface.currentFrame = t;
						var r = this.layers.length;
						for (this.completeLayers || this.checkLayers(t), i = r - 1; i >= 0; i -= 1)
							(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
						if (this.globalData._mdf) {
							for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)
								(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
							!0 !== this.renderConfig.clearCanvas && this.restore()
						}
					}
				},
				CanvasRendererBase.prototype.buildItem = function (t) {
					var e = this.elements;
					if (!e[t] && 99 !== this.layers[t].ty) {
						var i = this.createItem(this.layers[t], this, this.globalData);
						e[t] = i,
							i.initExpressions()
					}
				},
				CanvasRendererBase.prototype.checkPendingElements = function () {
					for (; this.pendingElements.length;)
						this.pendingElements.pop().checkParenting()
				},
				CanvasRendererBase.prototype.hide = function () {
					this.animationItem.container.style.display = "none"
				},
				CanvasRendererBase.prototype.show = function () {
					this.animationItem.container.style.display = "block"
				},
				CVContextData.prototype.duplicate = function () {
					var t = 2 * this._length,
						e = 0;
					for (e = this._length; e < t; e += 1)
						this.stack[e] = new CanvasContext;
					this._length = t
				},
				CVContextData.prototype.reset = function () {
					this.cArrPos = 0,
						this.cTr.reset(),
						this.stack[this.cArrPos].opacity = 1
				},
				CVContextData.prototype.restore = function (t) {
					this.cArrPos -= 1;
					var e,
						i = this.stack[this.cArrPos],
						r = i.transform,
						s = this.cTr.props;
					for (e = 0; e < 16; e += 1)
						s[e] = r[e];
					if (t) {
						this.nativeContext.restore();
						var a = this.stack[this.cArrPos + 1];
						this.appliedFillStyle = a.fillStyle,
							this.appliedStrokeStyle = a.strokeStyle,
							this.appliedLineWidth = a.lineWidth,
							this.appliedLineCap = a.lineCap,
							this.appliedLineJoin = a.lineJoin,
							this.appliedMiterLimit = a.miterLimit
					}
					this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
						(t || -1 !== i.opacity && this.currentOpacity !== i.opacity) && (this.nativeContext.globalAlpha = i.opacity, this.currentOpacity = i.opacity),
						this.currentFillStyle = i.fillStyle,
						this.currentStrokeStyle = i.strokeStyle,
						this.currentLineWidth = i.lineWidth,
						this.currentLineCap = i.lineCap,
						this.currentLineJoin = i.lineJoin,
						this.currentMiterLimit = i.miterLimit
				},
				CVContextData.prototype.save = function (t) {
					t && this.nativeContext.save();
					var e = this.cTr.props;
					this._length <= this.cArrPos && this.duplicate();
					var i,
						r = this.stack[this.cArrPos];
					for (i = 0; i < 16; i += 1)
						r.transform[i] = e[i];
					this.cArrPos += 1;
					var s = this.stack[this.cArrPos];
					s.opacity = r.opacity,
						s.fillStyle = r.fillStyle,
						s.strokeStyle = r.strokeStyle,
						s.lineWidth = r.lineWidth,
						s.lineCap = r.lineCap,
						s.lineJoin = r.lineJoin,
						s.miterLimit = r.miterLimit
				},
				CVContextData.prototype.setOpacity = function (t) {
					this.stack[this.cArrPos].opacity = t
				},
				CVContextData.prototype.setContext = function (t) {
					this.nativeContext = t
				},
				CVContextData.prototype.fillStyle = function (t) {
					this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
				},
				CVContextData.prototype.strokeStyle = function (t) {
					this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
				},
				CVContextData.prototype.lineWidth = function (t) {
					this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
				},
				CVContextData.prototype.lineCap = function (t) {
					this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
				},
				CVContextData.prototype.lineJoin = function (t) {
					this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
				},
				CVContextData.prototype.miterLimit = function (t) {
					this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
				},
				CVContextData.prototype.transform = function (t) {
					this.transformMat.cloneFromProps(t);
					var e = this.cTr;
					this.transformMat.multiply(e),
						e.cloneFromProps(this.transformMat.props);
					var i = e.props;
					this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
				},
				CVContextData.prototype.opacity = function (t) {
					var e = this.stack[this.cArrPos].opacity;
					e *= t < 0 ? 0 : t,
						this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
				},
				CVContextData.prototype.fill = function (t) {
					this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle),
						this.nativeContext.fill(t)
				},
				CVContextData.prototype.fillRect = function (t, e, i, r) {
					this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle),
						this.nativeContext.fillRect(t, e, i, r)
				},
				CVContextData.prototype.stroke = function () {
					this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle),
						this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth),
						this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap),
						this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin),
						this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit),
						this.nativeContext.stroke()
				},
				extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
				CVCompElement.prototype.renderInnerContent = function () {
					var t,
						e = this.canvasContext;
					for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)
						(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
				},
				CVCompElement.prototype.destroy = function () {
					var t;
					for (t = this.layers.length - 1; t >= 0; t -= 1)
						this.elements[t] && this.elements[t].destroy();
					this.layers = null,
						this.elements = null
				},
				CVCompElement.prototype.createComp = function (t) {
					return new CVCompElement(t, this.globalData, this)
				},
				extendPrototype([CanvasRendererBase], CanvasRenderer),
				CanvasRenderer.prototype.createComp = function (t) {
					return new CVCompElement(t, this.globalData, this)
				},
				HBaseElement.prototype = {
					checkBlendMode: function () { },
					initRendererElement: function () {
						this.baseElement = createTag(this.data.tg || "div"),
							this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement,
							styleDiv(this.baseElement)
					},
					createContainerElements: function () {
						this.renderableEffectsManager = new CVEffects(this),
							this.transformedElement = this.baseElement,
							this.maskedElement = this.layerElement,
							this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
							this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
							0 !== this.data.bm && this.setBlendMode()
					},
					renderElement: function () {
						var t = this.transformedElement ? this.transformedElement.style : {};
						if (this.finalTransform._matMdf) {
							var e = this.finalTransform.mat.toCSS();
							t.transform = e,
								t.webkitTransform = e
						}
						this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
					},
					renderFrame: function () {
						this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
					},
					destroy: function () {
						this.layerElement = null,
							this.transformedElement = null,
							this.matteElement && (this.matteElement = null),
							this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
					},
					createRenderableComponents: function () {
						this.maskManager = new MaskElement(this.data, this, this.globalData)
					},
					addEffects: function () { },
					setMatte: function () { }
				},
				HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement,
				HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy,
				HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting,
				extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
				HSolidElement.prototype.createContent = function () {
					var t;
					this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc),
						this.layerElement.appendChild(t)
				},
				extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
				HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,
				HShapeElement.prototype.createContent = function () {
					var t;
					if (this.baseElement.style.fontSize = 0, this.data.hasMask)
						this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
					else {
						t = createNS("svg");
						var e = this.comp.data ? this.comp.data : this.globalData.compSize;
						t.setAttribute("width", e.w),
							t.setAttribute("height", e.h),
							t.appendChild(this.shapesContainer),
							this.layerElement.appendChild(t)
					}
					this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
						this.filterUniqueShapes(),
						this.shapeCont = t
				},
				HShapeElement.prototype.getTransformedPoint = function (t, e) {
					var i,
						r = t.length;
					for (i = 0; i < r; i += 1)
						e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
					return e
				},
				HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
					var i,
						r,
						s,
						a,
						n,
						o = t.sh.v,
						h = t.transformers,
						l = o._length;
					if (!(l <= 1)) {
						for (i = 0; i < l - 1; i += 1)
							r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[i + 1]), n = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, s, a, n, e);
						o.c && (r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, s, a, n, e))
					}
				},
				HShapeElement.prototype.checkBounds = function (t, e, i, r, s) {
					this.getBoundsOfCurve(t, e, i, r);
					var a = this.shapeBoundingBox;
					s.x = bmMin(a.left, s.x),
						s.xMax = bmMax(a.right, s.xMax),
						s.y = bmMin(a.top, s.y),
						s.yMax = bmMax(a.bottom, s.yMax)
				},
				HShapeElement.prototype.shapeBoundingBox = {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				},
				HShapeElement.prototype.tempBoundingBox = {
					x: 0,
					xMax: 0,
					y: 0,
					yMax: 0,
					width: 0,
					height: 0
				},
				HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, r) {
					for (var s, a, n, o, h, l, p, m = [[t[0], r[0]], [t[1], r[1]]], c = 0; c < 2; ++c)
						a = 6 * t[c] - 12 * e[c] + 6 * i[c], s = -3 * t[c] + 9 * e[c] - 9 * i[c] + 3 * r[c], n = 3 * e[c] - 3 * t[c], a |= 0, n |= 0, 0 == (s |= 0) && 0 === a || (0 === s ? (o = -n / a) > 0 && o < 1 && m[c].push(this.calculateF(o, t, e, i, r, c)) : (h = a * a - 4 * n * s) >= 0 && ((l = (-a + bmSqrt(h)) / (2 * s)) > 0 && l < 1 && m[c].push(this.calculateF(l, t, e, i, r, c)), (p = (-a - bmSqrt(h)) / (2 * s)) > 0 && p < 1 && m[c].push(this.calculateF(p, t, e, i, r, c))));
					this.shapeBoundingBox.left = bmMin.apply(null, m[0]),
						this.shapeBoundingBox.top = bmMin.apply(null, m[1]),
						this.shapeBoundingBox.right = bmMax.apply(null, m[0]),
						this.shapeBoundingBox.bottom = bmMax.apply(null, m[1])
				},
				HShapeElement.prototype.calculateF = function (t, e, i, r, s, a) {
					return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bmPow(t, 2) * r[a] + bmPow(t, 3) * s[a]
				},
				HShapeElement.prototype.calculateBoundingBox = function (t, e) {
					var i,
						r = t.length;
					for (i = 0; i < r; i += 1)
						t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e)
				},
				HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
					var i = 0;
					if (t.keyframes) {
						for (var r = 0; r < t.keyframes.length; r += 1) {
							var s = t.keyframes[r].s;
							s > i && (i = s)
						}
						i *= t.mult
					} else
						i = t.v * t.mult;
					e.x -= i,
						e.xMax += i,
						e.y -= i,
						e.yMax += i
				},
				HShapeElement.prototype.currentBoxContains = function (t) {
					return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
				},
				HShapeElement.prototype.renderInnerContent = function () {
					if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
						var t = this.tempBoundingBox,
							e = 999999;
						if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t))
							return;
						var i = !1;
						if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
							this.currentBBox.w = t.width,
								this.currentBBox.h = t.height,
								this.currentBBox.x = t.x,
								this.currentBBox.y = t.y,
								this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
							var r = this.shapeCont.style,
								s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
							r.transform = s,
								r.webkitTransform = s
						}
					}
				},
				extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
				HTextElement.prototype.createContent = function () {
					if (this.isMasked = this.checkMasks(), this.isMasked) {
						this.renderType = "svg",
							this.compW = this.comp.data.w,
							this.compH = this.comp.data.h,
							this.svgElement.setAttribute("width", this.compW),
							this.svgElement.setAttribute("height", this.compH);
						var t = createNS("g");
						this.maskedElement.appendChild(t),
							this.innerElem = t
					} else
						this.renderType = "html", this.innerElem = this.layerElement;
					this.checkParenting()
				},
				HTextElement.prototype.buildNewText = function () {
					var t = this.textProperty.currentData;
					this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
					var e = this.innerElem.style,
						i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
					e.fill = i,
						e.color = i,
						t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
					var r,
						s,
						a = this.globalData.fontManager.getFontByName(t.f);
					if (!this.globalData.fontManager.chars)
						if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass)
							this.innerElem.className = a.fClass;
						else {
							e.fontFamily = a.fFamily;
							var n = t.fWeight,
								o = t.fStyle;
							e.fontStyle = o,
								e.fontWeight = n
						}
					var h,
						l,
						p,
						m = t.l;
					s = m.length;
					var c,
						f = this.mHelper,
						d = "",
						u = 0;
					for (r = 0; r < s; r += 1) {
						if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? p = (l = this.textSpans[u]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (l = this.textSpans[u], h = this.textPaths[u]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
							var y,
								g = this.globalData.fontManager.getCharData(t.finalText[r], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
							if (y = g ? g.data : null, f.reset(), y && y.shapes && y.shapes.length && (c = y.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, c), h.setAttribute("d", d)), this.isMasked)
								this.innerElem.appendChild(h);
							else {
								if (this.innerElem.appendChild(l), y && y.shapes) {
									document.body.appendChild(p);
									var v = p.getBBox();
									p.setAttribute("width", v.width + 2),
										p.setAttribute("height", v.height + 2),
										p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
									var b = p.style,
										E = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
									b.transform = E,
										b.webkitTransform = E,
										m[r].yOffset = v.y - 1
								} else
									p.setAttribute("width", 1), p.setAttribute("height", 1);
								l.appendChild(p)
							}
						} else if (h.textContent = m[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked)
							this.innerElem.appendChild(h);
						else {
							this.innerElem.appendChild(l);
							var P = h.style,
								x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
							P.transform = x,
								P.webkitTransform = x
						}
						this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = l,
							this.textSpans[u].style.display = "block",
							this.textPaths[u] = h,
							u += 1
					}
					for (; u < this.textSpans.length;)
						this.textSpans[u].style.display = "none", u += 1
				},
				HTextElement.prototype.renderInnerContent = function () {
					var t;
					if (this.validateText(), this.data.singleShape) {
						if (!this._isFirstFrame && !this.lettersChangedFlag)
							return;
						if (this.isMasked && this.finalTransform._matMdf) {
							this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
								t = this.svgElement.style;
							var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
							t.transform = e,
								t.webkitTransform = e
						}
					}
					if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
						var i,
							r,
							s,
							a,
							n,
							o = 0,
							h = this.textAnimator.renderedLetters,
							l = this.textProperty.currentData.l;
						for (r = l.length, i = 0; i < r; i += 1)
							l[i].n ? o += 1 : (a = this.textSpans[i], n = this.textPaths[i], s = h[o], o += 1, s._mdf.m && (this.isMasked ? a.setAttribute("transform", s.m) : (a.style.webkitTransform = s.m, a.style.transform = s.m)), a.style.opacity = s.o, s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (n.setAttribute("fill", s.fc), n.style.color = s.fc));
						if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
							var p = this.innerElem.getBBox();
							if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
								this.currentBBox.w = p.width + 2,
									this.currentBBox.h = p.height + 2,
									this.currentBBox.x = p.x - 1,
									this.currentBBox.y = p.y - 1,
									this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
									t = this.svgElement.style;
								var m = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
								t.transform = m,
									t.webkitTransform = m
							}
						}
					}
				},
				extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
				HCameraElement.prototype.setup = function () {
					var t,
						e,
						i,
						r,
						s = this.comp.threeDElements.length;
					for (t = 0; t < s; t += 1)
						if ("3d" === (e = this.comp.threeDElements[t]).type) {
							i = e.perspectiveElem.style,
								r = e.container.style;
							var a = this.pe.v + "px",
								n = "0px 0px 0px",
								o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
							i.perspective = a,
								i.webkitPerspective = a,
								r.transformOrigin = n,
								r.mozTransformOrigin = n,
								r.webkitTransformOrigin = n,
								i.transform = o,
								i.webkitTransform = o
						}
				},
				HCameraElement.prototype.createElements = function () { },
				HCameraElement.prototype.hide = function () { },
				HCameraElement.prototype.renderFrame = function () {
					var t,
						e,
						i = this._isFirstFrame;
					if (this.hierarchy)
						for (e = this.hierarchy.length, t = 0; t < e; t += 1)
							i = this.hierarchy[t].finalTransform.mProp._mdf || i;
					if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
						if (this.mat.reset(), this.hierarchy)
							for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
								var r = this.hierarchy[t].finalTransform.mProp;
								this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]),
									this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]),
									this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v),
									this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]),
									this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
							}
						if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
							var s;
							s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
							var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
								n = [s[0] / a, s[1] / a, s[2] / a],
								o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
								h = Math.atan2(n[1], o),
								l = Math.atan2(n[0], -n[2]);
							this.mat.rotateY(l).rotateX(-h)
						}
						this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
							this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
							this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
							this.mat.translate(0, 0, this.pe.v);
						var p = !this._prevMat.equals(this.mat);
						if ((p || this.pe._mdf) && this.comp.threeDElements) {
							var m,
								c,
								f;
							for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
								if ("3d" === (m = this.comp.threeDElements[t]).type) {
									if (p) {
										var d = this.mat.toCSS();
										(f = m.container.style).transform = d,
											f.webkitTransform = d
									}
									this.pe._mdf && ((c = m.perspectiveElem.style).perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px")
								}
							this.mat.clone(this._prevMat)
						}
					}
					this._isFirstFrame = !1
				},
				HCameraElement.prototype.prepareFrame = function (t) {
					this.prepareProperties(t, !0)
				},
				HCameraElement.prototype.destroy = function () { },
				HCameraElement.prototype.getBaseElement = function () {
					return null
				},
				extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
				HImageElement.prototype.createContent = function () {
					var t = this.globalData.getAssetsPath(this.assetData),
						e = new Image;
					this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e),
						e.crossOrigin = "anonymous",
						e.src = t,
						this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
				},
				extendPrototype([BaseRenderer], HybridRendererBase),
				HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem,
				HybridRendererBase.prototype.checkPendingElements = function () {
					for (; this.pendingElements.length;)
						this.pendingElements.pop().checkParenting()
				},
				HybridRendererBase.prototype.appendElementInPos = function (t, e) {
					var i = t.getBaseElement();
					if (i) {
						var r = this.layers[e];
						if (r.ddd && this.supports3d)
							this.addTo3dContainer(i, e);
						else if (this.threeDElements)
							this.addTo3dContainer(i, e);
						else {
							for (var s, a, n = 0; n < e;)
								this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
							s ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, s) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
						}
					}
				},
				HybridRendererBase.prototype.createShape = function (t) {
					return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
				},
				HybridRendererBase.prototype.createText = function (t) {
					return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
				},
				HybridRendererBase.prototype.createCamera = function (t) {
					return this.camera = new HCameraElement(t, this.globalData, this),
						this.camera
				},
				HybridRendererBase.prototype.createImage = function (t) {
					return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
				},
				HybridRendererBase.prototype.createSolid = function (t) {
					return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
				},
				HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
				HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
					for (var e = 0, i = this.threeDElements.length; e < i;) {
						if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
							return this.threeDElements[e].perspectiveElem;
						e += 1
					}
					return null
				},
				HybridRendererBase.prototype.createThreeDContainer = function (t, e) {
					var i,
						r,
						s = createTag("div");
					styleDiv(s);
					var a = createTag("div");
					if (styleDiv(a), "3d" === e) {
						(i = s.style).width = this.globalData.compSize.w + "px",
							i.height = this.globalData.compSize.h + "px";
						var n = "50% 50%";
						i.webkitTransformOrigin = n,
							i.mozTransformOrigin = n,
							i.transformOrigin = n;
						var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
						(r = a.style).transform = o,
							r.webkitTransform = o
					}
					s.appendChild(a);
					var h = {
						container: a,
						perspectiveElem: s,
						startPos: t,
						endPos: t,
						type: e
					};
					return this.threeDElements.push(h),
						h
				},
				HybridRendererBase.prototype.build3dContainers = function () {
					var t,
						e,
						i = this.layers.length,
						r = "";
					for (t = 0; t < i; t += 1)
						this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
					for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1)
						this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
				},
				HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
					for (var i = 0, r = this.threeDElements.length; i < r;) {
						if (e <= this.threeDElements[i].endPos) {
							for (var s, a = this.threeDElements[i].startPos; a < e;)
								this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
							s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
							break
						}
						i += 1
					}
				},
				HybridRendererBase.prototype.configAnimation = function (t) {
					var e = createTag("div"),
						i = this.animationItem.wrapper,
						r = e.style;
					r.width = t.w + "px",
						r.height = t.h + "px",
						this.resizerElem = e,
						styleDiv(e),
						r.transformStyle = "flat",
						r.mozTransformStyle = "flat",
						r.webkitTransformStyle = "flat",
						this.renderConfig.className && e.setAttribute("class", this.renderConfig.className),
						i.appendChild(e),
						r.overflow = "hidden";
					var s = createNS("svg");
					s.setAttribute("width", "1"),
						s.setAttribute("height", "1"),
						styleDiv(s),
						this.resizerElem.appendChild(s);
					var a = createNS("defs");
					s.appendChild(a),
						this.data = t,
						this.setupGlobalData(t, s),
						this.globalData.defs = a,
						this.layers = t.layers,
						this.layerElement = this.resizerElem,
						this.build3dContainers(),
						this.updateContainerSize()
				},
				HybridRendererBase.prototype.destroy = function () {
					var t;
					this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
						this.animationItem.container = null,
						this.globalData.defs = null;
					var e = this.layers ? this.layers.length : 0;
					for (t = 0; t < e; t += 1)
						this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
					this.elements.length = 0,
						this.destroyed = !0,
						this.animationItem = null
				},
				HybridRendererBase.prototype.updateContainerSize = function () {
					var t,
						e,
						i,
						r,
						s = this.animationItem.wrapper.offsetWidth,
						a = this.animationItem.wrapper.offsetHeight,
						n = s / a;
					this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, i = 0, r = (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, i = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, r = 0);
					var o = this.resizerElem.style;
					o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)",
						o.transform = o.webkitTransform
				},
				HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
				HybridRendererBase.prototype.hide = function () {
					this.resizerElem.style.display = "none"
				},
				HybridRendererBase.prototype.show = function () {
					this.resizerElem.style.display = "block"
				},
				HybridRendererBase.prototype.initItems = function () {
					if (this.buildAllItems(), this.camera)
						this.camera.setup();
					else {
						var t,
							e = this.globalData.compSize.w,
							i = this.globalData.compSize.h,
							r = this.threeDElements.length;
						for (t = 0; t < r; t += 1) {
							var s = this.threeDElements[t].perspectiveElem.style;
							s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px",
								s.perspective = s.webkitPerspective
						}
					}
				},
				HybridRendererBase.prototype.searchExtraCompositions = function (t) {
					var e,
						i = t.length,
						r = createTag("div");
					for (e = 0; e < i; e += 1)
						if (t[e].xt) {
							var s = this.createComp(t[e], r, this.globalData.comp, null);
							s.initExpressions(),
								this.globalData.projectInterface.registerComposition(s)
						}
				},
				extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
				HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,
				HCompElement.prototype.createContainerElements = function () {
					this._createBaseContainerElements(),
						this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
				},
				HCompElement.prototype.addTo3dContainer = function (t, e) {
					for (var i, r = 0; r < e;)
						this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
					i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
				},
				HCompElement.prototype.createComp = function (t) {
					return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
				},
				extendPrototype([HybridRendererBase], HybridRenderer),
				HybridRenderer.prototype.createComp = function (t) {
					return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
				};
			var CompExpressionInterface = function (t) {
				function e(e) {
					for (var i = 0, r = t.layers.length; i < r;) {
						if (t.layers[i].nm === e || t.layers[i].ind === e)
							return t.elements[i].layerInterface;
						i += 1
					}
					return null
				}
				return Object.defineProperty(e, "_name", {
					value: t.data.nm
				}),
					e.layer = e,
					e.pixelAspect = 1,
					e.height = t.data.h || t.globalData.compSize.h,
					e.width = t.data.w || t.globalData.compSize.w,
					e.pixelAspect = 1,
					e.frameDuration = 1 / t.globalData.frameRate,
					e.displayStartTime = 0,
					e.numLayers = t.layers.length,
					e
			};
			function _typeof$2(t) {
				return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
					return typeof t
				}
					: function (t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					},
					_typeof$2(t)
			}
			function seedRandom(t, e) {
				var i = this,
					r = 256,
					s = "random",
					a = e.pow(r, 6),
					n = e.pow(2, 52),
					o = 2 * n,
					h = 255;
				function l(t) {
					var e,
						i = t.length,
						s = this,
						a = 0,
						n = s.i = s.j = 0,
						o = s.S = [];
					for (i || (t = [i++]); a < r;)
						o[a] = a++;
					for (a = 0; a < r; a++)
						o[a] = o[n = h & n + t[a % i] + (e = o[a])], o[n] = e;
					s.g = function (t) {
						for (var e, i = 0, a = s.i, n = s.j, o = s.S; t--;)
							e = o[a = h & a + 1], i = i * r + o[h & (o[a] = o[n = h & n + e]) + (o[n] = e)];
						return s.i = a,
							s.j = n,
							i
					}
				}
				function p(t, e) {
					return e.i = t.i,
						e.j = t.j,
						e.S = t.S.slice(),
						e
				}
				function m(t, e) {
					var i,
						r = [],
						s = _typeof$2(t);
					if (e && "object" == s)
						for (i in t)
							try {
								r.push(m(t[i], e - 1))
							} catch (t) { }
					return r.length ? r : "string" == s ? t : t + "\0"
				}
				function c(t, e) {
					for (var i, r = t + "", s = 0; s < r.length;)
						e[h & s] = h & (i ^= 19 * e[h & s]) + r.charCodeAt(s++);
					return f(e)
				}
				function f(t) {
					return String.fromCharCode.apply(0, t)
				}
				e["seed" + s] = function (h, d, u) {
					var y = [],
						g = c(m((d = !0 === d ? {
							entropy: !0
						}
							: d || {}).entropy ? [h, f(t)] : null === h ? function () {
								try {
									var e = new Uint8Array(r);
									return (i.crypto || i.msCrypto).getRandomValues(e),
										f(e)
								} catch (e) {
									var s = i.navigator,
										a = s && s.plugins;
									return [+new Date, i, a, i.screen, f(t)]
								}
							}
								() : h, 3), y),
						v = new l(y),
						b = function () {
							for (var t = v.g(6), e = a, i = 0; t < n;)
								t = (t + i) * r, e *= r, i = v.g(1);
							for (; t >= o;)
								t /= 2, e /= 2, i >>>= 1;
							return (t + i) / e
						};
					return b.int32 = function () {
						return 0 | v.g(4)
					},
						b.quick = function () {
							return v.g(4) / 4294967296
						},
						b.double = b,
						c(f(v.S), t),
						(d.pass || u || function (t, i, r, a) {
							return a && (a.S && p(a, v), t.state = function () {
								return p(v, {})
							}),
								r ? (e[s] = t, i) : t
						})(b, g, "global" in d ? d.global : this == e, d.state)
				},
					c(e.random(), t)
			}
			function initialize$2(t) {
				seedRandom([], t)
			}
			var propTypes = {
				SHAPE: "shape"
			};
			function _typeof$1(t) {
				return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
					return typeof t
				}
					: function (t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					},
					_typeof$1(t)
			}
			var ExpressionManager = function () {
				var ob = {},
					Math = BMMath,
					window = null,
					document = null,
					XMLHttpRequest = null,
					fetch = null,
					frames = null,
					_lottieGlobal = {};
				function resetFrame() {
					_lottieGlobal = {}
				}
				function $bm_isInstanceOfArray(t) {
					return t.constructor === Array || t.constructor === Float32Array
				}
				function isNumerable(t, e) {
					return "number" === t || e instanceof Number || "boolean" === t || "string" === t
				}
				function $bm_neg(t) {
					var e = _typeof$1(t);
					if ("number" === e || t instanceof Number || "boolean" === e)
						return -t;
					if ($bm_isInstanceOfArray(t)) {
						var i,
							r = t.length,
							s = [];
						for (i = 0; i < r; i += 1)
							s[i] = -t[i];
						return s
					}
					return t.propType ? t.v : -t
				}
				initialize$2(BMMath);
				var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
					easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
					easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
				function sum(t, e) {
					var i = _typeof$1(t),
						r = _typeof$1(e);
					if (isNumerable(i, t) && isNumerable(r, e) || "string" === i || "string" === r)
						return t + e;
					if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
						return (t = t.slice(0))[0] += e, t;
					if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
						return (e = e.slice(0))[0] = t + e[0], e;
					if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
						for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)
							("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
						return o
					}
					return 0
				}
				var add = sum;
				function sub(t, e) {
					var i = _typeof$1(t),
						r = _typeof$1(e);
					if (isNumerable(i, t) && isNumerable(r, e))
						return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
					if ($bm_isInstanceOfArray(t) && isNumerable(r, e))
						return (t = t.slice(0))[0] -= e, t;
					if (isNumerable(i, t) && $bm_isInstanceOfArray(e))
						return (e = e.slice(0))[0] = t - e[0], e;
					if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
						for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)
							("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
						return o
					}
					return 0
				}
				function mul(t, e) {
					var i,
						r,
						s,
						a = _typeof$1(t),
						n = _typeof$1(e);
					if (isNumerable(a, t) && isNumerable(n, e))
						return t * e;
					if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
						for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1)
							i[r] = t[r] * e;
						return i
					}
					if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
						for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1)
							i[r] = t * e[r];
						return i
					}
					return 0
				}
				function div(t, e) {
					var i,
						r,
						s,
						a = _typeof$1(t),
						n = _typeof$1(e);
					if (isNumerable(a, t) && isNumerable(n, e))
						return t / e;
					if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
						for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1)
							i[r] = t[r] / e;
						return i
					}
					if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
						for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1)
							i[r] = t / e[r];
						return i
					}
					return 0
				}
				function mod(t, e) {
					return "string" == typeof t && (t = parseInt(t, 10)),
						"string" == typeof e && (e = parseInt(e, 10)),
						t % e
				}
				var $bm_sum = sum,
					$bm_sub = sub,
					$bm_mul = mul,
					$bm_div = div,
					$bm_mod = mod;
				function clamp(t, e, i) {
					if (e > i) {
						var r = i;
						i = e,
							e = r
					}
					return Math.min(Math.max(t, e), i)
				}
				function radiansToDegrees(t) {
					return t / degToRads
				}
				var radians_to_degrees = radiansToDegrees;
				function degreesToRadians(t) {
					return t * degToRads
				}
				var degrees_to_radians = radiansToDegrees,
					helperLengthArray = [0, 0, 0, 0, 0, 0];
				function length(t, e) {
					if ("number" == typeof t || t instanceof Number)
						return e = e || 0, Math.abs(t - e);
					var i;
					e || (e = helperLengthArray);
					var r = Math.min(t.length, e.length),
						s = 0;
					for (i = 0; i < r; i += 1)
						s += Math.pow(e[i] - t[i], 2);
					return Math.sqrt(s)
				}
				function normalize(t) {
					return div(t, length(t))
				}
				function rgbToHsl(t) {
					var e,
						i,
						r = t[0],
						s = t[1],
						a = t[2],
						n = Math.max(r, s, a),
						o = Math.min(r, s, a),
						h = (n + o) / 2;
					if (n === o)
						e = 0, i = 0;
					else {
						var l = n - o;
						switch (i = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
							case r:
								e = (s - a) / l + (s < a ? 6 : 0);
								break;
							case s:
								e = (a - r) / l + 2;
								break;
							case a:
								e = (r - s) / l + 4
						}
						e /= 6
					}
					return [e, i, h, t[3]]
				}
				function hue2rgb(t, e, i) {
					return i < 0 && (i += 1),
						i > 1 && (i -= 1),
						i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
				}
				function hslToRgb(t) {
					var e,
						i,
						r,
						s = t[0],
						a = t[1],
						n = t[2];
					if (0 === a)
						e = n, r = n, i = n;
					else {
						var o = n < .5 ? n * (1 + a) : n + a - n * a,
							h = 2 * n - o;
						e = hue2rgb(h, o, s + 1 / 3),
							i = hue2rgb(h, o, s),
							r = hue2rgb(h, o, s - 1 / 3)
					}
					return [e, i, r, t[3]]
				}
				function linear(t, e, i, r, s) {
					if (void 0 !== r && void 0 !== s || (r = e, s = i, e = 0, i = 1), i < e) {
						var a = i;
						i = e,
							e = a
					}
					if (t <= e)
						return r;
					if (t >= i)
						return s;
					var n,
						o = i === e ? 0 : (t - e) / (i - e);
					if (!r.length)
						return r + (s - r) * o;
					var h = r.length,
						l = createTypedArray("float32", h);
					for (n = 0; n < h; n += 1)
						l[n] = r[n] + (s[n] - r[n]) * o;
					return l
				}
				function random(t, e) {
					if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
						var i,
							r = e.length;
						t || (t = createTypedArray("float32", r));
						var s = createTypedArray("float32", r),
							a = BMMath.random();
						for (i = 0; i < r; i += 1)
							s[i] = t[i] + a * (e[i] - t[i]);
						return s
					}
					return void 0 === t && (t = 0),
						t + BMMath.random() * (e - t)
				}
				function createPath(t, e, i, r) {
					var s,
						a = t.length,
						n = shapePool.newElement();
					n.setPathData(!!r, a);
					var o,
						h,
						l = [0, 0];
					for (s = 0; s < a; s += 1)
						o = e && e[s] ? e[s] : l, h = i && i[s] ? i[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
					return n
				}
				function initiateExpression(elem, data, property) {
					function noOp(t) {
						return t
					}
					if (!elem.globalData.renderConfig.runExpressions)
						return noOp;
					var val = data.x,
						needsVelocity = /velocity(?![\w\d])/.test(val),
						_needsRandom = -1 !== val.indexOf("random"),
						elemType = elem.data.ty,
						transform,
						$bm_transform,
						content,
						effect,
						thisProperty = property;
					thisProperty.valueAtTime = thisProperty.getValueAtTime,
						Object.defineProperty(thisProperty, "value", {
							get: function () {
								return thisProperty.v
							}
						}),
						elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
						elem.comp.displayStartTime = 0;
					var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
						outPoint = elem.data.op / elem.comp.globalData.frameRate,
						width = elem.data.sw ? elem.data.sw : 0,
						height = elem.data.sh ? elem.data.sh : 0,
						name = elem.data.nm,
						loopIn,
						loop_in,
						loopOut,
						loop_out,
						smooth,
						toWorld,
						fromWorld,
						fromComp,
						toComp,
						fromCompToSurface,
						position,
						rotation,
						anchorPoint,
						scale,
						thisLayer,
						thisComp,
						mask,
						valueAtTime,
						velocityAtTime,
						scoped_bm_rt,
						expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
						numKeys = property.kf ? data.k.length : 0,
						active = !this.data || !0 !== this.data.hd,
						wiggle = function (t, e) {
							var i,
								r,
								s = this.pv.length ? this.pv.length : 1,
								a = createTypedArray("float32", s),
								n = Math.floor(5 * time);
							for (i = 0, r = 0; i < n;) {
								for (r = 0; r < s; r += 1)
									a[r] += -e + 2 * e * BMMath.random();
								i += 1
							}
							var o = 5 * time,
								h = o - Math.floor(o),
								l = createTypedArray("float32", s);
							if (s > 1) {
								for (r = 0; r < s; r += 1)
									l[r] = this.pv[r] + a[r] + (-e + 2 * e * BMMath.random()) * h;
								return l
							}
							return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
						}
							.bind(this);
					function loopInDuration(t, e) {
						return loopIn(t, e, !0)
					}
					function loopOutDuration(t, e) {
						return loopOut(t, e, !0)
					}
					thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn),
						thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut),
						thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
						this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
						this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
					var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
						time,
						velocity,
						value,
						text,
						textIndex,
						textTotal,
						selectorValue;
					function lookAt(t, e) {
						var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
							r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
						return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
					}
					function easeOut(t, e, i, r, s) {
						return applyEase(easeOutBez, t, e, i, r, s)
					}
					function easeIn(t, e, i, r, s) {
						return applyEase(easeInBez, t, e, i, r, s)
					}
					function ease(t, e, i, r, s) {
						return applyEase(easeInOutBez, t, e, i, r, s)
					}
					function applyEase(t, e, i, r, s, a) {
						void 0 === s ? (s = i, a = r) : e = (e - i) / (r - i),
							e > 1 ? e = 1 : e < 0 && (e = 0);
						var n = t(e);
						if ($bm_isInstanceOfArray(s)) {
							var o,
								h = s.length,
								l = createTypedArray("float32", h);
							for (o = 0; o < h; o += 1)
								l[o] = (a[o] - s[o]) * n + s[o];
							return l
						}
						return (a - s) * n + s
					}
					function nearestKey(t) {
						var e,
							i,
							r,
							s = data.k.length;
						if (data.k.length && "number" != typeof data.k[0])
							if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t)
								i = 1, r = data.k[0].t;
							else {
								for (e = 0; e < s - 1; e += 1) {
									if (t === data.k[e].t) {
										i = e + 1,
											r = data.k[e].t;
										break
									}
									if (t > data.k[e].t && t < data.k[e + 1].t) {
										t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
										break
									}
								}
								-1 === i && (i = e + 1, r = data.k[e].t)
							}
						else
							i = 0, r = 0;
						var a = {};
						return a.index = i,
							a.time = r / elem.comp.globalData.frameRate,
							a
					}
					function key(t) {
						var e,
							i,
							r;
						if (!data.k.length || "number" == typeof data.k[0])
							throw new Error("The property has no keyframe at index " + t);
						t -= 1,
							e = {
								time: data.k[t].t / elem.comp.globalData.frameRate,
								value: []
							};
						var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
						for (r = s.length, i = 0; i < r; i += 1)
							e[i] = s[i], e.value[i] = s[i];
						return e
					}
					function framesToTime(t, e) {
						return e || (e = elem.comp.globalData.frameRate),
							t / e
					}
					function timeToFrames(t, e) {
						return t || 0 === t || (t = time),
							e || (e = elem.comp.globalData.frameRate),
							t * e
					}
					function seedRandom(t) {
						BMMath.seedrandom(randSeed + t)
					}
					function sourceRectAtTime() {
						return elem.sourceRectAtTime()
					}
					function substring(t, e) {
						return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
					}
					function substr(value, t, e) {
						return typeof value === "string" ? (e ? value.slice(t, t + e) : value.slice(t)) : "";
					}
					function posterizeTime(t) {
						time = 0 === t ? 0 : Math.floor(time * t) / t,
							value = valueAtTime(time)
					}
					var index = elem.data.ind,
						hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
						parent,
						randSeed = Math.floor(1e6 * Math.random()),
						globalData = elem.globalData;
					function executeExpression(t) {
						return value = t,
							this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
					}
					return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData],
						executeExpression
				}
				return ob.initiateExpression = initiateExpression,
					ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal],
					ob.resetFrame = resetFrame,
					ob
			}
				(),
				Expressions = function () {
					var t = {
						initExpressions: function (t) {
							var e = 0,
								i = [];
							t.renderer.compInterface = CompExpressionInterface(t.renderer),
								t.renderer.globalData.projectInterface.registerComposition(t.renderer),
								t.renderer.globalData.pushExpression = function () {
									e += 1
								},
								t.renderer.globalData.popExpression = function () {
									0 == (e -= 1) && function () {
										var t,
											e = i.length;
										for (t = 0; t < e; t += 1)
											i[t].release();
										i.length = 0
									}
										()
								},
								t.renderer.globalData.registerExpressionProperty = function (t) {
									-1 === i.indexOf(t) && i.push(t)
								}
						}
					};
					return t.resetFrame = ExpressionManager.resetFrame,
						t
				}
					(),
				MaskManagerInterface = function () {
					function t(t, e) {
						this._mask = t,
							this._data = e
					}
					return Object.defineProperty(t.prototype, "maskPath", {
						get: function () {
							return this._mask.prop.k && this._mask.prop.getValue(),
								this._mask.prop
						}
					}),
						Object.defineProperty(t.prototype, "maskOpacity", {
							get: function () {
								return this._mask.op.k && this._mask.op.getValue(),
									100 * this._mask.op.v
							}
						}),
						function (e) {
							var i,
								r = createSizedArray(e.viewData.length),
								s = e.viewData.length;
							for (i = 0; i < s; i += 1)
								r[i] = new t(e.viewData[i], e.masksProperties[i]);
							return function (t) {
								for (i = 0; i < s;) {
									if (e.masksProperties[i].nm === t)
										return r[i];
									i += 1
								}
								return null
							}
						}
				}
					(),
				ExpressionPropertyInterface = function () {
					var t = {
						pv: 0,
						v: 0,
						mult: 1
					},
						e = {
							pv: [0, 0, 0],
							v: [0, 0, 0],
							mult: 1
						};
					function i(t, e, i) {
						Object.defineProperty(t, "velocity", {
							get: function () {
								return e.getVelocityAtTime(e.comp.currentFrame)
							}
						}),
							t.numKeys = e.keyframes ? e.keyframes.length : 0,
							t.key = function (r) {
								if (!t.numKeys)
									return 0;
								var s;
								s = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
								var a = "unidimensional" === i ? new Number(s) : Object.assign({}, s);
								return a.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate,
									a.value = "unidimensional" === i ? s[0] : s,
									a
							},
							t.valueAtTime = e.getValueAtTime,
							t.speedAtTime = e.getSpeedAtTime,
							t.velocityAtTime = e.getVelocityAtTime,
							t.propertyGroup = e.propertyGroup
					}
					function r() {
						return t
					}
					return function (s) {
						return s ? "unidimensional" === s.propType ? function (e) {
							e && "pv" in e || (e = t);
							var r = 1 / e.mult,
								s = e.pv * r,
								a = new Number(s);
							return a.value = s,
								i(a, e, "unidimensional"),
								function () {
									return e.k && e.getValue(),
										s = e.v * r,
										a.value !== s && ((a = new Number(s)).value = s, i(a, e, "unidimensional")),
										a
								}
						}
							(s) : function (t) {
								t && "pv" in t || (t = e);
								var r = 1 / t.mult,
									s = t.data && t.data.l || t.pv.length,
									a = createTypedArray("float32", s),
									n = createTypedArray("float32", s);
								return a.value = n,
									i(a, t, "multidimensional"),
									function () {
										t.k && t.getValue();
										for (var e = 0; e < s; e += 1)
											n[e] = t.v[e] * r, a[e] = n[e];
										return a
									}
							}
							(s) : r
					}
				}
					(),
				TransformExpressionInterface = function (t) {
					function e(t) {
						switch (t) {
							case "scale":
							case "Scale":
							case "ADBE Scale":
							case 6:
								return e.scale;
							case "rotation":
							case "Rotation":
							case "ADBE Rotation":
							case "ADBE Rotate Z":
							case 10:
								return e.rotation;
							case "ADBE Rotate X":
								return e.xRotation;
							case "ADBE Rotate Y":
								return e.yRotation;
							case "position":
							case "Position":
							case "ADBE Position":
							case 2:
								return e.position;
							case "ADBE Position_0":
								return e.xPosition;
							case "ADBE Position_1":
								return e.yPosition;
							case "ADBE Position_2":
								return e.zPosition;
							case "anchorPoint":
							case "AnchorPoint":
							case "Anchor Point":
							case "ADBE AnchorPoint":
							case 1:
								return e.anchorPoint;
							case "opacity":
							case "Opacity":
							case 11:
								return e.opacity;
							default:
								return null
						}
					}
					var i,
						r,
						s,
						a;
					return Object.defineProperty(e, "rotation", {
						get: ExpressionPropertyInterface(t.r || t.rz)
					}),
						Object.defineProperty(e, "zRotation", {
							get: ExpressionPropertyInterface(t.rz || t.r)
						}),
						Object.defineProperty(e, "xRotation", {
							get: ExpressionPropertyInterface(t.rx)
						}),
						Object.defineProperty(e, "yRotation", {
							get: ExpressionPropertyInterface(t.ry)
						}),
						Object.defineProperty(e, "scale", {
							get: ExpressionPropertyInterface(t.s)
						}),
						t.p ? a = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))),
						Object.defineProperty(e, "position", {
							get: function () {
								return t.p ? a() : [i(), r(), s ? s() : 0]
							}
						}),
						Object.defineProperty(e, "xPosition", {
							get: ExpressionPropertyInterface(t.px)
						}),
						Object.defineProperty(e, "yPosition", {
							get: ExpressionPropertyInterface(t.py)
						}),
						Object.defineProperty(e, "zPosition", {
							get: ExpressionPropertyInterface(t.pz)
						}),
						Object.defineProperty(e, "anchorPoint", {
							get: ExpressionPropertyInterface(t.a)
						}),
						Object.defineProperty(e, "opacity", {
							get: ExpressionPropertyInterface(t.o)
						}),
						Object.defineProperty(e, "skew", {
							get: ExpressionPropertyInterface(t.sk)
						}),
						Object.defineProperty(e, "skewAxis", {
							get: ExpressionPropertyInterface(t.sa)
						}),
						Object.defineProperty(e, "orientation", {
							get: ExpressionPropertyInterface(t.or)
						}),
						e
				},
				LayerExpressionInterface = function () {
					function t(t) {
						var e = new Matrix;
						return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e),
							e
					}
					function e(t, e) {
						var i = this.getMatrix(e);
						return i.props[12] = 0,
							i.props[13] = 0,
							i.props[14] = 0,
							this.applyPoint(i, t)
					}
					function i(t, e) {
						var i = this.getMatrix(e);
						return this.applyPoint(i, t)
					}
					function r(t, e) {
						var i = this.getMatrix(e);
						return i.props[12] = 0,
							i.props[13] = 0,
							i.props[14] = 0,
							this.invertPoint(i, t)
					}
					function s(t, e) {
						var i = this.getMatrix(e);
						return this.invertPoint(i, t)
					}
					function a(t, e) {
						if (this._elem.hierarchy && this._elem.hierarchy.length) {
							var i,
								r = this._elem.hierarchy.length;
							for (i = 0; i < r; i += 1)
								this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
						}
						return t.applyToPointArray(e[0], e[1], e[2] || 0)
					}
					function n(t, e) {
						if (this._elem.hierarchy && this._elem.hierarchy.length) {
							var i,
								r = this._elem.hierarchy.length;
							for (i = 0; i < r; i += 1)
								this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
						}
						return t.inversePoint(e)
					}
					function o(t) {
						var e = new Matrix;
						if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
							var i,
								r = this._elem.hierarchy.length;
							for (i = 0; i < r; i += 1)
								this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
							return e.inversePoint(t)
						}
						return e.inversePoint(t)
					}
					function h() {
						return [1, 1, 1, 1]
					}
					return function (l) {
						var p;
						function m(t) {
							switch (t) {
								case "ADBE Root Vectors Group":
								case "Contents":
								case 2:
									return m.shapeInterface;
								case 1:
								case 6:
								case "Transform":
								case "transform":
								case "ADBE Transform Group":
									return p;
								case 4:
								case "ADBE Effect Parade":
								case "effects":
								case "Effects":
									return m.effect;
								case "ADBE Text Properties":
									return m.textInterface;
								default:
									return null
							}
						}
						m.getMatrix = t,
							m.invertPoint = n,
							m.applyPoint = a,
							m.toWorld = i,
							m.toWorldVec = e,
							m.fromWorld = s,
							m.fromWorldVec = r,
							m.toComp = i,
							m.fromComp = o,
							m.sampleImage = h,
							m.sourceRectAtTime = l.sourceRectAtTime.bind(l),
							m._elem = l;
						var c = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
						return Object.defineProperties(m, {
							hasParent: {
								get: function () {
									return l.hierarchy.length
								}
							},
							parent: {
								get: function () {
									return l.hierarchy[0].layerInterface
								}
							},
							rotation: getDescriptor(p, "rotation"),
							scale: getDescriptor(p, "scale"),
							position: getDescriptor(p, "position"),
							opacity: getDescriptor(p, "opacity"),
							anchorPoint: c,
							anchor_point: c,
							transform: {
								get: function () {
									return p
								}
							},
							active: {
								get: function () {
									return l.isInRange
								}
							}
						}),
							m.startTime = l.data.st,
							m.index = l.data.ind,
							m.source = l.data.refId,
							m.height = 0 === l.data.ty ? l.data.h : 100,
							m.width = 0 === l.data.ty ? l.data.w : 100,
							m.inPoint = l.data.ip / l.comp.globalData.frameRate,
							m.outPoint = l.data.op / l.comp.globalData.frameRate,
							m._name = l.data.nm,
							m.registerMaskInterface = function (t) {
								m.mask = new MaskManagerInterface(t, l)
							},
							m.registerEffectsInterface = function (t) {
								m.effect = t
							},
							m
					}
				}
					(),
				propertyGroupFactory = function (t, e) {
					return function (i) {
						return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
					}
				},
				PropertyInterface = function (t, e) {
					var i = {
						_name: t
					};
					return function (t) {
						return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
					}
				},
				EffectsExpressionInterface = function () {
					var t = {
						createEffectsInterface: function (t, i) {
							if (t.effectsManager) {
								var r,
									s = [],
									a = t.data.ef,
									n = t.effectsManager.effectElements.length;
								for (r = 0; r < n; r += 1)
									s.push(e(a[r], t.effectsManager.effectElements[r], i, t));
								var o = t.data.ef || [],
									h = function (t) {
										for (r = 0, n = o.length; r < n;) {
											if (t === o[r].nm || t === o[r].mn || t === o[r].ix)
												return s[r];
											r += 1
										}
										return null
									};
								return Object.defineProperty(h, "numProperties", {
									get: function () {
										return o.length
									}
								}),
									h
							}
							return null
						}
					};
					function e(t, r, s, a) {
						function n(e) {
							for (var i = t.ef, r = 0, s = i.length; r < s;) {
								if (e === i[r].nm || e === i[r].mn || e === i[r].ix)
									return 5 === i[r].ty ? l[r] : l[r]();
								r += 1
							}
							throw new Error
						}
						var o,
							h = propertyGroupFactory(n, s),
							l = [],
							p = t.ef.length;
						for (o = 0; o < p; o += 1)
							5 === t.ef[o].ty ? l.push(e(t.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, a)) : l.push(i(r.effectElements[o], t.ef[o].ty, a, h));
						return "ADBE Color Control" === t.mn && Object.defineProperty(n, "color", {
							get: function () {
								return l[0]()
							}
						}),
							Object.defineProperties(n, {
								numProperties: {
									get: function () {
										return t.np
									}
								},
								_name: {
									value: t.nm
								},
								propertyGroup: {
									value: h
								}
							}),
							n.enabled = 0 !== t.en,
							n.active = n.enabled,
							n
					}
					function i(t, e, i, r) {
						var s = ExpressionPropertyInterface(t.p);
						return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
							function () {
								return 10 === e ? i.comp.compInterface(t.p.v) : s()
							}
					}
					return t
				}
					(),
				ShapePathInterface = function (t, e, i) {
					var r = e.sh;
					function s(t) {
						return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? s.path : null
					}
					var a = propertyGroupFactory(s, i);
					return r.setGroupProperty(PropertyInterface("Path", a)),
						Object.defineProperties(s, {
							path: {
								get: function () {
									return r.k && r.getValue(),
										r
								}
							},
							shape: {
								get: function () {
									return r.k && r.getValue(),
										r
								}
							},
							_name: {
								value: t.nm
							},
							ix: {
								value: t.ix
							},
							propertyIndex: {
								value: t.ix
							},
							mn: {
								value: t.mn
							},
							propertyGroup: {
								value: i
							}
						}),
						s
				},
				ShapeExpressionInterface = function () {
					function t(t, n, c) {
						var f,
							d = [],
							u = t ? t.length : 0;
						for (f = 0; f < u; f += 1)
							"gr" === t[f].ty ? d.push(e(t[f], n[f], c)) : "fl" === t[f].ty ? d.push(i(t[f], n[f], c)) : "st" === t[f].ty ? d.push(s(t[f], n[f], c)) : "tm" === t[f].ty ? d.push(a(t[f], n[f], c)) : "tr" === t[f].ty || ("el" === t[f].ty ? d.push(o(t[f], n[f], c)) : "sr" === t[f].ty ? d.push(h(t[f], n[f], c)) : "sh" === t[f].ty ? d.push(ShapePathInterface(t[f], n[f], c)) : "rc" === t[f].ty ? d.push(l(t[f], n[f], c)) : "rd" === t[f].ty ? d.push(p(t[f], n[f], c)) : "rp" === t[f].ty ? d.push(m(t[f], n[f], c)) : "gf" === t[f].ty ? d.push(r(t[f], n[f], c)) : d.push((t[f], n[f], function () {
								return null
							})));
						return d
					}
					function e(e, i, r) {
						var s = function (t) {
							switch (t) {
								case "ADBE Vectors Group":
								case "Contents":
								case 2:
									return s.content;
								default:
									return s.transform
							}
						};
						s.propertyGroup = propertyGroupFactory(s, r);
						var a = function (e, i, r) {
							var s,
								a = function (t) {
									for (var e = 0, i = s.length; e < i;) {
										if (s[e]._name === t || s[e].mn === t || s[e].propertyIndex === t || s[e].ix === t || s[e].ind === t)
											return s[e];
										e += 1
									}
									return "number" == typeof t ? s[t - 1] : null
								};
							a.propertyGroup = propertyGroupFactory(a, r),
								s = t(e.it, i.it, a.propertyGroup),
								a.numProperties = s.length;
							var o = n(e.it[e.it.length - 1], i.it[i.it.length - 1], a.propertyGroup);
							return a.transform = o,
								a.propertyIndex = e.cix,
								a._name = e.nm,
								a
						}
							(e, i, s.propertyGroup),
							o = n(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
						return s.content = a,
							s.transform = o,
							Object.defineProperty(s, "_name", {
								get: function () {
									return e.nm
								}
							}),
							s.numProperties = e.np,
							s.propertyIndex = e.ix,
							s.nm = e.nm,
							s.mn = e.mn,
							s
					}
					function i(t, e, i) {
						function r(t) {
							return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
						}
						return Object.defineProperties(r, {
							color: {
								get: ExpressionPropertyInterface(e.c)
							},
							opacity: {
								get: ExpressionPropertyInterface(e.o)
							},
							_name: {
								value: t.nm
							},
							mn: {
								value: t.mn
							}
						}),
							e.c.setGroupProperty(PropertyInterface("Color", i)),
							e.o.setGroupProperty(PropertyInterface("Opacity", i)),
							r
					}
					function r(t, e, i) {
						function r(t) {
							return "Start Point" === t || "start point" === t ? r.startPoint : "End Point" === t || "end point" === t ? r.endPoint : "Opacity" === t || "opacity" === t ? r.opacity : null
						}
						return Object.defineProperties(r, {
							startPoint: {
								get: ExpressionPropertyInterface(e.s)
							},
							endPoint: {
								get: ExpressionPropertyInterface(e.e)
							},
							opacity: {
								get: ExpressionPropertyInterface(e.o)
							},
							type: {
								get: function () {
									return "a"
								}
							},
							_name: {
								value: t.nm
							},
							mn: {
								value: t.mn
							}
						}),
							e.s.setGroupProperty(PropertyInterface("Start Point", i)),
							e.e.setGroupProperty(PropertyInterface("End Point", i)),
							e.o.setGroupProperty(PropertyInterface("Opacity", i)),
							r
					}
					function s(t, e, i) {
						var r,
							s = propertyGroupFactory(l, i),
							a = propertyGroupFactory(h, s);
						function n(i) {
							Object.defineProperty(h, t.d[i].nm, {
								get: ExpressionPropertyInterface(e.d.dataProps[i].p)
							})
						}
						var o = t.d ? t.d.length : 0,
							h = {};
						for (r = 0; r < o; r += 1)
							n(r), e.d.dataProps[r].p.setGroupProperty(a);
						function l(t) {
							return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
						}
						return Object.defineProperties(l, {
							color: {
								get: ExpressionPropertyInterface(e.c)
							},
							opacity: {
								get: ExpressionPropertyInterface(e.o)
							},
							strokeWidth: {
								get: ExpressionPropertyInterface(e.w)
							},
							dash: {
								get: function () {
									return h
								}
							},
							_name: {
								value: t.nm
							},
							mn: {
								value: t.mn
							}
						}),
							e.c.setGroupProperty(PropertyInterface("Color", s)),
							e.o.setGroupProperty(PropertyInterface("Opacity", s)),
							e.w.setGroupProperty(PropertyInterface("Stroke Width", s)),
							l
					}
					function a(t, e, i) {
						function r(e) {
							return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
						}
						var s = propertyGroupFactory(r, i);
						return r.propertyIndex = t.ix,
							e.s.setGroupProperty(PropertyInterface("Start", s)),
							e.e.setGroupProperty(PropertyInterface("End", s)),
							e.o.setGroupProperty(PropertyInterface("Offset", s)),
							r.propertyIndex = t.ix,
							r.propertyGroup = i,
							Object.defineProperties(r, {
								start: {
									get: ExpressionPropertyInterface(e.s)
								},
								end: {
									get: ExpressionPropertyInterface(e.e)
								},
								offset: {
									get: ExpressionPropertyInterface(e.o)
								},
								_name: {
									value: t.nm
								}
							}),
							r.mn = t.mn,
							r
					}
					function n(t, e, i) {
						function r(e) {
							return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
						}
						var s = propertyGroupFactory(r, i);
						return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)),
							e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)),
							e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)),
							e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)),
							e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)),
							e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))),
							e.transform.op.setGroupProperty(PropertyInterface("Opacity", s)),
							Object.defineProperties(r, {
								opacity: {
									get: ExpressionPropertyInterface(e.transform.mProps.o)
								},
								position: {
									get: ExpressionPropertyInterface(e.transform.mProps.p)
								},
								anchorPoint: {
									get: ExpressionPropertyInterface(e.transform.mProps.a)
								},
								scale: {
									get: ExpressionPropertyInterface(e.transform.mProps.s)
								},
								rotation: {
									get: ExpressionPropertyInterface(e.transform.mProps.r)
								},
								skew: {
									get: ExpressionPropertyInterface(e.transform.mProps.sk)
								},
								skewAxis: {
									get: ExpressionPropertyInterface(e.transform.mProps.sa)
								},
								_name: {
									value: t.nm
								}
							}),
							r.ty = "tr",
							r.mn = t.mn,
							r.propertyGroup = i,
							r
					}
					function o(t, e, i) {
						function r(e) {
							return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
						}
						var s = propertyGroupFactory(r, i);
						r.propertyIndex = t.ix;
						var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
						return a.s.setGroupProperty(PropertyInterface("Size", s)),
							a.p.setGroupProperty(PropertyInterface("Position", s)),
							Object.defineProperties(r, {
								size: {
									get: ExpressionPropertyInterface(a.s)
								},
								position: {
									get: ExpressionPropertyInterface(a.p)
								},
								_name: {
									value: t.nm
								}
							}),
							r.mn = t.mn,
							r
					}
					function h(t, e, i) {
						function r(e) {
							return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
						}
						var s = propertyGroupFactory(r, i),
							a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
						return r.propertyIndex = t.ix,
							a.or.setGroupProperty(PropertyInterface("Outer Radius", s)),
							a.os.setGroupProperty(PropertyInterface("Outer Roundness", s)),
							a.pt.setGroupProperty(PropertyInterface("Points", s)),
							a.p.setGroupProperty(PropertyInterface("Position", s)),
							a.r.setGroupProperty(PropertyInterface("Rotation", s)),
							t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", s))),
							Object.defineProperties(r, {
								position: {
									get: ExpressionPropertyInterface(a.p)
								},
								rotation: {
									get: ExpressionPropertyInterface(a.r)
								},
								points: {
									get: ExpressionPropertyInterface(a.pt)
								},
								outerRadius: {
									get: ExpressionPropertyInterface(a.or)
								},
								outerRoundness: {
									get: ExpressionPropertyInterface(a.os)
								},
								innerRadius: {
									get: ExpressionPropertyInterface(a.ir)
								},
								innerRoundness: {
									get: ExpressionPropertyInterface(a.is)
								},
								_name: {
									value: t.nm
								}
							}),
							r.mn = t.mn,
							r
					}
					function l(t, e, i) {
						function r(e) {
							return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
						}
						var s = propertyGroupFactory(r, i),
							a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
						return r.propertyIndex = t.ix,
							a.p.setGroupProperty(PropertyInterface("Position", s)),
							a.s.setGroupProperty(PropertyInterface("Size", s)),
							a.r.setGroupProperty(PropertyInterface("Rotation", s)),
							Object.defineProperties(r, {
								position: {
									get: ExpressionPropertyInterface(a.p)
								},
								roundness: {
									get: ExpressionPropertyInterface(a.r)
								},
								size: {
									get: ExpressionPropertyInterface(a.s)
								},
								_name: {
									value: t.nm
								}
							}),
							r.mn = t.mn,
							r
					}
					function p(t, e, i) {
						function r(e) {
							return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
						}
						var s = propertyGroupFactory(r, i),
							a = e;
						return r.propertyIndex = t.ix,
							a.rd.setGroupProperty(PropertyInterface("Radius", s)),
							Object.defineProperties(r, {
								radius: {
									get: ExpressionPropertyInterface(a.rd)
								},
								_name: {
									value: t.nm
								}
							}),
							r.mn = t.mn,
							r
					}
					function m(t, e, i) {
						function r(e) {
							return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
						}
						var s = propertyGroupFactory(r, i),
							a = e;
						return r.propertyIndex = t.ix,
							a.c.setGroupProperty(PropertyInterface("Copies", s)),
							a.o.setGroupProperty(PropertyInterface("Offset", s)),
							Object.defineProperties(r, {
								copies: {
									get: ExpressionPropertyInterface(a.c)
								},
								offset: {
									get: ExpressionPropertyInterface(a.o)
								},
								_name: {
									value: t.nm
								}
							}),
							r.mn = t.mn,
							r
					}
					return function (e, i, r) {
						var s;
						function a(t) {
							if ("number" == typeof t)
								return 0 === (t = void 0 === t ? 1 : t) ? r : s[t - 1];
							for (var e = 0, i = s.length; e < i;) {
								if (s[e]._name === t)
									return s[e];
								e += 1
							}
							return null
						}
						return a.propertyGroup = propertyGroupFactory(a, (function () {
							return r
						})),
							s = t(e, i, a.propertyGroup),
							a.numProperties = s.length,
							a._name = "Contents",
							a
					}
				}
					(),
				TextExpressionInterface = function (t) {
					var e;
					function i(t) {
						return "ADBE Text Document" === t ? i.sourceText : null
					}
					return Object.defineProperty(i, "sourceText", {
						get: function () {
							t.textProperty.getValue();
							var i = t.textProperty.currentData.t;
							return e && i === e.value || ((e = new String(i)).value = i || new String(i), Object.defineProperty(e, "style", {
								get: function () {
									return {
										fillColor: t.textProperty.currentData.fc
									}
								}
							})),
								e
						}
					}),
						i
				};
			function _typeof(t) {
				return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
					return typeof t
				}
					: function (t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					},
					_typeof(t)
			}
			var FootageInterface = (dataInterfaceFactory = function (t) {
				function e(t) {
					return "Outline" === t ? e.outlineInterface() : null
				}
				return e._name = "Outline",
					e.outlineInterface = function (t) {
						var e = "",
							i = t.getFootageData();
						function r(t) {
							if (i[t])
								return e = t, "object" === _typeof(i = i[t]) ? r : i;
							var s = t.indexOf(e);
							if (-1 !== s) {
								var a = parseInt(t.substr(s + e.length), 10);
								return "object" === _typeof(i = i[a]) ? r : i
							}
							return ""
						}
						return function () {
							return e = "",
								i = t.getFootageData(),
								r
						}
					}
						(t),
					e
			}, function (t) {
				function e(t) {
					return "Data" === t ? e.dataInterface : null
				}
				return e._name = "Data",
					e.dataInterface = dataInterfaceFactory(t),
					e
			}),
				dataInterfaceFactory,
				interfaces = {
					layer: LayerExpressionInterface,
					effects: EffectsExpressionInterface,
					comp: CompExpressionInterface,
					shape: ShapeExpressionInterface,
					text: TextExpressionInterface,
					footage: FootageInterface
				};
			function getInterface(t) {
				return interfaces[t] || null
			}
			var expressionHelpers = {
				searchExpressions: function (t, e, i) {
					e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
				},
				getSpeedAtTime: function (t) {
					var e = this.getValueAtTime(t),
						i = this.getValueAtTime(t + - .01),
						r = 0;
					if (e.length) {
						var s;
						for (s = 0; s < e.length; s += 1)
							r += Math.pow(i[s] - e[s], 2);
						r = 100 * Math.sqrt(r)
					} else
						r = 0;
					return r
				},
				getVelocityAtTime: function (t) {
					if (void 0 !== this.vel)
						return this.vel;
					var e,
						i,
						r = - .001,
						s = this.getValueAtTime(t),
						a = this.getValueAtTime(t + r);
					if (s.length)
						for (e = createTypedArray("float32", s.length), i = 0; i < s.length; i += 1)
							e[i] = (a[i] - s[i]) / r;
					else
						e = (a - s) / r;
					return e
				},
				getValueAtTime: function (t) {
					return t *= this.elem.globalData.frameRate,
						(t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t),
						this._cachingAtTime.value
				},
				getStaticValueAtTime: function () {
					return this.pv
				},
				setGroupProperty: function (t) {
					this.propertyGroup = t
				}
			};
			function addPropertyDecorator() {
				function t(t, e, i) {
					if (!this.k || !this.keyframes)
						return this.pv;
					t = t ? t.toLowerCase() : "";
					var r,
						s,
						a,
						n,
						o,
						h = this.comp.renderedFrame,
						l = this.keyframes,
						p = l[l.length - 1].t;
					if (h <= p)
						return this.pv;
					if (i ? s = p - (r = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
						if (Math.floor((h - s) / r) % 2 != 0)
							return this.getValueAtTime((r - (h - s) % r + s) / this.comp.globalData.frameRate, 0)
					} else {
						if ("offset" === t) {
							var m = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
								c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
								f = this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0),
								d = Math.floor((h - s) / r);
							if (this.pv.length) {
								for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1)
									o[a] = (c[a] - m[a]) * d + f[a];
								return o
							}
							return (c - m) * d + f
						}
						if ("continue" === t) {
							var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
								y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
							if (this.pv.length) {
								for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1)
									o[a] = u[a] + (u[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
								return o
							}
							return u + (h - p) / .001 * (u - y)
						}
					}
					return this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0)
				}
				function e(t, e, i) {
					if (!this.k)
						return this.pv;
					t = t ? t.toLowerCase() : "";
					var r,
						s,
						a,
						n,
						o,
						h = this.comp.renderedFrame,
						l = this.keyframes,
						p = l[0].t;
					if (h >= p)
						return this.pv;
					if (i ? s = p + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = (s = l[e].t) - p), "pingpong" === t) {
						if (Math.floor((p - h) / r) % 2 == 0)
							return this.getValueAtTime(((p - h) % r + p) / this.comp.globalData.frameRate, 0)
					} else {
						if ("offset" === t) {
							var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
								c = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
								f = this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0),
								d = Math.floor((p - h) / r) + 1;
							if (this.pv.length) {
								for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1)
									o[a] = f[a] - (c[a] - m[a]) * d;
								return o
							}
							return f - (c - m) * d
						}
						if ("continue" === t) {
							var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
								y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
							if (this.pv.length) {
								for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1)
									o[a] = u[a] + (u[a] - y[a]) * (p - h) / .001;
								return o
							}
							return u + (u - y) * (p - h) / .001
						}
					}
					return this.getValueAtTime((r - ((p - h) % r + p)) / this.comp.globalData.frameRate, 0)
				}
				function i(t, e) {
					if (!this.k)
						return this.pv;
					if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1)
						return this.pv;
					var i,
						r,
						s = this.comp.renderedFrame / this.comp.globalData.frameRate,
						a = s - t,
						n = e > 1 ? (s + t - a) / (e - 1) : 1,
						o = 0,
						h = 0;
					for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
						if (r = this.getValueAtTime(a + o * n), this.pv.length)
							for (h = 0; h < this.pv.length; h += 1)
								i[h] += r[h];
						else
							i += r;
						o += 1
					}
					if (this.pv.length)
						for (h = 0; h < this.pv.length; h += 1)
							i[h] /= e;
					else
						i /= e;
					return i
				}
				function r(t) {
					this._transformCachingAtTime || (this._transformCachingAtTime = {
						v: new Matrix
					});
					var e = this._transformCachingAtTime.v;
					if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
						var i = this.a.getValueAtTime(t);
						e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
					}
					if (this.appliedTransformations < 2) {
						var r = this.s.getValueAtTime(t);
						e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
					}
					if (this.sk && this.appliedTransformations < 3) {
						var s = this.sk.getValueAtTime(t),
							a = this.sa.getValueAtTime(t);
						e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult)
					}
					if (this.r && this.appliedTransformations < 4) {
						var n = this.r.getValueAtTime(t);
						e.rotate(-n * this.r.mult)
					} else if (!this.r && this.appliedTransformations < 4) {
						var o = this.rz.getValueAtTime(t),
							h = this.ry.getValueAtTime(t),
							l = this.rx.getValueAtTime(t),
							p = this.or.getValueAtTime(t);
						e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
					}
					if (this.data.p && this.data.p.s) {
						var m = this.px.getValueAtTime(t),
							c = this.py.getValueAtTime(t);
						if (this.data.p.z) {
							var f = this.pz.getValueAtTime(t);
							e.translate(m * this.px.mult, c * this.py.mult, -f * this.pz.mult)
						} else
							e.translate(m * this.px.mult, c * this.py.mult, 0)
					} else {
						var d = this.p.getValueAtTime(t);
						e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
					}
					return e
				}
				function s() {
					return this.v.clone(new Matrix)
				}
				var a = TransformPropertyFactory.getTransformProperty;
				TransformPropertyFactory.getTransformProperty = function (t, e, i) {
					var n = a(t, e, i);
					return n.dynamicProperties.length ? n.getValueAtTime = r.bind(n) : n.getValueAtTime = s.bind(n),
						n.setGroupProperty = expressionHelpers.setGroupProperty,
						n
				};
				var n = PropertyFactory.getProp;
				PropertyFactory.getProp = function (r, s, a, o, h) {
					var l = n(r, s, a, o, h);
					l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l),
						l.setGroupProperty = expressionHelpers.setGroupProperty,
						l.loopOut = t,
						l.loopIn = e,
						l.smooth = i,
						l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l),
						l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l),
						l.numKeys = 1 === s.a ? s.k.length : 0,
						l.propertyIndex = s.ix;
					var p = 0;
					return 0 !== a && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)),
						l._cachingAtTime = {
							lastFrame: initialDefaultFrame,
							lastIndex: 0,
							value: p
						},
						expressionHelpers.searchExpressions(r, s, l),
						l.k && h.addDynamicProperty(l),
						l
				};
				var o = ShapePropertyFactory.getConstructorFunction(),
					h = ShapePropertyFactory.getKeyframedConstructorFunction();
				function l() { }
				l.prototype = {
					vertices: function (t, e) {
						this.k && this.getValue();
						var i,
							r = this.v;
						void 0 !== e && (r = this.getValueAtTime(e, 0));
						var s = r._length,
							a = r[t],
							n = r.v,
							o = createSizedArray(s);
						for (i = 0; i < s; i += 1)
							o[i] = "i" === t || "o" === t ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]];
						return o
					},
					points: function (t) {
						return this.vertices("v", t)
					},
					inTangents: function (t) {
						return this.vertices("i", t)
					},
					outTangents: function (t) {
						return this.vertices("o", t)
					},
					isClosed: function () {
						return this.v.c
					},
					pointOnPath: function (t, e) {
						var i = this.v;
						void 0 !== e && (i = this.getValueAtTime(e, 0)),
							this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
						for (var r, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h;) {
							if (l + a[o].addedLength > n) {
								var p = o,
									m = i.c && o === h - 1 ? 0 : o + 1,
									c = (n - l) / a[o].addedLength;
								r = bez.getPointInSegment(i.v[p], i.v[m], i.o[p], i.i[m], c, a[o]);
								break
							}
							l += a[o].addedLength,
								o += 1
						}
						return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]),
							r
					},
					vectorOnPath: function (t, e, i) {
						1 == t ? t = this.v.c : 0 == t && (t = .999);
						var r = this.pointOnPath(t, e),
							s = this.pointOnPath(t + .001, e),
							a = s[0] - r[0],
							n = s[1] - r[1],
							o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
						return 0 === o ? [0, 0] : "tangent" === i ? [a / o, n / o] : [-n / o, a / o]
					},
					tangentOnPath: function (t, e) {
						return this.vectorOnPath(t, e, "tangent")
					},
					normalOnPath: function (t, e) {
						return this.vectorOnPath(t, e, "normal")
					},
					setGroupProperty: expressionHelpers.setGroupProperty,
					getValueAtTime: expressionHelpers.getStaticValueAtTime
				},
					extendPrototype([l], o),
					extendPrototype([l], h),
					h.prototype.getValueAtTime = function (t) {
						return this._cachingAtTime || (this._cachingAtTime = {
							shapeValue: shapePool.clone(this.pv),
							lastIndex: 0,
							lastTime: initialDefaultFrame
						}),
							t *= this.elem.globalData.frameRate,
							(t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
							this._cachingAtTime.shapeValue
					},
					h.prototype.initiateExpression = ExpressionManager.initiateExpression;
				var p = ShapePropertyFactory.getShapeProp;
				ShapePropertyFactory.getShapeProp = function (t, e, i, r, s) {
					var a = p(t, e, i, r, s);
					return a.propertyIndex = e.ix,
						a.lock = !1,
						3 === i ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, a),
						a.k && t.addDynamicProperty(a),
						a
				}
			}
			function initialize$1() {
				addPropertyDecorator()
			}
			function addDecorator() {
				TextProperty.prototype.getExpressionValue = function (t, e) {
					var i = this.calculateExpression(e);
					if (t.t !== i) {
						var r = {};
						return this.copyData(r, t),
							r.t = i.toString(),
							r.__complete = !1,
							r
					}
					return t
				},
					TextProperty.prototype.searchProperty = function () {
						var t = this.searchKeyframes(),
							e = this.searchExpressions();
						return this.kf = t || e,
							this.kf
					},
					TextProperty.prototype.searchExpressions = function () {
						return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
					}
			}
			function initialize() {
				addDecorator()
			}
			function SVGComposableEffect() { }
			SVGComposableEffect.prototype = {
				createMergeNode: function (t, e) {
					var i,
						r,
						s = createNS("feMerge");
					for (s.setAttribute("result", t), r = 0; r < e.length; r += 1)
						(i = createNS("feMergeNode")).setAttribute("in", e[r]), s.appendChild(i), s.appendChild(i);
					return s
				}
			};
			var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
			function SVGTintFilter(t, e, i, r, s) {
				this.filterManager = e;
				var a = createNS("feColorMatrix");
				a.setAttribute("type", "matrix"),
					a.setAttribute("color-interpolation-filters", "linearRGB"),
					a.setAttribute("values", linearFilterValue + " 1 0"),
					this.linearFilter = a,
					a.setAttribute("result", r + "_tint_1"),
					t.appendChild(a),
					(a = createNS("feColorMatrix")).setAttribute("type", "matrix"),
					a.setAttribute("color-interpolation-filters", "sRGB"),
					a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
					a.setAttribute("result", r + "_tint_2"),
					t.appendChild(a),
					this.matrixFilter = a;
				var n = this.createMergeNode(r, [s, r + "_tint_1", r + "_tint_2"]);
				t.appendChild(n)
			}
			function SVGFillFilter(t, e, i, r) {
				this.filterManager = e;
				var s = createNS("feColorMatrix");
				s.setAttribute("type", "matrix"),
					s.setAttribute("color-interpolation-filters", "sRGB"),
					s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
					s.setAttribute("result", r),
					t.appendChild(s),
					this.matrixFilter = s
			}
			function SVGStrokeEffect(t, e, i) {
				this.initialized = !1,
					this.filterManager = e,
					this.elem = i,
					this.paths = []
			}
			function SVGTritoneFilter(t, e, i, r) {
				this.filterManager = e;
				var s = createNS("feColorMatrix");
				s.setAttribute("type", "matrix"),
					s.setAttribute("color-interpolation-filters", "linearRGB"),
					s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
					t.appendChild(s);
				var a = createNS("feComponentTransfer");
				a.setAttribute("color-interpolation-filters", "sRGB"),
					a.setAttribute("result", r),
					this.matrixFilter = a;
				var n = createNS("feFuncR");
				n.setAttribute("type", "table"),
					a.appendChild(n),
					this.feFuncR = n;
				var o = createNS("feFuncG");
				o.setAttribute("type", "table"),
					a.appendChild(o),
					this.feFuncG = o;
				var h = createNS("feFuncB");
				h.setAttribute("type", "table"),
					a.appendChild(h),
					this.feFuncB = h,
					t.appendChild(a)
			}
			function SVGProLevelsFilter(t, e, i, r) {
				this.filterManager = e;
				var s = this.filterManager.effectElements,
					a = createNS("feComponentTransfer");
				(s[10].p.k || 0 !== s[10].p.v || s[11].p.k || 1 !== s[11].p.v || s[12].p.k || 1 !== s[12].p.v || s[13].p.k || 0 !== s[13].p.v || s[14].p.k || 1 !== s[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)),
					(s[17].p.k || 0 !== s[17].p.v || s[18].p.k || 1 !== s[18].p.v || s[19].p.k || 1 !== s[19].p.v || s[20].p.k || 0 !== s[20].p.v || s[21].p.k || 1 !== s[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)),
					(s[24].p.k || 0 !== s[24].p.v || s[25].p.k || 1 !== s[25].p.v || s[26].p.k || 1 !== s[26].p.v || s[27].p.k || 0 !== s[27].p.v || s[28].p.k || 1 !== s[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)),
					(s[31].p.k || 0 !== s[31].p.v || s[32].p.k || 1 !== s[32].p.v || s[33].p.k || 1 !== s[33].p.v || s[34].p.k || 0 !== s[34].p.v || s[35].p.k || 1 !== s[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)),
					(this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)),
					(s[3].p.k || 0 !== s[3].p.v || s[4].p.k || 1 !== s[4].p.v || s[5].p.k || 1 !== s[5].p.v || s[6].p.k || 0 !== s[6].p.v || s[7].p.k || 1 !== s[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", r), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
			}
			function SVGDropShadowEffect(t, e, i, r, s) {
				var a = e.container.globalData.renderConfig.filterSize,
					n = e.data.fs || a;
				t.setAttribute("x", n.x || a.x),
					t.setAttribute("y", n.y || a.y),
					t.setAttribute("width", n.width || a.width),
					t.setAttribute("height", n.height || a.height),
					this.filterManager = e;
				var o = createNS("feGaussianBlur");
				o.setAttribute("in", "SourceAlpha"),
					o.setAttribute("result", r + "_drop_shadow_1"),
					o.setAttribute("stdDeviation", "0"),
					this.feGaussianBlur = o,
					t.appendChild(o);
				var h = createNS("feOffset");
				h.setAttribute("dx", "25"),
					h.setAttribute("dy", "0"),
					h.setAttribute("in", r + "_drop_shadow_1"),
					h.setAttribute("result", r + "_drop_shadow_2"),
					this.feOffset = h,
					t.appendChild(h);
				var l = createNS("feFlood");
				l.setAttribute("flood-color", "#00ff00"),
					l.setAttribute("flood-opacity", "1"),
					l.setAttribute("result", r + "_drop_shadow_3"),
					this.feFlood = l,
					t.appendChild(l);
				var p = createNS("feComposite");
				p.setAttribute("in", r + "_drop_shadow_3"),
					p.setAttribute("in2", r + "_drop_shadow_2"),
					p.setAttribute("operator", "in"),
					p.setAttribute("result", r + "_drop_shadow_4"),
					t.appendChild(p);
				var m = this.createMergeNode(r, [r + "_drop_shadow_4", s]);
				t.appendChild(m)
			}
			extendPrototype([SVGComposableEffect], SVGTintFilter),
				SVGTintFilter.prototype.renderFrame = function (t) {
					if (t || this.filterManager._mdf) {
						var e = this.filterManager.effectElements[0].p.v,
							i = this.filterManager.effectElements[1].p.v,
							r = this.filterManager.effectElements[2].p.v / 100;
						this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"),
							this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
					}
				},
				SVGFillFilter.prototype.renderFrame = function (t) {
					if (t || this.filterManager._mdf) {
						var e = this.filterManager.effectElements[2].p.v,
							i = this.filterManager.effectElements[6].p.v;
						this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
					}
				},
				SVGStrokeEffect.prototype.initialize = function () {
					var t,
						e,
						i,
						r,
						s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
					for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1)
						t = createNS("path"), e.appendChild(t), this.paths.push({
							p: t,
							m: i
						});
					if (3 === this.filterManager.effectElements[10].p.v) {
						var a = createNS("mask"),
							n = createElementID();
						a.setAttribute("id", n),
							a.setAttribute("mask-type", "alpha"),
							a.appendChild(e),
							this.elem.globalData.defs.appendChild(a);
						var o = createNS("g");
						for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); s[0];)
							o.appendChild(s[0]);
						this.elem.layerElement.appendChild(o),
							this.masker = a,
							e.setAttribute("stroke", "#fff")
					} else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
						if (2 === this.filterManager.effectElements[10].p.v)
							for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;)
								this.elem.layerElement.removeChild(s[0]);
						this.elem.layerElement.appendChild(e),
							this.elem.layerElement.removeAttribute("mask"),
							e.setAttribute("stroke", "#fff")
					}
					this.initialized = !0,
						this.pathMasker = e
				},
				SVGStrokeEffect.prototype.renderFrame = function (t) {
					var e;
					this.initialized || this.initialize();
					var i,
						r,
						s = this.paths.length;
					for (e = 0; e < s; e += 1)
						if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
							var a;
							if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
								var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
									o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
									h = r.getTotalLength();
								a = "0 0 0 " + h * n + " ";
								var l,
									p = h * (o - n),
									m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
									c = Math.floor(p / m);
								for (l = 0; l < c; l += 1)
									a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
								a += "0 " + 10 * h + " 0 0"
							} else
								a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
							r.setAttribute("stroke-dasharray", a)
						}
					if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
						var f = this.filterManager.effectElements[3].p.v;
						this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
					}
				},
				SVGTritoneFilter.prototype.renderFrame = function (t) {
					if (t || this.filterManager._mdf) {
						var e = this.filterManager.effectElements[0].p.v,
							i = this.filterManager.effectElements[1].p.v,
							r = this.filterManager.effectElements[2].p.v,
							s = r[0] + " " + i[0] + " " + e[0],
							a = r[1] + " " + i[1] + " " + e[1],
							n = r[2] + " " + i[2] + " " + e[2];
						this.feFuncR.setAttribute("tableValues", s),
							this.feFuncG.setAttribute("tableValues", a),
							this.feFuncB.setAttribute("tableValues", n)
					}
				},
				SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
					var i = createNS(t);
					return i.setAttribute("type", "table"),
						e.appendChild(i),
						i
				},
				SVGProLevelsFilter.prototype.getTableValue = function (t, e, i, r, s) {
					for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
						length: 256
					}), m = 0, c = s - r, f = e - t; o <= 256;)
						n = (a = o / 256) <= h ? f < 0 ? s : r : a >= l ? f < 0 ? r : s : r + c * Math.pow((a - t) / f, 1 / i), p[m] = n, m += 1, o += 256 / 255;
					return p.join(" ")
				},
				SVGProLevelsFilter.prototype.renderFrame = function (t) {
					if (t || this.filterManager._mdf) {
						var e,
							i = this.filterManager.effectElements;
						this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)),
							this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)),
							this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)),
							this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)),
							this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
					}
				},
				extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
				SVGDropShadowEffect.prototype.renderFrame = function (t) {
					if (t || this.filterManager._mdf) {
						if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
							var e = this.filterManager.effectElements[0].p.v;
							this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
						}
						if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
							var i = this.filterManager.effectElements[3].p.v,
								r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
								s = i * Math.cos(r),
								a = i * Math.sin(r);
							this.feOffset.setAttribute("dx", s),
								this.feOffset.setAttribute("dy", a)
						}
					}
				};
			var _svgMatteSymbols = [];
			function SVGMatte3Effect(t, e, i) {
				this.initialized = !1,
					this.filterManager = e,
					this.filterElem = t,
					this.elem = i,
					i.matteElement = createNS("g"),
					i.matteElement.appendChild(i.layerElement),
					i.matteElement.appendChild(i.transformedElement),
					i.baseElement = i.matteElement
			}
			function SVGGaussianBlurEffect(t, e, i, r) {
				t.setAttribute("x", "-100%"),
					t.setAttribute("y", "-100%"),
					t.setAttribute("width", "300%"),
					t.setAttribute("height", "300%"),
					this.filterManager = e;
				var s = createNS("feGaussianBlur");
				s.setAttribute("result", r),
					t.appendChild(s),
					this.feGaussianBlur = s
			}
			function TransformEffect() { }
			function SVGTransformEffect(t, e) {
				this.init(e)
			}
			function CVTransformEffect(t) {
				this.init(t)
			}
			return SVGMatte3Effect.prototype.findSymbol = function (t) {
				for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
					if (_svgMatteSymbols[e] === t)
						return _svgMatteSymbols[e];
					e += 1
				}
				return null
			},
				SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
					var i = t.layerElement.parentNode;
					if (i) {
						for (var r, s = i.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement;)
							a += 1;
						a <= n - 2 && (r = s[a + 1]);
						var o = createNS("use");
						o.setAttribute("href", "#" + e),
							r ? i.insertBefore(o, r) : i.appendChild(o)
					}
				},
				SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
					if (!this.findSymbol(e)) {
						var i = createElementID(),
							r = createNS("mask");
						r.setAttribute("id", e.layerId),
							r.setAttribute("mask-type", "alpha"),
							_svgMatteSymbols.push(e);
						var s = t.globalData.defs;
						s.appendChild(r);
						var a = createNS("symbol");
						a.setAttribute("id", i),
							this.replaceInParent(e, i),
							a.appendChild(e.layerElement),
							s.appendChild(a);
						var n = createNS("use");
						n.setAttribute("href", "#" + i),
							r.appendChild(n),
							e.data.hd = !1,
							e.show()
					}
					t.setMatte(e.layerId)
				},
				SVGMatte3Effect.prototype.initialize = function () {
					for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;)
						e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
					this.initialized = !0
				},
				SVGMatte3Effect.prototype.renderFrame = function () {
					this.initialized || this.initialize()
				},
				SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
					if (t || this.filterManager._mdf) {
						var e = .3 * this.filterManager.effectElements[0].p.v,
							i = this.filterManager.effectElements[1].p.v,
							r = 3 == i ? 0 : e,
							s = 2 == i ? 0 : e;
						this.feGaussianBlur.setAttribute("stdDeviation", r + " " + s);
						var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
						this.feGaussianBlur.setAttribute("edgeMode", a)
					}
				},
				TransformEffect.prototype.init = function (t) {
					this.effectsManager = t,
						this.type = effectTypes.TRANSFORM_EFFECT,
						this.matrix = new Matrix,
						this.opacity = -1,
						this._mdf = !1,
						this._opMdf = !1
				},
				TransformEffect.prototype.renderFrame = function (t) {
					if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
						var e = this.effectsManager.effectElements,
							i = e[0].p.v,
							r = e[1].p.v,
							s = 1 === e[2].p.v,
							a = e[3].p.v,
							n = s ? a : e[4].p.v,
							o = e[5].p.v,
							h = e[6].p.v,
							l = e[7].p.v;
						this.matrix.reset(),
							this.matrix.translate(-i[0], -i[1], i[2]),
							this.matrix.scale(.01 * n, .01 * a, 1),
							this.matrix.rotate(-l * degToRads),
							this.matrix.skewFromAxis(-o * degToRads, (h + 90) * degToRads),
							this.matrix.translate(r[0], r[1], 0),
							this._mdf = !0,
							this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
					}
				},
				extendPrototype([TransformEffect], SVGTransformEffect),
				extendPrototype([TransformEffect], CVTransformEffect),
				registerRenderer("canvas", CanvasRenderer),
				registerRenderer("html", HybridRenderer),
				registerRenderer("svg", SVGRenderer),
				ShapeModifiers.registerModifier("tm", TrimModifier),
				ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
				ShapeModifiers.registerModifier("rp", RepeaterModifier),
				ShapeModifiers.registerModifier("rd", RoundCornersModifier),
				ShapeModifiers.registerModifier("zz", ZigZagModifier),
				ShapeModifiers.registerModifier("op", OffsetPathModifier),
				setExpressionsPlugin(Expressions),
				setExpressionInterfaces(getInterface),
				initialize$1(),
				initialize(),
				registerEffect$1(20, SVGTintFilter, !0),
				registerEffect$1(21, SVGFillFilter, !0),
				registerEffect$1(22, SVGStrokeEffect, !1),
				registerEffect$1(23, SVGTritoneFilter, !0),
				registerEffect$1(24, SVGProLevelsFilter, !0),
				registerEffect$1(25, SVGDropShadowEffect, !0),
				registerEffect$1(28, SVGMatte3Effect, !1),
				registerEffect$1(29, SVGGaussianBlurEffect, !0),
				registerEffect$1(35, SVGTransformEffect, !1),
				registerEffect(35, CVTransformEffect),
				lottie
		}, module.exports = factory())
	})(lottie$1, lottie$1.exports);
	var lottieExports = lottie$1.exports,
		lottie = getDefaultExportFromCjs(lottieExports);
	defineElement(lottie.loadAnimation)
})();
