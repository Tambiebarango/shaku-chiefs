# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Fixture.destroy_all
Gameweek.destroy_all
Team.destroy_all

teams = [
  {
    name: "Parliament",
    played: 5,
    won: 5,
    lost: 0,
    drawn: 0,
    points: 15
  },
  {
    name: "WJBNMC",
    played: 5,
    won: 4,
    lost: 1,
    drawn: 0,
    points: 12
  },
  {
    name: "Peaky Blinders",
    played: 5,
    won: 3,
    lost: 2,
    drawn: 0,
    points: 9
  },
  {
    name: "Vibes",
    played: 5,
    won: 2,
    lost: 3,
    drawn: 0,
    points: 6
  },
  {
    name: "Sainoh Legend",
    played: 5,
    won: 1,
    lost: 4,
    drawn: 0,
    points: 3
  },
  {
    name: "Splitttt",
    played: 5,
    won: 0,
    lost: 5,
    drawn: 0,
    points: 0
  }
]

Team.create(teams)

def teams_already_played?(ht, at)
  Fixture.where(home_team: ht, away_team: at)
    .or(Fixture.where(home_team: at, away_team: ht))
    .exists?
end

def gameweek_already_has_fixture?(gw, ht, at)
  Fixture.where(gameweek: gw, home_team: ht, away_team: at)
    .or(Fixture.where(gameweek: gw, home_team: at, away_team: ht))
    .exists?
end

def team_already_has_fixture_for_gw?(gw, t)
  Fixture.where(gameweek: gw, home_team: t)
    .or(Fixture.where(gameweek: gw, away_team: t))
    .exists?
end

def no_more_fixtures?
  Fixture.count == 15
end

number = 1

until no_more_fixtures? do
  Gameweek.create(number: number) do |gw|
    Team.all.each do |t|
      # debugger
      if team_already_has_fixture_for_gw?(gw, t)
        next
      end

      Team.all.each do |u|
        # debugger
        next if t.id == u.id
        next if teams_already_played?(t, u)
        next if gameweek_already_has_fixture?(gw, t, u)
        next if team_already_has_fixture_for_gw?(gw, t)
        next if team_already_has_fixture_for_gw?(gw, u)

        Fixture.create!(gameweek: gw, home_team: t, away_team: u)
        break
      end
    end

    number += 1
  end
end
