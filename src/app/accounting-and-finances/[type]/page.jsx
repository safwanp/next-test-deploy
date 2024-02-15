import SingleService from '@/components/accounting-and-finances/SingleService'
import React from 'react'


const AccountingType = ({ params = {} }) => {
    const type = params.type

    const types = {
        auditing: {
            title: "Auditing",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing.",
            image: "/images/accounting-small-nogradient-page-head.svg",
            titleArray: [
                {
                    title: "Managment ",
                    isBold: true,
                },
                {
                    title: "facilitates the Services ",
                    isBold: false,
                },
                {
                    title: "for a business need",
                    isBold: true,
                },
            ],
        },
        accounting: {
            title: "Accounting",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing.",
            image: "/images/accounting-small-nogradient-page-head.svg",
            titleArray: [
                {
                    title: "Accounting ",
                    isBold: true,
                },
                {
                    title: "facilitates the Services ",
                    isBold: false,
                },
                {
                    title: "for a business need",
                    isBold: true
                }
            ],
        },
        taxation: {
            title: "Taxation",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing.",
            image: "/images/tax-return-page-head.svg",
            titleArray: [
                {
                    title: "Account supevision ",
                    isBold: true,
                },
                {
                    title: "facilitates the Services ",
                    isBold: false,
                },
                {
                    title: "for a business need",
                    isBold: true,
                },
            ],
        },
    }

    const currentType = type in types ? types[type] : types['accounting']

    return (
        <>
            <SingleService
                pageHeadTitle={currentType.title}
                pageHeadDescription={currentType.description}
                pageHeadImage={currentType.image}
                titleArray={currentType.titleArray}
                cardType={type}
            />
        </>
    )
}

export default AccountingType
