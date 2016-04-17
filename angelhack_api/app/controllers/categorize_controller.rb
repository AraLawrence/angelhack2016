class CategorizeController < ApplicationController

	def categorize
		apikey = ENV['HOD_KEY']
		puts apikey
		client = HODClient.new(apikey, 'v1')
		# index = client.createIndex("mytestindex", flavor="categorization")
		my_index = client.getIndex('food_categories')
		doc1 = HODDoc.new({title: "title1", reference: "doc1", content: "my content 1"})
		doc2 = HODDoc.new({title: "title2", reference: "doc2", content: "my content 2"})
		my_index.addDocs([doc1,doc2])
		render json: my_index
	end

end
