import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DynamicGrid } from '../model/grid.model';

@Component({
  selector: 'app-resulting',
  templateUrl: './resulting.page.html',
  styleUrls: ['./resulting.page.scss'],
})
export class ResultingPage implements OnInit {

  fb: FormGroup;

  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  options: Array<any> = [];
  system: string;
  result: any = 0;

  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.fb = this.formBuilder.group({
      system: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  ngOnInit() {
  }

  save() {
    if (!this.system || !this.dynamicArray.length) {
      return;
    }

    let sum = 0;
    if (this.system == 'd') {
      for (let index = 0; index < this.dynamicArray.length; index++) {
        const element = this.dynamicArray[index];
        if (element.value <= 0) {
          continue;
        }

        if (element.type === 'dtex') {
          const parse = element.value / 10;
          sum += parse;
          continue;
        }

        if (element.type === 'den') {
          const parse = element.value / 9;
          sum += parse
          continue;
        }

        sum += element.value;
      }

      this.result = Number(sum.toFixed(4));
    }

    if (this.system == 'i') {
      for (let index = 0; index < this.dynamicArray.length; index++) {
        const element = this.dynamicArray[index];
        if (element.value <= 0) {
          continue;
        }

        if (element.type === 'nm') {
          let parse = element.value * 0.59;
          parse = 1 / parse;
          sum += parse;
          continue;
        }

        let parse = 1 / element.value;
        sum += parse;
      }
      sum = 1 / sum;
      sum = Math.round(sum);

      this.result = `1/${sum}`;
    }
  }

  updateOptions($event) {
    this.dynamicArray = [];

    const value = $event.target.value;
    this.options = [];
    if (value === 'd') {
      this.options.push(
        {
          value: 'tex',
          label: 'Tex',
        },
        {
          value: 'dtex',
          label: 'Dtex',
        },
        {
          value: 'den',
          label: 'Den',
        },
      );
    }
    if (value === 'i') {
      this.options.push(
        {
          value: 'ne',
          label: 'Ne',
        },
        {
          value: 'nm',
          label: 'Nm',
        },
      );
    }
  }

  addRow() {
    this.result = 0;
    this.newDynamic = { value: 0, type: "" };
    this.dynamicArray.push(this.newDynamic);
    return true;
  }

  deleteRow(index) {
    this.result = 0;
    if (this.dynamicArray.length == 1) {
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      return true;
    }
  }
}
