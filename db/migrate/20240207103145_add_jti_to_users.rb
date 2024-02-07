class AddJtiToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :jti, :string, null: false, default: ""

    execute <<-SQL
      UPDATE users
      SET jti = CONCAT('example ', id)
      WHERE jti = ''
    SQL
    # according to docs: User.all.each { |user| user.update_column(:jti, SecureRandom.uuid) }
    # discoverd after excuting the migration, this can be changed through console or in a new migration later on

    add_index :users, :jti, unique: true
  end
end
