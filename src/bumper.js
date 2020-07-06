import Heading from './components/heading/heading.js';
import bumperImage from './components/bumper-image/bumper-image.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('bumperAd'));
const BumperImage = new bumperImage();
BumperImage.render();