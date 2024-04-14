<template>
  <AppNavbar />

  <main class="max-h-[calc(100vh-48px)] scroll-mr-4 overflow-y-scroll">
    <div class="w-full sm:w-[876px] mx-auto pb-6 px-4">
      <h2 class="font-bold text-black text-sm mb-8 mt-12">Pokémons</h2>

      <div class="app-pokemon__list gap-x-6 sm:gap-x-4 gap-y-4">
        <div v-for="index in 24" :key="index"
          class="flex flex-col items-center justify-between h-48 w-full sm:w-[154px] mx-auto px-3 py-5 rounded-lg shadow-xl">
          <div class="flex flex-col items-center gap-3 text-center font-bold">
            <div class="h-10 flex items-center justify-center ">
              <img class="block" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="pokemon">
            </div>

            <h3 class="text-sm">Pikachu</h3>
            <p class="text-xs">cód: 25</p>
          </div>

          <div class="flex justify-center gap-1">
            <div class="rounded-full bg-teal-500 py-1 w-16">
              <p class="text-white text-center text-[8px] uppercase">
                GRASS
              </p>
            </div>

            <div class="rounded-full bg-purple-600 py-1 w-16">
              <p class="text-white text-center text-[8px] uppercase">
                Poison
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
</script>

<style lang="scss">
.app-pokemon {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, 154px);
    justify-content: center;
    row-gap: 16px;
  }
}
</style>