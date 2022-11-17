'use strict';

import * as functions from './modules/functions.js';
import headerScripts from './modules/header.js';
// import pagination from './modules/pagination.js';
import talentsSection from './modules/talentsSection.js';
import talentsSlider from './modules/talentsSlider.js';
import clientsListSlider from './modules/clientsListSlider.js';
import clientsReviews from './modules/clientsReviews.js';


functions.isWebp();
headerScripts();
talentsSection();
talentsSlider();
clientsListSlider();
clientsReviews();

// pagination();