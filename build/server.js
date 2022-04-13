"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./router"));
var app = (0, express_1.default)();
var port = 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, router_1.default)(app);
app.get("*", function (_, res) {
    res.status(404).send("404 error - page not found");
});
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
