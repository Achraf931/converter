<template>
    <div class="home">
        <div>
            <h1>Converter</h1>
            <Form :devises="devises" @result="convert" :rates="rates"/>
        </div>
        <Result :result="result" :deviseSelectedTmp="deviseSelectedTmp"/>
    </div>
</template>

<script>
    import Form from '@/components/Form'
    import Result from '@/components/Result'
    export default {
        name: 'Home',
        data() {
            return {
                devises: [],
                rates: [],
                deviseToConvert: '',
                result: '',
                deviseSelectedTmp: ''
            }
        },
        components: {
            Form,
            Result
        },
        mounted() {
            console.log(process.env.VUE_APP_API_KEY)
            this.axios.get(`http://data.fixer.io/api/symbols?access_key=${process.env.VUE_APP_API_KEY}`).then(res => {
                this.devises = res.data.symbols
            })

            this.axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.VUE_APP_API_KEY}`).then(res => {
                this.rates = res.data.rates
            })
        },
        methods: {
            convert(result) {
                this.result = result.result
                this.deviseSelectedTmp = result.deviseSelectedTmp
                this.deviseSelected = result.deviseSelected
                this.deviseToConvert = result.deviseToConvert
            }
        }
    }
</script>
<style lang="scss">
    .home {
        width: 100vw;
        height: 100vh;

        & > div {
            padding: 20px;
            width: 100%;
            height: 50%;
        }

        & > div:first-child {
            position: relative;
            background: linear-gradient(66deg, #00D4FE, #0909);

            h1 {
                font-weight: 500;
                color: white;
            }

            & > div {
                margin-top: 80px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;

                input {
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid white;
                    outline: none;
                    color: white;
                    font-size: 40px;
                    max-width: 100px;
                }

                & > div > div:last-child {
                    border-radius: 4px;
                    overflow-y: auto;
                    overflow-x: hidden;
                    position: relative;
                    overscroll-behavior-y: contain;
                    scroll-snap-type: y mandatory;
                    max-height: 100px;
                    background: rgba(255, 255, 255, 0.2);
                    padding: 10px;

                    p {
                        color: white;
                        scroll-snap-align: center;
                    }
                }
                & > div > div:first-child input {
                    color: white;
                    font-size: 12px;
                }
            }
        }

        & > div:last-child {
            position: relative;
            background: white;
        }
    }
</style>
