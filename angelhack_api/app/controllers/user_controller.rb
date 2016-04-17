class UserController < ApplicationController
  def create
  	user = User.create user_params
  	render json: {user: user.inspect}
  end

  private

  def user_params
  	params.permit(:name, :email, :password)
  end
end
