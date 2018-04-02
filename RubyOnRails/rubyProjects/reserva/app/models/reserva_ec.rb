class ReservaEc < ApplicationRecord
    belongs_to :espacio_comun
    belongs_to :usuario
end
