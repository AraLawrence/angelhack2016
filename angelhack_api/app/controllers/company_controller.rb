class CompanyController < ApplicationController
  def create
  	user = User.first
  	company = Company.create company_params
  	user.companies << company
  	render json: {company: company.inspect}
  end

  private

  def company_params
  	params.permit(:name)
  end
end
