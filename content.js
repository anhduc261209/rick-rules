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