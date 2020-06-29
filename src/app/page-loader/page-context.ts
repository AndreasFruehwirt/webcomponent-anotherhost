import {BehaviorSubject} from "rxjs";

export class PageContext {
  name:string;
  id:number;
  pageEventHandler: BehaviorSubject<any>;
  pageBodyEventHandler: BehaviorSubject<any>;

  constructor(name:string, id:number) {
    this.name = name;
    this.id = id;
    this.pageEventHandler = (window as any).pageEventHandler;
    this.pageBodyEventHandler = (window as any).pageBodyEventHandler;
  }

}
