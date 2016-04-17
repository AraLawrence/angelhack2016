class InventoryItem < ApplicationRecord
  belongs_to :inventory
  belongs_to :category
end
