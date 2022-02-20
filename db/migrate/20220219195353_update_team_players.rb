class UpdateTeamPlayers < ActiveRecord::Migration[6.1]
  def change
    remove_reference :teams, foreign_key: true, index: true
    add_reference :teams, :players, foreign_key: { to_table: :users}
  end
end
