class CreateTipoPropietarios < ActiveRecord::Migration[5.1]
  def change
    create_table :tipo_propietarios do |t|
      t.string :cod
      t.string :descripcion

      t.timestamps
    end
  end
end
