const homePage = {
  waitForHomePage() {
    this
      .waitForElementPresent('@homeCategoryCardsView');
    return this;
  },

};

export default {
  url() {
    return `https://${this.api.globals.appURL}`;
  },
  commands: [homePage],
  elements: {
    homeCategoryCardsView: {
      selector: '.home-content .category-cards',
    },
  },
};
