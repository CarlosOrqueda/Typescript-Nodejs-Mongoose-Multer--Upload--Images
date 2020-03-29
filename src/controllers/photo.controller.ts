import { Request, Response } from 'express';
import Photo, {} from '../models/Photo';
import path from 'path';
import fs from 'fs-extra';

export async function getPhotos (req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find().lean();
    return res.json(photos);
};

export async function getPhoto (req: Request, res: Response) : Promise<Response>{
    const photo = await Photo.findById(req.params.id).lean();
    return res.json(photo);
}

export async function createPhoto(req: Request, res: Response): Promise<Response> {

    const { title, description } = req.body;
    const newPhoto = {title, description, imagePath: req.file.path};
    const photo = new Photo(newPhoto);
    await photo.save();

    return res.json({
        message: "Photo successfuly saved",
        photo
    })
};

export async function updatePhoto(req: Request, res: Response) : Promise<Response> {
    const { id } = req.params;
    const { title, description } = req.body;
    console.log(req.body)
    const photo = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, {new: true}).lean();
    return res.json({message: 'Successfully updated', photo});
};

export async function deletePhoto (req: Request, res: Response) : Promise<Response> {
    const photo = await Photo.findByIdAndDelete(req.params.id).lean();
    if (photo) {
        const exist = await fs.pathExists(path.resolve(photo.imagePath));
        if (exist)
            await fs.unlink(path.resolve(photo.imagePath));
    } else 
        return res.json({message: 'Photo not found'});
    return res.json({message: 'Photo Deleted', photo});
};