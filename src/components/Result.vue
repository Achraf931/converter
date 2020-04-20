<template>
    <div>
        <div class="containerResult" v-if="result !== ''">
            <p class="deviseResult">Devise: {{deviseSelectedTmp}}</p>
            <p class="result">{{result}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['result', 'deviseSelectedTmp']
    }
</script>
<style lang="scss" scoped>
    .containerResult {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        align-items: center;
    }

    .result, .deviseResult {
        background: -webkit-linear-gradient(66deg, #00D4FE, #0909);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        width: fit-content;
        text-align: center;
    }

    .result {
        font-size: 40px;
    }
</style>
