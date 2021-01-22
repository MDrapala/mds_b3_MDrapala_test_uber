describe('Test uber', function() {
  before(browser => browser.url('https://www.uber.com/fr/fr/'));

  test('Open Uber Website', function (browser) {
    browser
      .waitForElementVisible('body')
      .verify.visible('head')
      .verify.titleContains('Uber')
  });

  test('Check block login in the header wrapper', function (browser) {
    browser
      .waitForElementVisible('body')
      .verify.visible('button[id="inscription"]')
      .verify.visible('button[id="connexion"]')
  });

  test('Check login in two sections', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.visible('button[id="connexion"]')
      .assert.visible('button[class="dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed ee b8 b6 bj b7 bu c4 bv ef eq er es et ek el eu ev de cw eo ep dm"]')
  });

  test('Check login chauffeur section', function (browser) {
    browser
      .waitForElementVisible('body')
      .click('a[aria-label="S\'inscrire en tant que chauffeur]')
      .waitForElementVisible('body')
      .click('a[class="dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed mo b8 mp bj b7 bu co bv c6 gf gg ge gh mq mr ms mt de cw eo ep""]')
  });

  test('Check login passager section', function (browser) {
    browser
      .waitForElementVisible('body')
      .click('button[id="connexion"]')
      .waitForElementVisible('body')
      .click('button[class="dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed ee b8 b6 bj b7 bu c4 bv ef eq er es et ek el eu ev de cw eo ep dm"]')
  });

  test('Check registration block in two sections', function (browser) {
    browser
    .waitForElementVisible('body')
    .click('button[id="inscription"]')
    .waitForElementVisible('body')
    .assert.visible('button[class=dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed ee b8 b6 bj b7 bu c4 bv ef eq er es et ek el eu ev bt ew ex ey ep dm ez f0]')
  });

  test('Check registration block with devenir professionnal section', function (browser) {
    browser
      .waitForElementVisible('body')
      .click('button[id="inscription"]')
      .waitForElementVisible('body')
      .click('button[class="css for registration professionnal section"]')
      .waitForElementVisible('body')
  });

  test('Check registration block with commander une course action', function (browser) {
    browser
    .waitForElementVisible('body')
    .click('button[id="inscription"]')
    .waitForElementVisible('body')
    .click('button[class=dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed ee b8 b6 bj b7 bu c4 bv ef eq er es et ek el eu ev bt ew ex ey ep dm ez f0]')
    .waitForElementVisible('body')
  });

  test('Registration with commander une course section shouldn\'t pass', function (browser) {
    browser
    .waitForElementVisible('body')
    .click('button[id="inscription"]')
    .waitForElementVisible('body')
    .click('button[class=dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed ee b8 b6 bj b7 bu c4 bv ef eq er es et ek el eu ev bt ew ex ey ep dm ez f0]')
    .waitForElementVisible('body')
    .click('button[type="submit"]')
    .waitForElementVisible('body')
  });

  test('Registration should pass', function (browser) {
    browser
    .waitForElementVisible('body')
    .click('button[id="inscription"]')
    .waitForElementVisible('body')
    .click('button[class=dy dz bo ds e0 e1 e2 ct e3 e4 e5 e6 be e7 ca e8 e9 ea eb bi ec ed ee b8 b6 bj b7 bu c4 bv ef eq er es et ek el eu ev bt ew ex ey ep dm ez f0]')
    .waitForElementVisible('body')

    .setValue('input[id="firstName"]', 'Mathieu')
    .setValue('input[id="lastName"]', 'DRAPALA')
    .setValue('input[type=tel]', '628735312')
    .setValue('input[type="email"]', 'drapalamathieu@testmail.com')
    .setValue('input[type="password"]', 'badaboum')

    .click('button[type="submit"]')
    .waitForElementVisible('body')
  });
})