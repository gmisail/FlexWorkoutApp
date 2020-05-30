import * as mongoose from "mongoose";
import Log from "../util/log.util";

export default class Database
{
    static database: string  = 'mongodb://FlexAdmin:pepperpop34@ds349455.mlab.com:49455/flexapp';

    static create()
    {
        mongoose.connect(Database.database, {
            useNewUrlParser: true
        });
        
        mongoose.connection.on('error', error => {
            Log.error("Cannot connect to database.");
        });
    }
}