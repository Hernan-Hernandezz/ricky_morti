import favicon from "@images/rick-y-morty-favicon.jpg";
const head = document.querySelector("head");
const link = document.createElement("link");
link.setAttribute("href", favicon);
link.setAttribute("rel", "icon");
link.setAttribute("type", "image/jpn");

head.appendChild(link);
