import { Injectable, ComponentFactoryResolver } from '@angular/core';

@Injectable()
export class PortalService {
  private component;
  constructor(
    private resolver: ComponentFactoryResolver,
  ) { }

  public set Component(component) {
    this.component = component;
  }

  public get Component() {
    return this.component;
  }
}
