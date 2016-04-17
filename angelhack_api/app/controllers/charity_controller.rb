class CharityController < ApplicationController
  def create
  	user = User.first
  	charity = Charity.new charity_params
  	user.charities << charity
  	render json: {charity: charity.inspect}
  end

  private

  def charity_params
  	params.permit(:name)
  end


end
