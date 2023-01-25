import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      street: new FormControl(null, Validators.required),
      street_2: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      postal_code: new FormControl(null, Validators.required),
      phone_num: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  onSubmit() {
    const controls = this.form.controls;
    if(this.form.invalid) {
      Object.keys(controls).forEach((controlName) => {
        controls[controlName].markAsTouched();
      })
      return;
    }
    console.log(this.form.value);
    this.form.reset();
  }
}
