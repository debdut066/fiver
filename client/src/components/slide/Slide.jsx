import React from 'react'
import "./Slide.scss"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Slide = ({ children }) => {
    return (
        // <div className='slide'>
        //     <div className="container">
        //         {/* <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
        //             {children}
        //         </Slider> */}
        //         <Carousel>
        //             <CarouselContent className="-ml-4">
        //                 <CarouselItem className="pl-4">
        //                     {children}
        //                 </CarouselItem>
        //             </CarouselContent>
        //             <CarouselPrevious />
        //             <CarouselNext />
        //         </Carousel>
        //     </div>
        // </div>
        <div className='slide'>
            <Carousel
                opts={{
                    align: "start",
                }}
                orientation="horizontal"
                className="w-full max-w-sm"
            >
                <CarouselContent className="-ml-4">
                    <CarouselItem className="pl-4">
                        {children}
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Slide