import mongoose, {ConnectionOptions} from 'mongoose';

const dbOptions : ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

export async function connect () : Promise<void> {
    try {
        await mongoose.connect('mongodb://localhost/photo-gallery-db', dbOptions);
        console.log('DB is connected');
    } catch (e) {
        console.log(e);
    }
};