class ExpertSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name
  has_many :skills
end
