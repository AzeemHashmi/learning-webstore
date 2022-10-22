import React from "react";
import Product from "./Product";

import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
const ProductsObj = [
  {
    imgUrl: "https://m.media-amazon.com/images/I/61N2i6tZ-YS._AC_UX522_.jpg",
    title: "Venustas Men's Heated Jacket",
    description: "Venustas Men's Heated Jacket with Battery pack 7.4V, Windproof Electric Insulated Coat with Detachable Hood",
    price: '$79.99'
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/71gluQqwAYL._AC_UL320_.jpg",
    title: "Columbia Men's Ascender Softshell Front-Zip Jacket",
    description: "Columbia Men's Ascender Softshell Front-Zip Jacket",
    price: '$109.99'
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/71gluQqwAYL._AC_UL320_.jpg",
    title: "Columbia Men's Ascender Softshell Front-Zip Jacket",
    description: "Columbia Men's Ascender Softshell Front-Zip Jacket",
    price: '$109.99'
  },
  {
    imgUrl: "https://m.media-amazon.com/images/I/71gluQqwAYL._AC_UL320_.jpg",
    title: "Columbia Men's Ascender Softshell Front-Zip Jacket",
    description: "Columbia Men's Ascender Softshell Front-Zip Jacket",
    price: '$109.99'
  },
];

const Products = () => {
  return ProductsObj?.length > 0 ? (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {ProductsObj?.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Product detail={item} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <div style={{width: '100%', textAlign: 'center'}}>
      <CircularProgress />
    </div>
  );
};

export default Products;
