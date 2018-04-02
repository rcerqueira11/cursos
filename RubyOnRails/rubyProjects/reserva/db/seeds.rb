# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TipoPropietario.create(cod:'PROP', descripcion:'Propietario')
TipoPropietario.create(cod:'COPR', descripcion:'Co-Propietario')
EstadoReserva.create(cod:'PAG', descripcion:'Pagado')
EstadoReserva.create(cod:'PEND', descripcion:'Pendiente por Pagar')
Edificio.create(nombre:'Samanes', localizacion:'Calle 1, 3 trasversal', cod:'SMNS')
Edificio.create(nombre:'Las Palmas', localizacion:'Playa 2, sector 33', cod:'LPLMS')
EspacioComun.create(nombre:'Piscina', localizacion:'Penthouse', cod:'SMNS-PL', fk_edificio:1 )
EspacioComun.create(nombre:'Piscina', localizacion:'PB Sector 4', cod:'LPLMS-PL', fk_edificio:2 )
EspacioComun.create(nombre:'Cancha Tenis', localizacion:'Sector deportivo A1', cod:'SMNS-CT', fk_edificio:1 )
EspacioComun.create(nombre:'Salon de Fiesta', localizacion:'P1 Ala 5', cod:'LPLMS-SF', fk_edificio:2 )
EspacioComun.create(nombre:'Bar', localizacion:'PB3 Final del Pasillo a la Izquierda', cod:'SMNS-BR', fk_edificio:1 )
EspacioComun.create(nombre:'Discoteca', localizacion:'Piso 4, todo el piso', cod:'LPLMS-DT', fk_edificio:2 )
Usuario.create(nombre:'Enio', apellido:'Diaz', solvente:true, email:'prop@gmail.com', fk_tipo_propietario:1)
Usuario.create(nombre:'Amable', apellido:'Rivas', solvente:false, email:'co.prop@gmail.com', fk_tipo_propietario:2)