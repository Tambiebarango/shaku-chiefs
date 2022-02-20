class FixReferencePlural < ActiveRecord::Migration[6.1]
  def change
    remove_reference :users, :teams, foreign_key: true, index: true
    add_reference :users, :team, foreign_key: true, index: true
    
    remove_reference :fixtures, :gameweeks, foreign_key: true, index: true
    add_reference :fixtures, :gameweek, foreign_key: true
  end
end
