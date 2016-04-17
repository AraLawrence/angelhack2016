class CreateWishlistItems < ActiveRecord::Migration[5.0]
  def change
    create_table :wishlist_items do |t|
      t.references :wishlist, foreign_key: true
      t.string :name
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
