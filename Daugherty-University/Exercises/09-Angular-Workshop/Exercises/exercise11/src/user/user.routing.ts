import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { UserResolver } from "./user.resolve";
import { UserViewComponent } from "./user-view/user-view.component";

const routes: Routes = [
  {
    path: "users", component: UserComponent,
    resolve: {
      users: UserResolver
    }
  },
  {
    path: "users/:id", component: UserViewComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UserRoutingModule { }
