class CreateReservacions < ActiveRecord::Migration[5.1]
  def change
    create_table :reservacions do |t|
      t.integer :usuario_id
      t.integer :espacio_comun_id
      t.date :fecha
      t.time :t_inicio
      t.time :t_fin
      t.integer :estatus_reserva_id

      t.timestamps
    end
  end
end
