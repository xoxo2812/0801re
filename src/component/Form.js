import React from 'react'
import { Container } from 'react-bootstrap';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

export function Form(props) {
    
    return (
        <>
        <Container className='py-5'>
            <Accordion className='faq px-5 py-5'>
                <h2>밥이보약 FAQ</h2>
                <AccordionItem header="밥이보약을 전연령 고양이가 먹어도 되나요?">
                    <p>
                        밥이보약은 여러 종류가 있으며 빛나는 피모, 알맞은 체중, NO 스트레스,
                        <br/>걱정없는 헤어볼은 전연령이 먹을 수 있습니다. 활기찬 노후는 
                        시니어, <br/>탄탄한 성장은 키튼이 먹는 걸 권장합니다.
                    </p>
                </AccordionItem>

                <AccordionItem header="구독이벤트 신청은 어떻게 하나요?">
                    <p>
                        홈페이지의 맨 하단에 신청할 수 있는 양식이 있습니다. <br/>그 양식대로 
                        그대로 작성해주시면 됩니다.
                    </p>
                </AccordionItem>

                <AccordionItem header="종류는 마음대로 선택해도 되나요?">
                    <p>
                        요구란에 원하시는 종류를 적어주신다면 <br/>샘플용 사료를 보내드리도록 
                        하겠습니다.
                    </p>
                </AccordionItem>

                <AccordionItem header="쿠폰을 중복으로 받을 수 있나요?">
                    <p>
                        쿠폰은 중복으로 받을 수는 없으나 <br/> 샘플용 사료를 추가로 더 드릴수는 
                        있습니다.
                    </p>
                </AccordionItem>
            </Accordion>
            
        </Container>
        <div className='py-3 my-5 text-center' style={{backgroundColor : "#dce896"}}>

        <img src={props.dbpath.imgsrc} alt="배너" className='img-fluid mx-auto d-block' style={{borderRadius : `15px`}}/>
        </div>
        </>
    )
}
