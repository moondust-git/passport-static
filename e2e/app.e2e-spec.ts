import { MoondustStaticPage } from './app.po';

describe('moondust-static App', () => {
  let page: MoondustStaticPage;

  beforeEach(() => {
    page = new MoondustStaticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
