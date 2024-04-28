export const getImageUrl = (path) => {
   return (new URL(`/assets/${path}`, import.meta.url).href);
};

//const src = computed(() => {
    //const path = new URL('@/assets/${path}/@', import.meta.url);
    //return `${path}/${props.src}`
//});

//function getImageUrl(name) {
  // return new URL(`./assets/{path}/{name}.png`, import.meta.url).href
//}