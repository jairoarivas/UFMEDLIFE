//using CommonJS module pattern to define a function called render.
//configure controller to render the template and automatically output it as an HTML view
exports.render = function(req, res) {
  //this will render the user object as a JSON representation right in your main view app. Authentication state will alrady be aavailable.
  const user = (!req.user) ? null : {
    _id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName
  };
  res.render('index', {
    title: 'ufmedlife',
    user: JSON.stringify(user)
  });
};
