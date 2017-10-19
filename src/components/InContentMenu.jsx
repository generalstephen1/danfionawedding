import React from "react"

import '../style/inContextMenu.scss'


class InContentMenu extends React.Component {
    state = {
        activeItem: '0',
    }

    generateElements = (items) => {
        const menuElements = [];
        const contentElements = [];
        const menuItemWidth = 100/items.length;
        let counter = 0;

        for (let item of items) {
            const isActive = `${counter}` === this.state.activeItem;
            const newMenuElement = this.newMenuElement(item.title, counter, menuItemWidth, isActive);
            const newContentElement = this.newContentElement(item.component, counter, isActive);

            menuElements.push(newMenuElement);
            contentElements.push(newContentElement);
            counter ++
        }

        return {menuElements, contentElements}
    }

    menuClickFn = (targetContent) => {
        this.setState(Object.assign(this.state, {activeItem: targetContent}))
    }

    newMenuElement = (title, id, menuItemWidth, isActive) => {
        const baseClass = 'in-content-menu__menu__item';
        const activeToggle = isActive ? `${baseClass}--active` : '';

        return(
            <li
                className={`${baseClass} ${activeToggle}`}
                onClick={() => {this.menuClickFn(`${id}`)}}
                style={{width:`${menuItemWidth}%`}}
                key={`${id}`} >
                { title }
            </li>
        )
    }
    newContentElement = (component, id, isActive) => {
        const baseClass = 'in-content-menu__content__item';
        const activeToggle = isActive ? `${baseClass}--active` : '';

        return(
            <div
                className={`${baseClass} ${activeToggle}`}
                key={`${id}`} >
                { component }
            </div>
        )
    }

    render = () => {
        const {menuElements, contentElements} = this.generateElements(this.props.items);
        return (
            <div className='in-content-menu'>
                <ul className='in-content-menu__menu centered-content'>
                    { menuElements }
                </ul>
                <div className='in-content-menu__content'>
                    { contentElements }
                </div>
            </div>
        )
    }
}


export default InContentMenu;