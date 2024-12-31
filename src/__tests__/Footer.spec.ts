import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '../components/Footer.vue'

describe('Footer Component', () => {
  const wrapper = mount(Footer)
  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render the correct text', () => {
    expect(wrapper.text()).toMatch(/taha zoabi/i)
  })

  it('should render the correct year', () => {
    const year = new Date().getFullYear()
    expect(wrapper.text()).toMatch(year.toString())
  })
})

