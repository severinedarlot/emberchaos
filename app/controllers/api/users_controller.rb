class Api::UsersController < ApplicationController

  def create
    user = User.new
    user.email = params[:user][:email]
    user.password = params[:user][:password]
    user.password_confirmation = params[:user][:password_confirmation]

    if user.save
      render json: user, status: :created
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

  def show
    id = params[:id].to_i
    if current_user.nil? 
      render json: User.find(id), serializer: UserSerializer
    elsif current_user.id == id
      render json: current_user, root: :user, serializer: IdentifiedUserSerializer
    else
      render json: User.find(id), serializer: UserSerializer
    end
  end

  def update
    id = params[:id].to_i
    if current_user.id == id
      current_user.name = params[:user][:name] unless params[:user][:name].nil?
      current_user.email = params[:user][:email] unless params[:user][:email].nil?
      current_user.presentation = params[:user][:presentation] unless params[:user][:presentation].nil?
      current_user.phone = params[:user][:phone] unless params[:user][:phone].nil?
      current_user.localisation = params[:user][:localisation] unless params[:user][:localisation].nil?
      if current_user.save
        render json: {}, status: :ok
      else
        render json: { errors: user.errors }, status: :unprocessable_entity
      end
    else
      render json: {}, status: :error
    end
  end
end