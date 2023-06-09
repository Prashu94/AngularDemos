import { Directive } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;
@Directive({
  selector: '[appPeekABoo]'
})
export class PeekABooDirective {
  
  constructor(private logger: LoggerService) { }

  // implement OnInit's `ngOnInit` method
  ngOnInit(){
    this.logIt('OnInit');
  }

  logIt(msg: string){
    this.logger.log(`#${nextId++} ${msg}`)
  }
}
