/*global Kiosk, Backbone*/

Kiosk.Collections = Kiosk.Collections || {};

(function () {
    'use strict';

    Kiosk.Collections.BusRoutes = Backbone.Collection.extend({
      model: Kiosk.Models.BusRoute
    });

})();
