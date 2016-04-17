require 'test_helper'

class CompanyControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get company_create_url
    assert_response :success
  end

  test "should get put" do
    get company_put_url
    assert_response :success
  end

  test "should get delete" do
    get company_delete_url
    assert_response :success
  end

end
