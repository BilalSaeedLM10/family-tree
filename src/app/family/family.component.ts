import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import ForceGraph from "force-graph";
import { TodoService } from "../_services";

@Component({
  selector: "app-family",
  templateUrl: "./family.component.html",
  styleUrls: ["./family.component.css"],
})
export class FamilyComponent implements OnInit {
  @ViewChild("graph", { static: false }) divHello: ElementRef<HTMLElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    public todo: TodoService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    let data = this.todo.chartData;
    const Graph = ForceGraph();
    console.log("HEllo", this.divHello);

    Graph(this.divHello.nativeElement)
      .graphData(data)
      .nodeId("name")
      .nodeVal("value")
      .nodeLabel("name")
      .nodeAutoColorBy("name")
      .linkSource("source")
      .linkTarget("target");
  }
}
