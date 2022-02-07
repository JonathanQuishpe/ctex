import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.page.html',
  styleUrls: ['./calculation.page.scss'],
})
export class CalculationPage implements OnInit {

  fb: FormGroup;

  constructor(public formBuilder: FormBuilder,) {
    this.fb = this.formBuilder.group({
      title: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      type: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      result: new FormControl({ value: 0, disabled: true }),
    });
  }

  ngOnInit() {
  }

  save() {
    const { type, title } = this.fb.value;
    switch (type) {
      case 'tex':
        let tex = title / 1000;
        tex = Number(tex.toFixed(4));
        this.fb.controls['result'].setValue(tex);
        break;
      case 'ktex':
        let ktex = (1000 * title) / 1000;
        ktex = Number(ktex.toFixed(4));
        this.fb.controls['result'].setValue(ktex);
        break;
      case 'den':
        let den = title / 9000;
        den = Number(den.toFixed(4));
        this.fb.controls['result'].setValue(den);
        break;
      case 'ne':
        let ne = 0.59 / title;
        ne = Number(ne.toFixed(4));
        this.fb.controls['result'].setValue(ne);
        break;
      case 'nm':
        let nm = 1 / title;
        nm = Number(nm.toFixed(4));
        this.fb.controls['result'].setValue(nm);
        break;
    }

  }
}
