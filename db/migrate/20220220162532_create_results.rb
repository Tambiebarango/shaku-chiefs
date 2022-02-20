class CreateResults < ActiveRecord::Migration[6.1]
  def change
    create_table :results do |t|
      t.references :gameweek, foreign_key: true
      t.references :home_team, foreign_key: { to_table: :teams }
      t.references :away_team, foreign_key: { to_table: :teams }
      t.references :fixture, foreign_key: true
      t.integer :games_played
      t.integer :home_game_wins
      t.integer :away_game_wins
      t.integer :draws
      t.integer :home_team_score
      t.integer :away_team_score
      t.string :home_team_result
      t.string :away_team_result
      t.timestamps
    end
  end
end
