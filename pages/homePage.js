const homePage = {
  waitForHomePage() {
    this
      .waitForElementPresent('@homeCategoryCardsView');
    return this;
  },
  chooseCategoryCard(categoryName) {
    const singleCategoryCardTextView = `${this.elements.singleCategoryCard.selector}//*[normalize-space()="${categoryName}"]`;

    this
      .useXpath()
      .waitForElementPresent(singleCategoryCardTextView)
      .click(singleCategoryCardTextView, () => {
        console.log(`${categoryName} category card been clicked`);
      })
      .useCss();
  },
};

module.exports = {
  url() {
    return `https://${this.api.globals.appURL}`;
  },
  commands: [homePage],
  elements: {
    homeCategoryCardsView: {
      selector: '.home-content .category-cards',
    },
    singleCategoryCard: {
      selector: '//*[@class="card-body"]',
      locateStrategy: 'xpath',
    },
  },
};
