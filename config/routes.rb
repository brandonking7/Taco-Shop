Rails.application.routes.draw do
  get '/tacos' => 'tacos#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
