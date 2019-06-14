import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NoLoginGuard } from "./guards/nologin.guard";

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate : [AuthGuard] },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule', canActivate : [AuthGuard ]},
  { path: 'details', loadChildren:'./pages/todo-details/todo-details.module#TodoDetailsPageModule', canActivate : [AuthGuard]},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule', canActivate : [NoLoginGuard]  },
  { path: 'eventos', loadChildren: './pages/eventos/eventos.module#EventosPageModule', canActivate : [AuthGuard] },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },  { path: 'crowd', loadChildren: './pages/crowd/crowd.module#CrowdPageModule' },
  { path: 'market', loadChildren: './pages/market/market.module#MarketPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'conversation', loadChildren: './pages/conversation/conversation.module#ConversationPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
