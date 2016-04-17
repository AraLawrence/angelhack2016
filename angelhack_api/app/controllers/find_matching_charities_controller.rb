class FindMatchingCharitiesController < ApplicationController
	def match
		# pull in inventory of user
		inventory = Inventory.find_by({user_id: User.first.id})
		inventory_items = inventory.inventory_items.all
		# pull in all charities within a given radius
		charities = Charity.all
		matches = {

		}
		inventory_items.each do |inventory_item|
			charities.each do |charity|
				charity.wishlist.wishlist_items.each do |wishlist_item|
					puts wishlist_item.name
					puts wishlist_item.category_id
					#check if wishlist item's category id matches inventory item's category id
					if inventory_item.category_id == wishlist_item.category_id
						puts 'MATCH!'
						# tally up matches
						if !matches[charity.name]
							matches[charity.name] = 1
						else
							matches[charity.name] += 1
						end
					end
				end
			end
		end
		matches.each do |match|
			match = match.to_s + '/' + inventory_items.length.to_s
		end
		# check all matches running comparison algorithm
		render json: {inventory: inventory_items, charities: charities, matches: matches}
	end

end
