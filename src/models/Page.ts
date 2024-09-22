import { SolidModel } from "soukai-solid";
import Model from "./Page.schema";

export default class Page extends SolidModel {
    static rdfContexts = {
        "uc": "https://unchain.farthergate.com/schema.ttl#",
    };

    static rdfsClasses = ["uc:Page"];
}
