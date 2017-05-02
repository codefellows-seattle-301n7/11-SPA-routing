'use strict';

// TODO: Configure the about and home routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:

page('/', articleController.index);
page('/about', aboutController.index);
page();
