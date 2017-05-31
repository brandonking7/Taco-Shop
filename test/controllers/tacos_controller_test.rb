require 'test_helper'

class TacosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get tacos_index_url
    assert_response :success
  end

end
