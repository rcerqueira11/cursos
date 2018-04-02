class EspacioComun < ApplicationRecord
    belongs_to :edicio
    has_many :reserva_ec
end
