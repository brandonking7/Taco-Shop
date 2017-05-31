class Api::TacosController < ApplicationController
  # GET /api/tacos
  def index
    @tacos = Taco.all

    render json: @tacos
    # respond_to do |format|

    # format.html # show.html.erb
    # format.json { render json: @tacos }

  end

  def create
    @taco = Taco.new(taco_params)

    respond_to do | format |
      if @taco.save
        format.html { redirect_to @taco, notice: "Taco was successfully created." }
        format.json { render json: @taco, status: :created }
      else
        format.json { render json: @taco.errors, status: :unprocessable_entity }
      end
      end
  end

  def destroy
    @taco = Taco.find(params[:id])

    @taco.destroy
    respond_to do |format|
      format.html { redirect_to jobs_url, notice: 'Taco was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def taco_params
    params.require(:taco)
          .permit(:meat, :rice, :salsa, :notes)
  end
end
