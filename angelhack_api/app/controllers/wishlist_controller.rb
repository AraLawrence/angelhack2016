class WishlistController < ApplicationController
	def create
		user = User.first
		charity = Charity.first
		wishlist = Wishlist.create({user_id: user.id, charity_id: charity.id})
		render json: {wishlist: wishlist.inspect}
	end
end
