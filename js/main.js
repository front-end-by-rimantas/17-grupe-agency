"use strict";
// import data
import data from '../data/data.js';

// import rendering functions
import { renderServices } from './renderServices.js';
import { renderFunFacts, animateFunFacts } from './renderFunFacts.js';

// execute
const { services, funFacts } = data;

renderServices('#services .services', services);
renderFunFacts('#fun_facts > .fact-list', funFacts);

// actions after content rendering
animateFunFacts( 3 );