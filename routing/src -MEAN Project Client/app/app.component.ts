import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';

  constructor(private _appService: AppServiceService) { }

  ngOnInit() {
    this.getBatchesFromApi();
  }

  getBatchesFromApi() {
    this._appService.getBatches().subscribe((Response) => {
      console.log("Data From Server", Response);
    });
  }
}
