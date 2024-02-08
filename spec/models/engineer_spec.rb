require 'rails_helper'

RSpec.describe Engineer, type: :model do
  describe 'associations' do
    it { is_expected.to have_many(:consultations).dependent(:destroy) }
  end
end
