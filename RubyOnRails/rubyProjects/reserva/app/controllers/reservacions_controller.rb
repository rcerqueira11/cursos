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
    
    # Verificar usuario es solvente
    usuario = Usuario.find(@reservacion.usuario_id)
    #Verificar tiempo inicio es menor  a tiempo fin
    tiempo_correcto =  @reservacion.t_fin.utc.strftime( "%H%M%S%N" ) > @reservacion.t_inicio.utc.strftime( "%H%M%S%N" )

    # Verficar que no exista otra reserva para el mismo fecha y hora 
    existe_igual = Reservacion.where(:espacio_comun_id=>@reservacion.espacio_comun_id,:fecha=>@reservacion.fecha, :t_inicio=>@reservacion.t_inicio, :t_fin=>@reservacion.t_fin).length > 0
    
    # if inicio existe negar
    existe_inicio_igual = Reservacion.where(:espacio_comun_id=>@reservacion.espacio_comun_id, :fecha=>@reservacion.fecha, :t_inicio=>@reservacion.t_inicio).length > 0
    
    # if end time menos a tiempo fin en otro reserv negar
    creando_en_medio_inicio = Reservacion.where("t_fin > ? AND t_inicio <= ?",@reservacion.t_inicio,@reservacion.t_inicio).where(:espacio_comun_id=>@reservacion.espacio_comun_id,:fecha=>@reservacion.fecha ).length > 0
    creando_en_medio_fin = Reservacion.where("t_fin > ? AND t_inicio > ?",@reservacion.t_fin,@reservacion.t_fin).where(:espacio_comun_id=>@reservacion.espacio_comun_id,:fecha=>@reservacion.fecha ).length > 0
    #validar existencias

    existe_bloqueante = (existe_igual or existe_inicio_igual or creando_en_medio_inicio or creando_en_medio_fin)
        
    
    if usuario.solvente
      if tiempo_correcto and !existe_bloqueante 
        respond_to do |format|
          if @reservacion.save
            format.html { redirect_to @reservacion, notice: 'Reservacion was successfully created.' }
            format.json { render :show, status: :created, location: @reservacion }
          else
            format.html { render :new }
            format.json { render json: @reservacion.errors, status: :unprocessable_entity }
          end
        end
      else
        # format.html { render :new }
        if !tiempo_correcto
          respond_to do |format|
            format.html { render :new }
            format.json { render json: @reservacion.errors, status: 'Esta hora es incorrecta' }
            flash[:errors] = 'Esta hora es incorrecta'
          end
      # flash[:reservacion.errors]
          
        end

        if existe_bloqueante
          respond_to do |format|
            format.html { render :new }
            format.json { render json: @reservacion.errors, status: 'Esta fecha ya esta ocupada' }
            flash[:errors] = 'Esta fecha ya esta ocupada' 
          end
      # flash[:reservacion.errors]
          
        end
      end
    else 
      # format.html { render :new }
      respond_to do |format|
        format.html { render :new }
        format.json { render json: errors, status: 'Para realizar reservaciones necesita estar solvente' }
        flash[:errors] = 'Usuario no esta solvente'
      end
      # flash[:reservacion.errors]
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
