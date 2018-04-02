class CreateEspacioComuns < ActiveRecord::Migration[5.1]
  def change
    create_table :espacio_comuns do |t|
      t.string :nombre
      t.string :localizacion
      t.string :cod
      t.integer :fk_edificio

      t.timestamps
    end
  end
end
