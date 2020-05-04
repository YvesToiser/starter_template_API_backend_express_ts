import {MongoClient, Db} from "mongodb";
import {DBName, mongoDBConnectionString} from "../constants/constants";

export class DbClient {
    private static instance: DbClient;
    private db: Db;

    private constructor() {}

    /**
     * Singleton of database connection.
     * Should be the access point for database
     */
    public static getDb = async () => {
        try {
            if (!DbClient.getInstance().db) {
                DbClient.getInstance().db = await DbClient.getInstance().connect();
                console.log("New DB Instance");
            }
            return DbClient.getInstance().db;
        } catch (error) {
            console.log("Unable to connect to db");
        }
    };

    /**
     * Private Methods
     */
    private static getInstance(): DbClient {
        if (!DbClient.instance) {
            DbClient.instance = new DbClient();
            console.log("New Client Instance");
        }

        return DbClient.instance;
    }

    private async connect() {
        const client: MongoClient = await MongoClient.connect(mongoDBConnectionString, {
            useUnifiedTopology: true,
        });
        this.db = client.db(DBName);
        console.log("Connected to db");
        return this.db;
    }
}
