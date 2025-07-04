describe("Premium tier - Maintainer user", () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.setup();
    cy.loginWithCySession();
    cy.seedPremium();
    cy.seedQueries();
    cy.seedPolicies("apples");
    cy.addDockerHost("apples");
  });
  after(() => {
    cy.logout();
    cy.stopDockerHost();
  });

  describe("Global maintainer", () => {
    beforeEach(() => {
      cy.loginWithCySession("mary@organization.com", "user123#");
    });
    describe("Navigation", () => {
      beforeEach(() => cy.visit("/dashboard"));
      it("displays intended global maintainer top navigation", () => {
        cy.getAttached(".site-nav-container").within(() => {
          cy.findByText(/hosts/i).should("exist");
          cy.findByText(/software/i).should("exist");
          cy.findByText(/queries/i).should("exist");
          cy.findByText(/schedule/i).should("exist");
          cy.findByText(/policies/i).should("exist");
          cy.getAttached(".user-menu").click();
          cy.findByText(/settings/i).should("not.exist");
          cy.findByText(/manage users/i).should("not.exist");
        });
      });
    });
    describe("Dashboard", () => {
      beforeEach(() => cy.visit("/dashboard"));
      it("displays cards for all platforms", () => {
        cy.getAttached(".homepage__wrapper").within(() => {
          cy.findByText(/all teams/i).should("exist");
          cy.getAttached(".hosts-summary").should("exist");
          cy.getAttached(".hosts-status").should("exist");
          cy.getAttached(".home-software").should("exist");
          cy.getAttached(".activity-feed").should("exist");
        });
      });
      it("displays cards for windows only", () => {
        cy.getAttached(".homepage__platforms").within(() => {
          cy.getAttached(".Select-control").click();
          cy.findByText(/windows/i).click();
        });
        cy.getAttached(".homepage__wrapper").within(() => {
          cy.findByText(/all teams/i).should("exist");
          cy.getAttached(".hosts-summary").should("exist");
          cy.getAttached(".hosts-status").should("exist");
          // "get" because we expect it not to exist
          cy.get(".home-software").should("not.exist");
          cy.get(".activity-feed").should("not.exist");
        });
      });
      it("displays cards for linux only", () => {
        cy.getAttached(".homepage__platforms").within(() => {
          cy.getAttached(".Select-control").click();
          cy.findByText(/linux/i).click();
        });
        cy.getAttached(".homepage__wrapper").within(() => {
          cy.findByText(/all teams/i).should("exist");
          cy.getAttached(".hosts-summary").should("exist");
          cy.getAttached(".hosts-status").should("exist");
          // "get" because we expect it not to exist
          cy.get(".home-software").should("not.exist");
          cy.get(".activity-feed").should("not.exist");
        });
      });
      it("displays cards for macOS only", () => {
        cy.getAttached(".homepage__platforms").within(() => {
          cy.getAttached(".Select-control").click();
          cy.findByText(/macos/i).click();
        });
        cy.getAttached(".homepage__wrapper").within(() => {
          cy.findByText(/all teams/i).should("exist");
          cy.getAttached(".hosts-summary").should("exist");
          cy.getAttached(".hosts-status").should("exist");
          cy.getAttached(".home-munki").should("exist");
          cy.getAttached(".home-mdm").should("exist");
          // "get" because we expect it not to exist
          cy.get(".home-software").should("not.exist");
          cy.get(".activity-feed").should("not.exist");
        });
      });
      it("views all hosts for all platforms", () => {
        cy.findByText(/view all hosts/i).click();
        cy.get(".manage-hosts__label-block").should("not.exist");
      });
      it("views all hosts for windows only", () => {
        cy.getAttached(".homepage__platforms").within(() => {
          cy.getAttached(".Select-control").click();
          cy.findByText(/windows/i).click();
        });
        cy.findByText(/view all hosts/i).click();
        cy.getAttached(".manage-hosts__label-block").within(() => {
          cy.getAttached(".title").within(() => {
            cy.findByText(/windows/i).should("exist");
          });
        });
      });
      it("views all hosts for linux only", () => {
        cy.getAttached(".homepage__platforms").within(() => {
          cy.getAttached(".Select-control").click();
          cy.findByText(/linux/i).click();
        });
        cy.findByText(/view all hosts/i).click();
        cy.getAttached(".manage-hosts__label-block").within(() => {
          cy.getAttached(".title").within(() => {
            cy.findByText(/linux/i).should("exist");
          });
        });
      });
      it("views all hosts for macOS only", () => {
        cy.getAttached(".homepage__platforms").within(() => {
          cy.getAttached(".Select-control").click();
          cy.findByText(/macos/i).click();
        });
        cy.findByText(/view all hosts/i).click();
        cy.getAttached(".manage-hosts__label-block").within(() => {
          cy.getAttached(".title").within(() => {
            cy.findByText(/macos/i).should("exist");
          });
        });
      });
    });
    describe("Manage hosts page", () => {
      it("renders elements according to role-based access controls", () => {
        cy.visit("/hosts/manage");
        // Hosts table includes teams column
        cy.getAttached(".data-table__table th")
          .contains("Team")
          .should("be.visible");
        cy.getAttached(".button-wrap")
          .contains("button", /add hosts/i)
          .click();
        cy.getAttached(".modal__content").contains("button", /done/i).click();

        cy.getAttached(".button-wrap")
          .contains("button", /manage enroll secret/i)
          .click();
        cy.getAttached(".enroll-secret-modal__add-secret")
          .contains("button", /add secret/i)
          .click();
        cy.getAttached(".secret-editor-modal__button-wrap")
          .contains("button", /save/i)
          .click();
        cy.getAttached(".enroll-secret-modal__button-wrap")
          .contains("button", /done/i)
          .click();
      });
    });
    describe("Host details page", () => {
      beforeEach(() => {
        cy.visit("/hosts/manage");
        cy.getAttached(".hostname__cell").first().click();
      });
      it("allows global maintainer to transfer host to an existing team", () => {
        cy.getAttached(".host-details__transfer-button").click();
        cy.findByText(/create a team/i).should("not.exist");
        cy.getAttached(".Select-control").click();
        cy.getAttached(".Select-menu").within(() => {
          cy.findByText(/no team/i).should("exist");
          cy.findByText(/apples/i).should("exist");
          cy.findByText(/oranges/i).click();
        });
        cy.getAttached(".transfer-host-modal__button-wrap")
          .contains("button", /transfer/i)
          .click();
        cy.findByText(/transferred to oranges/i).should("exist");
        cy.findByText(/team/i).next().contains("Oranges");
      });
      it("allows global maintainer to create an operating system policy", () => {
        cy.getAttached(".info-flex").within(() => {
          cy.findByText(/ubuntu/i).should("exist");
          cy.getAttached(".host-summary__os-policy-button").click();
        });
        cy.getAttached(".modal__content")
          .findByRole("button", { name: /create new policy/i })
          .should("exist");
      });
      it("allows global maintainer to create a custom query", () => {
        cy.getAttached(".host-details__query-button").click();
        cy.contains("button", /create custom query/i).should("exist");
        cy.getAttached(".modal__ex").click();
      });
      it("allows global maintainer to delete a host", () => {
        cy.getAttached(".host-details__action-button-container")
          .contains("button", /delete/i)
          .click();
        cy.getAttached(".delete-host-modal__modal").within(() => {
          cy.findByText(/delete host/i).should("exist");
          cy.contains("button", /delete/i).should("exist");
          cy.getAttached(".modal__ex").click();
        });
      });
    });
    describe("Manage software page", () => {
      beforeEach(() => cy.visit("/software/manage"));
      it("hides 'Manage automations' button from global maintainer", () => {
        cy.findByText(/manage automations/i).should("not.exist");
      });
    });
    describe("Query pages", () => {
      beforeEach(() => cy.visit("/queries/manage"));
      it("allows global maintainer to select teams targets for query", () => {
        cy.getAttached("tbody").within(() => {
          cy.getAttached("tr")
            .first()
            .within(() => {
              cy.getAttached(".fleet-checkbox__input").check({ force: true });
            });
          cy.findAllByText(/detect presence/i).click();
        });

        cy.getAttached(".query-form__button-wrap").within(() => {
          cy.findByRole("button", { name: /run/i }).click();
        });
        cy.contains("h3", /teams/i).should("exist");
        cy.contains(".selector-name", /apples/i).should("exist");
      });
    });
    describe("Manage policies page", () => {
      beforeEach(() => cy.visit("/policies/manage"));
      it("hides manage automations button", () => {
        cy.findByText(/manage hosts/i).should("not.exist");
      });
      it("allows global maintainer to add a new policy", () => {
        cy.getAttached(".button-wrap")
          .findByRole("button", { name: /add a polic/i })
          .click();
        // Add a default policy
        cy.findByText(/gatekeeper enabled/i).click();
        cy.getAttached(".policy-form__button-wrap").within(() => {
          cy.findByRole("button", { name: /run/i }).should("exist");
          cy.findByRole("button", { name: /save policy/i }).click();
        });
        cy.findByRole("button", { name: /^Save$/ }).click();
        cy.findByText(/policy created/i).should("exist");
      });
      it("allows global maintainer to delete a team policy", () => {
        cy.visit("/policies/manage");
        cy.getAttached(".Select-control").within(() => {
          cy.findByText(/all teams/i).click();
        });
        cy.getAttached(".Select-menu")
          .contains(/apples/i)
          .click();
        cy.getAttached("tbody").within(() => {
          cy.getAttached("tr")
            .first()
            .within(() => {
              cy.getAttached(".fleet-checkbox__input").check({
                force: true,
              });
            });
        });
        cy.findByRole("button", { name: /delete/i }).click();
        cy.getAttached(".remove-policies-modal").within(() => {
          cy.findByRole("button", { name: /delete/i }).should("exist");
          cy.findByRole("button", { name: /cancel/i }).click();
        });
      });
      it("allows global maintainer to edit a team policy", () => {
        cy.visit("policies/manage");
        cy.findByText(/all teams/i).click();
        cy.findByText(/apples/i).click();
        cy.getAttached("tbody").within(() => {
          cy.getAttached("tr")
            .first()
            .within(() => {
              cy.getAttached(".fleet-checkbox__input").check({
                force: true,
              });
            });
        });
        cy.findByText(/filevault enabled/i).click();
        cy.getAttached(".policy-form__button-wrap").within(() => {
          cy.findByRole("button", { name: /run/i }).should("exist");
          cy.findByRole("button", { name: /save/i }).should("exist");
        });
      });
    });
    describe("User profile page", () => {
      it("renders elements according to role-based access controls", () => {
        cy.visit("/profile");
        cy.getAttached(".user-settings__additional").within(() => {
          cy.findByText(/team/i)
            .next()
            .contains(/global/i);
          cy.findByText("Role")
            .next()
            .contains(/maintainer/i);
        });
      });
    });
  });
});