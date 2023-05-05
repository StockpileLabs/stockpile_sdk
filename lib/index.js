"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.Project = exports.User = void 0;
var anchor = __importStar(require("@project-serum/anchor"));
var stockpile_1 = require("./idl/stockpile");
var constants_1 = require("./constants");
var user_1 = require("./user");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_1.User; } });
var project_1 = require("./project");
Object.defineProperty(exports, "Project", { enumerable: true, get: function () { return project_1.Project; } });
var SDK = /** @class */ (function () {
    function SDK(wallet, connection, opts, cluster) {
        //TODO
        this.user = new user_1.User(this);
        this.project = new project_1.Project(this);
        this.cluster = cluster;
        this.provider = new anchor.AnchorProvider(connection, wallet, opts);
        this.program = new anchor.Program(stockpile_1.IDL, constants_1.STOCKPILE_PROGRAMS[this.cluster], this.provider);
        this.rpcConnection = connection;
    }
    return SDK;
}());
exports.SDK = SDK;
