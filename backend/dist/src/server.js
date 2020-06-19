"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = require("path");
var cors_1 = __importDefault(require("cors"));
var celebrate_1 = require("celebrate");
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/uploads', express_1.default.static(path_1.resolve(__dirname, '..', 'uploads')));
app.use('/temp', express_1.default.static(path_1.resolve(__dirname, '..', 'temp')));
app.use(celebrate_1.errors());
app.listen(3333);
