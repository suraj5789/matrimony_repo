import { MatrimonyModule } from './matrimony.module';

describe('MatrimonyModule', () => {
  let matrimonyModule: MatrimonyModule;

  beforeEach(() => {
    matrimonyModule = new MatrimonyModule();
  });

  it('should create an instance', () => {
    expect(matrimonyModule).toBeTruthy();
  });
});
