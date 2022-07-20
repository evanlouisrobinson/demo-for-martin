import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const PeoplePage = () => {
  const queryData = trpc.useQuery(["swapi.people"]);
  const [loading, setLoading] = useState(true);
  const [peopleData, setPeopleData] = useState({results: []});

  useEffect(() => {
    if (loading && queryData.data) {
      setPeopleData(queryData.data);
      setLoading(false);
    }
  }, [loading, queryData.data, setPeopleData]);
  
  return (
    <Container className="flex flex-col items-center justify-center mx-auto p-4">
      <Typography variant="h1" className="text-5xl md:text-[5rem] leading-normal font-extrabold text-yellow-400">
        People of Star Wars
      </Typography>
      <Card className="grid gap-3 p-3 mt-3 text-center w-2/3">
        {peopleData.results.map((item: any, index: any) => (
          <Accordion key={index} className="border-2 border-gray-500 rounded motion-safe:hover:border-yellow-400">
            <AccordionSummary> 
              <Typography>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card className="flex flex-col justify-center px-4 pb-4">
                <Typography className="text-yellow-400">Name: {item.name}</Typography>
                <Typography className="text-yellow-400">Birth Year: {item.birth_year}</Typography>
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

export default PeoplePage;