<script setup lang="ts">
import { usePageData } from "vuepress/client";
import { computed, h, resolveComponent } from "vue";

import { DropTransition } from "@theme-hope/components/transitions/index";
import ArticleList from "@theme-hope/modules/blog/components/ArticleList";
import BlogWrapper from "@theme-hope/modules/blog/components/BlogWrapper";
import { useArticles } from "@theme-hope/modules/blog/composables/index";

const page = usePageData();
const articles = useArticles();

const SearchBox = h(resolveComponent("SearchBox"));
const minimalArticles = computed(() => articles.value.items.map(({ info: { v, e, ...info }, ...article }) => ({
  ...article,
  info
})))
</script>

<template>
  <BlogWrapper>
    <div class="vp-page vp-blog">
      <div class="blog-page-wrapper">
        <main id="main-content" class="vp-blog-main">
          <div class="search">
            <SearchBox />
          </div>
          <DropTransition :appear="true" :delay="0.24">
            <ArticleList :key="page.path" :items="minimalArticles" />
          </DropTransition>
        </main>
      </div>
    </div>
  </BlogWrapper>
</template>

<style>
.vp-blog-main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 780px;
}
.vp-article-list {
  margin-top: 0;
  padding-top: 0;
}
.search > .search-pro-button {
  margin: 2rem 0;
  width: 100%;
  box-sizing: border-box;
  height: 2rem;
  display: flex;
  justify-content: space-between
}
</style>
