import { trpc } from "../utils/trpc";
import { Accordion, AccordionDetails, AccordionSummary, Card, Container, Typography } from "@mui/material";


const VehiclesPage = () => {
  const vehicles = trpc.useQuery(["swapi.vehicles"]);

  if (vehicles.isLoading) {
    return (
      <Typography className="pt-6 text-2xl text-yellow-400 flex justify-center items-center">
        Loading...
      </Typography>
    )
  }
  return (
    <Container className="flex flex-col items-center justify-center mx-auto p-4">
      <Typography variant="h1" className="text-5xl md:text-[5rem] leading-normal font-extrabold text-yellow-400">
        Vehicles of Star Wars
      </Typography>
      <Card className="grid gap-3 p-3 mt-3 text-center w-2/3">
        {vehicles.data?.results.map((item, index) => (
          <Accordion key={index} className="border-2 border-gray-500 rounded motion-safe:hover:border-yellow-400">
            <AccordionSummary> 
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card className="flex flex-col justify-center px-4 pb-4 text-yellow-400">
                <Typography>Name: {item.name}</Typography>
                <Typography>Model: {item.model}</Typography>
                <Typography>Vehicle Class: {item.vehicle_class}</Typography>
                <Typography>Manufacturer: {item.manufacturer}</Typography>
                <Typography>Length: {item.cost_in_credits} m</Typography>
                <Typography>Cost: {item.cost_in_credits} credits</Typography>
                <Typography>Crew: {item.crew}</Typography>
                <Typography>Passengers: {item.passengers}</Typography>
                <Typography>Max. Atmosphering Speed: {item.max_atmosphering_speed}</Typography>
                <Typography>Cargo Capacity: {item.cargo_capacity}</Typography>
                <Typography>Consumables: {item.consumables}</Typography>
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

export default VehiclesPage;