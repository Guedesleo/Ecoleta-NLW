import express, { request, response } from 'express';
import {celebrate , Joi} from'celebrate';

import multer from 'multer';
import multerconfig from './config/multer';

import PointsControlller from './controllers/PointsController';
import ItemsControlller from './controllers/ItemsController';

const pointsControlller = new PointsControlller();
const itemsControlller = new ItemsControlller();

const routes = express.Router();
const upload = multer(multerconfig);
//index , show: Se for exibir um unico cliente , create , update , delete

routes.get('/items',itemsControlller.index);

routes.get('/points', pointsControlller.index);
routes.get('/points/:id', pointsControlller.show);

routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body:Joi.object().keys({
            name: Joi.string().required(),
            email:Joi.string().required(),
            whatsapp:Joi.number().required(),
            latitude: Joi.number().required,
            longitude: Joi.number().required,
            city:Joi.string().required(),
            uf:Joi.string().required().max(2),
            items:Joi.string().required(),
        }),
    },{
        abortEarly:false
    }),
    pointsControlller.create);



export default routes;