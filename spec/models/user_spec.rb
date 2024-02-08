require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'associations' do
    it { is_expected.to have_many(:consultations).dependent(:destroy) }
    it { is_expected.to have_many(:engineers).through(:consultations) }
  end
end
