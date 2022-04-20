<template>
  <div class="container">
    <div class="container__logo">
      <img src="../assets/images/shared/logo.svg" alt="Icon - Space Tourism" />
    </div>
    <div class="container__divider">
      <div class="container__divider--line"></div>
    </div>
    <div class="container__nav">
      <ul>
        <li>
          <a href="#" target="_blank"><span>00</span> Home</a>
        </li>
        <li>
          <a href="#" target="_blank"><span>01</span> Destination</a>
        </li>
        <li>
          <a href="#" target="_blank"><span>02</span> Crew</a>
        </li>
        <li>
          <a href="#" target="_blank"><span>03</span> Technology</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

.container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 6rem;
  width: 100%;

  .container__logo {
    max-width: 45px;
    max-height: 45px;
    margin-right: 4rem;

    img {
      width: 100%;
    }
  }

  .container__divider {
    height: 100%;
    width: 28rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .container__divider--line {
      height: 3rem;
      border-top: 1px solid rgba($light-blue, 0.25);
    }
  }

  .container__nav {
    height: 100%;
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($white, 0.04);
    backdrop-filter: blur(20px);

    ul {
      width: 80%;
      height: 100%;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        height: 100%;
        display: flex;
        align-items: center;

        &:hover {
          border-bottom: 2px solid $white;
          transition: border-bottom 500ms;
        }

        a {
          @include navText;
          text-decoration: none;
          color: $white;

          span {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
