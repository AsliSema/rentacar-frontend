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
  @Output() click = new EventEmitter<MouseEvent>();

  //Lifecycle

  //Main

  //Event
  onClick(event: MouseEvent){
    this.click.emit(event);
  }

  //Helpers
  get buttonClass(): string {
    return `btn btn-${this.variant}`;
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
