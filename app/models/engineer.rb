class Engineer < ApplicationRecord
    has_many :consultations, dependent: :destroy
end
