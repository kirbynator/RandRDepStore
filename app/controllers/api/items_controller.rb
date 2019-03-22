class Api::ItemsController < ApplicationController
  before_action :set_depo
  before_action :set_item, only: [:show, :update, :destroy] 
  def index
    render json: @depo.items.all
  end
  def show
  render json: @item
  end
  def create
      item = @depo.item.new
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity 
    end
  end
  def update
    @item.update(the_params)
    render json: @item
  end
  
  def destroy
    @item.destroy
    render json: { message: 'Item deleted' }
  end
private
  def the_params
    params.require(:item).permit( :name )
  end

  def set_item
    @item = @depo.items.find(params[:id])
  end
  
  def set_depo
    @depo = Depo.find(params[:depo_id])
  end
end
