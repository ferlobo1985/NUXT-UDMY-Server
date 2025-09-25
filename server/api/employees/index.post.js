export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);

        if(body.fullname.length <= 3){
            throw createError({
                statusCode:404,
                statusMessage:'Name is too short'
            })
        }

        const data = await $fetch('http://localhost:3004/employees',{
            method:'POST',
            body
        })

        return data
    } catch(error){
        throw createError(error)
    }
})