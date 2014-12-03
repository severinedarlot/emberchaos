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
    if current_user.id == params[:vehicle][:user_id].to_i
      vehicle = current_user.vehicles.create(
        name: params[:vehicle][:name],
        kind: params[:vehicle][:kind],
        brand: params[:vehicle][:brand],
        car_model: params[:vehicle][:car_model])

    	if vehicle.save
    	  render json: vehicle, status: :created
    	else
    	  render json: { errors: vehicle.errors }, status: :unprocessable_entity
    	end
    else
      render json: { errors: ['Déjà créé'] }, status: :forbidden
    end
  end

  def show
    if current_user.nil?
      render json: {}, status: :forbidden
    else
      render json: current_user.vehicle.find(params[:id])
    end
  end

  def destroy
    if current_user.nil?
      render json: {}, status: :forbidden
    else
      current_user.vehicles.find(params[:id]).destroy
      render json: {}
    end
  end
end
