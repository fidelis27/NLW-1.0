"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var itemsController_1 = __importDefault(require("./controllers/itemsController"));
var pointsController_1 = __importDefault(require("./controllers/pointsController"));
var multer_2 = __importDefault(require("./config/multer"));
var ValidadePoint_1 = __importDefault(require("./ValidadePoint"));
var routes = express_1.default.Router();
var upload = multer_1.default(multer_2.default);
routes.get('/items', itemsController_1.default.index);
routes.get('/items/:point_id', itemsController_1.default.show);
routes.get('/points/', pointsController_1.default.index);
routes.get('/points/:id', pointsController_1.default.show);
routes.post('/points', upload.single('image'), ValidadePoint_1.default, pointsController_1.default.create);
exports.default = routes;
