/// <reference types="cypress" />

describe('AppBar Functionality', () => {
    beforeEach(() => {
        cy.viewport('iphone-x');
        cy.visit('http://localhost:8100/home');
    });

    it('toggles the navbar and checks links', () => {
        cy.get('[aria-label="Toggle navigation"]', { timeout: 10000 }).should('be.visible').click();

        cy.contains('Home').should('be.visible');
        cy.contains('Feature').should('be.visible');
        cy.contains('Pricing').should('be.visible');
        cy.contains('Contact').should('be.visible');
    });

    it('performs a search action', () => {
        cy.get('[aria-label="Toggle navigation"]').click();
        cy.get('input[placeholder="Search"]').type('London');
        cy.get('button').contains('Search').click();
    });

    it('toggles theme switcher', () => {
        cy.get('[aria-label="Toggle navigation"]').click();
        cy.get('label[for="themeMode"]').should('be.visible').click();
    });

    // it('has working login and signup buttons', () => {
    //     cy.get('[aria-label="Toggle navigation"]').click();

    //     cy.get('ion-router-link[href="/login"]').shadow().find('a').should('be.visible').click();
    //     cy.url().should('include', '/login');

    //     cy.visit('http://localhost:8100/home');
    //     cy.get('[aria-label="Toggle navigation"]').click();

    //     cy.get('ion-router-link[href="/singup"]').shadow().find('a').should('be.visible').click();
    //     cy.url().should('include', '/singup');
    // });
});
