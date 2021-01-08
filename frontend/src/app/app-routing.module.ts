import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: "all",
        loadChildren: () => import("./vacancies/vacancies.module").then(module => module.VacanciesModule)
    },
    {
        path: "",
        redirectTo: "all",
        pathMatch: "prefix"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
