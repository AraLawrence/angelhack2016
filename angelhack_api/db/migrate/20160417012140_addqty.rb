class Addqty < ActiveRecord::Migration[5.0]
  def change
  	add_column('inventory_items', 'quantity', 'string')
  end
end
