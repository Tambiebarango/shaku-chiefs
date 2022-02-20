class ResultsController < ApplicationController
  def index
    @gameweeks = Gameweek.includes(results: [:home_team, :away_team]).all
    render json: GameweekSerializer.new(@gameweeks).to_json
  end
end
