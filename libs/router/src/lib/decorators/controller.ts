import { injectable } from 'tsyringe';
import { Constructor } from "../types";
import { getMetadataArgsStore } from '../decorators/metadata';

type ClassDecorator<T> = (target: Constructor<T>) => void;

function controller<T>(prefix?: string): ClassDecorator<T> {
  return function (target: Constructor<T>) {
    /**
     * Add marker @injectable to @controller decorator, for resolving dependencies
     */

    injectable()(target);
    /**
     * Store meta of the @controller decorator, for using in generate Express route in `useExpressServer`
     */

    getMetadataArgsStore().routes.push({
      target,
      path: prefix ? prefix : '',
      methodName: '',
    });
  };
};

export default controller;
