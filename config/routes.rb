Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  devise_for :users, defaults: { format: :json }

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :engineers, except: [:new, :edit, :update]
      resources :consultations, only: [:index, :create, :destroy]
    end
  end

  get "home" => "home#home"
  root "home#home"
  get "/*path" => "home#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
