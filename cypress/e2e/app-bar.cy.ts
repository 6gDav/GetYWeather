/// <reference types="cypress" />

describe('AppBar Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8100/home');
    });

    it('should display the logo', () => {
        cy.get('img[alt="GetYWeather icon."]')
            .should('be.visible')
            .and('have.attr', 'src')
            .should('include', 'GetYWeather_appIcon.jpg');
    });

    it('should have correct navigation links', () => {
        cy.get('a[href="/home"]').contains('Home');
        cy.get('a[href="/feature"]').contains('Feature');
        cy.get('a[href="/pricing"]').contains('Pricing');
        cy.get('a[href="/contact"]').contains('Contact');
    });

    it('should allow user to search', () => {
        cy.get('input[type="search"]').type('Weather');
        cy.get('#search-form').find('button[type="button"]').click();
        cy.get('input[type="search"]').should('have.value', 'Weather');
    });

    // it('should toggle theme on checkbox change', () => {
    //     cy.get('input#themeMode').should('not.be.checked');

    //     cy.get('input#themeMode').check({ force: true });
    //     cy.get('label[htmlFor="themeMode"]').should('contain', 'Dark');
    //     cy.get('input#themeMode').uncheck({ force: true });
    //     cy.get('label[htmlFor="themeMode"]').should('contain', 'Light');
    // });


    // it('should navigate to login and signup', () => {
    //     cy.get('a[href="/login"]').should('be.visible').click();
    //     cy.url().should('include', '/login');
    //     cy.go('back');

    //     cy.get('a[href="/singup"]').should('be.visible').click();
    //     cy.url().should('include', '/singup');
    // });
});

