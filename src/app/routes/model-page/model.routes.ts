import { Routes } from "@angular/router";
import { ModelPageComponent } from "./model-page.component";
import { ModelDetailPageComponent } from "../model-detail-page/model-detail-page/model-detail-page.component";

export const modelRoutes: Routes = [
    {
        path: 'models',
        //pathMatch: 'full',
        component: ModelPageComponent,
        children: [
            {
                path: "modelId/:modelId",
                component: ModelDetailPageComponent
            }
        ]
    }
];