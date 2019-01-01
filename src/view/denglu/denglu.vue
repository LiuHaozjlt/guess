<template>
    <div>
        <hdr/>
        <dlzcbt/>
        <ipt/>
        <nm/>
         <dlbt/>
    </div>
</template>


<script>
import hdr from "@/componts/head_retu";
import ipt from "@/componts/inpt";
import dlzcbt from "@/componts/dengluzhuce_but";
import dlbt from "@/componts/denglu_but";
import nm from "@/componts/new_mima";
export default {
  components: {
    hdr,
    ipt,
    dlzcbt,
    dlbt,
    nm
  }
};
</script>
<style scoped>
  .denglu_marg{
    margin:0 20px;
  }
</style>


