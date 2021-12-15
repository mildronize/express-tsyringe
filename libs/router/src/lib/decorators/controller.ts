import constructor from "../types/constructor";
import { autoInjectable, injectable } from 'tsyringe';
// import {instance as globalContainer} from "../dependency-container";

function controller<T>(): (target: constructor<T>) => void {
  return function(target: constructor<T>): void {
    injectable()(target);
    // globalContainer.registerSingleton(target);
  };
}

export default controller;