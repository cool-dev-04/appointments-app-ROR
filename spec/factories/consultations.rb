FactoryBot.define do
  factory :consultation do
    date { '2024-03-27' }
    city { 'MyString' }
    user { nil }
    engineer { nil }
  end
end
