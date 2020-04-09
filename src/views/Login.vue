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
      <p class="a-link">
        还没有账号？<router-link to="/index" class="text-primary"
          >立即注册</router-link
        >
      </p>
    </div>
    <div class="third-party-cont">
      <p class="third-party-title">
        <span>第三方登录</span>
      </p>
      <van-row>
        <van-col span="8">
          <div class="third-party-icon">
            <img src="../assets/img/wechat.png" alt="" />
          </div>
        </van-col>
        <van-col span="8">
          <div class="third-party-icon">
            <img src="../assets/img/qq.png" alt="" />
          </div>
        </van-col>
        <van-col span="8">
          <div class="third-party-icon">
            <img src="../assets/img/weibo.png" alt="" />
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  background-image: url(../assets/img/login-bg.png);
  background-size: cover;
  background-position: center center;
  .logo-cont {
    text-align: center;
    height: 28vh;
    box-sizing: border-box;
    img {
      padding-top: calc(26% - 28px);
      width: 160px;
    }
  }
  .form-cont {
    padding: 0 40px;
    height: 45vh;
    .a-link {
      text-align: center;
      color: #b8b8b8;
      font-size: 0.8rem;
      margin-top: 20px;
      margin-bottom: 0;
    }
  }
  .third-party-cont {
    padding: 0 40px;
    .third-party-title {
      position: relative;
      color: #b8b8b8;
      overflow: hidden;
      text-align: center;
      margin-bottom: 30px;
      span {
        position: relative;
        display: inline-block;
        padding: 0 5px;
        font-size: 0.8rem;
        &::before,
        &::after {
          content: "";
          position: absolute;
          display: inline-block;
          top: 8px;
          height: 1px;
          width: 90px;
          background: #b8b8b8;
        }
        &::before {
          right: 80px;
        }
        &::after {
          left: 80px;
        }
      }
    }
  }
}
.input-group {
  position: relative;
  margin-bottom: 30px;
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #b8b8b8;
    padding: 8px 15px;
    padding-left: 35px;
    box-sizing: border-box;
    font-size: 0.8rem;
    background-color: transparent;
  }
  .input-icon {
    position: absolute;
    color: #2f83ff;
    top: 10px;
    left: 10px;
  }
}
.third-party-icon {
  text-align: center;
  img {
    width: 24px;
  }
}
</style>
