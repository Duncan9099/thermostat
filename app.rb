# frozen_string_literal: true
require 'sinatra'
require 'sinatra/base'
require 'json'
require 'sinatra/activerecord'
require './lib/settings'

# Dir[File.dirname(__FILE__) + '/lib/*.rb'].each { |file| require file }

class Thermostat < Sinatra::Base

  register Sinatra::ActiveRecordExtension
  # set :database_file, 'config/database.yml'
  enable :sessions

  get '/' do
    erb(:index)
  end

  get '/temperature/get' do
    @page = Settings.first
    p Settings.temperature
    p temperature
    erb(:index)
  end

  post '/temperature/set/:temperature' do

  end

  get '/psm' do
    Settings.new.psm
  end

  post '/psm/switch' do

  end

  run! if app_file == $0
end
