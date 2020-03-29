import { model, Schema, Document } from 'mongoose';

interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string;
}

const photoSchema = new Schema({
    title: {type: String},
    description: {type: String},
    imagePath: String
});

export default model<IPhoto>('Photo', photoSchema);