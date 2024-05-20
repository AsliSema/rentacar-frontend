import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { TransmissionListItemDto } from '../../models/transmission-list-item.dto';
import { TransmissionsService } from '../../services/transmissions.service';
import { MenuComponent, MenuItem } from '../../../../shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transmissions-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './transmissions-list-menu.component.html',
  styleUrl: './transmissions-list-menu.component.scss'
})
export class TransmissionsListMenuComponent {

  @Input() initialSelectedTransmissionId : number | null = null;
  @Output() selectTransmission = new EventEmitter<TransmissionListItemDto | null>();

  transmissions !: TransmissionListItemDto[];
  selectedTransmission: TransmissionListItemDto | null = null;
  initialSelectedTransmissionIndex: number | null = null;



  constructor(private transmissionsService: TransmissionsService, private change: ChangeDetectorRef){}



  ngOnInit(): void {
    this.getTransmissionList();
  }

  getTransmissionList(){
    this.transmissionsService.getTransmissions().subscribe((response) => {
      this.transmissions = response;

      if(this.initialSelectedTransmissionId){
        this.selectedTransmission =
        this.transmissions.find(
          (transmission) => transmission.id === this.initialSelectedTransmissionId
        ) ?? null;
      
      this.initialSelectedTransmissionIndex = this.transmissions.findIndex(transmission => transmission.id === this.initialSelectedTransmissionId)  
      }

      this.change.markForCheck();
    });

  }

  onSelectTransmission(transmission: TransmissionListItemDto){
    this.selectedTransmission = this.selectedTransmission?.id !== transmission.id ? transmission : null;
    this.selectTransmission.emit(this.selectedTransmission);
  };

  get transmissionMenuItems(): MenuItem[] {
    return this.transmissions?.map((transmission) => {
      return {
        label: transmission.name,
        click: (_: MouseEvent) => this.onSelectTransmission(transmission),
      };
    })
  }

}
