<template>
  <div class="grid grid-cols-1 md:grid-cols-3 justify-items-center my-6">
    <div>
      <UButton
          color="emerald"
          :variant="variantSetter('instructions')"
          @click="mode='instructions'">
        Instructions
      </UButton>
    </div>
    <div>
      <UButton
          color="emerald"
          :variant="variantSetter('letter')"
          @click="mode='letter'">
        Letter Form
      </UButton>
    </div>
    <div>
      <UButton
          color="emerald"
          :variant="variantSetter('result')"
          @click="mode='result'">
        Result
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const mode = ref('instructions')

function variantSetter(option: string) {
  return mode.value === option ? 'solid' : 'outline';
}
</script>