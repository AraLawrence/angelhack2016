class InventoryController < ApplicationController
	def create
		user = User.first
		inventory = Inventory.create({user_id: user.id})
		render json: {inventory: inventory.inspect}
	end

	def list
		user = User.first
		inventory = Inventory.find_by({user_id: user.id})
		render json: {inventory: inventory.inventory_items}
	end
end
