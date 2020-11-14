import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  // constructor(private route: ActivatedRoute) { }
  constructor(private router: Router) { }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    })
  }

  ngOnInit() {
    // let id = this.route.snapshot.paramMap.get("username");
    // console.log(id);

    // this.route.paramMap
    // .subscribe(params => {
    //   let id = +params.get('username');
    //   //ServiceUIFrameContext.getProfile(id)
    //   console.log(id);
    // })
  }

}
