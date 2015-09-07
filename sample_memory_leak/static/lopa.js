/* global Application, console_log */
var RELOAD_LOPA_INTERVAL = 50;

var Lopa = {
  /*
   * Base Lopa wrapper
   * Handle zoom-in / zoom-out
   * Set the sdus objects behaviour on zoom-in
   *
   * provides event functions :
   *  onZoomIn
   *  onZoomOut
   *  onSduSelect
   * that could be overriden to provide specific functionnalities
   */
    //timeout: null,


    refresh: function(){
      console.log('refresh call');
      var url = '/';
      $.get(url, this.refreshCallback);

    },

    refreshCallback: function(){
      console.log('data refreshed!');
      //clearTimeout(this.timeout);

    },
    start: function () {
        setInterval(this.refresh, RELOAD_LOPA_INTERVAL);
    }
};


$(function () {
  Lopa.start();
  lopa = Lopa;
});
