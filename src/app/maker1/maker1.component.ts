import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataSourceService } from '../shared/data-source.service';

@Component({
  selector: 'app-maker1',
  templateUrl: './maker1.component.html',
  styleUrls: ['./maker1.component.css']
})
export class Maker1Component implements OnInit {
  @ViewChild('f') childForm!: NgForm;
  constructor(private dataSourceService: DataSourceService) { }

  ngOnInit(): void {
  }
  async onSubmit(form: NgForm) {
    console.log(form.value);
    let user = form.value;
    try {
      console.log("calling add...");
      await this.dataSourceService.addUser({
        'customerId': user.customerId,
        'maker_id': 'm1_maker',
        'firstname1': user.firstname,
        'lastname1': user.lastname,
        'aadharnumber1': user.aadharnumber,
        'dateofbirth1': user.dateofbirth,
        'address1': user.state
      });
      console.log("after add");
    }
    catch (err) {
      alert("Server problem please try again");
    }
    this.childForm.reset();
  }
}
