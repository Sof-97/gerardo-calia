<template>
    <div class="w-10/12 mx-auto">
        <form name="contact" method="POST" data-netlify="true" netlify>
            <div class="mt-4">
                <label>Your Name:</label>
                <input class="w-full mt-1 p-2" type="text" name="name" />
            </div>
            <div class="mt-4">
                <label>Your Email:</label>
                <input class="w-full mt-1 p-2" type="email" name="email" />
            </div>
            <div class="mt-4">
                <label>Message:</label>
                <textarea class="w-full mt-1 p-2" name="message"></textarea>
            </div>
            <div class="flex justify-center mt-4">
                <button class="text-slate-200 py-2 px-4" type="submit">send</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactComp'
}
</script>

<style lang="scss" scoped>
@import "../assets/variable";

label {
    font-family: "IBM Plex Mono", monospace;
}

input,
textarea {
    border-radius: 5px;
}

button {
    border-radius: 5px;
    font-family: "IBM Plex Mono", monospace;
    background-color: $green;
}
</style>