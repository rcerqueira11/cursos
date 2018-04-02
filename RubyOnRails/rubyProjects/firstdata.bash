
rails g resource TipoPropietario cod:string descripcion:string
TipoPropietario.create cod:'PROP', descripcion:'Propietario'
TipoPropietario.create cod:'COPR', descripcion:'Co-Propietario'

rails g resource EstadoReserva cod:string descripcion:string
EstadoReserva.create cod:'PAG', descripcion:'Pagado'
EstadoReserva.create cod:'PEND', descripcion:'Pendiente por Pagar'

rails g resource Edificio nombre:string localizacion:string cod:string
Edificio.create nombre:'Samanes', localizacion:'Calle 1, 3 trasversal', cod:'SMNS'
Edificio.create nombre:'Las Palmas', localizacion:'Playa 2, sector 33', cod:'LPLMS'

rails g resource EspacioComun nombre:string localizacion:string cod:string
EspacioComun.create nombre:'Piscina', localizacion:'Penthouse', cod:'SMNS-PL', fk_edificio:integer 
EspacioComun.create nombre:'Piscina', localizacion:'PB Sector 4', cod:'LPLMS-PL', fk_edificio:integer 
EspacioComun.create nombre:'Cancha Tenis', localizacion:'Sector deportivo A1', cod:'SMNS-CT', fk_edificio:integer 
EspacioComun.create nombre:'Salon de Fiesta', localizacion:'P1 Ala 5', cod:'LPLMS-SF', fk_edificio:integer 
EspacioComun.create nombre:'Bar', localizacion:'PB3 Final del Pasillo a la Izquierda', cod:'SMNS-BR', fk_edificio:integer 
EspacioComun.create nombre:'Discoteca', localizacion:'Piso 4, todo el piso', cod:'LPLMS-DT', fk_edificio:integer 


rails g resource Usuario nombre:string apellido:string solvente:bool email:string fk_tipo_propietario:integer

rails g resource Reserva fk_usuario:integer fk_esp_comun:integer fecha:date t_inicio:string t_fin:string fk_status_reserva





