# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180402202915) do

  create_table "edificios", force: :cascade do |t|
    t.string "nombre"
    t.string "localizacion"
    t.string "cod"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "espacio_comuns", force: :cascade do |t|
    t.string "nombre"
    t.string "localizacion"
    t.string "cod"
    t.integer "edificio_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "estado_reservas", force: :cascade do |t|
    t.string "cod"
    t.string "descripcion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservacions", force: :cascade do |t|
    t.integer "usuario_id"
    t.integer "espacio_comun_id"
    t.date "fecha"
    t.time "t_inicio"
    t.time "t_fin"
    t.integer "estatus_reserva_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "usuarios", force: :cascade do |t|
    t.string "nombre"
    t.string "apellido"
    t.boolean "solvente"
    t.string "email"
    t.boolean "propietario"
    t.integer "edificio_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
