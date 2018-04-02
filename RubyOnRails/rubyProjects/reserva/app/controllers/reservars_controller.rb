class ReservarsController < ApplicationController
  before_action :set_reservar, only: [:show, :edit, :update, :destroy]

  # GET /reservars
  # GET /reservars.json
  def index
    @reservars = Reservar.all
  end

  # GET /reservars/1
  # GET /reservars/1.json
  def show
  end

  # GET /reservars/new
  def new
    @reservar = Reservar.new
  end

  # GET /reservars/1/edit
  def edit
  end

  # POST /reservars
  # POST /reservars.json
  def create
    @reservar = Reservar.new(reservar_params)

    respond_to do |format|
      if @reservar.save
        format.html { redirect_to @reservar, notice: 'Reservar was successfully created.' }
        format.json { render :show, status: :created, location: @reservar }
      else
        format.html { render :new }
        format.json { render json: @reservar.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reservars/1
  # PATCH/PUT /reservars/1.json
  def update
    respond_to do |format|
      if @reservar.update(reservar_params)
        format.html { redirect_to @reservar, notice: 'Reservar was successfully updated.' }
        format.json { render :show, status: :ok, location: @reservar }
      else
        format.html { render :edit }
        format.json { render json: @reservar.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reservars/1
  # DELETE /reservars/1.json
  def destroy
    @reservar.destroy
    respond_to do |format|
      format.html { redirect_to reservars_url, notice: 'Reservar was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservar
      @reservar = Reservar.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reservar_params
      params.require(:reservar).permit(:usuario_id, :espacio_comun_id, :fecha, :t_inicio, :t_fin, :estatus_reserva_id)
    end
end
