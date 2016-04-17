class Wishlist < ApplicationRecord
  belongs_to :user
  belongs_to :charity
  has_many :wishlist_items
end
