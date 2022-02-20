class RemoveReference < ActiveRecord::Migration[6.1]
  def change
    remove_reference :teams, :players, foreign_key: { to_table: :users}
  end
end
