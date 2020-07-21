import { constantsHome } from '~/constants';

module.exports = {
  demoTest(client) {
    const homePage = client.page.homePage();

    homePage
      .navigate()
      .waitForHomePage()
      .chooseCategoryCard(constantsHome.categoryCards.forms);
  },

};
