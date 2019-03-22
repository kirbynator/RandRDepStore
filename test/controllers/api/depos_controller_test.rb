require 'test_helper'

class Api::DeposControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_depos_index_url
    assert_response :success
  end

end
