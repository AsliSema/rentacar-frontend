import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FuelListItemDto } from '../../models/fuel-list-item.dto';
import { FuelsService } from '../../services/fuels.service';
import { MenuComponent, MenuItem } from '../../../../shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fuels-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './fuels-list-menu.component.html',
  styleUrl: './fuels-list-menu.component.scss'
})
export class FuelsListMenuComponent {

  @Input() initialSelectedFuelId : number | null = null;
  @Output() selectFuel = new EventEmitter<FuelListItemDto | null>();

  fuels !: FuelListItemDto[];
  selectedFuel: FuelListItemDto | null = null;
  initialSelectedFuelIndex: number | null = null;



  constructor(private fuelsService: FuelsService, private change: ChangeDetectorRef){}



  ngOnInit(): void {
    this.getFuelList();
  }

  getFuelList(){
    this.fuelsService.getFuels().subscribe((response) => {
      this.fuels = response;

      if(this.initialSelectedFuelId){
        this.selectedFuel =
        this.fuels.find(
          (fuel) => fuel.id === this.initialSelectedFuelId
        ) ?? null;
      
      this.initialSelectedFuelIndex = this.fuels.findIndex(fuel => fuel.id === this.initialSelectedFuelId)  
      }

      this.change.markForCheck();
    });

  }

  onSelectFuel(fuel: FuelListItemDto){
    this.selectedFuel = this.selectedFuel?.id !== fuel.id ? fuel : null;
    this.selectFuel.emit(this.selectedFuel);
  };

  get fuelMenuItems(): MenuItem[] {
    return this.fuels?.map((fuel) => {
      return {
        label: fuel.name,
        click: (_: MouseEvent) => this.onSelectFuel(fuel),
      };
    })
  }


}
