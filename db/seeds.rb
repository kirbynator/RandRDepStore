25.times do
d = Depo.create(
  name: Faker::Commerce.department
  )
  50.times do Item.create(
    name: Faker::Commerce.product_name,
    info: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    depo_id: d.id
    )
  end
end

puts "A lot Products Seeded"