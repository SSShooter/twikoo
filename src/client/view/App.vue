<template>
  <div id="twikoo" class="twikoo">
    <tk-comments @admin="showAdmin = true" :show-admin-entry="showAdminEntry" />
    <tk-footer />
    <tk-admin :show="showAdmin" @close="showAdmin = false" />
  </div>
</template>

<script>
import TkComments from './components/TkComments.vue'
import TkFooter from './components/TkFooter.vue'
import TkAdmin from './components/TkAdmin.vue'

export default {
  components: {
    TkComments,
    TkFooter,
    TkAdmin
  },
  data () {
    return {
      showAdmin: false,
      showAdminEntry: false
    }
  },
  methods: {
    onShowAdminEntry (showAdminEntry) {
      this.showAdminEntry = showAdminEntry
    }
  }
}
</script>

<style>
.twikoo {
  position: relative;
  --tk-primary-color-rgb: 64, 158, 255;
}
.twikoo svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

/* 全局 CSS */
.tk-expand {
  width: 100%;
  cursor: pointer;
  padding: 0.75em;
  text-align: center;
  font-size: 0.875em;
  color: rgba(var(--tk-primary-color-rgb, 64, 158, 255), 0.8);
  background: transparent;
  border-radius: 4px;
  transition: all 0.25s ease;
}
.tk-expand:hover {
  color: rgb(var(--tk-primary-color-rgb, 64, 158, 255));
  background: rgba(var(--tk-primary-color-rgb, 64, 158, 255), 0.04);
}
.tk-expand:active {
  background: rgba(var(--tk-primary-color-rgb, 64, 158, 255), 0.08);
}
.tk-content img {
  max-width: 300px;
  max-height: 300px;
  vertical-align: middle;
}
.tk-owo-emotion,
.twikoo .OwO-item img {
  width: 3em;
  height: auto;
}

/* element-ui overwrite */
.twikoo .el-input__inner,
.twikoo .el-textarea__inner {
  color: currentColor;
  background-color: transparent;
  border-color: rgba(144,147,153,0.31);
}
.twikoo .el-input__inner:hover,
.twikoo .el-textarea__inner:hover {
  border-color: rgba(144,147,153,0.50);
}
.twikoo .el-input__inner:focus,
.twikoo .el-textarea__inner:focus {
  border-color: rgb(var(--tk-primary-color-rgb));
}
.twikoo .el-input-group__append,
.twikoo .el-input-group__prepend {
  color: currentColor;
  background-clip: padding-box;
  background-color: rgba(144,147,153,0.13);
  border-color: rgba(144,147,153,0.31);
}
.twikoo .el-loading-mask {
  background-color: transparent;
  backdrop-filter: opacity(20%);
}
.twikoo .el-textarea .el-input__count {
  color: currentColor;
  background: transparent;
}
.tk-admin-warn {
  padding: 1rem 1.5rem;
  background-color: #fff7d0;
  border-left: 0.5rem solid #e7c000;
  color: #6b5900;
  align-self: stretch;
}
/* loading svg color */
.twikoo .el-loading-spinner .path {
  stroke: rgb(var(--tk-primary-color-rgb));
}
</style>
