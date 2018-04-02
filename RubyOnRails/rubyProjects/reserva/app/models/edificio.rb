class Edificio < ApplicationRecord
    has_many :espacio_comun
    has_many :usuario
end
