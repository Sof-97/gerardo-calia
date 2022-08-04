<template>
    <div class="flex font-bold items-center text-white text-xl xl:text-3xl justify-end">
        <p class="mr-4 hidden">a</p>
        <div class="text-right animation-text">
            <div class="text-line uppercase">Web</div>
            <div class="text-line uppercase">Front-end</div>
            <div class="text-line uppercase">Back-end</div>
        </div>
        <p class="ml-3">developer</p>
    </div>
</template>

<script>
export default {
    name: "DeveloperComp",
};
</script>

<style lang="scss" scoped>
@import "../assets/_variable.scss";

* {
    font-family: 'IBM Plex Mono', monospace;
}

.animation-text {
    overflow: hidden;
    height: 2rem;

    .text-line {
        color: $fucsia;
        font-size: 1.5rem;
        line-height: 2rem;

        &:first-child {
            animation: animation-role ease 10s infinite;
        }
    }
}

@keyframes animation-role {

    //WEB
    0% {
        margin-top: 0;
    }

    5% {
        margin-top: 0;
    }

    //FRONT
    25% {
        margin-top: -2rem;
    }

    30% {
        margin-top: -2rem;
    }

    //BACK
    50% {
        margin-top: -4rem;
    }

    55% {
        margin-top: -4rem;
    }

    //FRONT
    75% {
        margin-top: -2rem;
    }

    80% {
        margin-top: -2rem;
    }

    //WEB
    100% {
        margin-top: 0;
    }
}
</style>
