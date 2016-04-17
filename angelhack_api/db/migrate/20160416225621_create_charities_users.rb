class CreateCharitiesUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :charities_users do |t|
      t.references :charity, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
