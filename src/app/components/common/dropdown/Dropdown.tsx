import { InvisibleStyle } from "app/styles/common/CommonStyles";
import { useState } from "react";
import StyleSheetBuilder from "stylist/core/builder/StyleSheetBuilder";

interface DropdownProps {
    trigger: JSX.Element;
    content: JSX.Element | JSX.Element[];
    isVisible?: boolean;
    style?: StyleSheetBuilder;
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
    const [visible, isVisible] = useState(props.isVisible || false);

    const toggleDropdown = () => { isVisible(!visible) };

    return (
        <div className={''}>
            <div onClick={toggleDropdown}>{props.trigger}</div>
            <div className={visible ? '' : InvisibleStyle(props.style)}>{props.content}</div>
        </div>
    );
}

export default Dropdown;