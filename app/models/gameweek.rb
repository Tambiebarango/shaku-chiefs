class Gameweek < ApplicationRecord
  has_many :fixtures
  has_many :results

  validates :number, uniqueness: true
end
