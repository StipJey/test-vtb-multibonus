import React from 'react';

import { Breadcrumbs } from './Breadcrumbs';

export default {
    title: 'VTB Multibonus/Breadcrumbs',
    component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const V1 = Template.bind({});
V1.args = {
    items: [
        {title: "Каталог товаров и услуг", url: "/catalog"},
        {title: "Бытовая техника"}
    ]
};

export const V2 = Template.bind({});
V2.args = {
    items: [
        {title: "Каталог товаров и услуг", url: "/catalog"},
        {title: "Бытовая техника", url: "/"},
        {title: "Холодильники и морозильники", url: "/"},
        {title: "Двухкамерные холодильники"},
    ]
};

export const V3 = Template.bind({});
V3.args = {
    items: [
        {title: "Каталог товаров и услуг", url: "/catalog"},
        {title: "Бытовая техника", url: "/"},
        {title: "Холодильники и морозильники", url: "/"},
        {title: "Холодильники", url: "/"},
        {title: "Двухкамерные холодильники"},
    ]
};
