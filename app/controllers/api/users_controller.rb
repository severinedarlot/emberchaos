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
    id = params[:id]
    if current_user.id == id
      render json: current_user, serializer: IdentifiedUserSerializer
    else
      render json: User.find(id), serializer: UserSerializer
    end
  end
end