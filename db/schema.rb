# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_20_162532) do

  create_table "fixtures", force: :cascade do |t|
    t.integer "home_team_id"
    t.integer "away_team_id"
    t.boolean "played", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "gameweek_id"
    t.index ["away_team_id"], name: "index_fixtures_on_away_team_id"
    t.index ["gameweek_id"], name: "index_fixtures_on_gameweek_id"
    t.index ["home_team_id"], name: "index_fixtures_on_home_team_id"
  end

  create_table "gameweeks", force: :cascade do |t|
    t.integer "number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
  end

  create_table "results", force: :cascade do |t|
    t.integer "gameweek_id"
    t.integer "home_team_id"
    t.integer "away_team_id"
    t.integer "fixture_id"
    t.integer "games_played"
    t.integer "home_game_wins"
    t.integer "away_game_wins"
    t.integer "draws"
    t.integer "home_team_score"
    t.integer "away_team_score"
    t.string "home_team_result"
    t.string "away_team_result"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["away_team_id"], name: "index_results_on_away_team_id"
    t.index ["fixture_id"], name: "index_results_on_fixture_id"
    t.index ["gameweek_id"], name: "index_results_on_gameweek_id"
    t.index ["home_team_id"], name: "index_results_on_home_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.integer "played"
    t.integer "won"
    t.integer "lost"
    t.integer "drawn"
    t.integer "points"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", default: "", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "goals"
    t.integer "assists"
    t.integer "cleansheets"
    t.integer "played"
    t.integer "team_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["team_id"], name: "index_users_on_team_id"
  end

  add_foreign_key "fixtures", "gameweeks"
  add_foreign_key "fixtures", "teams", column: "away_team_id"
  add_foreign_key "fixtures", "teams", column: "home_team_id"
  add_foreign_key "results", "fixtures"
  add_foreign_key "results", "gameweeks"
  add_foreign_key "results", "teams", column: "away_team_id"
  add_foreign_key "results", "teams", column: "home_team_id"
  add_foreign_key "users", "teams"
end
