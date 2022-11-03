import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  constructor(private plantaService : PlantaService) { }
  plantas: Array<Planta> = [];
  plantasInterior: number = 0;
  plantasExterior: number = 0;

  calcularPlantas(){
    this.plantasInterior = this.plantas.filter(planta => planta.tipo === 'Interior').length;
    this.plantasExterior = this.plantas.filter(planta => planta.tipo === 'Exterior').length;
  }

  getPlantas(){
    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      this.calcularPlantas()
    })
  }

  ngOnInit() {
    this.getPlantas();
  }

}
