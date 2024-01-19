/*************************************/
// Actualización 13 Junio 2018


var pageXController = {
  data:{
  },
  init: function(param) {
    pageXController.wireEvents();

    pageXController.trackPage();
  },

  wireEvents : function() {
    that = this;
  },

  sendData: function()
  {
  },

  trackPage: function()
  {
    localStorage.setItem("slide3_visited", "1");
  },

  // Reactive methods from page events
  // Callbacks, etc
  methodX : function() {}
}

$(document).ready( function() {
  // gather params from querystring, server injection, etc
  pageXController.init(null);
});
/*************************************/
