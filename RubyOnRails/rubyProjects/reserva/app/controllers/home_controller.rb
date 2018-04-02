class HomeController < ApplicationController
  def index

    @edificio = Edificio.all
    @espacio_comun = EspacioComun.find(Edificio.first.id)
    # @espacio_comunes = Edi
  end

  def temp
    redirect_to root_path
  end
end
