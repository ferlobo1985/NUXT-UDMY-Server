export default defineSitemapEventHandler(async()=>{
    const employees = await $fetch('http://localhost:3004/employees')

    return [
        {loc:'/'},
        {loc:'/form/add'},
        ...employees.map(emp=> ({loc:`/employee/${emp.id}`}))
    ]

})