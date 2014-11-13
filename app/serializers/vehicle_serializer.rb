class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :type, :model
end