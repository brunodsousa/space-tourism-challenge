<template>
  <div id="crew">
    <Header />
    <div class="crew__title">
      <h2><span>02</span> Meet your crew</h2>
    </div>
    <div class="crew__content">
      <carousel
        class="crew__carousel"
        :perPage="1"
        :mouse-drag="true"
        :pagination-enabled="false"
        :navigateTo="selectedPerson"
      >
        <slide
          class="carousel__slide"
          v-for="(person, index) in crew"
          :key="index"
        >
          <div class="slide__text">
            <div class="text__container">
              <h4>{{ person.role }}</h4>
              <h3>{{ person.name }}</h3>
              <p>{{ person.bio }}</p>
            </div>
            <div class="slide__pagination">
              <ul>
                <li
                  v-for="(navCrew, index) in crew"
                  :key="index"
                  @click="handleNavigationList(index)"
                  :class="{ active: person.name == navCrew.name }"
                ></li>
              </ul>
            </div>
          </div>
          <div class="slide__image">
            <img
              :src="person.images.png"
              :alt="`Crew - ${person.name} | ${person.role}`"
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
  name: "Crew",
  components: {
    Header,
  },
  data() {
    return {
      crew: data.crew,
      selectedPerson: 0,
    };
  },
  methods: {
    handleNavigationList(index) {
      this.selectedPerson = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

#crew {
  min-height: 100vh;
  background: url("../../public/images/crew/background-crew-desktop.jpg") center /
    cover no-repeat;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .crew__title {
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

  .crew__content {
    width: 100%;
    height: calc(85vh - 128px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-end;

    .content__carousel,
    .carousel__slide {
      width: 100%;
    }

    .carousel__slide {
      display: flex;
      justify-content: space-around;
      padding-left: 15%;

      .slide__text {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding-bottom: 2rem;
        flex-grow: 1;

        .text__container {
          width: 100%;
          height: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          color: $white;

          h3 {
            @include heading(3);
          }

          h4 {
            @include heading(4);
            color: rgba($white, 0.6);
          }

          p {
            @include bodyText;
            max-width: 80%;
          }
        }

        .slide__pagination {
          height: 5%;
          width: 55%;

          ul {
            height: 100%;
            list-style: none;
            display: flex;
            gap: 1rem;

            li {
              height: 12px;
              width: 12px;
              border-radius: 50%;
              background-color: rgba($white, 0.2);

              &:hover {
                background-color: rgba($white, 0.6);
              }
            }
          }
          .active {
            background-color: $white;
          }
        }
      }

      .slide__image {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        img {
          width: 65%;
        }
      }
    }
  }
}
</style>
