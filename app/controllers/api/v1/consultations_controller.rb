class Api::V1::ConsultationsController < ApplicationController
  
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
