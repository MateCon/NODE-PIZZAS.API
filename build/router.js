"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var router = function (app) {
    fs_1.default.readdir(path_1.default.join(__dirname, "controllers"), function (err, dir) {
        var controllers = dir.filter(function (file) { return /Controller/.test(file); });
        controllers.forEach(function (controller) {
            var route = require(path_1.default.join(__dirname, "controllers", controller)).default;
            app.use("/".concat(controller.split("Controller")[0]), route);
        });
    });
};
exports.default = router;
