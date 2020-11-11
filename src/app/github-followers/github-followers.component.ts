import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers;

  constructor(private service: GithubFollowersService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(followers => this.followers = followers)
  }

}
