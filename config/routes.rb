Rails.application.routes.draw do
  devise_for :users, format: :json, controllers: {
    registrations: 'registrations'
  }
  resources :teams
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/current_user", to: "users#show"
  resources :users, only: [:index]
  resources :gameweeks, only: [:index]
  resources :results, only: [:index]
end
