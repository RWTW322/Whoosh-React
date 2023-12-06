import { ExpressDelivery } from "./ExpressDelivery";
import { Info } from "./Info";
import { MainContent } from "./MainContent";
import { Partners } from "./Partners";
import { PaymentMethods } from "./PaymentMethods";
import { Sepline } from "./Sepline";
import { WhatWeDo } from "./WhatWeDo";

export function Main() {

    return (
        <main className="main">
            <MainContent />
            <Info />
            <Sepline />
            <Partners />
            <WhatWeDo />
            <PaymentMethods />
            <Sepline />
            <ExpressDelivery />
        </main>
    )
}