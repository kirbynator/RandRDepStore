class Api::DeposController < ApplicationController
  before_action :set_depo, only: [:show, :update, :destroy] 
  
  def index
    render json: Depo.all
  end
  
  def show
    render json: @depo
  end
  
  def create
      depo = Depo.new(the_params)
    if depo.save
      render json: depo
    else
      render json: { errors: depo.errors }, status: :unprocessable_entity 
    end
  end
  
  def update
    @depo.update(the_params)
    render json: @depo
  end
  
  def destroy
    name = @depo.name
    @depo.destroy
    render json: { message: "#{name} deleted" }
  end

  private
 
  def set_depo
    @depo = Depo.find(params[:id])
  end

  def the_params
    params.require(:depo).permit( :name )
  end
end
