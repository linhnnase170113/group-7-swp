import {
  Button,
  CardMedia,
  Checkbox,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddBoxIcon from '@mui/icons-material/AddBox';
import UploadImage from "@/component/UploadImage";
export default function ProductTable({ productList, categoryList }: any) {
  const [searchType, setSearchType] = useState<any>(0);
  const [selectProducts, setSelectProducts] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer component={Paper} sx={{
      "& .MuiContainer-root" : {
        maxWidth: "5rem"
      }
    }}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Products</Typography>
        <div
          style={{
            display: "flex",
          }}
        >
          <TextField size="small" variant="filled" />
          <Select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            inputProps={{ "aria-label": "Without label" }}
            size="small"
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Name</MenuItem>
            <MenuItem value={2}>Category</MenuItem>
            <MenuItem value={3}>Description</MenuItem>
          </Select>
        </div>
        <div>
          <Button aria-label="delete" onClick={() => {}}>
            <Typography color="error">
              {selectProducts.length > 0
                ? `${selectProducts.length} selected`
                : ""}
            </Typography>
            <DeleteIcon
              style={{
                width: 30,
                height: 30,
              }}
              color="error"
            />
          </Button>
          {/* <Button aria-label="add" onClick={() => {}}>
            <AddBoxIcon
              style={{
                width: 30,
                height: 30,
              }}
              color="success"
            />
          </Button> */}
          <UploadImage/>
        </div>
      </Toolbar>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{ width: '150px', fontWeight: "700" }}>Name</TableCell>
            <TableCell sx={{ width: '70px', fontWeight: "700"}}>Price</TableCell>
            <TableCell sx={{ width: '50px', fontWeight: "700" }}>Quantity</TableCell>
            <TableCell sx={{ width: '100px', fontWeight: "700" }}>Category</TableCell>
            <TableCell sx={{ width: '600px', fontWeight: "700" }}>Description</TableCell>
            <TableCell sx={{ width: '100px', fontWeight: "700" }}>Status</TableCell>
            <TableCell sx={{ width: '100px', fontWeight: "700" }}>Image</TableCell>
            <TableCell align="right" sx={{ width: '50px', fontWeight: "700" }}>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productList
            .slice(0 + page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((row: any) => (
              <TableRow key={row.productId}>
                <TableCell>
                  <Checkbox
                    color="error"
                    onChange={(e) => {
                      if (e.currentTarget.checked === true) {
                        setSelectProducts([...selectProducts, row.productId]);
                      } else {
                        setSelectProducts(
                          selectProducts.filter(
                            (productId: any) => !(row.productId === productId)
                          )
                        );
                      }
                    }}
                  />
                </TableCell>
                <TableCell>{row.productName}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{categoryList.find((category : any) => category.categoryId === row.categoryId).categoryName}</TableCell>
                <TableCell align="justify">{row.description}</TableCell>
                <TableCell align="justify">{row.status}</TableCell>
                <TableCell>
                  {/* <Link href={"../assets/images/" + row.image} target="_blank">
                    Click
                  </Link> */}
                  <CardMedia
                    component="img"
                    sx={{
                      width: "5rem",
                      height: "5rem",
                    }}
                    src={"../assets/images/" + row.image}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton aria-label="update" onClick={() => {}}>
                    <EditIcon
                      style={{
                        width: 30,
                        height: 30,
                      }}
                      color="success"
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={productList.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </TableContainer>
  );
}
