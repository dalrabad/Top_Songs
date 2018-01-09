Rails.application.routes.draw do
  namespace :api do

    resources :songs, except: [:new, :edit, :show]
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
end 
