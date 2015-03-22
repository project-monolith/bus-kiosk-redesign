/*global Kiosk, Backbone*/

Kiosk.Routers = Kiosk.Routers || {};

(function () {
    'use strict';

    Kiosk.Routers.Kiosk = Backbone.Router.extend({
      routes: {
        "": "startKiosk"
      },

      startKiosk: function() {
        var tile = new Kiosk.Views.RouteTile(
          new Kiosk.Models.BusRoute()
        );
        $('body').append(tile.render().$el);
      }

    });

})();
