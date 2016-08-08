var page = require('page');

var main = document.getElementById('main-container');

page('/', function(ctx, next){
  main.innerHTML = 'HOME <a href="/sign_up"> Sign up </a>';
})

page('/sign_up', function(ctx, next){
  main.innerHTML = 'Sign UP! <a href="/"> Home </a>';
})

page();
