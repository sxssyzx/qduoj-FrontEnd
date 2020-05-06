<template>
  <div>
    <panel class="container">
      <div slot="title">关于我们</div>
      <div class="content markdown-body">
        <p>山西省实验中学信息学竞赛队于2018年由祝日升教练领头，正式加入学校竞赛培养计划。经过多年努力，本竞赛队已经达到山西省第一梯队水平。</p>
        <p>如有加入意向，请联系：</p>
        <ul>
          <li>祝日升教练QQ：113126568</li>
          <li>山西省实验中学信息竞赛QQ群：621676168</li>
          <li>关注山西省实验中学（高中部）招生部门</li>
        </ul> 
      </div>
    </panel>

    <panel :padding="15" class="container">
      <div slot="title">活动日志</div>
      <div class="content">
        <p><b>未完待续</b></p>
        <hr /><br />
        <ul>
          <li><b>2021-10</b> LJY的中秋赛 </li>
          <li><b>2021-08</b> 第四届新生训练&加入 </li>
          <li><b>2021-08</b> NOI 2020 </li>
          <li><b>2021-06</b> ZYX的端午赛 </li>
          <li><b>2021-04</b> SXOI 2020 </li>
          <li><b>2020-12</b> NOIP 2020 </li>
          <li><b>2020-10</b> ZYX的中秋赛 </li>
          <li><b>2020-08</b> 第三届新生训练&加入 </li>
          <li><b>2020-06</b> WYY的端午赛 </li>
          <li><b>2020-05</b> SXOI 2020 </li>
          <li><b>2019-11</b> CSP-S 2019 </li>
          <li><b>2019-10</b> WYY的中秋赛 </li>
          <li><b>2019-08</b> 第二届新生训练&加入 </li>
          <li><b>2019-06</b> LR的端午赛 </li>
          <li><b>2018-11</b> NOIP 2018 </li>
          <li><b>2018-10</b> LR的中秋赛 </li>
          <li><b>2018-08</b> 第一届新生训练&加入 </li>

        </ul>
      </div>
    </panel>

  </div>
</template>

<script>
  import utils from '@/utils/utils'

  export default {
    data () {
      return {
        languages: []
      }
    },
    beforeRouteEnter (to, from, next) {
      utils.getLanguages().then(languages => {
        next(vm => {
          vm.languages = languages
        })
      })
    }
  }
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 20px;

    .content {
      font-size: 16px;
      margin: 0 50px 20px 50px;
      > ul {
        list-style: disc;
        li {
          line-height: 2;
          .title {
            font-weight: 500;
          }
        }
      }
    }
  }
</style>
