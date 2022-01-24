import { API as BaseAPI, mix, load, conf } from "yonius";
import { AccountAPI } from "./account";
import { RoleAPI } from "./role";
import { SecretAPI } from "./secret";
import { TokenAPI } from "./token";

const RIPE_CONFIG_BASE_URL = "https://config.platforme.com/";

export class API extends mix(BaseAPI).with(AccountAPI, RoleAPI, SecretAPI, TokenAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("RIPE_CONFIG_BASE_URL", RIPE_CONFIG_BASE_URL);
        this.username = conf("RIPE_CONFIG_USERNAME", null);
        this.password = conf("RIPE_CONFIG_PASSWORD", null);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.username = kwargs.username === undefined ? this.username : kwargs.username;
        this.password = kwargs.password === undefined ? this.password : kwargs.password;

        if (this.username && this.password) {
            this.baseUrlAuth = this.baseUrl.replace("https://", `https://${username}:${password}`);
        } else {
            this.baseUrlAuth = this.baseUrl;
        }
    }

    static async load() {
        await load();
    }

    async getResource(path) {
        const url = this.baseUrlAuth + resource;
        const contents = await this.get(url);
        return contents;
    }
}

export default API;
