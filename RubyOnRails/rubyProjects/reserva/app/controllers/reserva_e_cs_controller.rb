class ReservaECsController < ApplicationController
  before_action :set_reserva_ec, only: [:show, :edit, :update, :destroy]

  # GET /reserva_ecs
  # GET /reserva_ecs.json
  def index
    @reserva_ecs = ReservaEc.all
  end

  # GET /reserva_ecs/1
  # GET /reserva_ecs/1.json
  def show
  end

  # GET /reserva_ecs/new
  def new
    @reserva_ec = ReservaEc.new
  end

  # GET /reserva_ecs/1/edit
  def edit
  end

  # POST /reserva_ecs
  # POST /reserva_ecs.json
  def create
    @reserva_ec = ReservaEc.new(reserva_ec_params)

    respond_to do |format|
      if @reserva_ec.save
        format.html { redirect_to @reserva_ec, notice: 'Reserva ec was successfully created.' }
        format.json { render :show, status: :created, location: @reserva_ec }
      else
        format.html { render :new }
        format.json { render json: @reserva_ec.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reserva_ecs/1
  # PATCH/PUT /reserva_ecs/1.json
  def update
    respond_to do |format|
      if @reserva_ec.update(reserva_ec_params)
        format.html { redirect_to @reserva_ec, notice: 'Reserva ec was successfully updated.' }
        format.json { render :show, status: :ok, location: @reserva_ec }
      else
        format.html { render :edit }
        format.json { render json: @reserva_ec.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reserva_ecs/1
  # DELETE /reserva_ecs/1.json
  def destroy
    @reserva_ec.destroy
    respond_to do |format|
      format.html { redirect_to reserva_ecs_url, notice: 'Reserva ec was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reserva_ec
      @reserva_ec = ReservaEc.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reserva_ec_params
      params.fetch(:reserva_ec, {})
    end
end
