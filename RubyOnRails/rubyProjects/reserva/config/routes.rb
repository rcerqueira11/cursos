Rails.application.routes.draw do
  root 'home#index'

  post '/reservas' => 'home#temp'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
