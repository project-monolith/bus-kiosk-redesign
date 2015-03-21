require 'rubygems'
require 'bundler/setup'
require 'net/http'
require 'json'

require 'sinatra'

require_relative 'models/stop'

class KioskDisplay < Sinatra::Base

  set :server, :thin
  set :bind, '0.0.0.0'

  set :protection, false

  get '/' do
    body "Hello World!"
  end

  get '/stops/:stop_id/trips' do
    stop_id = params[:stop_id]
    stop = Stop.for_id(stop_id)
    content_type 'application/json'
    JSON.dump(stop.data)
  end

  run! if app_file == $0
end
