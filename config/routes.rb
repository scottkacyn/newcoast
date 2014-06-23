Newcoast::Application.routes.draw do
  
  resources :landings do 
  	collection { post :send_inquiry }
  end

  root 'landings#index'

end
