const noteRoutes = require('./note_routes');

module.exports = function (app, db) {
noteRoutes(app, db);

//other route groups should go here when ever you want to upgrade the app

};