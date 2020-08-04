"use strict";
// import data
import data from '../data/data.js';

// import rendering functions
import { ajax } from './ajax.js';
import { renderServices } from './renderServices.js';
import { renderFunFacts, addEventListenerFunFactsOnScroll } from './renderFunFacts.js';

// execute
const { funFacts } = data;

ajax(renderServices, '#services .services');

// renderServices('#services .services', services);
renderFunFacts('#fun_facts > .fact-list', funFacts);

// actions after content rendering
addEventListenerFunFactsOnScroll();