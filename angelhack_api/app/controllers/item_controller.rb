class ItemController < ApplicationController


  def scan
  	

	# key = ENV['API_KEY']
	# secret = ENV['SECRET']

	# # Set up a client to talk to the Semantics3 API
	# sem3 = Semantics3::Products.new(key, secret)
	# sem3.products_field( "upc", "0071641818033" )
	# sem3.products_field( "field", ["name","gtins"] )
	# productsHash = sem3.get_products()
	# puts productsHash.to_json
	# render json: productsHash.to_json

  	barcode = '0071641818033'
  	base_url = 'https://api.outpan.com/v2/products/' + barcode
  	response = RestClient.get base_url, {
  		:params => {
  			:apikey => ENV['OUTPAN_KEY']
  		}
  	}
  	render json: response
  	
  end
end
