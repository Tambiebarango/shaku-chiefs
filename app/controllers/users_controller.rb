class UsersController < ApplicationController
  def index
    @users = User.includes(:team).all
    render json: UserSerializer.new(@users).to_json
  end

  def show
    render json: current_user
  end
end
