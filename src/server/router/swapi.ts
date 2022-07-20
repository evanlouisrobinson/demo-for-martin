import { createRouter } from "./context";

export const swapiRouter = createRouter()
  .query("films", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/films")
      const data = await res.json()
      return data;
    },
  })
  .query("people", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/people")
      const data = await res.json()
      return data;
    },
  })
  .query("planets", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/planets")
      const data = await res.json()
      return data;
    },
  })
  .query("species", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/species")
      const data = await res.json()
      return data;
    },
  })
  .query("starships", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/starships")
      const data = await res.json()
      return data;
    },
  })
  .query("vehicles", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/vehicles")
      const data = await res.json()
      return data;
    },
  });
