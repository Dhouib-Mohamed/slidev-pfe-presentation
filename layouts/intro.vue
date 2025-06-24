<template>
  <div class="slidev-layout intro grid " style="margin-top: 0; padding-top: 0">
    <CornerCurves class="absolute left-0 top-0 transform rotate-90" />
    <div class="flex flex-col justify-center text-center">
      <div class="flex justify-between items-start w-full px-0 pt-0" style="margin-bottom: 0.1em; margin-top: 0 ">
        <div class="flex flex-col items-center" style="margin-right: 0.5em;">
          <img :src="'/images/uc.png'" alt="Carthage University Logo" class="h-17 mb-1">
<!--          <p class="text-sm font-bold">{{ "University of Carthage" }}</p>-->
        </div>
        <div class="flex flex-col items-center">
          <img :src="'/images/insat.jpeg'" alt="INSAT Logo" class="h-17 mb-1">
<!--          <p class="text-sm font-bold" style="width: 18rem">{{ "National Institute of Sciences and Applied Technology (INSAT)" }}</p>-->
        </div>
      </div>

      <div class="text-center mt-2 p-2" style="margin: 1rem 0 3rem 0">
        <h2 class="text-lg font-bold text-primary-600 dark:text-primary-300">
          {{ "Improving the efficiency of the observability platform in a decentralized cloud environment" }}
        </h2>
      </div>

      <div class="grid grid-cols-7 gap-2 mt-2">
        <div class="col-span-2 flex flex-col items-center">
          <h3 class="text-md font-semibold">Presented By :</h3>
          <p class="text-lg font-bold text-secondary-500">{{ "Dhouib Mohamed" }}</p>
        </div>

        <div class="col-span-3 flex flex-col items-start px-2">
          <h3 class="text-md font-semibold mb-1">Jury :</h3>
          <ul class="list-none p-0 m-0 text-left">
            <li style="font-size: 0.8em;"><span class="font-bold">Jury President :</span> {{ "Ms. Sana Hamdi" }}</li>
            <li style="font-size: 0.8em;"><span class="font-bold">Reviewer :</span> {{ "Ms. Asma Ben Hassouna " }}</li>
            <li style="font-size: 0.8em;"><span class="font-bold">Academic Supervisor:</span> {{ "Mr. Aymen Sellaouti" }}</li>
            <li style="font-size: 0.8em;"><span class="font-bold">Company Supervisor:</span> {{ "Dr. Sven Thies" }} </li>
          </ul>
        </div>

        <div class="col-span-2 flex flex-col items-center">
          <h3 class="text-md font-semibold">Internship Company:</h3>
          <img :src="'/images/ic.png'" alt="Impossible Cloud Logo" class="h-16 mb-1 mt-2">
        </div>
      </div>

      <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
        {{ "Presented on: 25/06/2025" }}
      </div>
    </div>
    <AsGraphic
      type="zigzag"
      class="absolute top-20 -right-30"
    />
  </div>
</template>

<style>
.slidev-layout.intro {
  h1 {
    @apply text-6xl leading-20 font-display font-extrabold text-primary;
  }

  h1 + p {
    @apply opacity-60 -mt-4 text-2xl;
  }

  a {
    @apply text-secondary-400 hover:text-secondary-500 dark:(text-white hover:text-gray-200);
  }
}
</style>
