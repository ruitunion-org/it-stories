<script setup lang="ts">
import { computed, defineComponent, h } from "vue";
import { usePageFrontmatter } from "vuepress/client";
import MarkdownContent from "@theme-hope/components/MarkdownContent";
import { DropTransition } from "@theme-hope/components/transitions/index";
import ArticleList from "@theme-hope/modules/blog/components/ArticleList";
import BlogHero from "@theme-hope/modules/blog/components/BlogHero";
import ProjectPanel from "@theme-hope/modules/blog/components/ProjectPanel";
import { useArticles } from "@theme-hope/modules/blog/composables/index";

const articles = useArticles();
const frontmatter = usePageFrontmatter();
const projects = computed(() => frontmatter.value.projects ?? []);
</script>

<template>
  <div class="vp-page vp-blog-home">
    <div class="blog-page-wrapper">
      <main id="main-content" class="vp-blog-main">
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
