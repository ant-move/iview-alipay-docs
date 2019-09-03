<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="17">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                    <i-col span="3">
                        <Affix :offset-top="75">
                            <div class="catalogue" v-show="list.length">
                                <card dis-hover>
                                    <div class="catalogue-title">
                                        <template>目录</template>
                                    </div>
                                    <div class="catalogue-content">
                                        <ul>
                                            <li v-for="item in list">
                                                <a :href="'#' + item.path" @click.stop.prevent="handleClickLink(item.path)">{{ item.title }}</a>
                                            </li>
                                            <li v-if="need_api">
                                                <a href="#API" @click.stop.prevent="handleClickLink('API')">API</a>
                                            </li>
                                        </ul>
                                    </div>
                                </card>
                            </div>

                            <template>
                                <div style="margin-top: 20px"></div>
                                <div class="article-qrcode">
                                    <img width="150px" src='https://cache.amap.com/ecology/tool/antmove/web/assets/iView-Aliapp.jpg'/>
                                    
                                </div>
                            </template>
                        </Affix>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="footer">
            <div class="footer-main">
                <Row>
                    <i-col span="5">
                        <h4>
                            <Icon type="social-github"></Icon>
                            GitHub
                        </h4>
                        <ul>
                            <li>
                                <a href="https://github.com/ant-move/mini-iview" target="_blank">iView Alipay App</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview" target="_blank">iView</a>
                            </li>
                            <li>
                                <a href="https://github.com/TalkingData/iview-weapp" target="_blank">iView Weapp</a>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5">
                        <h4>
                            <Icon type="link"></Icon>
                            相关站点
                        </h4>
                        <ul>
                            <li>
                                <a href="https://ant-move.github.io/website/" target="_blank">Antmove</a> - 做最好的小程序转换器
                            </li>
                            <li>
                                <a href="https://www.talkingdata.com/" target="_blank">TalkingData</a> - 用数据的心智去超越
                            </li>
                            
                        </ul>
                    </i-col>
                    <i-col span="5" offset="2">
                        <h4>
                            <Icon type="chatbubbles"></Icon>
                            社区
                        </h4>
                        <ul>
                            <li>
                                <a href="https://github.com/ant-move/mini-iview/issues" target="_blank">反馈建议</a>
                            </li>
                            <li>
                                <a href="https://github.com/ant-move/mini-iview/issues/new" target="_blank">提交bug</a>
                            </li>
            
                            <li>
                                <a href="https://segmentfault.com/search?q=antmove" target="_blank">SegmentFault</a>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5" offset="2">
                        <div class="footer-aside">
                            <div class="footer-logo">
                                <img src="../images/logo-footer.png">
                            </div>

                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        
        <!-- todo 提问 -->
        <!--<div class="ask-question" @click="ask = true" v-if="lang === 'zh-CN'">-->
            <!--<Icon type="ios-people" size="20"></Icon>-->
            <!--<p>QQ群</p>-->
        <!--</div>-->
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navigate from '../config/navigate';
    import navMenu from './menu.vue';
    import bus from './bus';

    export default {
        inject: ['app'],
        components: {
            Navigate,
            navMenu
        },
        data () {
            return {
                list: [],
                need_api: false,
                donate: false,
                ask: false,
                activeKey: '',
                adCarousel: 0,
                ad_index: this.app.ad_index
            }
        },
        methods: {
            handleModalClose () {
                this.donate = false;
            },
            handleAskClose () {
                this.ask = false;
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/install-en',
                    '/docs/guide/start',
                    '/docs/guide/start-en',
                    '/docs/guide/i18n',
                    '/docs/guide/i18n-en',
                    '/docs/guide/theme',
                    '/docs/guide/theme-en',
                    '/docs/guide/iview-loader',
                    '/docs/guide/iview-loader-en',
                    '/overview',
                    '/overview-en',
                    '/docs/guide/update',
                    '/docs/guide/update-en'
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.activeKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.activeKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.activeKey = 'live';
                }  else {
                    // this.activeKey = 'guide';
                    this.activeKey = 'component'
                }
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            },
            // 控制锚点跳转
            handleClickLink (id) {
                const top = document.getElementById(id).offsetTop;
                window.location.hash = id;
                let scroll_top = top + 15;
                if (id === 'API') scroll_top -= 150;
                window.scrollTo(0, scroll_top);
            },
            handleAsideAd (name, isQQGroup = false) {
                if (isQQGroup) {
                    this.ask = true;
                }
            }
        },
        mounted () {
            this.updateActiveNav();

            const examples = this.$slots.default[0].elm.querySelectorAll('.example');

            // 有示例时，显示示例的目录，没有，显示标题为目录
            if (examples.length) {
                this.need_api = true;
                for (let i = 0; i < examples.length; i++) {
                    const title = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                    this.list.push({
                        title: title,
                        path: title
                    });
                }
            } else {
                this.need_api = false;
                const headers = this.$slots.default[0].elm.querySelectorAll('.anchor');
                for (let i = 0; i < headers.length; i++) {
                    const title = headers[i].querySelectorAll('h2')[0];
                    if (title) {
                        const title_name = title.innerHTML;
                        const path = headers[i].querySelectorAll('h2')[0].getAttribute('id');
                        this.list.push({
                            title: title_name,
                            path: path
                        });
                    }
                }
            }

            bus.$on('on-donate-show', () => {
                this.donate = true;
            })
        }
    }
</script>