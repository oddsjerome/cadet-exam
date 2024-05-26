export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const result = await $fetch(config.public.apiBase);
  return result;
});
