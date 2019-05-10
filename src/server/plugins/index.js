const bodyParser = require('./bodyparser');
const error = require('./error');
const router = require('./router');
const view = require('./view');

module.exports = app => {
	bodyParser(app);
	error(app);
	router(app);
	view(app);
}