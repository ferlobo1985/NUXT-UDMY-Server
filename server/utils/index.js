export async function getEmployees(){
    try {
        const result = await $fetch('http://localhost:3004/employees')
        return result;
    } catch (error) {
        throw error
    }
}