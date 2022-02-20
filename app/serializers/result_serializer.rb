class ResultSerializer < FTL::Serializer::Base
  attributes :home_team, :away_team, :score

  def home_team
    obj.home_team&.name
  end
  
  def away_team
    obj.away_team&.name
  end

  def score
    obj.score
  end
end
