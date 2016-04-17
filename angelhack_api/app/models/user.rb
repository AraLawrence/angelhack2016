class User < ApplicationRecord
	has_and_belongs_to_many :companies
	has_and_belongs_to_many :charities
end
