<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative overflow-hidden">
      <div class="relative">
        <main class="mx-auto max-w-7xl px-4 mt-10">
          <div class="text-center">
            <h1
              class="
                text-2xl
                tracking-tight
                font-extrabold
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block xl:inline">Informasi Petunjuk</span>
            </h1>
            <h1
              class="
                text-4xl
                tracking-tight
                font-extrabold
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              <span class="block text-red-600 xl:inline">#PulangBasamo</span>
              <span class="block text-yellow-600 xl:inline"
                >Lebaran Nyaman 2022</span
              >
            </h1>
            <!-- <p
              class="
                mt-3
                mx-auto
                text-base text-gray-500
                sm:text-lg
                md:mt-5 md:text-xl
              "
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p> -->
          </div>
        </main>
      </div>
    </div>

    <div
      class="
        rounded-lg
        bg-gray-200
        overflow-hidden
        shadow
        divide-y divide-gray-200
        sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px
        m-10
      "
    >
      <div
        class="
          rounded-tl-lg rounded-tr-lg
          sm:rounded-tr-none
          relative
          group
          bg-white
          p-6
          focus-within:ring-2
          focus-within:ring-inset
          focus-within:ring-indigo-500
        "
      >
        <div>
          <span
            class="
              rounded-lg
              inline-flex
              p-3
              bg-green-50
              text-purple-700
              ring-4 ring-white
            "
          >
            <!-- Heroicon name: outline/clock -->
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
          </span>
        </div>
         <router-link :to="'/jaluralternatif'" class="mt-8">
          <h3 class="text-2xl font-medium pt-3">
            <a href="#" class="focus:outline-none">
              <!-- Extend touch target to entire panel -->
              <span class="absolute inset-0" aria-hidden="true"></span>
              Jalur Alternatif
            </a>
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            Doloribus dolores nostrum quia qui natus officia quod et dolorem.
            Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
        </router-link>
        <span
          class="
            pointer-events-none
            absolute
            top-6
            right-6
            text-gray-300
            group-hover:text-gray-400
          "
          aria-hidden="true"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
            />
          </svg>
        </span>
      </div>

      <div
        class="
          sm:rounded-tr-lg
          relative
          group
          bg-white
          p-6
          focus-within:ring-2
          focus-within:ring-inset
          focus-within:ring-indigo-500
        "
      >
        <div>
          <span
            class="
              rounded-lg
              inline-flex
              p-3
              bg-red-50
              text-purple-700
              ring-4 ring-white
            "
          >
            <!-- Heroicon name: outline/badge-check -->
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-red-500"
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
          </span>
        </div>
        <router-link :to="'/rawanmacet'" class="mt-8">
          <h3 class="text-2xl font-medium pt-3">
            <a href="#" class="focus:outline-none">
              <!-- Extend touch target to entire panel -->
              <span class="absolute inset-0" aria-hidden="true"></span>
              Titik Lokasi Rawan Macet
            </a>
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            Doloribus dolores nostrum quia qui natus officia quod et dolorem.
            Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
        </router-link>
        <span
          class="
            pointer-events-none
            absolute
            top-6
            right-6
            text-gray-300
            group-hover:text-gray-400
          "
          aria-hidden="true"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
            />
          </svg>
        </span>
      </div>

      <div
        class="
          relative
          group
          bg-white
          p-6
          focus-within:ring-2
          focus-within:ring-inset
          focus-within:ring-indigo-500
        "
      >
        <div>
          <span
            class="
              rounded-lg
              inline-flex
              p-3
              bg-sky-50
              text-sky-700
              ring-4 ring-white
            "
          >
            <!-- Heroicon name: outline/users -->
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
          </span>
        </div>
        <router-link :to="'/nomorpenting'" class="mt-8">
          <h3 class="text-2xl font-medium pt-3">
            <a href="#" class="focus:outline-none">
              <!-- Extend touch target to entire panel -->
              <span class="absolute inset-0" aria-hidden="true"></span>
              Nomor Penting
            </a>
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            Doloribus dolores nostrum quia qui natus officia quod et dolorem.
            Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
        </router-link>
        <span
          class="
            pointer-events-none
            absolute
            top-6
            right-6
            text-gray-300
            group-hover:text-gray-400
          "
          aria-hidden="true"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
            />
          </svg>
        </span>
      </div>

      <div
        class="
          relative
          group
          bg-white
          p-6
          focus-within:ring-2
          focus-within:ring-inset
          focus-within:ring-indigo-500
        "
      >
        <div>
          <span
            class="
              rounded-lg
              inline-flex
              p-3
     
 
              ring-4 ring-white
            "
          >
            <!-- Heroicon name: outline/cash -->
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
          </span>
        </div>
        <router-link :to="'/rumahmakan'" class="mt-8">
          <h3 class="text-2xl font-medium pt-3">
            <a href="#" class="focus:outline-none">
              <!-- Extend touch target to entire panel -->
              <span class="absolute inset-0" aria-hidden="true"></span>
              Informasi Rumah Makan
            </a>
          </h3>
          <p class="mt-2 text-sm text-gray-500">
            Doloribus dolores nostrum quia qui natus officia quod et dolorem.
            Sit repellendus qui ut at blanditiis et quo et molestiae.
          </p>
        </router-link>
        <span
          class="
            pointer-events-none
            absolute
            top-6
            right-6
            text-gray-300
            group-hover:text-gray-400
          "
          aria-hidden="true"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>