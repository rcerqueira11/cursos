json.extract! reservacion, :id, :usuario_id, :espacio_comun_id, :fecha, :t_inicio, :t_fin, :estatus_reserva_id, :created_at, :updated_at
json.url reservacion_url(reservacion, format: :json)
