class Api::VehiclesController < ApplicationController

  def index
  	if current_user.nil? 
  		render json: {}, status: :forbidden
  	else
    	render json: current_user.vehicles
    end
  end

end	
