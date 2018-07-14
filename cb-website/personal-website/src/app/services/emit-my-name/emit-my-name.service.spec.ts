import { TestBed, inject } from '@angular/core/testing';

import { EmitMyNameService } from './emit-my-name.service';

describe('EmitMyNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitMyNameService]
    });
  });

  it('should be created', inject([EmitMyNameService], (service: EmitMyNameService) => {
    expect(service).toBeTruthy();
  }));
});
