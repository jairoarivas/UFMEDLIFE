const users = require('../../app/controllers/users.server.controller');
const eggs = require('../../app/controllers/eggs.server.controller');

module.exports = function(app) {
    app.route('/api/eggs')
        .get(eggs.list)
        .post(users.requiresLogin, eggs.create);

    app.route('/api/eggs/:eggId')
        .get(eggs.read)
        .put(users.requiresLogin, eggs.hasAuthorization, eggs.update)
        .delete(users.requiresLogin, eggs.hasAuthorization, eggs.delete);

    app.route('/api/eggCode/:eggCode')
      .get(eggs.read);

    app.param('eggId', eggs.eggByID);
    app.param('eggCode', eggs.eggByCode);
};
