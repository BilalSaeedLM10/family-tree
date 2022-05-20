import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http: HttpClient) { }


  data: any =  []

  getUsers() {
    return this.http.get("assets/users.json");
  }

  getRelatives(){
    return this.http.get("assets/relatives.json");

  }

  // addTask(task: any) {
  //   return this.http.post(this.rootURL + '/task', {task});
  // }

  // editTask(task: any) {
  //   return this.http.put(this.rootURL + '/task', {task});
  // }

  // deleteTask(taskId: any) {
  //   console.log('deleting task:::', taskId);
  //   return this.http.delete(`${this.rootURL}/task/${taskId}`);
  // }
}
