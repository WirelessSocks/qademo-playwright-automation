class HomePage {
  constructor(page) {
    this.page = page;

    this.usernameLink = page.getByTestId('navbar-username-link');
    this.logoutButton = page.getByTestId('navbar-logout-button');
    this.signInButton = page.getByTestId('hero-signin-button');
  }

  async logout() {
    await this.logoutButton.click();
  }
}

module.exports = { HomePage };
