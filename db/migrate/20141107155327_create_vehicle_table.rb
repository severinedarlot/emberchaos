class CreateVehicleTable < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
      t.integer :user_id #Make automatically the binding with user     
      t.string :type
      t.string :model
      t.string :year_first_immatriculation
      t.datetime :purchase_date
      t.timestamps
    end
  end

end
