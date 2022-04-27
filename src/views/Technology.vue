<template>
  <div id="technology">
    <Header />
    <div class="technology__title">
      <h2><span>03</span> Space Launch 101</h2>
    </div>
    <div class="technology__content">
      <carousel
        class="content__carousel"
        :perPage="1"
        :mouse-drag="true"
        :pagination-enabled="false"
        :navigateTo="selectedTechnology"
      >
        <slide
          class="carousel__slide"
          v-for="(technology, index) in technologies"
          :key="index"
        >
          <div class="slide__pagination">
            <ul>
              <li
                v-for="(navTechnology, index) in technologies"
                :key="index"
                @click="handleNavigationList(index)"
              >
                <div class="pagination__button">
                  <p>{{ index == 0 ? 1 : index + 1 }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="slide__text">
            <div class="text__container">
              <p>THE TERMINOLOGY…</p>
              <h3>{{ technology.name }}</h3>
              <p>{{ technology.description }}</p>
            </div>
          </div>
          <div class="slide__image">
            <img
              :src="technology.images.portrait"
              :alt="`Technology - ${technology.name}`"
            />
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import data from "../assets/data/data.json";

export default {
  name: "Technology",
  components: {
    Header,
  },
  data() {
    return {
      technologies: data.technology,
      selectedTechnology: 0,
    };
  },
  methods: {
    handleNavigationList(index) {
      this.selectedTechnology = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

#technology {
  min-height: 100vh;
  background: url("../../public/images/technology/background-technology-desktop.jpg")
    center / cover no-repeat;

  padding-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .technology__title {
    width: 100%;
    height: 5vh;
    margin: 50px 0 0 0;
    padding-left: 15%;

    h2 {
      @include heading(5);
      color: $white;

      span {
        font-weight: 600;
        color: rgba($white, 0.6);
        margin-right: 1rem;
      }
    }
  }

  .technology__content {
    width: 100%;
    height: calc(85vh - 128px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .content__carousel,
    .carousel__slide {
      width: 100%;
    }

    .content__carousel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 90%;
    }

    .carousel__slide {
      display: flex;
      justify-content: flex-end;
      padding-left: 15%;
    }

    .slide__pagination {
      width: 10%;

      ul {
        height: 100%;
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        li {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .pagination__button {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            border: 1px solid $light-blue;
            display: grid;
            place-content: center;

            p {
              @include heading(4);
              color: $light-blue;
            }
          }
        }
      }
    }

    .slide__text {
      width: 45%;
      display: flex;
      align-items: center;

      .text__container {
        max-width: 100%;
        padding-bottom: 0.5rem;
        color: $white;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p:nth-of-type(1) {
          @include navText;
        }

        p:nth-of-type(2) {
          @include bodyText;
          max-width: 50%;
          margin-top: 1rem;
        }

        h3 {
          @include heading(3);
          margin-top: 0.5rem;
        }
      }
    }

    .slide__image {
      width: 45%;
      padding-right: 1px;
      text-align: end;

      img {
        max-width: 449px;
      }
    }
  }
}
</style>
