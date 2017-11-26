<template>
  <div>
    {{$store.state.count}}
    {{count1}}
    {{count2}}

    <button @click="addAction">add</button>
    <button @click="reduceAction">reduce</button>

  </div>
</template>
<script>
  import ComponentB from './ComponentB'
  import ComponentC from './ComponentC'
  import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
  export default {
      data(){
          return {
              c: '1111'
          }
      },
    methods: {
      ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
    },
//    methods: {
//          change(arg){
//              this.c = arg;
//          }
//    },
    components: {
          ComponentB,
          ComponentC
    },
//    computed:{
//          count(){
//              return this.$store.state.count;
//          }
//    },
//    computed:mapState({
//        count:state=>state.count
//    }),
    computed:{
      ...mapState(["count","count1"]),
      ...mapGetters(["count2"])
    }
  }

</script>
<style>

</style>
