require 'rubygems'
require 'bundler/setup'
require 'net/http'
require 'json'

require 'sinatra'

require_relative 'models/stop'

class KioskDisplay < Sinatra::Base

  set :server, :thin
  set :bind, '0.0.0.0'

  before do
    content_type :json    
    headers 'Access-Control-Allow-Origin' => '*', 
      'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']  
  end

  set :protection, false

  get '/' do
    body "Hello World!"
  end

  MAX_N_DISPLAYED = 6

  # this returns the first 9 routes in the list
  get '/stops/:stop_id/trips' do
    stop_id = params[:stop_id]
    stop = Stop.routes_for_stop_id(stop_id)

    data = stop.data
    data['routes'] = data['routes'].take(MAX_N_DISPLAYED)

    JSON.dump(stop.data)
  end

  # this returns the remainder of the routes in a ticker-style string
  get '/stops/:stop_id/ticker' do
    stop_id = params[:stop_id]
    stop = Stop.routes_for_stop_id(stop_id)

    routes = stop.data['routes'].drop(MAX_N_DISPLAYED)

    JSON.dump({
      'text' => 
        routes.map { |route|
          waits = route['wait_times'].map { |time| time['wait'] }
          "<b>Route #{route['number']}</b> in #{waits.join(", ")} mins."
        }.join(' ')
    })
  end

  get '/stops/:stop_id/proximity' do
    stop_id = params[:stop_id]
    stop = Stop.routes_for_stop_id(stop_id)

    JSON.dump(stop.proximal)
  end

  run! if app_file == $0
end
