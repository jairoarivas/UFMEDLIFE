const users = require('../../app/controllers/users.server.controller');
const affairs = require('../../app/controllers/affairs.server.controller');

module.exports = function(app) {
    app.route('/api/affairs')
        .get(users.requiresLogin,affairs.hasAuthorization, affairs.list)
        .post(users.requiresLogin,affairs.hasAuthorization, affairs.create);

    app.route('/api/affairs/:affairId')
        .get(users.requiresLogin,affairs.hasAuthorization, affairs.read)
        .put(users.requiresLogin, affairs.hasAuthorization, affairs.update)
        .delete(users.requiresLogin, affairs.hasAuthorization, affairs.delete);

    app.route('/api/affairCode/:affairCode')
      .get(users.requiresLogin, affairs.read);

    app.param('affairId', affairs.affairByID);
    app.param('affairCode', affairs.affairByCode);
};
