class IdentifiedUserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :phone, :localisation, :presentation
end