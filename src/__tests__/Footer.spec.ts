import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '../components/Footer.vue'

describe('Footer Component', () => {
  const wrapper = mount(Footer)
  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
