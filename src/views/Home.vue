<template>
  <div id="home">
    <Header />
    <div class="home__content">
      <div class="content__text">
        <p>So, you want to travel to</p>
        <h1>Space</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="content__button">
        <button>Explore</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

#home {
  min-height: 100vh;
  background: url("../../public/images/home/background-home-desktop.jpg") center /
    cover no-repeat;

  padding-top: 2rem;
  display: flex;
  flex-direction: column;

  .home__content {
    width: 100%;
    height: 50vh;
    margin: auto 0 3rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .content__text {
      max-width: 426px;
      color: $white;

      p {
        &:nth-of-type(1) {
          @include subheading(1);
        }
        &:last-of-type {
          @include bodyText;
        }
      }

      h1 {
        @include heading(1);
      }
    }

    .content__button {
      min-width: 260px;
      max-width: 420px;
      height: 260px;
      align-self: center;

      button {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 50%;
        background-color: $white;
        color: $dark-blue;
        @include heading(4);

        &:hover {
          outline: 4rem solid rgba(#979797, 0.5);
          transition: outline 2s;
        }
      }
    }
  }
}
</style>
