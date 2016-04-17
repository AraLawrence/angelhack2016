class CreateInventoryItems < ActiveRecord::Migration[5.0]
  def change
    create_table :inventory_items do |t|
      t.references :inventory, foreign_key: true
      t.references :category, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
