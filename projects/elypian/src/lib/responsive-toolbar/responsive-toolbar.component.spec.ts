/*
 * Copyright 2019-2020 Elypia CIC and Contributors (https://gitlab.com/Elypia/ng-elypian/-/graphs/master)
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

import {ResponsiveToolbarComponent} from './responsive-toolbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MobileToolbarMenuComponent} from './mobile-toolbar-menu.component';

describe('ToolbarComponent', () => {
  let component: ResponsiveToolbarComponent;
  let fixture: ComponentFixture<ResponsiveToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResponsiveToolbarComponent,
        MobileToolbarMenuComponent
      ],
      imports: [
        RouterTestingModule,
        RouterModule,
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatTreeModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
