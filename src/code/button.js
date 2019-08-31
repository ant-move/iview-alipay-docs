let code = {};

code.import = `
"usingComponents": {
    "i-button": "../../dist/button/index"
}
`;
code.usage = `
一般用法

<i-button onClick="handleClick">默认按钮</i-button>
<i-button onClick="handleClick" type="error" long="true">联通两边按钮</i-button>
<i-button onClick="handleClick" type="primary">Primary</i-button>
<i-button onClick="handleClick" type="ghost">Ghost</i-button>
<i-button onClick="handleClick" type="info">Info</i-button>
<i-button onClick="handleClick" type="success">Success</i-button>
<i-button onClick="handleClick" type="warning">Warning</i-button>
<i-button onClick="handleClick" type="error">Error</i-button>

不同尺寸

<i-button onClick="handleClick" type="primary" size="large">大尺寸</i-button>
<i-button onClick="handleClick" type="primary" size="default">默认尺寸</i-button>
<i-button onClick="handleClick" type="primary" size="small">小尺寸</i-button>

圆角的不同尺寸

<i-button onClick="handleClick" type="success" shape="circle" size="large">大尺寸</i-button>
<i-button onClick="handleClick" type="success" shape="circle">默认尺寸</i-button>
<i-button onClick="handleClick" type="success" shape="circle" size="small">小尺寸</i-button>

<i-button onClick="handleClick" type="primary" loading="true">加载中按钮</i-button>

<i-button onClick="handleClick" type="primary" disabled>禁用按钮</i-button>
`;

export default code;