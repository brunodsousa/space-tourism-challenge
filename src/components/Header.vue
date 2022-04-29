<template>
  <div class="container">
    <div class="container__logo">
      <img src="/images/shared/logo.svg" alt="Icon - Space Tourism" />
    </div>
    <div class="container__divider">
      <div class="container__divider--line"></div>
    </div>
    <div class="container__nav">
      <ul>
        <li v-for="(view, index) in views" :key="index">
          <router-link :to="view.routePath">
            <span>0{{ index }}</span> {{ view.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      views: [
        {
          name: "Home",
          routePath: "/",
        },
        {
          name: "Destination",
          routePath: "/destination",
        },
        {
          name: "Crew",
          routePath: "/crew",
        },
        {
          name: "Technology",
          routePath: "/technology",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

.container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 96px;
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
          box-shadow: 0 -3px 0 0 $white inset;
          transition: box-shadow 200ms;
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
