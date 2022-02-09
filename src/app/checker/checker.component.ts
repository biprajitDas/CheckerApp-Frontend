import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSourceService } from '../shared/data-source.service';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {
  customers: any[] = [];

  page: number = 1;
  totalItems!: number;

  constructor(private dataSourceService: DataSourceService) { }

  async ngOnInit() {
    await this.dataSourceService.getCheckerTasks().subscribe(
      (res: any) => {
        this.customers = res;
        console.log(res);
        this.totalItems = res.length;
        console.log(this.totalItems);
      }
    )


  }
}
