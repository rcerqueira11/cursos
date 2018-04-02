class ReservacionsController < ApplicationController
  before_action :set_reservacion, only: [:show, :edit, :update, :destroy]

  # GET /reservacions
  # GET /reservacions.json
  def index
    @reservacions = Reservacion.all
  end

  # GET /reservacions/1
  # GET /reservacions/1.json
  def show
  end

  # GET /reservacions/new
  def new
    @reservacion = Reservacion.new
  end

  # GET /reservacions/1/edit
  def edit
  end

  # POST /reservacions
  # POST /reservacions.json
  def create
    @reservacion = Reservacion.new(reservacion_params)

    respond_to do |format|
      if @reservacion.save
        format.html { redirect_to @reservacion, notice: 'Reservacion was successfully created.' }
        format.json { render :show, status: :created, location: @reservacion }
      else
        format.html { render :new }
        format.json { render json: @reservacion.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reservacions/1
  # PATCH/PUT /reservacions/1.json
  def update
    respond_to do |format|
      if @reservacion.update(reservacion_params)
        format.html { redirect_to @reservacion, notice: 'Reservacion was successfully updated.' }
        format.json { render :show, status: :ok, location: @reservacion }
      else
        format.html { render :edit }
        format.json { render json: @reservacion.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reservacions/1
  # DELETE /reservacions/1.json
  def destroy
    @reservacion.destroy
    respond_to do |format|
      format.html { redirect_to reservacions_url, notice: 'Reservacion was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservacion
      @reservacion = Reservacion.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reservacion_params
      params.require(:reservacion).permit(:usuario_id, :espacio_comun_id, :fecha, :t_inicio, :t_fin, :estatus_reserva_id)
    end
end
