class CreateReservaEcs < ActiveRecord::Migration[5.1]
  def change
    create_table :reserva_ecs do |t|
      t.integer :fk_usuario
      t.integer :fk_esp_comun
      t.date :fecha
      t.string :t_inicio
      t.string :t_fin
      t.string :fk_status_reserva

      t.timestamps
    end
  end
end
