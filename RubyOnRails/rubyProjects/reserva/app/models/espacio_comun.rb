class EspacioComun < ApplicationRecord
    belongs_to :edificio
    has_many :reserva_ecs
end
