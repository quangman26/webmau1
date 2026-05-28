import { initNavbar } from "./navbar.js";
import { initMenu } from "./menu.js";

/**
 * LOAD COMPONENT
 */

async function loadComponent(id, file) {
  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Cannot load ${file}`);
    }

    const html = await response.text();

    const container = document.getElementById(id);

    if (!container) return;

    container.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

/**
 * INIT LAYOUT
 */

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
