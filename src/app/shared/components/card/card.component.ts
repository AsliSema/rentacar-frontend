import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() buttonLabel?: string;
@Input() imageSrc?: string;
@Input() imageAlt?: string;
@Input() title!: string;
@Input() text!: string;
@Output() buttonClick = new EventEmitter();

}
