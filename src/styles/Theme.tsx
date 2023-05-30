import { createTheme } from '@mui/material/styles';

// Import các màu bạn muốn sử dụng

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0 0 0)', // Mã màu chủ đạo mới
    },
  },
  typography: {
    fontFamily: 'Roboto',
    // Các tùy chỉnh kiểu chữ khác
  },
});

export default theme;
