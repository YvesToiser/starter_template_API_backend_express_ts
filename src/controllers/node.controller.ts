import {Request, Response} from "express";

export class NodesController {
    public index(req: Request, res: Response) {
        res.json({
            message: "Hello boiz",
        });
    }
    public getQuestions(req: Request, res: Response) {
        res.json({
            message: "Get Questions",
        });
    }
    public getQuestion(req: Request, res: Response) {
        res.json({
            message: "Get Question with id : " + req.params.id,
        });
    }
    public postQuestion(req: Request, res: Response) {
        res.json({
            message: "Post Question",
        });
    }
    public putQuestion(req: Request, res: Response) {
        res.json({
            message: "Update Question with id : " + req.params.id,
        });
    }
    public deleteQuestion(req: Request, res: Response) {
        res.json({
            message: "Delete Question with id : " + req.params.id,
        });
    }
}
