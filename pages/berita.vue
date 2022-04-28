<template>
    <div>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-gray-50pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
  <div class="absolute inset-0">
    <div class="bg-white h-1/3 sm:h-2/3"></div>
  </div>
  <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">#MudikLebaran</h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Kumpulan berita tentang Mudik Lebaran</p>
    </div>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      
      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden" v-for="(item, index) in data">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" :src="img[index]" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline"> Mudik Lebaran</a>
            </p>
            <a :href="item.link" target="_blank" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">{{item.title.rendered}}</p>
              <p class="mt-3 text-base text-gray-500" v-html="item.excerpt.rendered">{{item.excerpt.rendered}}</p>
            </a>
          </div>
        </div>
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
      img:[]
    };
  },
  methods: {
    async getData() {
      this.data = []
      var res = await this.$axios.get("https://padek.jawapos.com/wp-json/wp/v2/posts?per_page=12&tags=12817");
      for(var i = 0; i<res.data.length; i++){
        var _img = await this.getImage(res.data[i]['_links']['wp:featuredmedia'][0]['href']);
        console.log(_img);
        this.img.push(_img)
        this.data.push(res.data[i])
      }
    },
    async getImage(link) {
      var res = await this.$axios.get(link);
      return res.data.source_url
    }
  },
};
</script>