class ClientController < ApplicationController
  protect_from_forgery with: :exception
  layout false

  def index
  end
end
