class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :played
      t.integer :won
      t.integer :lost
      t.integer :drawn
      t.integer :points
      t.timestamps
    end
  end
end
