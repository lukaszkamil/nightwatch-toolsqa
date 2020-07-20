module.exports = {
  demoTest(client) {
    const homePage = client.page.homePage();

    homePage
      .navigate()
      .waitForHomePage();
  },

};
