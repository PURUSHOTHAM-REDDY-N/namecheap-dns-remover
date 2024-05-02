"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const namecheap_ts_1 = __importDefault(require("namecheap-ts"));
//secret values
const config = {
    apiKey: "2834425e0afd4d07b5631ca48f4866d2",
    apiUser: "sunny123",
    username: "sunny123",
    clientIp: "157.48.219.115",
};
const api = new namecheap_ts_1.default(config, true); // keep it true if you are using sandbox
exports.default = api;
//# sourceMappingURL=namecheapConfig.js.map