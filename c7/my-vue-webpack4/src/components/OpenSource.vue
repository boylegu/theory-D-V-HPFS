<template>
    <div class="projects">
        <project v-for="list in lists" :key="list.imageUrl" :list="list"> </project>
    </div>
</template>

<script>
    import data from '@/db.json';
    import Project from './Projects'

    export default {
        name: 'OpenSource',
        data() {
            return {
                lists: []
            }
        },
        created() {
            this.lists = data;
        },
        components: {
            Project
        }
    }
</script>

<style scoped>
    @media screen and (-webkit-min-device-pixel-ratio:0)and (min-width: 500px){
        .projects {
            column-count: 1;
            column-gap: 1em;
        }
    }
    @media screen and (-webkit-min-device-pixel-ratio:0) and (min-width: 500px){
        .projects {
            column-count: 2;
            column-gap: 1em;
        }
    }
    @media screen and (-webkit-min-device-pixel-ratio:0) and (min-width: 500px){
        .projects {
            column-count: 3;
            column-gap: 1em;
        }
    }
</style>
