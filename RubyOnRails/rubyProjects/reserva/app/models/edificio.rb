class Edificio < ApplicationRecord
    has_many :espacio_comuns
    has_many :usuario
end
