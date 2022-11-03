/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantaService } from './planta.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PlantaComponent } from './planta.component';

describe('Service: Planta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlantaComponent],
      providers: [PlantaService]
    });
  });

  it('should ...', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
