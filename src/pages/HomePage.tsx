import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useAppContext } from "../context/state";

type APICardProps = {
  name: string;
  description: string;
};

const HomePage = () => {
  const state = useAppContext();
  return (
    <Container className="flex flex-col items-center justify-center mx-auto p-4">
      <Typography variant="h1" className="text-5xl md:text-[5rem] leading-normal font-extrabold text-yellow-400">
        Star Wars API
      </Typography>
      <Box className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
        {
          state?.pageNames.map((item, index) => (
            <APICard
              key={index}
              name={item}
              description={`The ${item} of Star Wars`}
            />
          ))
        }
      </Box>
      <Typography className="pt-6 text-2xl text-yellow-400 flex justify-center items-center">
        Hello from Tatooine
      </Typography>
    </Container>
  )
};

const APICard = ({
  name,
  description,
}: APICardProps) => {
  const state = useAppContext();
  return (
    <Card 
      variant="outlined" 
      onClick={() => state?.setCurrentPage(name)} 
      className="flex flex-col justify-center p-6 border-2 border-gray-500 rounded motion-safe:hover:border-yellow-400"
    >
      <Typography className="text-4xl pb-6 font-bold uppercase text-gray-200">{name}</Typography>
      <Typography className="text-xl text-gray-300">{description}</Typography>
    </Card>
  );
};

export default HomePage;