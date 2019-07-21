<template>
    <div class="project">
        <div class="projectsDetails">
            <img :src="list.imageUrl" :alt="list.title">
            <h4>{{ list.title }}</h4>
            <p>{{ list.description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Projects",
        props: ['list'],
    }
</script>

<style scoped>
    .project {
        background: #F5F5F5;
        display: inline-block;
        margin: 0 0 1em;
        width: 100%;
        cursor: pointer;
        -webkit-perspective: 1000;
        -webkit-backface-visibility: hidden;
        transition: all 100ms ease-in-out;
    }
    .project:hover {
        transform: translateY(-0.5em);
        background: #EBEBEB;
    }
    img {
        display: block;
        width: 100%;
    }
</style>