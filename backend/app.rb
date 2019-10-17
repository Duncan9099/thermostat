# frozen_string_literal: true

require 'sinatra/base'
require 'json'
require 'sinatra/activerecord'



class Thermostat < Sinatra::Base
  enable :sessions

  register Sintra::ActiveRecord::Migration[6.0]

  run! if app_file == $PROGRAM_NAME
end
