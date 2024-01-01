import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  constructor() { }

  @Input() minValue;
  @Input() maxValue;
  @Input() Offset;

  @Output() RangeMinValue;
  @Output() RangeMaxValue;


  ngOnInit() {
    this.minValue = 0;
    this.maxValue = 180;
    this.Offset = 20;

    this.RangeMinValue = 50;
    this.RangeMaxValue = 150;
  }


  minValueChange() {
    if (this.RangeMinValue + this.Offset >= this.maxValue) {
      this.RangeMinValue -= 1;
      return;
    }

    if (this.RangeMinValue + this.Offset > this.RangeMaxValue) {
      this.RangeMaxValue = this.RangeMinValue + this.Offset;
    }
  }

  maxValueChange() {
    if (this.RangeMaxValue - this.Offset <= this.minValue) {
      this.RangeMinValue += 1;
      return;
    }

    if (this.RangeMaxValue - this.Offset < this.RangeMinValue) {
      this.RangeMinValue = this.RangeMaxValue - this.Offset;
    }
  }

  
}
