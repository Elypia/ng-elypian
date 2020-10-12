import {Component} from '@angular/core';

export interface ColorData {
  name: string;
  hex: string;
}

@Component({
  selector: 'app-scroll-panel-example',
  templateUrl: './scroll-panel-example.component.html',
  styleUrls: ['./scroll-panel-example.component.css']
})
export class ScrollPanelExampleComponent {

  public readonly colors: ColorData[] = [
    { name: 'Absolute Zero', hex: '0048BA' },
    { name: 'Aero', hex: '7CB9E8' },
    { name: 'Air superiority blue', hex: '72A0C1' },
    { name: 'Alice blue', hex: 'F0F8FF' },
    { name: 'Aqua', hex: '00FFFF' },
    { name: 'Aquamarine', hex: '7FFFD4' },
    { name: 'Azure', hex: '007FFF' },
    { name: 'Azure (X11/web color)', hex: 'F0FFFF' },
    { name: "B'dazzled blue", hex: '2E5894' },
    { name: 'Baby blue', hex: '89CFF0' },
    { name: 'Baby blue eyes', hex: 'A1CAF1' },
    { name: 'Beau blue', hex: 'BCD4E6' },
    { name: 'Bleu de France', hex: '318CE7' },
    { name: 'Blizzard blue', hex: 'ACE5EE' },
    { name: 'Blue', hex: '0000FF' },
    { name: 'Blue (Crayola)', hex: '1F75FE' },
    { name: 'Blue (Munsell)', hex: '0093AF' },
    { name: 'Blue (NCS)', hex: '0087BD' },
    { name: 'Blue (Pantone)', hex: '0018A8' },
    { name: 'Blue (pigment)', hex: '333399' },
    { name: 'Blue bell', hex: 'A2A2D0' },
    { name: 'Blue-gray', hex: '6699CC' }
  ];
}
