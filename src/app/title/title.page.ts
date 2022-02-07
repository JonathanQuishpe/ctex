import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-title',
  templateUrl: './title.page.html',
  styleUrls: ['./title.page.scss'],
})
export class TitlePage implements OnInit {

  fb: FormGroup;
  tex: Number;
  dtex: Number;
  den: Number;
  ne: any;
  nm: any;
  calculation: boolean = false;

  constructor(public formBuilder: FormBuilder,) {
    this.fb = this.formBuilder.group({
      weight: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      unit_weight: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      length: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      unit_length: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.calculation = false;
  }

  save() {
    const { weight, unit_weight, length, unit_length } = this.fb.value;
    const w = this.toGrams(weight, unit_weight);
    const l = this.toMeters(length, unit_length);

    this.tex = 1000 * (w / l);
    this.tex = Number(this.tex.toFixed(4));

    this.dtex = 100 * (w / l);
    this.dtex = Number(this.dtex.toFixed(4));

    this.den = 9000 * (w / l);
    this.den = Number(this.den.toFixed(4));


    this.ne = 0.59 * (l / w);
    this.ne = this.ne.toFixed(4);
    this.ne = Math.round(this.ne);

    this.nm = 1 * (l / w);
    this.nm = this.nm.toFixed(4);
    this.nm = Math.round(this.nm);

    this.calculation = true;
  }

  toGrams(weight: number, unit_weight: string) {
    let w = weight;
    switch (unit_weight) {
      case 'lb':
        w = weight * 453.592;
        break;
      case 'kg':
        w = weight * 1000;
        break;
    }

    return w;
  }

  toMeters(length: number, unit_length: string) {
    let l = length;
    switch (unit_length) {
      case 'cm':
        l = length / 100;
        break;
      case 'in':
        l = length / 39.3701;
        break;
      case 'yd':
        l = length / 1.094;
        break;
      case 'km':
        l = length * 1000;
        break;
    }

    return l;
  }
}
