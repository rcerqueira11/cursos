class CreateEdificios < ActiveRecord::Migration[5.1]
  def change
    create_table :edificios do |t|
      t.string :nombre
      t.string :localizacion
      t.string :cod

      t.timestamps
    end
  end
end
