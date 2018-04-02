class CreateReservars < ActiveRecord::Migration[5.1]
  def change
    create_table :reservars do |t|
      t.integer :usuario_id
      t.integer :espacio_comun_id
      t.date :fecha
      t.string :t_inicio
      t.string :t_fin
      t.integer :estatus_reserva_id

      t.timestamps
    end
  end
end
