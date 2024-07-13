import { links } from './link.js';

export function menu () {
  const li = links.pages
    .map(
      (link) =>
                `<a class=" ${link.page.includes('Inicio') ? 'navbar-brand' : ''
                }" href="${link.link} ">${link.page}</a>`
    )
    .join('');

  return `
        <nav>
          <div class="navbar" id="navbar">
            ${li}
            <button class="login-btn">Login</button>
            <button class="logout-btn">Logout</button>
          </div>
          <i class="fa fa-bars" id="menu-icon"></i>
    </nav>`;
}
