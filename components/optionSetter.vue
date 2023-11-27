<template>
  <div class="grid grid-cols-1 md:grid-cols-3 justify-items-center my-6">
    <div>
      <UButton
          color="emerald"
          :variant="variantSetter('instructions')"
          @click="setDisplayedTab('instructions')">
        Instructions
      </UButton>
    </div>
    <div>
      <UButton
          color="emerald"
          :variant="variantSetter('letter')"
          @click="setDisplayedTab('letter')">
        Letter Form
      </UButton>
    </div>
    <div>
      <UButton
          color="emerald"
          :variant="variantSetter('result')"
          @click="setDisplayedTab('result')">
        Result
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useDisplayedData();
const { setDisplayedTab } = store;
const { displayedTab } = storeToRefs(store);

function variantSetter(option: string) {
  return displayedTab.value === option ? 'solid' : 'outline';
}
</script>