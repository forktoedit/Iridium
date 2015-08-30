/// <reference path="../_references.d.ts" />
import {Core} from './Core';
import {Model} from './Model';

export interface Plugin {
    newModel? (model: Model<any, any>);
    newInstance? (instance: any, model: Model<any, any>);
    validate?: Skmatc.Validator | Skmatc.Validator[];
}