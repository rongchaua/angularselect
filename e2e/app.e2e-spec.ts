import { HihiPage } from './app.po';

describe('hihi App', function() {
  let page: HihiPage;

  beforeEach(() => {
    page = new HihiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
