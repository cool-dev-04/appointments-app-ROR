# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

5.times do
  User.create(username: Faker::Internet.username)
end

10.times do
  Engineer.create(
    name: Faker::Name.name,
    photo: Faker::Avatar.image,
    consultancy_fee: Faker::Number.decimal(l_digits: 2),
    speciality: Faker::Job.title,
    about: Faker::Lorem.paragraph
  )
end

10.times do
  Consultation.create(
    user_id: User.all.sample.id,
    engineer_id: Engineer.all.sample.id,
    date: Faker::Date.between(from: 1.year.ago, to: Date.today),
    city: Faker::Address.city
  )
end
