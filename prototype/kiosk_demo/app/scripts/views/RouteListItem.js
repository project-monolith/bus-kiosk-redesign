/*global Kiosk, Backbone, JST*/

Kiosk.Views = Kiosk.Views || {};

(function () {
    'use strict';

    Kiosk.Views.RouteListItem = Backbone.View.extend({

        template: JST['app/scripts/templates/RouteListItem.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
