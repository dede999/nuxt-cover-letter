export const useDisplayedData = defineStore('tabs', () => {
  const displayedTab = ref('instructions');

  function setDisplayedTab(tabName: string) {
    displayedTab.value = tabName;
  }

  return {
    displayedTab, setDisplayedTab,
  };
})
