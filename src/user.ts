import { SDK } from "./index";
import * as anchor from "@project-serum/anchor"

export class User {
    private readonly sdk: SDK;

    constructor(sdk: SDK) {
        this.sdk = sdk;
    }
}