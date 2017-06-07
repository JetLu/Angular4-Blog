import { Angular4BlogPage } from './app.po';

describe('angular4-blog App', () => {
  let page: Angular4BlogPage;

  beforeEach(() => {
    page = new Angular4BlogPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
