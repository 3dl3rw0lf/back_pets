import { links } from "./link.js";

export function menu() {
    let li = links.pages
        .map(
            (link) =>
                `<li class="nav-links">
					<a class=" ${link.page.includes("Inicio") ? "navbar-brand" : ""
                }" href="${link.link} ">${link.page}</a>
                </li>`
        )
        .join("");

    return `
        <nav>
        <div class="hamburger" id="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul id="nav-links">
            ${li}
        </ul>
    </nav>
	`;
}
