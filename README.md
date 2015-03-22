# Kiosketeers!

We're going to redesign the OBA web app that runs in the kiosks on 3rd Ave.

## Backend

### Building and Running

1. Have a relatively modern version of ruby.
2. `gem install bundler`
3. `bundle install`
4. `bundle exec ruby app.rb`
5. Complain to Mike if it didn't work.

### Example URL

http://localhost:4567/stops/1_578/trips

## Frontend

### How to JavaScript

http://backbonetutorials.com/what-is-a-model/

## Team Members

REDACTED

## Resources

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

Running the front-end:
Pre-req:
* Ruby (brew install ruby)
* Middleman (gem install middleman)

Setup:
* bundle install

Start:
`foreman start`

Get connected with the team:
https://plus.google.com/hangouts/_/gvpy2bqi36up6sd4xc5orcncg4a

Steve Blanks legendary starup resources:
http://steveblank.com/tools-and-blogs-for-entrepreneurs/
