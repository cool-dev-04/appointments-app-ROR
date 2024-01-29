class User < ApplicationRecord
  has_many :consultations, dependent: :destroy
  has_many :engineers, through: :consultations
end
