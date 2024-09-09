<script setup>
defineProps({
  title: String,
  likes: Number
})
</script>

<template>
  <button class="bg-blue-500 text-white px-4 py-2 gap-3 justify-center gapx">Button</button>

  <a
    class="card-wrapper group pointer-events-auto relative grid aspect-square h-full w-full grid-rows-[1fr_auto] gap-3 rounded-lg group-[.is]/marker:!grid-rows-[200px_auto] sm:aspect-auto sm:grid-rows-[294px_auto] p-2"
    href="/property/wander-waikoloa-beach"
    ><div
      class="card relative isolate h-full w-full rounded-lg group-[.is]/marker:!transform-none overflow-hidden group-[.is]/marker:rounded-b-none"
    >
      <div
        class="scrollbar-hide pointer-events-auto relative inset-0 flex snap-x snap-mandatory overflow-x-auto w-full object-cover group-[.is]/marker:rounded-b-none h-full"
      >
        <img src="dummy.webp" />
        <img src="dummy.webp" />
        <img src="dummy.webp" />
      </div>
      <button
        class="pointer-events-auto absolute top-1/2 z-50 hidden h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-w-3005 opacity-0 backdrop-blur-xs transition-opacity hover:text-white group-hover:opacity-100 md:grid left-4"
      >
        <svg class="relative shrink-0 top-0 h-5 w-5">
          <use href="/icon.svg#icon-chevron-left"></use>
        </svg>
      </button>
      <button
        class="pointer-events-auto absolute top-1/2 z-50 hidden h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-w-3005 opacity-0 backdrop-blur-xs transition-opacity hover:text-white group-hover:opacity-100 md:grid right-4"
      >
        <svg class="relative shrink-0 left-[1px] top-0 h-5 w-5">
          <use href="/icon.svg#icon-chevron-right"></use>
        </svg>
      </button>
    </div>
    <div
      class="group-[.is]/marker:rounded-b-lg group-[.is]/marker:bg-black group-[.is]/marker:px-3 group-[.is]/marker:pb-3"
    >
      <div class="text-property-eyebrow text-white/60">Waikoloa, Hawaii</div>
      <div class="mb-0.5 flex items-center gap-2 font-medium">
        Wander Waikōloa Beach
        <div
          class="bg-[#2D3128] text-[#D1EAB3] inline-flex h-[18px] w-min select-none items-center gap-1 whitespace-nowrap rounded-sm px-1 text-xs"
        >
          New
        </div>
      </div>
    </div>
  </a>
</template>

<style>
.bg-red-100 {
  background-color: #ff000f;
}
.bg-red-200 {
  background-color: #ff001f;
}
.bg-red-300 {
  background-color: #ff002f;
}
.bg-red-400 {
  background-color: #ff003f;
}
.bg-red-500 {
  background-color: #ff004f;
}
</style>
