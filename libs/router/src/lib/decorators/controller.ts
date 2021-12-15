import { injectable } from 'tsyringe';
import constructor from "../types/constructor";
import { getMetadataArgsStore } from '../decorators/metadata';

type ClassDecorator<T> = (target: constructor<T>) => void;

function controller<T>(prefix?: string): ClassDecorator<T> {
  return function(target: constructor<T>) {
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
