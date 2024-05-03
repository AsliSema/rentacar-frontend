import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  //State
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: ButtonVariant = 'primary';
  @Input() outline = false;
  @Input() size: ButtonSize = 'md';
  @Input() px: number = 0;
  @Output() click = new EventEmitter<MouseEvent>();

  //Lifecycle

  //Main

  //Event
  onClick(event: MouseEvent){
    this.click.emit(event);
  }

  //Helpers
  get buttonClass(): string {
    let classes = `btn btn-${this.variant}`;
    if (this.outline) {
      classes = `btn btn-outline-${this.variant}`;
    }
    if (this.size === 'sm') {
      classes += ' btn-sm';
    } else if (this.size === 'lg') {
      classes += ' btn-lg';
    }
    if(this.px){
      classes += ` px-${this.px}`;
    }
    return classes;
  }


}

type ButtonVariant =
  'primary'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'danger'
  | 'info'
  |'light'
  | 'dark';


type ButtonSize = 'sm' | 'md' | 'lg';