import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserResolver } from "./user.resolve";

const routes: Routes = [
  {
    path: "users", component: UserComponent,
    resolve: {
      users: UserResolver
    }
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UserRoutingModule { }
