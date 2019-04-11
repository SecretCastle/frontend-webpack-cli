import style from './style.css';
import Logo from '@/assets/images/logo';
import Done from '@/assets/images/done';
const createSimDom = () => {
	const div = document.createElement('div');
	const imgDom = new Image();
	const imgDom2 = new Image();
	imgDom.src = Logo;
	imgDom2.src = Done;
	div.appendChild(imgDom);
	div.appendChild(imgDom2);
	// div.innerHTML = 'hello world';
	div.classList.add(style.hello);
	return div;
};

document.body.appendChild(createSimDom());
