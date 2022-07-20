import { useState } from 'react';
import Head from "next/head"
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useAppContext } from "../context/state";
import FilmsPage from "./FilmsPage";
import HomePage from "./HomePage";
import PeoplePage from "./PeoplePage";
import PlanetsPage from "./PlanetsPage";
import SpeciesPage from "./SpeciesPage";
import StarshipsPage from './StarshipsPage';
import VehiclesPage from './VehiclesPage';


const Main: NextPage = () => {
  const state = useAppContext();
  
  const switchPage = () => {
    switch (state?.currentPage) {
      case 'films':
        return <FilmsPage />;
      case 'people':
        return <PeoplePage />;
      case 'planets':
        return <PlanetsPage />;
      case 'species':
        return <SpeciesPage />;
      case 'starships':
        return <StarshipsPage />;
      case 'vehicles':
        return <VehiclesPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  }

  return (
    <>
      <CssBaseline />
      <Head>
        <title>My Star Wars API App</title>
        <meta name="description" content="Created by Evan Robinson" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Toolbar>
          {
            ["home"].concat((state?.pageNames || [])).map((item, index) => (
              <Button key={index} onClick={() => state?.setCurrentPage(item)}>
                <Typography className="capitalize">{item}</Typography>
              </Button>
            ))
          }
        </Toolbar>
        {switchPage()}
      </main>
    </>
  );
};

export default Main;
