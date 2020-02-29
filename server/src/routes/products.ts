import * as express from 'express';
import ProductController from '../controller/ProductController';

const router = express.Router();

const controller = new ProductController();

router.get('/', (req, res) => {
  controller
    .fetchAll()
    .then(((products) => {
      res.send(products);
    }));
});

router.get('/:id', (req, res) => {
  controller
    .fetchOneById(req.params.id)
    .then((products) => res.send(products));
});

router.post('/', (req, res) => {
  controller
    .save(req.body)
    .then((products) => res.send(products))
    .catch((error) => res.status(error.status).send(error));
});

router.put('/:id', (req, res) => {
  controller
    .update(req.params.id, req.body)
    .then((products) => res.send(products));
});

export default router;
