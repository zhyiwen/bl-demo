<template>
  <div class="home">
    <van-nav-bar title="综合展示" class="theme-bg"></van-nav-bar>
    <van-tabbar route>
      <van-tabbar-item replace to="/index" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/home" icon="flag-o">
        GIS地图
      </van-tabbar-item>
      <van-tabbar-item>
        
      </van-tabbar-item>
      <van-tabbar-item replace to="/index" icon="chat-o" info="5">
        消息
        </van-tabbar-item>
      <van-tabbar-item replace to="/index" icon="user-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
    <van-grid :gutter="10" :border="false">
        <van-grid-item icon="shop-o" text="shop" />
        <van-grid-item icon="award-o" text="award" />
        <van-grid-item icon="cluster-o" text="cluster" />
        <van-grid-item icon="balance-o" text="balance" />
        <van-grid-item icon="birthday-cake-o" text="birthday" />
        <van-grid-item icon="bar-chart-o" text="bar-chart" />
        <van-grid-item icon="hotel-o" text="hotel" />
        <van-grid-item icon="desktop-o" text="desktop" />
      </van-grid>
  </div>
</template>


