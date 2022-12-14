'use strict';

import * as functions from './modules/functions.js';
import headerScripts from './modules/header.js';
// import pagination from './modules/pagination.js';
import talentsSection from './modules/talentsSection.js';
import talentsSlider from './modules/talentsSlider.js';
import clientsListSlider from './modules/clientsListSlider.js';
import clientsReviews from './modules/clientsReviews.js';
import formTabs from './modules/formTabs.js';
import wowModule from './modules/wowModule.js';
import ionSlider from './modules/ionSlider.js';
import filters from './modules/filters.js';


wowModule();
functions.isWebp();
headerScripts();
talentsSection();
talentsSlider();
clientsListSlider();
formTabs();
clientsReviews();
ionSlider();
filters();

// pagination();