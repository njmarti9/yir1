import home from './home';
import header from './header';

const pageload = () => {
    const content = document.querySelector('#content');
    const headerDiv = header();
    content.appendChild(headerDiv);
    home();
}

export default pageload;