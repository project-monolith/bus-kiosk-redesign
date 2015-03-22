/*global Kiosk, Backbone*/

Kiosk.Models = Kiosk.Models || {};

(function () {
    'use strict';

  Kiosk.Models.BusRoute = Backbone.Model.extend({
    defaults: {
      number: "-1",
      description: "default description",
    },

    initialize: function() {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      this.set("wait_times", new Kiosk.Collections.BusWaitTimes(this.get("wait_times"))); //_.each(this.get("wait_times"), function(waitTimes) {
      //  this.set("wait_times", new Kiosk.Views.BusWaitTimes(waitTimes));
      //}, this);
        return response;
    }
  });

})();
