<template>
<div>
  <panel class="container">
    <div slot="title">{{$t('m.Frequently_Asked_Questions')}}</div>
    <div class="content markdown-body">
      <ul>
        <li>{{$t('m.Where_is_the_input_and_the_output')}} 
          <p>{{$t('m.Where_is_the_input_and_the_output_answer_part_1')}} <code>stdin</code> ('{{$t('m.Standard_Input')}}') {{$t('m.Where_is_the_input_and_the_output_answer_part_3')}} <code>stdout</code>
            ('{{$t('m.Standard_Output')}}') {{$t('m.Where_is_the_input_and_the_output_answer_part_5')}} <code>scanf</code> {{$t('m.Where_is_the_input_and_the_output_answer_part_6')}} <code>cin</code>
            {{$t('m.Where_is_the_input_and_the_output_answer_part_7')}} <code>printf</code> {{$t('m.Where_is_the_input_and_the_output_answer_part_8')}} <code>cout</code> {{$t('m.Where_is_the_input_and_the_output_answer_part_9')}} <code>{{$t('m.Runtime_Error')}}</code>.
          </p>
        </li>
        <li>{{$t('m.What_is_the_meaning_of_submission_execution_time')}} 
        <p>{{$t('m.What_is_the_meaning_of_submission_execution_time_answer')}} 
        </p>
        </li>
        <li>{{$t('m.How_Can_I_use_CPP_Int64')}} 
          <p>{{$t('m.How_Can_I_use_CPP_Int64_answer_part_1')}}<code>long long</code> {{$t('m.How_Can_I_use_CPP_Int64_answer_part_2')}} <code>cin/cout</code> {{$t('m.or')}} <code>%lld</code>, {{$t('m.using')}}<code> __int64</code> {{$t('m.How_Can_I_use_CPP_Int64_answer_part_3')}} <code>{{$t('m.Compile_Error')}}</code>.</p>
        </li>
        <li>{{$t('m.Java_specifications')}}
          <p>{{$t('m.Java_specifications_answer_part_1')}} <code>Main</code> {{$t('m.Java_specifications_answer_part_2')}} <code>Main</code> {{$t('m.Java_specifications_answer_part_3')}}</p>
        </li>
      </ul>
    </div>
  </panel>

  <panel :padding="15" class="container">
    <div slot="title">{{$t('m.Compiler')}} & {{$t('m.Judger')}}</div>
    <div class="content markdown-body">
      <ul>
        <li v-for="lang in languages">{{lang.name}} ( {{lang.description}} )
          <pre>{{lang.config.compile.compile_command}}</pre>
        </li>
      </ul>
    </div>
  </panel>

  <panel :padding="15" class="container">
    <div slot="title">{{$t('m.Result_Explanation')}}</div>
    <div class="content">
      <ul>
        <li><b>{{$t('m.Pending')}} & {{$t('m.Judging')}}</b> : {{$t('m.Pending_Judging_Description')}}</li>
        <li><b>{{$t('m.Compile_Error')}}</b> :	{{$t('m.Compile_Error_Description')}}
    </li>
        <li><b>{{$t('m.Accepted')}}</b> :	{{$t('m.Accepted_Description')}}</li>
        <li><b>{{$t('m.Wrong_Answer')}}</b> :	{{$t('m.Wrong_Answer_Description')}}</li>
        <li>
          <b>{{$t('m.Runtime_Error')}}</b>
          :	{{$t('m.Runtime_Error_Description')}}
        </li>
        <li><b>{{$t('m.Time_Limit_Exceeded')}}</b>
          :	{{$t('m.Time_Limit_Exceeded_Description')}}
        </li>
        <li><b>{{$t('m.Memory_Limit_Exceeded')}}</b> :	{{$t('m.Memory_Limit_Exceeded_Description')}}</li>
        <li><b>{{$t('m.System_Error')}}</b> :	{{$t('m.System_Error_Description')}}
        </li>
      </ul>
    </div>
  </panel>

  <panel :padding="15" class="container">
    <div slot="title">更多</div>
    <div class="content">
      <span>如有更多问题，请使用邮件联系站点管理员Haolin Zhang, </span>
      <a href="mailto:me@hlz.ink">me@hlz.ink</a>
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

<style lang="less" scoped>
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


  .content {
    font-size: 16px;
    margin: 0 50px 40px 50px;
    > ul {
      list-style: disc;
      li {
        font-size: 16px;
        margin-top: 20px;
        &:first-child {
          margin-top: 0;
        }
        p {
          font-size: 14px;
          margin-top: 5px;
        }
      }
    }
  }
</style>
