export default defineEventHandler(async(event)=>{
    try {
        const body = await readBody(event);
        const data = await $fetch(`http://localhost:3004/employees/${body.id}`,{
            method:'DELETE'
        });
        return data;
    } catch (error) {
        throw createError(error)
    }
})