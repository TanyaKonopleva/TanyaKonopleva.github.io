import { GifsApi } from './api.js';
import { GifsModel } from './model.js';
import { GifsView } from './view.js';
import { GifsController } from './controller.js';

const apiService = new GifsApi();
const model = new GifsModel(apiService);
const view = new GifsView();
const controller = new GifsController(model, view);

controller.init();
