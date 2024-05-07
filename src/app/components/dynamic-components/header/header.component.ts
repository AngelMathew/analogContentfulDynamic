import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ComponentData, DynamicComponent } from '../../../types/render-template.types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements DynamicComponent {
  title?: string;


  componentDataResolver(data: ComponentData) {
    return {
      title: data['title'],
    };
  }
}
