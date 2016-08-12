var page = require('page');
var empty = require('empty');
var template = require('./template');

page('/sign_up', function(ctx, next){
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})
