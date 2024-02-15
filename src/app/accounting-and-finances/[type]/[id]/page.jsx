"use client"

import React from 'react'

import SubService from '@/components/accounting-and-finances/SubService'

const page = ({ params = {} }) => {
    const { id: type } = params

    console.log(params, "params");

    const types = {
        "vat-consultancy": {
            mixedtitle: [
                {
                    title: "Vat ",
                    isBold: true,
                },
                {
                    title: "Consultancy",
                    isBold: false,
                },
            ],
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing.",
            type: "vatconsultancy",
        },
        "cfo-service": {
            mixedtitle: [
                {
                    title: "Cfo ",
                    isBold: true
                },
                {
                    title: "Services",
                    isBold: false
                }
            ],
            type: "cfoservices",
            description: "Lorem ipsum dolor sit amet consectetur. Vel mi mattis lacus dolor euismod luctus vitae. Elementum aliquam enim sit posuere mauris viverra lorem. Augue magna malesuada tristique tempus rhoncus facilisis odio commodo. Diam ac luctus tortor diam eros adipiscing.",
            type: "vatconsultancy"
        },
    }

    const currentType = type in types ? types[type] : types['vat-consultancy']

    return (
        <>
            <SubService
                mixedtitle={currentType.mixedtitle}
                description={currentType.description}
                services={currentType.type}
            />
        </>
    )
}

export default page
