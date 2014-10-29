class SkillSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title

  has_one :user
end
