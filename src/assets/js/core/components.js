import { initNavbar } from "./navbar.js";
import { initMenu } from "./menu.js";

/**
 * LOAD COMPONENT
 */
const componentCache = new Map();

async function loadComponent(id, file) {
  try {
    let html;

    if (componentCache.has(file)) {
      html = componentCache.get(file);
    } else {
      const response = await fetch(file);

      if (!response.ok) {
        throw new Error(`Cannot load ${file}`);
      }

      html = await response.text();
      componentCache.set(file, html);
    }

    const container = document.getElementById(id);

    if (!container) return;

    container.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

async function initLayout() {
  await Promise.all([
    loadComponent("header", "/src/components/header.html"),

    loadComponent("footer", "/src/components/footer.html"),
  ]);

  /**
   * INIT AFTER DOM READY
   */

  initNavbar();

  initMenu();
}

initLayout();
