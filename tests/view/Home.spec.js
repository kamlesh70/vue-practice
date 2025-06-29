import HomeView from "@/views/Home-view.vue";
import { mount } from "@vue/test-utils"

describe("Home View", () => {

  const wrapper = mount(HomeView);

  it('should show heading', () => {
    const heading = wrapper.find('h1');
    expect(heading.exists()).toBe(true);
    expect(heading.text()).toBe("This is TO-DO application");
  });
})