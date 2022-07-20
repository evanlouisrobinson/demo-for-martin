import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const FilmsPage = () => {
  const queryData = trpc.useQuery(["swapi.films"]);
  const [loading, setLoading] = useState(true);
  const [filmsData, setFilmsData] = useState({results: []});

  useEffect(() => {
    if (loading && queryData.data) {
      setFilmsData(queryData.data);
      setLoading(false);
    }
  }, [loading, queryData.data, setFilmsData]);
  
  return (
    <Container className="flex flex-col items-center justify-center mx-auto p-4">
      <Typography variant="h1" className="text-5xl md:text-[5rem] leading-normal font-extrabold text-yellow-400">
        Films of Star Wars
      </Typography>
      <Card className="grid gap-3 p-3 mt-3 text-center w-2/3">
        {filmsData.results.map((item: any, index: any) => (
          <Accordion key={index} className="border-2 border-gray-500 rounded motion-safe:hover:border-yellow-400">
            <AccordionSummary> 
              <Typography>Episode {item.episode_id}: {item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card className="flex flex-col justify-center px-4 pb-4">
                <Typography className="text-yellow-400 font-bold text-xl">{item.opening_crawl}</Typography>
              </Card>
            </AccordionDetails>
          </Accordion>
        ))}
      </Card>
      <Typography className="pt-6 text-2xl text-yellow-400 flex justify-center items-center">
        {loading ? "Loading..." : "Hello from Tatooine"}
      </Typography>
    </Container>
  )
};

export default FilmsPage;