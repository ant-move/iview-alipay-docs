let code = {};

code.import = `
"usingComponents": {
    "i-page": "../../dist/page/index"
}
`;
code.usage = `
带有文字的按钮

<i-page current="{{ current }}" total="5" onChange="handleChange">
    <view slot="prev">Prev</view>
    <view slot="next">Next</view>
</i-page>

带有文字和图标的按钮

<i-page current="{{ current }}" total="5" onChange="handleChange">
    <view slot="prev">
        <i-icon type="return"></i-icon>
        上一步
    </view>
    <view slot="next">
        下一步
        <i-icon type="enter"></i-icon>
    </view>
</i-page>

隐藏数字

<i-page current="{{ current }}" total="5" simple onChange="handleChange">
    <view slot="prev">Prev</view>
    <view slot="next">Next</view>
</i-page>

只显示数字

<i-page current="{{ current }}" total="5" mode="number" onChange="handleChange"></i-page>

显示点

<i-page current="{{ current }}" total="5" mode="pointer" onChange="handleChange"></i-page>
`;

code.js = `
Page({
    data: {
        current: 1
    },
    handleChange ({ detail }) {
        const type = detail.type;
        if (type === 'next') {
            this.setData({
                current: this.data.current + 1
            });
        } else if (type === 'prev') {
            this.setData({
                current: this.data.current - 1
            });
        }
    }
});
`;

export default code;