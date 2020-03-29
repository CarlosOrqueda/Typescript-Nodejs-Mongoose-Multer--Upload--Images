import {Router} from 'express';
const router = Router();

import multer from '../libs/multer';
import { createPhoto, getPhotos, getPhoto, updatePhoto, deletePhoto} from '../controllers/photo.controller';

router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'), createPhoto)

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router;