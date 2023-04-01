import { Directive, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy{
  private id = nextId++;

  constructor(private logger: LoggerService) { }
  
  ngOnInit(): void {
    console.log('-- Inside OnInit --');
    this.logger.log(`Spy #${this.id} onInit`);
  }

  ngOnDestroy(): void {
    console.log('-- Inside OnDestroy --');
    this.logger.log(`Spy #${this.id} onDestroy`);
  }

}
