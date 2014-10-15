class Api::UsersController < ApplicationController

  def create
    user = User.new
    user.email = params[:user][:email]
    user.password = params[:user][:password]
    user.password_confirmation = params[:user][:password_confirmation]

    if user.save
      render json: user, status: :created
    else
      #TODO: errors
      user.errors.each {|error|
      	puts "------>Error during user saving #{error}"
    	}
      render json: user, status: :error
    end
  end
end