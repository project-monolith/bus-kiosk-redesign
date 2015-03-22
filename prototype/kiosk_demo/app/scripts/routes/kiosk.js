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
        this.station = new Kiosk.Views.RouteContainer(
          $('body'),
          new Kiosk.Models.BusStation()
        )
      }

    });

})();
