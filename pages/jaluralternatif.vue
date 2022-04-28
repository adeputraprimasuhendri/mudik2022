<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:flex-col sm:align-center">
          <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">
            {{ data.title }}
          </h1>
          <p class="mt-5 text-xl text-gray-500 sm:text-center">
            Sumber Data : {{data.source}}
          </p>
        </div>
        <div
          class="
            mt-12
            space-y-4
            sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6
            lg:max-w-4xl lg:mx-auto
            xl:max-w-none xl:mx-0 xl:grid-cols-2
          "
        >
          <div class="flow-root" v-for="item in data.data">
            <ul role="list" class="-mb-8">
              <li>
                <div class="relative pb-8">
                  <span
                    class="
                      absolute
                      top-5
                      left-5
                      -ml-px
                      h-full
                      w-0.5
                      bg-gray-200
                    "
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex items-start space-x-3">
                    <div class="relative">
                      <div>
                        <div class="relative px-1">
                          <div
                            class="
                              h-8
                              w-8
                              bg-gray-100
                              rounded-full
                              ring-8 ring-white
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <!-- Heroicon name: solid/user-circle -->
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 text-green-800"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <div>
                        <div class="text-sm">
                          <a href="#" class="text-2xl text-gray-900 font-bold"
                            >Rute {{ item.rute }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li v-for="item2 in item.data">
                <div class="relative pb-8">
                  <span
                    class="
                      absolute
                      top-5
                      left-5
                      -ml-px
                      h-full
                      w-0.5
                      bg-gray-200
                    "
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex items-start space-x-3">
                    <div>
                      <div class="relative px-1">
                        <div
                          class="
                            h-8
                            w-8
                            bg-gray-100
                            rounded-full
                            ring-8 ring-white
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <!-- Heroicon name: solid/user-circle -->
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1 py-1.5">
                      <div class="text-sm text-gray-500">
                        <a href="#" class="font-medium text-xl  text-gray-900">{{
                          item2.title
                        }}</a>
                        2 Km
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="relative pb-20">
                  <div class="relative flex items-start space-x-3">
                    <div>
                      <div class="relative px-1">
                        <div
                          class="
                            h-8
                            w-8
                            bg-gray-100
                            rounded-full
                            ring-8 ring-white
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <!-- Heroicon name: solid/user-circle -->
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-indigo-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <div>
                        <div class="text-sm">
                          <a href="#" class="font-medium text-gray-900"
                            >Finish</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.getData();
  },
  fetchOnServer: false,
  data() {
    return {
      data: [],
    };
  },
  methods: {
    async getData() {
      var res = await this.$axios.get("alternatif.json");
      this.data = res.data;
    },
  },
};
</script>