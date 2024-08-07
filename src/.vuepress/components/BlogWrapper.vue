<script setup lang="ts">
import { defineComponent, h } from "vue";
import CommonWrapper from "@theme-hope/components/CommonWrapper";
import SkipLink from "@theme-hope/components/SkipLink";
</script>

<template>
  <SkipLink />
  <CommonWrapper noSidebar noToc>
    <slot />
  </CommonWrapper>
</template>
