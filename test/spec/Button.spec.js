/**
 * @file button test case
 * @author mengke01(kekee000@gmail.com)
 */

import {expect} from 'chai';
import san from 'san';
import {IconButton, Button} from 'src/Button';
import 'src/Button/Button.styl';


describe('Button', () => {
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
                    'ui-button': Button,
                    'ui-icon-button': IconButton
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

    it('button element', () => {
        let component = new Button();
        component.attach(viewport);
        expect(component.el.tagName).to.equal('BUTTON');
        expect(component.el.className).to.equal('sm-button');
        expect(component.data.get('type')).to.equal('button');
        expect(component.data.get('disabled')).to.equal(false);
        component.dispose();
    });

    it('component button', done => {
        let component = createComponent({
            template: '<div><ui-button disabled="{{disabled}}" on-click="onclick">Hello</ui-button></div>',
            initData() {
                return {
                    disabled: true
                };
            },
            onclick() {
                expect(component.children[0].data.get('disabled')).to.equal(false);
                component.dispose();
                done();
            }
        });
        expect(component.children[0].el.innerText.trim()).to.equal('HELLO');
        component.children[0].el.click();
        component.children[0].data.set('disabled', false);
        component.nextTick(() => {
            component.children[0].el.click();
        });
    });

    it('component iconbutton', done => {
        let component = createComponent({
            template: '<div><ui-icon-button on-click="handleClick">keyboard_arrow_down</ui-icon-button></div>',
            handleClick(e) {
                expect(e.target).to.deep.equal(component.children[0].el);
                component.dispose();
                done();
            }
        });
        let el = component.children[0].el;
        expect(el.querySelector('.sm-icon')).to.be.not.null;
        expect(el.querySelector('.sm-icon').innerText.trim())
            .to.equal('keyboard_arrow_down');
        el.click();
    });

    it('disabled button', done => {
        let component = createComponent({
            template: '<div>' +
                '<ui-button>disabled button</ui-button>' +
            '</div>',
            initData() {
                return {
                    href: 'hello'
                };
            }
        });

        let [button] = component.children;
        button.data.set('disabled', true);
        button.click();
        component.nextTick(() => {
            expect(button.el.disabled).to.equal(true);
            component.nextTick(() => {
                expect(button.el.disabled).to.equal(true);
                component.dispose();
                done();
            });
        });
    });
});
