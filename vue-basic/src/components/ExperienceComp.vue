<template>
    <div>
        <div class="tabs w-full flex-nowrap overflow-y-scrollsssssssssssss">
            <span class="tab tab-bordered slider-button text-base xl:text-lg sm:grow"
                :class="[{ 'tab-active': i == selected }]" :key="i" v-for="e, i in experiences" @click="selected = i">{{
                        e.name
                }}</span>
        </div>
        <div class="mt-6 xl:mt-12 w-9/12 mx-auto">
            <h4 class="font-bold tracking-widest mt-4 text-2xl">{{ experiences[selected].name }}</h4>
            <h5 class="my-1 ml-2 text-base">{{ experiences[selected].where }}</h5>
            <p class="text-sm ml-2">{{ experiences[selected].date }}</p>
            <ul class="mt-5">
                <li :key="i" v-for="e, i in experiences[selected].skills">{{ e }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "ExperienceComp",
    props: {
        experiences: Array,
    },
    data() {
        return {
            selected: 0,
        }
    },
    methods: {
        select(x) {
            this.select = x
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/variable";

.tabs {
    span {
        font-family: "IBM Plex Mono", monospace;
        opacity: 0.9;
        color: $green;

        &.tab-active {
            color: $fucsia;
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }
}

h4 {
    font-family: "Montserrat", sans-serif;
    color: $green;
}

h5 {
    font-family: "IBM Plex Mono", monospace;
}

li {
    font-family: "IBM Plex Mono", monospace;

    &::before {
        content: "> ";
        color: $fucsia;
        font-weight: bold;
    }
}
</style>