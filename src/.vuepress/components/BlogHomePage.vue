<script setup lang="ts">
import { computed, h, resolveComponent } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/MarkdownContent";
import { DropTransition } from "@theme-hope/components/transitions/index";
import ArticleList from "@theme-hope/modules/blog/components/ArticleList";
import ProjectPanel from "@theme-hope/modules/blog/components/ProjectPanel";
import { useArticles } from "@theme-hope/modules/blog/composables/index";

const articles = useArticles();
const frontmatter = usePageFrontmatter();
const projects = computed(() => frontmatter.value.projects ?? []);

const SearchBox = h(resolveComponent("SearchBox"));
</script>

<template>
  <div class="vp-page vp-blog-home">
    <div class="blog-page-wrapper">
      <main id="main-content" class="vp-blog-main">
        <div class="search">
          <SearchBox />
        </div>
        <DropTransition v-if="projects.length" appear delay="0.16">
          <ProjectPanel :items="projects"/>
        </DropTransition>
        <DropTransition appear delay="0.24">
          <ArticleList :items="articles.items"/>
        </DropTransition>
      </main>
    </div>
    <DropTransition appear delay="0.28">
      <MarkdownContent/>
    </DropTransition>
  </div>
</template>

<style>
.vp-blog-main {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
