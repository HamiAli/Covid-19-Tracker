import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>;
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: "50px 0px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const style = {
  color: "#3f51b5",
  wordBreak: "break-all",
};

const border = {
  border: "1px solid #3f51b5",
};
export default function Global() {
  const getGlobalApi = async () => {
    const response = await fetch(
      "https://covid-19-statistics.p.rapidapi.com/reports/total",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
          "x-rapidapi-key":
            "425bf8bcbamsh7a07445ca28084cp10c9b8jsnbb42ce319de0",
        },
      }
    );
    const data = await response.json();
    delete data.data.source;
    setGlobal(data.data);
  };
  const [global, setGlobal] = useState({});

  useEffect(() => {
    getGlobalApi();
  }, []);

  useEffect(() => {
    AOS.init();
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {Object.keys(global).map((val, ps) => {
          return (
            <Grid key = {ps} item xs={6} md={4}>
              <Item style={border} data-aos="fade-down" elevation={3}>
                <h3 style={style}> {val}</h3>
                <h3> {global[val]}</h3>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
