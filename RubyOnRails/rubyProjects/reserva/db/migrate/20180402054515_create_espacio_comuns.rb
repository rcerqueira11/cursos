class CreateEspacioComuns < ActiveRecord::Migration[5.1]
  def change
    create_table :espacio_comuns do |t|
      t.string :nombre
      t.string :localizacion
      t.string :cod
      t.integer :edificio_id

      t.timestamps
    end
  end
end
