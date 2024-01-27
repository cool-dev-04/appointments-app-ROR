class CreateEngineers < ActiveRecord::Migration[7.1]
  def change
    create_table :engineers do |t|
      t.string :name, null: false
      t.string :photo
      t.decimal :consultancy_fee, precision: 8, scale: 2, null: false
      t.string :speciality, null: false
      t.text :about

      t.timestamps
    end
  end
end
