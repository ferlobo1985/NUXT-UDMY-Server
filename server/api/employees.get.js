export default defineEventHandler((event)=>{
    console.log(event)

    return {
        hello:'World'
    }
})