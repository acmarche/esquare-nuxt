export default (id) => {
    const config = useRuntimeConfig()
    const {pending: pendingGrr, data: dataGrr, error: errorGrr} =
        useFetch(
            `${config.public.API_URL}/notion-php/grr.php?id=${id}`, {}
        )
    return {
        pendingGrr,
        dataGrr,
        errorGrr
    }
}