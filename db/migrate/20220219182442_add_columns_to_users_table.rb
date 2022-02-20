class AddColumnsToUsersTable < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :goals, :integer
    add_column :users, :assists, :integer
    add_column :users, :cleansheets, :integer
    add_column :users, :played, :integer
  end
end
