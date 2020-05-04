import {Request, Response} from "express";
import {itemCollectionName} from "../constants/constants";
import {Db, ObjectId} from "mongodb";
import {DbClient} from "../database/dbClient";

export class NodesController {
    public getAllItems = async (req: Request, res: Response) => {
        try {
            const db: Db = await DbClient.getDb();
            const results = await db.collection(itemCollectionName).find().toArray();
            console.log(results);
            res.json(results);
        } catch (error) {
            console.log("Unable to connect to db");
        }
    };

    public getItem = async (req: Request, res: Response) => {
        try {
            const db: Db = await DbClient.getDb();
            const results = await db
                .collection(itemCollectionName)
                .findOne({_id: new ObjectId(req.params._id)});
            console.log(req.params._id);
            res.json(results);
        } catch (error) {
            console.log("Unable to connect to db");
        }
    };

    public postItem = async (req: Request, res: Response) => {
        try {
            const db: Db = await DbClient.getDb();
            const results = await db.collection(itemCollectionName).insertOne(req.body);
            console.log(results.insertedId);
            res.json(req.body);
        } catch (error) {
            console.log("Unable to connect to db");
        }
    };

    public putItem = async (req: Request, res: Response) => {
        try {
            console.log(req.params._id);
            const db: Db = await DbClient.getDb();
            const results = await db
                .collection(itemCollectionName)
                .updateOne({_id: new ObjectId(req.params._id)}, [
                    {
                        $set: {
                            question: res.req.body.question,
                            goodAnswer: res.req.body.goodAnswer,
                            wrongAnswer1: res.req.body.wrongAnswer1,
                            wrongAnswer2: res.req.body.wrongAnswer2,
                            wrongAnswer3: res.req.body.wrongAnswer3,
                            category: res.req.body.category,
                        },
                    },
                ]);
            console.log(results);
            res.json(req.body);
        } catch (error) {
            console.log(req.params._id);
            console.log("Unable to connect to db");
        }
    };

    public deleteItem = async (req: Request, res: Response) => {
        try {
            console.log(req.params._id);
            const db: Db = await DbClient.getDb();
            const results = await db
                .collection(itemCollectionName)
                .findOneAndDelete({_id: new ObjectId(req.params._id)});
            console.log(results);
            res.json(req.body);
        } catch (error) {
            console.log(req.params._id);
            console.log("Unable to connect to db");
        }
    };
}
