class CreateGameweeksTable < ActiveRecord::Migration[6.1]
  def change
    create_table :gameweeks do |t|
      t.integer :number
      t.timestamps
    end
  end
end
