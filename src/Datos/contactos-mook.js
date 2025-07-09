

const mook_datos ={
    contactos: [
        {
                id: 1,
                name: 'Mario',
                last_time_connected: '9:10',
                img:'/cara_malo.avif',
            
                 
                last_message: {
                    id: 1,
                    text: 'Todo tranquilo?'
                },
            
            
                unread_messages: 2,

                messages:[{
                    emisor: 'Mario: ',
                    hora: '9:10',
                    id: 1,
                    texto: 'Hola que tal?',
                    status: 'visto'

                },
            {
                    emisor: 'Luciano: ',
                    hora: '9:10',
                    id: 1,
                    texto: 'Bien y vos',
                    status: 'visto'
                },
                {
                    emisor: 'Mario: ',
                    hora: '9:10',
                    id: 1,
                    texto: 'Todo tranquilo?',
                    status: 'visto'

                },

            ]
            },
            
            {   id: 2,
                name: 'Mariana',
                last_time_connected: '12:20',
                img:'/mafalda.jpg',

                last_message:{
                    id: 1,
                    text: 'Avisame cuando llegues'},
            
                unread_messages: 2,

                messages:[{
                    emisor: 'Mariana: ',
                    hora: '12:10',
                    id: 1,
                    texto: 'Estas en casa',
                    status: 'visto'
                },
            {
                    emisor: 'Luciano: ',
                    hora: '12:15',
                    id: 1,
                    texto: 'Estoy viajando, no llegue',
                    status: 'visto'
                },
            {
                    emisor: 'Mariana: ',
                    hora: '12:20',
                    id: 1,
                    texto: 'Avisame cuando llegues',
                    status: 'visto'
                },
            {
                    emisor: 'Luciano: ',
                    hora: '12:23',
                    id: 1,
                    texto: 'Dale',
                    status: 'visto'
                }]
           
            
            },      
            {  id: 3,
                name: 'Valentin',
                last_time_connected: '17:19',
                img:'/Mister_Been.jpg' ,
                last_message: {
                    id: 1,
                    text: 'Despues arreglamos'
                },
                unread_messages: 3,

                messages:[{
                    emisor: 'Valentin: ',
                    hora: '17:00',
                    id: 1,
                    texto: 'Hay partidito, venis?',
                    status: 'visto'
                },
                {
                    emisor: 'Luciano: ',
                    hora: '17:10',
                    id: 1,
                    texto: 'Dale, cuanto hay que poner?',
                    status: 'visto'
                },
                {
                    emisor: 'Valentin: ',
                    hora: '17:19',
                    id: 1,
                    texto: 'Despues arreglamos',
                    status: 'visto'
                },
            ]
            },
             {
                id:4,
                name: 'Graciela',
                last_time_connected: '20:19',
                img:'/poderosas.jpg',
             
                last_message: {
                    id: 1,
                    text: 'Los espero'
                },
                unread_messages: 3,
                messages:[{
                    emisor: 'Graciela: ',
                    hora: '20:15',
                    id: 1,
                    texto: 'Vienen hoy?',
                    status: 'visto'
                },
            {
                    emisor: 'Luciano: ',
                    hora: '20:16',
                    id: 1,
                    texto: 'Si!',
                    status: 'visto'
                },
            {
                    emisor: 'Graciela: ',
                    hora: '20:19',
                    id: 1,
                    texto: 'Los espero',
                    status: 'visto'
                },]
            },

        ]
    
}

export default mook_datos
