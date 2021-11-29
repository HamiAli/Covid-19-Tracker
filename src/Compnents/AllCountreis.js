import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment, useEffect, useState } from "react";

const style = {
  color: "#3f51b5",
  wordBreak: "break-all",
};
const API_URL =
  "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats";
export default function AllCountreis() {
  const getApi = async () => {
    const response = await fetch(API_URL, {
      headers: {
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "657dfa7d7dmsh95dc7bb9af0e01bp1a5477jsne9a640eb44c7",
      },
    });

    const data = await response.json();

    let testArray = [];
    let finalArray = data.data.covid19Stats.filter((item, index) => {
      if (!testArray.includes(item.country)) {
        testArray.push(item.country);
        return item;
      }
    });

    setGlobal(finalArray);
  };
  let [global, setGlobal] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h2> Country</h2></TableCell>
            <TableCell><h2>lastUpdate</h2></TableCell>
            <TableCell><h2>Deaths</h2></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {global.map((val, index) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td style={style}><h3> {val.country}</h3> </td>
                  <td> <h3>{val.lastUpdate}</h3></td>
                  <td><h3> {val.deaths}</h3></td>
                </tr>
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
