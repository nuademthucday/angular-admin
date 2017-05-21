import {MainComponent} from "./main.component";

export const mainRouters = [
  {
    path: '', component: MainComponent, children: [
    {path: '', redirecTo: 'home', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
  ]
  }

]
