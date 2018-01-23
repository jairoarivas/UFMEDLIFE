(function(global){
  var packages = {
    app: {
      main: './bootstrap.js',
      defaultExtension: 'js'
    },
    rxjs : {
      defaultExtension: 'js'
    }
  };

  var map = {
    '@angular': 'lib/@angular',
    'rxjs': 'lib/rxjs',
    '@ng-bootstrap/ng-bootstrap': 'lib/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'router',
    'platform-browser',
    'platform-browser-dynamic',
  ];

  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/' + pkgName] = {
      main:'/bundles/' + pkgName + '.umd.js',
      defaultExtension: 'js' };
  });

  System.config({
    defaultJSExtensions: true,
    transpiler: null,
    packages: packages,
    map: map
  });
})(this);
