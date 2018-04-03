# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

EstadoReserva.create(cod:'PAG', descripcion:'Pagado')
EstadoReserva.create(cod:'PEND', descripcion:'Pendiente por Pagar')
Edificio.create(nombre:'Samanes', localizacion:'Calle 1, 3 trasversal', cod:'SMNS')
Edificio.create(nombre:'Las Palmas', localizacion:'Playa 2, sector 33', cod:'LPLMS')
EspacioComun.create(nombre:'Piscina Penthouse', localizacion:'Penthouse', cod:'SMNS-PL', edificio_id:Edificio.where(:cod=>'SMNS').first.id )
EspacioComun.create(nombre:'Cancha Tenis', localizacion:'Sector deportivo A1', cod:'SMNS-CT', edificio_id:Edificio.where(:cod=>'SMNS').first.id )
EspacioComun.create(nombre:'Bar', localizacion:'PB3 Final del Pasillo a la Izquierda', cod:'SMNS-BR', edificio_id:Edificio.where(:cod=>'SMNS').first.id )
EspacioComun.create(nombre:'Piscina', localizacion:'PB Sector 4', cod:'LPLMS-PL', edificio_id:Edificio.where(:cod=>'LPLMS').first.id )
EspacioComun.create(nombre:'Salon de Fiesta', localizacion:'P1 Ala 5', cod:'LPLMS-SF', edificio_id:Edificio.where(:cod=>'LPLMS').first.id )
EspacioComun.create(nombre:'Discoteca', localizacion:'Piso 4, todo el piso', cod:'LPLMS-DT', edificio_id:Edificio.where(:cod=>'LPLMS').first.id )
Usuario.create(nombre:'Enio', apellido:'Diaz', solvente:true, email:'prop@gmail.com', propietario:true, edificio_id:Edificio.where(:cod=>'SMNS').first.id)
Usuario.create(nombre:'Guillermo', apellido:'del Toro', solvente:false, email:'nosolvente@gmail.com', propietario:false, edificio_id:Edificio.where(:cod=>'LPLMS').first.id)
Usuario.create(nombre:'Amable', apellido:'Rivas', solvente:true, email:'co.prop@gmail.com', propietario:false, edificio_id:Edificio.where(:cod=>'LPLMS').first.id)
