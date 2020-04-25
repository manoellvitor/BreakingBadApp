import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

  deaths: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.deaths = this.api.getDeaths();
  }

  openDetails(deaths){
    let deathId = deaths.deaths_id;
    this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
  }

}
