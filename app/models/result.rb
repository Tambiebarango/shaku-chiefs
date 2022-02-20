class Result < ApplicationRecord
  belongs_to :fixture
  belongs_to :gameweek
  belongs_to :home_team, class_name: "Team"
  belongs_to :away_team, class_name: "Team"

  def score
    "#{home_team_score} : #{away_team_score}"
  end
end
