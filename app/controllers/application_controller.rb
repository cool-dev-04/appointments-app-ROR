class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?
  # before_action :authenticate_user!, unless: :home_controller?

  def home_controller?
    params[:controller] == 'home'
  end

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActionController::ParameterMissing, with: :parameter_missing
  rescue_from ActionController::UnpermittedParameters, with: :unpermitted_parameters

  private

  def record_not_found
    render json: { error: 'Record not found' }, status: :not_found
  end

  def parameter_missing(exception)
    render json: { error: exception.message }, status: :bad_request
  end

  def unpermitted_parameters(exception)
    render json: { error: exception.message }, status: :bad_request
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[username])
  end
end
