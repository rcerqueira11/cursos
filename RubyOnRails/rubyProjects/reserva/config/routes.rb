Rails.application.routes.draw do
  resources :espacio_comuns
  resources :edificios
  resources :estado_reservas
  resources :tipo_propietarios
  root 'home#index'

  post '/reservas' => 'home#temp'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
