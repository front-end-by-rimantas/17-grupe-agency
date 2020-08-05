"use strict";
// import data
import data from '../data/data.js';

// import rendering functions
import { ajax } from './ajax.js';
import { renderServices } from './renderServices.js';
import { renderFunFacts, addEventListenerFunFactsOnScroll } from './renderFunFacts.js';
import { Slider } from './Slider.js';

// execute
const { funFacts, portfolio, news } = data;

ajax(renderServices, '#services .services');

renderFunFacts('#fun_facts > .fact-list', funFacts);
new Slider({
    selector: '#portfolio_slider',
    data: portfolio,
    renderPosition: 'beforeend'
});
new Slider({
    selector: '#news_slider',
    data: news
});

// actions after content rendering
addEventListenerFunFactsOnScroll();
