/*global Kiosk, Backbone*/

Kiosk.Collections = Kiosk.Collections || {};

(function () {
    'use strict';

    Kiosk.Collections.BusWaitTimes = Backbone.Collection.extend({
      model: Kiosk.Models.BusWaitTime
    });

})();
