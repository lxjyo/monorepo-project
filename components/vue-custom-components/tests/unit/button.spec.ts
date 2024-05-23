import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("default", () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.classes()).toContain("vue-button-default");
  });
  it("primary", () => {
    const wrapper = shallowMount(Button, {
      props: { type: "primary" },
    });
    expect(wrapper.classes()).toContain("vue-button-primary");
  });
  it("danger", () => {
    const wrapper = shallowMount(Button, {
      props: { type: "danger" },
    });
    expect(wrapper.classes()).toContain("vue-button-danger");
  });

  it("ghost", () => {
    const wrapper = shallowMount(Button, {
      props: { ghost: true },
    });
    expect(wrapper.classes()).toContain("is-ghost");
  });

  it("round", () => {
    const wrapper = shallowMount(Button, {
      props: { round: true },
    });
    expect(wrapper.classes()).toContain("is-round");
  });

  it("disabled", () => {
    const wrapper = shallowMount(Button, {
      props: { disabled: true },
    });
    expect(wrapper.classes()).toContain("is-disabled");
    expect(wrapper.attributes()).toHaveProperty("disabled");
  });

  it("slot", () => {
    const wrapper = shallowMount(Button, {
      slots: { default: "click me" },
    });
    expect(wrapper.text()).toContain("click me");
  });

  it("click event", async () => {
    const wrapper = shallowMount(Button, {
      slots: { default: "click me" },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
