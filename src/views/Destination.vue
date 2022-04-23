<template>
  <div id="destination">
    <Header />
    <div class="destination__title">
      <h2><span>01</span> Pick your destination</h2>
    </div>
    <div class="destination__content">
      <carousel
        class="content__carousel"
        :perPage="1"
        :mouse-drag="true"
        :pagination-enabled="false"
        :navigateTo="destinationSelected"
      >
        <slide
          class="carousel__slide"
          v-for="(destination, index) in destinations"
          :key="index"
        >
          <div class="slide__image">
            <img
              :src="destination.images.png"
              :alt="`Destination - ${destination.name}`"
            />
          </div>
          <div class="slide__text">
            <div class="slide__pagination">
              <ul>
                <li
                  v-for="(destinationNav, index) in destinations"
                  :key="index"
                  @click="handleNavigationList(index)"
                >
                  {{ destinationNav.name }}
                </li>
              </ul>
            </div>
            <div class="text__container">
              <h3>{{ destination.name }}</h3>
              <p>{{ destination.description }}</p>
              <div class="text__divider"></div>
              <div class="text__travel-details">
                <div class="travel-details__distance">
                  <p class="travel-details__title">AVG. Distance</p>
                  <p class="travel-details__info">{{ destination.distance }}</p>
                </div>
                <div class="travel-details__time">
                  <p class="travel-details__title">EST. Travel Time</p>
                  <p class="travel-details__info">{{ destination.travel }}</p>
                </div>
              </div>
            </div>
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
  name: "Destination",
  components: {
    Header,
  },
  data() {
    return {
      destinations: data.destinations,
      destinationSelected: 0,
    };
  },
  methods: {
    handleNavigationList(index) {
      this.destinationSelected = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/main.scss";

#destination {
  min-height: 100vh;
  background: url("../../public/images/destination/background-destination-desktop.jpg")
    center / cover no-repeat;

  padding-top: 2rem;
  display: flex;
  flex-direction: column;

  .destination__title {
    width: 100%;
    height: 5vh;
    margin: auto 0 0 0;
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

  .destination__content {
    width: 100%;
    height: 60vh;
    margin: auto 0 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .content__carousel,
    .carousel__slide {
      width: 100%;
      flex-grow: 1;
    }

    .carousel__slide {
      display: flex;
      justify-content: space-around;

      .slide__image {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        img {
          width: 60%;
        }
      }

      .slide__text {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;

        .slide__pagination {
          height: 10%;
          width: 55%;

          ul {
            height: 100%;
            list-style: none;
            display: flex;
            gap: 2rem;

            li {
              height: 100%;
              display: flex;
              align-items: center;
              padding-bottom: 10px;
              @include navText;
              color: rgba($white, 0.6);

              &:hover {
                box-shadow: 0 -2px 0 0 $white inset;
                transition: box-shadow 200ms;
              }
            }
          }
        }

        .text__container {
          width: 55%;
          height: 90%;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          color: $white;
          h3 {
            @include heading(2);
          }

          p {
            &:first-of-type {
              @include bodyText;
            }
          }

          .text__divider {
            width: 100%;
            border-top: 1px solid $light-blue;
          }

          .text__travel-details {
            width: 100%;
            display: flex;
            gap: 2rem;

            .travel-details__distance,
            .travel-details__time {
              width: 45%;

              .travel-details__title {
                @include subheading(2);
              }
              .travel-details__info {
                @include subheading(1);
              }
            }
          }
        }
      }
    }
  }
}
</style>
