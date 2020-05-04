import {NodesController} from "../controllers/node.controller";

export class Routes {
    public nodesController: NodesController = new NodesController();

    public routes(app: any): void {
        app.route("/").get(this.nodesController.index);
        app.route("/API/questions").get(this.nodesController.getQuestions);
        app.route("/API/question/:id").get(this.nodesController.getQuestion);
        app.route("/API/question").post(this.nodesController.postQuestion);
        app.route("/API/question/:id").put(this.nodesController.putQuestion);
        app.route("/API/question/:id").delete(this.nodesController.deleteQuestion);
    }
}
