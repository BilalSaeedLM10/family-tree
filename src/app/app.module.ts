import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { SharedModule } from "./shared/shared.module";
import { LoginModule } from "./login/login.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { AppComponent } from "./app.component";

// ngrx related imports
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule,
    SharedModule,
    LoginModule,
    ModalModule.forRoot(),
    // ngrx related imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
