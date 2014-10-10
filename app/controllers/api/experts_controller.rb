class Api::ExpertsController < ApplicationController
  def index
    render json: Expert.all
  end

  def show
    render json: Expert.find(params[:id])
  end
end