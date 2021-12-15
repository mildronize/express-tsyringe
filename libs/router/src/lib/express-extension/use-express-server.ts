import express, { Request, Response, NextFunction } from 'express';
import { getMetadataArgsStore } from '../decorators/metadata';
import { RouteMetadataArgs } from '../interfaces/metadata-args-store';
import { MiddlewareMetadataArgs, RequestMethod } from '../interfaces';
import { combineMiddlewares } from '../utils';
import { CombineRoute, combineRouteWithMiddleware } from './combine-route-with-middleware';
import { Type } from '../interfaces/type.interface';
import { container } from 'tsyringe';

/**
 * `ExpressAppOption` is for setting up the **Root ModuleMetadata**,
 * These controllers , providers will be injected in the Express app,
 */

// tslint:disable-next-line:no-empty-interface
export interface ExpressAppOption {
  controllers?: Type<any>[];
}

export async function useExpressServer(app: express.Application, option?: ExpressAppOption) {
  const store = getMetadataArgsStore();
  const controllers = option?.controllers || [];

  controllers.forEach(async (controller) => {
    /**
     * Resolving the dependencies of controllers and services
     * Then, get controller instance
     */

    const controllerInstance =  container.resolve(controller) as typeof controller;

    const combinedRoutes = combineRouteWithMiddleware(controller, store.routes, store.middlewares);
    addRouterToExpress(app, combinedRoutes, controllerInstance);
  });
}

function addRouterToExpress(app: express.Application, combinedRoutes: CombineRoute[], controllerInstance: any) {
  const prefix = getPrefix(combinedRoutes);
  combinedRoutes.forEach((route: any) => {
    if (!route.isClass) {
      const requestMethod: RequestMethod = route.requestMethod;
      const routePath = combineRouterPath(prefix, route.path);

      if (route.middlewares.length > 0) {
        // Combine multiple middlewares
        const middleware = combineMiddlewares(...route.middlewares);
        app[requestMethod](routePath, middleware, callInstance(controllerInstance, route));
      } else {
        app[requestMethod](routePath, callInstance(controllerInstance, route));
      }
    }
  });
}

export const combineRouterPath = (prefix: string, path: string) => {
  let result = '';
  if (prefix !== '') {
    if (prefix.charAt(0) === '/') prefix = prefix.substring(1);
    result += prefix;
  }
  result += '/';
  if (path !== '') {
    if (path.charAt(0) === '/') path = path.substring(1);
    result += path;
  }
  if (result.charAt(0) !== '/') return '/' + result;
  return result;
};

const callInstance = (instance: any, route: RouteMetadataArgs) =>
  asyncHelper(async (req: Request, res: Response, next: NextFunction) => {
    await instance[route.methodName](req, res, next);
  });

export const getPrefix = (routes: any[]) => {
  for (const i in routes) if (routes[i].isClass) return routes[i].path;
  return '';
};

export const asyncHelper = (fn: any) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch(next);
};
