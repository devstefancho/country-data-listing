//import React from "react";
import styled from "styled-components";

export const StyledLabel = styled.label`
  color: ${(props) => (props.active ? props.theme.active : null)};
`;

export const StyledInput = styled.input`
  max-width: 100%;
  background-color: ${(props) => (props.active ? props.theme.active : null)};
`;
