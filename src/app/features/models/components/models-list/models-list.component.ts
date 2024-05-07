import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { ModelService } from '../../services/model.service';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';


@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent extends ModelsListBaseComponent implements OnInit{

}
