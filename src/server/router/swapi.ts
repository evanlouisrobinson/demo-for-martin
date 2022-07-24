import { createRouter } from "./context";
import { FilmResponse, PeopleResponse, PlanetResponse, ShipResponse, SpeciesResponse, VehicleResponse } from "./types";

export const swapiRouter = createRouter()
  .query("films", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/films");
      const data: FilmResponse = await res.json();
      return data;
    },
  })
  .query("people", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/people");
      const data: PeopleResponse = await res.json();
      return data;
    },
  })
  .query("planets", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/planets");
      const data: PlanetResponse = await res.json();
      return data;
    },
  })
  .query("species", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/species");
      const data: SpeciesResponse = await res.json();
      return data;
    },
  })
  .query("starships", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/starships");
      const data: ShipResponse = await res.json();
      return data;
    },
  })
  .query("vehicles", {
    async resolve({ ctx }) {
      const res = await fetch("https://swapi.dev/api/vehicles");
      const data: VehicleResponse = await res.json();
      return data;
    },
  });
