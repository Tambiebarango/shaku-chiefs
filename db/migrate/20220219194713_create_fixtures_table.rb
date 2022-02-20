class CreateFixturesTable < ActiveRecord::Migration[6.1]
  def change
    create_table :fixtures do |t|
      t.references :gameweeks, foreign_key: true
      t.references :home_team, foreign_key: { to_table: :teams }
      t.references :away_team, foreign_key: { to_table: :teams }
      t.boolean :played, null: false, :default => false
      t.timestamps
    end
  end
end
