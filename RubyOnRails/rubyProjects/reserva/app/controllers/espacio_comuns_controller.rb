class EspacioComunsController < ApplicationController

    def show
        @espacio_comuns = EspacioComun.all
    end
end
