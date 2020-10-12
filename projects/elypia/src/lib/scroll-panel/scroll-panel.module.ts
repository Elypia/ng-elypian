/*
 * Copyright 2020-2020 Seth Falco
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {ScrollPanelComponent} from './scroll-panel.component';
import {ScrollPanelItemDirective} from './scroll-panel-item.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ScrollPanelComponent,
    ScrollPanelItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollPanelComponent,
    ScrollPanelItemDirective
  ]
})
export class ElyScrollPanelModule { }
