import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthGuard } from 'src/app/services/user/auth.guard';
import { ModalModule } from 'src/app/page/modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: '../home-main/home-main.module#HomeMainPageModule',
            canActivate: [ AuthGuard ]
          }
        ]
      },
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: '../exploremenu/home-explore/home-explore.module#HomeExplorePageModule',
            canActivate: [ AuthGuard ]
          }
        ]
      },
      {
        path: 'activity',
        children: [
          {
            path: '',
            loadChildren: '../activitymenu/home-activity/home-activity.module#HomeActivityPageModule',
            canActivate: [ AuthGuard ]
          }
        ]
      },
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: '../shopmenu/home-shop/home-shop.module#HomeShopPageModule',
            canActivate: [ AuthGuard ]
          }
        ]
      },
      {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: '../accountmenu/account/account.module#AccountPageModule',
            canActivate: [ AuthGuard ]
          }
        ]
      },
      {
        path: 'discussion',
        children: [
          {
            path: '',
            loadChildren: '../discussionmenu/discussion/discussion.module#DiscussionPageModule',
            canActivate: [ AuthGuard ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    ModalModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
