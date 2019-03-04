Rails.application.routes.draw do

  namespace 'api' do
    namespace 'v1' do
      resources :user_images, only:[:index, :update, :show, :destroy]
      resources :images, only: [:index, :show]
      resources :users, only:[:index, :update, :show, :destroy]
    end
  end
end
