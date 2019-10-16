# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    Image.create(name: 'face', image: 'images/this-GUY.svg')
    Image.create(name: 'simple mandala', image: 'images/abstract-2.svg')
    Image.create(name: 'abstract cells', image:'images/abstract-3.svg')
    Image.create(name: 'abstract pattern', image: 'images/abstract-5.svg')
    Image.create(name: 'abstract rug', image: 'images/abstract-4.svg')
    Image.create(name: 'grandmas coaster', image: 'images/abstract-1.svg')


    User.create(username: 'gracie', password: 'test')
