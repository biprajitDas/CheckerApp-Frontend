import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataSourceService } from 'src/app/shared/data-source.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activateRouter: ActivatedRoute, private dataSourceService: DataSourceService,
    private router: Router) { }
  id!: number;
  customer: any;
  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.customer = this.dataSourceService.getCustomerById(this.id);
        console.log("customer:", this.customer.firstname);
      }
    )
  }
  async onSuccess(customer_id: any) {
    const data = {
      "success": true,
    };
    console.log(customer_id);
    await this.dataSourceService.completeCheckerTask(data, customer_id);

    setTimeout(() => {
      this.router.navigate(['/checker']);
    }
      , 3000);
  }
  async onFail(customer_id: any) {
    console.log(customer_id);
    const data = {
      "success": false,
    };
    console.log(customer_id);

    await this.dataSourceService.completeCheckerTask(data, customer_id);
    setTimeout(() => {
      this.router.navigate(['/checker']);
    }
      , 3000);


  }
  onBack() {
    this.router.navigate(['/checker']);
  }

}
