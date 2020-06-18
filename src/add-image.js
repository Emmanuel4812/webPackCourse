import BumperAd from './BumperAdIngredientesPortada.png';

function addImage(){
    const img = document.createElement('img');
    img.alt = 'BumperAd';
    img.width = 300;
    img.src = BumperAd;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;