class AddNameKindBrandToVehicle < ActiveRecord::Migration
  def change
    # add_column :vehicles, :name, :string
    # add_column :vehicles, :brand, :string
    # rename_column :vehicles, :type, :kind
    # rename_column :vehicles, :model, :car_model


    # Different way to do it just under

    change_table :vehicles do |t|
      t.column :name, :string
      t.column :brand, :string
      t.rename :type, :kind
      t.rename :model, :car_model
    end
  end
end
