require 'test_helper'

class ItemControllerTest < ActionDispatch::IntegrationTest
  test "should get scan" do
    get item_scan_url
    assert_response :success
  end

end
