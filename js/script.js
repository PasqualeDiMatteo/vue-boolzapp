console.log("JSOK");
// Controllo JS
console.log("JSOK");

// Controllo Vue

console.log("Vue OK", Vue);

// Estarpolo il metodo createApp

const { createApp } = Vue;

// Inizializzo l'app Vue

const app = createApp({
  data() {
    return {
      clicked: false,
      currentMessageId: 0,
      searchedContact: "",
      newMessage: "",
      activeContactId: 1,
      user: {
        name: "Pasquale",
        avatar: "_io",
      },
      contacts: [
        {
          id: 1,
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              id: 3,
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          id: 2,
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              id: 1,
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              id: 2,
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              id: 3,
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          id: 3,
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              id: 1,
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              id: 2,
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              id: 3,
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          id: 4,
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          id: 5,
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          id: 6,
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              id: 3,
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          id: 7,
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          id: 8,
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              id: 1,
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              id: 2,
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              id: 3,
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  // COMPUTED
  computed: {
    // Active Contact
    activeContact() {
      this.clicked = false;
      return this.contacts.find(({ id }) => id === this.activeContactId);
    },
    // Filtered Contacts
    filteredContacts() {
      const term = this.searchedContact.toLowerCase();
      return this.contacts.filter(({ name }) =>
        name.toLowerCase().includes(term)
      );
    },
  },
  // METHODS
  methods: {
    // Is Clicked
    isClicked() {
      if (this.clicked === false) {
        this.clicked = true;
      } else {
        this.clicked = false;
      }
    },
    // Set Current Message Id
    setCurrentMessageId(id) {
      this.currentMessageId = id;
    },
    // Remove message
    removeMessage(target) {
      this.activeContact.messages = this.activeContact.messages.filter(
        (message) => target !== message.id
      );
      this.clicked = false;
    },
    // Active Id
    setActiveId(id) {
      this.activeContactId = id;
    },
    // Add Message
    addMessage() {
      const message = this.newMessage;
      const id = new Date().getTime();
      const date = new Date().toLocaleString();
      const status = "sent";
      const justSentMessage = { id, date, message, status };
      this.contacts.forEach((contact) => {
        if (contact.id === this.activeContactId && message) {
          contact.messages.push(justSentMessage);
        }
        this.newMessage = "";
        // Contact Response
        setTimeout(() => {
          if (contact.id === this.activeContactId && message) {
            contact.messages.push({
              id: new Date().getTime(),
              date: new Date().toLocaleString(),
              message: "Ok",
              status: "received",
            });
          }
        }, 1000);
      });
    },
  },
});

// La monto nell'elemento HTML

app.mount("#root");
