import { RequestMethod } from '../interfaces/metadata-args-store';
import { getMetadataArgsStore } from './metadata';
import { AnyFunction } from '../types';

export const httpGet = (path?: string): AnyFunction => httpMethodDecorator('get', path);
export const httpPost = (path?: string): AnyFunction => httpMethodDecorator('post', path);
export const httpPut = (path?: string): AnyFunction => httpMethodDecorator('put', path);
export const httpDelete = (path?: string): AnyFunction => httpMethodDecorator('delete', path);

export function httpMethodDecorator(requestMethod: RequestMethod, path?: string): AnyFunction {
  return (objectOrFunction: Object | AnyFunction, methodName?: string) => {
    getMetadataArgsStore().routes.push({
      target: methodName ? objectOrFunction.constructor : (objectOrFunction as AnyFunction),
      path: path ? path : '',
      methodName: methodName || '',
      requestMethod,
    });
  };
}
