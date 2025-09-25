<template>
    <h1>Employee by ID</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Sorry try again later</div>
    <div v-else>
        <p><strong>Full name</strong>:{{  data.fullname }}</p>
        <p><strong>Position</strong>:{{  data.postion }}</p>
        <p><strong>Age</strong>:{{  data.age }}</p>
    </div>
    <hr/>
    <button class="btn btn-primary" @click="editEmployee">
        Edit employee
    </button>
</template>

<script setup>
    const route = useRoute()
    const router = useRouter();

    /// REDIRECT TO EDIT
    function editEmployee(){
        router.push(`/form/edit/${route.params.id}`)
    }

    /// GET EMPLOYEE BY ID
    const {error,pending,data} = await useFetch(`/api/employees/byid?id=${route.params.id}`);
</script>