export default defineEventHandler(async(event)=>{
    const query = getQuery(event);

    const data = await $fetch(`http://localhost:3004/employees/${query.id}`)
    return data;
})