/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { PlantaComponent } from './planta.component';
import { PlantaService } from './planta.service';
import { Planta } from './planta';


describe('ArtworkListComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaComponent ],
      providers: [PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++){
      const artwork = new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.plantas.push(artwork);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have one <table> element', () =>{
    expect(debug.queryAll(By.css('table'))).toHaveSize(1)
  });

  it('should have one <thead> element', () =>{
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1)
  });

  it('should have 3 <tr> elements into the <tbody>', () =>{
    expect(debug.queryAll(By.css('tbody > tr'))).toHaveSize(3)
  });

});
