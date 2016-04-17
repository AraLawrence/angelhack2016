# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160417034240) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "charities", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "charities_users", force: :cascade do |t|
    t.integer  "charity_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "charities_users", ["charity_id"], name: "index_charities_users_on_charity_id", using: :btree
  add_index "charities_users", ["user_id"], name: "index_charities_users_on_user_id", using: :btree

  create_table "companies", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "companies_users", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "companies_users", ["company_id"], name: "index_companies_users_on_company_id", using: :btree
  add_index "companies_users", ["user_id"], name: "index_companies_users_on_user_id", using: :btree

  create_table "inventories", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "inventories", ["user_id"], name: "index_inventories_on_user_id", using: :btree

  create_table "inventory_items", force: :cascade do |t|
    t.integer  "inventory_id"
    t.integer  "category_id"
    t.string   "name"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "quantity"
  end

  add_index "inventory_items", ["category_id"], name: "index_inventory_items_on_category_id", using: :btree
  add_index "inventory_items", ["inventory_id"], name: "index_inventory_items_on_inventory_id", using: :btree

  create_table "order_items", force: :cascade do |t|
    t.integer  "order_id"
    t.string   "name"
    t.integer  "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "order_items", ["order_id"], name: "index_order_items_on_order_id", using: :btree

  create_table "orders", force: :cascade do |t|
    t.integer  "vendor_id"
    t.integer  "recipient_id"
    t.string   "status"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wishlist_items", force: :cascade do |t|
    t.integer  "wishlist_id"
    t.string   "name"
    t.integer  "category_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "wishlist_items", ["category_id"], name: "index_wishlist_items_on_category_id", using: :btree
  add_index "wishlist_items", ["wishlist_id"], name: "index_wishlist_items_on_wishlist_id", using: :btree

  create_table "wishlists", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "charity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "wishlists", ["charity_id"], name: "index_wishlists_on_charity_id", using: :btree
  add_index "wishlists", ["user_id"], name: "index_wishlists_on_user_id", using: :btree

  add_foreign_key "charities_users", "charities"
  add_foreign_key "charities_users", "users"
  add_foreign_key "companies_users", "companies"
  add_foreign_key "companies_users", "users"
  add_foreign_key "inventories", "users"
  add_foreign_key "inventory_items", "categories"
  add_foreign_key "inventory_items", "inventories"
  add_foreign_key "order_items", "orders"
  add_foreign_key "wishlist_items", "categories"
  add_foreign_key "wishlist_items", "wishlists"
  add_foreign_key "wishlists", "charities"
  add_foreign_key "wishlists", "users"
end
