Rails.application.routes.draw do
  namespace :api do
    resources :depos do
      resources :items 
  end
 end
end