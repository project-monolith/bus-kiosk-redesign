/*global Kiosk, Backbone*/

Kiosk.Models = Kiosk.Models || {};

(function () {
    'use strict';

  Kiosk.Models.BusRoute = Backbone.Model.extend({
    defaults: {
      route_number: "-1",
      description: "default description",
    },

    initialize: function() {
      this.set("wait_times", new Kiosk.Collections.BusWaitTimes());
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        return response;
    }
  });

})();
