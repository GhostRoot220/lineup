import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {AuthGuard} from '../app/services/user/auth.guard';

const routes: Routes = [
    {path: '', redirectTo: 'home/main', pathMatch: 'full'},
    {path: 'login', loadChildren: './page/login/login.module#LoginPageModule'},
    {path: 'register', loadChildren: './page/register/register.module#RegisterPageModule'},
    {path: 'resetpwd', loadChildren: './page/resetpwd/resetpwd.module#ResetpwdPageModule'},
    {path: 'home', loadChildren: './page/mainmenu/home/home.module#HomePageModule', canActivate: [AuthGuard]},
    {
        path: 'account/:userid',
        loadChildren: './page/mainmenu/accountmenu/account/account.module#AccountPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'account-noti-setting',
        loadChildren: './page/mainmenu/accountmenu/account-noti-setting/account-noti-setting.module#AccountNotiSettingPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'alert-perlocation',
        loadChildren: './page/mainmenu/accountmenu/alert-perlocation/alert-perlocation.module#AlertPerlocationPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'home/explore-report/:locationid/:name/:wavesize/:wavequality',
        loadChildren: './page/mainmenu/exploremenu/explore-report/explore-report.module#ExploreReportPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'discussion-detail/:discussionid/:discussiontitle/:backpage/:isnew',
        loadChildren: './page/mainmenu/discussionmenu/discussion-detail/discussion-detail.module#DiscussionDetailPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'home-shop-newitem',
        loadChildren: './page/mainmenu/shopmenu/home-shop-newitem/home-shop-newitem.module#HomeShopNewitemPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'chat/:itemid/:poster',
        loadChildren: './page/mainmenu/activitymenu/activity-detail/activity-detail.module#ActivityDetailPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'locationdetail/:itemid/:name',
        loadChildren: './page/mainmenu/exploremenu/home-explore-location-detail/home-explore-location-detail.module#HomeExploreLocationDetailPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'shopitemdetail/:itemid/:backpage',
        loadChildren: './page/mainmenu/shopmenu/home-shop-item-detail/home-shop-item-detail.module#HomeShopItemDetailPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'reportitems/:locationid/:locationtitle',
        loadChildren: './page/mainmenu/exploremenu/reportitems/reportitems.module#ReportitemsPageModule',
        canActivate: [AuthGuard]
    },
    {path: 'hidelist', loadChildren: './page/mainmenu/activitymenu/hidelist/hidelist.module#HidelistPageModule', canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
