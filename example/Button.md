## Button

### Flat Button

`Flat Buttons` 用于通用功能和减少分层在屏幕上,使其更具可读性。

#### 示例

我们提供了多种不同状态的按钮：

```san Flat Button
<template>
    <section>
        <sm-button variants="primary">主色</sm-button>
        <sm-button variants="secondery">次色</sm-button>
        <sm-button variants="danger">危险</sm-button>
        <sm-button variants="warning">警告</sm-button>
        <sm-button variants="success">成功</sm-button>
        <sm-button variants="info">通知</sm-button>
        <sm-button disabled="{{!0}}">禁用</sm-button>
    </section>
</template>
<script>
import Button from '../src/Button';
import '../src/Button/Button.styl';
export default {
    components: {
        'sm-button': Button
    }
};
</script>
```

### Raised Button

`Raised Button` 用于在平面布局和页面上强调重要的功能。

### 示例

我们提供了多种不同状态的按钮：

```san Raised Button
<template>
    <section>
        <san-button variants="raised primary">主色</san-button>
        <san-button variants="raised secondery">次色</san-button>
        <san-button variants="raised danger">危险</san-button>
        <san-button variants="raised warning">警告</san-button>
        <san-button variants="raised success">成功</san-button>
        <san-button variants="raised info">通知</san-button>
        <san-button variants="raised info" disabled="{{!0}}">禁用</san-button>
    </section>
</template>
<script>
import Button from '../src/Button';
import '../src/Button/Button.styl';
export default {
    components: {
        'san-button': Button
    }
};
</script>
```

另外我们可以很容易地把 Icon 放到 Button 中来使用

示例：

```san 在 Button 中使用 Icon
<template>
    <section>
        <p class="button-icon-row">
            <sm-button variants="info">
                <sm-icon>edit</sm-icon>
            </sm-button>
            <sm-button variants="danger">
                <sm-icon style="margin-right: 6px">delete</sm-icon>删除
            </sm-button>
            <sm-button variants="success">
                分享<sm-icon style="margin-left: 6px">share</sm-icon>
            </sm-button>
        </p>
        <p class="button-icon-row">
            <sm-button variants="raised info">
                <sm-icon>edit</sm-icon>
            </sm-button>
            <sm-button variants="raised danger">
                <sm-icon style="margin-right: 6px">delete</sm-icon>删除
            </sm-button>
            <sm-button variants="raised success">
                分享<sm-icon style="margin-left: 6px">share</sm-icon>
            </sm-button>
        </p>
    </section>
</template>
<script>
import Button from '../src/Button';
import '../src/Button/Button.styl';
import Icon from '../src/Icon';
import '../src/Icon/Icon.styl';

export default {
    components: {
        'sm-button': Button,
        'sm-icon': Icon
    }
};
</script>
```

### Icon Button

`Icon Button` 可以在按钮内放置一个图标，点击效果呈圆形从中心点扩散。

### 示例

我们提供了多种不同状态的按钮：

```san Icon Button
<template>
    <section>
        <p class="button-icon-row">
            <san-button variants="primary">keyboard_arrow_down</san-button>
            <san-button variants="secondery">keyboard_arrow_left</san-button>
            <san-button variants="danger">keyboard_arrow_right</san-button>
            <san-button variants="warning">keyboard_arrow_up</san-button>
        </p>
        <p class="button-icon-row">
            <san-button variants="raised primary">keyboard_arrow_down</san-button>
            <san-button variants="raised secondery">keyboard_arrow_left</san-button>
            <san-button variants="raised danger">keyboard_arrow_right</san-button>
            <san-button variants="raised warning">keyboard_arrow_up</san-button>
        </p>
    </section>
</template>
<style>
.button-icon-row {
    margin: 1rem;
}
.button-icon-row>.sm-button {
    margin-right: 1rem
}
</style>
<script>
import {IconButton} from '../src/Button';
export default {
    components: {
        'san-button': IconButton
    }
};
</script>
```

## API

### 属性

| 名称 | 类型 | 默认值 | 描述|
| --- | --- | --- | --- |
| disabled | boolean | false | 禁用 |
| type | string | button | 与原生的 button[type] 属性一致，可选 `button` `submit` 和 `reset` |
| href | string? | null | 用做链接使用，点击时跳转地址 |
| target | string? | null | 当指定了 `href` 时可以再指定 `target`，与原生 <a> 标签的 target 取值一致|
| variants | Array<string> | null | 样式变种，预置了 `primary` `secondary` `danger` `warning` `success` `info` |

### 事件

|名称|描述|
|---|---|
|click|点击时触发|

### 插槽

|名称|描述|
|---|---|
|default|按钮的主内容|
