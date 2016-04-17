class OrderController < ApplicationController

	def list
		user = User.first
		orders = Order.where({vendor_id: user.id})
		render json: orders
	end
end
