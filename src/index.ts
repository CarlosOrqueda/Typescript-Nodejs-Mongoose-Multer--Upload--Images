import app from './server';
import { connect } from './database';

(async () => {
    try {
        await connect();
        await app.listen(app.get('port'));
        console.log(`Server on port ${app.get('port')}`);
    } catch (e) {
        console.log(e);
    }
})();