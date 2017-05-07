import { TemaIBPage } from './app.po';

describe('tema-ib App', () => {
  let page: TemaIBPage;

  beforeEach(() => {
    page = new TemaIBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
