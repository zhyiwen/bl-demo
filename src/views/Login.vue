<template>
  <div class="box login">
    <div class="logo-cont">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <div class="form-cont">
      <div class="input-group">
        <input type="text" placeholder="请输入用户名" />
        <font-awesome-icon icon="user" class="input-icon"></font-awesome-icon>
      </div>
      <div class="input-group">
        <input type="text" placeholder="请输入密码" />
        <font-awesome-icon icon="key" class="input-icon"></font-awesome-icon>
      </div>
      <van-button round block type="info">登录</van-button>
    </div>
  </div>
</template>
