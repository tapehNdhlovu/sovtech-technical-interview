import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Row, Col, Container } from "react-bootstrap";
import { Box } from "@mui/system";
import HomeWorld from "../home-world/HomeWorld";

export default function ViewCard({ dataOfAllPeople }) {
  const [homeTownPath, setPath] = useState("");
  const [index, setIndex] = useState(-1);

  const getHomeWorld = (planet, index) => {
    var planetId = planet.match(/(\d+)/)[0];
    var homeTownPath = planetId;
    setPath(homeTownPath);
    setIndex(index);
  };

  return (
    <div className="peopleDataCard">
      <Row>
        {dataOfAllPeople.people.results.map((person, i) => {
          return (
            <Col>
              <Box m={1} pt={1}>
                <Card id="card" key={i} sx={{ minWidth: 270 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Name: {person.name}
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} gutterBottom>
                      <b>Height:</b> {person.height}
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} gutterBottom>
                      <b>Mass:</b> {person.mass}
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} variant="body2">
                      <b>Gender:</b> {person.gender}
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} variant="body2">
                      {index === i && (
                        <div>
                          Home World: <HomeWorld getHomeWorld={homeTownPath} />
                        </div>
                      )}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => getHomeWorld(person.homeworld, i)}
                      size="small"
                    >
                      View homeworld
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
