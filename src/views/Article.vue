<template>
  <div class="article">
    <NotionRenderer :blockMap="blockMap"/>
  </div>
</template>

<script>
import { NotionRenderer, getPageBlocks } from "vue-notion";
export default {
  components: { NotionRenderer },
  data: () => ({ 
    blockMap: null,
  }),
  async created() {
    console.log("进入article, 传入数据为:", this.$route.params);
    const articleId = this.$route.params.articleId
    this.blockMap = await getPageBlocks(articleId)
    console.log("blockMap:", this.blockMap);
  },
};
</script>

<style lang="scss">
@import "~vue-notion/src/styles.css";

.article {
  width: $article-width;
  margin: 0 auto;
  padding: $article-padding;
}

.notion {
  font-family: "Noto Serif SC", "PingFang SC", sans-serif;
}

code {
  font-family: "Noto Serif SC", "PingFang SC", sans-serif;
}

.notion-code {
  padding: 16px;
  background-color: lightgrey;
}

.notionx-header {
  text-align: center;
  margin-bottom: 20px;
}

.notionx-meta > span {
  margin-right: 10px;
}

.notionx-meta {
  color: #999;
}

.notionx-tag {
  cursor: pointer;
}
</style> 