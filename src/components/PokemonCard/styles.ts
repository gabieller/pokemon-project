import styled from "styled-components";
import { Card } from "@mui/material";

export const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8rem;
  width:10rem;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #0075BE;
  border-radius: 1rem;

  &:hover {
    transform: scale(1.1);
  }

  p {
    margin: 0;
    text-transform: capitalize;
    color: white
  }
`;

export const Info = styled.div`
display: flex;
align-items: center;
`
