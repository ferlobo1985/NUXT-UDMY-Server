export default defineEventHandler(async(event)=>{
    try {
        const body = await readBody(event);
        const query = getQuery(event);

        const data = await $fetch(`http://localhost:3004/employees/${query.id}`,{
            method:'PATCH',
            body
        })
        return data;
    } catch (error) {
        throw createError(error)
    }
})