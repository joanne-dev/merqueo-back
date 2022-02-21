import { Request, Response } from 'express';

class IndexController {
  public Health(rq: Request, rs: Response) {
    rs.status(200);
    rs.end('Hola mundo este controller quedo al pelo');
  }
}

const indexController = new IndexController();
export default indexController;
