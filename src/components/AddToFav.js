import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

function AddToFav() {
  return (
    <Checkbox
      // {...label}
      icon={<FavoriteBorder style={{ fontSize: 50 }} />}
      checkedIcon={<Favorite style={{ fontSize: 50 }} />}
    />
  );
}

export default AddToFav;
