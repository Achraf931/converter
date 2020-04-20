<template>
<div>
    <input :class="{error: !$v.deviseToConvert.required || !$v.deviseToConvert.decimal, errorDecimal: !$v.deviseToConvert.decimal}" type="number" v-model="$v.deviseToConvert.$model" v-focus>
    <div>
        <div>
            <p :class="{selected: deviseSelected === index}" :key="index" @click="deviseSelected = index" v-for="(devise, index) in devises">{{index}}</p>
        </div>
    </div>
    <div @click="convert" class="buttonConvert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
    </div>
</div>
</template>
<script>
    import {decimal, required} from "vuelidate/lib/validators";

    export default {
        props: ['devises', 'rates'],
        data() {
            return {
                deviseToConvert: '',
                deviseSelectedTmp: '',
                deviseSelected: ''
            }
        },
        validations: {
            deviseToConvert: {
                required,
                decimal
            }
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        methods: {
            convert() {
                if (this.$v.deviseToConvert.required && this.$v.deviseToConvert.decimal && this.deviseSelected !== '') {
                    let result = this.deviseToConvert * this.rates[this.deviseSelected]
                    this.result = result.toFixed(2)
                    this.deviseSelectedTmp = this.deviseSelected
                    this.$emit('result', {result: this.result, deviseSelectedTmp: this.deviseSelectedTmp, deviseSelected: this.deviseSelected, deviseToConvert: this.deviseToConvert})
                    this.deviseToConvert = ''
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .errorDecimal {
        color: red!important;
    }
    .error {
        border-bottom: 1px solid red!important;
    }
    .selected {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
    }
    .buttonConvert {
        position: absolute;
        bottom: -25px;
        right: 25px;
        width: 50px;
        height: 50px;
        background: white;
        box-shadow: 0 0 8px lightgrey;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
    }
</style>
