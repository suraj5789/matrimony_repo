import { AppCommonModule } from './common.module';

describe('AppCommonModule', () => {
  let AppCommonModule: AppCommonModule;

  beforeEach(() => {
    AppCommonModule = new AppCommonModule();
  });

  it('should create an instance', () => {
    expect(AppCommonModule).toBeTruthy();
  });
});
