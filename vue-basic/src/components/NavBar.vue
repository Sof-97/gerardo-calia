<template>
    <div>
        <nav>
            <ul>
                <li><span>01.</span> About</li>
                <li><span>02.</span> Work</li>
                <li><span>03.</span> Expertise</li>
                <li><span>04.</span> Contact</li>
                <li>Resume</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style lang="scss" scoped>
nav{
    ul{ 
        display: flex;
        list-style: none;
        li{
            color: #fff;
            padding: 10px;
            margin-right: 1rem;

            &:last-of-type{
                color: #47FFCE;
                border: 1px solid #47FFCE;
                padding: 10px;
                border-radius: 10px;
            }

            span{
                color: #47FFCE;
                margin-right: 0.2rem;
            }
        }
    }
}
</style>