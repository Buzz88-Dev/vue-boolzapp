// Progetto Boolzapp
// Creare const myItems in script.js

// Milestone 1
//      Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
//      Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

//      Tramite un v-for creare nel div preview-contact un div per ogni oggetto dell array contacts che comprende:
//      l immagine dell'avatar (creata tramite percorso) --- <img class="img_user" :src="percorsoInizialeImmagine + element.avatar + percorsoFinaleImmagine" alt="">
//      il name dell utente  {{ element.name }} nel paragrafo
//      l ultimo messaggio ricevuto/inviato tramite un v-for="(item, i) in element.messages" :key="i" dentro al div padre
//      e <span v-if="(i === (element.messages.length - 1))">{{item.message}}</span> allo span figlio

// Milestone 2
//      Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
//      visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
//      Click sul contatto mostra la conversazione del contatto cliccato

//     Nel div con class preview-contact creo una funzione che si attiva con un click
//     @click="selectChat()"
//     al suo interno gli passo l index: @click="selectChat(index)"
//     quando si verifica la seguente condizione, il div si colora di sfondo rosso
//     :class="chatIndex === index ? 'active' : ''"
//     ora interagisco con la class="chat"
//     se l index corrisponde al valore di chatIndex
//     allora al click gli passo le informazioni del contatto richiesto
//     nel div data-contact inserisco l immagine e nome
//     nel div body-chat stampo il messaggio e l orario con caratteristiche in base allo status

 

const myItems = new Vue ({

    el : "#boolzapp",

    data : {

        contacts: [
            {
                name: 'Lufy',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Zoro',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Nami',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Robin',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Sanji',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Chopper',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Brook',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Usopp',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },
            
        ],

        percorsoInizialeImmagine : "img/avatar",

        percorsoFinaleImmagine : ".jpg",

        chatIndex : 0,    
        
    },

    methods : {

       selectChat(index){
            this.chatIndex = index;
       },


    }
    
})

