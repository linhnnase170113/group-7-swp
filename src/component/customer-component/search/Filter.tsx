import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { category, productStatus } from "@/config/setup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
export default function Filter() {
  const [categoryNumber, setCategoryNumber] = useState(-1);
  const [priceNumber, setPriceNumber] = useState(-1);
  const [statusNumber, setStatusNumber] = useState(-1)
  return (
    <Paper>
      <Typography
      onClick={() => {
        setCategoryNumber(-1)
        setPriceNumber(-1)
        setStatusNumber(-1)
      }} style={{
        cursor: "pointer",
          padding: "0.5rem 1rem 0rem",
        }}>xóa tìm kiếm</Typography>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
          }}
        >
          Category
        </Typography>
        {category.map((item: any, key: any) => (
          <FormControlLabel
            control={<Checkbox checked={categoryNumber === key ? true : false} />}
            label={item.name}
            key={key}
            sx={{
              width: "100%",
            }}
            value={categoryNumber === key ? true : false}
            onChange={(_, value) => {
              setCategoryNumber(key)
            }}
          />
        ))}
      </div>
      <div
        style={{
          padding: "1rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "500",
          }}
        >
          Price
        </Typography>
        {category.map((item: any, key: any) => (
          <FormControlLabel
            control={<Checkbox checked={priceNumber === key ? true : false} />}
            label={item.name}
            key={key}
            sx={{
              width: "100%",
            }}
            value={priceNumber === key ? true : false}
            onChange={(_, value) => {
              setPriceNumber(key)
            }}
          />
        ))}
      </div>
      <div
        style={{
          padding: "1rem",
        }}
      >
        {productStatus.map((item, key) => (
          <FormControlLabel
          control={<Checkbox checked={statusNumber === key ? true : false} />}
          label={item.name}
          key={key}
          sx={{
            width: "100%",
          }}
          value={statusNumber === key ? true : false}
            onChange={(_, value) => {
              setStatusNumber(key)
            }}
        />
        ))}
      </div>
    </Paper>
  );
}
