import { getMetadataArgsStore } from './metadata';
import { AnyFunction } from '../types';
export function Use(
  // tslint:disable-next-line:array-type
  ...middlewares: Array<AnyFunction | ((request: any, response: any, next: AnyFunction) => any)>
): AnyFunction {
  return (objectOrFunction: Object | AnyFunction, methodName?: string) => {
    middlewares.forEach((middleware) => {
      getMetadataArgsStore().middlewares.push({
        target: methodName ? objectOrFunction.constructor as AnyFunction : (objectOrFunction as AnyFunction),
        methodName: methodName || '',
        middleware,
      });
    });
  };
}
