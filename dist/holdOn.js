/**
 * holdOn.js 0.0.1
 * https://github.com/w8tcha/holdon.js
 * @license MIT
 */
//#region src/holdOn.ts
var e = { instanceProtection: null };
function t(e, t = 300) {
	e.style.opacity = "0", e.style.display = "", e.style.transition = `opacity ${t}ms`, e.offsetWidth, e.style.opacity = "0.8";
}
function n(e, t = 300, n) {
	e.style.transition = `opacity ${t}ms`, e.style.opacity = "0", window.setTimeout(() => {
		n && n();
	}, t);
}
function r(e, t) {
	switch (e) {
		case "custom": return `${t}`;
		case "sk-dot": return "<div class=\"sk-dot\"> <div class=\"sk-dot1\"></div> <div class=\"sk-dot2\"></div> </div>";
		case "sk-rect": return "<div class=\"sk-rect\"> <div class=\"rect1\"></div> <div class=\"rect2\"></div> <div class=\"rect3\"></div> <div class=\"rect4\"></div> <div class=\"rect5\"></div> </div>";
		case "sk-cube": return "<div class=\"sk-cube\"> <div class=\"sk-cube1\"></div> <div class=\"sk-cube2\"></div> </div>";
		case "sk-bounce": return "<div class=\"sk-bounce\"> <div class=\"bounce1\"></div> <div class=\"bounce2\"></div> <div class=\"bounce3\"></div> </div>";
		case "sk-circle": return "<div class=\"sk-circle\"> <div class=\"sk-circle1 sk-child\"></div> <div class=\"sk-circle2 sk-child\"></div> <div class=\"sk-circle3 sk-child\"></div> <div class=\"sk-circle4 sk-child\"></div> <div class=\"sk-circle5 sk-child\"></div> <div class=\"sk-circle6 sk-child\"></div> <div class=\"sk-circle7 sk-child\"></div> <div class=\"sk-circle8 sk-child\"></div> <div class=\"sk-circle9 sk-child\"></div> <div class=\"sk-circle10 sk-child\"></div> <div class=\"sk-circle11 sk-child\"></div> <div class=\"sk-circle12 sk-child\"></div> </div>";
		case "sk-cube-grid": return "<div class=\"sk-cube-grid\"> <div class=\"sk-cube-child sk-cube-grid1\"></div> <div class=\"sk-cube-child sk-cube-grid2\"></div> <div class=\"sk-cube-child sk-cube-grid3\"></div> <div class=\"sk-cube-child sk-cube-grid4\"></div> <div class=\"sk-cube-child sk-cube-grid5\"></div> <div class=\"sk-cube-child sk-cube-grid6\"></div> <div class=\"sk-cube-child sk-cube-grid7\"></div> <div class=\"sk-cube-child sk-cube-grid8\"></div> <div class=\"sk-cube-child sk-cube-grid9\"></div> </div>";
		case "sk-folding-cube": return "<div class=\"sk-folding-cube\"> <div class=\"sk-cubechild1 sk-cube-parent\"></div> <div class=\"sk-cubechild2 sk-cube-parent\"></div> <div class=\"sk-cubechild4 sk-cube-parent\"></div> <div class=\"sk-cubechild3 sk-cube-parent\"></div> </div>";
		case "sk-fading-circle": return "<div class=\"sk-fading-circle\"> <div class=\"sk-fading-circle1 sk-circle-child\"></div> <div class=\"sk-fading-circle2 sk-circle-child\"></div> <div class=\"sk-fading-circle3 sk-circle-child\"></div> <div class=\"sk-fading-circle4 sk-circle-child\"></div> <div class=\"sk-fading-circle5 sk-circle-child\"></div> <div class=\"sk-fading-circle6 sk-circle-child\"></div> <div class=\"sk-fading-circle7 sk-circle-child\"></div> <div class=\"sk-fading-circle8 sk-circle-child\"></div> <div class=\"sk-fading-circle9 sk-circle-child\"></div> <div class=\"sk-fading-circle10 sk-circle-child\"></div> <div class=\"sk-fading-circle11 sk-circle-child\"></div> <div class=\"sk-fading-circle12 sk-circle-child\"></div> </div>";
		default: return console.warn(e + " doesn't exist for HoldOn.js"), "<div class=\"sk-rect\"> <div class=\"rect1\"></div> <div class=\"rect2\"></div> <div class=\"rect3\"></div> <div class=\"rect4\"></div> <div class=\"rect5\"></div> </div>";
	}
}
function i(t) {
	e.instanceProtection = setInterval(() => {
		document.getElementById("holdon-overlay") || a(t);
	}, 100);
}
function a(n) {
	var a = "sk-rect";
	let o = "";
	n && (Object.prototype.hasOwnProperty.call(n, "message") && n.message != null && (o = n.message), Object.prototype.hasOwnProperty.call(n, "theme") && n.theme != null && (a = n.theme));
	let s = r(a, n?.content);
	e.instanceProtection !== null && (clearInterval(e.instanceProtection), e.instanceProtection = null), document.getElementById("holdon-overlay")?.remove();
	let c = document.createElement("div");
	if (c.id = "holdon-overlay", c.style.display = "none", c.innerHTML = `<div id="holdon-content-container"><div id="holdon-content">${s}</div><div id="holdon-message">${o}</div></div>`, document.body.appendChild(c), t(c, 300), typeof n?.executeOnOpen == "function" && n.executeOnOpen(), n) {
		if (n.backgroundColor && (c.style.backgroundColor = n.backgroundColor), n.textColor) {
			let e = document.getElementById("holdon-message");
			e && (e.style.color = n.textColor);
		}
		i(n);
	}
	return !0;
}
function o() {
	let t = document.getElementById("holdon-overlay");
	return t ? (e.instanceProtection !== null && clearInterval(e.instanceProtection), n(t, 300, () => {
		t.remove();
	}), e.instanceProtection = null, !0) : !1;
}
var s = {
	open: a,
	close: o
};
//#endregion
export { o as close, s as default, a as open };

//# sourceMappingURL=holdOn.js.map