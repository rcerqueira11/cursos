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

ActiveRecord::Schema.define(version: 20180402060440) do

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
    t.integer "fk_edificio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "estado_reservas", force: :cascade do |t|
    t.string "cod"
    t.string "descripcion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reserva_ecs", force: :cascade do |t|
    t.integer "fk_usuario"
    t.integer "fk_esp_comun"
    t.date "fecha"
    t.string "t_inicio"
    t.string "t_fin"
    t.string "fk_status_reserva"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tipo_propietarios", force: :cascade do |t|
    t.string "cod"
    t.string "descripcion"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "usuarios", force: :cascade do |t|
    t.string "nombre"
    t.string "apellido"
    t.boolean "solvente"
    t.string "email"
    t.integer "fk_tipo_propietario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
