import { RegistrationService } from './registration.service';
import { TestBed } from '@angular/core/testing';


describe('RegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationService = TestBed.get(RegistrationService);
    expect(service).toBeTruthy();
  });
});
