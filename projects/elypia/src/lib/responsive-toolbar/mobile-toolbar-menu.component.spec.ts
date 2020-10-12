/*
 * Copyright 2019-2020 Elypia CIC and Contributors (https://gitlab.com/Elypia/ng-elypia/-/graphs/master)
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

import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MobileToolbarMenuComponent} from './mobile-toolbar-menu.component';
import {CommonModule} from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

describe('MobileToolbarMenuComponent', () => {
  let component: MobileToolbarMenuComponent;
  let fixture: ComponentFixture<MobileToolbarMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileToolbarMenuComponent ],
      imports: [
        CommonModule,
        MatTreeModule,
        RouterModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        FormsModule,
        MatToolbarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileToolbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
