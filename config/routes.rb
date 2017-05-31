Rails.application.routes.draw do
  namespace :api do
    resources :tacos
  end

  root to: 'client#index'
  get '*path', to: 'client#index'
  # get '/tacos' => 'tacos#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
