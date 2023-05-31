import { createServer } from "miragejs"

createServer({
    routes() {
      this.get("/api/reminders", () => ({
        reminders: [
          { id: 1, text: "Take a walk " },
          { id: 2, text: "Code for 14hours Straight" },
          { id: 3, text: "Work out" },
          { id: 4, text: "Tweet" },
        ],
      }))
    },
  })