export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const config = useRuntimeConfig();

    const {status, data, error} = await $fetch(
        `${config.public.API_URL}/notion-php/contact.php`, {
            method: "POST",
            body: body,
        }
    )

    return {
        status,
        data,
        error
    }
});
