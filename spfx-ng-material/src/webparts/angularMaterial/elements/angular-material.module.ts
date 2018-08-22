import { AngularMaterial } from './angular-material';
import { NgModule, Injector } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { NgElementConfig, createCustomElement } from '@angular/elements';

/**
 * Module that intializes our Angular Element
 * Includes Angular Material so uses Zone.js
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatToolbarModule
  ],
  declarations: [AngularMaterial],
  entryComponents: [AngularMaterial]
})
export class AngularMaterialModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap(){
    const config: NgElementConfig = { injector: this.injector };
    const ngElement =  createCustomElement(AngularMaterial, config);

    if(!customElements.get("angular-material")) {
      customElements.define("angular-material", ngElement);
    }
  }
}
