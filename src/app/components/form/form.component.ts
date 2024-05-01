import { Component, Input, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NewsLarerService } from '../../services/news-larer.service';
import { INewsLarer } from '../../interfaces/INewsLarer';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsLarerService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formGroup!: FormGroup; //Cria uma propriedade do tipo FormGroup
  loading = signal(false); //Funciona como o useState do react
  message!: INewsLarer;
  @Input() isVisible: boolean = false;

  constructor(private newsLarerService: NewsLarerService) {
    //Inicia o form group
    this.formGroup = new FormGroup({
      //Campos a serem validados
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    this.loading.set(true);
    if (this.formGroup.valid) {
      this.newsLarerService
        .sendData(this.formGroup.value.name, this.formGroup.value.email)
        .subscribe({
          next: (res) => {
            this.message = res;
            this.formGroup.reset(); //Limpa o form quando for concluido
            this.loading.set(false);
          },
          error: (err) => console.error(err),
        });
    }
  }
}
