<template>
  <div class="content">
    <!-- 文章盒子 -->
    <div class="article-box" @click="routeTo(article.id)"
      v-for="(article, i) in articles" :key="i">
        <!-- 文章内容（不包括图片）：标题、分类、描述 -->
        <!-- <div class="article-content" @click="routeTo(article)"> -->
        <div class="article-content">
          <!-- 标题 -->
          <div class="article-header">
            <h2>{{ article.Name }}</h2>
          </div>
          <!-- 分类 --> 
          <div class="article-meta">
            <span>{{ article["Published date"] }}</span>
            <span v-for="(tag, i) in article.Tags" :key="i">
              {{ tag }}
            </span>
            <span>分类</span>
          </div>
          <!-- 描述 -->
          <div class="article-desc">
            {{ article.desc }}
          </div>
        </div>
        <!-- 文章图片 -->
        <div class="article-img">
          <img :src="article.image[0].url" alt="" v-if="article.image">
        </div>
    </div>
  </div>
</template>

<script>
import { getPageTable } from 'vue-notion'
export default {
  name: "Content",
  data: () =>  ({
    articles: null
  }),
  methods: {
    routeTo(articleId) {
      console.log(articleId);
      this.$router.push({ 
        path: `/article/${articleId}`,
      })
    }
  },
  async created() {
    this.articles = await getPageTable("44e58ebb59484fa2b4b4335254bf039c")
    console.log(this.articles);
  }
}
</script>

<style scoped>
.content {
  /* height: 1580px; */
  display: grid;
  grid-template-columns: repeat(3, 30%);
  /* grid-template-columns: repeat(3, 30%); */
  /* grid-template-columns: repeat(auto-fit, minmax(375px, 1fr)); */
  grid-template-rows: repeat(auto-fit, 500px);
  grid-row-gap: 20px;
  grid-column-gap: 5%;
}

.article-box {
  position: relative;
  height: 500px;
}

.content .article-box:nth-child(3n+2)::before {
  content: '';
  background-color: #2f2f2f;
  height: 100%;
  width: 1px;
  position: absolute;
  top: 0;
  left: -8%;
}

.content .article-box:nth-child(3n+3)::before {
  content: '';
  background-color: #2f2f2f;
  height: 100%;
  width: 1px;
  position: absolute;
  top: 0;
  left: -8%;
} 

.article-box {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.article-box:hover .article-header h2 {
  color: #cc493d;
}

.article-header h2 {
  margin: 0;
}

.article-meta span {
  font-size: 16px;
  color: #999;
}

.article-desc {
  margin: 10px 0;
  max-height: 188px;
  font-size: 18px;
  line-height: 30px;
  overflow: hidden; 
  text-overflow:ellipsis; 
}


.article-img {
  flex: 1;
  width: 100%;
  min-height: 220px;
}

.article-img img {
  filter: grayscale(100%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter ease 1s;
}

.article-box:hover .article-img img {
  filter: grayscale(0%);
}
</style>