import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { checkTerm } from "../../util/util";
import { Results } from "./Results/Results";

const Styles = styled.div`
  div {
    margin-top: 45px;
  }
`;
export const Search = () => {
  let [resultsData, setResultsData] = useState({});
  let [inputVal, setinputVal] = useState("");
  return (
    <Container>
      <Styles>
        <div>
          <Form>
            <Form.Group controlId="textSearch">
              <Form.Control
                onChange={(event) => setinputVal(event.target.value)}
                name="searchForm"
                className="searchForm"
                size="lg"
                type="text"
                placeholder="Enter a single term or space seperated set of terms"
              />
            </Form.Group>
            <Button
              className="searchButton"
              size="lg"
              variant="primary"
              onClick={() => {
                setResultsData(checkTerm(inputVal));
              }}
            >
              Search
            </Button>
          </Form>
          <Results resultsData={resultsData} setResultsData={setResultsData} />
        </div>
      </Styles>
    </Container>
  );
};
