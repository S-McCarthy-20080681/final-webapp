import React from 'react';
import { storiesOf } from '@storybook/react';

//import Layout from '../components/layout/Layout';
//import Timelog from '../components/Timelog/Timelog';
import Timelogs from '../containers/Timelog/Timelogs';

// const timelog = [
//     {
//         name: "April"
//     },
//     {
//         name: "May"
//     },
//     {
//         name: "June"
//     }
// ];

// storiesOf('Timelog container', module)
//     .add('default',
//     () => {
//         return <Timelogs />
//     }
// )

storiesOf('Timelog', module)
    .add('list of entries - by month',
        () => {
            return <Timelogs />;
    }
)

// storiesOf('General App Layout', module)
//     .add('default',
//     () => {
//         return <Layout />
//     }
// )