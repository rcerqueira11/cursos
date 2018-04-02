require 'test_helper'

class ReservarsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reservar = reservars(:one)
  end

  test "should get index" do
    get reservars_url
    assert_response :success
  end

  test "should get new" do
    get new_reservar_url
    assert_response :success
  end

  test "should create reservar" do
    assert_difference('Reservar.count') do
      post reservars_url, params: { reservar: { espacio_comun_id: @reservar.espacio_comun_id, estatus_reserva_id: @reservar.estatus_reserva_id, fecha: @reservar.fecha, t_fin: @reservar.t_fin, t_inicio: @reservar.t_inicio, usuario_id: @reservar.usuario_id } }
    end

    assert_redirected_to reservar_url(Reservar.last)
  end

  test "should show reservar" do
    get reservar_url(@reservar)
    assert_response :success
  end

  test "should get edit" do
    get edit_reservar_url(@reservar)
    assert_response :success
  end

  test "should update reservar" do
    patch reservar_url(@reservar), params: { reservar: { espacio_comun_id: @reservar.espacio_comun_id, estatus_reserva_id: @reservar.estatus_reserva_id, fecha: @reservar.fecha, t_fin: @reservar.t_fin, t_inicio: @reservar.t_inicio, usuario_id: @reservar.usuario_id } }
    assert_redirected_to reservar_url(@reservar)
  end

  test "should destroy reservar" do
    assert_difference('Reservar.count', -1) do
      delete reservar_url(@reservar)
    end

    assert_redirected_to reservars_url
  end
end
