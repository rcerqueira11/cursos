require 'test_helper'

class ReservacionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reservacion = reservacions(:one)
  end

  test "should get index" do
    get reservacions_url
    assert_response :success
  end

  test "should get new" do
    get new_reservacion_url
    assert_response :success
  end

  test "should create reservacion" do
    assert_difference('Reservacion.count') do
      post reservacions_url, params: { reservacion: { espacio_comun_id: @reservacion.espacio_comun_id, estatus_reserva_id: @reservacion.estatus_reserva_id, fecha: @reservacion.fecha, t_fin: @reservacion.t_fin, t_inicio: @reservacion.t_inicio, usuario_id: @reservacion.usuario_id } }
    end

    assert_redirected_to reservacion_url(Reservacion.last)
  end

  test "should show reservacion" do
    get reservacion_url(@reservacion)
    assert_response :success
  end

  test "should get edit" do
    get edit_reservacion_url(@reservacion)
    assert_response :success
  end

  test "should update reservacion" do
    patch reservacion_url(@reservacion), params: { reservacion: { espacio_comun_id: @reservacion.espacio_comun_id, estatus_reserva_id: @reservacion.estatus_reserva_id, fecha: @reservacion.fecha, t_fin: @reservacion.t_fin, t_inicio: @reservacion.t_inicio, usuario_id: @reservacion.usuario_id } }
    assert_redirected_to reservacion_url(@reservacion)
  end

  test "should destroy reservacion" do
    assert_difference('Reservacion.count', -1) do
      delete reservacion_url(@reservacion)
    end

    assert_redirected_to reservacions_url
  end
end
