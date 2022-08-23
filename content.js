/**
Rick rules chrome extension
Copyright (C) 2022 Anh Duc

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see https://www.gnu.org/licenses.
**/

const imgs = document.getElementsByTagName("img");
const spns = document.getElementsByTagName("span");
const links = document.getElementsByTagName("a");
const pars = document.getElementsByTagName("p");

const encodeLink = 'aHR0cHM6Ly9jZG4ubXVzaWNmZWVxFUyEhIQ==';
const decodeText = window.atob(encodeText);
const encodeLink2 = 'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ=='; 
const decodeLink2 = window.atob(encodeLink2);

function rick() {
    document.body.style.backgroundImage = `url(${decodeLink})`;
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = decodeLink;
    }

    for (let i = 0; i < spns.length; i++) {
        spns[i].innerHTML = decodeText;
    }

    for (let i = 0; i < links.length; i++) {
        links[i].href = decodeLink2;
        links[i].textContent = decodeText;
    }

    for (let i = 0; i < pars.length; i++) {
        pars[i].innerHTML = decodeText;
    }
}
rick();
