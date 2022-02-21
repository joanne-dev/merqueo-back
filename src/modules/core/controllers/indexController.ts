import { Request, Response } from 'express';

class IndexController {
  public Health(rq: Request, rs: Response) {
    rs.status(200);
    rs.end('Ok');
  }
}

const indexController = new IndexController();
export default indexController;
