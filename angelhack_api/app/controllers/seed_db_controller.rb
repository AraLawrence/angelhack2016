class SeedDbController < ApplicationController
	def seed
		# Make categories
		Category.create({
			name: 'water'
		})
		Category.create({
			name: 'cereal'
		})
		Category.create({
			name: 'produce'
		})
		Category.create({
			name: 'dairy'
		})
		Category.create({
			name: 'snacks'
		})
		# Make a user with inventory and inventory items
		user = User.create({
			name: 'Lenny Larson',
			email: 'lenny@starbucks.com',
			password: 'password'
		})
		inventory = Inventory.create({user_id: user.id})
		inventory.inventory_items.create({
			name: 'Dasani Water 16floz Bottle',
			category_id: 1,
			quantity: 5
		})
		inventory.inventory_items.create({
			name: 'Chewy Granola Bar Peanut Butter Choc Chip',
			category_id: 5,
			quantity: 12
		})
		# Make a charity with a wishlist and wishlist items
		charity = Charity.create({
			name: "Mary's Place",
		})
		wishlist = Wishlist.create({user_id: user.id, charity_id: charity.id})
		wishlist.wishlist_items.create({
			name: 'Water',
			category_id: 1
		})
		wishlist.wishlist_items.create({
			name: 'Granola Bars',
			category_id: 5
		})
		# Make a company and associate the user
		company = Company.create({
			name: 'Starbucks Coffee'
			})
  		user.companies << company
	end

end
