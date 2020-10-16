const constants = require('../constants');

module.exports = {
  demoTest(client) {
    const homePage = client.page.homePage();

    homePage
      .navigate()
      .waitForHomePage()
      .chooseCategoryCard(constants.home.categoryCards.forms);
  },

};
