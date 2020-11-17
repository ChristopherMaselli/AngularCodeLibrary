import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/*
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
*/

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers;

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit(): void {
    /*Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
  ]).switchMap(combined => {
    let id = combined[0].get('id');
    combined[1].get('page');

    return this.service.getAll();
  })
  .subscribe(followers => this.followers = followers);
    








  //   Observable.combineLatest([
  //     this.route.paramMap,
  //     this.route.queryParamMap
  // ])
  // .subscribe(combined => {
  //   let id = combined[0].get('id');
  //   combined[1].get('page');

  //   //this.service.getAll({ id: id, page: page});
  //   this.service.getAll().subscribe(followers => this.followers = followers)
  */
  

    // obs.subscribe()

    // this.route.paramMap.subscribe(params => {

    // });
    // //let id = this.route.snapshot.paramMap.get('id');

    // this.route.queryParamMap.subscribe(params => {

    // });
    // //let page = this.route.snapshot.queryParamMap.get('page');

    // this.service.getAll().subscribe(followers => this.followers = followers)
  }

}
