import { SingaAngPage } from './app.po';

describe('singa-ang App', () => {
  let page: SingaAngPage;

  beforeEach(() => {
    page = new SingaAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
