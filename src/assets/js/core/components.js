import { initNavbar } from "./navbar.js";
import { initMenu } from "./menu.js";

/**
 * LOAD COMPONENT
 */
const componentCache = new Map();

/**
 * COMPONENT PATH
 */
const COMPONENT_PATH = {
  header: "/src/components/header.html",
  footer: "/src/components/footer.html",
};

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

    if (!container) {
      console.warn(`Container #${id} not found`);
      return;
    }

    container.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

async function initLayout() {
  await Promise.all([
    loadComponent("header", COMPONENT_PATH.header),
    loadComponent("footer", COMPONENT_PATH.footer),
  ]);

  initNavbar();
  initMenu();
}

initLayout();
