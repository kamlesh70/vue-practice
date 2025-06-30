import { sum } from "@/utils/test";
import HomeView from "@/views/Home-view.vue";
import { mount } from "@vue/test-utils"

jest.mock('@/utils/test');

describe("Home View", () => {

  const sumMock = sum;
  sumMock.mockReturnValue(10);
  const wrapper = mount(HomeView);

  it('should show heading', async () => {

    const heading = wrapper.find('h1');
    expect(heading.exists()).toBe(true);
    expect(heading.text()).toBe("This is TO-DO application");
    const para = wrapper.find('#test');
    expect(para.text()).toBe("10");

    expect(sumMock).toHaveBeenCalled();
  });
})