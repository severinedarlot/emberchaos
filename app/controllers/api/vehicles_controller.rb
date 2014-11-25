class Api::VehiclesController < ApplicationController

  def index
  	if current_user.nil? 
  		render json: {}, status: :forbidden
  		# render plain: "Enregistrer votre véhicule?"

  	else
    	render json: current_user.vehicles
    end
  end

  def create
  	if vehicle.save
  	  render json: vehicle, status: :created
  	else
  	  render json: { errors: vehicle.errors }, status: :unprocessable_entity
  	end
  end

  def show
    if current_user.nil?
      render json: {}, status: :forbidden
    else
      render json: current_user.vehicle.find(params[:id])
    end
  end

end	