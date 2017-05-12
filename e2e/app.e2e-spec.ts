import { PassportStaticPage } from './app.po';

describe('passport-static App', () => {
  let page: PassportStaticPage;

  beforeEach(() => {
    page = new PassportStaticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
