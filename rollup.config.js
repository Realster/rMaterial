export default {
  entry: 'dist/src/index.js',
  dest: 'dist/bundles/RealsterMaterial.umd.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'ng.realstermaterial',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/material': 'ng.material',
    '@angular/cdk': 'ng.cdk',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable',
  }
}