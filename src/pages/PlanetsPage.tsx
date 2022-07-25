import { trpc } from "../utils/trpc";
import { Accordion, AccordionDetails, AccordionSummary, Card, Container, Typography } from "@mui/material";

const PlanetsPage = () => {
  const planets = trpc.useQuery(["swapi.planets"]);
  
  if (planets.isLoading) {
    return (
      <Typography className="pt-6 text-2xl text-yellow-400 flex justify-center items-center">
        Loading...
      </Typography>
    );
  }
  return (
    <Container className="flex flex-col items-center justify-center mx-auto p-4">
      <Typography variant="h1" className="text-5xl md:text-[5rem] leading-normal font-extrabold text-yellow-400">
        Planets of Star Wars
      </Typography>
      <Card className="grid gap-3 p-3 mt-3 text-center w-2/3">
        {planets.data?.results.map((item, index) => (
          <Accordion key={index} className="border-2 border-gray-500 rounded motion-safe:hover:border-yellow-400">
            <AccordionSummary> 
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card className="flex flex-col justify-center px-4 pb-4 text-yellow-400">
                <Typography>Name: {item.name}</Typography>
                <Typography>Climate: {item.climate}</Typography>
                <Typography>Diameter: {item.diameter}</Typography>
                <Typography>Gravity: {item.gravity}</Typography>
                <Typography>Orbital Period: {item.orbital_period}</Typography>
                <Typography>Population: {item.population}</Typography>
                <Typography>Rotation Period: {item.rotation_period}</Typography>
                <Typography>Surface Water: {item.surface_water}</Typography>
                <Typography>Terrain: {item.terrain}</Typography>
              </Card>
            </AccordionDetails>
          </Accordion>
        ))}
      </Card>
      <Typography className="pt-6 text-2xl text-yellow-400 flex justify-center items-center">
        Hello from Tatooine
      </Typography>
    </Container>
  )
};

export default PlanetsPage;