import { Routes } from "@angular/router";
import { ModelDetailPageComponent } from "./model-detail-page/model-detail-page.component";
import { ModelsListPageComponent } from "./models-list-page/models-list-page.component";
import { ModelsPageComponent } from "./models-page.component";

export const modelsRoutes: Routes = [
    {
        path: 'models',
        //pathMatch: 'full',
        component: ModelsPageComponent,
        children: [
            {
                path: "",
                component: ModelsListPageComponent
            },
            {
                path: "modelId/:modelId",
                component: ModelDetailPageComponent
            }
        ]
    }
];