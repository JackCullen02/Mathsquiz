import { MathsquizPage } from './app.po';

describe('mathsquiz App', () => {
  let page: MathsquizPage;

  beforeEach(() => {
    page = new MathsquizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
