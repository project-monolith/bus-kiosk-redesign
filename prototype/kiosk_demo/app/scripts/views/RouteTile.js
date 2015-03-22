/*global Kiosk, Backbone, JST*/

Kiosk.Views = Kiosk.Views || {};

(function () {
    'use strict';

    Kiosk.Views.RouteTile = Backbone.View.extend({

        template: JST['app/scripts/templates/RouteTile.ejs'],

        tagName: 'bus-route--tileitem',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            if (this.model) {
              this.$el.html(this.template(this.model.toJSON()));
            }
            else {
              this.$el.html(this.template());
            }
          return this;
        }

    });

})();
