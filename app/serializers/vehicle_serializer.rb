class VehicleSerializer < ActiveModel::Serializer
  attributes 
	:id, 
	:user_id,
	:name,
	:type,
	:brand,
	:model
end