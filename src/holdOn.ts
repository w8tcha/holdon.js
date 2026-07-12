import "./holdOn.css";
import { HoldOnProperties } from "./holdOnProperties";

export type HoldOnTheme =
  | "custom"
  | "sk-dot"
  | "sk-rect"
  | "sk-cube"
  | "sk-bounce"
  | "sk-circle"
  | "sk-cube-grid"
  | "sk-folding-cube"
  | "sk-fading-circle";

interface HoldOnSettings {
  instanceProtection: ReturnType<typeof setInterval> | null;
}

const settings: HoldOnSettings = {
  instanceProtection: null,
};

function fadeIn(el: HTMLElement, duration = 300): void {
  el.style.opacity = "0";
  el.style.display = "";
  el.style.transition = `opacity ${duration}ms`;
  // Force reflow so the transition kicks in.
  void el.offsetWidth;
  el.style.opacity = "0.8";
}

function fadeOut(el: HTMLElement, duration = 300, done?: () => void): void {
  el.style.transition = `opacity ${duration}ms`;
  el.style.opacity = "0";
  window.setTimeout(() => {
    if (done) done();
  }, duration);
}

function getHtml(theme: string, content: string | undefined): string {
  switch (theme) {
    case "custom":
      return `${content}`;
    case "sk-dot":
      return '<div class="sk-dot"> <div class="sk-dot1"></div> <div class="sk-dot2"></div> </div>';
    case "sk-rect":
      return '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
    case "sk-cube":
      return '<div class="sk-cube"> <div class="sk-cube1"></div> <div class="sk-cube2"></div> </div>';
    case "sk-bounce":
      return '<div class="sk-bounce"> <div class="bounce1"></div> <div class="bounce2"></div> <div class="bounce3"></div> </div>';
    case "sk-circle":
      return '<div class="sk-circle"> <div class="sk-circle1 sk-child"></div> <div class="sk-circle2 sk-child"></div> <div class="sk-circle3 sk-child"></div> <div class="sk-circle4 sk-child"></div> <div class="sk-circle5 sk-child"></div> <div class="sk-circle6 sk-child"></div> <div class="sk-circle7 sk-child"></div> <div class="sk-circle8 sk-child"></div> <div class="sk-circle9 sk-child"></div> <div class="sk-circle10 sk-child"></div> <div class="sk-circle11 sk-child"></div> <div class="sk-circle12 sk-child"></div> </div>';
    case "sk-cube-grid":
      return '<div class="sk-cube-grid"> <div class="sk-cube-child sk-cube-grid1"></div> <div class="sk-cube-child sk-cube-grid2"></div> <div class="sk-cube-child sk-cube-grid3"></div> <div class="sk-cube-child sk-cube-grid4"></div> <div class="sk-cube-child sk-cube-grid5"></div> <div class="sk-cube-child sk-cube-grid6"></div> <div class="sk-cube-child sk-cube-grid7"></div> <div class="sk-cube-child sk-cube-grid8"></div> <div class="sk-cube-child sk-cube-grid9"></div> </div>';
    case "sk-folding-cube":
      return '<div class="sk-folding-cube"> <div class="sk-cubechild1 sk-cube-parent"></div> <div class="sk-cubechild2 sk-cube-parent"></div> <div class="sk-cubechild4 sk-cube-parent"></div> <div class="sk-cubechild3 sk-cube-parent"></div> </div>';
    case "sk-fading-circle":
      return '<div class="sk-fading-circle"> <div class="sk-fading-circle1 sk-circle-child"></div> <div class="sk-fading-circle2 sk-circle-child"></div> <div class="sk-fading-circle3 sk-circle-child"></div> <div class="sk-fading-circle4 sk-circle-child"></div> <div class="sk-fading-circle5 sk-circle-child"></div> <div class="sk-fading-circle6 sk-circle-child"></div> <div class="sk-fading-circle7 sk-circle-child"></div> <div class="sk-fading-circle8 sk-circle-child"></div> <div class="sk-fading-circle9 sk-circle-child"></div> <div class="sk-fading-circle10 sk-circle-child"></div> <div class="sk-fading-circle11 sk-circle-child"></div> <div class="sk-fading-circle12 sk-circle-child"></div> </div>';
    default:
      console.warn(theme + " doesn't exist for HoldOn.js");
      return '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
  }
  /*
    return '<div class="logo-animated play" id="logo">' +
    '<div class="docs">' +
      '<div class="doc doc--back"></div>' +
      '<div class="doc doc--mid"></div>' +
      '<div class="doc doc--front">' +
        '<div class="corner"></div>' +
        '<div class="doc-lines">' +
          '<div class="doc-line"></div>' +
          '<div class="doc-line"></div>' +
          '<div class="doc-line"></div>' +
          '<div class="doc-line"></div>' +
        '</div>' +
      '</div>' +
    '</div>' +


    '<div class="wordmark">' +
      '<div class="wm">' +
        '<span class="easy" id="easy"></span><span class="invoice" id="invoice"></span>' +
      '</div>' +
      '<div class="tagline">INVOICING MADE SIMPLE</div>' +
    '</div>' +
 ' </div>';*/
}

function protectInstance(properties?: HoldOnProperties): void {
  settings.instanceProtection = setInterval(() => {
    if (!document.getElementById("holdon-overlay")) {
      open(properties);
    }
  }, 100);
}

export function open(properties?: HoldOnProperties): boolean {
  var theme = "sk-rect";
  let message = "";

  if (properties) {
    if (
      Object.prototype.hasOwnProperty.call(properties, "message") &&
      properties.message != null
    ) {
      message = properties.message;
    }

    if (
      Object.prototype.hasOwnProperty.call(properties, "theme") &&
      properties.theme != null
    ) {
      theme = properties.theme;
    }
  }

  const content = getHtml(theme, properties?.content);

  // Remove protection and overlay before adding the new one.
  if (settings.instanceProtection !== null) {
    clearInterval(settings.instanceProtection);
    settings.instanceProtection = null;
  }
  document.getElementById("holdon-overlay")?.remove();

  const overlay = document.createElement("div");
  overlay.id = "holdon-overlay";
  overlay.style.display = "none";
  overlay.innerHTML =
    '<div id="holdon-content-container">' +
    `<div id="holdon-content">${content}</div>` +
    `<div id="holdon-message">${message}</div>` +
    "</div>";

  document.body.appendChild(overlay);
  fadeIn(overlay, 300);

  if (typeof properties?.executeOnOpen === "function") {
    properties.executeOnOpen();
  }

  

  if (properties) {
    if (properties.backgroundColor) {
      overlay.style.backgroundColor = properties.backgroundColor;
    }
    if (properties.textColor) {
      const messageEl = document.getElementById("holdon-message");
      if (messageEl) messageEl.style.color = properties.textColor;
    }

    protectInstance(properties);
  }

  return true;
}

export function close(): boolean {
  const overlay = document.getElementById("holdon-overlay");
  if (overlay) {
    if (settings.instanceProtection !== null) {
      clearInterval(settings.instanceProtection);
    }

    fadeOut(overlay, 300, () => {
      overlay.remove();
    });

    settings.instanceProtection = null;

    return true;
  }

  return false;
}

const HoldOn = { open, close };

export default HoldOn;
