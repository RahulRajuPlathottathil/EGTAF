/// <reference types="Cypress"/>

const { describe, it } = require('mocha')
import PageRepo from '../../support/pageObjects/PageRepo'

describe('Practice Page Test Suite', function () {
    beforeEach(function () {
        cy.visit(Cypress.env('baseUrl'))
        this.pageRepo = new PageRepo()
        cy.fixture('data').then(function (data) {
            this.data = data
        })
    })
    it('Practice page dropdown test', function () {
        const { options, defaultSelection, valueToSelect } = this.data.dropdown
        this.pageRepo.drp_dropDown
            .should('exist')
            .and('be.visible')
            .and('be.enabled')
        this.pageRepo.drp_dropDown
            .children()
            .each(($ele, index, $list) =>
                cy.wrap($ele).should('have.value', options[index])
            )
        this.pageRepo.drp_dropDown.should('have.value', defaultSelection)
        this.pageRepo.do_dropDownSelection(valueToSelect)
    })

    it('Practice page image upload test', function () {
        const image = this.data.imageUpload
        this.pageRepo.btn_chooseFile
            .should('exist')
            .and('be.visible')
            .and('be.enabled')
        this.pageRepo.do_uploadImage(image)
        this.pageRepo.img_Loadedimage.should('exist').and('be.visible')
    })

    it('Practice page alert test', function () {
        const { type, name, expectedText } = this.data.alert
        const pageRepo = new PageRepo()
        this.pageRepo.txt_EnterName.should('exist').and('be.enabled')
        this.pageRepo.do_fillName(name)
        this.pageRepo.do_grabAlertMessage(
            type,
            this.pageRepo.btn_Alert,
            expectedText
        )
    })

    it('Practice page confirm alert test', function () {
        const { type, name, expectedText } = this.data.confirm
        this.pageRepo.txt_EnterName.should('exist').and('be.enabled')
        this.pageRepo.do_fillName(name)
        this.pageRepo.do_grabAlertMessage(
            type,
            this.pageRepo.btn_Confirm,
            expectedText
        )
    })
    it('Practice page hide and show an element', function () {
        this.pageRepo.txt_displayedText.should('be.visible')
        this.pageRepo.do_hideElement('Hide Me!!').should('not.be.visible')
        this.pageRepo.do_showElement().should('be.visible')
    })

    it('Practice page mouse hover test', function () {
        const { ul } = this.data.mouseHover
        let pageRepo = new PageRepo()
        pageRepo.btn_moseHover.should('exist').and('be.visible')
        pageRepo.do_mouserHover().each(($ele, index, $list) => {
            cy.wrap($ele).invoke('text').should('equal', ul[index])
        })
    })

    it('Practice page open tab test', function () {
        const { url } = this.data.openTab
        this.pageRepo.do_openInSameTab()
        cy.get('@newUrl').should('equal', url)
    })

    it('Practice page iframe element interaction test', function () {
        const { nav } = this.data.frame_nav
        this.pageRepo.do_EGframeSwitch().each(($ele, index, $list) => {
            cy.wrap($ele).invoke('text').should('contain', nav[index])
        })
    })
})
