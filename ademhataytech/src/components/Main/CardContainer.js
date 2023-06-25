import React from 'react'
import Card from './Card'

const CardContainer = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mt-10">
                <div className="container px-5 pb-14 mx-auto">
                <h3 className="text-3xl text-center my-5">Son Paylaşılanlar</h3>
                    <div className="flex flex-wrap -m-4">
                        <Card />
                        <Card />
                        <Card />
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CardContainer