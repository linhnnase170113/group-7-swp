import { Button, Checkbox, IconButton, Link, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function ProductTable({ productList }: any) {
  const [searchType, setSearchType] = useState<any>()
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
    <TableContainer component={Paper}>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Products</Typography>
        <div style={{
          display: "flex",
        }}>
          <Select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            inputProps={{ "aria-label": "Without label" }}
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Name</MenuItem>
            <MenuItem value={20}>Category</MenuItem>
            <MenuItem value={30}>Description</MenuItem>
          </Select>
          <TextField label="Search" size="small" variant="filled" />
        </div>
        <div>
          <Button
            aria-label="delete"
            onClick={() => {
            }}
          >
            <Typography color="error">
              {selectProducts.length > 0 ? `${selectProducts.length} selected` : ""}
            </Typography>
            <DeleteIcon
              style={{
                width: 30,
                height: 30,
              }}
              color="error"
            />
          </Button>
        </div>
      </Toolbar>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Image</TableCell>
            <TableCell align="right">Edit</TableCell>
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
                        setSelectProducts([...selectProducts.productId]);
                      } else {
                        setSelectProducts(
                          selectProducts.filter((productId: any) => !row.productId.includes(productId))
                        );
                      }
                    }}
                  />
                </TableCell>
                <TableCell align="justify">{row.productName}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell align="justify">{row.description}</TableCell>
                <TableCell align="justify">{row.status}</TableCell>
                <TableCell>
                  <Link href={"../" + row.image} target="_blank">
                    Click
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="update"
                    onClick={() => {
                    }}
                  >
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
  )
}
