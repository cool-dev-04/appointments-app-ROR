class CreateConsultations < ActiveRecord::Migration[7.1]
  def change
    create_table :consultations do |t|
      t.date :date, null: false
      t.string :city, null: false
      t.references :user, null: false, foreign_key: true
      t.references :engineer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
