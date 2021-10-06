import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SportsKabaddiOutlinedIcon from "@mui/icons-material/SportsKabaddiOutlined";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";

function AddToArena() {
  return (
    <Checkbox
      // {...label}
      icon={<SportsKabaddiOutlinedIcon style={{ fontSize: 50 }} />}
      checkedIcon={<SportsKabaddiIcon style={{ fontSize: 50 }} />}
    />
  );
}

export default AddToArena;
