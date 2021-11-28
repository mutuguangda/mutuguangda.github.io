<template>
  <div class="header" :class="{ 'hide': hide }">
    <div class="header-logo">
      <router-link to="/">闹立至库</router-link>
    </div>
    <div class="header-nav navbar">
      <!-- <router-link to="/archive">归档</router-link>
      <router-link to="/about">关于</router-link> -->
      <a href="https://www.notion.so/79fc8e9ca0194acc978dfc77527f01fd">Notion 仓库</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      hide: false
    } 
  },
  mounted() {
    console.log(document.body.scrollHeight);
    // 页面底部到顶部距离
    const that = this
    // const pageTop = document.body.scrollHeight;
    window.addEventListener("scroll", function() {
      // 页面底部到滚动条底部距离
        // console.log('pageTop:' ,pageTop);
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        // console.log('scrollTop:' ,scrollTop);
        // console.log('pageTop - scrollTop:', pageTop - scrollTop);
        if (scrollTop >= 70) {
          console.log('header 隐藏');
          that.hide = true
        }
        else {
          console.log('header 显示');
          that.hide = false
        }
    });
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// 固定位置
.header {
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #f9f7f1;
  z-index: 10;
}

.header {
  transition: transform .5s ease;
}

.header {
  height: $header-height;
  padding: 0 20px;
  border-bottom: $header-b-border;

  &-logo {
    font-size: $logo-size;
    font-weight: 600;
  }

  .header-nav {
    font-size: $nav-size;

    a {
      margin: 0 8px;
    }
  }
}


.navbar a:hover::before {
  transform: scaleX(1);
  visibility: visible;
}

.navbar a {
  position: relative;

  &::before {
    background: #cc493d;
    bottom: 0;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    visibility: hidden;
    width: 100%;
    transition-delay: 0s;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
  }
}

.hide {
  transform: translateY(-100%);
}
</style>