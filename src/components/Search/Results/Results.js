import React from "react";
import styled from "styled-components";
import { Result } from "./Result/Result";

const Styles = styled.div``;

export const Results = (props) => {
  if (props.resultsData === null) {
    return (
      <div>
        <h3>No issues found with this term</h3>
        <p>
          If you believe this to be incorrect please consider contributing to{" "}
          <a
            href="https://github.com/retextjs/retext-equality"
            rel="noreferrer"
            target="_blank"
          >
            retext-equality
          </a>
        </p>
      </div>
    );
  } else if (
    props.resultsData === "emptySearch" ||
    props.resultsData.length === undefined
  ) {
    //initial load or searched for empty string
    return null;
  } else {
    return (
      <Styles>
        <h3>Found Non-Inclusive Terms</h3>
        {props.resultsData.map((element, index) => (
          <Result result={element} key={`result-${index}`} />
        ))}
      </Styles>
    );
  }
};
