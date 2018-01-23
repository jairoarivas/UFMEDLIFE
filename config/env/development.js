module.exports = {
  //Development configuration options

  //Save the URI for the database here
  db:'mongodb://jarufmedlife:ilmp!5533@cluster0-shard-00-00-xvmdy.mongodb.net:27017,cluster0-shard-00-01-xvmdy.mongodb.net:27017,cluster0-shard-00-02-xvmdy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  // 'mongodb://localhost/medlifedb',
  //sessions are a common web application pattern that allows you to keep track of the user's behavior when they visit your application.
  sessionSecret: 'developmentSessionSecret'
};
