import { Request, Response, NextFunction } from 'express';

abstract class ControllerBase {
  // abstract getName(): string;

  printName() {
    console.log("Hello, ");
  }

  ok(res: Response, data: any){
    res.status(200).json(data);
  }
}

export default ControllerBase;
