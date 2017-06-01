class Api::TacosController < ApplicationController

  # GET /api/tacos
  def index
    @tacos = Taco.all

    render json: @tacos

  end

  def create
    @taco = Taco.new(taco_params)

    if @taco.save
      render json: @taco, status: :created
    else
      render json: @taco.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @taco = Taco.find(params[:id])

    @taco.destroy

    render json: '', status: :no_content
  end

  private

  def taco_params
    params.require(:taco)
          .permit(:meat, :rice, :salsa, :notes)
  end
end
