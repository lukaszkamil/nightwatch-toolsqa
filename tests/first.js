module.exports = {
  demoTest(client) {
    const appUrl = client.globals.appURL;
    const homePage = client.page.homePage();

    client
      .url(`http://${appUrl}`);

    homePage
      .waitForHomePage();
  },

};
