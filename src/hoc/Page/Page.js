import React from 'react'
import Intro from '../../components/Intro/Intro';
import ReactPage from '../../components/ReactPage/ReactPage';
import NodePage from '../../components/NodePage/NodePage';
import FullStack from '../../components/FullStack/FullStack';

function Page(props) {
    const displayPage = (num) => {
        switch(num) {
            case 0:
                return <Intro/>;
            case 1:
                return <ReactPage/>;
            case 2:
                return <NodePage/>;
            case 3:
                return <FullStack/>;
            default:
                return <Intro/>;
        }
    }
    return (
        <div>
            {displayPage(props.page)}
        </div>
    )
}

export default Page
