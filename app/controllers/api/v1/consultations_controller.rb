class Api::V1::ConsultationsController < ApplicationController
  def index
    @consultations = Consultation.select(:id, :user_id, :engineer_id, :city, :date).all
    if @consultations.empty?
      render json: { message: 'No consultations found' }
    else
      render json: @consultations
    end
  end

  def create
    @consultation = Consultation.new(consultation_params)
    if @consultation.save
      render json: @consultation
    else
      render json: { error: 'Unable to create consultation' }
    end
  end

  def destroy
    @consultation = Consultation.find(params[:id])
    if @consultation.destroy
      render json: { message: 'Consultation deleted' }
    else
      render json: { error: 'Unable to delete consultation' }
    end
  end
end
