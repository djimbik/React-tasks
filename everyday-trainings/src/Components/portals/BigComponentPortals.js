import React from 'react';
import BlockForSixthModal from "./sixthModal/BlockForSixthModal";
import TooltipApp from "./tooltip/TooltipAPP";
import ParentCounter from "../useImperativeHandle/Counter/ParentCounter";
import BlockForForm from "../useImperativeHandle/Form/BlockForForm";
import SaveButton from "../useImperativeHandle/SaveButton/SaveButton";
import BlockForTimer from "../useImperativeHandle/Timer/BlockForTimer";

const BigComponentPortals = () => {
    return (
        <div>
            <BlockForSixthModal/>
            <TooltipApp/>
            <ParentCounter/>
            <BlockForForm/>
            <SaveButton/>
            <BlockForTimer/>
        </div>
    );
};

export default BigComponentPortals;