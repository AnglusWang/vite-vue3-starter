<template>
    <h1 class="title">home.vue</h1>
    <router-link to="axios"><el-button>go To axios.vue</el-button></router-link>
    <router-link to="vuex"><el-button>go To vuex.vue</el-button></router-link>
</template>

<script lang="ts">
import axios from '../utils/axios'

export default {
    setup() {
        axios
            .get('/users/XPoet')
            .then((res) => {
                console.log('🚀 ~ file: home.vue ~ line 14 ~ setup ~ res', res)
            })

            .catch((err) => {
                console.log('🚀 ~ file: home.vue ~ line 18 ~ setup ~ err', err)
            })
    },
    mounted() {
        console.log('🚀 ~ file: home.vue ~ line 8 ~ mounted ~ mounted')
    }
}
</script>

<style lang="stylus" scoped>
.title
    color: #686
</style>
