# Kiosketeers!



We're going to redesign the web app that runs in the kiosks on 3rd Ave.

## Challenge and Approach

At bus stops on and around 3rd Avenue in downtown Seattle, there are several display kiosks that currently run a specially styled version of One Bus Away to show incoming bus trips. These kiosks are intended to provide useful information to users of the bus system. However, we feel that the approach taken by the web application currently running on these kiosks could be improved upon.

Our approach is the following:

1. Interview real users of the current kiosk application on the street, and collect their feedback.
2. Based on the aforementioned feedback, develop an alternative design or designs that we feel would offer an improved user experience.
3. Interview more real users of the current kiosk application, this time also gathering feedback on the aforementioned designs.
4. Refine designs further, assuming positive user feedback.
5. Implement a functional wireframe prototype of the design, time permitting.
6. Embellish prototype, time permitting.

## Team Members

* Mike Dunsmuir, Senior Software Engineer @ Vaisala (https://github.com/mdunsmuir)
* Kyle McFarland
* Avery Sauer
* Jeff Hammerquist
* Matt Leber
* Alice Feng
* Timothy Shaw

## Technologies, APIs, and Datasets Utilized

In developing our prototype, we made use of:

* Ruby with Sinatra/Thin for the backend service.
* backbone.js, jQuery, Isotope for the front end.
* One Bus Away REST API for static and real-time transit system data.
* Mapbox.
* GTFS data provided by Sound Transit.

## Contributing

This project currently consists of paired frontend/backend services. Instructions to build them follow, though they may be somewhat rough and incomplete. Send us some pull requests!

### Building and Running the Backend

1. Have a relatively modern version of ruby.
2. `gem install bundler`
3. `bundle install`
4. `bundle exec ruby app.rb`
5. Complain to Mike if it didn't work.

#### Example URL

http://localhost:4567/stops/1_578/trips

### Building and Running the Frontend

#### Pre-reqs
1. `brew install node010`
2. `npm install grunt -g`
3. `npm install grunt-cli -g`

#### Building and Running
1. `cd prototype/kiosk_demo/`
2. `npm install`
3. `grunt server`

#### How to JavaScript

http://backbonetutorials.com/what-is-a-model/

http://java.dzone.com/articles/backbone-tutorial-part-5

## Assorted Resources

Sound Transit's GTFS feed for all bus routes in greater Seattle area:
http://www.soundtransit.org/Developer-resources/Data-downloads

GTFS Spec:
https://developers.google.com/transit/gtfs/reference

GTFS Dataset:
http://developer.onebusaway.org/tmp/sound/gtfs/modified/1_gtfs.zip

OneBusAway Kiosk mode we are working to replace:
http://pugetsound.onebusaway.org/where/sign/stop.action?id=1_578
  (This is apprently wrapped by a frame on SDOT's side.
   Discussion here: https://groups.google.com/forum/#!topic/onebusaway-users/t6qvzP1DSRs)

OneBusAway REST API:
http://developer.onebusaway.org/modules/onebusaway-application-modules/1.1.13/api/where/index.html

Get connected with the team:
https://plus.google.com/hangouts/_/gvpy2bqi36up6sd4xc5orcncg4a

Steve Blanks legendary starup resources:
http://steveblank.com/tools-and-blogs-for-entrepreneurs/
