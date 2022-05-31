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
//     quando si verifica la seguente condizione, il div si colora di sfondo verde
//     :class="chatIndex === index ? 'active' : ''"
//     ora interagisco con la class="chat"
//     se l index corrisponde al valore di chatIndex
//     allora al click gli passo le informazioni del contatto richiesto
//     nel div data-contact inserisco l immagine e nome
//     nel div body-chat stampo il messaggio e l orario con caratteristiche in base allo status

// Milestone 3
//    Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” 
//    il testo viene aggiunto al thread sopra, come messaggio verde
//    Risposta dall’interlocutore: ad ogni inserimento di un messaggio, 
//    l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

//    creo una variabile newMessage : " ",
//    inserisco v-model="newMessage"
//    nell input dove scrivo il messaggio; con v-model rimane in ascolto
//    @keyup.enter="addNewMessage" creo la funzione e con enter prendo la stringa inserita
//    costruisco la funzione che mi stampa il messaggio scitto e prelevato all interno della chat del contatto selezionato
//    analizzare bene: this.contacts[this.chatIndex].messages.push(message);
//    creare la funzione messageReply() in risposta alla funzione addNewMessage() che si attiva dopo 1 secondo
//    Per poter leggere una data in un formato diverso dal formato standard ISO 8601, 
//    è necessario aggiungere a day.js il plugin CustomParseFormat: https://day.js.org/docs/en/parse/string-format
//    Per installarlo, recuperare il link alla cdn e usarlo come in questo esempio: https://day.js.org/docs/en/plugin/loading-into-browser
//    analizzare i processi mediante le console.log

// Milestone 4
//    Ricerca utenti: scrivendo qualcosa nell’input a sinistra, 
//    vengono visualizzati solo i contatti il cui nome contiene le lettere inserite 
//    (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
//    Inserisco un v-model="writeContact" nell input della search-contact (rimango in ascolto di quello che digito)
//    creo @keyup.enter="searchContact" in input (al click di enter si attiva la funzione searchContact)
//    mi costruisco la mia funzione searchContact e analizzo la situazione mediante console.log --- si attiva cliccando enter
//    inserisco il v-if di visualizzazione nella class="preview-contact"
//    creo una funzione restorationContact() che mi riporta tutti i contatti allo stato visible true quando tolgo tutte le stringhe dall input

// Milestone 5 - opzionale
//    Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette 
//    di cancellare il messaggio selezionato
//    Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

// Altri Bonus
//        Codice:
//        - se ho messo qualche v-if in qualche v-for, 
//          cercare una alaternativa (in questo caso datevi un’occhiata alle “computer properties”, è una delle possibili utilità);

//        Funzionalità
//        - evitare che l’utente possa inviare un messaggio vuoto o composto solamente da spazi
//        - A) cambiare icona in basso a destra 
//          (a fianco all’input per scrivere un nuovo messaggio) finché l’utente sta scrivendo: di default si visualizza l’icona del microfono, 
//          quando l’input non è vuoto si visualizza l’icona dell’aeroplano. 
//          Quando il messaggio è stato inviato e l’input si svuota, si torna a visualizzare il microfono. 
//          B) inviare quindi il messaggio anche cliccando sull’icona dell’aeroplano
//        - predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta “ok:” quando il pc risponde, anziché scrivere “ok”,
//          scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
//        * inserire l’orario corretto nei messaggi (v. note day.js)
//        * visualizzare nella lista dei contatti l’ultimo messaggio inviato/ricevuto da ciascun contatto
//        - sotto al nome del contatto nella parte in alto a destra, cambiare l’indicazione dello stato: visualizzare il testo “sta scrivendo...” 
//          nel timeout in cui il pc risponde, poi mantenere la scritta “online” per un paio di secondi e infine visualizzare “ultimo accesso alle xx:yy” 
//          con l’orario corretto
//        - dare la possibilità all’utente di cancellare tutti i messaggi di un contatto o di cancellare l’intera chat con tutti i suoi dati: 
//          cliccando sull’icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci “Elimina messaggi” 
//          ed “Elimina chat”; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto 
//          (quindi rimane la conversazione vuota) oppure l’intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi 
//          (quindi sparisce il contatto anche dalla lista di sinistra)
//        - dare la possibilità all’utente di aggiungere una nuova conversazione, inserendo in un popup il nome e il link all’icona del nuovo contatto
//        - fare scroll in giù in automatico fino al messaggio più recente, quando viene aggiunto un nuovo messaggio alla conversazione 
//          (NB: potrebbe esserci bisogno di utilizzare nextTick: https://vuejs.org/v2/api/#Vue-nextTick)
//        - aggiungere le emoticons, tramite l’utilizzo di una libreria, ad esempio: https://www.npmjs.com/package/vue-emoji-picker

//        Grafica
//        - visualizzare un messaggio di benvenuto che invita l’utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, 
//          anziché attivare di default la prima conversazione
//        - aggiungere una splash page visibile per 1s all’apertura dell’app
//        - A) rendere l’app responsive e fruibile anche su mobile: di default si visualizza solo la lista dei contatti 
//          e cliccando su un contatto si vedono i messaggi di quel contatto. 
//          B) aggiungere quindi un’icona con una freccia verso sinistra per tornare indietro, dalla visualizzazione della chat alla visualizzazione di tutti i contatti
//        - aggiungere un’icona per ingrandire o rimpicciolire il font: dovrebbe essere sufficiente aggiungere una classe al wrapper principale
//        - aggiungere un’icona per cambiare la modalità light/dark: dovrebbe essere sufficiente aggiungere una classe al wrapper principale

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
        
        newMessage : "",

        writeContact : "",

        deleteClass : "displayNone",
        
    },

    methods : {

       selectChat(index){
            this.chatIndex = index;
            console.log(this.chatIndex);
       },

       addNewMessage(){
            // messaggio = this.newMessage.trim(); --- analizzare .trim()
            if(this.newMessage !== ""){
                console.log(this.newMessage)
                const message = {
                    date : 'data',
                    date : dayjs().format('DD/MM/YYYY HH-mm-ss'),
                    message : this.newMessage,
                    status : 'sent'
                };
                // console.log(message);
                this.contacts[this.chatIndex].messages.push(message);
                // console.log(this.contacts[this.chatIndex].messages);
                this.newMessage = " ";
                setTimeout(this.messageReply, 1000);
            }
       },

       messageReply(){
            let message = {
                date : "data",
                date : dayjs().format('DD/MM/YYYY HH-mm-ss'),
                message : "Ok",
                status : "received"
            };
            this.contacts[this.chatIndex].messages.push(message);
       },

       searchContact(){
            this.restorationContact()
            if (this.writeContact !== ""){
                // console.log(this.writeContact);
                for (let i = 0; i < this.contacts.length; i++){
                    let nome = this.contacts[i].name.toLowerCase();
                    // console.log(nome);
                    if (nome.includes(this.writeContact)){
                        this.contacts[i].visible = true;
                    } else {
                        this.contacts[i].visible = false;
                    }
                }
            }
       },

        restorationContact(){
           for (let i = 0; i < this.contacts.length; i++){
               this.contacts[i].visible = true;
           }
        },

        optionMessage(index){
            console.log(this.contacts[this.chatIndex].messages[index].message)
            console.log(this.contacts[this.chatIndex].messages[index]);
            if (this.contacts[this.chatIndex].messages[index]){
                this.deleteClass = "displayBlock";
            } else {
                this.deleteClass = "displayNone";
            }

            // this.contacts[this.chatIndex].messages.splice(index,1);
        }
    }    
})

