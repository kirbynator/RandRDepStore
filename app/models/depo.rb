class Depo < ApplicationRecord
  has_many :items, dependent: :destroy
end
