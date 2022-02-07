import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {

  fb: FormGroup;
  result: Number = 0;

  constructor(public formBuilder: FormBuilder,) {
    this.fb = this.formBuilder.group({
      from: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      to: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      value: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  ngOnInit() {
  }

  convert() {
    const { from, to, value } = this.fb.value;

    if (from === 'tex' && to === 'den') {
      this.texToDen(value);
    }

    if (from === 'den' && to === 'tex') {
      this.denToTex(value);
    }

    if (from === 'ne' && to === 'tex') {
      this.neToTex(value);
    }

    if (from === 'tex' && to === 'ne') {
      this.texToNe(value);
    }

    if (from === 'ne' && to === 'den') {
      this.neToDen(value);
    }

    if (from === 'den' && to === 'ne') {
      this.denToNe(value);
    }

    if (from === 'nm' && to === 'tex') {
      this.nmToTex(value);
    }

    if (from === 'tex' && to === 'nm') {
      this.texToNm(value);
    }

    if (from === 'nm' && to === 'den') {
      this.nmToDen(value);
    }

    if (from === 'den' && to === 'nm') {
      this.denToNm(value);
    }

    if (from === 'nm' && to === 'ne') {
      this.nmToNe(value);
    }

    if (from === 'ne' && to === 'nm') {
      this.neToNm(value);
    }
  }

  texToDen(value) {
    this.result = 9 * value;
    this.result = Number(this.result.toFixed(4));
  }

  denToTex(value) {
    this.result = value / 9;
    this.result = Number(this.result.toFixed(4));
  }

  neToTex(value) {
    this.result = 590 / value;
    this.result = Number(this.result.toFixed(4));
  }

  texToNe(value) {
    this.result = 590 / value;
    this.result = Number(this.result.toFixed(4));
  }

  neToDen(value) {
    this.result = 5310 / value;
    this.result = Number(this.result.toFixed(4));
  }

  denToNe(value) {
    this.result = 5310 / value;
    this.result = Number(this.result.toFixed(4));
  }

  nmToTex(value) {
    this.result = 1000 / value;
    this.result = Number(this.result.toFixed(4));
  }

  texToNm(value) {
    this.result = 1000 / value;
    this.result = Number(this.result.toFixed(4));
  }

  nmToDen(value) {
    this.result = 9000 / value;
    this.result = Number(this.result.toFixed(4));
  }

  denToNm(value) {
    this.result = 9000 / value;
    this.result = Number(this.result.toFixed(4));
  }

  nmToNe(value) {
    this.result = value * 0.59;
    this.result = Number(this.result.toFixed(4));
  }

  neToNm(value) {
    this.result = value / 0.59;
    this.result = Number(this.result.toFixed(4));
  }

  onChange() {
    this.result = 0;
  }
}
