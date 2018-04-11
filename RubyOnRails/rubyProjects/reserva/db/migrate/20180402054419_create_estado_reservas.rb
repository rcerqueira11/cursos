class CreateEstadoReservas < ActiveRecord::Migration[5.1]
  def change
    create_table :estado_reservas do |t|
      t.string :cod
      t.string :descripcion

      t.timestamps
    end
  end
end
