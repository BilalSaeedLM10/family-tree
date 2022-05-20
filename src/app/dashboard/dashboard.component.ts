import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../_services';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as todoActions from '../app-state/actions';
import * as fromRoot from '../app-state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  filteredData: any = []
  baseNodeObj: any = {}


  constructor(private router: Router, public todo: TodoService) {
    todo.getRelatives().subscribe((x: any) => {
      console.log({x});
      this.todo.data = x
      this.filteredData = x
      this.baseNodeObj =  x.find((y) => y.relation.toLowerCase() == 'base node' )
      
    })
    console.log('USERS: ', this.todo.data);

  }

  ngOnDestroy() {

  }

  ngOnInit(): void {
    
  }

  searchList(val: string){
    console.log({val});
    this.filteredData = this.todo.data.filter((x) => {

      if (x.name.toLowerCase().includes(val.toLowerCase())){
        return x
      }
      else if (x.relation.toLowerCase().includes(val.toLowerCase())){
        return x
      }
      return

    })
    
  }

  deleteFromList(item){
    const index = this.filteredData.indexOf(item);
    if (index != -1){
      this.filteredData.splice(index, 1)
    }
  }

}
