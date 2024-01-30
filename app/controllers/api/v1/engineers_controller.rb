class Api::V1::EngineersController < ApplicationController
  def index
    @engineers = Engineer.select(:id, :name, :speciality, :photo).all
    render json: @engineers
  end

  def show
    @engineer = Engineer.find(params[:id])
    render json: @engineer.map { |engineer|
      {
        name: engineer.name,
        speciality: engineer.speciality,
        photo: engineer.photo,
        consultancy_fee: engineer.consultancy_fee
      }
    }
  end

  def create; end

  def destroy; end
end
