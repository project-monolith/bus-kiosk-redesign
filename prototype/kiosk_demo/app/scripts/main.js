/*global Kiosk, $*/


window.Kiosk = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
    }
};

$(document).ready(function () {
    'use strict';
    Kiosk.init();
    // TODO Rename me
    Kiosk.app = new Kiosk.Routers.Kiosk();
    Backbone.history.start()
});
