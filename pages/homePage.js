const homePage = {
  waitForHomePage() {
    this
      .waitForElementPresent('@homeCategoryCardsView');
    return this;
  },

};

export default {
  commands: [homePage],
  elements: {
    homeCategoryCardsView: {
      selector: '.home-content .category-cards',
    },
  },
};
