import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = 'primary' | 'secundary';

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss',
})
export class BtnPrimaryComponent {
  @Input() text!: string;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant!: BtnVariants;
  @Output() onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
