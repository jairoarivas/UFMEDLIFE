const users = require('../../app/controllers/users.server.controller');
const pointRequests = require('../../app/controllers/pointRequests.server.controller');

module.exports = function(app) {
    app.route('/api/pointRequests')
        .get(users.requiresLogin, pointRequests.hasAuthorization, pointRequests.list)
        .post(users.requiresLogin, pointRequests.create);

    app.route('/api/pointRequests/:pointRequestId')
        .get(users.requiresLogin, pointRequests.hasAuthorization, pointRequests.read)
        .put(users.requiresLogin, pointRequests.hasAuthorization, pointRequests.update)
        .delete(users.requiresLogin, pointRequests.hasAuthorization, pointRequests.delete);

    app.route('/api/pointRequestCheck/:eventName/:memberid')
      .get(users.requiresLogin, pointRequests.checkRequest);

    app.param('pointRequestId', pointRequests.pointRequestByID);
    app.param('pointRequestCode', pointRequests.pointRequestByCode);
};
