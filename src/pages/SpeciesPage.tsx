import { trpc } from "../utils/trpc";
import { Accordion, AccordionDetails, AccordionSummary, Card, Container, Typography } from "@mui/material";


const SpeciesPage = () => {
  const species = trpc.useQuery(["swapi.species"]);
  
  if (species.isLoading) {
    return (
      <Typography className="pt-6 text-2xl text-yellow-400 flex justify-center items-center">
        Loading...
      </Typography>
    )
  }
  return (
    <Container className="flex flex-col items-center justify-center mx-auto p-4">
      <Typography variant="h1" className="text-5xl md:text-[5rem] leading-normal font-extrabold text-yellow-400">
        Species of Star Wars
      </Typography>
      <Card className="grid gap-3 p-3 mt-3 text-center w-2/3">
        {species.data?.results.map((item, index) => (
          <Accordion key={index} className="border-2 border-gray-500 rounded motion-safe:hover:border-yellow-400">
            <AccordionSummary> 
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card className="flex flex-col justify-center px-4 pb-4 text-yellow-400">
                <Typography>Name: {item.name}</Typography>
                <Typography>Average Height: {item.average_height}</Typography>
                <Typography>Average Lifespan: {item.average_lifespan}</Typography>
                <Typography>Classification: {item.classification}</Typography>
                <Typography>Eye Colors: {item.eye_colors}</Typography>
                <Typography>Hair Colors: {item.hair_colors}</Typography>
                <Typography>Language: {item.language}</Typography>
                <Typography>Skin Colors: {item.skin_colors}</Typography>
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

export default SpeciesPage;