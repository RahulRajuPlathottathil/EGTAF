class PageRepo {
    get drp_dropDown() {
        return cy.get('#dropdown-class-example')
    }

    get btn_chooseFile() {
        return cy.get('input[type="file"]')
    }

    get btn_openTab() {
        cy.get('button.class2')
    }
    get img_Loadedimage() {
        return this.btn_chooseFile.next()
    }
    get txt_EnterName() {
        return cy.get('#name')
    }
    get btn_Alert() {
        return cy.get('#alertbtn')
    }
    get btn_Confirm() {
        return cy.get('#confirmbtn')
    }
    get txt_displayedText() {
        return cy.get('#displayed-text')
    }
    get btn_hide() {
        return cy.get('#hide-textbox')
    }
    get btn_show() {
        return cy.get('#show-textbox')
    }
    get btn_moseHover() {
        return cy.get('.hover-btn')
    }
    get lst_hoverConternt() {
        return cy.get('div.hover-content').find('a')
    }
    get btn_openTab() {
        return cy.get('button#opentab')
    }
    get frame_mainFrame() {
        return cy.get('#courses-iframe')
    }
    get nav_mainNavigations() {
        return cy.get('@iframe').find('#menu-top-navigation >li>a')
    }
    do_EGframeSwitch() {
        cy.switchToFrame(this.frame_mainFrame)
        return this.nav_mainNavigations
    }
    do_dropDownSelection(valueToSelect) {
        this.drp_dropDown.select(valueToSelect)
    }

    do_uploadImage(image) {
        this.btn_chooseFile.selectFile(image)
    }

    do_fillName(name) {
        this.txt_EnterName.clear().type(name)
    }
    do_verifyAlert(expectedText) {
        this.btn_Alert.click()
        cy.verifyAlertContainsText(expectedText)
    }

    do_grabAlertMessage(type, element, expectedText) {
        cy.verifyAlertContainsText(type, element, expectedText)
    }
    do_hideElement(info) {
        this.txt_displayedText.type(info)
        this.btn_hide.click()
        return this.txt_displayedText
    }
    do_showElement() {
        this.btn_show.click()
        return this.txt_displayedText
    }

    do_mouserHover() {
        this.btn_moseHover.trigger('mouseover')
        return this.lst_hoverConternt
    }

    do_openInSameTab() {
        cy.openTab(this.btn_openTab)
    }
}
export default PageRepo
