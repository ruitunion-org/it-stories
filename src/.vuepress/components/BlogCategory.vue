<script setup lang="ts">
import { defineComponent, h } from "vue";
import { usePageData, usePageFrontmatter } from "vuepress/client";
import { DropTransition } from "@theme-hope/components/transitions/index";
import ArticleList from "@theme-hope/modules/blog/components/ArticleList";
import BlogWrapper from "@theme-hope/modules/blog/components/BlogWrapper";
import CategoryList from "@theme-hope/modules/blog/components/CategoryList";
import InfoPanel from "@theme-hope/modules/blog/components/InfoPanel";
import TagList from "@theme-hope/modules/blog/components/TagList";
import { useCategoryMap, useTagMap, } from "@theme-hope/modules/blog/composables/index";

const page = usePageData();
const frontmatter = usePageFrontmatter();
const categoryMap = useCategoryMap();
const tagMap = useTagMap();

function getArticles(fb: { key?: string, name?: string }) {
  return fb.name
      ? fb.key === "category"
          ? categoryMap.value.map[fb.name].items
          : fb.key === "tag"
              ? tagMap.value.map[fb.name].items
              : []
      : [];
}
</script>

<template>
  <BlogWrapper>
    <div class="vp-page vp-blog">
      <div class= "blog-page-wrapper">
        <main id="main-content" class="vp-blog-main">
          <DropTransition>
            <CategoryList v-if="$frontmatter.blog.key === 'category'" />
            <TagList v-else-if="$frontmatter.blog.key === 'tag'" />
          </DropTransition>
          <DropTransition v-if="$frontmatter.blog.name" appear delay="0.24">
            <ArticleList :key="page.path" :items="getArticles($frontmatter.blog)" />
          </DropTransition>
        </main>
      </div>
    </div>
  </BlogWrapper>
</template>
