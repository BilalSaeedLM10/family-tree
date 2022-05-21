import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AppService } from "../_services";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private appService: AppService) {}

  model: User = new User();
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {}

  onSubmit(loginForm: NgForm) {
    console.log(this.model);
    // this.store.dispatch(userActions.signup({user: this.model}));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

export class User {
  constructor() {}

  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;
}
