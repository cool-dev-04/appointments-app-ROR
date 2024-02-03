class Api::V1::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render json: { user: @user, logged_in: true }
    else
      render json: { error: 'Unable to create user' }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
end
