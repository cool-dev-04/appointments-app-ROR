class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user
      redirect_to root_path, json: { message: 'Logged in successfully', logged_in: true }
    else
      render json: { error: 'User not found', logged_in: false }
    end
  end

  def destroy
    redirect_to root_path, json: { message: 'Logged out successfully', logged_in: false }
  end
end
