import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import { createProductApi } from "@/pages/api/ProductApi";
import { useAppDispatch } from "@/feature/Hooks";
import { setOpen } from "@/feature/Alert";
export default function ProductUploadForm({ categoryList }: any) {
  const [image, setImage] = useState<any>(null);
  const [createObjectURL, setCreateObjectURL] = useState<any>(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [categorySelected, setcategorySelected] = useState<any>(0);
  const { register, handleSubmit } = useForm()
  const dispatch = useAppDispatch()

  const onSubmit = (data : any) => {
    const createProduct = async () => {
      // const responseImg = await uploadToServer()
      // const response = await createProductApi(data.productName, categorySelected, data.quantity, data.description, image.name, data.price)
      // if (responseImg && response) {
      //   dispatch(setOpen({
      //     open: true,
      //     message: "Adding success",
      //     severity: "success",
      //   }))
      // }
      console.log(image)
    }
    createProduct()

  }

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async () => {
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
    return true
  };

  return (
    <>
      <Dialog
        open={openPopup}
        onClose={() => {
          setOpenPopup(false);
        }}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            textAlign: "center",
          }}
        >
          Thêm sản phẩm
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <div
            style={{
              paddingTop: "1rem",
            }}
          >
            <Grid container spacing={0}>
              <Grid
                item
                xs={12}
                sx={{
                  marginBottom: "1rem",
                }}
              >
                <label htmlFor="name">* Tên sản phẩm</label>
                <TextField fullWidth id="name" color="secondary" {...register("productName", {
                  required: true
                })} />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  marginBottom: "2rem",
                }}
              >
                <label htmlFor="số lượng">* Số lượng</label>
                <TextField
                  fullWidth
                  type="number"
                  color="secondary"
                  size="small"
                  id="số lượng"
                  {...register("quantity", {
                    required: true
                  })}
                />
              </Grid>
              <Grid xs={2} item></Grid>
              <Grid xs={6} item>
                <label htmlFor="category">* Loại sản phẩm</label>
                <Select
                  color="secondary"
                  value={categorySelected}
                  onChange={(e) => setcategorySelected(e.target.value)}
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                  fullWidth
                  id="category"
                >
                  <MenuItem value={0}>
                    <em>Select category</em>
                  </MenuItem>
                  {categoryList.map((category: any) => (
                    <MenuItem value={category.categoryId} key={category.categoryId}>
                      {category.categoryName}
                    </MenuItem>
                    // <MenuItem value={2}>Name</MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  marginBottom: "2rem",
                }}
              >
                <label htmlFor="giá">* Giá sản phẩm</label>
                <TextField
                  fullWidth
                  type="number"
                  color="secondary"
                  size="small"
                  id="giá"
                  {...register("price", {
                    required: true
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="des">* Mô tả sản phẩm</label>
                <TextField
                  color="secondary"
                  fullWidth
                  multiline
                  minRows={4}
                  id="des"
                  {...register("description", {
                    required: true
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  id="inputField"
                  name="myImage"
                  style={{
                    display: "none",
                  }}
                  onChange={uploadToClient}
                />
                <label htmlFor="inputField">
                  <Button
                    color="secondary"
                    variant="contained"
                    component="span"
                    fullWidth
                  >
                    Upload Image
                  </Button>
                </label>
              </Grid>
              <Grid item xs={9}></Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  fullWidth
                  sx={{ marginTop: "2rem" }}
                >
                  Submit
                  <SendIcon
                    sx={{
                      marginLeft: "0.5rem",
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        </form>
      </Dialog>

      <Button
        aria-label="add"
        onClick={() => {
          setOpenPopup(true);
        }}
      >
        <AddBoxIcon
          style={{
            width: 30,
            height: 30,
          }}
          color="success"
        />
      </Button>
    </>
  );
}
