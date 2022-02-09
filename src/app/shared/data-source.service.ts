import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  REST_API: string = 'http://localhost:8083/springboot-flowable-service/process/start';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').
    set('processKey', 'details_checker_process3');


  customers: any[] = [];
  constructor(private httpClient: HttpClient) { }

  async addUser(data: any) {
    let API_URL = this.REST_API;
    const user = JSON.stringify(data);
    console.log("Application sending...2");
    return await this.httpClient.post<any>(API_URL, user, { headers: this.httpHeaders, responseType: 'text' as 'json' })
      .pipe(
        tap(
          res => {
            console.log("Deatils entered Successfully!!");
            console.log(res);
          }
        )
      ).subscribe();
  }
  getCustomers() {
    return this.httpClient.get(this.REST_API).pipe(
      tap(
        async (res: any) => {
          this.customers = await res;
          console.log("from datasource :", this.customers);
        }
      )
    );
  }
  async getCustomersCopy() {
    return await this.customers;
  }

  getCheckerTasks() {
    return this.httpClient.get('http://localhost:8083/springboot-flowable-service/task/get-pending-checker-tasks').pipe(
      tap(
        async (res: any) => {
          this.customers = await res;
          console.log("from datasource :", this.customers);
        }
      )
    );
  }
  getCustomerById(index: number) {
    console.log("called get user by id", this.customers[index], this.customers);

    return this.customers[index];
  }
  completeCheckerTask(body: any, customerId: number) {
    const httpHeaders1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put('http://localhost:8083/springboot-flowable-service/task/complete-checker-task/' + customerId, body).subscribe(
      res => {
        console.log("checker completion res: ", res);
      }
    );
  }
}
