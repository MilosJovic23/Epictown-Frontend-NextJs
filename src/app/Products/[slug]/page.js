
"use client"

import {useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";


export default function Products ({params}){


    const slugId= params.slug;
    const comicsValue=useRecoilValue(ComicsState)
    console.log(slugId)
    // if( !data ){
    //     return <h1>Ova stranice ne postoji</h1>
    // }

    return<>

        <p>Hello world</p>

    </>


};