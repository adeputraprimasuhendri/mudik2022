<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="m-10">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 sm:text-center">
          {{data.title}}
        </h1>
        <p class="mt-5 text-xl text-gray-500 sm:text-center">
          Sumber Data : {{data.source}}
        </p>
      </div>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <a
          class="
            relative
            bg-white
            pt-5
            px-4
            pb-12
            sm:pt-6 sm:px-6
            shadow
            rounded-lg
            overflow-hidden
          "
          v-for="item in data.data"
          :href="'tel:'+item.phone"
        >
          <dt>
            <div class="absolute rounded-md p-1">
              <!-- Heroicon name: outline/users -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </dt>
          <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p class="text-2xl font-semibold text-gray-900">{{ item.phone }}</p>

            <div
              class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6"
            >
              <div class="text-sm">
                <a href="#" class="font-medium">{{ item.name }}</a>
              </div>
            </div>
          </dd>
        </a>
      </dl>
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
      var res = await this.$axios.get("nomor.json");
      this.data = res.data;
    },
  },
};
</script>