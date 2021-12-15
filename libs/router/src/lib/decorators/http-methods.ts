import { RequestMethod } from '../interfaces/metadata-args-store';
import { getMetadataArgsStore } from './metadata';

export const httpGet = (path?: string): Function => httpMethodDecorator('get', path);
export const httpPost = (path?: string): Function => httpMethodDecorator('post', path);
export const httpPut = (path?: string): Function => httpMethodDecorator('put', path);
export const httpDelete = (path?: string): Function => httpMethodDecorator('delete', path);

export function httpMethodDecorator(requestMethod: RequestMethod, path?: string): Function {
  return (objectOrFunction: Object | Function, methodName?: string) => {
    getMetadataArgsStore().routes.push({
      target: methodName ? objectOrFunction.constructor : (objectOrFunction as Function),
      path: path ? path : '',
      methodName: methodName || '',
      requestMethod,
    });
  };
}
