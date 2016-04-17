require 'test_helper'

class CharityControllerTest < ActionDispatch::IntegrationTest
  test "should get inventory" do
    get charity_inventory_url
    assert_response :success
  end

  test "should get wishlist" do
    get charity_wishlist_url
    assert_response :success
  end

end
