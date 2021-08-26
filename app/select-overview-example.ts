import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata';

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css']
})
export class SelectOverviewExample  {
  something = ['a', 'b', 'c'];
  propertyName =['a', 'b', 'c'];


  change(event) {
    if (event.isUserInput) {
      console.log(event.source.value, event.source.selected);
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
