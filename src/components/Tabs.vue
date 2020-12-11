<template>
    <section>
        <b-tabs v-model="activeTab">
            <b-tab-item label="List of Users">
                <Table />
            </b-tab-item>

            <b-tab-item label="Map">
                
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
import Table from './Table.vue'

    export default {
        data() {
            return {
                activeTab: 0
            }
        },
        components: {
            Table
        }
    }
</script>