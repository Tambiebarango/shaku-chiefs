class GameweekSerializer < FTL::Serializer::Base
  attributes :number, :fixtures, :results

  def fixtures
    FixtureSerializer.new(obj.fixtures).as_json
  end

  def results
    ResultSerializer.new(obj.results).as_json
  end
end
