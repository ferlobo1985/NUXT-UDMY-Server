export default defineNitroPlugin((nitroApp)=>{

    nitroApp.hooks.hook('request',async(event)=>{
        try {
            const result = await getEmployees();
            console.log('Employees', result);
            event.context.employeeList = result
        } catch (error) {
            console.log(error)
        }
    })

    nitroApp.hooks.hook('beforeResponse',(event)=>{
        console.log('Run before response')
    })

    nitroApp.hooks.hook('afterResponse',(event)=>{
        console.log('Run after response')
    })
    
    nitroApp.hooks.hook('error',(event)=>{
        console.log('Run on ERROR')
    })

})