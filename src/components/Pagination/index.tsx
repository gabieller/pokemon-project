import React from "react";
import { IconButton } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import * as S from "./styles";

const Pagination = ({
  page,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}) => {
  return (
    <S.Pagination>
      {page !== 1 && (
        <IconButton onClick={handlePreviousPage}>
          <ArrowBackIosIcon
            style={{ fill: "#fff" }}
            data-testid="previous-button"
          />
        </IconButton>
      )}
      <div>
        {page} of {totalPages}
      </div>
      {page !== totalPages && (
        <IconButton onClick={handleNextPage}>
          <ArrowForwardIosIcon
            style={{ fill: "#fff" }}
            data-testid="next-button"
          />
        </IconButton>
      )}
    </S.Pagination>
  );
};

export default Pagination;
