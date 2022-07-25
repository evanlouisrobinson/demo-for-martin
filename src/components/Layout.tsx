import { Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import type { ReactNode } from 'react';
import Head from "next/head";
import Link from "next/link";
import { useAppContext } from "../context/state";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const state = useAppContext();

  return (
    <>
      <Head>
        <title>My Star Wars API App</title>
        <meta name="description" content="Created by Evan Robinson" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Toolbar>
          {state?.pages.map((item, index) => (
            <Link href={item.url} key={index}>
              <Typography className="m-2 text-blue-400 motion-safe:hover:text-yellow-400">{item.name}</Typography>
            </Link>
          ))}
        </Toolbar>
        <CssBaseline />
        {children}
      </main>
    </>
    )
};

export default Layout;