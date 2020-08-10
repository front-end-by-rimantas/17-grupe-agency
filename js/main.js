"use strict";
// import data
import data from '../data/data.js';

// import rendering functions
import { renderServices } from './renderServices.js';
import { renderFunFacts, addEventListenerFunFactsOnScroll } from './renderFunFacts.js';
import { Slider } from './Slider.js';

// execute
const { funFacts } = data;

renderServices('#services .services', 'services.json');

renderFunFacts('#fun_facts > .fact-list', funFacts);
new Slider({
    selector: '#portfolio_slider',
    dataURL: 'portfolio.json',
    renderPosition: 'beforeend',
    imgPath: './img/portfolio/'
});
new Slider({
    selector: '#news_slider',
    dataURL: 'blog.json',
    imgPath: './img/blog/'
});

// actions after content rendering
addEventListenerFunFactsOnScroll();
