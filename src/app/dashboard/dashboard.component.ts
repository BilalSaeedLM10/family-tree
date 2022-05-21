import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TodoService } from "../_services";
import { Router } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { Store } from "@ngrx/store";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  filteredData: any = [];
  allNodes: any = [];
  allTargets: any = [];
  isEditOn: Boolean = false;
  baseNodeObj: any = {};
  @ViewChild("graph", { static: false }) divHello: ElementRef<HTMLElement>;

  constructor(private router: Router, public todo: TodoService) {
    todo.getRelatives().subscribe((x: any) => {
      console.log({ x });
      this.todo.data = x;
      this.filteredData = x;
      this.baseNodeObj = x.find((y) => y.relation.toLowerCase() == "base node");
      this.allNodes = x
        .filter((x) => x.relation.toLowerCase() != "base node")
        .map((x) => x.relation);
      x.filter((x) => {
        this.allNodes.push(x.name);
      });
      this.allNodes = [...new Set(this.allNodes)];

      console.log("All nodes", this.allNodes);
    });
    console.log("USERS: ", this.todo.data);
  }

  ngOnDestroy() {}

  ngOnInit(): void {
    console.log(this.divHello);
  }

  searchList(val: string) {
    console.log({ val });
    this.filteredData = this.todo.data.filter((x) => {
      if (x.name.toLowerCase().includes(val.toLowerCase())) {
        return x;
      } else if (x.relation.toLowerCase().includes(val.toLowerCase())) {
        return x;
      }
      return;
    });
  }

  deleteFromList(item) {
    console.log(this.divHello);
    const index = this.filteredData.indexOf(item);
    if (index != -1) {
      this.filteredData.splice(index, 1);
    }
  }

  generateGraph() {
    let links = [];
    this.filteredData = this.todo.data;

    for (let index = 0; index < this.filteredData.length; index++) {
      const element = this.filteredData[index];
      if (element.relation.toLowerCase() == "wife") {
        let obj = [
          {
            source: "Wife",
            target: this.baseNodeObj.name,
          },
          {
            source: element.name,
            target: "Wife",
          },
        ];
        links.push(...obj);
      }
      if (element.relation.toLowerCase() == "father") {
        let obj = [
          {
            source: "Father",
            target: this.baseNodeObj.name,
          },
          {
            source: element.name,
            target: "Father",
          },
        ];
        links.push(...obj);
      }
      if (element.relation.toLowerCase() == "son") {
        let obj = [
          {
            source: "Son",
            target: this.baseNodeObj.name,
          },
          {
            source: element.name,
            target: "Son",
          },
        ];
        links.push(...obj);
      }
      if (element.relation.toLowerCase() == "brother") {
        console.log({ element });

        let obj = [
          {
            source: "Brother",
            target: this.baseNodeObj.name,
          },
          {
            source: element.name,
            target: "Brother",
          },
        ];
        links.push(...obj);
      }
      if (element.relation.toLowerCase() == "mother-in-law") {
        let obj = [
          {
            source: "Mother-in-Law",
            target: this.baseNodeObj.name,
          },
          {
            source: element.name,
            target: "Mother-in-Law",
          },
        ];
        links.push(...obj);
      }
      if (element.relation.toLowerCase() == "father-in-law") {
        let obj = [
          {
            source: "father-in-Law",
            target: this.baseNodeObj.name,
          },
          {
            source: element.name,
            target: "father-in-Law",
          },
        ];
        links.push(...obj);
      }
      if (element.relation.toLowerCase() == "sister") {
        let obj = [
          {
            source: "Sister",
            target: this.baseNodeObj.name,
          },
          {
            source: element.name,
            target: "Sister",
          },
        ];
        links.push(...obj);
      }
      if (element.relation.toLowerCase() == "mother") {
        let obj = [
          {
            source: "Mother",
            target: this.baseNodeObj.name,
          },
          {
            source: element.name,
            target: "Mother",
          },
        ];
        links.push(...obj);
      }
    }
    this.allNodes = this.filteredData
      .filter((x) => x.relation.toLowerCase() != "base node")
      .map((x) => x.relation);
    this.filteredData.filter((x) => {
      this.allNodes.push(x.name);
    });
    this.allNodes = [...new Set(this.allNodes)];
    console.log({ links }, this.allNodes);
    let obj = {
      nodes: this.allNodes.map((x) => {
        return { name: x };
      }),
      links: links,
    };
    this.todo.chartData = obj;
    this.router.navigate([`family-graph`]);
  }

  editItems(item) {
    const index = this.todo.data.indexOf(item);
    if (index != -1) {
      this.todo.data[index] = item;
    }
  }
}
