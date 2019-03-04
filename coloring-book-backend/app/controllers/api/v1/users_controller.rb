class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @image = Image.find(params[:image_id])
    @user.images << @image
    render json: @user.images
  end

  def destroy
    @user = User.find(params[:id])
    @image = Image.find(params[:image_id])
    @user.images.delete(@image)
    render json: @user.images
  end
end
