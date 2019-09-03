<style>
    .doc-update .ivu-timeline .ivu-timeline-item-content{
        top: -14px;
    }
    .doc-update h2{
        margin: 0;
        font-weight: normal;
    }
    .doc-update code{
        margin: 8px 0 10px;
    }
    .doc-update ul{
        padding-left: 22px !important;
    }
    .doc-update-important{
        color: #3399ff;
    }
    .doc-update-loop.ivu-load-loop{
        animation-duration: 3s;
    }
</style>
<template>
    <i-article>
        <h1>更新日志</h1>
        <article class="doc-update">
            <Timeline pending>
                <Timeline-item>
                    <Anchor title="1.0.1" h2></Anchor>
                    <p>
                        <code>2019-09-03</code>
                    </p>
                    <p>修复 index 索引组件索引失效问题</p>
                    <p>修复 sticky 组件吸顶失效问题</p>
                    
                </Timeline-item>
                <Timeline-item>
                    <Anchor title="1.0.0" h2></Anchor>
                    <p>
                        <code>2019-08-30</code>
                    </p>
                    <p>支付宝小程序版 ivewui 组件发布。</p>
                    
                </Timeline-item>
            </Timeline>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';
    import issue from '../../components/issue.vue';
    import mention from '../../components/mention.vue';

    import version from '../../config/config';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor,
            issue,
            mention
        },
        data () {
            return {
                code: Code
            }
        },
        mounted () {
            window.localStorage.setItem('version', version.version);
        },
        methods: {
            handleBefore () {
                // window.open('http://v1.iviewui.com/docs/guide/update');
            }
        }
    }
</script>