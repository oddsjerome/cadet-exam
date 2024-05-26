export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  const { id } = event.context.params;

  const result = await $fetch(config.public.apiBase + `/${id}`);
  return result;
});
