/*global Kiosk, Backbone*/

Kiosk.Models = Kiosk.Models || {};

(function () {
    'use strict';

    Kiosk.Models.BusStation = Backbone.Model.extend({
      defaults: {
        id: 1,
        // the collection of routes at this station
        bus_routes: null
      },

      url: 'http://localhost:4567/stops/1_578/trips',

      initialize: function() {
        this.fetch();
      },

      validate: function(attrs, options) {
      },

      parse: function(response, options)  {

        return response;
      }
    });

})();
