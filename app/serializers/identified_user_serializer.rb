class IdentifiedUserSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :email, :name, :phone, :localisation, :presentation
  
  has_many :skills
end