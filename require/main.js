require.config({
  paths:{
    jquery:'jquery-2.1.3'
  }
});

require(['jquery'],function($){
  alert($().jquery);
});
