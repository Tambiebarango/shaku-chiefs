class Team < ApplicationRecord
  has_many :players, class_name: "User"
  has_many :home_fixtures, class_name: "Fixture", foreign_key: "home_team_id"
  has_many :away_fixtures, class_name: "Fixture", foreign_key: "home_team_id"

  validates :name, uniqueness: true
end
