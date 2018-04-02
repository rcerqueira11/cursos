class Usuario < ApplicationRecord
    belongs_to :edificio
    has_one :tipo_propietario
end
