<template>
  <button
    :class="[
      `vue-button vue-button-${type}`,
      { 'is-ghost': ghost, 'is-round': round, 'is-disabled': disabled },
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <i v-if="icon" :class="`icofont-duotone icofont-${icon}`"></i>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "vue-button",
  props: {
    type: {
      type: String,
      default: "default",
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  emits: ["click"],
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
});
</script>
<style scoped lang="scss">
.vue-button {
  box-sizing: border-box;
  vertical-align: middle;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  border: 1px solid #ccc;
  cursor: pointer;
  outline: none;
  background-color: #fff;
  color: #333;
  transition: all 0.3s;
  margin: 4px;
  &:hover {
    border-color: #409eff;
    color: #409eff;
  }
  &:active {
    background-color: #409eff;
    color: #fff;
  }

  &.is-round {
    border-radius: 4px;
  }

  &.is-disabled {
    cursor: not-allowed;
    color: #ccc;
    background-color: #f5f7fa;
    border-color: #dcdfe6;
  }

  &.vue-button-primary {
    border-color: #409eff;
    background-color: #409eff;
    color: #fff;
    &:hover {
      border-color: #66b5f7;
      background-color: #66b5f7;
    }
    &.is-ghost {
      background-color: #fff;
      color: #409eff;
      &:hover {
        color: #66b5f7;
        border-color: #66b5f7;
      }
    }
    &.is-disabled {
      cursor: not-allowed;
      color: #ccc;
      background-color: #f5f7fa;
      border-color: #dcdfe6;
    }
  }
  &.vue-button-danger {
    border-color: #f40;
    background-color: #f40;
    color: #fff;
    &:hover {
      border-color: #f57b4f;
      background-color: #f57b4f;
    }
    &.is-ghost {
      background-color: #fff;
      color: #f40;
      &:hover {
        border-color: #f57b4f;
        color: #f57b4f;
      }
    }
    &.is-disabled {
      cursor: not-allowed;
      color: #ccc;
      background-color: #f5f7fa;
      border-color: #dcdfe6;
    }
  }
  &.vue-button-success {
    border-color: #10f110;
    background-color: #10f110;
    color: #fff;
    &:hover {
      border-color: #6fe36f;
      background-color: #6fe36f;
    }
    &.is-ghost {
      background-color: #fff;
      color: #10f110;
      &:hover {
        border-color: #6fe36f;
        color: #6fe36f;
      }
    }
    &.is-disabled {
      cursor: not-allowed;
      color: #ccc;
      background-color: #f5f7fa;
      border-color: #dcdfe6;
    }
  }
  &.vue-button-warning {
    border-color: #fdae03;
    background-color: #fdae03;
    color: #fff;
    &:hover {
      border-color: #f8d484;
      background-color: #f8d484;
    }
    &.is-ghost {
      background-color: #fff;
      color: #fdae03;
      &:hover {
        border-color: #f8d484;
        color: #f8d484;
      }
    }
    &.is-disabled {
      cursor: not-allowed;
      color: #ccc;
      background-color: #f5f7fa;
      border-color: #dcdfe6;
    }
  }
  &.vue-button-info {
    border-color: #03e5f5;
    background-color: #03e5f5;
    color: #fff;
    &:hover {
      border-color: #6fdfe7;
      background-color: #6fdfe7;
    }
    &.is-ghost {
      background-color: #fff;
      color: #03e5f5;
      &:hover {
        border-color: #6fdfe7;
        color: #6fdfe7;
      }
    }
    &.is-disabled {
      cursor: not-allowed;
      color: #ccc;
      background-color: #f5f7fa;
      border-color: #dcdfe6;
    }
  }

  .icofont-duotone + span {
    margin-left: 4px;
  }
}
</style>
