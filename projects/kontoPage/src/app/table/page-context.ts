import {BehaviorSubject} from "rxjs";

export class PageContext {
  name: string;
  id: number;
  pageEventHandler: BehaviorSubject<any>;
}
