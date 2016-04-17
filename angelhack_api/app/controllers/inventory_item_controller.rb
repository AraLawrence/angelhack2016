class InventoryItemController < ApplicationController
	def create
		inventory = Inventory.find_by({user_id: User.first.id}) # use find by (where returns array!) findBy
		category = Category.find_by({name: 'consumables'})
		item = inventory.inventory_items.create(name: params[:name], category_id: category.id)
		render json: {item: item.inspect}
	end

	private

	def inventory_item_params
		params.permit(:name, :category)
	end
end
