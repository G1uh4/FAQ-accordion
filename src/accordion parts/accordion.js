


import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default function Example() {




    return (
        <div className='displayAccordion'>

        
        <img src='/girl-readin-book.png' alt='book' className='styleImage' />

        <Accordion className='styleWholeAccordion' allowZeroExpanded allowMultipleExpanded >
            <AccordionItem className='styleMain' >
                <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button'>
                        <span className='accordionText'>Is the app easy to use and how?</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="lol">
                    <p className='styleAccordionText'>
                        The app is user friendly, you can always contact our admin support.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>


            <AccordionItem className='styleMain'>
                <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button'>
                        <span className='accordionText'>How many accounts can I create?</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="lol">
                    <p className='styleAccordionText'>
                        The maximum limit for accounts on the application is 5.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>


            <AccordionItem className='styleMain'>
                <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button'>
                        <span className='accordionText'>How can I delete my account?</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="lol">
                    <p className='styleAccordionText'>
                        Profile -- Settings -- Delete Account -- Confirm
                    </p>
                </AccordionItemPanel>
            </AccordionItem>


            <AccordionItem className='styleMain'>
                <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button'>
                        <span className='accordionText'>How many users can use my account?</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="lol">
                    <p className='styleAccordionText'>
                        Only two users can use one account!
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
        </Accordion>


        </div>
    );
}


