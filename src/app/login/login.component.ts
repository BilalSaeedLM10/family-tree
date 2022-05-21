import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Subject } from "rxjs";
import { TodoService } from "../_services";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {
  users: any = [];

  constructor(private router: Router, private todo: TodoService) {
    this.todo.getUsers().subscribe((x) => {
      this.users = x;
    });
  }

  model: User = new User();
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {}

  onSubmit(loginForm: NgForm) {
    console.log(this.model);
    for (const iterator of this.users) {
      if (
        iterator.email == this.model.email &&
        iterator.password == this.model.password
      ) {
        this.router.navigate(["/dashboard"]);
        return;
      }
    }
    alert("Wrong email or password");
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

export class User {
  constructor() {}

  public email: string;
  public password: string;
}
