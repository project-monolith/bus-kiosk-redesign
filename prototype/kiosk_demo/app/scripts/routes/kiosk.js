/*global Kiosk, Backbone*/

Kiosk.Routers = Kiosk.Routers || {};

(function () {
    'use strict';

    Kiosk.Routers.Kiosk = Backbone.Router.extend({
      routes: {
        "": "startKiosk"
      },

      startKiosk: function() {
        $('body').append(new Kiosk.Views.RouteTile().render().$el);
      }

    });

})();
