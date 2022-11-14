'use strict';

import * as functions from './modules/functions.js';
import headerScripts from './modules/header.js';
// import pagination from './modules/pagination.js';
import talentsSection from './modules/talentsSection.js';
import talentsSlider from './modules/talentsSlider.js';

functions.isWebp();
headerScripts();
talentsSection();
talentsSlider();

// pagination();