import { Service } from "@aerogel/core";
import { facade } from "@noeldemartin/utils";

export class PagesService extends Service {
    protected async boot() {
        const containerName = "unchain";
    }
}

export default facade(PagesService);
