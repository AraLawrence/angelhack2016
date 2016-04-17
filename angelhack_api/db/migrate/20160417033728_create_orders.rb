class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.integer :vendor_id
      t.integer :recipient_id
      t.string :status

      t.timestamps
    end
  end
end
