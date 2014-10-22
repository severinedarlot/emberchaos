class AddUserDataToUser < ActiveRecord::Migration
  def change
  	add_column :users, :name, :text
  	add_column :users, :phone, :string
  	add_column :users, :localisation, :text
  	add_column :users, :presentation, :text
  end
end
