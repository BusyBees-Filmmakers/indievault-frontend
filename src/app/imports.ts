// Import PrimeNG modules
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';

// Import Angular modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Firebase modules
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    CarouselModule,
    DialogModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    MenuModule,
    MenubarModule,
    ToastModule,
    CardModule,
    OverlayPanelModule,
    CommonModule,
    TabViewModule,
    TieredMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFirestoreModule 
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    CarouselModule,
    DialogModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    MenuModule,
    MenubarModule,
    ToastModule,
    CardModule,
    OverlayPanelModule,
    CommonModule,
    TabViewModule,
    TieredMenuModule,
  ],
  providers: [],
})
export class ImportsModule {}
