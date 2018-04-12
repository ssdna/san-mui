/**
 * @file radio component
 * @author liuchaofan(asd123freedom@gmail.com)
 */

import san, {DataTypes} from 'san';
import icon from '../Icon';
import {CenterRipple} from '../Ripple';
import cx from 'classnames';

export default san.defineComponent({
    /* eslint-disable max-len */
    template: `
        <label class="{{mainClass}}" on-click="handleClick($event)">
            <input type="radio"
                disabled="{{disabled}}"
                name="{{name}}"
                value="{{value}}"
                on-change="handleChange($event)"
                checked="{= checked =}">
            <div class="sm-radio-wrapper">
                <div class="sm-radio-label {{labelClass}}" san-if="label && labelLeft">{{label}}</div>
                <div class="sm-radio-icon">
                    <sm-center-ripple class="sm-radio-ripple-wrapper" san-ref="ripple"></sm-center-ripple>
                    <svg
                        class="sm-radio-icon-uncheck sm-radio-svg-icon {{iconClass}}"
                        san-if="!checkedIcon"
                        viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    </svg>
                    <svg
                        class="sm-radio-icon-checked sm-radio-svg-icon {{iconClass}}"
                        san-if="!uncheckIcon"
                        viewBox="0 0 24 24">
                        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    </svg>
                    <sm-icon san-if="uncheckIcon" class="sm-radio-icon-uncheck {{iconClass}}">{{uncheckIcon}}</sm-icon>
                    <sm-icon san-if="checkedIcon" class="sm-radio-icon-checked {{iconClass}}">{{checkedIcon}}</sm-icon>
                </div>
                <div class="sm-radio-label {{labelClass}}" san-if="label && !labelLeft">{{label}}</div>
            </div>
        </label>
    `,
    /* eslint-enable max-len */
    components: {
        'sm-icon': icon,
        'sm-center-ripple': CenterRipple
    },
    computed: {
        mainClass() {
            return cx(
                'sm-radio',
                {
                    'label-left': this.data.get('labelLeft'),
                    'disabled': this.data.get('disabled'),
                    'no-label': !this.data.get('label')
                }
            );
        }
    },
    initData() {
        return {
            name: '',
            value: '',
            label: '',
            labelLeft: false,
            labelClass: '',
            uncheckIcon: '',
            checkedIcon: '',
            iconClass: '',
            checked: ''
        };
    },
    dataTypes: {
        name: DataTypes.string,
        value: DataTypes.string,
        label: DataTypes.string,
        labelLeft: DataTypes.bool,
        labelClass: DataTypes.string,
        uncheckIcon: DataTypes.string,
        checkedIcon: DataTypes.string,
        iconClass: DataTypes.string,
        checked: DataTypes.string
    },
    handleClick(e) {
        if (this.data.get('disabled')) {
            return;
        }
        // 点击label，同时也会出发INPUT的点击事件。这里需要过滤一下，否则ripple会click两次
        if (e.target.tagName === 'INPUT') {
            return;
        }
        this.ref('ripple').click();
    },
    handleTouchStart(event) {
    },
    handleTouchEnd() {
    },
    handleChange(e) {
        this.fire('change', e);
    },
    attached() {
        this.watch('checked', val => {
            this.fire('input-change', val);
        });
    }
});
