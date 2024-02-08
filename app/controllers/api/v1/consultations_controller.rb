class Api::V1::ConsultationsController < ApplicationController
  def index
    @consultations = Consultation.includes(:user, :engineer).select(:id, :user_id, :engineer_id, :city, :date).all
    if @consultations.empty?
      render json: { message: 'No consultations found' }
    else
      # Serialize the consultations data to include user and engineer names
      consultations_data = @consultations.map do |consultation|
        {
          id: consultation.id,
          user_name: consultation.user&.username, # Get user name if present
          engineer_name: consultation.engineer&.name, # Get engineer name if present
          city: consultation.city,
          date: consultation.date
        }
      end
      render json: consultations_data
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
