class CreateUsuarios < ActiveRecord::Migration[5.1]
  def change
    create_table :usuarios do |t|
      t.string :nombre
      t.string :apellido
      t.boolean :solvente
      t.string :email
      t.boolean :propietario
      t.integer :edificio_id
      t.timestamps
    end
  end
end
