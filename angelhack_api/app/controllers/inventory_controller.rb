class InventoryController < ApplicationController
	def create
		user = User.first
		inventory = Inventory.create({user_id: user.id})
		render json: {inventory: inventory.inspect}
	end
end
