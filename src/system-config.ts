// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'moment': 'vendor/moment/moment.js',
  'underscore': 'vendor/underscore/underscore.js',
  'angular2-infinite-scroll': 'vendor/angular2-infinite-scroll'
};

/** User packages configuration. */
const packages: any = {
  'ng2-bootstrap': {defaultExtension: 'js', main: 'ng2-bootstrap.js'},
  'angular2-infinite-scroll': {defaultExtension: 'js', main: 'angular2-infinite-scroll.js'},
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/forms',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/shared/item',
  'app/home',
  'app/shared/item/items-list',
  'app/shared/item/item-detail',
  'app/shared/item/filter',
  'app/shared/item/sort',
  'app/shared/wishlist',
  'app/shared/wishlist/add-to-wishlist',
  'app/shared/wishlist/show-wishlist',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
