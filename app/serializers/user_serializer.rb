class UserSerializer < FTL::Serializer::Base
  attributes :username, :team, :played, :goals, :assists, :cleansheets

  def team
    obj.team&.name
  end
end
