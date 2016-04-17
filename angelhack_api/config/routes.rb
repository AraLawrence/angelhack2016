Rails.application.routes.draw do

  post 'user' => 'user#create'
  post 'charity' => 'charity#create'
  post 'company' => 'company#create'
  post 'inventory' => 'inventory#create'
  post 'inventory/items' => 'inventory_item#create'
  post 'wishlist' => 'wishlist#create'
  post 'wishlist/items' => 'wishlist_item#create'
  get 'categorize' => 'categorize#categorize'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
