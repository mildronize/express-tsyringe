import { getMetadataArgsStore } from './metadata';
import { AnyFunction } from '../types';
export function Use(
  // tslint:disable-next-line:array-type
  ...middlewares: Array<Function | ((request: any, response: any, next: Function) => any)>
): Function {
  return (objectOrFunction: Object | Function, methodName?: string) => {
    middlewares.forEach((middleware) => {
      getMetadataArgsStore().middlewares.push({
        target: methodName ? objectOrFunction.constructor as Function : (objectOrFunction as Function),
        methodName: methodName || '',
        middleware,
      });
    });
  };
}
