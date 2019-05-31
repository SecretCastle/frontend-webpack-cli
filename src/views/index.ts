/// <reference path="./index.d.ts"/>

import style from './style.css';
import Logo from '@/assets/images/logo.png';

const createSimDom = () => {
    const div = document.createElement('div');
    div.style.width = '400px';
    div.style.left = '50%';
    div.style.position = 'absolute';
    div.style.top = '50%';
    div.style.transform = 'translate3d(-50%, -50%, 0)';
    const imgDom2 = new Image();
    imgDom2.style.width = '100%';
    imgDom2.src = Logo;
    const p = document.createElement('p');
    p.innerHTML = 'webpack模版';
    p.style.textAlign = 'center';
    div.appendChild(imgDom2);
    div.appendChild(p);
    // div.innerHTML = 'hello world';
    div.classList.add(style.hello);
    return div;
};

document.body.appendChild(createSimDom());
