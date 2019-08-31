let code = {};

code.import = `
"usingComponents": {
    "i-radio-group": "../../dist/radio-group/index",
    "i-radio": "../../dist/radio/index"
}
`;
code.usage = `
<i-panel title="group-水果">
    <i-radio-group current="{{current}}" onChange="handleFruitChange">
        <i-radio a:for="{{fruit}}" position="{{position}}" a:key="{{item.id}}" value="{{item.name}}">
        </i-radio>
    </i-radio-group>
</i-panel>

<i-button onClick="handleClick" type="ghost">切换单选框位置</i-button>

<i-panel title="radio-动物">
    <i-radio value="{{animal}}" disabled="{{disabled}}" checked="{{checked}}" onChange="handleAnimalChange">
    </i-radio>
</i-panel>

<i-button onClick="handleDisabled" type="ghost">切换disabled状态</i-button>
`;

code.js = `
Page({
    data: {
        fruit: [{
            id: 1,
            name: '香蕉',
        }, {
            id: 2,
            name: '苹果'
        }, {
            id: 3,
            name: '西瓜'
        }, {
            id: 4,
            name: '葡萄',
        }],
        current: '苹果',
        position: 'left',
        animal: '熊猫',
        checked: false,
        disabled: false,
    },
    handleFruitChange({ detail = {} }) {
        this.setData({
            current: detail.value
        });
    },
    handleClick() {
        this.setData({
            position: this.data.position.indexOf('left') !== -1 ? 'right' : 'left',
        });
    },
    handleDisabled() {
        this.setData({
            disabled: !this.data.disabled
        });
    },
    handleAnimalChange({ detail = {} }) {
        this.setData({
            checked: detail.current
        });
    },

});
`;

export default code;