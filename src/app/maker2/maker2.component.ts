import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataSourceService } from '../shared/data-source.service';

@Component({
  selector: 'app-maker2',
  templateUrl: './maker2.component.html',
  styleUrls: ['./maker2.component.css']
})
export class Maker2Component implements OnInit {
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
        'maker_id': 'm2_maker',
        'firstname2': user.firstname,
        'lastname2': user.lastname,
        'aadharnumber2': user.aadharnumber,
        'dateofbirth2': user.dateofbirth,
        'address2': user.state
      });
      console.log("after add");
    }
    catch (err) {
      alert("Server problem please try again");
    }
    this.childForm.reset();
  }
}
