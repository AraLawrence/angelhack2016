class Charity < ApplicationRecord
	has_and_belongs_to_many :user
end
