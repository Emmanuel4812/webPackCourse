import Heading from './components/heading/heading.js';
import bumperImage from './components/bumper-image/bumper-image.js';
import React from 'react';

const heading = new Heading();
heading.render('bumperAd');
const BumperImage = new bumperImage();
BumperImage.render();