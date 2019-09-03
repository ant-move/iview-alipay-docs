<template>
  <i-article>
    <article class="markdown-body entry-content p-5" itemprop="text">
      <h1>
        iView alipay
      </h1>
      <h3>
        一套高质量的支付宝小程序 UI 组件库
      </h3>
      <blockquote>
        <p>
          使用
          <a href="https://ant-move.github.io/website/" rel="nofollow">Antmove</a> 小程序转换器基于
          <a href="https://github.com/TalkingData/iview-weapp">iview-weapp</a> 转换得到。
        </p>
      </blockquote>
      <h2>
        快速上手
      </h2>
        <br>
      <h3>
        使用之前
      </h3>
      <p>
        在开始使用 iView alipay 之前，你需要先阅读
        <a
          href="https://docs.alipay.com/mini/framework/custom-component-overview"
          rel="nofollow"
        >支付宝小程序自定义组件</a> 的相关文档。
      </p>
      <h3>
        如何使用
      </h3>
      <p>
        下载 iView 的代码，将
        <code>dist</code> 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：
      </p>
      <ul>
        <li>添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：</li>
      </ul>
      <div class="highlight highlight-source-json">
        <pre><span class="pl-s"><span class="pl-pds">"</span>usingComponents<span class="pl-pds">"</span></span>: {
    <span class="pl-s"><span class="pl-pds">"</span>i-button<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>../../dist/button/index<span class="pl-pds">"</span></span>
}</pre>
      </div>
      <ul start="2">
        <li>在 axml 中使用组件：</li>
      </ul>
      <div class="highlight highlight-text-html-basic">
        <pre>&lt;<span class="pl-ent">i-button</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>primary<span class="pl-pds">"</span></span> <span class="pl-e">onClick</span>=<span class="pl-s"><span class="pl-pds">"</span>handleClick<span class="pl-pds">"</span></span>&gt;这是一个按钮&lt;/<span class="pl-ent">i-button</span>&gt;</pre>
      </div>
      <h3>预览</h3>
      <p>
        <img width='150px' src='https://cache.amap.com/ecology/tool/antmove/web/assets/iView-Aliapp.jpg'/>
      </p>
      <p>
          <img width="150px"  async src="../../images/iview/actionsheet.gif" alt=""/>
          <img width="150px" async src="../../images/iview/drawer.gif" alt=""/>
          <img width="150px" async src="../../images/iview/tabbar.gif" alt=""/>
      </p>
      <h3>
        IDE 预览
      </h3>
      <p>下载本项目到本地，使用支付宝 IDE 打开 iview-alipay 即可预览。</p>
      <blockquote>
        <p>
          预览时请在项目详情设置中开启
          <code>component2</code> 编译，详情可参考
          <a
            href="https://docs.alipay.com/mini/framework/custom-component-overview#%E4%BD%BF%E7%94%A8%E9%A1%BB%E7%9F%A5"
            rel="nofollow"
          >支付宝小程序自定义组件使用介绍</a>。
        </p>
      </blockquote>
      <h2>
        License
      </h2>
      <p>
        <a href="http://opensource.org/licenses/MIT" rel="nofollow">MIT</a>
      </p>
      <h2>
        感谢
      </h2>
      <p>感谢 TalkingData 团队对 ivew-weapp 的贡献，本项目基于 iview-weapp 转换而来，并做了支付宝小程序平台的适配兼容。</p>
    </article>
  </i-article>
</template>
<script>
import iArticle from "../../components/article.vue";
import iCode from "iCode";
import Code from "../../code/guide";
import Anchor from "../../components/anchor.vue";
import Study from "../../components/study.vue";

export default {
  components: {
    iArticle,
    iCode,
    Anchor,
    Study
  },
  data() {
    return {
      code: Code
    };
  },
  methods: {}
};
</script>