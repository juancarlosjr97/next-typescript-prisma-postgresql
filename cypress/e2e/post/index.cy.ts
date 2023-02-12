/// <reference types="cypress" />

import { beforeEach, cy, describe, it } from "local-cypress";

describe("Adding E2E for Post user actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Opening homepage and load published posts without any published post", () => {
    cy.get(`[data-testid="component-loading"]`).should("be.visible");

    cy.contains("Posts published not found").should("be.visible");
  });

  it("Create post as draft", () => {
    cy.get(`[data-testid="link-create-draft"]`).click();

    const title = `Title - ${new Date().getTime()}`;

    const content = `Content - ${new Date().getTime()}`;

    cy.get('[data-testid="create-post-title-field"]').type(title);

    cy.get('[data-testid="create-post-content-field"]').type(content);

    cy.get('[data-testid="create-post-submit-button"]').click();

    cy.url().should("include", "post/drafts");

    cy.contains(title).should("be.visible");

    cy.contains(content).should("be.visible");
  });

  it("Create post as draft and delete", () => {
    cy.get(`[data-testid="link-create-draft"]`).click();

    const title = `Title - ${new Date().getTime()}`;

    const content = `Content - ${new Date().getTime()}`;

    cy.get('[data-testid="create-post-title-field"]').type(title);

    cy.get('[data-testid="create-post-content-field"]').type(content);

    cy.get('[data-testid="create-post-submit-button"]').click();

    cy.url().should("include", "post/drafts");

    cy.contains(title).should("be.visible");

    cy.contains(content).should("be.visible");

    cy.get(`[data-testid="link-drafts"]`).click();

    cy.contains(title).click();

    cy.get(`[data-testid="post-delete-button"]`).click();

    cy.get(`[data-testid="link-drafts"]`).click();

    cy.contains(title).should("not.exist");
  });

  it("Create post as draft and publish the post", () => {
    cy.get(`[data-testid="link-create-draft"]`).click();

    const title = `Title - ${new Date().getTime()}`;

    const content = `Content - ${new Date().getTime()}`;

    cy.get('[data-testid="create-post-title-field"]').type(title);

    cy.get('[data-testid="create-post-content-field"]').type(content);

    cy.get('[data-testid="create-post-submit-button"]').click();

    cy.url().should("include", "post/drafts");

    cy.contains(title).should("be.visible");

    cy.contains(content).should("be.visible");

    cy.get(`[data-testid="link-drafts"]`).click();

    cy.contains(title).click();

    cy.get(`[data-testid="post-publish-button"]`).click();

    cy.contains(title).should("be.visible");
  });

  it("Create post as draft, publish the post, delete the post and not longer is visible", () => {
    cy.get(`[data-testid="link-create-draft"]`).click();

    const title = `Title - ${new Date().getTime()}`;

    const content = `Content - ${new Date().getTime()}`;

    cy.get('[data-testid="create-post-title-field"]').type(title);

    cy.get('[data-testid="create-post-content-field"]').type(content);

    cy.get('[data-testid="create-post-submit-button"]').click();

    cy.url().should("include", "post/drafts");

    cy.contains(title).should("be.visible");

    cy.contains(content).should("be.visible");

    cy.get(`[data-testid="link-drafts"]`).click();

    cy.contains(title).click();

    cy.get(`[data-testid="post-publish-button"]`).click();

    cy.contains(title).should("be.visible").click();

    cy.get(`[data-testid="post-delete-button"]`).click();

    cy.contains(title).should("not.exist");
  });
});
