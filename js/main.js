"use strict";
// import data
import data from '../data/data.js';

// import rendering functions
import { renderServices } from './renderServices.js';

// execute

const { services } = data;

renderServices('#services .services', services);