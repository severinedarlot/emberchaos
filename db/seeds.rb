# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#

harry = Expert.create(name: 'Harry Potter')
hermione = Expert.create(name: 'Hermione Granger')
ron = Expert.create(name: 'Ron Weasley')

harry.skills.create(title: "Voler un oeuf à une maman dragon.")
harry.skills.create(title: "Repousser des détraqueurs.")

hermione.skills.create(title: "Connait la bibliothèque de poudlard sur le bout des doigts.")

ron.skills.create(title: "Très bon joueur d'échecs magiques.")
ron.skills.create(title: "Bon camarade mais parfois boudeur.")
ron.skills.create(title: "Possède toute une collection de pulls fait maison")