import {NodesController} from "../controllers/node.controller";

export class Routes {
    public nodesController: NodesController = new NodesController();

    public routes(app: any): void {
        app.route("/API/items").get(this.nodesController.getAllItems);
        app.route("/API/item/:_id").get(this.nodesController.getItem);
        app.route("/API/item").post(this.nodesController.postItem);
        app.route("/API/item/:_id").put(this.nodesController.putItem);
        app.route("/API/item/:_id").delete(this.nodesController.deleteItem);
    }
}
