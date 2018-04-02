require 'test_helper'

class ReservaECsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @reserva_ec = reserva_ecs(:one)
  end

  test "should get index" do
    get reserva_ecs_url
    assert_response :success
  end

  test "should get new" do
    get new_reserva_ec_url
    assert_response :success
  end

  test "should create reserva_ec" do
    assert_difference('ReservaEc.count') do
      post reserva_ecs_url, params: { reserva_ec: {  } }
    end

    assert_redirected_to reserva_ec_url(ReservaEc.last)
  end

  test "should show reserva_ec" do
    get reserva_ec_url(@reserva_ec)
    assert_response :success
  end

  test "should get edit" do
    get edit_reserva_ec_url(@reserva_ec)
    assert_response :success
  end

  test "should update reserva_ec" do
    patch reserva_ec_url(@reserva_ec), params: { reserva_ec: {  } }
    assert_redirected_to reserva_ec_url(@reserva_ec)
  end

  test "should destroy reserva_ec" do
    assert_difference('ReservaEc.count', -1) do
      delete reserva_ec_url(@reserva_ec)
    end

    assert_redirected_to reserva_ecs_url
  end
end
