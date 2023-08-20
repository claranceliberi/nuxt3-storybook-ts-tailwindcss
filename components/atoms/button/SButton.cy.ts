import SButton from './SButton.vue'

describe('<SButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(SButton)
  })
})