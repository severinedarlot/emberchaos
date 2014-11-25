class VehicleSerializer < ActiveModel::Serializer
  attributes :id, 
	:user_id,
	:name,
	:kind,
	:brand,
	:car_model
end