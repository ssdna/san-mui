/**
 * @file Checkbox test case
 * @author asd123freedom@gmail.com
 */

import {expect} from 'chai';
import san from 'san';
import Radio from 'src/Radio';
import 'src/Radio/index.styl';

describe('Radio', () => {
    // prepare for testing
    const viewport = document.createElement('div');
    viewport.id = 'test';

    before(() => {
        document.body.appendChild(viewport);
    });

    after(() => {
        viewport.remove();
    });

    // testing component
    const createComponent = function (options) {
        let Component = san.defineComponent(
            Object.assign({
                components: {
                    'ui-radio': Radio
                },
                initData() {
                    return {};
                }
            }, options)
        );
        let component = new Component();
        component.attach(viewport);
        return component;
    };

    it('simple use', done => {
        let component = createComponent({
            template: `<div>
            <ui-radio label="单选1"
                value="simple1"
                name="group"
                s-ref="radio1"
                checked="{=inputValue=}"/>
            <ui-radio label="单选2"
                value="simple2"
                name="group"
                s-ref="radio2"
                checked="{=inputValue=}"/>
            </div>`,

            initData() {
                return {
                    inputValue: 'simple1'
                };
            }
        });
        let firstRadio = component.ref('radio1').el;
        let secondRadio = component.ref('radio2').el;
        let firstInput = firstRadio.querySelector('input');
        let secondInput = secondRadio.querySelector('input');
        expect(firstRadio.tagName).to.equal('LABEL');
        expect(secondRadio.tagName).to.equal('LABEL');
        expect(firstInput.checked).to.equal(true);
        expect(secondInput.checked).to.equal(false);
        secondRadio.click();
        component.nextTick(() => {
            expect(firstInput.checked).to.equal(false);
            expect(secondInput.checked).to.equal(true);
            component.dispose();
            done();
        });
    });

    it('disabled', done => {
        let component = createComponent({
            template: `<div>
            <ui-radio label="单选1"
                value="simple1"
                name="group"
                disabled
                s-ref="radio1"
                checked="{=inputValue=}"/>
            <ui-radio label="单选2"
                value="simple2"
                disabled
                s-ref="radio2"
                name="group"
                checked="{=inputValue=}"/>
            </div>`,

            initData() {
                return {
                    inputValue: 'simple1'
                };
            }
        });
        let firstRadio = component.ref('radio1').el;
        let secondRadio = component.ref('radio2').el;
        let firstInput = firstRadio.querySelector('input');
        let secondInput = secondRadio.querySelector('input');
        expect(firstRadio.tagName).to.equal('LABEL');
        expect(secondRadio.tagName).to.equal('LABEL');
        expect(firstInput.checked).to.equal(true);
        expect(secondInput.checked).to.equal(false);
        expect(firstInput.disabled).to.equal(true);
        secondRadio.click();
        component.nextTick(() => {
            expect(firstInput.checked).to.equal(true);
            expect(secondInput.checked).to.equal(false);
            component.dispose();
            done();
        });
    });
});
