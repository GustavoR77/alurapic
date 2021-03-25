import { CommonModule } from '@angular/common';
import { FilterByDescription } from './photos/filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
  ],
  imports: [
    CommonModule,
    PhotoModule,
  ]
})
export class PhotoListModule {

}
