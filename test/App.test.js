/* eslint-disable */
import { mount } from '@vue/test-utils'
import MessageList from '@/MessageList.vue'

describe('MessageList.vue', () => {
    it('increments counter button', () => {
        const wrapper = mount(MessageList);
        expect(wrapper.vm.counter).toBe(0);

        wrapper.find('[jest="increment-button"]').trigger('click')

        expect(wrapper.vm.counter).toBe(1);
    })
    it('h1 tag check', () => {
        const wrapper = mount(MessageList);
        expect(wrapper.vm.msgg).toBe('aravind')
    })
    it('increments or decrement count when button is clicked', () => {
        const wrapper = mount(MessageList)
        const message = wrapper.find('p.navbar-brand').text();
        // const message1 = wrapper.find('h3').text();
        expect(message).toBe('FRUIT STORE');
        // expect(message1).toBe('aravind');
    })
})
