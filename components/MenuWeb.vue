<template>
  <div class="mt-5 flex-grow flex flex-col">
    <nav class="flex-1 px-2 pb-4 space-y-1">
      <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
      <router-link
        :to="'/'"
        class="
          bg-gray-100
          text-gray-900
          group
          flex
          items-center
          px-2
          py-2
          text-sm
          font-medium
          rounded-md
        "
      >
        <!--
              Heroicon name: outline/home

              Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
            -->
        <svg
          class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Dashboard
      </router-link>

      <router-link
        :to="'/jaluralternatif'"
        class="
          text-gray-600
          hover:bg-gray-50 hover:text-gray-900
          group
          flex
          items-center
          px-2
          py-2
          text-sm
          font-medium
          rounded-md
        "
      >
        <!-- Heroicon name: outline/users -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            text-gray-400
            group-hover:text-gray-500
            mr-3
            flex-shrink-0
            h-6
            w-6
          "
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
        Jalur Alternatif
      </router-link>

      <router-link
        :to="'/rawanmacet'"
        class="
          text-gray-600
          hover:bg-gray-50 hover:text-gray-900
          group
          flex
          items-center
          px-2
          py-2
          text-sm
          font-medium
          rounded-md
        "
      >
        <!-- Heroicon name: outline/folder -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="
            text-gray-400
            group-hover:text-gray-500
            mr-3
            flex-shrink-0
            h-6
            w-6
          "
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
        Rawan Macet
      </router-link>

      <router-link
        :to="'/nomorpenting'"
        class="
          text-gray-600
          hover:bg-gray-50 hover:text-gray-900
          group
          flex
          items-center
          px-2
          py-2
          text-sm
          font-medium
          rounded-md
        "
      >
        <!-- Heroicon name: outline/calendar -->
        <svg
          class="
            text-gray-400
            group-hover:text-gray-500
            mr-3
            flex-shrink-0
            h-6
            w-6
          "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Nomor Penting
      </router-link>

      <router-link
        :to="'/rumahmakan'"
        class="
          text-gray-600
          hover:bg-gray-50 hover:text-gray-900
          group
          flex
          items-center
          px-2
          py-2
          text-sm
          font-medium
          rounded-md
        "
      >
        <!-- Heroicon name: outline/inbox -->
        <svg
          class="
            text-gray-400
            group-hover:text-gray-500
            mr-3
            flex-shrink-0
            h-6
            w-6
          "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        Rumah Makan {{menu}}
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
 props: ['menu']
}
</script>