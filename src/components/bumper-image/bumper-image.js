import Bumper from './Bumper.png';
import './bumper-image.scss';

class bumperImage{
    render(){
        const img = document.createElement('img');
        img.src = Bumper;
        img.alt = 'Bumper';
        img.classList.add('Bumper');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default bumperImage;