/*global Kiosk, Backbone*/

Kiosk.Models = Kiosk.Models || {};

(function () {
    'use strict';

    Kiosk.Models.BusRoute = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
