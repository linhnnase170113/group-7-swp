import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'public/assets/images',
  filename: (req : any, file : any, cb : any) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
  },
});

const upload = multer({ storage }).single('image');

export default function handler(req : any, res : any) {
  upload(req, res, function (err : any) {
    if (err) {
      console.error('Lỗi khi tải lên ảnh:', err);
      return res.status(500).json({ error: 'Lỗi khi tải lên ảnh' });
    }

    // Lưu đường dẫn tệp tin vào biến imageUrl
    const imageUrl = `/assets/images/${req.file.filename}`;

    return res.status(200).json({ imageUrl });
  });
}
