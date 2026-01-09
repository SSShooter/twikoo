<template>
  <button
    class="tk-button"
    :class="[
      `tk-button--${type}`,
      `tk-button--${size}`,
      {
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TkButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'text', 'info'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['mini', 'small', 'medium'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (event) {
      if (!this.disabled && !this.loading) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style scoped>
.tk-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  font-weight: 500;
  font-family: inherit;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
  border: 1px solid transparent;
}

/* Size variants */
.tk-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  line-height: 1.5;
}

.tk-button--small {
  padding: 8px 16px;
  font-size: 13px;
  line-height: 1.5;
  border-radius: 5px;
}

.tk-button--mini {
  padding: 5px 12px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 4px;
}

/* Type variants */
.tk-button--default {
  color: currentColor;
  background: rgba(144, 147, 153, 0.08);
  border-color: rgba(144, 147, 153, 0.25);
}

.tk-button--default:hover:not(.is-disabled) {
  color: rgb(var(--tk-primary-color-rgb));
  background: rgba(var(--tk-primary-color-rgb), 0.08);
  border-color: rgba(var(--tk-primary-color-rgb), 0.4);
}

.tk-button--default:active:not(.is-disabled) {
  background: rgba(var(--tk-primary-color-rgb), 0.12);
}

.tk-button--primary {
  color: #ffffff;
  background: rgb(var(--tk-primary-color-rgb));
  border-color: transparent;
}

.tk-button--primary:hover:not(.is-disabled) {
  background: rgba(var(--tk-primary-color-rgb), 0.9);
}

.tk-button--primary:active:not(.is-disabled) {
  background: rgba(var(--tk-primary-color-rgb), 0.8);
}

.tk-button--text {
  color: rgb(var(--tk-primary-color-rgb));
  background: transparent;
  border-color: transparent;
  box-shadow: none;
  padding-left: 8px;
  padding-right: 8px;
}

.tk-button--text:hover:not(.is-disabled) {
  background: rgba(var(--tk-primary-color-rgb), 0.08);
}

.tk-button--text:active:not(.is-disabled) {
  background: rgba(var(--tk-primary-color-rgb), 0.12);
}

.tk-button--info {
  color: currentColor;
  background: rgba(144, 147, 153, 0.15);
  border-color: rgba(144, 147, 153, 0.3);
}

.tk-button--info:hover:not(.is-disabled) {
  background: rgba(144, 147, 153, 0.25);
  border-color: rgba(144, 147, 153, 0.4);
}

.tk-button--info:active:not(.is-disabled) {
  background: rgba(144, 147, 153, 0.3);
}

/* Disabled state */
.tk-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.5;
  box-shadow: none;
}

.tk-button--primary.is-disabled {
  color: rgba(255, 255, 255, 0.7);
  background: rgba(var(--tk-primary-color-rgb), 0.5);
}

/* Focus state for accessibility */
.tk-button:focus-visible {
  outline: 2px solid rgba(var(--tk-primary-color-rgb), 0.5);
  outline-offset: 2px;
}

/* Loading state */
.tk-button.is-loading {
  cursor: wait;
  opacity: 0.7;
}

.tk-button + .tk-button {
  margin-left: 10px;
}
</style>
